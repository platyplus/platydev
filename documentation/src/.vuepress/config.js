const capitalize = s => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}
const { description } = require('../../package')
const { workspaces } = require(`../../../package`)
const glob = require('glob')
const path = require('path')
const yaml = require('yaml')
const fs = require('fs')
const { getPackages } = require('@lerna/project')
const chartReadmes = [
  ...glob.sync(path.resolve('../charts/**/README.md')),
  ...glob.sync(path.resolve('../*/helm/README.md'))
]
const chartPages = chartReadmes
  .reduce((aggr, filePath) => {
    const chartPath = path.join(filePath, '../Chart.yaml')
    try {
      const chart = yaml.parse(fs.readFileSync(chartPath).toString())
      const name = chart.name
      aggr.push({
        name,
        path: `/charts/${name}.html`,
        filePath
      })
    } catch {
      console.log('Impossible to read/parse', chartPath)
    }

    return aggr
  }, [])
  .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))

const chartSideBar = chartPages.map(page => [page.path, capitalize(page.name)])

const packages = async () => {
  const result = await getPackages(process.cwd())
  return result
    .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    .filter(p => !p.private)
    .filter(p => {
      if (fs.existsSync(path.join(p.location, 'README.md'))) {
        return true
      }
      return false
    })
}

const packageSideBar = async () =>
  (await packages()).map(curr => [
    `/packages/${curr.name}`,
    capitalize(curr.name)
  ])

const packagePages = async () =>
  (await packages()).map(curr => ({
    name: capitalize(curr.name),
    path: `/packages/${curr.name}.html`,
    filePath: path.join(curr.location, 'README.md')
  }))

const applicationsPages = workspaces.packages
  .reduce((aggr, entry) => {
    if (entry.endsWith('/*')) {
      const dir = entry.slice(0, -2)
      const configPath = path.join('..', dir, '.platy.yaml')
      if (fs.existsSync(configPath)) {
        const strConfig = fs.readFileSync(configPath).toString()
        try {
          const config = yaml.parse(strConfig)
          if (config.name) {
            const readme = path.resolve('..', dir, 'README.md')
            if (fs.existsSync(readme)) {
              aggr.push({
                name: config.name,
                path: `/applications/${dir}.html`,
                filePath: readme
              })
            }
          }
        } catch {
          console.log('Impossible to parse file', configPath)
        }
      }
    }
    return aggr
  }, [])
  .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))

const applicationsSideBar = applicationsPages.map(app => [
  app.path,
  capitalize(app.name)
])

module.exports = async ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
  isServer //
}) => ({
  dest: './dist',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Platy DevTools',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  additionalPages: [
    ...chartPages,
    ...(await packagePages()),
    ...applicationsPages
  ],

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'platyplus/platydev',
    editLinks: false,
    docsDir: 'documentation/src',
    editLinks: true,
    editLinkText: 'Edit this page',
    lastUpdated: false,
    smoothScroll: true,
    nav: [
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'CLI',
        link: '/cli/'
      },
      {
        text: 'Applications',
        link: '/applications/'
      },
      {
        text: 'Helm Charts',
        link: '/charts/'
      },
      {
        text: 'Packages',
        link: '/packages/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'getting-started',
            'hasura-full-stack',
            'technologies',
            'development-principles'
          ]
        }
      ],
      '/applications/': [
        {
          title: 'Applications',
          collapsable: false,
          children: [['', 'Intro'], ...applicationsSideBar]
        }
      ],
      '/charts/': [
        {
          title: 'Charts',
          collapsable: false,
          children: [['', 'Introduction'], ...chartSideBar]
        }
      ],
      '/packages/': [
        {
          title: 'Packages',
          collapsable: false,
          children: [...(await packageSideBar())] // * ['', 'Intro']
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom']
})

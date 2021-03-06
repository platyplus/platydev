# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.9.2](https://github.com/platyplus/platydev/compare/@platyplus/devtools@0.9.1...@platyplus/devtools@0.9.2) (2021-01-26)


### Bug Fixes

* correct import ([60bee2d](https://github.com/platyplus/platydev/commit/60bee2d62db7b84b83e2ae9410685219012f6244))





## [0.9.1](https://github.com/platyplus/platydev/compare/@platyplus/devtools@0.9.0...@platyplus/devtools@0.9.1) (2021-01-26)


### Bug Fixes

* do not throw error if git user info is not available ([a5c1db6](https://github.com/platyplus/platydev/commit/a5c1db64cb34e3a0892b30842f5ada357a891094))


### Performance Improvements

* remove source code out of npm packages ([d6876c6](https://github.com/platyplus/platydev/commit/d6876c64efa6f12afd9aa0fd5c618c0e3ba3c705))





# [0.9.0](https://github.com/platyplus/platydev/compare/@platyplus/devtools@0.8.0...@platyplus/devtools@0.9.0) (2021-01-12)


### Features

* working on metadata and vue ([db19a7e](https://github.com/platyplus/platydev/commit/db19a7ee686a6cc34ef874e2dc8ab044268f98b7))





# [0.8.0](https://github.com/platyplus/platydev/compare/@platyplus/devtools@0.7.0...@platyplus/devtools@0.8.0) (2020-12-09)


### Bug Fixes

* copy hbp migrations and metadata from hasura absolute path ([4c63322](https://github.com/platyplus/platydev/commit/4c6332203395356a7d2cfcee49cf988592f33337))


### Features

* hBP Nuxt module ([46f3162](https://github.com/platyplus/platydev/commit/46f3162fe1cd100153a37e255fde13ff2a78da26))





# [0.7.0](https://github.com/platyplus/platydev/compare/@platyplus/devtools@0.6.5...@platyplus/devtools@0.7.0) (2020-12-07)


### Features

* nuxt service ([60e5848](https://github.com/platyplus/platydev/commit/60e58482c3e7a51ad76c828bc84f5fcbcbac5b17))





## [0.6.5](https://github.com/platyplus/platydev/compare/@platyplus/devtools@0.6.4...@platyplus/devtools@0.6.5) (2020-12-06)


### Bug Fixes

* exec init service script THEN load template ([b979b6f](https://github.com/platyplus/platydev/commit/b979b6f6f25ba7a5712db4f135158b6faab20c62))
* warn missing requirements on stderr, not stdout ([ce5e5bd](https://github.com/platyplus/platydev/commit/ce5e5bd76a60c4333c862e00038bee69a2449170))


### Performance Improvements

* add \`git cz\` to recommended installations ([bc8accb](https://github.com/platyplus/platydev/commit/bc8accb6eec0055735ff16521806cf8552a122a2))
* sync project after creating a service ([b635079](https://github.com/platyplus/platydev/commit/b635079032d3d0e9b1faf098b50d4696faa7c5c6))





## [0.6.4](https://github.com/platyplus/platydev/compare/@platyplus/devtools@0.6.3...@platyplus/devtools@0.6.4) (2020-12-06)


### Bug Fixes

* avoid symlink issue on monorepo path ([68c2a91](https://github.com/platyplus/platydev/commit/68c2a9193c4e031f2507703219ded7127a5fc53d))
* configure hasura service name in HBP chart when hasura is not embedded ([2a920a6](https://github.com/platyplus/platydev/commit/2a920a6fe38c1e18b74b121b88dd9abc6149b696))
* correct migration and metadata directories in Hasura docker file ([9c441e4](https://github.com/platyplus/platydev/commit/9c441e425f50128a1029872ddf7ab62b1c64f2fe))
* remove absurd imageConfig tag in values.yaml ([42cf708](https://github.com/platyplus/platydev/commit/42cf7080f564cb42c5834fc5910e835ed185850e))





## [0.6.3](https://github.com/platyplus/platydev/compare/@platyplus/devtools@0.6.2...@platyplus/devtools@0.6.3) (2020-12-04)


### Bug Fixes

* fetch latest chart version from charts.platy.dev ([13e8d33](https://github.com/platyplus/platydev/commit/13e8d33bb6dd4617d96514d2fcb4976d8060c2ec))





## [0.6.2](https://github.com/platyplus/platydev/compare/@platyplus/devtools@0.6.1...@platyplus/devtools@0.6.2) (2020-12-04)


### Bug Fixes

* add author information to the initial commit ([e9d9d0a](https://github.com/platyplus/platydev/commit/e9d9d0a68dd10331758245302710f1c60c97326e))
* add dot files to templates in transpiled distribution ([4bd5445](https://github.com/platyplus/platydev/commit/4bd5445b3dd40ccbc5183e0065d4f63c064a55ce))





## [0.6.1](https://github.com/platyplus/platydev/compare/@platyplus/devtools@0.6.0...@platyplus/devtools@0.6.1) (2020-12-04)


### Bug Fixes

* init git repo in the initMonorepo script ([049ec6e](https://github.com/platyplus/platydev/commit/049ec6eb21599a3fe080f6a2deda599d032348f2))





# [0.6.0](https://github.com/platyplus/platydev/compare/@platyplus/devtools@0.5.5...@platyplus/devtools@0.6.0) (2020-12-04)


### Bug Fixes

* typo ([c6671f7](https://github.com/platyplus/platydev/commit/c6671f70b273bc7a934c2830ab5ce8c3ab98cd1f))
* **cli:** change relative to absolute paths ([8f59bca](https://github.com/platyplus/platydev/commit/8f59bca8695bb4aeef66a8286a4dae46b7045377))
* typo in hasura template ([22dd0d0](https://github.com/platyplus/platydev/commit/22dd0d0aa487137d1aee2a0dcedb7ca813d39d9a))


### Features

* **cli:** select resource kind when running platy create with no furher arguments ([b4f1226](https://github.com/platyplus/platydev/commit/b4f1226212aa5f0250b47a5d32fc45d3d406fc67))





## [0.5.5](https://github.com/platyplus/platydev/compare/@platyplus/devtools@0.5.4...@platyplus/devtools@0.5.5) (2020-12-03)


### Bug Fixes

* **cli:** don't raise an error when no project exists ([7c9abf7](https://github.com/platyplus/platydev/commit/7c9abf7f1246f4b7bae48b9b190d9f0b6a8a89bf))


### Performance Improvements

* warn when a required program is not installed ([b450a1e](https://github.com/platyplus/platydev/commit/b450a1e340f37e8e8e43ee481f9a3a50f693bc91))





## [0.5.4](https://github.com/platyplus/platydev/compare/@platyplus/devtools@0.5.3...@platyplus/devtools@0.5.4) (2020-12-03)

**Note:** Version bump only for package @platyplus/devtools





## [0.5.3](https://github.com/platyplus/platydev/compare/@platyplus/devtools@0.5.2...@platyplus/devtools@0.5.3) (2020-12-03)


### Bug Fixes

* correct lerna types ([26fa5ec](https://github.com/platyplus/platydev/commit/26fa5ec3fe3cb2720f1ef57500c3c089ac5d6773))





## [0.5.2](https://github.com/platyplus/platydev/compare/@platyplus/devtools@0.5.1...@platyplus/devtools@0.5.2) (2020-12-03)

**Note:** Version bump only for package @platyplus/devtools





## [0.5.1](https://github.com/platyplus/platydev/compare/@platyplus/devtools@0.5.0...@platyplus/devtools@0.5.1) (2020-12-03)

**Note:** Version bump only for package @platyplus/devtools





# [0.5.0](https://github.com/platyplus/platydev/compare/@platyplus/devtools@0.4.4...@platyplus/devtools@0.5.0) (2020-12-03)


### Bug Fixes

* do not set wildcard version to helm dependencies when using remote platy.dev helm repo ([a780d13](https://github.com/platyplus/platydev/commit/a780d13c685b3e587be293380fa60299a7079eb6))
* use file:// in chart dependencies when charts/ directory exists ([588db34](https://github.com/platyplus/platydev/commit/588db3461779cdae5a2fdb1f44fd0addab304ad5))


### Features

* **cli:** complete platy version command ([8b23a60](https://github.com/platyplus/platydev/commit/8b23a6018e202c7a4bb8cec43ca2d6f45e8dd9f5))





## [0.4.4](https://github.com/platyplus/platydev/compare/@platyplus/devtools@0.4.3...@platyplus/devtools@0.4.4) (2020-11-30)


### Bug Fixes

* tag after commit ([2c242bf](https://github.com/platyplus/platydev/commit/2c242bf89fbcfb608716678edb02d042231ec53e))


### Performance Improvements

* only set artifacthub annotations when changelog exists ([7059580](https://github.com/platyplus/platydev/commit/70595808f3a2ae91dbfdb0a058af900d73f7d54a))
* yet another attempt to fix things up ([7ded670](https://github.com/platyplus/platydev/commit/7ded670d6591c4f74ae902d559b2652e5ecb799e))





## [0.4.3](https://github.com/platyplus/platydev/compare/@platyplus/devtools@0.4.2...@platyplus/devtools@0.4.3) (2020-11-29)


### Bug Fixes

* remove git push from helm project version ([e117169](https://github.com/platyplus/platydev/commit/e117169b482d74a58798f074688d23dc3794449f))





## [0.4.2](https://github.com/platyplus/platydev/compare/@platyplus/devtools@0.4.1...@platyplus/devtools@0.4.2) (2020-11-29)


### Bug Fixes

* tag before commit when creating project helm version ([46ec1da](https://github.com/platyplus/platydev/commit/46ec1da9eace9da7bd191452159862b359d6a8d1))





## [0.4.1](https://github.com/platyplus/platydev/compare/@platyplus/devtools@0.4.0...@platyplus/devtools@0.4.1) (2020-11-29)


### Bug Fixes

* add git push, and wait for git promises ([d783391](https://github.com/platyplus/platydev/commit/d783391a81fb689f845612a667ed6bd3dfc17a56))





# [0.4.0](https://github.com/platyplus/platydev/compare/@platyplus/devtools@0.3.0...@platyplus/devtools@0.4.0) (2020-11-29)


### Features

* calculate chart version from dependencies version ([b001b44](https://github.com/platyplus/platydev/commit/b001b442207e8dca8434c920c0beeee431ab3a54))
* set an npm-like workflow to handle the versioning of the helm chart of projects ([a46a17b](https://github.com/platyplus/platydev/commit/a46a17b09b543865150fa52683958f43fbb92eda))
* **cli:** replace platy show project with platy list services ([a446f4f](https://github.com/platyplus/platydev/commit/a446f4fa3ef77b08b5b6b89c8c09baecb62bd44c))





# [0.3.0](https://github.com/platyplus/platydev/compare/@platyplus/devtools@0.2.0...@platyplus/devtools@0.3.0) (2020-11-27)


### Features

* **cli:** option --all to sync all projects ([dd09bd5](https://github.com/platyplus/platydev/commit/dd09bd59024598ced46482b044268f3c897d3a15))
* sync image tags in project helm charts ([31afff0](https://github.com/platyplus/platydev/commit/31afff0f08dc64cef533a02ac59fff2afd56b5dc))





# [0.2.0](https://github.com/platyplus/platydev/compare/@platyplus/devtools@0.1.0...@platyplus/devtools@0.2.0) (2020-11-27)


### Bug Fixes

* cache clean before build ([3ef8563](https://github.com/platyplus/platydev/commit/3ef85636f05a2d4270f4f1ef00a20f38720b4962))
* **quasar:** build dependent packages when building quasar ([a7ce412](https://github.com/platyplus/platydev/commit/a7ce412a8b43b42da0a3576c6b4ca034614f554d))
* correct production docker build with yarn instead of lerna bootstrap ([3ab68c8](https://github.com/platyplus/platydev/commit/3ab68c8d9f72196815d6028acff5a22a9e1e40f8))
* make dependencies work when using a private package, and set service packages to private as def ([de3ab40](https://github.com/platyplus/platydev/commit/de3ab403c8a20c68a4728902ce450e3b1d4c67ae))


### Features

* show project info, and allow json ouput as well as for project list ([26d1df4](https://github.com/platyplus/platydev/commit/26d1df4db9823d00b4f78be3e8607a240c9a5445))
* sync Helm dependencies versions in projects  when pointing to a local chart ([641d3bd](https://github.com/platyplus/platydev/commit/641d3bdc0f436d41813ee3c387ac24b48f55a608))


### Performance Improvements

* **cli:** add type to project details ([03de740](https://github.com/platyplus/platydev/commit/03de74067382af038f76c421ee55d7cd96ac5d30))





# [0.1.0](https://github.com/platyplus/platydev/compare/@platyplus/devtools@0.0.7...@platyplus/devtools@0.1.0) (2020-11-26)


### Bug Fixes

* add nodemon config to ts template ([f45c2ba](https://github.com/platyplus/platydev/commit/f45c2bac873f5aad233e232acc65ecf2bfcc9c43))
* add types to dockerfile template, and force exit on nodemon crash ([8e265fc](https://github.com/platyplus/platydev/commit/8e265fc01be81145841dcd0db15083a2e1c9ee24))
* check workspace ([7f720ab](https://github.com/platyplus/platydev/commit/7f720ab5641d4838d4faffaf4ab1ac652a2c3297))
* correct ingress with skaffold ([dc56141](https://github.com/platyplus/platydev/commit/dc56141c256a5b6549999ce7ff8abc9057ec4941))
* correct way to sync the list of manual files to sync with skaffold ([aee4ae1](https://github.com/platyplus/platydev/commit/aee4ae16822617967801c416205b93c63b7630c0))
* ensure generated tsconfig files point to the right root config. Make package creation work, nes ([69e6942](https://github.com/platyplus/platydev/commit/69e6942417fac3865a6719694cb85da18e7aa00f))
* include dotfiles in template generation ([e07ce41](https://github.com/platyplus/platydev/commit/e07ce4164f19df0095f8c6defbfe1018b822e4ee))
* keep default 80 for quasar in prod ([cd551be](https://github.com/platyplus/platydev/commit/cd551be474e6f59639575028a38120e1ed232ccf))
* make command 'platy create' work ([db404fa](https://github.com/platyplus/platydev/commit/db404fa3344be919048faad82f4562d558210e8c))
* merge HBP metadata ([cc81e9e](https://github.com/platyplus/platydev/commit/cc81e9e84eb4959e950f8f509ab18ec231fc3db0))
* sha tag policy ([8890590](https://github.com/platyplus/platydev/commit/8890590bb1adc3fa2ea2a81e5daf90f76022ee34))


### Features

* activate service route ([759c834](https://github.com/platyplus/platydev/commit/759c8346c5e53483255898c4da262d532e0d3468))
* add hbp service ([317f69a](https://github.com/platyplus/platydev/commit/317f69a67ede9b483ef3362ecd390c476c1018db))
* connect services in autoloading env vars ([e20584f](https://github.com/platyplus/platydev/commit/e20584f228ba6d3a6fc707bc25c2e1a25798d9b4))
* create/sync HBP and Hasura services ([9fb5bb8](https://github.com/platyplus/platydev/commit/9fb5bb8fbde0c89e8099da08e4efd491fcd5de1a))
* default traefik ingress system ([704b001](https://github.com/platyplus/platydev/commit/704b001aeaed6f527602fd00b025271cda85d8e3))
* package helm charts ([ea4c00b](https://github.com/platyplus/platydev/commit/ea4c00b53ddbc9b0cf43d216c7ddbf66ecbc4075))
* set service creation from CLI and other refactoring ([1996599](https://github.com/platyplus/platydev/commit/199659988b37abf4eb068d4b08bfd1bce97f4533))
* use hasura migrations and console with skaffold ([f5be5d4](https://github.com/platyplus/platydev/commit/f5be5d43de5bb488a93f22559b2823b957356780))


### Performance Improvements

* add packages directory to monorepo template ([e98f8f7](https://github.com/platyplus/platydev/commit/e98f8f7cd60171d37cf08cada83ea0dbe2445195))
* install dependencies after initiating a monorepo ([739ba00](https://github.com/platyplus/platydev/commit/739ba00af26d68165a5045dcc788a1394ef319b8))
* set connect option in helm values hbp when connected to hasura ([324cbdb](https://github.com/platyplus/platydev/commit/324cbdb3df407b3ce9162894c0503e3e5382f1a9))





## [0.0.7](https://github.com/platyplus/platydev/compare/@platyplus/devtools@0.0.6...@platyplus/devtools@0.0.7) (2020-09-24)


### Performance Improvements

* add outputs in package and project creation ([32cc9e7](https://github.com/platyplus/platydev/commit/32cc9e798725f1ca358fcbb7566b60ff47cfa3b3))





## [0.0.6](https://github.com/platyplus/platydev/compare/@platyplus/devtools@0.0.5...@platyplus/devtools@0.0.6) (2020-09-24)


### Bug Fixes

* yargs nested commands ([e0cb089](https://github.com/platyplus/platydev/commit/e0cb0897b9bcfeb7ab8da18afa139a582eba6020))





## [0.0.5](https://github.com/platyplus/platydev/compare/@platyplus/devtools@0.0.4...@platyplus/devtools@0.0.5) (2020-09-24)


### Bug Fixes

* correct monorepo template path ([dd547d7](https://github.com/platyplus/platydev/commit/dd547d7c153e02aba8ce226ca435bb237f1e6008))
* rebuild pdt ([021e7cb](https://github.com/platyplus/platydev/commit/021e7cb617ad0fe251d134395196050f64c72d08))





## 0.0.4 (2020-09-24)


### Bug Fixes

* rebuild pdt ([021e7cb](https://github.com/platyplus/platydev/commit/021e7cb617ad0fe251d134395196050f64c72d08))





## 0.0.3 (2020-09-24)

**Note:** Version bump only for package @platyplus/devtools





## 0.0.2 (2020-09-24)

**Note:** Version bump only for package @platyplus/devtools

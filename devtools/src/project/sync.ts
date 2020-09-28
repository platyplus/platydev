import { saveYaml } from '@platyplus/fs'
import chalk from 'chalk'
import path from 'path'

import { writeDockerfiles } from '../docker'
import { syncHelmChart } from '../helm'
import { DEFAULT_WORKING_DIR } from '../settings'
import { loadSkaffoldConfiguration } from '../skaffold'
import { getProject } from './get'
import { DevToolsConfig } from './types'

export const syncProject = async (
  projectName: string
): Promise<DevToolsConfig> => {
  const config = await getProject(projectName)
  await syncHelmChart(config)
  for (const service of config.services) {
    console.log(chalk.green(`write dockerfile ${service.name}`))
    await writeDockerfiles(service)
  }

  const skaffold = await loadSkaffoldConfiguration(config)
  await saveYaml(
    path.join(DEFAULT_WORKING_DIR, config.directory, 'skaffold.yaml'),
    skaffold
  )
  console.log(chalk.green('Project synced.'))
  return config
}

import { loadYaml } from '@platyplus/fs'
import chalk from 'chalk'
import path from 'path'

import { DEFAULT_WORKING_DIR } from '../settings'
import { ensureWorkspace } from '../utils'
import { defaultPdtConfig } from './default'
import { getProject } from './get'

export const createProject = async (
  name: string,
  directory: string,
  description = ''
): Promise<void> => {
  try {
    await getProject(name)
    throw Error('exists')
  } catch (e) {
    if (e.message !== 'exists') {
      const yamlPath = path.join(DEFAULT_WORKING_DIR, directory, 'config.yaml')
      await ensureWorkspace(`${directory}/*`)
      await loadYaml(yamlPath, defaultPdtConfig(name, description))
      console.log(chalk.green(`Project ${name} created in ${directory}`))
    } else throw Error('Project already exists')
  }
}

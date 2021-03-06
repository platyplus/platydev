import chalk from 'chalk'
import { spawn } from 'child_process'
import chodikar from 'chokidar'
import path from 'path'

import { getProject, syncProject } from '../project'
import { DEFAULT_WORKING_DIR } from '../settings'
import { waitFor } from '../utils'
import { SkaffoldEvent } from './types'

const SKAFFOLD_API = 'http://localhost:50052'

/**
 * Starts Skaffold for a given project
 * 1. Reads the Platy DevTools .platy.yaml file
 * 2. Generates the Dockerfiles
 * 3. Generates the skaffold settings (as a temporary file)
 * 4. Runs skaffold
 * 5. Watches changes in the Paltyplus DevTools .platy.yaml file, and re-runs 1-2-3 in that case (Skaffold handles step 4)
 * @param project The project directory, in which the .platy.yaml file will be found
 * @param rootDir
 */
export const runSkaffoldDev = async (
  projectName: string,
  rootDir = DEFAULT_WORKING_DIR
): Promise<void> => {
  let project = await getProject(projectName)
  if (!project) throw Error(`Project ${projectName} not found.`)
  // TODO watch xyz package.json / yarn.lock files (as dependencies can change)
  const configPath = path.join(rootDir, project.directory, '.platy.yaml')
  const watcher = chodikar.watch(configPath)
  watcher.on('add', async () => {
    project = await syncProject(project.name)
    const skaffold = spawn('skaffold', ['dev', '--port-forward'], {
      cwd: path.join(rootDir, project.directory),
      stdio: ['inherit', 'inherit', 'inherit'],
      shell: true
    })

    skaffold.on('exit', () => {
      watcher.close()
    })

    const events = await waitFor(`${SKAFFOLD_API}/v1/events`, {
      responseType: 'stream'
    })

    events.data.on('data', async (data: Buffer) => {
      const event = JSON.parse(data.toString()) as SkaffoldEvent
      const portEvent = event.result.event.portEvent
      if (portEvent?.resourceType === 'service') {
        const service = project.services.find(
          service =>
            portEvent.resourceName === `${project.name}-${service.name}`
        )
        await service?.config?.run?.(portEvent)
      }
    })
  })
  watcher.on('change', async () => {
    console.log(chalk.green('Config changed. Syncing...'))
    project = await syncProject(project.name)
  })
}

import { get } from 'object-path'
import path from 'path'
type Options = {
  initialPath?: string
  nextElementIndex?: boolean // * will return the index a new element could be inserted into (=the length of the array). Defaults to true
}

export * from './yarn'

export const indexOfArrayPathObject = (
  source: Record<string, unknown> | Array<Record<string, unknown>>,
  key: string,
  value: unknown,
  options?: Options
): number => {
  const root = options?.initialPath
    ? get(source, options.initialPath, [])
    : source
  if (!Array.isArray(root)) throw Error('Not an array')
  const index = root.findIndex((element) => {
    if (typeof value === 'function') {
      value(get(element, key))
    }
    return get(element, key) === value
  })
  if (options?.nextElementIndex !== false && index == -1) return root.length
  else return index
}

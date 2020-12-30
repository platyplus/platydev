import { computed, ComputedRef, inject, isRef, Ref } from 'vue'

import { DefaultRxDBKey, RxDBHasuraPlugin } from '../plugin'
import { GenericRxCollection, GenericRxDocument } from '../types'
import { useDB } from './database'

export const useCollection = (
  name: string | Ref<string>
): ComputedRef<GenericRxCollection> => {
  const db = useDB()
  return computed(() => db.value?.collections[isRef(name) ? name.value : name])
}

export const useDocumentCollection = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  document: Ref<GenericRxDocument | any>
): ComputedRef<GenericRxCollection> => computed(() => document.value.collection)

export const useCollections = (): ComputedRef<
  Record<string, GenericRxCollection>
> => {
  const plugin = inject<RxDBHasuraPlugin>(DefaultRxDBKey)
  return computed(() => {
    return plugin?.collections?.value || {}
  })
}

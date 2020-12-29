import * as immutable from 'object-path-immutable'
import { RxDatabase } from 'rxdb'
import { Ref } from 'vue'
import { Store } from 'vuex'

import { debug, error, info } from './helpers'
import { GenericDocument, GenericRxDocument } from './types'
type State = {
  forms: Record<string, Record<string, GenericDocument>>
}
const state = (): State => ({
  forms: {}
})

export const addModule = <R>(
  db: Ref<RxDatabase | undefined>,
  store: Store<R>
): void => {
  store.registerModule('rxdb', {
    namespaced: true,
    state,
    getters: {
      form: state => state.forms,
      getField: state => (document: GenericRxDocument, field: string) => {
        if (document) {
          return (
            immutable.get(
              state.forms,
              `${document.collection.name}.${document.primary}.${field}`
            ) || document.get(field)
          )
        }
      }
    },
    actions: {
      save: async ({ state, commit }) => {
        debug('save', state.forms)
        if (!db.value) return
        for (const [collectionName, documents] of Object.entries(state.forms)) {
          const collection = db.value[collectionName]
          for (const [documentId, formValues] of Object.entries(documents)) {
            const document = await collection.findOne(documentId).exec()
            const changed = Object.entries(formValues).some(
              ([key, value]) => document.get(key) !== value
            )
            if (changed) {
              debug('Document changed', document, formValues)
              try {
                await document.atomicPatch(formValues)
              } catch (err) {
                error(err)
              }
            } else {
              info('No document changed')
            }
          }
        }
        commit('reset')
        debug('save: end')
      }
    },
    mutations: {
      setField: (
        state,
        {
          document,
          field,
          value
        }: { document: GenericRxDocument; field: string; value: unknown }
      ) => {
        state.forms = immutable.set(
          state.forms,
          `${document.collection.name}.${document.primary}.${field}`,
          value
        )
      },
      reset: state => {
        state.forms = {}
      }
    },
    modules: {}
  })
}

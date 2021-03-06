import { ContentsCollection, ContentsCollectionMethods } from '../../types'
import { metadataName } from '../schema'
import { systemCollectionComponent } from '../system'
const config = (collection: ContentsCollection, property?: string) =>
  property
    ? collection.metadata.propertiesConfig?.[property]
    : collection.metadata.config

export const collectionConfigMethods: Pick<
  ContentsCollectionMethods,
  'title' | 'documentTitle' | 'description' | 'icon' | 'component'
> = {
  title(this: ContentsCollection, property?: string): string {
    return (
      config(this, property)?.title || property || metadataName(this.metadata)
    )
  },
  documentTitle(this: ContentsCollection): string {
    return this.metadata.config?.document_title || this.title()
  },
  description(this: ContentsCollection, property?: string): string {
    return config(this, property)?.description || ''
  },
  icon(this: ContentsCollection, property?: string): string {
    return config(this, property)?.icon || ''
  },
  component(this: ContentsCollection): string {
    return (
      this.metadata.config?.component ||
      systemCollectionComponent(this) ||
      'default'
    )
  }
}

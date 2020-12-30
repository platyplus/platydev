import { RxGraphQLReplicationQueryBuilder } from 'rxdb'

import { TableFragment } from '../../../generated'
import { fullTableName } from '../helpers'
import { GenericDocument } from '../types'
import { Modifier } from './types'

export const pullQueryBuilder = (
  table: TableFragment,
  batchSize: number
): RxGraphQLReplicationQueryBuilder => {
  const fields = table.columns
    .filter(column => column.canSelect.length)
    .map(col => col.column_name)
  const title = fullTableName(table)

  // * Add array relationships and their aggregates to the list of query fiels
  const arrayRelationships = table.relationships
    .filter(rel => rel.rel_type === 'array')
    .map(relationship => {
      const remoteColumns = relationship.mapping.map(
        item => item.column?.column_name
      )
      fields.push(`${relationship.rel_name} { ${remoteColumns.join(' ')} }`)
      fields.push(
        `${relationship.rel_name}_aggregate { aggregate { max { updated_at } } }`
      )
      return relationship.rel_name
    })

  // * Include the latest documents
  const commonOrConditions = ['{ updated_at: { _gt: $updatedAt } }']

  // * If no doc is passed on, also include docs to which array relationships have been updated
  const initialOrConditions = [
    ...commonOrConditions,
    ...arrayRelationships.map(
      rel => `{${rel}: { updated_at: { _gt: $updated_at_${rel} } } }`
    )
  ].join('\n')

  // * Same as above, but also ask for the doc id
  // TODO doesn't work when a relationship item has been removed (same pb in the subscription)
  const updateOrConditions = [
    ...commonOrConditions,
    ...arrayRelationships.map(
      rel => `{ _and: [
    {${rel}: { updated_at: { _gt: $updated_at_${rel} } } }
    {id: { _eq: $id } }
  ]}`
    )
  ]

  // * Always ask for an updatedAt variable
  const commonVariableDeclarations = [
    ['updatedAt', 'timestamptz'],
    ...arrayRelationships.map(rel => [`updated_at_${rel}`, 'timestamptz'])
  ]

  // * Ask for the doc it when re-fetching a document
  // TODO get the name/type from the schema, rather than hard coding 'id'
  const updateVariableDeclarations = [
    ['id', 'uuid'],
    ...commonVariableDeclarations
  ]
    .map(([name, type]) => `$${name}: ${type}`)
    .join(', ')

  const initialVariableDeclarations = commonVariableDeclarations
    .map(([name, type]) => `$${name}: ${type}`)
    .join(', ')

  // * Query definition when no document is passed on by the replicator
  const initialQuery = `query query${title} (${initialVariableDeclarations}){
      ${title} (
            where: {
                 _or: [${initialOrConditions}]
              },
            limit: ${batchSize},
            order_by: [ {updated_at: asc} ]
      ){ ${fields.join(' ')} }
  }`

  // * Query definition when the replicator sent a document
  const updateQuery = `query query${title} (${updateVariableDeclarations}){
    ${title} (
          where: {
               _or: [${updateOrConditions}]
            },
          limit: ${batchSize},
          order_by: [ {updated_at: asc} ]
    ){ ${fields.join(' ')} }
}`
  return doc => ({
    query: doc ? updateQuery : initialQuery,

    variables: arrayRelationships.reduce<GenericDocument>(
      // * add the existing updated_at array relationship aggregates if they exist
      (variables, rel) => (
        (variables[`updated_at_${rel}`] =
          doc?.[`${arrayRelationships}_aggregate`]?.aggregate?.max
            ?.updated_at || new Date(0).toISOString()),
        variables
      ),
      {
        // * Add the doc timestamp if it exists, set to minimum otherwise
        updatedAt: doc?.updated_at || new Date(0).toISOString(),
        // * Add the doc id if exists
        id: doc?.id
      }
    )
  })
}

export const pullModifier = (table: TableFragment): Modifier => {
  const cleansedRelationships = table.relationships.map(rel => {
    return {
      multiple: rel.rel_type === 'array',
      name: rel.rel_name as string,
      column: rel.mapping[0].column?.column_name as string,
      remoteColumn: rel.mapping[0].remote_column_name as string
    }
  })

  return doc => {
    // * Flatten relationship data so it fits in the `population` system
    for (const { name, column, multiple } of cleansedRelationships) {
      if (multiple) {
        // * Array relationships: set remote id columns as an array
        doc[name] = (doc[name] as []).map(item => item[column])
      } else {
        // * Object relationships: move foreign key columns to the property name
        doc[name] = doc[column]
        delete doc[column]
      }
    }
    return doc
  }
}

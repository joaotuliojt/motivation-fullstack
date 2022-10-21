import { GraphQLObjectType, GraphQLNonNull } from 'graphql'
import { connectionArgs, connectionFromArray } from 'graphql-relay'
import { MotivationConnection } from '../motivation/MotivationType'

import * as MotivationLoader from '../motivation/MotivationLoader'

const QueryType = new GraphQLObjectType({
  name: "Query",
  description: "The root of all queries",
  fields: () => ({
    motivations: {
      type: new GraphQLNonNull(MotivationConnection),
      args: connectionArgs,
      resolve: async (_, args, context) => {
        const data = await MotivationLoader.loadAll()
        return connectionFromArray(data, args)
      }
    }
  })
})

export default QueryType
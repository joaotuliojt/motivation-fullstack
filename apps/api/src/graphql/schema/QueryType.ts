import { GraphQLObjectType, GraphQLNonNull, GraphQLID } from 'graphql'
import { connectionArgs, connectionFromArray, fromGlobalId } from 'graphql-relay'
import MotivationType, { MotivationConnection, MotivationEdge } from '../motivation/MotivationType'

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
    },
    motivation: {
      type: MotivationType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve: async (_, { id }) => {
        const data = await MotivationLoader.getOne(fromGlobalId(id).id)
        return data
      }
    }
  })
})

export default QueryType
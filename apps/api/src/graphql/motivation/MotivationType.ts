import { GraphQLObjectType, GraphQLString } from 'graphql'
import { globalIdField } from 'graphql-relay'
import { connectionDefinitions } from 'graphql-relay/connection/connection'
import { nodeInterface } from '../node/nodeInterface'

const MotivationType = new GraphQLObjectType({
  name: "Motivation",
  description: "Motivation Type",
  interfaces: [nodeInterface],
  fields: () => ({
    id: globalIdField("Motivation"),
    phrase: {
      type: GraphQLString,
      resolve: motivation => motivation.phrase
    },
    author: {
      type: GraphQLString,
      resolve: motivation => motivation.author
    },
  })
})

const { connectionType: MotivationConnection, edgeType: MotivationEdge } = connectionDefinitions({
  nodeType: MotivationType
})

export {
  MotivationConnection,
  MotivationEdge
}

export default MotivationType
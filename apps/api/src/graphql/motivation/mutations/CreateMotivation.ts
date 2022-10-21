import { mutationWithClientMutationId, toGlobalId } from 'graphql-relay'
import { GraphQLNonNull, GraphQLString } from 'graphql'
import { Motivation } from '../../../models/Motivation'
import { MotivationEdge } from '../MotivationType'

export default mutationWithClientMutationId({
  name: "CreateMotivation",
  inputFields: {
    phrase: {
      type: new GraphQLNonNull(GraphQLString),
    },
    author: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ phrase, author }) => {
    const motivation = {
      phrase,
      author
    }

    const newMotivation = await Motivation.create(motivation)
    return {
      motivation: newMotivation,
      success: "Motivation created succesfully"
    }
  },
  outputFields: {
    motivationEdge: {
      type: MotivationEdge,
      resolve: async ({ motivation }) => {
        if (!motivation) {
          return null
        }

        return {
          cursor: toGlobalId("Motivation", motivation._id),
          node: motivation
        }
      }
    },
    success: {
      type: GraphQLString,
      resolve: ({ success }: { success: string }) => success
    }
  }
})
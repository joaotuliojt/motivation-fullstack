import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql'
import { fromGlobalId, mutationWithClientMutationId, toGlobalId } from 'graphql-relay'
import { getOne } from '../MotivationLoader'
import { MotivationEdge } from '../MotivationType'

export default mutationWithClientMutationId({
  name: "DeleteMotivation",
  inputFields: {
    author: {
      type: new GraphQLNonNull(GraphQLString)
    },
    phrase: {
      type: new GraphQLNonNull(GraphQLString)
    },
    id: {
      type: GraphQLID
    }
  },
  mutateAndGetPayload: async ({ author, phrase, id, clientMutationId }) => {

    const uuid = id ? id : fromGlobalId(clientMutationId).id
    if (!clientMutationId && !id) {
      throw new Error("Send id or clientMutationId")
    }
    const motivation = await getOne(uuid)

    if (!motivation) {
      throw new Error("Motivation not exists!")
    }

    motivation.set({
      author,
      phrase
    })
    await motivation.save()

    return {
      message: "Motivation updated succesfully",
      motivation
    }

  },
  outputFields: {
    message: {
      type: GraphQLString,
      resolve: ({ message }) => message
    },
    motivationEdge: {
      type: MotivationEdge,
      resolve: async ({ motivation }) => {
        return {
          cursor: toGlobalId("Motivation", motivation._id),
          node: motivation
        }
      }
    }
  }
})
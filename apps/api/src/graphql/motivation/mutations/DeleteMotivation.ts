import { GraphQLID, GraphQLString } from 'graphql'
import { fromGlobalId, mutationWithClientMutationId, toGlobalId } from 'graphql-relay'
import * as MotivationLoader from '../MotivationLoader'

export default mutationWithClientMutationId({
  name: "DeleteMutation",
  inputFields: {
    id: {
      type: GraphQLID
    }
  },
  mutateAndGetPayload: async ({ id, clientMutationId }) => {

    const uuid = id ? id : fromGlobalId(clientMutationId).id
    const motivation = await MotivationLoader.getOne(uuid)
    if (!motivation) {
      throw new Error("Motivation is not exists")
    }

    await motivation.delete()
    return {
      message: "Motivation deleted succesfully"
    }
  },
  outputFields: {
    message: {
      type: GraphQLString,
      resolve: ({ message }: { message: string }) => message
    }
  },
})
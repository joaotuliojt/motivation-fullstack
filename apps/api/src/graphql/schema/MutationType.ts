import { GraphQLObjectType } from 'graphql'
import MotivationMutation from '../motivation/mutations'

const MutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    ...MotivationMutation
  })
})

export default MutationType

export const createMotivationQuery = `
      mutation createMotivation($phrase: String!, $author: String!){
        CreateMotivation(input: {phrase: $phrase, author: $author}){
          motivationEdge{
            node{
              id
              phrase
              author
            }
          }
        }
      }
    `

export const deleteMotivationQuery = `
      mutation deleteMotivation($clientMutationId: String, $id: ID){
        DeleteMotivation(input: {clientMutationId: $clientMutationId, id: $id}){
          message
        }
      }
`

export const updateMotivationQuery = `
      mutation updateMotivation($author: String!, $phrase: String!, $clientMutationId: String!){
        UpdateMotivation(input: {author: $author, phrase: $phrase, clientMutationId: $clientMutationId }){
          motivationEdge{
            node{
              id
              phrase
              author
            }
          }
          message
        }
      }
`
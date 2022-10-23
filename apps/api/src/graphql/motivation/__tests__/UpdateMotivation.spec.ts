import { graphql } from "graphql"
import { schema } from '../../schema/index'
import { connectMongoDB, disconnectDB } from "../../../database/mongo"
import { createMotivation } from "../fixtures/createMotivation"
import { updateMotivationQuery } from "../fixtures/AllQuerys"
import { toGlobalId } from "graphql-relay"

describe("Update Motivation Test", () => {
  beforeAll(() => {
    connectMongoDB()
  })
  afterAll(() => {
    disconnectDB()
  })

  it("should update a motivation", async () => {
    const query = updateMotivationQuery

    const newMotivation = await createMotivation()
    const args = {
      clientMutationId: toGlobalId("Motivation", newMotivation._id.toString()),
      author: "Jhon Doe",
      phrase: "A simple phrase"
    }

    const result = await graphql({ schema, source: query, variableValues: args });
    const { motivationEdge, message } = result.data?.UpdateMotivation as any
    const { phrase, author } = motivationEdge.node


    expect(message).toBeTruthy();
    expect(motivationEdge).toBeTruthy();
    expect(message).toBe("Motivation updated succesfully")
    expect(phrase).not.toBe(newMotivation.phrase)
    expect(author).not.toBe(newMotivation.author)
    expect(phrase).toBe(args.phrase)
    expect(author).toBe(args.author)


  })
})
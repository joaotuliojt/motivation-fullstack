import { graphql } from "graphql"
import { schema } from '../../schema/index'
import { connectMongoDB, disconnectDB } from "../../../database/mongo"
import { createMotivation } from "../fixtures/createMotivation"
import { createMotivationQuery } from "../fixtures/AllQuerys"

describe("Create Motivation Test", () => {
  beforeAll(() => {
    connectMongoDB()
  })
  afterAll(() => {
    disconnectDB()
  })

  it("should create a motivation", async () => {
    const query = createMotivationQuery

    const motivation = {
      author: "Jhon Doe",
      phrase: "Lorem impsum :D"
    }

    const result = await graphql({ schema, source: query, variableValues: motivation });
    const { CreateMotivation } = result.data as any
    const newMotivation = CreateMotivation.motivationEdge?.node
    expect(newMotivation.phrase).toBe(motivation.phrase)
    expect(newMotivation.author).toBe(motivation.author)
    expect(newMotivation).toBeTruthy()

  })
})
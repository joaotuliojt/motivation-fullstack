import { graphql } from "graphql"
import { schema } from '../../schema/index'
import { connectMongoDB, disconnectDB } from "../../../database/mongo"
import { createMotivation } from "../fixtures/createMotivation"
import { createMotivationQuery, deleteMotivationQuery } from "../fixtures/AllQuerys"

describe("Delete Motivation Test", () => {
  beforeAll(() => {
    connectMongoDB()
  })
  afterAll(() => {
    disconnectDB()
  })

  it("should delete a motivation", async () => {
    const query = deleteMotivationQuery

    const newMotivation = await createMotivation()
    const args = {
      id: newMotivation._id.toString()
    }

    const result = await graphql({ schema, source: query, variableValues: args });
    const { message } = result.data?.DeleteMotivation as any

    expect(message).toBeTruthy();
    expect(message).toBe("Motivation deleted succesfully")


  })
})
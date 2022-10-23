import { fromGlobalId, nodeDefinitions } from "graphql-relay";
import { getOne } from "../motivation/MotivationLoader";
import MotivationType from "../motivation/MotivationType";

const { nodeField, nodeInterface, nodesField } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId);
    if (type === "Motivation") {
      return getOne(id)
    }
  },
  (obj) => {
    if (obj.author) {
      return "Motivation"
    }
    return undefined
  })

export { nodeField, nodeInterface, nodesField }
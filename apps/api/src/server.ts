import express from 'express';
import { graphqlHTTP } from "express-graphql"
import { GraphQLSchema } from 'graphql';
import expressPlayground from 'graphql-playground-middleware-express';

const PORT = 3333;

const app = express();
app.use(express.json());

app.use('/graphql', graphqlHTTP({
  schema: {} as GraphQLSchema,
  graphiql: true
}))

app.use('/playground', expressPlayground({ endpoint: '/graphql' }))



app.listen(PORT, () => {
  console.log(`Server is running 🚀`)
  console.log(`Open Graphql Playground on: http://localhost:${PORT}/playground 😎`)
})
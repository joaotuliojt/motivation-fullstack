import express from 'express';
import { graphqlHTTP } from "express-graphql"
import { GraphQLSchema } from 'graphql';
import expressPlayground from 'graphql-playground-middleware-express';
import { schema } from './graphql/schema';

const app = express();
app.use(express.json());

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))

app.use('/playground', expressPlayground({ endpoint: '/graphql' }))

export { app }
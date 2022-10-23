import { app } from './server'
import { connectMongoDB } from "./database/mongo"
import { config } from './config';

async function startServer() {
  const PORT = config.API_PORT

  await connectMongoDB()

  app.on("error", (err) => {
    console.log("Server error", err);
  });

  app.listen(PORT, () => {
    console.log(`Server is running 🚀`)
    console.log(`Open Graphql Playground on: http://localhost:${PORT}/playground 😎`)
  })
}

startServer();
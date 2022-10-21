import { app } from './server'
import { connectMongoDB } from "./database/mongo"

async function startServer() {
  const PORT = 3333;

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
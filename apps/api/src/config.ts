export const config = {
  MONGO_URI: process.env.MONGO_URI as string,
  API_PORT: Number(process.env.API_PORT) || 4000
}
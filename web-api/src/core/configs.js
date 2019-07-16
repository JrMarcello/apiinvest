export default {
  API_BASE_PATH: process.env.API_BASE_PATH,
  server: {
    HOST: process.env.HOST,
    PORT: process.env.PORT
  },
  db: {
    URI: process.env.DB_URI
  },
  SECRET_KEY: process.env.SECRET_KEY
}

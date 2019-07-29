export default {
  API_BASE_PATH: process.env.API_BASE_PATH,
  server: {
    HOST: process.env.HOST,
    PORT: process.env.PORT
  },
  db: {
    PGURI: process.env.PGURI,
    PGHOST: process.env.PGHOST,
    PGUSER: process.env.PGUSER,
    PGDATABASE: process.env.PGDATABASE,
    PGPASSWORD: process.env.PGPASSWORD,
    PGPORT: process.env.PGPORT
  },
  SECRET_KEY: process.env.SECRET_KEY,
  NODE_ENV: process.env.NODE_ENV
}

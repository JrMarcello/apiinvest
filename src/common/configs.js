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
  NODE_ENV: process.env.NODE_ENV,
  smtp: {
    SERVICE: process.env.SMTP_SERVICE,
    HOST: process.env.SMTP_HOST,
    PORT: process.env.SMTP_PORT,
    USER: process.env.SMTP_USER,
    PASSWORD: process.env.SMTP_PASSWORD
  },
  emails: {
    contact: process.env.CONTACT_EMAIL,
    subjects: {
      NEW_INVESTMENT: process.env.SUBJECT_NEW_INVESTMENT
    }
  },
  GOOGLE_CLOUD: {
    PROJECT_ID: process.env.PROJECT_ID,
    KEYFILE: process.env.KEYFILE,
    BUILDINGS_IMGS_BUCKET: process.env.BUILDINGS_IMGS_BUCKET,
    TEDS_BUCKET: process.env.TEDS_BUCKET,
    DOCS_BUCKET: process.env.DOCS_BUCKET
  }
}

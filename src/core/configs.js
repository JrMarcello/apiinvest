import dotenv from 'dotenv'

dotenv.config()

export default {
  API_BASE_PATH: process.env.API_BASE_PATH,
  CLIENT_BASE_PATH: process.env.CLIENT_BASE_PATH,
  server: {
    HOST: process.env.HOST,
    PORT: process.env.PORT
  },
  db: {
    PGURI: process.env.NODE_ENV === 'development' ? process.env.PGURI_DEV : process.env.PGURI_PROD
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
  GOOGLE_CLOUD: {
    PROJECT_ID: process.env.PROJECT_ID,
    KEYFILE_PATH: process.env.KEYFILE_PATH,
    BUCKET: process.env.BUCKET
  },
  buildinvest: {
    emails: {
      contact: process.env.CONTACT_EMAIL
    },
    bankAccount: process.env.BANKACCOUNT,
    agence: process.env.AGENCE
  },
  BLACK_LIST: process.env.BLACK_LIST,
  INVESTMENT_MAX_AMOUNT_NOT_QUALIFIED: process.env.INVESTMENT_MAX_AMOUNT_NOT_QUALIFIED,
  INVESTMENT_MAX_AMOUNT_QUALIFIED: process.env.INVESTMENT_MAX_AMOUNT_QUALIFIED
}

import path from 'path'
import nodemailer from 'nodemailer'
import hbs from 'nodemailer-express-handlebars'
import { env } from '../common/utils'

const getTransporter = async () => {
  return nodemailer
    .createTransport({
      service: env().smtp.SERVICE,
      // host: 'smtp.ethereal.email',
      // port: 587,
      // secure: false, // true for 465, false for other ports
      auth: {
        user: env().smtp.USER,
        pass: env().smtp.PASSWORD
      }
    })
    .use(
      'compile',
      hbs({
        viewEngine: {
          extName: '.hbs',
          partialsDir: path.resolve('./src/views/templates/email'),
          layoutsDir: path.resolve('./src/views/templates/email'),
          defaultLayout: ''
        },
        viewPath: path.resolve('./src/views/templates/email'),
        extName: '.hbs'
      })
    )
}

export const sendEmail = async message => {
  return (await getTransporter()).sendMail(message)
}

import nodemailer from 'nodemailer'
import { env } from '../common/utils'

const getTransporter = async () => {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  const testAccount = await nodemailer.createTestAccount()

  return nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // 'francesca69@ethereal.email',
      pass: testAccount.pass // '7vEKtRqepxKM8jJ13R'
    }
  })

  // Test SMTP service account from mailtrap.io
  // return nodemailer.createTransport({
  //   host: env().smtp.HOST,
  //   port: env().smtp.PORT,
  //   auth: {
  //     user: env().smtp.USER,
  //     pass: env().smtp.PASSWORD
  //   }
  // })

  // return nodemailer.createTransport({
  //   service: env().smtp.SERVICE,
  //   auth: {
  //     user: env().smtp.USER,
  //     pass: env().smtp.PASSWORD
  //   }
  // })
}

export const sendEmail = async message => {
  const transport = await getTransporter()

  const infos = await transport.sendMail(message)

  // TODO: Remover
  if (env().NODE_ENV !== 'production') console.log(nodemailer.getTestMessageUrl(infos))

  return infos
}

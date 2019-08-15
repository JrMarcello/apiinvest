import nodemailer from 'nodemailer'
import { configs } from '@common/utils'

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
  //   host: configs().smtp.HOST,
  //   port: configs().smtp.PORT,
  //   auth: {
  //     user: configs().smtp.USER,
  //     pass: configs().smtp.PASSWORD
  //   }
  // })

  // return nodemailer.createTransport({
  //   service: configs().smtp.SERVICE,
  //   auth: {
  //     user: configs().smtp.USER,
  //     pass: configs().smtp.PASSWORD
  //   }
  // })
}

export const sendEmail = async message => {
  const transport = await getTransporter()

  const infos = await transport.sendMail(message)

  if (configs().NODE_ENV !== 'production')
    console.log(Object.assign(infos, { url: nodemailer.getTestMessageUrl(infos) }))

  return infos
}

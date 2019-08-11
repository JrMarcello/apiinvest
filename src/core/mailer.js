import nodemailer from 'nodemailer'
// import { configs } from '@common/utils'

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
  //   host: configs().email.HOST,
  //   port: configs().email.PORT,
  //   auth: {
  //     user: configs().email.AUTH.USER,
  //     pass: configs().email.AUTH.PASSWORD
  //   }
  // })

  // return nodemailer.createTransport({
  //   service: configs().email.SERVICE,
  //   auth: {
  //     user: configs().email.AUTH.USER,
  //     pass: configs().email.AUTH.PASSWORD
  //   }
  // })
}

export const sendEmail = async message => {
  const transport = await getTransporter()

  const infos = await transport.sendMail(message)
  console.log(Object.assign(infos, { url: nodemailer.getTestMessageUrl(infos) }))

  return infos
}

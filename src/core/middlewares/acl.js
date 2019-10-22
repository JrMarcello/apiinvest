import acl from 'express-acl'
import { env } from '@common/utils'

acl.config({
  baseUrl: env().API_BASE_PATH,
  decodedObjectName: 'user',
  roleSearchPath: 'user.profile.name',
  denyCallback: res => {
    return res.status(403).json({
      status: 'Acesso negado!',
      success: false,
      message: 'Você não está autorizado a acessar esse recurso'
    })
  }
})

// {
//   "group": "Investidor",
//   "permissions": [
//     {
//       "resource": "user/*",
//       "methods": "*",
//       "action": "allow"
//     },
//     {
//       "resource": "investment",
//       "methods": "*",
//       "action": "allow"
//     },
//     {
//       "resource": "building",
//       "methods": "*",
//       "action": "allow"
//     }
//   ]
// },

export default acl

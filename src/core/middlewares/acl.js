import acl from 'express-acl'
import { env } from '../../common/utils'

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

export default acl

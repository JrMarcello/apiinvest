import { shiphold } from 'ship-hold'
import { env } from '../common/utils'

export default shiphold({
  connectionString: env().db.DB_URI
})

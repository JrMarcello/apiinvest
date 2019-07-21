// import { Pool } from 'pg'
import { shiphold } from 'ship-hold'

export default shiphold({})

// let pool = null

// export const isConnected = () => {
//   return !!pool
// }

// export const getPool = () => {
//   if (!isConnected()) pool = new Pool()

//   return pool
// }

// export const connect = () => {
//   if (!isConnected()) pool = new Pool()

//   return pool.connect()
// }

// export const disconnect = () => {
//   if (pool) {
//     pool.end()
//     pool = null
//   }
// }

const { sequelize } = require('./models')
// const { environment } = require('../../configuration/database')

sequelize
  .authenticate()
  .then(() => {
    // console.log(`MySql conectado no ambiente *${environment}*`)
  })
  .catch(() => {
    // console.log(`Mysql com problema de conexão em *${environment}*.\nErro: ${error}`)
  })

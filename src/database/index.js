const sequelize = require('../database/models').sequelize;
const environment = require('../../configuration/database').environment;

sequelize
    .authenticate()
    .then(function() {
        console.log(`MySql conectado no ambiente *${environment}*`);
    })
    .catch(function (error) {
        console.log(`Mysql com problema de conexão em *${environment}*.\nErro: ${error}`);
    });
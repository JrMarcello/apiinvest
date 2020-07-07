require('dotenv').config();

const database = {

	development: {
        env: 'development',
        username: "postgres",
        password: "root",
        database: "buildinvest",
        dialect: "postgres",
        options: {
            dialect: "postgres",
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            }
        }
	},

	production: {
        env: 'production',
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        dialect: "postgres",
        options: {
            dialect: "postgres",
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            }
        }
    }
}

module.exports = database[process.env.NODE_ENV || 'development'];

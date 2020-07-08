require('dotenv').config();

const database = {

	development: {
        environment: 'development',
        host: 'localhost',
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
            },
            define: {
                underscored: true
            }
        }
	},

	production: {
        environment: 'production',
        host: process.env.POSTGRES_HOST,
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
            },
            define: {
                underscored: true
            }
        }
    }
}

module.exports = database[process.env.NODE_ENV || 'development'];

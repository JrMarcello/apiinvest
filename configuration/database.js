require('dotenv').config();

const database = {

	development: {
        host: 'localhost',
        environment: 'development',
        username: 'postgres',
        password: 'root',
        database: 'buildinvest',
        dialect: 'postgres',
        options: {
            host: 'localhost',
            dialect: 'postgres',
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            },
            define: {
                underscored: true,
                created_at: 'created_at',
                created_at: 'updated_at'
            }
        }
	},

	production: {
        environment: 'production',
        host: process.env.POSTGRES_HOST,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        dialect: 'postgres',
        options: {
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            },
            define: {
                underscored: true,
                created_at: 'created_at',
                created_at: 'updated_at'
            }
        }
    }
}

module.exports = database[process.env.NODE_ENV || 'development'];

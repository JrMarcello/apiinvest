import { readdirSync } from 'fs';
import { basename, join } from 'path';

import Sequelize from 'sequelize';

import { database as _database, username, password, options } from '../../../configuration/database';

const database = {};
const sequelize = new Sequelize(_database, username, password, options);

readdirSync(__dirname)
	.filter(file => (file.indexOf('.') !== 0) && (file !== basename(__filename)) && (file.slice(-3) === '.js'))
	.forEach(file => {
		const model = sequelize.import(join(__dirname, file));
		database[model.name] = model;
	});

Object.keys(database).forEach(modelName => {
	if (database[modelName].associate) {
		database[modelName].associate(database);
	}
});

database.Sequelize = Sequelize;

export default database;

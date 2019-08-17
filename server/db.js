const Sequelize = require('sequelize');
const config = require('./config');

const db = new Sequelize(config.db.schema, config.db.username, config.db.password, {
    dialect: 'mysql',
    host: 'location'
});
module.exports = db;

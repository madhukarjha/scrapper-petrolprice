const Sequelize = require('sequelize');
const db = require('./db');

const PetrolPrice = db.define('petrolprice', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    state: Sequelize.STRING,
    city: Sequelize.STRING,
    price: Sequelize.STRING,
    date: Sequelize.STRING
});

module.exports = PetrolPrice;

const Sequelize = require('sequelize');
const sequelize = new Sequelize('database_dompedro', 'root', 'dompedro', {
	host: 'localhost',
	dialect: 'mysql'
})

module.exports = {Sequelize, sequelize}
const Sequelize = require('sequelize');
const sequelize = new Sequelize('dompedro', 'root', 'dompedro', {
	host: 'localhost',
	dialect: 'mysql'
})

module.exports = {Sequelize, sequelize}
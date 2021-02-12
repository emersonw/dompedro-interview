var db = require('../../config/db.js');

const User = db.sequelize.define('users', {
	name: {
		type: db.Sequelize.STRING
	},
	email: {
		type: db.Sequelize.STRING
	},
	createdAt: {
		type: 'TIMESTAMP',
		field: 'created_at',
        defaultValue: db.Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
	}
},
{
	updatedAt: false,
})

module.exports = User
const User = require('../models/User.js')

var express = require('express');
var router = express.Router();

const getUsersController = (req, res) => {
	User.findAll().then(function(users) {
		res.render('users', {users: users})
	});
}

const apiUsersController = (req, res) => {
	User.create({
		name: req.body.data.name,
		email: req.body.data.email,
	}).then(function () {
		res.redirect('/')
	}).catch(function (error) {
		res.send(error)
	});
}

module.exports = {
	getUsersController, apiUsersController
}
var express = require('express');
var router = express.Router();
const axios = require('axios');

const addUsersClientController = (req, res) => {
	res.render('add');
}

const sendUserController = async (req, res) => {
	var data = req.body;
	await axios.post('http://localhost:4407/api', {
		data
	}).then(res => {			
		console.error('Consumed API')
	}).catch(error => {
		console.error(error)
	})
	
	await res.redirect('/')
}

module.exports = {
	addUsersClientController, sendUserController
}
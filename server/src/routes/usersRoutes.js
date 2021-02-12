const express = require('express');
const usersController = require('../controllers/usersController.js');

const router = express.Router();

router.get('/', usersController.getUsersController);
router.post('/api', usersController.apiUsersController);

module.exports = router;
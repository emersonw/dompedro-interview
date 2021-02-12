const express = require('express');
const usersClientController = require('../controllers/usersClientController.js');

const router = express.Router();

router.get('/add', usersClientController.addUsersClientController);
router.post('/sendUser', usersClientController.sendUserController)

module.exports = router;
const path = require('path');

const express = require('express');

const userController = require('../controllers/userC');

const user = express.Router();

user.post('/user/add-user', userController.postUser);

user.get('/user/get-user', userController.getUser);

user.delete('/user/delete-user/:id', userController.deleteUser);

module.exports = user;
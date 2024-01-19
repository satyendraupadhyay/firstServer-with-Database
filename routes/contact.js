const express = require('express');
const path = require('path');

// const rootDir = require('../util/path');

const productsController = require('../controllers/admin');

const contact = express.Router();

contact.get('/contactus', productsController.getContact)

module.exports = contact;
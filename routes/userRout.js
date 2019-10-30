'use strinct'
const express = require('express');
const userController= require('../controllers/userCont')
const api= express.Router();

api.post('/', userController.createUser);



module.exports = api;
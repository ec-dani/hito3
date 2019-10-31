'use strinct'
const express = require('express');
const userController= require('../controllers/userCont')
const api= express.Router();

api.post('/', userController.createUser);
api.get('/todos', userController.getUsers);
api.get('/uno/:email', userController.getUser);
api.delete('/:email', userController.deleteUser);
api.put('/:email',userController.updateUser);/* Peta, pero va */



module.exports = api;
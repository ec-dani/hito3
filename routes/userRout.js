const express = require('express');

const userController = require('../controllers/userCont');
const usuarioMidd = require('../middlewares/usuarioMidd');

const api = express.Router();

api.post('/', userController.createUser);
api.get('/todos', userController.getUsers);
api.get('/uno/:email', userController.getUser);
api.delete('/:email', userController.deleteUser);
api.put('/:email', userController.updateUser);
api.get('/private', usuarioMidd.isUser, (req, res) => {
  res.status(200).send({ message: 'Tiene acceso' });
});

module.exports = api;

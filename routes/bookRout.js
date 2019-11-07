const express = require('express');

const bookController = require('../controllers/bookCont');

const book = express.Router();

book.post('/', bookController.createBook);
book.get('/todos', bookController.getallBooks);
book.get('/uno/:titulo', bookController.getBookbyTitle);
book.get('/uno/:isbn', bookController.getBookbyISBN);
book.get('/uno/descripcion', bookController.getBookbyDescripcion);
book.get('/uno/:autor', bookController.getBookbyAutor);
book.get('/uno/:fechapublicaion', bookController.getBookbyFechapubli);
book.get('/uno/:precio', bookController.getBookbyPrecio);
book.get('/uno/:editorial', bookController.getBookbyEditorial);
book.put('/:titulo', bookController.updateBook);
book.delete('/:titulo', bookController.deleteBookbyTitle);


module.exports = book;

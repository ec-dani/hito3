const express = require('express');

const bookController = require('../controllers/bookCont');

const book = express.Router();

book.post('/', bookController.createBook);
book.get('/todos', bookController.getallBooks);
book.get('/uno/titulo/:titulo', bookController.getBookbyTitle);
book.get('/uno/isbn/:isbn', bookController.getBookbyISBN);
book.get('/uno/descripcion/descripcion', bookController.getBookbyDescripcion);
book.get('/uno/autor/:autor', bookController.getBookbyAutor);
book.get('/uno/fechapublicacion/:fechapublicaion', bookController.getBookbyFechapubli);
book.get('/uno/precio/:precio', bookController.getBookbyPrecio);
book.get('/uno/editorial/:editorial', bookController.getBookbyEditorial);
book.put('/:titulo', bookController.updateBook);
book.delete('/:titulo', bookController.deleteBookbyTitle);


module.exports = book;

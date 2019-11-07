const mongoose = require('mongoose');

const { Schema } = mongoose;

const BookSchema = Schema({
  titulo: { type: String, unique: true, required: true },
  isbn: { type: String, required: true, unique: true },
  descripcion: { type: String, required: true },
  autor: { type: String, required: true },
  fechapublicacion: { type: Date, required: true },
  precio: { type: Number, required: true },
  editorial: { type: String, required: true },
});

module.exports = mongoose.model('book', BookSchema);

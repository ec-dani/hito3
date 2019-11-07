const express = require('express');

const bodyParser = require('body-parser');

const app = express();
const user = require('./routes/userRout');
const book = require('./routes/bookRout');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/user', user);
app.use('/book', book);


module.exports = app;

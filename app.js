const express = require('express');

const bodyParser = require('body-parser');

const app = express();
const user = require('./routes/userRout');
const book = require('./routes/bookRout');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/user', user);
app.use('/book', book);


module.exports = app;

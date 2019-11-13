/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;
const app = require('./app');
const config = require('./config');


mongoose.connect(config.db, (err, res) => {
  if (err) { return console.log(`ERROR: connecting to Database. ${err}`); }
  app.listen(config.port, () => {
    console.log(`API REST corriendo  http://localhost:${port}`);
  });
});

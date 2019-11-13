/* eslint-disable no-underscore-dangle */
const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config');

function createToken(user) {
  const playload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(10, 'days').unix(),
  };
  return jwt.encode(playload, config.SECRET_TOKEN);
}

function decodeToken(token) {
  const decoded = new Promise((resolve, reject) => {
    try {
      const playload = jwt.decode(token, config.SECRET_TOKEN);
      if (playload.exp <= moment().unix()) {
        reject({
          status: 401,
          message: 'El token ha expirado',
        });
      }
      resolve(playload.sub);
    } catch (err) {
      reject({
        status: 500,
        message: 'Token invalido',
      });
    }
  });
  return decoded;
}

module.exports = {
  createToken,
  decodeToken,
};

/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable consistent-return */
const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config');

function createToken(user) {
  const playload = {
    // eslint-disable-next-line no-underscore-dangle
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

function isUser(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send({ message: 'YOU SHALL NOT PASS!!' });
  }
  decodeToken(req.headers.authorization)
    .then((response) => {
      req.user = response;
      next();
    })
    .catch((response) => {
      res.status(response.status);
    });
}

module.exports = {
  createToken,
  decodeToken,
  isUser,
};

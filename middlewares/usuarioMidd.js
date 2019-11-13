const services = require('../services/service');

function isUser(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send({ message: 'YOU SHALL NOT PASS!!' });
  }

  const token = req.headers.authorization.split(' ')[1];

  services.decodeToken(token)
    .then((response) => {
      req.user = response;
      next();
    })
    .catch((response) => {
      res.status(response.status);
    });
}

module.exports = isUser;

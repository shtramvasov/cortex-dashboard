const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function(req, res, next) {
  try {
    const token = req.header('token');
    if (!token) {
      return res.status(403).json('Неверный токен');
    }
    const payload = jwt.verify(token, process.env.jwtSecret);
    req.user = payload.user;
    next();
  } catch (err) {
    res.status(403).json('Неверный токен');
  }
};
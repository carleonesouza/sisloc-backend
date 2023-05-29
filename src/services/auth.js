const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../util/util');


exports.generateToken = (email, id ) => {
    return jwt.sign({ email: email, userId: id }, JWT_KEY, {
      expiresIn: '1h',
    });
  }
const bcrypt = require("bcrypt");

function hashPassword(password) {
  return bcrypt.hashSync(password, 10);
}

function checkPassword(password, hashedPassword) {
  return bcrypt.compareSync(password, hashedPassword);
}

module.exports = { hashPassword, checkPassword };

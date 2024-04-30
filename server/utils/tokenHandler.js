const jwt = require("jsonwebtoken");

function accessTokenGenerator(id) {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "5m",
  });
}

function refreshTokenGenerator(id) {
  return jwt.sign({ id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
}

function parseToken(token) {}

module.exports = { accessTokenGenerator, refreshTokenGenerator };

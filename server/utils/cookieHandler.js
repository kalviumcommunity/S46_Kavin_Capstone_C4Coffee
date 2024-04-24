const {
  accessTokenGenerator,
  refreshTokenGenerator,
} = require("./tokenGenerator");

function setCookies(res, data) {
  //Creating token and sending cookies
  const accessToken = accessTokenGenerator(data);
  const refreshToken = refreshTokenGenerator(data);

  res.cookie("accessToken", `Bearer ${accessToken}`, {
    httpOnly: true,
    maxAge: 5 * 60 * 1000,
  });

  res.cookie("refreshToken", `Bearer ${refreshToken}`, {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
}

module.exports = setCookies;

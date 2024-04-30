const {
  accessTokenGenerator,
  refreshTokenGenerator,
} = require("./tokenHandler");

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

function renewAccessToken(res, data) {
  const accessToken = accessTokenGenerator(data);

  res.cookie("accessToken", `Bearer ${accessToken}`, {
    httpOnly: true,
    maxAge: 5 * 60 * 1000,
  });

  return accessToken
}

module.exports = {setCookies, renewAccessToken};

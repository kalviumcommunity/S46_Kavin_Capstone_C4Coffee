const jwt = require("jsonwebtoken");
const { renewAccessToken } = require("../utils/cookieHandler");

function authorizeToken(req, res, next) {
  if (!req.cookies.refreshToken) {
    req.status = 400;
    req.error = "Unauthorized";
  } else {
    const { accessToken, refreshToken } = req.cookies;
    if (!accessToken) {
      const { id } = jwt.verify(
        refreshToken.split(" ")[1],
        process.env.REFRESH_TOKEN_SECRET
      );

      const accessToken = renewAccessToken(res, id);
      console.log(accessToken);
      req.user = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    } else {
      req.user = jwt.verify(
        accessToken.split(" ")[1],
        process.env.ACCESS_TOKEN_SECRET
      );
    }
  }
  next();
}

module.exports = authorizeToken;

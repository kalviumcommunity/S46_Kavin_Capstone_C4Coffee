const {
  init,
  signupUser,
  loginUser,
  googleAuthUrl,
  googleCallback,
} = require("../controller/userController");
const { signupValidator, loginValidator } = require("../middleware/validator");

const router = require("express").Router();

router.get("/", init);

router.post("/signup", signupValidator, signupUser);

router.post("/login", loginValidator, loginUser);

router.post("/google", googleAuthUrl);

router.post("/redirect", googleCallback);

module.exports = router;

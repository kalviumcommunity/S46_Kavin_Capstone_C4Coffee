const { init, signupUser, loginUser } = require("../controller/userController");
const { signupValidator, loginValidator } = require("../middleware/validator");

const router = require("express").Router();

router.get("/", init);

router.post("/signup", signupValidator, signupUser);

router.post("/login", loginValidator, loginUser);

module.exports = router;

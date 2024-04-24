const User = require("../models/userModel");
const { hashPassword, checkPassword } = require("../utils/passwordHandler");
const setCookies = require("../utils/cookieHandler");

function init(req, res) {
  res.status(200).json({ message: "/user route" });
}

//MARK: User sign up function
const signupUser = async (req, res) => {
  //Checking if there is any error in the sent data
  if (req.error) {
    return res.status(400).send(req.error);
  }

  const { username, email, password } = req.value;

  //Checking if the user exists
  const user = await User.findOne({ username });
  if (user) {
    return res.status(400).send("User already exists");
  }

  try {
    //Adding new user to data base
    const newUser = await User.create({
      username,
      email,
      password: hashPassword(password),
    });

    setCookies(res, newUser._id);
    res.status(201).json({ username });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

//MARK: User login function
async function loginUser(req, res) {
  //Checking if there is any error in the sent data
  if (req.error) {
    return res.status(400).send(req.error);
  }

  const { username, password } = req.value;

  //Checking if the user exists
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).send("User does not exist");
  }

  if (!checkPassword(password, user.password)) {
    return res.status(400).send("Incorrect password");
  }

  setCookies(res, user._id);

  res.status(201).json({ username });
}

module.exports = { init, signupUser, loginUser };

const { OAuth2Client } = require("google-auth-library");

const User = require("../models/userModel");
const { hashPassword, checkPassword } = require("../utils/passwordHandler");
const setCookies = require("../utils/cookieHandler");
const getUserData = require("../config/googleAuthClient");

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

//MARK: Google auth url creating function
async function googleAuthUrl(req, res) {
  const oAuth2Client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    `http://localhost:3000/user/redirect`
  );

  const authorizeUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: "https://www.googleapis.com/auth/userinfo.email openid",
    prompt: "consent",
  });

  res.json({ url: authorizeUrl });
}

//MARK: Google callback function
async function googleCallback(req, res) {
  const code = req.query.code;

  try {
    const oAuth2Client = new OAuth2Client(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      `http://localhost:3000/user/redirect`
    );

    const tokenRes = await oAuth2Client.getToken(code);
    await oAuth2Client.setCredentials(tokenRes.tokens);

    const userCred = oAuth2Client.credentials;

    const userData = await getUserData(userCred.access_token);
    console.log(userData);

    const { name, email } = userData;
    const user = await User.findOne({ username: name });

    if (user) {
      setCookies(res, user._id);
    } else {
      const newUser = await User.create({
        username: name,
        email,
      });

      setCookies(res, newUser._id);
    }
  } catch (e) {
    console.log(e.message);
  }

  res.redirect(303, process.env.FRONTEND_URL);
}

module.exports = { init, signupUser, loginUser, googleAuthUrl, googleCallback };

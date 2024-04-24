function init(req, res) {
  res.status(200).json({ message: "/user route" });
}

async function signupUser(req, res) {
  if (req.error) {
    return res.status(400).send(req.error);
  }
  const { username, email, password } = req.value;
  res.status(200).json(req.value);
}

async function loginUser(req, res) {
  if (req.error) {
    return res.status(400).send(req.error);
  }
  const { username, password } = req.value;
  res.status(200).json(req.value);
}

module.exports = { init, signupUser, loginUser };

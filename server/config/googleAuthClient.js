async function getUserData(accessToken) {
  const res = await fetch(
    `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`
  );
  const data = await res.json();
  return data;
}

module.exports = getUserData;

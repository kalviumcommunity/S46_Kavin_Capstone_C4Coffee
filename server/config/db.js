const mongoose = require("mongoose");

function connectToDB() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((e) => console.log(`Error: ${e.message}`));
}

function checkConnection() {
  return mongoose.connection.readyState === 1;
}

module.exports = { connectToDB, checkConnection };

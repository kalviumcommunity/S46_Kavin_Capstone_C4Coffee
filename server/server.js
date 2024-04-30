require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const userRoute = require("./routes/userRoute");
const shopRoute = require("./routes/shopReviewRoute");
const commentRoute = require("./routes/commentRoute");
const { connectToDB, checkConnection } = require("./config/db");
const authorizeToken = require("./middleware/tokenAuthorizer");

const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use(cors({ credentials: true, origin: true, withCredentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

app.get("/db", (req, res) => {
  res.status(200).json({
    connectionStatus: checkConnection() ? "Connected" : "Not Connected",
  });
});

app.use("/user", userRoute);
app.use("/shop", authorizeToken, shopRoute);
app.use("/comment", authorizeToken, commentRoute)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectToDB();
  console.log(`Server running on port ${PORT}`);
});

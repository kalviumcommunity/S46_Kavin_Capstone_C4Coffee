require("dotenv").config();

const express = require("express");
const cors = require("cors");

const userRoute = require("./routes/userRouter");
const { connectToDB, checkConnection } = require("./config/db");

const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

app.get("/db", (req, res) => {
  res.status(200).json({
    connectionStatus: checkConnection() ? "Connected" : "Not Connected",
  });
});

app.use("/user", userRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectToDB();
  console.log(`Server running on port ${PORT}`);
});

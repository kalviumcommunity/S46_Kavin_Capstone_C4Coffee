require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get('/api', (req, res) => {
  res.status(200).json({ messgae: 'Sent get request' });
});

app.post('/api', (req, res) => {
  res.status(201).json({ messgae: 'Sent post request' });
});

app.patch('/api', (req, res) => {
  res.status(200).json({ messgae: 'Sent patch request' });
});

app.delete('/api', (req, res) => {
  res.status(200).json({ messgae: 'Sent delete request' });
});

app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}`);
});

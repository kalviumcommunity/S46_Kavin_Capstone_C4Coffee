const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    validate: {
      validator: (v) => {
        const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return re.test(v);
      },
      message: 'Enter a valid email',
    },
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model('User', userSchema);

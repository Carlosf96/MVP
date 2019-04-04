const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create the schema for a User
const UserSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  date: {
    type: String,
    require: true
  }
});

module.exports = User = mongoose.model('Users', UserSchema);
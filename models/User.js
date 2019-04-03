const mongoose = require('mongoose');
const Schema = mongoose.schema;

//create the schema for a User
const UserSchema = new Schema({
  name: {
    type: string,
    require: true
  },
  email: {
    type: string,
    require: true
  },
  password: {
    type: string,
    require: true
  },
  date: {
    type: string,
    require: true
  }
});

module.exports = User = mongoose.model('users', UserSchema);
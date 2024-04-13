const mongoose = require('mongoose');

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    timestamps: {
        type: Date,
        default: Date.now
    },
  }); 

  module.exports = mongoose.model('User', userSchema);
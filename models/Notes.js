const mongoose = require('mongoose');

const notesSchema = new Schema({
    title:{
        type: String,
    },
    description: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true,
        default: "General"   
    },
    timestamps: {
        type: Date,
        default: Date.now
    },
  }); 

  module.exports = mongoose.model('Notes', notesSchema);
const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  concern: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Form = mongoose.model('Form', formSchema);

module.exports = Form;

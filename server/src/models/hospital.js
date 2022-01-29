const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  password: { type: String, required: true },
  
  role: { type: String, default: 'HOSPITAL' },
  approved: { type: Boolean, default: false },
});

module.exports = mongoose.model('Hospital', hospitalSchema);

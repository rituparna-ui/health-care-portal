const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  sex: { type: Number, required: true, enum: [0, 1] },
  password: { type: String, required: true, select: false },
  role: { type: String, default: 'USER' },
  verified: { type: Boolean, default: false },
  otp: Number,
});

module.exports = mongoose.model('User', userSchema);

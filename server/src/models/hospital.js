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
  resources: {
    general: {
      type: Number,
      required: true,
      default: 0,
    },
    icu: {
      type: Number,
      required: true,
      default: 0,
    },
    oxy: {
      type: Number,
      required: true,
      default: 0,
    },
    ventilator: {
      type: Number,
      required: true,
      default: 0,
    },
  },
});

module.exports = mongoose.model('Hospital', hospitalSchema);

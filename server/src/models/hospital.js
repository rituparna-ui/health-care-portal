const mongoose = require('mongoose');

const bloodGroupSchema = new mongoose.Schema({
  group: String,
  qty: Number,
});

const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  resources: {
    type: {
      beds: Number,
      oxy: Number,
      blood: {
        type: [bloodGroupSchema],
        default: [],
      },
    },
    default: {
      beds: 100,
      oxy: 200,
      blood: [],
    },
  },
});

hospitalSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Hospital', hospitalSchema);

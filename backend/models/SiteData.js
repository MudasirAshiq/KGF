const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  features: [String]
});

const StatSchema = new mongoose.Schema({
  id: String,
  value: Number,
  suffix: String,
  label: String
});

const PolicyItemSchema = new mongoose.Schema({
  id: String,
  year: String,
  title: String,
  description: String
});

const CalorificItemSchema = new mongoose.Schema({
  name: String,
  value: Number,
  color: String
});

const ModelStepSchema = new mongoose.Schema({
  title: String,
  desc: String,
  iconName: String
});

const SiteDataSchema = new mongoose.Schema({
  vision: {
    headline: String,
    content: String
  },
  products: [ProductSchema],
  stats: [StatSchema],
  founder: {
    name: String,
    role: String,
    bio: String,
    address: String,
    linkedin: String
  },
  policy: [PolicyItemSchema],
  calorificData: [CalorificItemSchema],
  modelSteps: [ModelStepSchema],
  contactEmail: String,
  contactAddress: String
}, { timestamps: true });

module.exports = mongoose.model('SiteData', SiteDataSchema);
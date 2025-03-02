import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
});

export const Experience = mongoose.models.Experience || mongoose.model('Experience', experienceSchema);
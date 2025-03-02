import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  institution: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  description: String,
  date: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
});

export const Education = mongoose.models.Education || mongoose.model('Education', educationSchema);
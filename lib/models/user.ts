import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  avatar: String,
  template: {
    type: String,
    default: 'Marc'
  }
}, {
  timestamps: true
});

export const User = mongoose.models.User || mongoose.model('User', userSchema); 
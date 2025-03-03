import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  template: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  profile_picture: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  cvURL: {
    type: String,
    required: true,
  },
  contact: {
    type: Object,
    required: true,
  },
  tagline: {
    type: String,
    required: true,
  },
  about_me: {
    type: String,
    required: true,
  },
  skills: [{
    type: String,
    required: true,
  }],
}, {
  timestamps: true
});

export const Profile = mongoose.models.Profile || mongoose.model('Profile', profileSchema);
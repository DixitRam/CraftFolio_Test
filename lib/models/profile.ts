import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  location: String,
  cvURL: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  linkedin: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  profile_summary: String,
  tagLine: {
    type: String,
    required: true,
  },
  aboutMe: String,
  skills: [{
    type: String,
    required: true,
  }],
  avatar: String,
}, {
  timestamps: true
});

export const Profile = mongoose.models.Profile || mongoose.model('Profile', profileSchema);
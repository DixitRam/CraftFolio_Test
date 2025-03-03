import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  technologies: [{
    type: String,
    required: true,
  }],
  project_url: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
});

export const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);
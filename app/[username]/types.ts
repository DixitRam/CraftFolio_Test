//This is Schema for the User Details

export interface UserSchema {
  username: string;
  template: string;
  name: string;
  profile_picture: string;
  location: string;
  cvURL: string;
  contact: {
    email: string;
    linkedin: string;
    github: string;
  };
  profile_summary: string;
  experience: any[]; 
}

export interface TemplatePageProps {
  userDetails: UserSchema;
}

export interface ClientTemplateProps {
  user: UserSchema;
  templateName: string;
} 
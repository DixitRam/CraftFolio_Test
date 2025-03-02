'use client'

interface UserDetails {
  username: string;
  name: string;
  // add other user properties you need
}

interface TemplateProps {
  userDetails: UserDetails;
}

export default function MarcTemplate({ userDetails }: TemplateProps) {
  return (
    <div>
      <h1>Marc Template</h1>
      <p>Username: {userDetails.username}</p>
      <p>Name: {userDetails.name}</p>
    </div>
  );
} 
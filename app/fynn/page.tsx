import PortfolioTemplate from "@/components/Templates/fynn";
import data from "@/public/FakeData.json";

export default function Fynn() {
  const user = data.users.find(u => u.username === "james123");
  
  if (!user) {
    return <div>User not found</div>;
  }

  return <PortfolioTemplate 
    name={user.name}
    role={user.experience[0].role}
    description={user.profile_summary}
    resumeUrl={user.cvURL}
  />;
}

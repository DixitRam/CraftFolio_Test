import { notFound } from "next/navigation";
import data from "@/public/FakeData.json"

const users = data.users;

export default async function userPortfolio({ params }: { params: { username: string } }) {
  const user = users.find(u => u.username === params.username);
    
  if (!user) {
    return notFound();
  }

  try {
    const userTemplate = user.template || 'Marc'; // Default to Marc if no template specified
    const TemplatePage = (await import(`@/app/Templates/${userTemplate}/page`)).default;
    
    return (
      <div>
        <TemplatePage userDetails={user} />
      </div>
    );
  } catch (error) {
    console.error('Template loading error:', error);
    return notFound();
  }
}

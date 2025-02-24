// app/[username]/page.tsx
import { notFound } from "next/navigation";
import data from "@/public/FakeData.json";

const users = data.users;

// Explicit mapping to prevent Webpack from bundling all templates
const templateMap: Record<string, () => Promise<{ default: React.ComponentType<any> }>> = {
    Marc: () => import("@/components/Templates/Marc/Marc_Portfolio"),
    Rahul: () => import("@/components/Templates/Rahul/Rahul_Portfolio"),
};

export default async function userPortfolio({ params }: { params: { username: string } }) {
    const user = users.find((u) => u.username === params.username);
    
    if (!user) {
        return notFound();
    }

    const userTemplate = user.template;

    if (!templateMap[userTemplate]) {
        return notFound(); // Handle case where template does not exist
    }

    const TemplatePage = (await templateMap[userTemplate]()).default;

    return <TemplatePage userDetails={user} />;
}
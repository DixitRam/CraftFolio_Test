import { notFound } from "next/navigation";
import data from "@/public/FakeData.json";
import dynamic from "next/dynamic";

const users = data.users;

const templateMap = {
    Marc: dynamic(() => import("@/components/Templates/Marc/Marc_Portfolio")),
    Rahul: dynamic(() => import("@/components/Templates/Rahul/Rahul_Portfolio")),
};

export default function userPortfolio({ params }: { params: { username: string } }) {
    const user = users.find((u) => u.username === params.username);
    
    if (!user) {
        return notFound();
    }
    const userTemplate = user.template as keyof typeof templateMap;
    const TemplatePage = templateMap[userTemplate];

    if (!TemplatePage) {
        return notFound();
    }

    return <TemplatePage userDetails={user} />;
}

import { notFound } from "next/navigation";
import ClientTemplate from "./clientTemplate";
import data from "@/public/FakeData.json";

const users = data.users;

export default async function userPortfolio({ params }: { params: { username: string } }) {
    const user = users.find((u) => u.username === params.username);
    if (!user) return notFound();

    return <ClientTemplate user={user} templateName={user.template} />;
}
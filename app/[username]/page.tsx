import { notFound } from "next/navigation";
import ClientTemplate from "./clientTemplate";
import data from "@/public/FakeData.json";
import { getUserDetails } from "./connectDB";
const users = data.users;

export default async function userPortfolio({ params }: { params: { username: string } }) {
    const user = await getUserDetails(params.username);
    if (!user) return notFound();

    return <ClientTemplate user={user} templateName={user.template} />;
}
import { notFound } from "next/navigation";
import data from "@/public/FakeData.json"
const users = data.users;
export default async function userPortfolio({ params }: { params: { username: string } }) {

    const user = users.filter((u)=>{
        return u.username == params.username;
    }).at(0);
    
  if (!user) {
    return notFound(); // Show 404 page if user is not found
  }

  let userTemplate = user.template;
  const TemplateLayout = (await import(`@/app/Templates/${userTemplate}/layout`)).default;


  const TemplatePage = (await import(`@/app/Templates/${userTemplate}/page`)).default;
  console.log("XXXXXXXXXXXX")
  console.log(TemplatePage)
 
  console.log(user)
   return (
     <>

     <TemplatePage userDetails={user} /> 

         </>
     
   )
}

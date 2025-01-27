import { Card, CardContent,CardDescription,CardHeader,CardTitle } from "@/components/ui/card"



  
  const portfolios = [
    {
      image: "https://cdn.dribbble.com/userupload/18736499/file/original-f6f19f9124595fd0b64f29eebf219f31.jpg?resize=1024x768&vertical=center",
      name: "E-Commerce Platform",
      description: "A feature-rich e-commerce platform with a focus on UX/UI design and seamless transactions."
    },
    {
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      name: "Fitness Tracker App",
      description: "A mobile application for tracking workouts and diet plans, featuring personalized recommendations."
    },
    {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      name: "Portfolio Website",
      description: "A personal portfolio website showcasing projects, blogs, and professional experience."
    },
    {      image: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",

      name: "Real Estate CRM",
      description: "A CRM tool designed for real estate businesses to manage properties and clients efficiently."
    },
    {
      image: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      name: "Travel Booking Website",
      description: "A travel booking platform that allows users to search, compare, and book flights and hotels."
    }
  ];
  
  
export default function homepage(){
return(
<div className="grid container mx-auto px-4 sm:px-6 lg:px-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  
 {portfolios.map((data,index)=>(
    // <Card  key={index} className="h-80 w-96 ">
    //         <img  className="object-cover rounded-xl max-h-48 w-full " src={data.image} alt="" />
    //     <CardTitle className="m-3">
    //         {data.name}
    //     </CardTitle>
    //     <CardDescription className="mx-3">
    //         {data.description}
    //     </CardDescription>
    // </Card>
    <Card key={index} className="h-80 w-96 group relative">
    <div className="relative">
        <img className="object-cover rounded-xl max-h-48 w-full" src={data.image} alt="" />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all">
                <button className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium">
                    Preview
                </button>
            </div>
        </div>
    </div>
    <CardTitle className="m-3">
        {data.name}
    </CardTitle>
    <CardDescription className="mx-3">
        {data.description}
    </CardDescription>
</Card>

 ))}
</div >

)
}
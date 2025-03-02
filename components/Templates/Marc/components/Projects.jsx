import Image from "next/image";
import { Project } from "./elements/project";

export default function Projects({userProjects,githubURL}) {

  return (
    <section
      id="work"
      className="relative flex flex-col items-center justify-center px-5 py-20"
    >
      <h2 className="mb-14 text-center text-4xl font-black">
        Projects I&rsquo;ve created
      </h2>
    
    
      <div className="grid md:grid-cols-2 gap-10">
   
        {userProjects.map((p,index) => (
          
             <Project
             key={index}
             image={p.thumbnail.toString()}
             title={p.name}
             description={p.description}
             link={p.project_url}
           />
           
          ))}
     
      </div>

      <a
        target="_blank"
        href={githubURL}
        className="mt-10 inline-block rounded-xl border-[1px] border-black px-4 py-2 text-center"
      >
        Check out my code
      </a>

      <div className="topBorder absolute bottom-0 left-0 h-[0.2rem] w-full"></div>
      <div className="corners absolute bottom-[-8px] left-0 z-10 h-5 w-5"></div>
      <div className="corners absolute bottom-[-8px] right-0 z-10 h-5 w-5 rotate-180"></div>
    </section>
  );
}

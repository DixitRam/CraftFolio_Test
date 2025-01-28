import Image from "next/image";
import ProfilePicture from "../assets/Marc-Ruizenaar-Front-end-Developer.jpg";

Const About =[
  
]

export default function AboutMe() {
  return (
    <section
      data-aos="fade-in"
      id="aboutme"
      className="relative flex flex-col items-center gap-10 px-5 py-10 sm:flex-row sm:px-20 sm:py-20"
    >
      <div className="w-[300px] h-[300px]">
        <Image
          src={ProfilePicture}
          height={300}
          width={300}
          alt="Profile picture Marc Ruizenaar Front-end developer"
          loading="eager"
          className="rounded-full"
          srcSet={`${ProfilePicture}?w=150 150w,
           ${ProfilePicture}?w=300 300w,
           ${ProfilePicture}?w=600 600w`}
          sizes="(max-width: 300px) 150px, 300px"
        />
      </div>
      <div>
        <p>My name is</p>
        <div className="relative w-max">
          <h2 className="relative mb-5 text-4xl font-black">
            Marc Ruizenaar
          </h2>
          <span className="absolute bottom-[-5px] block h-1 w-full bg-mainGreen"></span>
        </div>
        <p>I&rsquo;m a Dutch developer living in Stockholm, I&rsquo;ve been passionate about coding for the past three years. I&rsquo;ve spent these years building custom WordPress themes and plugins.</p>
        <p className="mt-2">
          When I&rsquo;m not coding, you can probably find me windsurfing or enjoying
          other sports.
        </p>
      </div>

      <div className="topBorder absolute bottom-0 left-0 h-[0.2rem] w-full"></div>
      <div className="corners absolute bottom-[-8px] left-0 z-10 h-5 w-5"></div>
      <div className="corners absolute bottom-[-8px] right-0 z-10 h-5 w-5 rotate-180"></div>
    </section>
  );
}

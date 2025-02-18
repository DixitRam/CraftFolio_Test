import Image from "next/image";
import BackgroundImage from "../assets/backgroundImage.jpg";

export default function ItsTime({email}) {
  return (
    <section data-aos="fade-in" className="z-20 relative flex h-[200px] flex-col mt-10 items-center justify-center gap-5 overflow-hidden">
      <Image
        src={BackgroundImage}
        height={300}
        width={300}
        alt="Profile picture Marc Ruizenaar Front-end developer"
        loading="lazy"
        className="unset-0 absolute -z-10 w-screen object-cover"
      />

      <p className="text-4xl font-bold text-white">Let&rsquo;s connect!</p>
      <div className="flex gap-4">

      
      <a href={`mailto:${email}`}
          className="rounded border-[1px] border-white px-4 py-2 flex items-center gap-3 text-white"
        >
          <span className="relative flex h-3 w-3">
            <span className="bg-mainGreen absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-600"></span>
          </span>
          Call me directly
        </a>
      </div>


    </section>
  );
}

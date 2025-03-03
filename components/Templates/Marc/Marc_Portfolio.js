import AboutMe from "./components/AboutMe";
import JumboHeader from "./components/JumboHeader";
import Projects from "./components/Projects";
import MyExperience from "./components/MyExperience";
import ItsTime from "./components/ItsTime";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles.css";

import { Manrope } from 'next/font/google';
const ManRope = Manrope({
  subsets: ['latin'],
  display: 'swap',
})


export default function Home({userDetails}) {
  const user = userDetails;
  console.log(userDetails)


  return (
    <>
      <div className="border_div container relative mx-auto bg-white px-5 md:px-0 ">
        <div className="leftBorder absolute left-0 top-0 hidden h-full w-[0.2rem] md:block"></div>
        <div className="rightBorder absolute right-0 top-0 hidden h-full w-[0.2rem] md:block"></div>
        <Header ProfilePicture={user.profile_picture} email={user.contact.email} />
        <main>
        <JumboHeader Tagline={user.tagline} email={user.contact.email}/>

        <AboutMe  ProfilePicture={user.profile_picture} Name={user.name} AboutMe={user.about_me}/>

        <Projects userProjects={user.projects} githubURL={user.contact.github}/>

          <MyExperience userExperiences={user.experience} userEducation={user.education} userCV={user.cvURL} userLinkedin={user.contact.linkedin} />
        </main>
      </div>
      <ItsTime email={user.contact.email}/>

    </>
  );
}
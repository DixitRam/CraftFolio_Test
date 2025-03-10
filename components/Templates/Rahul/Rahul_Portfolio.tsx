import type React from "react"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Skills from "./components/Skills/Skills"
import ExpEdu from "./components/Experience/ExpEdu_Parichay"
import Projects from "./components/Projects/Projects_Parichay"
import Contact from "./components/Contact/Contact"
import "./Portfolio.css"


export default function Page({userDetails}: {userDetails: any}) {
  const { name, location, tagline, cvURL, contact, skills } = userDetails

  return (
    <div className="app m-0" id="app">
      <Navbar />
      <Home name={name} location={location} tagline={tagline} cvURL={cvURL} contact={contact} />
      <Skills skills={skills} />
      <ExpEdu userExp={userDetails.experience} userEdu={userDetails.education} />
      <Projects userPrj={userDetails.projects} />
      <Contact name={name} email={contact.email} github={contact.github} linkedin={contact.linkedin} />
    </div>
  )
}



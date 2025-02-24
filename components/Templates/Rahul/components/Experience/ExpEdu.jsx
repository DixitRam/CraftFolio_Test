"use client"

import { useState } from "react"
import Experience from "./Experience"
import Education from "./Education_Parichay"
import "./ExpEdu.css"

const ExpEdu = () => {
  const [tabValue, setTabValue] = useState("exp")
  return (
    <div className="expedu" id="expedu">
      <div className="expedu-content">
        <div className="expedu-content-title">
          <h2 className="section-title">{userData.experienceData.title}</h2>
        </div>
        <div className="expedu-content-description">
          <p className="section-desc">{userData.experienceData.desc}</p>
        </div>
        <div className="expedu-sections">
          <div className="tabs">
            <div
              className={tabValue === "exp" ? "exp-tab tab active" : "exp-tab tab"}
              onClick={() => setTabValue("exp")}
            >
              <p>Experience</p>
            </div>
            <div
              className={tabValue === "edu" ? "edu-tab tab active" : "edu-tab tab"}
              onClick={() => setTabValue("edu")}
            >
              <p>Education</p>
            </div>
          </div>
          <div className="exp-edu-details">{tabValue === "exp" ? <Experience /> : <Education />}</div>
        </div>
      </div>
    </div>
  )
}

export default ExpEdu


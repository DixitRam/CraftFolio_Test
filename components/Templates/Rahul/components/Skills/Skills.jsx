'use client'

import { motion } from "framer-motion"
import "./Skills.css"
import SkillCard from "./SkillCard"

const Skills = ({ skills }) => {
  // Function to handle both array and object structure of skills
  const renderSkills = () => {
    if (Array.isArray(skills)) {
      // If skills is an array, render each skill directly
      return skills.map((skill, index) => (
        <SkillCard
          key={index}
          item={{
            id: index,
            name: skill,
          }}
        />
      ))
    } else {
      // If skills is an object, flatten all skill arrays and render
      return Object.entries(skills).flatMap(([category, skillList], categoryIndex) =>
        skillList.map((skill, index) => (
          <SkillCard
            key={`${categoryIndex}-${index}`}
            item={{
              id: `${categoryIndex}-${index}`,
              name: skill,
            }}
          />
        )),
      )
    }
  }

  return (
    <div className="skills" id="skills">
      <div className="skills-content">
        <motion.div
          className="skills-content-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          //   viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <h2 className="section-title">Skills</h2>
        </motion.div>
        <motion.div
          className="skills-content-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          //   viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <p className="section-desc">Technologies I work with</p>
        </motion.div>
        <motion.div
          className="skills-content-items"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          //   viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {renderSkills()}
        </motion.div>
      </div>
    </div>
  )
}

export default Skills


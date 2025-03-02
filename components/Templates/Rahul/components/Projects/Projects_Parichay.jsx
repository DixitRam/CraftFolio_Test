// import ProjectCard from "./ProjectCard";
'use client'

import { motion } from "framer-motion"
import "./Projects.css"

import ProjectCard from "./ProjectCard_Parichay"

const Projects = (userProjects) => {
  console.log(userProjects)
  return (
    <div className="projects" id="projects">
      <div className="projects-content">
        <motion.div
          className="projects-content-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          //   viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h1 className="section-title">Personal Projects</h1>
        </motion.div>
        <motion.div
          className="projects-content-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          //   viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="section-desc">Code-Powered Designs in Action</p>
        </motion.div>
        <div className="projects-content-items">
          {userProjects.userPrj.map((item) => {
            return <ProjectCard key={item.id} item={item} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects


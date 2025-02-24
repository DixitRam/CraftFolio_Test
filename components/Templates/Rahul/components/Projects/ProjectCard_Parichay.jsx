'use client'

import LanguageIcon from "@mui/icons-material/Language"
import { motion } from "framer-motion"
import "./Projects.css"

const ProjectCard = ({ item }) => {
  console.log("-----------------")
  console.log(item)
  return (
    <motion.div
      className="project-item"
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      //   viewport={{ once: true }}
    >
      <div className="project-image">
        <img src={item.thumbnail} alt={item.name} />
      </div>
      <div className="project-details">
        <div className="project-title">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
        <div className="project-stacks">
          <div className="stacks">
            {item.technologies.map((tech) => {
              return (
                <p key={tech} className="tech-stack">
                  {tech}
                </p>
              )
            })}
          </div>
          <div className="project-btns">
            <a href={item.project_url} target="_blank" rel="noopener noreferrer" className="view-btn">
              <LanguageIcon className="live-icon" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard


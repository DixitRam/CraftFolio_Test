'use client'

import EmailIcon from "@mui/icons-material/Email"
import WavingHandIcon from "@mui/icons-material/WavingHand"
import CodeIcon from "@mui/icons-material/Code"
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied"
import { motion } from "framer-motion"
import "./Contact.css"

const Contact = ({ name, email, github, linkedin }) => {
  const firstName = name.split(" ")[0]

  return (
    <div className="contact" id="contact">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 0.1, ease: "easeOut" }}
      >
        <div className="grid-mask"></div>
        <motion.div
          className="contact-content-left"
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
        >
          <div className="left-details">
            <h2>
              <WavingHandIcon className="hello-icon" /> Hi, I'm {firstName}
            </h2>
            <h2>Let's Connect!</h2>
          </div>
          <div className="left-email">
            <EmailIcon sx={{ fontSize: "2.5em" }} className="email-icon" />
            <div className="email-text">
              <p>Feel free to reach out to me at:</p>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          </div>
          <div className="left-socials">
            <p>Socials : </p>
            <a href={linkedin} aria-label="linkedin profile" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={github} aria-label="github profile" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          className="contact-content-right"
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
        >
          <div className="fun-container">
            <div className="fun-content">
              <span className="big-emoji">💻</span>
              <CodeIcon className="code-icon" />
              <p className="fun-text">
                Let's collaborate and bring ideas to life!
                <span className="emoji-inline">🚀</span>
              </p>
            </div>
            <a href={`mailto:${email}`} className="availability-status">
              <div className="status-indicator"></div>
              <p>Available for new opportunities</p>
              <SentimentVerySatisfiedIcon className="smile-icon" />
            </a>
          </div>
        </motion.div>
      </motion.div>
      <span className="copyright">
        <i>&#169; {new Date().getFullYear()} | All rights reserved.</i>
      </span>
    </div>
  )
}

export default Contact


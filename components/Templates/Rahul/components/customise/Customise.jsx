"use client"

import { useState, useEffect } from "react"
import EditIcon from "@mui/icons-material/Edit"
import EditOffIcon from "@mui/icons-material/EditOff"
import { motion } from "framer-motion"
import "./Customise.css"
import CustomOptions from "./CustomOptions"

const Customise = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false) // State to track if screen is mobile

  // Use useEffect to track screen width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769) // Set isMobile based on window width
    }

    window.addEventListener("resize", handleResize)
    handleResize() // Check initial window size

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="customise" id="customise">
      <motion.div
        className="customise-content"
        initial={{ width: "60px", minWidth: "60px", height: "60px" }}
        animate={{
          width: isOpen ? (isMobile ? "auto" : "auto") : "60px",
          height: isOpen && isMobile ? "auto" : "60px",
          minWidth: "60px",
          minHeight: "60px",
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className={isOpen ? "edit-button open" : "edit-button close"} onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <EditOffIcon className="icon" /> : <EditIcon className="icon" />}
        </div>

        {isOpen && <CustomOptions />}
      </motion.div>
    </div>
  )
}

export default Customise


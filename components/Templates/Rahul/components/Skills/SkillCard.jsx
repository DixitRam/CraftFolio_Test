"use client"

import { useEffect, useState } from "react"
import "./Skills.css"
import { iconMapping } from "../../utils/iconMapping"

const SkillCard = ({ item }) => {
  const [Icon, setIcon] = useState(null)

  useEffect(() => {
    const loadIcon = async () => {
      try {
        const normalizedSkill = item.name.toLowerCase()
        let iconInfo = null

        // Find matching icon configuration
        for (const [key, value] of Object.entries(iconMapping)) {
          if (normalizedSkill.includes(key)) {
            iconInfo = value
            break
          }
        }

        // If no match found, use default database icon
        if (!iconInfo) {
          const { FaCode } = await import("react-icons/fa")
          setIcon(() => FaCode)
          return
        }

        // Dynamically import the icon
        if (iconInfo.lib === "fa") {
          const faModule = await import("react-icons/fa")
          setIcon(() => faModule[iconInfo.icon])
        } else if (iconInfo.lib === "si") {
          const siModule = await import("react-icons/si")
          setIcon(() => siModule[iconInfo.icon])
        }
      } catch (error) {
        console.error("Error loading icon:", error)
        // Load default icon if there's an error
        const { FaDatabase } = await import("react-icons/fa")
        setIcon(() => FaDatabase)
      }
    }

    loadIcon()
  }, [item.name])

  return (
    <div className="skill-item">
      <div className="item-image">{Icon && <Icon size={24} />}</div>
      <div className="item-title">
        <p>{item.name}</p>
        <span>{item.type}</span>
      </div>
    </div>
  )
}

export default SkillCard


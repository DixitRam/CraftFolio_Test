"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { hexToHSL } from "../../utils/hexToHsl"
import "./Customise.css"

// Default colors
const defaultColors = {
  primaryColor: "#ff9900",
  secondaryColor: "#454545",
  textColor: "#fdfdfd",
  backgroundColor: "#0a0a0a",
}

const CustomOptions = () => {
  const initialColors = JSON.parse(sessionStorage.getItem("customColors")) || defaultColors
  const [colors, setColors] = useState(initialColors)

  // Helper function to find the complementary color in hex format
  const getComplementaryColor = (color = "") => {
    const colorPart = color.slice(1)
    const ind = Number.parseInt(colorPart, 16)
    let iter = ((1 << (4 * colorPart.length)) - 1 - ind).toString(16)
    while (iter.length < colorPart.length) {
      iter = "0" + iter
    }
    return "#" + iter
  }

  // Save the current color choices to session storage when they change
  useEffect(() => {
    sessionStorage.setItem("customColors", JSON.stringify(colors))
  }, [colors])

  // Update CSS variables for color changes
  const updateCSSVariable = (property, value) => {
    const { h, s, l } = hexToHSL(value)
    const hslValue = `hsl(${h}, ${s}%, ${l}%)`

    setColors((prevColors) => {
      const colorKeyMap = {
        "--background-color": "backgroundColor",
        "--text-color": "textColor",
        "--primary-color": "primaryColor",
        "--secondary-color": "secondaryColor",
      }

      const colorKey = colorKeyMap[property]
      return { ...prevColors, [colorKey]: value }
    })

    // Apply the color changes to CSS variables
    document.documentElement.style.setProperty(property, hslValue)

    if (property === "--background-color") {
      const tempHSL = `hsl(${h}, ${s}%, ${l + 6}%)`
      document.documentElement.style.setProperty("--background-color-2", tempHSL)
    }
    if (property === "--text-color") {
      const tempHSL = `hsl(${h}, ${s}%, ${l - 29}%)`
      document.documentElement.style.setProperty("--grey-color", tempHSL)
    }
  }

  // Recalculate complementary colors based on current colors
  const complementaryPrimaryColor = getComplementaryColor(colors.primaryColor)
  const complementarySecondaryColor = getComplementaryColor(colors.secondaryColor)
  const complementaryTextColor = getComplementaryColor(colors.textColor)
  const complementaryBackgroundColor = getComplementaryColor(colors.backgroundColor)

  return (
    <motion.div className="customise-options" transition={{ delay: 0.5 }}>
      <div className="color-option">
        <label style={{ color: complementaryPrimaryColor }}>Primary</label>
        <input
          type="color"
          value={colors.primaryColor}
          style={{ border: `1px solid ${colors.primaryColor}` }}
          onChange={(e) => updateCSSVariable("--primary-color", e.target.value)}
        />
      </div>
      <div className="color-option">
        <label style={{ color: complementarySecondaryColor }}>Secondary</label>
        <input
          type="color"
          value={colors.secondaryColor}
          style={{ border: `1px solid ${colors.secondaryColor}` }}
          onChange={(e) => updateCSSVariable("--secondary-color", e.target.value)}
        />
      </div>
      <div className="color-option">
        <label style={{ color: complementaryTextColor }}>Text</label>
        <input
          type="color"
          value={colors.textColor}
          style={{ border: `1px solid ${colors.textColor}` }}
          onChange={(e) => updateCSSVariable("--text-color", e.target.value)}
        />
      </div>
      <div className="color-option">
        <label style={{ color: complementaryBackgroundColor }}>Background</label>
        <input
          type="color"
          value={colors.backgroundColor}
          style={{ border: `1px solid ${colors.backgroundColor}` }}
          onChange={(e) => updateCSSVariable("--background-color", e.target.value)}
        />
      </div>
    </motion.div>
  )
}

export default CustomOptions


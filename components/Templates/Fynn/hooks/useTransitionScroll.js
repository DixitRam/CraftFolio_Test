"use client";
import { useState } from 'react';

export const useTransitionScroll = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  const scrollToSectionWithTransition = (e, sectionId) => {
    e.preventDefault();
    setIsTransitioning(true);
    setCurrentSection(sectionId);

    // Instead of scrolling, we'll just show/hide sections
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Scroll to top instantly
        window.scrollTo(0, 0);
        // Show the target section
        element.style.display = 'block';
      }
      setIsTransitioning(false);
    }, 1400);
  };

  return { isTransitioning, currentSection, scrollToSectionWithTransition };
}; 
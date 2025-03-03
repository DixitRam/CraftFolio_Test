/* eslint-disable react/no-unescaped-entities */
"use client";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const info = [
  {
    icon: <FaPhoneAlt />,
    label: "Phone",
    value: "(+233) 599 515 047",
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "sackeyemmanuelfynn@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Address",
    value: "Adade St, Kasoa 00233",
  },
];

const quotes = [
  {
    text: "The best way to predict the future is to create it.",
    author: "Abraham Lincoln"
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt"
  },
  {
    text: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House"
  },
  {
    text: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs"
  },
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci"
  },
  {
    text: "Life is 10% what happens to you and 90% how you react to it.",
    author: "Charles R. Swindoll"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  }
];

const Contact = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto-change quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000); // Change quote every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0
    })
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[20px]">
          {/* Contact Info */}
          <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-8">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-4">
                    <div className="w-[42px] h-[42px] xl:w-[62px] xl:h-[62px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[22px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.label}</p>
                      <h3 className="text-[16px]">{item.value}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          
          {/* Automatic Quote Slider */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <div className="p-8 bg-[#27272c] rounded-xl">
              <h3 className="text-3xl text-accent mb-6">Inspirational Quotes</h3>
              
              {/* Quote Slider */}
              <div className="bg-[#1f1f23] p-6 rounded-lg relative min-h-64 flex flex-col justify-center">
                <div className="text-accent text-3xl absolute top-6 left-6 opacity-40">
                  <FaQuoteLeft />
                </div>
                
                <div className="overflow-hidden relative px-4 py-8">
                  <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                      key={currentQuote}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.5 }
                      }}
                      className="px-4"
                    >
                      <p className="text-white/90 text-xl italic mb-6">{quotes[currentQuote].text}</p>
                      <p className="text-accent text-right">— {quotes[currentQuote].author}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                <div className="text-accent text-3xl absolute bottom-6 right-6 opacity-40">
                  <FaQuoteRight />
                </div>
                
                {/* Progress Indicator Dots */}
                <div className="flex justify-center gap-2 mt-6">
                  {quotes.map((_, index) => (
                    <div 
                      key={index} 
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentQuote ? 'bg-accent w-4' : 'bg-white/30'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import background from '../../assets/img/background.jpg';

export default function StartingPage() {
  const [showButtons, setShowButtons] = useState(false);
  const [showdesc, setShowDesc] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowButtons(true);
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowDesc(true);
    }, 4000);
  }, [])

  return (
    <div className="h-screen w-screen bg-cover bg-center snap-y"
        style={{ backgroundImage: `url(${background})` }}
    >
        <motion.div 
          initial={{ y: "200%", opacity: 0 }}
          animate={{ y: "50%", opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}>
          <h1 className="font-['Jacquard_12'] text-6xl font-bold dark:text-white text-center">
          Ponder.
          </h1>
          <p className="text-left text-white absolute inset-y-80 left-20 flex flex-col text-8xl font-bold font-[Jacquard_14]">Explore <span>Endlessly.</span></p>
        </motion.div>
     
      {showButtons && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ backgroundColor: "#1f2937" }}
          className="border-white border-1 text-white right-0 flex bg-black rounded-full px-3 py-2 font-['Roboto'] absolute right-40 -mt-5 text-bold cursor-pointer">
          Get Started
          </motion.button>
      )}

      {showdesc && (
        <motion.div
          initial={{ scale: 0.5, opacity:0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-60 mx-auto text-left break-normal absolute right-10 bottom-5"
        >
          <p className="text-white text-xs font-sans italic">
          Jacques-Louis David's 1787 painting depicts Socrates' calm acceptance of death among his mourning disciples.
          </p>
          </motion.div>

      )}
    </div>
  );
};





























'use client'

import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.7, // Delay between animations for each child
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

const Slogan = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full pt-8">
<motion.div
        className="absolute z-10 flex flex-col items-center "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* First Line */}
        <motion.p
          variants={textVariants}
          className="text-lg md:text-2xl font-semibold text-center text-gray-800 mb-4"
        >
          <span className="text-xl md:text-4xl text-sky-600 font-bold">CARING </span> for people
        </motion.p>

        {/* Second Line */}
        <motion.p
          variants={textVariants}
          className="text-lg md:text-2xl font-semibold text-center text-gray-800 mb-4"
        >
          <span className="text-xl md:text-4xl text-amber-500 font-bold">COMPASSIONATE</span> towards the poor
        </motion.p>

        {/* Third Line */}
        <motion.p
          variants={textVariants}
          className="text-lg md:text-2xl font-semibold text-center text-gray-800"
        >
          <span className="text-xl md:text-4xl text-green-600 font-bold">CHARITABLE</span> to anyone living in poverty
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Slogan;
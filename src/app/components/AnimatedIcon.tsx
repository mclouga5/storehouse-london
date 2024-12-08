"use client";

import { motion } from "framer-motion";

interface AnimatedIconProps {
  pathData: string;
  viewBox?: string;
  className?: string;
  strokeColor?: string;
  fillColor?: string;
  duration?: number;
  strokeWidth?: string;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  pathData,
  viewBox = "0 0 24 24",
  className = "",
  strokeColor = "rgba(0, 0, 0, 1)",
  fillColor = "rgba(252, 211, 77, 1)",
  duration = 4,
  strokeWidth
}) => {
  const svgIconVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(252, 211, 77, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: fillColor,
    },
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      className={className}
      strokeWidth={strokeWidth}
    >
      <motion.path
        d={pathData}
        variants={svgIconVariants}
        initial="hidden"
        animate="visible"
        transition={{
          default: {
            duration: duration,
            ease: "easeIn",
            delay: 0.5,
          },
          fill: {
            duration: duration,
            ease: "easeIn",
            delay: 1,
          },
        }}
        style={{
          stroke: strokeColor,
        }}
      />
    </motion.svg>
  );
};

export default AnimatedIcon;

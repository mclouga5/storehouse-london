"use client";

import React, { useEffect, useState } from "react";
import "../globals.css";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

interface CardProps {
  element: {
    id: number;
    imageSrc: string;
    altText: string;
    title: string;
    description: string;
  };
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
  hover: {
    scale: 1.05,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

export default function SplashCard({ element }: CardProps) {
  const predefinedHues = [
    { hueA: 0, hueB: 40 },
    { hueA: 180, hueB: 250 },
    { hueA: 30, hueB: 65 },

    { hueA: 120, hueB: 160 },
    { hueA: 290, hueB: 320 },
    { hueA: 80, hueB: 120 },
    { hueA: 340, hueB: 10 },
    { hueA: 20, hueB: 40 },
    { hueA: 60, hueB: 90 },
    { hueA: 80, hueB: 120 },
    { hueA: 100, hueB: 140 },
    { hueA: 205, hueB: 245 },
    { hueA: 260, hueB: 290 },
    { hueA: 290, hueB: 320 },
  ];
  const { hueA, hueB } =
    predefinedHues[(element.id - 1) % predefinedHues.length];
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    scale: 0,
  });

  useEffect(() => {
    const width = window.innerWidth / 3;
    const height = window.innerHeight;
    const scale = Math.min(width, height) / 1010;
    setDimensions({ width, height, scale });
  }, []);

  const { scale } = dimensions;
  const clipPath = `path("M ${0 * scale} ${303.5 * scale} C ${0 * scale} ${292.454 * scale
    } ${8.995 * scale} ${285.101 * scale} ${20 * scale} ${283.5 * scale} L ${460 * scale
    } ${219.5 * scale} C ${470.085 * scale} ${218.033 * scale} ${480 * scale} ${228.454 * scale
    } ${480 * scale} ${239.5 * scale} L ${500 * scale} ${430 * scale
    } C ${500 * scale}  ${441.046 * scale} ${491.046 * scale}  ${450 * scale} ${480 * scale} ${450 * scale} L ${20 * scale} ${450 * scale} C ${8.954 * scale} ${450 * scale}  ${0 * scale}  ${441.046 * scale} ${0 * scale}  ${430 * scale}  Z")`;

  return (
    <motion.div
      className="card-container w-full h-full flex flex-col overflow-visible"
      initial="offscreen"
      whileInView="onscreen"
      whileHover="hover"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash ml-6 mt-8 overflow-visible" style={{ background, clipPath }} />
      <motion.div
        className="card flex flex-col text-center gap-4 sm:h-[40vh] h-[50vh]"
        variants={cardVariants}
      >
        <div className="w-full h-1/2 w-full h-1/2 flex items-center justify-center absolute top-0">
          <Image
            src={element.imageSrc}
            alt={element.altText}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="mt-36 sm:mt-32 p-2">
          <h2 className="md:text-xl font-bold">{element.title}</h2>
          <p className="text-sm leading-tight">{element.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

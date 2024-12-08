"use client";

import { useEffect, useState } from "react";
import { motion, animate, useMotionValue } from "framer-motion";
import Card from "../components/Card";
import useMeasure from "react-use-measure";

const PhotoCarousel = () => {
  const images = [
    { src: "/media/volunteers1.jpg", caption: "The team at work!" },
    {
      src: "/media/volunteers2.jpg",
      caption: "More of our amazing volunteers!",
    },
    {
      src: "/media/volunteers4.jpg",
      caption: "Lots of hot food from local Caribbean restaurants",
    },
    {
      src: "/media/volunteers5.jpg",
      caption: "Bakery and snacks always go down a treat",
    },
    {
      src: "/media/volunteers6.jpg",
      caption: "Fruit, veg, canned foods, and drinks for all",
    },
    {
      src: "/media/volunteers3.jpg",
      caption: "Distributing food, toiletries and more!",
    },
    {
      src: "/media/volunteers9.jpg",
      caption: "Women's, men's and kids clothes",
    },
    { src: "/media/volunteers8.jpg", caption: "Pre-service team picture :)" },
    {
      src: "/media/volunteers7.jpg",
      caption: "Thumbs up from Team Leader Ian!",
    },
  ];

  const FAST_DURATION = 40;
  const SLOW_DURATION = 80;

  const [duration, setDuration] = useState(FAST_DURATION);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  const [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    const finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }),
    [xTranslation, width, duration, rerender];

  return (
    <div className="py-8 h-full">
      <motion.div
        className="absolute left-0 flex gap-4"
        ref={ref}
        style={{ x: xTranslation }}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {[...images, ...images].map((imageData, index) => (
          <Card image={imageData.src} key={index} caption={imageData.caption} />
        ))}
      </motion.div>
    </div>
  );
};

export default PhotoCarousel;

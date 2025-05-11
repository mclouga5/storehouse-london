"use client";

import Image from "next/image";
import Slogan from "./components/Slogan";
import Gallery from "./components/Gallery";
import PhotoCarousel from "./components/Carousel";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SplashCard from "./components/SplashCard";

const heroVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const testimonialsVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.3, duration: 1 } },
};

export default function Home() {
  const testimonials = [
    {
      id: 1,
      text: "Amazing community support! I always feel welcomed here.",
      author: "Anonymous",
    },
    {
      id: 2,
      text: "They helped me when I needed it most. So grateful for this initiative!",
      author: "Anonymous",
    },
    {
      id: 3,
      text: "The Storehouse has made a significant impact in our community.",
      author: "Anonymous",
    },
  ];

  const whatWeDoExplained = [
    {
      id: 1,
      imageSrc: "/media/volunteers3.jpg",
      altText: "volunteers",
      title: "Fill Essential Gaps",
      description: "We provide essential ingredients to encourage nutritious home cooking. We supply everyday toiletries, cleaning and personal hygiene products.",
    },
    {
      id: 2,
      imageSrc: "/media/IMG_5197.JPG",
      altText: "volunteers",
      title: "Reduce Food Waste",
      description: "We connect with shops, such as Tesco and Aldi, and local restaurants who donate food.",
    },
    {
      id: 3,
      imageSrc: "/media/volunteers5.jpg",
      altText: "volunteers",
      title: "Community Volunteering",
      description: "We are a volunteer led organisation working together to collect, organise and distribute donations every Sunday.",
    }
  ]


  return (
    <motion.main
      initial="hidden"
      animate="visible"
      className="w-screen flex flex-col items-center"
    >
      {/* Hero Section */}
      <div className="h-[calc(100vh-7rem)] w-screen flex flex-col items-center relative">
        <div className="absolute inset-0">
          <Image
            src="/media/teamPic.jpg"
            alt="Storehouse London team photo"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        <motion.div
          variants={heroVariants}
          className="z-10 flex flex-col w-full h-full text-center items-center mb-2"
        >
          <motion.h1
            className=" text-2xl sm:text-5xl font-extrabold text-white mb-4 absolute top-24 drop-shadow-lg w-screen py-2"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="overline decoration-amber-500"> Empowering the Community</span>
            <span className="underline decoration-blue-500 underline-offset-8"> Since 2012</span>
          </motion.h1>
          <span className="absolute bottom-4 flex flex-col items-center gap-4">
            <div className=" flex flex-col sm:gap-4 bg-gray-800/60 rounded-lg p-2 text-gray-200">
              <motion.p
                className="text-lg sm:text-2xl font-semibold drop-shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
              >
                <span className="font-extrabold">Caring</span> for people.
                <span className="font-extrabold"> Compassionate</span> towards the poor.
                <span className="font-extrabold"> Charitable</span> to anyone living in poverty.
              </motion.p>

              <motion.p
                className="sm:text-xl drop-shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
              >
                Join us in making a difference in Hackney. Together we make a
                lasting impact.
              </motion.p>
            </div>
            {/* Call-to-Action Buttons */}
            <div className="flex flex-wrap gap-6 z-10 w-full items-center justify-center">
              <motion.a
                variants={buttonVariants}
                whileHover="hover"
                className="p-2 sm:px-6 sm:py-3 bg-[#FCEBB2] rounded-lg font-semibold"
                href="/about"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Learn More
              </motion.a>

              <div className="relative group inline-block">
                <motion.a
                  variants={buttonVariants}
                  whileHover="hover"
                  className="p-2 sm:px-6 sm:py-3 bg-[#FCEBB2] rounded-lg font-semibold"
                  href="/contact"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  Get Involved
                </motion.a>

                {/* Tooltip */}
                <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-max max-w-xs bg-gray-700/50 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                  Just drop us an email!
                </span>
              </div>

              <motion.a
                href="https://www.gofundme.com/f/storehouse-summer-gig-and-fundraiser?attribution_id=sl:8781551d-a826-4d06-b2cd-b1b9a609130e&lang=en_GB&ts=1746788115&utm_campaign=fp_sharesheet&utm_content=amp13_t1-amp14_c&utm_medium=customer&utm_source=copy_link&v=amp14_c"
                variants={buttonVariants}
                whileHover="hover"
                className="p-2 sm:px-6 sm:py-3 bg-[#FCEBB2] text-black rounded-lg font-semibold"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Donate Now
              </motion.a>
            </div>
          </span>
        </motion.div>
      </div>

      <div className="w-full bg-gray-100 py-20 mb-96 sm:mb-0">
        <motion.div
          className="flex flex-col gap-18 items-center"
          initial="hidden"
          animate="visible"
          variants={testimonialsVariants}
        >
          <div className="mb-20 h-[50vh]">
            <h2 className="text-4xl font-bold text-center mb-16">
              What We Do
            </h2>
            <div className="flex flex-wrap md:flex-nowrap gap-20 justify-center items-center pl-[25vw] md:pl-0">
              {whatWeDoExplained.map((element, index) => (
                <SplashCard
                  key={index}
                  element={element}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="w-full bg-gray-100 py-20   mt-96 sm:mt-12 h-[50%]">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-4xl font-bold text-center my-5"
        >
          What People Are Saying
        </motion.h2>

        <motion.div
          className="flex flex-col gap-8 items-center"
          initial="hidden"
          animate="visible"
          variants={testimonialsVariants}
        >
          <div className="mt-12">
            <div className="flex flex-wrap gap-8 justify-center">
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  text={testimonial.text}
                  author={testimonial.author}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-12 rounded-lg"
      >
        <PhotoCarousel />
      </motion.div>
    </motion.main>
  );
}

const TestimonialCard = ({
  text,
  author,
}: {
  text: string;
  author: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation only once

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="p-6 bg-white shadow-lg rounded-lg w-80"
    >
      <p>{text}</p>
      <h3 className="font-semibold text-lg mt-4">— {author}</h3>
    </motion.div>
  );
};

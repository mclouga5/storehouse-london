"use client";

import { motion } from "framer-motion";
import AnimatedIcon from "../components/AnimatedIcon";

export default function About() {
  const svgIconVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(252, 211, 77, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(252, 211, 77, 1)",
    },
  };
  return (
    <main className="md:p-6 grid grid-rows-[auto_1fr_1fr] gap-4">
      {/* Video at the Top */}
      <div className="w-full flex justify-center">
        <video
          className="w-full h-auto rounded-lg shadow-lg"
          src="/media/StorehouseVideo.mp4" // <-- replace with your actual video path
          controls
          playsInline

        />
      </div>
  
      {/* First Row */}
      <div className="flex items-center justify-center gap-10 mt-6">
        <AnimatedIcon
          pathData={
            "M12 1l-12 12h3v10h18v-10h3l-12-12zm0 18c-1.607-1.626-3-2.84-3-4.027 0-1.721 2.427-2.166 3-.473.574-1.695 3-1.246 3 .473 0 1.187-1.393 2.402-3 4.027zm8-11.907l-3-3v-2.093h3v5.093z"
          }
          viewBox="0 0 24 24"
          className="w-1/4 h-2/3"
          strokeWidth="0.75"
          strokeColor="rgba(250, 139, 161)"
          fillColor="rgba(217, 30, 24)"
          duration={5}
        />
        <div className="md:px-10 w-1/2">
          <p className="md:text-lg">
            The Storehouse was founded in 2010 by Errol and Patsy Francis. With
            the help of our many volunteers, we provide food and clothing to our
            Hackney community every Sunday. Together, we collect donations from
            our generous sponsors then organise and distribute the donations to
            all that come through our doors; no questions asked.
            <br />
            <br />
            We continuously welcome new members to the team, who come as and when
            they can - for some people that means every week, for some maybe once
            a month. Either way, everyone&apos;s time is greatly appreciated, so
            if this sounds like something you&apos;d be interested in, please reach
            out! You can find our details on the contact page.
          </p>
        </div>
      </div>
  
      {/* Second Row */}
      <div className="flex items-center justify-center md:gap-10 flex-row-reverse md:flex-row">
        <div className="md:w-5/12 w-1/2 pl-4 md:pl-0">
          <h2 className="font-semibold text-lg md:text-xl mb-4">
            Don&apos;t have time to spare but still interested in helping out?
          </h2>
          <p className="md:text-lg">
            As a charity, the Storehouse is always open to donations. Whether
            it&apos;s a small contribution, a fundraising effort, or some old clothes
            you were going to throw out, we and all those that come through
            our doors greatly appreciate it.
          </p>
        </div>
        <AnimatedIcon
          pathData={
            "M29.83,89.55V52.63h16.61c7.04,1.26,14.08,5.08,21.12,9.51h12.9c5.84,0.35,8.9,6.27,3.22,10.16 c-4.52,3.32-10.49,3.13-16.61,2.58c-4.22-0.21-4.4,5.46,0,5.48c1.53,0.12,3.19-0.24,4.64-0.24c7.64-0.01,13.92-1.47,17.77-7.5 l1.93-4.51l19.19-9.51c9.6-3.16,16.42,6.88,9.35,13.87c-13.9,10.11-28.15,18.43-42.73,25.15c-10.59,6.44-21.18,6.22-31.76,0 L29.83,89.55L29.83,89.55z M76.08,7.8c3.63-3.79,6.17-7.06,11.77-7.7c10.5-1.21,20.16,9.55,14.86,20.14 c-1.51,3.02-4.58,6.6-7.98,10.12c-3.73,3.86-7.86,7.65-10.76,10.52l-7.89,7.83l-6.52-6.28c-7.84-7.55-20.63-17.06-21.05-28.84 c-0.3-8.25,6.22-13.54,13.7-13.44C68.91,0.23,71.72,3.56,76.08,7.8L76.08,7.8L76.08,7.8z M0,49.08h24.83v44.18H0V49.08L0,49.08z"
          }
          viewBox="-5 -10 145 120"
          className="w-1/4 h-7/12"
          strokeWidth="2.5"
          strokeColor="rgba(246, 169, 35)"
          fillColor="rgba(255, 195, 0)"
          duration={5}
        />
      </div>
    </main>
  );
};
"use client";

import { motion } from "framer-motion";
import AnimatedIcon from "../components/AnimatedIcon";
import Image from "next/image";

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
  return  (
    <main className="md:p-6 gap-2">
        <div className ="text-2xl font-semibold text-gray-800 px-2">
            Upcoming Events
        </div>
        <div>
       <img
                className="h-98 w-full items-center"
                src="/media/flyer110525.jpg"
        />
        The Storehouse are pround to host a fundraising event on May 11, 2025, at Kahaila Café on Brick Lane,
        featuring The Storehouse Reggae Gosepl Band to support the homeless and unemployed in the Hackney area. <br /> <br />
        The event offers free admission, Caribbean food and a donation drive via a  <a className="text-blue-500 hover:underline" href="https://gofund.me/6f5319e1">GoFundMe</a> drive,
        aligning with Storehouse London&apos;s 15-year mission to combat poverty, as highlighted by their social media and 
        web presence.<br /> <br />
        Kahalia Café, a community hub since 2012, supports Charitable initiatives by hosting events such as this,
        and often donating a portion of proceeds to local causes, as noted on their website.

        </div>
    </main>
  );
}
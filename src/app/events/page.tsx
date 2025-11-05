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
    return (
<main className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-blue-50 py-10 px-4 md:px-12 space-y-12">

{/* Upcoming Events */}
<section>
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 drop-shadow-sm">
    🌟 Upcoming Events 🌟
  </h2>

  <div className="flex flex-col md:flex-row items-center bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
    {/* Flyer */}
    <div className="md:w-1/2 w-full">
      <img
        className="w-full h-auto object-cover md:rounded-l-2xl"
        src="/media/event_16-11-25.jpeg"
        alt="Storehouse Fundraising Event Flyer"
      />
    </div>

    {/* Description */}
    <div className="md:w-1/2 w-full p-6 md:p-10 text-gray-700 leading-relaxed text-base md:text-lg">
      <p>
        The Storehouse are pround to host a fundraising event on 16th of November, 2025, at Kahaila Café on Brick Lane,
        featuring The Storehouse Reggae Gosepl Band to support the homeless and unemployed in the Hackney area. <br /> <br />
        The event offers free admission, Caribbean food and a donation drive via a{" "}
        <a className="text-blue-500 hover:text-blue-700 hover:underline font-semibold" href="https://www.gofundme.com/f/storehouse-summer-gig-and-fundraiser?attribution_id=sl:48bb6b43-6e8f-481a-8f8b-3cc87b2ebb22&lang=en_GB&utm_campaign=fp_sharesheet&utm_content=amp13_t1&utm_medium=customer&utm_source=qr_code" target="_blank" rel="noopener noreferrer">
          GoFundMe
        </a>{" "}
        drive, aligning with Storehouse London&apos;s 15-year mission to combat poverty, as highlighted by their social media and
        web presence. <br /> <br />
        Kahalia Café, a community hub since 2012, supports Charitable initiatives by hosting events such as this,
        and often donating a portion of proceeds to local causes, as noted on their website.
      </p>
    </div>
  </div>
</section>

{/* Past Events */}
<section>
  <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-700 mb-8 drop-shadow-sm">
    Past Events
  </h2>

  <div className="flex flex-col md:flex-row items-center bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
    <div className="md:w-1/2 w-full">
      <img
        className="w-full h-auto object-cover md:rounded-l-2xl"
        src="/media/flyer110525.jpg"
        alt="Storehouse May 2025 Event Flyer"
      />
    </div>
  </div>
</section>
</main>
    );
}
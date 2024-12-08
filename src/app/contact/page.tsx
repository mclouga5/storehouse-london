'use client';

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the Map component with SSR disabled
const Map = dynamic(() => import("../components/Map"), { ssr: false });

export default function Contact() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <main className="p-6 sm:p-11 h-full w-screen sm:p-20">
      <div className="w-full h-full sm:flex gap-2 sm:mt-[5%]">
        <div className="flex flex-col gap-10 w-[50%] sm:mt-20">
          <div>
            <h1 className="text:xl sm:text-2xl font-bold mb-4">Contact Us</h1>
            <p>
              Email: storehouselondon20@gmail.com <br />
            </p>
          </div>

          <div>
            <h1 className="text:xl sm:text-2xl font-bold mb-4">Where to Find Us</h1>
            <div className="flex flex-1 gap-96">
              <p className="whitespace-nowrap">
                Regent&apos;s Estate Pensioner&apos;s Club
                <br />
                33 Brougham Rd,
                <br />
                Hackney,
                <br />
                London E8 4PD.
              </p>
            </div>
          </div>
        </div>
        <Map />
      </div>
    </main>
  );
}

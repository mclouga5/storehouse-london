'use client';

import Link from 'next/link';
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 bg-white shadow-md w-screen h-30">
      <div className="mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Image
          src="/media/storehouseLogo.png"
          alt="Storehouse London logo"
          width={180}
          height={20}
          layout='fit'
          priority/>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="text-gray-600 hover:text-gray-900">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
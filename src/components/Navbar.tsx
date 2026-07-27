"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="w-full bg-whiteBg border-b border-border">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="font-semi_bold_24pt text-2xl tracking-tight flex items-center">
          <span className="bg-gradient-to-r from-blueGradient1 via-blueGradient2 to-greenGradient1 to-[80%] bg-clip-text text-transparent">
            Grey Dental
          </span>
        </Link>

        <div className="flex items-center space-x-8">
          {/* Nav Links */}
          <div className="flex items-center space-x-6 font-inter-medium_18pt text-blueText text-[15px]">
            <Link href="/about" className="hover:text-black transition-colors">About us</Link>
            <Link href="/education" className="hover:text-black transition-colors">Dental Education</Link>
            <Link href="/community" className="hover:text-black transition-colors">Community</Link>
            <Link href="/resources" className="hover:text-black transition-colors">Resources</Link>
            <Link href="/instructors" className="hover:text-black transition-colors">Instructors</Link>
            <Link href="/partners" className="hover:text-black transition-colors">Partners</Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-6 font-inter-medium_18pt text-[15px]">
            <motion.div whileHover="hover" className="inline-block">
              <Link
                href="/enroll"
                className="bg-greenBg text-blueBg px-5 py-2.5 rounded font-medium flex items-center gap-2 hover:bg-[#6be4ab] transition-colors"
              >
                <span>Enroll now</span>
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  variants={{ hover: { x: 4 } }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </motion.svg>
              </Link>
            </motion.div>
            <Link href="/login" className="text-blueText hover:text-black transition-colors">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

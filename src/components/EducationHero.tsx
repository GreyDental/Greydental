"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EducationHero() {
  const stats = [
    { number: "05", label: "Specialty tracks" },
    { number: "03", label: "Learning formats" },
    { number: "02", label: "Certificate Pathways" },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Text & CTA Content */}
        <div className="flex flex-col items-start max-w-xl">
          
          {/* Pill Badge */}
          <div className="bg-white border border-gray-200/80 px-5 py-2 rounded-full mb-8 shadow-sm">
            <span className="text-[12px] font-semi_bold_24pt tracking-[0.14em] text-darkBlueText uppercase">
              DENTAL EDUCATION
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-semi_bold_24pt text-darkBlueText leading-[1.14] tracking-tight mb-6">
            Choose your dental learning pathway
          </h1>

          {/* Subtitle */}
          <p className="text-gray-500 font-regular_18pt text-[16px] md:text-[18px] leading-relaxed mb-10">
            Learn through self-paced online courses, hybrid programs, live workshops, and accredited certification pathways - all built around real clinical caseloads.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-14">
            <motion.div whileHover="hover" className="inline-block">
              <Link
                href="#courses"
                className="bg-blueBg text-white px-6 py-3.5 rounded-lg font-semi_bold_24pt text-[15px] flex items-center gap-2 hover:bg-blueBtnBg transition-colors"
              >
                <span>Browse Courses</span>
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

            <Link
              href="#pathways"
              className="border border-gray-300 hover:bg-gray-50 group inline-flex items-start justify-center h-[52px] px-6 rounded-lg text-[15px] font-semi_bold_24pt text-darkBlueText overflow-hidden transition-colors duration-200"
            >
              <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2">
                <span className="h-[52px] flex items-center">View Certificate Pathways</span>
                <span className="h-[52px] flex items-center">View Certificate Pathways</span>
              </span>
            </Link>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap items-center gap-10 sm:gap-14 pt-4 border-t border-gray-100 w-full">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-3xl md:text-4xl font-semi_bold_24pt text-darkBlueText mb-1">
                  {stat.number}
                </span>
                <span className="text-xs md:text-sm font-regular_18pt text-gray-500">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Hero Image with exact Team component styling */}
        <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] max-w-md mx-auto lg:max-w-none px-4 lg:px-0">
          {/* Green backdrop */}
          <div className="absolute inset-0 bg-greenBg rounded-[32px] -rotate-3 scale-[0.98] shadow-lg"></div>
          
          {/* Actual image wrapper */}
          <div className="absolute inset-0 rounded-[32px] overflow-hidden shadow-2xl border-4 border-white/10">
            <Image 
              src="/education-page/hero-image.jpg" 
              fill 
              className="object-cover" 
              alt="Choose your dental learning pathway"
              priority 
            />
          </div>
        </div>

      </div>
    </section>
  );
}

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
    <section className="w-full bg-white py-12 sm:py-16 md:py-24 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Text & CTA Content */}
        <div className="flex flex-col items-start max-w-xl w-full flex-1">
          
          {/* Pill Badge */}
          <div className="bg-white border border-gray-200/80 px-4 sm:px-5 py-2 rounded-full mb-6 sm:mb-8 shadow-sm">
            <span className="text-[11px] sm:text-[12px] font-semi_bold_24pt tracking-[0.14em] text-darkBlueText uppercase">
              DENTAL EDUCATION
            </span>
          </div>

          {/* Title */}
          <h1 className="text-[32px] sm:text-4xl md:text-5xl lg:text-[54px] font-semi_bold_24pt text-darkBlueText leading-[1.14] tracking-tight mb-5 sm:mb-6">
            Choose your dental learning pathway
          </h1>

          {/* Subtitle */}
          <p className="text-gray-500 font-regular_18pt text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed mb-8 sm:mb-10">
            Learn through self-paced online courses, hybrid programs, live workshops, and accredited certification pathways - all built around real clinical caseloads.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mb-10 sm:mb-14 w-full">
            <motion.div whileHover="hover" className="inline-block w-full sm:w-auto">
              <Link
                href="/courses"
                className="bg-blueBg text-white px-6 py-3.5 rounded-lg font-semi_bold_24pt text-[15px] flex items-center justify-center gap-2 hover:bg-blueBtnBg transition-colors w-full"
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
              className="border border-gray-300 hover:bg-gray-50 inline-flex items-center justify-center h-[52px] px-6 rounded-lg text-[15px] font-semi_bold_24pt text-darkBlueText transition-colors duration-200 w-full sm:w-auto"
            >
              View Certificate Pathways
            </Link>
          </div>

          {/* Stats Row */}
          <div className="flex flex-row flex-wrap items-start gap-8 sm:gap-12 md:gap-14 pt-4 border-t border-gray-100 w-full">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col min-w-[96px]">
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

        {/* Right Column: Hero Image */}
        <div className="relative w-full flex-1 min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] max-w-md mx-auto lg:max-w-none px-2 sm:px-4 lg:px-0">
          <div className="absolute inset-0 bg-greenBg rounded-[24px] sm:rounded-[32px] -rotate-3 scale-[0.98] shadow-lg"></div>
          
          <div className="absolute inset-0 rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl border-4 border-white/10">
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

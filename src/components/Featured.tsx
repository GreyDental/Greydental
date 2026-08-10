"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const MotionArrowRight = motion(ArrowRight);

export default function Featured() {
  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-12 gap-5 sm:gap-6">
          <div className="flex flex-col">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semi_bold_24pt text-darkBlueText mb-2 tracking-tight">Featured</h2>
            <p className="text-gray-500 text-[15px] sm:text-[16px] font-regular_18pt">Accredited education from world-class instructors.</p>
          </div>
          <motion.div whileHover="hover" className="inline-block w-full sm:w-auto">
            <Link href="/courses" className="bg-greenBg text-black px-6 py-2.5 rounded-[4px] font-inter-medium_18pt text-[15px] hover:bg-[#7ED9B5] transition-colors inline-flex items-center justify-center gap-2 w-full sm:w-auto">
              View all courses
              <MotionArrowRight className="w-4 h-4" variants={{ hover: { x: 5 } }} transition={{ duration: 0.2 }} />
            </Link>
          </motion.div>
        </div>

        {/* Cards Area — flex for phone stacking */}
        <div className="flex flex-col md:flex-row md:flex-wrap gap-8">
          {/* Card 1 */}
          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col hover:shadow-lg transition-shadow min-w-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]">
            <div className="relative h-56 sm:h-64 w-full">
              <Image
                src="/main-page-featured/feature-1.jpg"
                alt="Remote Learning"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 flex flex-col flex-grow">
              <h3 className="text-[20px] sm:text-[22px] font-semi_bold_24pt text-darkBlueText mb-3 leading-snug">
                Foundations of Endodontics - Remote Learning
              </h3>
              <p className="text-[15px] text-gray-500 font-regular_18pt mb-6 flex-grow">
                Online course with videos, PDFs, quizzes.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 border border-gray-200 rounded text-xs font-inter-medium_18pt text-darkBlueText">Online</span>
                <span className="px-3 py-1 border border-gray-200 rounded text-xs font-inter-medium_18pt text-darkBlueText">Certificate</span>
                <span className="px-3 py-1 border border-gray-200 rounded text-xs font-inter-medium_18pt text-darkBlueText">Paid</span>
              </div>

              <Link href="/courses/endodontics-remote" className="w-full bg-blueBg hover:bg-blueBtnBg inline-flex items-center justify-center h-[50px] rounded-[6px] text-[15px] font-inter-medium_18pt transition-colors duration-200 text-white">
                View Course
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col hover:shadow-lg transition-shadow min-w-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]">
            <div className="relative h-56 sm:h-64 w-full">
              <Image
                src="/main-page-featured/feature-2.jpg"
                alt="Immersive Residency"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 flex flex-col flex-grow">
              <h3 className="text-[20px] sm:text-[22px] font-semi_bold_24pt text-darkBlueText mb-3 leading-snug">
                Foundations of Endodontics - Immersive Residency
              </h3>
              <p className="text-[15px] text-gray-500 font-regular_18pt mb-6 flex-grow">
                Online learning plus in-person skills training.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 border border-gray-200 rounded text-xs font-inter-medium_18pt text-darkBlueText">Hybrid</span>
                <span className="px-3 py-1 border border-gray-200 rounded text-xs font-inter-medium_18pt text-darkBlueText">Skills Exam</span>
              </div>

              <Link href="/courses/endodontics-residency" className="w-full bg-blueBg hover:bg-blueBtnBg inline-flex items-center justify-center h-[50px] rounded-[6px] text-[15px] font-inter-medium_18pt transition-colors duration-200 text-white">
                View Course
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col hover:shadow-lg transition-shadow min-w-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]">
            <div className="relative h-56 sm:h-64 w-full">
              <Image
                src="/main-page-featured/feature-3.jpg"
                alt="Dental Implants Bootcamp"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 flex flex-col flex-grow">
              <h3 className="text-[20px] sm:text-[22px] font-semi_bold_24pt text-darkBlueText mb-3 leading-snug">
                Dental Implants Bootcamp for General Practitioner
              </h3>
              <p className="text-[15px] text-gray-500 font-regular_18pt mb-6 flex-grow">
                Live case discussion and recording access.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 border border-gray-200 rounded text-xs font-inter-medium_18pt text-darkBlueText">Workshop</span>
                <span className="px-3 py-1 border border-gray-200 rounded text-xs font-inter-medium_18pt text-darkBlueText">Live</span>
              </div>

              <Link href="/courses/implants-bootcamp" className="w-full bg-blueBg hover:bg-blueBtnBg inline-flex items-center justify-center h-[50px] rounded-[6px] text-[15px] font-inter-medium_18pt transition-colors duration-200 text-white">
                View Workshop
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

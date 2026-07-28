"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const MotionArrowRight = motion(ArrowRight);

export default function AboutUs() {
  return (
    <section className="w-full py-20 bg-white mt-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Top Text Section */}
        <h2 className="text-xl md:text-2xl lg:text-[28px] font-inter-medium_18pt  mb-10 max-w-3xl mx-auto leading-[1.4]">
          <span className="text-darkBlueText font-semi_bold_24pt">
            Grey Dental is a continuing education platform built by practicing clinicians, for practicing clinicians - combining
          </span>{" "}
          <span className="text-[#64748B]">
            online modules, hands-on workshops, and real case documentation into one place to sharpen your skills.
          </span>
        </h2>

        {/* Button */}
        <motion.div whileHover="hover" className="inline-block mb-20">
          <button className="bg-greenBg text-blueBg px-8 py-3 rounded-full font-semi_bold_24pt text-[15px] hover:bg-[#5cd496] transition-colors inline-flex items-center gap-2">
            ABOUT US
            <MotionArrowRight className="w-4 h-4" variants={{ hover: { x: 5 } }} transition={{ duration: 0.2 }} />
          </button>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-20"></div>

        {/* Features — flex for phone */}
        <div className="flex flex-col md:flex-row md:flex-wrap gap-10 md:gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center w-full md:w-[calc(33.333%-1.34rem)]">
            <div className="w-16 h-16 bg-[#F8FAFC] rounded-2xl border border-gray-100 flex items-center justify-center mb-6">
              <Image src="/home-page-about-us/clinical.svg" alt="Clinical rigor" width={32} height={32} />
            </div>
            <h3 className="text-xl font-semi_bold_24pt text-darkBlueText mb-3">Clinical rigor</h3>
            <p className="text-sm text-gray-500 font-regular_18pt max-w-[250px]">
              Every course is built around real case protocols, not just theory
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center w-full md:w-[calc(33.333%-1.34rem)]">
            <div className="w-16 h-16 bg-[#F8FAFC] rounded-2xl border border-gray-100 flex items-center justify-center mb-6">
              <Image src="/home-page-about-us/accessibility.svg" alt="Accessibility" width={32} height={32} />
            </div>
            <h3 className="text-xl font-semi_bold_24pt text-darkBlueText mb-3">Accessibility</h3>
            <p className="text-sm text-gray-500 font-regular_18pt max-w-[250px]">
              Online and hybrid formats that fit around a working practice schedule
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center w-full md:w-[calc(33.333%-1.34rem)]">
            <div className="w-16 h-16 bg-[#F8FAFC] rounded-2xl border border-gray-100 flex items-center justify-center mb-6">
              <Image src="/home-page-about-us/community.svg" alt="Community" width={32} height={32} />
            </div>
            <h3 className="text-xl font-semi_bold_24pt text-darkBlueText mb-3">Community</h3>
            <p className="text-sm text-gray-500 font-regular_18pt max-w-[250px]">
              A network of specialists and peers, not a one-way lecture hall
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

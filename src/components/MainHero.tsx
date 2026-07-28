"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

function AnimatedCounter({ from, to, duration = 1.5 }: { from: number; to: number; duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value).toLocaleString();
          }
        },
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView]);

  return <span ref={nodeRef}>{from}</span>;
}

export default function MainHero() {
  return (
    <section className="w-full flex flex-col pt-8 sm:pt-12">
      {/* Top Section */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 px-4 sm:px-6 pb-14 sm:pb-20">
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-start text-left max-w-2xl w-full">
          {/* Badge */}
          <div className="inline-flex px-4 py-1.5 rounded-full border border-blue-200 bg-[#F4F8FD] mb-5 sm:mb-6">
            <span className="text-[10px] sm:text-xs font-semi_bold_24pt tracking-widest text-blueText uppercase">
              Preparing future dental professionals
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[36px] sm:text-5xl md:text-6xl font-semi_bold_24pt text-darkBlueText leading-[1.1] mb-5 sm:mb-6 tracking-tight">
            Clinical Excellence<br />Rooted in Care
          </h1>

          {/* Paragraph */}
          <p className="font-regular_18pt text-base sm:text-lg text-gray-500 mb-8 sm:mb-10 max-w-lg leading-relaxed">
            Structured online and hybrid CE courses in endodontics,
            implantology, and general dentistry - taught by practicing
            specialists, built for working clinicians.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <button className="bg-blueBtnBg hover:opacity-90 inline-flex items-center justify-center h-[46px] px-6 rounded-[4px] text-[15px] font-inter-medium_18pt transition-opacity duration-200 w-full sm:w-auto text-white">
              Explore courses
            </button>
            <button className="border border-blueText hover:bg-gray-50 inline-flex items-center justify-center h-[46px] px-6 rounded-[4px] text-[15px] font-inter-medium_18pt transition-colors duration-200 w-full sm:w-auto text-blueText">
              Join Community
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 flex justify-center lg:justify-end relative w-full">
          <Image
            src="/hero-sections/main-page-tooth.svg"
            alt="Glass tooth surrounded by rings"
            width={600}
            height={600}
            className="w-full max-w-[280px] sm:max-w-md lg:max-w-lg object-contain drop-shadow-sm"
            priority
          />
        </div>
      </div>

      {/* Bottom Strip - Break out of max-w-7xl constraint to be full bleed */}
      <div className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-blueBg py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6 text-center">
          <div className="flex flex-col items-center justify-center flex-1">
            <div className="text-4xl md:text-5xl font-semi_bold_24pt text-greenBg mb-2 flex items-center">
              <AnimatedCounter from={0} to={1240} duration={2} /><span className="text-3xl md:text-4xl">+</span>
            </div>
            <div className="text-white text-sm md:text-[15px] font-inter_medium_18pt text-gray-300">Students enrolled across all specialties</div>
          </div>
          <div className="flex flex-col items-center justify-center flex-1">
            <div className="text-4xl md:text-5xl font-semi_bold_24pt text-greenBg mb-2">
              <AnimatedCounter from={0} to={94} duration={2} /><span className="text-3xl md:text-4xl">%</span>
            </div>
            <div className="text-white text-sm md:text-[15px] font-inter_medium_18pt text-gray-300">Course completion rate</div>
          </div>
          <div className="flex flex-col items-center justify-center flex-1">
            <div className="text-4xl md:text-5xl font-semi_bold_24pt text-greenBg mb-2">
              <AnimatedCounter from={0} to={18} duration={2} />
            </div>
            <div className="text-white text-sm md:text-[15px] font-inter_medium_18pt text-gray-300">Practicing specialists teaching</div>
          </div>
        </div>
      </div>
    </section>
  );
}

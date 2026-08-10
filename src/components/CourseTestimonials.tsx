"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "The module structure mirrors how I actually think through a case — diagnosis, planning, then execution. I finished the course feeling genuinely more confident chairside.",
    name: "Rachel Bennett",
    role: "General Dentist, completed Remote track",
    avatar: "/Specific_Course_Page/testimonial-rachel.jpg",
  },
  {
    quote:
      "Hands-on guidance paired with structured modules made complex cases finally click. I use what I learned in clinic the same week.",
    name: "James Whitfield",
    role: "General Dentist, completed Hybrid track",
    avatar: "/Specific_Course_Page/testimonial-rachel.jpg",
  },
];

export default function CourseTestimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];
  const canGoPrev = index > 0;
  const canGoNext = index < testimonials.length - 1;

  const prev = () => {
    if (canGoPrev) setIndex((i) => i - 1);
  };
  const next = () => {
    if (canGoNext) setIndex((i) => i + 1);
  };

  return (
    <section className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-[#F4F7F8] py-14 sm:py-16 md:py-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-10 sm:gap-12 md:gap-14 w-full min-w-0">
        {/* Badge — 1px #3A738D border */}
        <div className="inline-flex self-start items-center px-4 py-1.5 rounded-full bg-white border border-[#3A738D]">
          <span className="text-[11px] sm:text-[12px] font-semi_bold_24pt tracking-[0.14em] text-[#3A738D] uppercase">
            Student Testimonials
          </span>
        </div>

        {/* Quote — fixed height so section doesn't jump between slides */}
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 md:gap-8 items-start min-h-[160px] sm:min-h-[180px] md:min-h-[200px] w-full min-w-0">
          <Image
            src="/Specific_Course_Page/quote.svg"
            alt=""
            width={60}
            height={52}
            className="w-10 h-auto sm:w-12 md:w-[56px] flex-shrink-0 mt-1"
          />
          <p className="text-[#3A738D] font-semi_bold_24pt text-[22px] sm:text-[26px] md:text-[32px] lg:text-[36px] leading-[1.35] tracking-tight max-w-4xl min-w-0">
            {active.quote}
          </p>
        </div>

        {/* Controls + author */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-8 w-full min-w-0 relative">
          <div className="flex items-center gap-2.5 flex-shrink-0 order-2 sm:order-1 self-center sm:self-auto">
            <button
              type="button"
              onClick={prev}
              disabled={!canGoPrev}
              aria-label="Previous testimonial"
              className={`w-12 h-12 sm:w-[56px] sm:h-[56px] rounded-full flex items-center justify-center transition-colors ${
                canGoPrev
                  ? "bg-[#2F5F75] hover:opacity-90"
                  : "bg-[#F0F0F0] cursor-default"
              }`}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M11.25 4.5L6.75 9l4.5 4.5"
                  stroke={canGoPrev ? "#FFFFFF" : "#777779"}
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              disabled={!canGoNext}
              aria-label="Next testimonial"
              className={`w-12 h-12 sm:w-[56px] sm:h-[56px] rounded-full flex items-center justify-center transition-colors ${
                canGoNext
                  ? "bg-[#2F5F75] hover:opacity-90"
                  : "bg-[#F0F0F0] cursor-default"
              }`}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6.75 4.5L11.25 9l-4.5 4.5"
                  stroke={canGoNext ? "#FFFFFF" : "#777779"}
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-4 order-1 sm:order-2 min-w-0 self-center sm:mx-auto">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-[3px] border-[#5ECAA0] flex-shrink-0">
              <Image
                src={active.avatar}
                alt={active.name}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <p className="text-[#2F5F75] font-semi_bold_24pt text-[16px] sm:text-[18px] leading-tight">
                {active.name}
              </p>
              <p className="text-[#777779] font-regular_18pt text-[13px] sm:text-[14px] mt-1">
                {active.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

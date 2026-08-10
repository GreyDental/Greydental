"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Calendar, Video } from "lucide-react";

const faqs = [
  {
    question: "Payment & Fees",
    answer:
      "We offer flexible payment plans for all clinical textbooks and residency programs. Student discounts are available with a valid institutional email.",
  },
  {
    question: "Course Enrollment",
    answer:
      "Enroll online in a few steps. Once payment is confirmed, you get immediate access to course materials and upcoming live session links.",
  },
  {
    question: "Digital Resource Access",
    answer:
      "All digital handouts, checklists, and downloads stay available in your account for the lifetime of your membership.",
  },
  {
    question: "Technical Support",
    answer:
      "Our support team is available by email and chat for login issues, playback problems, and download troubleshooting.",
  },
];

export default function ResourcesWebinarFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-[#F4F7F8] py-12 sm:py-16 md:py-20 lg:py-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full min-w-0">
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 w-full min-w-0 items-start">
          {/* Featured Webinar */}
          <article className="flex flex-col flex-1 min-w-0 w-full bg-white rounded-[16px] sm:rounded-[20px] p-5 sm:p-6 md:p-8 shadow-[0_8px_24px_rgba(58,115,141,0.08)] border border-[#BCBCBC]">
            <div className="inline-flex self-start items-center border border-[#777779] px-3.5 py-1.5 rounded-full mb-4 sm:mb-5">
              <span className="text-[10px] sm:text-[11px] font-semi_bold_24pt tracking-[0.12em] text-[#2F5F75] uppercase">
                Featured Webinar
              </span>
            </div>

            <h2 className="text-[22px] sm:text-[26px] md:text-[28px] font-semi_bold_24pt text-[#3A738D] leading-snug tracking-tight mb-3 sm:mb-4">
              Advanced Residency Webinar
            </h2>

            <p className="text-[#777779] font-regular_18pt text-[14px] sm:text-[15px] leading-relaxed mb-5 sm:mb-6 max-w-md">
              Dive deep into complex clinical cases with our resident masters.
              This live session includes Q&A and procedural breakdowns.
            </p>

            <div className="flex flex-col gap-2.5 sm:gap-3 mb-6 sm:mb-8">
              <div className="flex items-center gap-2.5 text-[#777779]">
                <Calendar
                  className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-[#5ECAA0] flex-shrink-0"
                  strokeWidth={1.75}
                />
                <span className="font-regular_18pt text-[13px] sm:text-[14px]">
                  June 15, 2026 — 2:00 PM EST
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-[#777779]">
                <Video
                  className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-[#5ECAA0] flex-shrink-0"
                  strokeWidth={1.75}
                />
                <span className="font-regular_18pt text-[13px] sm:text-[14px]">
                  Virtual Session (Zoom)
                </span>
              </div>
            </div>

            <div className="mt-auto flex flex-col sm:flex-row gap-3 w-full min-w-0">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center flex-1 bg-[#2F5F75] hover:bg-[#3A738D] text-white px-5 py-3 sm:py-3.5 rounded-[10px] font-inter-medium_18pt text-[14px] sm:text-[15px] transition-colors"
              >
                Register for Event
              </Link>
              <Link
                href="/workshops"
                className="inline-flex items-center justify-center flex-1 bg-white border border-[#3A738D] text-[#3A738D] hover:bg-[#3A738D] hover:text-white px-5 py-3 sm:py-3.5 rounded-[10px] font-inter-medium_18pt text-[14px] sm:text-[15px] transition-colors"
              >
                View All Events
              </Link>
            </div>
          </article>

          {/* FAQ */}
          <article className="flex flex-col flex-1 min-w-0 w-full min-h-[440px] sm:min-h-[400px] lg:min-h-[450px] bg-white rounded-[16px] sm:rounded-[20px] p-5 sm:p-6 md:p-8 shadow-[0_8px_24px_rgba(58,115,141,0.08)] border border-[#BCBCBC]">
            <h2 className="text-[22px] sm:text-[26px] md:text-[28px] font-semi_bold_24pt text-[#2F5F75] leading-snug tracking-tight mb-4 sm:mb-5">
              Frequently asked questions
            </h2>

            <div className="flex flex-col w-full min-w-0">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className="border-b border-[#E5E7EB] last:border-b-0"
                  >
                    <button
                      type="button"
                      onClick={() => toggle(index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-3 py-4 sm:py-5 text-left"
                    >
                      <span className="text-[#3A738D] font-semi_bold_24pt text-[14px] sm:text-[15px] md:text-[16px] leading-snug min-w-0">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 sm:w-5 sm:h-5 text-[#777779] flex-shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-40 opacity-100 pb-4 sm:pb-5" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-[#777779] font-regular_18pt text-[13px] sm:text-[14px] leading-relaxed pr-6">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

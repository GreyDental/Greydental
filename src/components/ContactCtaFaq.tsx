"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I enroll in a course?",
    answer:
      "Browse our courses, select your preferred program, and complete the online registration process.",
  },
  {
    question: "What membership options are available?",
    answer:
      "Choose from individual course enrollment or community membership for ongoing access to forums, clinical circles, and member events.",
  },
  {
    question: "How can I join the Grey Dental Community?",
    answer:
      "Visit the Community page to explore membership tiers and join peer discussions, clinical circles, and live sessions.",
  },
  {
    question: "How long does it take to receive a response?",
    answer:
      "We typically respond within 1–2 business days. Urgent enrollment questions are prioritized whenever possible.",
  },
];

export default function ContactCtaFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-[100vw] relative left-1/2 -translate-x-1/2 overflow-x-hidden flex flex-col bg-[#2F5F75] py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full min-w-0 flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-14 lg:items-center">
        {/* CTA */}
        <div className="flex flex-col flex-1 min-w-0 w-full">
          <h2 className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px] font-semi_bold_24pt text-white leading-[1.2] tracking-tight mb-6 sm:mb-8 max-w-xl">
            Ready to Take the Next Step in Your Dental Learning Journey?
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full min-w-0 sm:w-auto">
            <Link
              href="/courses"
              className="inline-flex items-center justify-center bg-[#5ECAA0] hover:bg-[#7ED9B5] text-black px-5 sm:px-6 py-3 sm:py-3.5 rounded-[10px] font-inter-medium_18pt text-[14px] sm:text-[15px] transition-colors"
            >
              Explore Courses
            </Link>
            <Link
              href="/community"
              className="inline-flex items-center justify-center bg-transparent border border-white/80 hover:bg-white/10 text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-[10px] font-inter-medium_18pt text-[14px] sm:text-[15px] transition-colors"
            >
              Join the Community
            </Link>
          </div>
        </div>

        {/* FAQ card */}
        <div className="w-full lg:w-[48%] lg:flex-shrink-0 min-w-0 flex flex-col bg-white/10 border border-white/15 rounded-[20px] sm:rounded-[24px] p-5 sm:p-7 md:p-8 backdrop-blur-[2px]">
          <h3 className="text-[22px] sm:text-[26px] md:text-[28px] font-semi_bold_24pt text-white leading-snug tracking-tight mb-4 sm:mb-5">
            Frequently asked questions
          </h3>

          <div className="flex flex-col w-full min-w-0">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-white/15 last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? -1 : index)
                    }
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-3 py-4 sm:py-5 text-left"
                  >
                    <span className="text-white font-semi_bold_24pt text-[14px] sm:text-[15px] md:text-[16px] leading-snug min-w-0">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 sm:w-5 sm:h-5 text-white/70 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      strokeWidth={1.75}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
                      isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="pb-4 sm:pb-5 text-white/70 font-regular_18pt text-[13px] sm:text-[14px] leading-relaxed pr-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

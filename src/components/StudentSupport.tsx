import Image from "next/image";
import Link from "next/link";

export default function StudentSupport() {
  const cards = [
    {
      icon: "/about-us/student-support/enrollment.svg",
      title: "Enrollment Assistance",
      description:
        "Guidance choosing the right track and completing registration without friction.",
    },
    {
      icon: "/about-us/student-support/course-navigation.svg",
      title: "Course Navigation",
      description:
        "Help finding modules, materials, and structuring your study schedule.",
    },
    {
      icon: "/about-us/student-support/technical-support.svg",
      title: "Technical Support",
      description:
        "Fast troubleshooting for platform access, video playback, and downloads.",
    },
    {
      icon: "/about-us/student-support/academic-guidance.svg",
      title: "Academic Guidance",
      description:
        "One-on-one advice on curriculum choices and specialization paths.",
    },
    {
      icon: "/about-us/student-support/certification.svg",
      title: "Certification Assistance",
      description:
        "Support tracking requirements and issuing your completed credentials.",
    },
    {
      icon: "/about-us/student-support/learner-success.svg",
      title: "Learner Success Resources",
      description:
        "Extra tools and coaching to help you finish strong and apply your training.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative flex flex-col">
          {/* Blue header panel */}
          <div
            className="flex flex-col rounded-[20px] md:rounded-[28px] border border-[#E4E4E4] px-5 sm:px-8 md:px-10 pt-8 sm:pt-10 md:pt-12 pb-40 sm:pb-44 md:pb-48"
            style={{
              background: "linear-gradient(180deg, #00173C 0%, #011C47 100%)",
            }}
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
              <div className="flex flex-col items-start max-w-2xl w-full">
                <div className="inline-flex border border-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-full mb-5 sm:mb-6">
                  <span className="text-[11px] sm:text-[12px] font-semi_bold_24pt tracking-[0.14em] text-white uppercase">
                    STUDENT SUPPORT
                  </span>
                </div>

                <h2 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[44px] font-semi_bold_24pt text-white leading-[1.15] tracking-tight mb-4 sm:mb-5">
                  We&apos;re here every step of the way
                </h2>

                <p className="text-[#E2E2E2] font-regular_18pt text-[15px] sm:text-base md:text-[17px] leading-relaxed max-w-xl">
                  We believe every learner deserves personalized guidance and
                  timely support throughout their educational journey.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[#41F39B] text-[#011A43] px-5 py-3 rounded-[8px] font-inter-medium_18pt text-[15px] flex-shrink-0 md:mb-1"
              >
                <span>Contact Support</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Overlapping cards — flex wrap for phone / tablet / desktop */}
          <div className="relative z-10 -mt-32 sm:-mt-36 md:-mt-40 px-2 sm:px-4 md:px-6">
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 md:gap-5">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.875rem)] min-h-[180px] sm:min-h-[200px] bg-[#FFFFFF] border border-[#E5E7EB] rounded-[14px] md:rounded-[16px] p-5 sm:p-6 md:p-7 shadow-[0_8px_30px_rgba(0,23,60,0.06)]"
                >
                  <div className="mb-4 sm:mb-5 flex-shrink-0">
                    <Image
                      src={card.icon}
                      alt=""
                      width={40}
                      height={40}
                      className="w-9 h-9 sm:w-10 sm:h-10"
                    />
                  </div>

                  <h3 className="text-[17px] sm:text-[18px] md:text-[20px] font-semi_bold_24pt text-[#00173C] mb-2 tracking-tight">
                    {card.title}
                  </h3>

                  <p className="text-[#6B7585] font-regular_18pt text-[14px] md:text-[15px] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

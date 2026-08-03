import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "20+", label: "Expert Instructors" },
  { value: "10+", label: "Specialists" },
  { value: "500+", label: "Students Mentored" },
];

export default function InstructorsHero() {
  return (
    <section
      className="w-[100vw] relative left-1/2 -translate-x-1/2 overflow-x-hidden flex flex-col bg-[#00173C]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24 w-full min-w-0 flex flex-col">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 sm:gap-12 lg:gap-14 xl:gap-16 w-full min-w-0">
          {/* Copy */}
          <div className="flex flex-col flex-1 min-w-0 w-full items-start text-left order-1">
            <div
              className="inline-flex items-center px-4 py-1.5 rounded-full mb-5 sm:mb-6"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.04)",
              }}
            >
              <span className="text-[11px] sm:text-[12px] font-semi_bold_24pt tracking-[0.12em] text-white uppercase">
                Instructors
              </span>
            </div>

            <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-[52px] font-semi_bold_24pt text-white leading-[1.15] tracking-tight mb-4 sm:mb-5 max-w-xl">
              Learn from Industry-Leading Dental Experts
            </h1>

            <p className="text-white/75 font-regular_18pt text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-lg mb-7 sm:mb-8">
              Our instructors are experienced clinicians, educators, and
              specialists dedicated to sharing practical knowledge, advanced
              techniques, and real-world expertise to help dental professionals
              excel throughout their careers.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto min-w-0 mb-8 sm:mb-10">
              <Link
                href="#instructors"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#41F39B] hover:bg-[#79F0B5] text-[#00173C] px-5 sm:px-6 py-3 sm:py-3.5 rounded-[10px] font-inter-medium_18pt text-[14px] sm:text-[15px] transition-colors"
              >
                Explore Our Instructors
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/courses"
                className="inline-flex items-center justify-center w-full sm:w-auto bg-transparent border border-white text-white hover:bg-white hover:text-[#00173C] px-5 sm:px-6 py-3 sm:py-3.5 rounded-[10px] font-inter-medium_18pt text-[14px] sm:text-[15px] transition-colors"
              >
                Join a Course
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-row flex-wrap items-stretch gap-0 w-full min-w-0 max-w-lg">
              {stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`flex flex-col flex-1 min-w-[100px] px-3 sm:px-4 first:pl-0 ${
                    idx > 0 ? "border-l border-white/20" : ""
                  }`}
                >
                  <span className="text-white font-semi_bold_24pt text-[22px] sm:text-[26px] md:text-[28px] leading-none tracking-tight mb-1.5">
                    {stat.value}
                  </span>
                  <span className="text-white/65 font-regular_18pt text-[12px] sm:text-[13px] leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image + green plate */}
          <div className="relative flex justify-center lg:justify-end w-full max-w-[380px] sm:max-w-[440px] md:max-w-[480px] lg:max-w-[520px] lg:w-[46%] lg:flex-shrink-0 mx-auto lg:mx-0 order-2 min-w-0 pt-3 pl-3 sm:pt-4 sm:pl-4">
            <div className="relative w-full min-w-0">
              <div
                aria-hidden="true"
                className="absolute inset-0 -translate-x-[10px] -translate-y-[10px] sm:-translate-x-[14px] sm:-translate-y-[14px] md:-translate-x-[16px] md:-translate-y-[16px] rounded-[16px] sm:rounded-[20px] md:rounded-[24px] z-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(65,243,155,0.8) 0%, rgba(65,243,155,0.5) 50%, rgba(65,243,155,0.1) 100%)",
                }}
              />

              <div className="relative z-10 flex w-full rounded-[16px] sm:rounded-[20px] md:rounded-[24px] overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.25)] aspect-[4/5] sm:aspect-[5/6]">
                <Image
                  src="/Instructors/instructors-hero.jpg"
                  alt="Grey Dental instructor"
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 480px, 520px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

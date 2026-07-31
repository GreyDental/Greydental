import Image from "next/image";
import Link from "next/link";

export default function WorkshopsHero() {
  return (
    <section className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-20 lg:py-24 w-full min-w-0">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 sm:gap-10 lg:gap-12 xl:gap-16 w-full min-w-0">
          {/* Copy */}
          <div className="flex flex-col flex-1 min-w-0 w-full items-start text-left order-1">
            <div className="inline-flex items-center bg-white border border-[#E9E9E9] px-4 py-1.5 rounded-full mb-4 sm:mb-5 md:mb-6">
              <span className="text-[11px] sm:text-[12px] font-semi_bold_24pt tracking-[0.12em] text-[#08386D] uppercase">
                Workshops
              </span>
            </div>

            <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-[52px] font-semi_bold_24pt text-[#00173C] leading-[1.15] tracking-tight mb-3 sm:mb-4 md:mb-5 max-w-xl">
              Live sessions with practicing specialists
            </h1>

            <p className="text-[#6B7585] font-regular_18pt text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-md mb-6 sm:mb-7 md:mb-8">
              Ask questions in real time, hear the latest clinical thinking, and
              earn attendance credit — no course enrollment required.
            </p>

            <Link
              href="#upcoming"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#00173C] text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-[10px] font-inter-medium_18pt text-[14px] sm:text-[15px] hover:opacity-90 transition-opacity"
            >
              Reserve your spot
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Image + green bg — padded so tilt/offset doesn't clip */}
          <div className="relative flex justify-center lg:justify-end w-full max-w-[380px] sm:max-w-[440px] md:max-w-[480px] lg:max-w-[520px] lg:w-[48%] lg:flex-shrink-0 mx-auto lg:mx-0 order-2 min-w-0 pt-3 pl-3 sm:pt-4 sm:pl-4">
            <div className="relative w-full min-w-0">
              <div
                aria-hidden="true"
                className="absolute inset-0 -translate-x-[8px] -translate-y-[8px] sm:-translate-x-[12px] sm:-translate-y-[12px] md:-translate-x-[14px] md:-translate-y-[14px] -rotate-[2.04deg] rounded-[16px] sm:rounded-[20px] md:rounded-[24px] z-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(65,243,155,0.8) 0%, rgba(65,243,155,0.5) 50%, rgba(65,243,155,0.1) 100%)",
                }}
              />

              <div className="relative z-10 flex w-full rounded-[16px] sm:rounded-[20px] md:rounded-[24px] overflow-hidden shadow-[0_16px_40px_rgba(0,23,60,0.12)] aspect-[4/3] sm:aspect-[5/4]">
                <Image
                  src="/workshops/hero.jpg"
                  alt="Live clinical workshop session"
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 480px, 520px"
                  className="object-cover"
                  priority
                />

                <div
                  className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 md:bottom-4 md:right-4 flex flex-col gap-0.5 bg-white rounded-[10px] sm:rounded-[12px] px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-3.5 md:py-2.5 shadow-sm max-w-[70%]"
                  style={{ border: "1px solid rgba(0,0,0,0.3)" }}
                >
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="w-2 h-2 rounded-full bg-[#41F39B] flex-shrink-0" />
                    <span className="text-[#00173C] font-semi_bold_24pt text-[11px] sm:text-[12px] md:text-[13px] leading-none truncate">
                      Live in 3 days
                    </span>
                  </div>
                  <span className="text-[#6B7585] font-regular_18pt text-[10px] sm:text-[11px] md:text-[12px] pl-[14px] leading-tight truncate">
                    Clinical Skills Day
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

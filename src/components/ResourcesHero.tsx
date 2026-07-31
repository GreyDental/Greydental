import Image from "next/image";
import Link from "next/link";

export default function ResourcesHero() {
  return (
    <section
      className="w-[100vw] relative left-1/2 -translate-x-1/2 overflow-x-hidden"
      style={{
        background: "linear-gradient(90deg, #C8DDFF1A 0%, #9BF7CC1A 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-20 lg:py-24 w-full min-w-0">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 sm:gap-10 lg:gap-12 xl:gap-16 w-full min-w-0">
          {/* Copy */}
          <div className="flex flex-col flex-1 min-w-0 w-full items-start text-left order-1">
            <div className="inline-flex items-center bg-white border border-[#E9E9E9] px-4 py-1.5 rounded-full mb-4 sm:mb-5 md:mb-6">
              <span className="text-[11px] sm:text-[12px] font-semi_bold_24pt tracking-[0.12em] text-[#00173C] uppercase">
                Resource Library
              </span>
            </div>

            <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-[52px] font-semi_bold_24pt text-[#00173C] leading-[1.15] tracking-tight mb-3 sm:mb-4 md:mb-5 max-w-xl">
              Everything you need between courses
            </h1>

            <p className="text-[#6B7585] font-regular_18pt text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-lg mb-6 sm:mb-7 md:mb-8">
              Books, clinical downloads, the APEX newsletter, and answers to
              your questions — all in one place, free with your account.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto min-w-0">
              <Link
                href="#newsletter"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#08386D] hover:bg-[#00173C] text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-[10px] font-inter-medium_18pt text-[14px] sm:text-[15px] transition-colors"
              >
                Subscribe to APEX
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/education#pathways"
                className="inline-flex items-center justify-center w-full sm:w-auto bg-white border border-[#00173C] text-[#00173C] hover:bg-[#00173C] hover:text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-[10px] font-inter-medium_18pt text-[14px] sm:text-[15px] transition-colors"
              >
                View Certificate Pathways
              </Link>
            </div>
          </div>

          {/* Image + green plate */}
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
                  src="/Resources/hero.jpg"
                  alt="Resource library"
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 480px, 520px"
                  className="object-cover object-top"
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

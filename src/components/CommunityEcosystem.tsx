import Image from "next/image";
import Link from "next/link";

const events = [
  "Regional hands-on workshops",
  "Annual Academic Gala",
  "Study club meetups",
];

export default function CommunityEcosystem() {
  return (
    <section
      id="communities"
      className="w-[100vw] relative left-1/2 -translate-x-1/2 overflow-x-hidden -mt-14 sm:-mt-20 md:-mt-28 lg:-mt-32 z-10 pb-14 sm:pb-16 md:pb-20 lg:pb-24 flex flex-col"
    >
      {/* White fill starts below the overlap so navy shows around the card */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-14 sm:top-20 md:top-28 lg:top-32 bottom-0 bg-white -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative w-full min-w-0 flex flex-col">
        <div
          className="flex flex-col w-full min-w-0 bg-white rounded-[20px] sm:rounded-[28px] md:rounded-[32px] px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-12 lg:py-14"
          style={{
            boxShadow:
              "0px 10px 21px 0px rgba(0, 23, 60, 0.08), 0px 24px 48px 0px rgba(0, 23, 60, 0.06), 0px 40px 64px 0px rgba(0, 23, 60, 0.04)",
          }}
        >
          {/* Header */}
          <div className="flex flex-col items-start gap-4 sm:gap-5 mb-8 sm:mb-10 md:mb-12 w-full min-w-0">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#6B7585] bg-white">
              <span className="text-[11px] sm:text-[12px] font-semi_bold_24pt tracking-[0.12em] text-[#08386D] uppercase">
                Connect Anywhere
              </span>
            </div>

            <h2 className="text-[26px] sm:text-3xl md:text-4xl lg:text-[44px] font-semi_bold_24pt text-[#00173C] leading-[1.15] tracking-tight max-w-3xl">
              An Integrated Ecosystem for Collaboration
            </h2>
          </div>

          {/* Cards */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6 w-full min-w-0 items-stretch">
            {/* WhatsApp */}
            <article className="flex flex-col flex-1 min-w-0 w-full min-h-[240px] sm:min-h-[280px] bg-white border border-[#E8EEF4] rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,23,60,0.06)]">
              <div className="flex flex-1 flex-col items-center justify-center gap-6 sm:gap-8">
                <Image
                  src="/Community/Overlay.png"
                  alt=""
                  width={107}
                  height={101}
                  className="w-14 h-14 sm:w-16 sm:h-16 md:w-[72px] md:h-[72px] object-contain"
                />
                <p className="text-[#00173C] font-semi_bold_24pt text-[16px] sm:text-[18px] md:text-[20px] leading-snug text-center">
                  WhatsApp Community
                </p>
              </div>
            </article>

            {/* Facebook */}
            <article className="flex flex-col flex-1 min-w-0 w-full min-h-[240px] sm:min-h-[280px] bg-white border border-[#E8EEF4] rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,23,60,0.06)]">
              <div className="flex flex-1 flex-col items-center justify-center gap-6 sm:gap-8">
                <Image
                  src="/Community/logo-facebook.svg"
                  alt=""
                  width={64}
                  height={64}
                  className="w-14 h-14 sm:w-16 sm:h-16 md:w-[72px] md:h-[72px]"
                />
                <p className="text-[#00173C] font-semi_bold_24pt text-[16px] sm:text-[18px] md:text-[20px] leading-snug text-center">
                  Facebook Community
                </p>
              </div>
            </article>

            {/* Events */}
            <article className="flex flex-col flex-1 min-w-0 w-full min-h-[240px] sm:min-h-[280px] bg-[#00173C] rounded-[16px] sm:rounded-[20px] p-6 sm:p-7">
              <ul className="flex flex-col gap-3.5 sm:gap-4 flex-1 mb-6 sm:mb-8">
                {events.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 min-w-0">
                    <Image
                      src="/Community/icon-check.svg"
                      alt=""
                      width={18}
                      height={18}
                      className="w-[15px] h-[15px] sm:w-[18px] sm:h-[18px] flex-shrink-0 mt-0.5"
                    />
                    <span className="text-white/90 font-regular_18pt text-[13px] sm:text-[14px] md:text-[15px] leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/workshops"
                className="mt-auto inline-flex items-center justify-center w-full bg-[#41F39B] hover:bg-[#79F0B5] text-[#00173C] px-5 py-3 sm:py-3.5 rounded-[10px] font-inter-medium_18pt text-[14px] sm:text-[15px] transition-colors"
              >
                View Events
              </Link>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

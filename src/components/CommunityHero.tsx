import Image from "next/image";
import Link from "next/link";

export default function CommunityHero() {
  return (
    <section
      className="w-[100vw] relative left-1/2 -translate-x-1/2 z-0 flex flex-col"
      style={{
        background: "linear-gradient(90deg, #08386D 0%, #00173C 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-28 sm:pb-32 md:pb-40 lg:pb-48 w-full min-w-0 flex flex-col">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 sm:gap-12 lg:gap-14 xl:gap-20 w-full min-w-0">
          {/* Copy */}
          <div className="flex flex-col flex-1 min-w-0 w-full items-start text-left order-1">
            <div
              className="inline-flex items-center px-4 py-1.5 rounded-full mb-5 sm:mb-6"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.04)",
              }}
            >
              <span className="text-[11px] sm:text-[12px] font-semi_bold_24pt tracking-[0.08em] text-white">
                Our Community
              </span>
            </div>

            <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-[52px] font-semi_bold_24pt text-white leading-[1.15] tracking-tight mb-4 sm:mb-5 max-w-xl">
              Join a Professional Dental Learning Community
            </h1>

            <p className="text-[#C3C3C3] font-regular_18pt text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-md mb-7 sm:mb-8">
              Learn, collaborate, share cases, attend networking events, and
              connect with dentists through topic-based communities.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto min-w-0">
              <Link
                href="#communities"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#41F39B] hover:bg-[#79F0B5] text-[#00173C] px-5 sm:px-6 py-3 sm:py-3.5 rounded-[10px] font-inter-medium_18pt text-[14px] sm:text-[15px] transition-colors"
              >
                Join Community
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/education#pathways"
                className="inline-flex items-center justify-center w-full sm:w-auto bg-transparent border border-[#FFFFFF] text-[#FFFFFF] hover:bg-white hover:text-[#00173C] px-5 sm:px-6 py-3 sm:py-3.5 rounded-[10px] font-inter-medium_18pt text-[14px] sm:text-[15px] transition-colors"
              >
                View Certificate Pathways
              </Link>
            </div>
          </div>

          {/* Exact Figma network graphic with icons */}
          <div className="relative flex justify-center lg:justify-end w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[500px] lg:w-[46%] lg:flex-shrink-0 mx-auto lg:mx-0 order-2 min-w-0">
            <div className="relative w-full aspect-[639/366]">
              <Image
                src="/Community/network-graphic.png"
                alt="Dental community network"
                fill
                sizes="(max-width: 1024px) 90vw, 500px"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

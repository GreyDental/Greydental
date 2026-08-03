import Image from "next/image";
import Link from "next/link";

export default function CommunityJoinCta() {
  return (
    <section
      id="join"
      className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-white py-14 sm:py-16 md:py-20 lg:py-24 overflow-x-hidden flex flex-col"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full min-w-0 flex flex-col">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 sm:gap-12 lg:gap-14 xl:gap-20 w-full min-w-0">
          {/* Copy */}
          <div className="flex flex-col flex-1 min-w-0 w-full items-start text-left order-1">
            <h2 className="text-[28px] sm:text-4xl md:text-5xl lg:text-[52px] font-semi_bold_24pt text-[#00173C] leading-[1.15] tracking-tight mb-4 sm:mb-5">
              Ready to Join?
            </h2>

            <p className="text-[#6B7585] font-regular_18pt text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed mb-7 sm:mb-8 max-w-lg">
              Take the next step in your professional journey and join the
              world&apos;s most elite clinical network.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                href="/community#membership"
                className="inline-flex items-center justify-center bg-[#00173C] hover:bg-[#08386D] text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-[10px] font-inter-medium_18pt text-[14px] sm:text-[15px] transition-colors"
              >
                Join Community Now
              </Link>
              <Link
                href="#clinical-circles"
                className="inline-flex items-center justify-center bg-white border border-[#DADADA] hover:border-[#00173C] text-[#00173C] px-5 sm:px-6 py-3 sm:py-3.5 rounded-[10px] font-inter-medium_18pt text-[14px] sm:text-[15px] transition-colors"
              >
                Explore Circles
              </Link>
            </div>
          </div>

          {/* Globe graphic */}
          <div className="flex-1 min-w-0 w-full flex items-center justify-center lg:justify-end order-2">
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px] aspect-square">
                <Image
                  src="/Community/globe-cta.svg"
                  alt="Global clinical network"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 90vw, 520px"
                  priority={false}
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

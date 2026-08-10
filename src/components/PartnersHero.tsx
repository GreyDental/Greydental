import Image from "next/image";
import Link from "next/link";

export default function PartnersHero() {
  return (
    <section
      className="w-[100vw] relative left-1/2 -translate-x-1/2 overflow-x-hidden flex flex-col z-0"
      style={{
        background: "linear-gradient(90deg, #9BF7CC1A 0%, #C8DDFF1A 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24 w-full min-w-0 flex flex-col">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 sm:gap-12 lg:gap-14 xl:gap-20 w-full min-w-0">
          {/* Copy */}
          <div className="flex flex-col flex-1 min-w-0 w-full items-start text-left order-1">
            <div className="inline-flex items-center bg-white border border-[#E9E9E9] px-4 py-1.5 rounded-full mb-5 sm:mb-6">
              <span className="text-[11px] sm:text-[12px] font-semi_bold_24pt font-bold tracking-[0.12em] text-[#3A738D]">
                Partners
              </span>
            </div>

            <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-[52px] font-semi_bold_24pt text-[#3A738D] leading-[1.15] tracking-tight mb-4 sm:mb-5 max-w-xl">
              Our Partners &amp; Collaborators
            </h1>

            <p className="text-[#777779] font-regular_18pt text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-md mb-7 sm:mb-8">
              We proudly collaborate with leading organizations, institutions,
              and industry experts who share our commitment to advancing dental
              education.
            </p>

            <Link
              href="#become-a-partner"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#3A738D] hover:bg-[#2F5F75] text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-[10px] font-inter-medium_18pt text-[14px] sm:text-[15px] transition-colors"
            >
              Become a Partner
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Illustration */}
          <div className="relative flex justify-center lg:justify-end w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[460px] lg:w-[44%] lg:flex-shrink-0 mx-auto lg:mx-0 order-2 min-w-0">
            <div className="relative w-full aspect-square">
              <Image
                src="/Partners/partners-hero.svg"
                alt="Partners collaborating"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 90vw, 460px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

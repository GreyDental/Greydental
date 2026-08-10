import Image from "next/image";
import Link from "next/link";

export default function PartnersCta() {
  return (
    <section
      id="become-a-partner"
      className="w-[100vw] relative left-1/2 -translate-x-1/2 overflow-x-hidden flex flex-col z-0"
      style={{
        background: "linear-gradient(180deg, #2F5F75 0%, #3A738D 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-16 md:py-20 lg:py-24 w-full min-w-0 flex flex-col">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 sm:gap-12 lg:gap-14 xl:gap-16 w-full min-w-0">
          {/* Copy */}
          <div className="flex flex-col flex-1 min-w-0 w-full items-start text-left order-1">
            <h2 className="text-[26px] sm:text-3xl md:text-4xl lg:text-[44px] font-semi_bold_24pt text-white leading-[1.15] tracking-tight mb-4 sm:mb-5 max-w-xl">
              Let&apos;s Build the Future of Dental Education Together
            </h2>

            <p className="text-white/70 font-regular_18pt text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-lg mb-7 sm:mb-8">
              Whether you&apos;re an educational institution, dental organization,
              clinic, technology provider, or industry leader, we&apos;d love to
              explore opportunities to collaborate and create meaningful learning
              experiences.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto min-w-0">
              <Link
                href="/about"
                className="inline-flex items-center justify-center w-full sm:w-auto bg-[#5ECAA0] hover:bg-[#7ED9B5] text-black px-5 sm:px-6 py-3 sm:py-3.5 rounded-[10px] font-inter-medium_18pt text-[14px] sm:text-[15px] transition-colors"
              >
                Become a Partner
              </Link>
              <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full sm:w-auto bg-transparent border border-white text-white hover:bg-white hover:text-[#3A738D] px-5 sm:px-6 py-3 sm:py-3.5 rounded-[10px] font-inter-medium_18pt text-[14px] sm:text-[15px] transition-colors"
            >
              Contact Us
            </Link>
            </div>
          </div>

          {/* Tooth + instruments graphic */}
          <div className="relative flex justify-center lg:justify-end w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[440px] lg:w-[42%] lg:flex-shrink-0 mx-auto lg:mx-0 order-2 min-w-0">
            <div className="relative w-full aspect-square">
              <Image
                src="/Partners/partners-cta-tooth.png"
                alt="Dental education partnership"
                fill
                className="object-contain object-center mix-blend-screen"
                sizes="(max-width: 1024px) 90vw, 440px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

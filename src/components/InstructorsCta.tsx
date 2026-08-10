import Image from "next/image";
import Link from "next/link";

export default function InstructorsCta() {
  return (
    <section
      id="join-faculty"
      className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-[#F4F7F8] pt-14 sm:pt-16 md:pt-20 lg:pt-24 pb-0 overflow-x-hidden flex flex-col"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full min-w-0 flex flex-col lg:flex-row lg:items-end gap-10 sm:gap-12 lg:gap-10 xl:gap-14">
        {/* Copy — vertically centered against the portrait */}
        <div className="flex flex-col flex-1 min-w-0 w-full items-start text-left order-1 lg:self-center pb-10 sm:pb-12 lg:pb-16 xl:pb-20">
          <h2 className="text-[26px] sm:text-3xl md:text-4xl lg:text-[44px] font-semi_bold_24pt text-[#3A738D] leading-[1.15] tracking-tight mb-4 sm:mb-5 max-w-xl">
            Share Your Expertise with the Next Generation
          </h2>

          <p className="text-[#777779] font-regular_18pt text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-lg mb-7 sm:mb-8">
            Are you a leading clinician with a passion for teaching? Join our
            global faculty and help shape the clinical standard of the future.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto min-w-0">
            <Link
              href="/about"
              className="inline-flex items-center justify-center w-full sm:w-auto bg-[#3A738D] hover:bg-[#2F5F75] text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-[10px] font-inter-medium_18pt text-[14px] sm:text-[15px] transition-colors"
            >
              Apply as an Instructor
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full sm:w-auto bg-transparent border border-[#3A738D] text-[#3A738D] hover:bg-[#3A738D] hover:text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-[10px] font-inter-medium_18pt text-[14px] sm:text-[15px] transition-colors"
            >
              Contact Our Team
            </Link>
          </div>
        </div>

        {/* Portrait — torso flush to section bottom */}
        <div className="relative flex justify-center lg:justify-end w-full max-w-[360px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[540px] lg:w-[48%] lg:flex-shrink-0 mx-auto lg:mx-0 order-2 min-w-0 self-end">
          <div className="relative w-full aspect-[2000/1230]">
            <Image
              src="/Instructors/instructors-cta.png"
              alt="Dental instructor holding clinical instruments"
              fill
              sizes="(max-width: 1024px) 90vw, 540px"
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

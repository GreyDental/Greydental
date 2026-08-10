import Image from "next/image";

export default function CertificatePathways() {
  return (
    <section
      id="pathways"
      className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-greyBg py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10 mb-14 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-semi_bold_24pt text-[#3A738D] leading-[1.15] tracking-tight min-w-0">
            Certificate Pathways
          </h2>
          <p className="text-[#777779] font-regular_18pt text-base md:text-[17px] leading-relaxed max-w-md md:text-right min-w-0">
            Your structured progression from foundational knowledge to
            professional mastery.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-12 md:gap-0">
          {/* Desktop vertical line — stretches to top/bottom edges of phase boxes */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-[#5ECAA0]"
            aria-hidden="true"
          />

          {/* Phase 01 */}
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 w-full min-w-0">
            {/* Left text */}
            <div className="order-2 md:order-1 flex-1 min-w-0 md:text-right md:pr-2">
              <h3 className="text-xl md:text-[22px] font-semi_bold_24pt text-[#3A738D] mb-2 tracking-tight">
                Foundational Knowledge
              </h3>
              <p className="text-[#777779] font-regular_18pt text-[14px] md:text-[15px] leading-relaxed max-w-sm md:ml-auto">
                Theory-heavy modules designed to build clinical intuition.
              </p>
            </div>

            {/* Center icon */}
            <div className="order-1 md:order-2 relative z-10 flex justify-start md:justify-center flex-shrink-0">
              <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full bg-white border-2 border-[#5ECAA0] flex items-center justify-center flex-shrink-0 shadow-[0_4px_16px_rgba(94,202,160,0.15)]">
                <Image
                  src="/education-page/Certificate/phase-01.svg"
                  alt=""
                  width={36}
                  height={36}
                  className="w-8 h-8 sm:w-9 sm:h-9"
                />
              </div>
            </div>

            {/* Right card */}
            <div className="order-3 md:order-3 flex-1 min-w-0 md:pl-2">
              <div className="bg-[#3A738D] rounded-[16px] md:rounded-[20px] p-6 sm:p-7 shadow-[0_12px_32px_rgba(58,115,141,0.18)] max-w-md md:max-w-none">
                <span className="block text-[12px] font-semi_bold_24pt tracking-[0.14em] text-[#5ECAA0] uppercase mb-3">
                  PHASE 01
                </span>
                <h4 className="text-xl md:text-[22px] font-semi_bold_24pt text-white mb-3 tracking-tight">
                  Remote Certificate
                </h4>
                <p className="text-white/85 font-regular_18pt text-[14px] md:text-[15px] leading-relaxed">
                  Complete readings, videos, interactions, workbook exercises,
                  quizzes, clinical case submission, and skills checklist
                  entirely online.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile connector line between phases */}
          <div
            className="md:hidden w-[2px] h-8 bg-[#5ECAA0] ml-8 -my-6"
            aria-hidden="true"
          />

          {/* Phase 02 */}
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 md:mt-16 w-full min-w-0">
            {/* Left card (desktop) / card after icon on mobile */}
            <div className="order-3 md:order-1 flex-1 min-w-0 md:pr-2 md:flex md:justify-end">
              <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-[16px] md:rounded-[20px] p-6 sm:p-7 shadow-[0_8px_24px_rgba(58,115,141,0.06)] w-full max-w-md md:max-w-none">
                <span className="block text-[12px] font-semi_bold_24pt tracking-[0.14em] text-[#2F5F75] uppercase mb-3">
                  PHASE 02
                </span>
                <h4 className="text-xl md:text-[22px] font-semi_bold_24pt text-[#3A738D] mb-3 tracking-tight">
                  Residency Certificate
                </h4>
                <p className="text-[#777779] font-regular_18pt text-[14px] md:text-[15px] leading-relaxed">
                  Complete all remote requirements plus live patient
                  demonstration and skills assessment exams at an accredited
                  clinical center.
                </p>
              </div>
            </div>

            {/* Center icon */}
            <div className="order-1 md:order-2 relative z-10 flex justify-start md:justify-center flex-shrink-0">
              <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full bg-white border-2 border-[#5ECAA0] flex items-center justify-center flex-shrink-0 shadow-[0_4px_16px_rgba(94,202,160,0.15)]">
                <Image
                  src="/education-page/Certificate/phase-02.svg"
                  alt=""
                  width={36}
                  height={36}
                  className="w-8 h-8 sm:w-9 sm:h-9"
                />
              </div>
            </div>

            {/* Right text */}
            <div className="order-2 md:order-3 flex-1 min-w-0 md:pl-2">
              <h3 className="text-xl md:text-[22px] font-semi_bold_24pt text-[#3A738D] mb-2 tracking-tight">
                Clinical Application
              </h3>
              <p className="text-[#777779] font-regular_18pt text-[14px] md:text-[15px] leading-relaxed max-w-sm">
                Bridging the gap between screen learning and patient chairside.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

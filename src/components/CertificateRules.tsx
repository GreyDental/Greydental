import Image from "next/image";

const rules = [
  "Module Checklists",
  "Online Assessments",
  "Clinical Case Submission",
  "Skills Checklist",
];

export default function CertificateRules() {
  return (
    <section className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-[#F4F7F8] py-14 sm:py-16 md:py-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 sm:gap-12 lg:gap-16 w-full min-w-0">
          {/* Content */}
          <div className="flex flex-col flex-1 min-w-0 w-full">
            <h2 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[44px] font-semi_bold_24pt text-[#3A738D] leading-[1.15] tracking-tight mb-3 sm:mb-4">
              Certificate Rules
            </h2>
            <p className="text-[#777779] font-regular_18pt text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-xl mb-7 sm:mb-8">
              Issued after all module checklists, online assessments, clinical
              case submission, and skills checklist are complete.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 w-full max-w-xl">
              {rules.map((rule) => (
                <div
                  key={rule}
                  className="flex flex-row items-center gap-3 w-full sm:w-[calc(50%-0.5rem)] min-w-0 bg-white rounded-[12px] px-4 py-3.5 sm:px-5 sm:py-4 shadow-[0_4px_16px_rgba(58,115,141,0.06)] border border-[#E8EEF4]/80"
                >
                  <Image
                    src="/Specific_Course_Page/check-circle.svg"
                    alt=""
                    width={18}
                    height={18}
                    className="w-[18px] h-[18px] flex-shrink-0"
                  />
                  <span className="text-[#3A738D] font-inter-medium_18pt text-[13px] sm:text-[14px] leading-snug min-w-0">
                    {rule}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Illustration */}
          <div className="flex justify-center lg:justify-end w-full max-w-[260px] sm:max-w-[300px] lg:w-[340px] lg:max-w-none lg:flex-shrink-0 mx-auto lg:mx-0 min-w-0">
            <Image
              src="/Specific_Course_Page/certificate-hats.png"
              alt=""
              width={328}
              height={338}
              className="w-full h-auto max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

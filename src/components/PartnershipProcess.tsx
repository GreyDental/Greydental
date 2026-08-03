const steps = [
  {
    num: "01",
    title: "Connect",
    description: "Share your organization and partnership goals.",
  },
  {
    num: "02",
    title: "Discuss",
    description: "Explore collaboration opportunities that align with our mission.",
  },
  {
    num: "03",
    title: "Plan",
    description: "Define objectives, timelines, and responsibilities.",
  },
  {
    num: "04",
    title: "Launch",
    description: "Begin creating meaningful educational impact together.",
  },
];

export default function PartnershipProcess() {
  return (
    <section
      id="partnership-process"
      className="w-[100vw] relative left-1/2 -translate-x-1/2 overflow-x-hidden -mt-14 sm:-mt-20 md:-mt-28 lg:-mt-36 z-10 pb-14 sm:pb-16 md:pb-20 lg:pb-24 flex flex-col"
    >
      {/* Soft fill starts below the photo overlap */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-14 sm:top-20 md:top-28 lg:top-36 bottom-0 bg-[#F9FCFE] -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative w-full min-w-0 flex flex-col">
        <div
          className="flex flex-col w-full min-w-0 bg-white border border-[#41F39B] rounded-[16px] sm:rounded-[20px] md:rounded-[24px] px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-12 lg:py-14"
          style={{
            boxShadow: "0px 30px 65px 0px rgba(214, 214, 214, 0.10)",
          }}
        >
          {/* Header */}
          <div className="flex flex-col items-start gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 w-full min-w-0 max-w-3xl">
            <h2 className="text-[26px] sm:text-3xl md:text-4xl lg:text-[40px] font-semi_bold_24pt text-[#08386D] leading-[1.15] tracking-tight">
              Our Partnership Process
            </h2>
            <p className="text-[#6B7585] font-regular_18pt text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
              Our streamlined process makes it easy to connect, collaborate, and
              launch initiatives that benefit both our partners and the global
              dental community.
            </p>
          </div>

          {/* Steps */}
          <ol className="flex flex-col w-full min-w-0">
            {steps.map((step, idx) => (
              <li
                key={step.num}
                className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 md:gap-10 lg:gap-14 py-5 sm:py-6 md:py-7 w-full min-w-0 ${
                  idx < steps.length - 1 ? "border-b border-[#E8EEF4]" : ""
                }`}
              >
                <span className="text-[#41F39B] font-semi_bold_24pt text-[28px] sm:text-[32px] md:text-[36px] leading-none tracking-tight flex-shrink-0 w-auto sm:w-14 md:w-16">
                  {step.num}
                </span>

                <h3 className="text-[#08386D] font-semi_bold_24pt text-[16px] sm:text-[18px] md:text-[20px] leading-snug tracking-tight flex-shrink-0 sm:w-[140px] md:w-[160px]">
                  {step.title}
                </h3>

                <p className="text-[#6B7585] font-regular_18pt text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed min-w-0 flex-1 sm:text-right">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

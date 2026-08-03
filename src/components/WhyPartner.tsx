import Image from "next/image";

const reasons = [
  {
    title: "Deliver High-Quality Education",
    description:
      "Ensuring clinical standards are met through rigorous, peer-reviewed educational content.",
  },
  {
    title: "Innovation",
    description:
      "Pioneering new technologies and methodologies in digital dentistry and patient care.",
  },
  {
    title: "Professional Development",
    description:
      "Continuous learning paths designed to keep practitioners at the top of their field.",
  },
  {
    title: "Global Community",
    description:
      "A interconnected ecosystem of professionals sharing knowledge across borders.",
  },
];

export default function WhyPartner() {
  return (
    <section
      id="why-partner"
      className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-[#F9FCFE] py-14 sm:py-16 md:py-20 lg:py-24 overflow-hidden flex flex-col"
    >
      {/* Tooth graphic — right side */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-[20%] sm:translate-x-[15%] md:translate-x-[8%] lg:translate-x-[5%] xl:translate-x-0 w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] xl:w-[340px] h-auto"
      >
        <Image
          src="/Partners/partners-tooth.svg"
          alt=""
          width={221}
          height={400}
          className="w-full h-auto"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full min-w-0 flex flex-col">
        {/* Header */}
        <div className="flex flex-col items-start text-left gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 max-w-2xl min-w-0">
          <h2 className="text-[26px] sm:text-3xl md:text-4xl lg:text-[44px] font-semi_bold_24pt text-[#00173C] leading-[1.15] tracking-tight">
            Why Organizations
            <br />
            Partner With Grey Dental
          </h2>
          <p className="text-[#6B7585] font-regular_18pt text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-xl">
            We proudly collaborate with leading organizations, institutions, and
            industry experts who share our commitment to advancing dental
            education.
          </p>
        </div>

        {/* Cards — 2x2 flex */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-5 w-full min-w-0">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="flex flex-col min-w-0 w-full sm:w-[calc(50%-0.625rem)] bg-white border border-[#E5E7EB] border-l-[4px] border-l-[#41F39B] rounded-[12px] sm:rounded-[14px] px-5 sm:px-6 md:px-7 py-5 sm:py-6 shadow-[0_4px_16px_rgba(0,23,60,0.06)]"
            >
              <h3 className="text-[#08386D] font-semi_bold_24pt text-[16px] sm:text-[17px] md:text-[18px] leading-snug tracking-tight mb-2 sm:mb-2.5">
                {reason.title}
              </h3>
              <p className="text-[#6B7585] font-regular_18pt text-[13px] sm:text-[14px] leading-relaxed">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

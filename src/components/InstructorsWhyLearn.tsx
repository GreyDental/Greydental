import Image from "next/image";

const points = [
  {
    title: "Clinical Experience",
    description:
      "Our instructors don't just teach; they actively practice at the highest clinical levels, ensuring you learn relevant, real-world skills.",
    icon: "/Instructors/icon-clinical.png",
  },
  {
    title: "Evidence-Based Teaching",
    description:
      "Education rooted in the latest peer-reviewed research and validated clinical protocols for predictable outcomes.",
    icon: "/Instructors/icon-evidence.png",
  },
  {
    title: "Hands-on Learning",
    description:
      "Intensive practical training and mentorship designed to translate theory into immediate clinical proficiency.",
    icon: "/Instructors/icon-hands-on.png",
  },
  {
    title: "Career Growth",
    description:
      "Direct access to a global network of dental leaders and career-defining mentorship opportunities.",
    icon: "/Instructors/icon-career.png",
  },
];

export default function InstructorsWhyLearn() {
  return (
    <section
      id="why-learn"
      className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-white py-14 sm:py-16 md:py-20 lg:py-24 overflow-x-hidden flex flex-col"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full min-w-0 flex flex-col lg:flex-row lg:items-center gap-10 sm:gap-12 lg:gap-14 xl:gap-16">
        {/* Image */}
        <div className="w-full lg:w-[48%] lg:flex-shrink-0 min-w-0">
          <div className="relative w-full aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] rounded-[20px] sm:rounded-[24px] overflow-hidden bg-[#F3F4F6]">
            <Image
              src="/Instructors/why-learn-desk.png"
              alt="Dental workspace with X-ray, notebook, and clinical tools"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Copy + points */}
        <div className="flex flex-col flex-1 min-w-0 w-full">
          <h2 className="text-[26px] sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] font-semi_bold_24pt text-[#00173C] leading-[1.15] tracking-tight mb-8 sm:mb-10">
            Why Learn from Our Instructors?
          </h2>

          <ul className="flex flex-col gap-6 sm:gap-7 md:gap-8 w-full min-w-0 list-none p-0 m-0">
            {points.map((point) => (
              <li
                key={point.title}
                className="flex flex-row items-start gap-4 sm:gap-5 min-w-0"
              >
                <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0">
                  <Image
                    src={point.icon}
                    alt=""
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col min-w-0 flex-1 pt-0.5">
                  <h3 className="text-[#00173C] font-semi_bold_24pt text-[16px] sm:text-[17px] md:text-[18px] leading-snug tracking-tight mb-1.5 sm:mb-2">
                    {point.title}
                  </h3>
                  <p className="text-[#6B7585] font-regular_18pt text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

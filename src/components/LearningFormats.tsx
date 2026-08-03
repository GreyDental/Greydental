import Image from "next/image";
import Link from "next/link";

type FormatCard = {
  icon: string;
  badge: string;
  badgeVariant: "outline-blue" | "solid" | "outline-dark";
  title: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  buttonVariant: "outline" | "green";
  gradient: boolean;
};

export default function LearningFormats() {
  const formats: FormatCard[] = [
    {
      icon: "/education-page/Learning/Laptop.svg",
      badge: "FLEXIBLE",
      badgeVariant: "outline-blue",
      title: "Online Courses",
      description:
        "Self-paced modules including 4K video lectures, interactive PDFs, knowledge MCQs, and a remote completion certificate.",
      features: ["24/7 Global Access", "Digital Study Materials"],
      cta: "Explore Online",
      href: "/courses",
      buttonVariant: "outline",
      gradient: true,
    },
    {
      icon: "/education-page/Learning/hybrid.svg",
      badge: "BLENDED",
      badgeVariant: "solid",
      title: "Hybrid Courses",
      description:
        "Combine online theory with live demonstrations and an in-person clinical assessment for a rounded expertise.",
      features: ["Live Q&A Sessions", "Virtual Faculty Interaction"],
      cta: "Explore Hybrid",
      href: "/courses",
      buttonVariant: "green",
      gradient: false,
    },
    {
      icon: "/education-page/Learning/workshops.svg",
      badge: "HANDS-ON",
      badgeVariant: "outline-dark",
      title: "Workshops",
      description:
        "Intensive, focused in-person sessions at our training facilities for specific advanced surgical topics.",
      features: ["Clinical Supervision", "Patient Demonstrations"],
      cta: "Explore Workshops",
      href: "/workshops",
      buttonVariant: "outline",
      gradient: true,
    },
  ];

  const badgeClass = {
    "outline-blue":
      "border border-[#6B7585] text-[#003283] bg-transparent",
    solid: "bg-[#08386D] text-white border border-[#08386D]",
    "outline-dark":
      "border border-[#6B7585] text-[#08386D] bg-transparent",
  } as const;

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-14 max-w-3xl">
          <div className="inline-flex border border-[#6B7585] px-4 sm:px-5 py-1.5 sm:py-2 rounded-full mb-5 sm:mb-6">
            <span className="text-[11px] sm:text-[12px] font-semi_bold_24pt tracking-[0.14em] text-[#08386D] uppercase">
              LEARNING FORMATS
            </span>
          </div>

          <h2 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[44px] font-semi_bold_24pt text-[#00173C] leading-[1.15] tracking-tight mb-4 sm:mb-5">
            Learn the way that fits
            <br className="hidden sm:block" /> your schedule
          </h2>

          <p className="text-[#6B7585] font-regular_18pt text-[15px] sm:text-base md:text-[17px] leading-relaxed">
            Every course is available in at least one of three formats below.
          </p>
        </div>

        {/* Cards — flex for phone stacking */}
        <div className="flex flex-col lg:flex-row w-full gap-5 md:gap-6">
          {formats.map((format) => (
            <div
              key={format.title}
              className="flex flex-col w-full lg:flex-1 min-h-0 min-w-0 rounded-[20px] md:rounded-[24px] border border-[#E5E7EB] p-6 sm:p-7 md:p-8 shadow-[0_8px_24px_rgba(0,23,60,0.06)]"
              style={
                format.gradient
                  ? {
                      background:
                        "linear-gradient(180deg, #F7FCFF 0%, #FFFFFF 100%)",
                    }
                  : { background: "#FFFFFF" }
              }
            >
              {/* Icon + badge */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <Image
                  src={format.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0"
                />
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semi_bold_24pt tracking-[0.1em] uppercase flex-shrink-0 ${badgeClass[format.badgeVariant]}`}
                >
                  {format.badge}
                </span>
              </div>

              <h3 className="text-[20px] sm:text-[22px] font-semi_bold_24pt text-[#00173C] mb-3 tracking-tight">
                {format.title}
              </h3>

              <p className="text-[#6B7585] font-regular_18pt text-[14px] sm:text-[15px] leading-relaxed mb-6">
                {format.description}
              </p>

              <ul className="flex flex-col gap-3 mb-8">
                {format.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <Image
                      src="/education-page/Learning/Tick.svg"
                      alt=""
                      width={15}
                      height={15}
                      className="w-[15px] h-[15px] flex-shrink-0"
                    />
                    <span className="text-[#00173C] font-regular_18pt text-[14px] sm:text-[15px]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Link
                  href={format.href}
                  className={
                    format.buttonVariant === "green"
                      ? "inline-flex w-full items-center justify-center bg-[#41F39B] text-[#011A43] px-5 py-3 rounded-[8px] font-inter-medium_18pt text-[15px]"
                      : "inline-flex w-full items-center justify-center bg-white border border-[#00173C] text-[#00173C] px-5 py-3 rounded-[8px] font-inter-medium_18pt text-[15px]"
                  }
                >
                  {format.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

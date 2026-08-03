import Image from "next/image";
import Link from "next/link";

type Plan = {
  name: string;
  price: string;
  period?: string;
  features: string[];
  cta: string;
  href: string;
};

const plans: Plan[] = [
  {
    name: "Student",
    price: "Free",
    features: [
      "Read-only clinical feeds",
      "Student resources portal",
      "Monthly webinar access",
    ],
    cta: "Register as Student",
    href: "/community#join",
  },
  {
    name: "Contributor",
    price: "$29",
    period: "/month",
    features: [
      "Active case contribution",
      "Private networking events",
      "Clinical peer review access",
      "Resource library (Level 1)",
    ],
    cta: "Join Monthly",
    href: "/community#join",
  },
  {
    name: "Grey Dental Alumni",
    price: "Included",
    features: [
      "Lifetime Alumni status",
      "Post-grad mentor access",
      "Course material updates",
      "Advanced Circle Priority",
    ],
    cta: "Verify Graduation",
    href: "/community#join",
  },
  {
    name: "Mastermind",
    price: "$199",
    period: "/month",
    features: [
      "1-on-1 expert mentoring",
      "Clinic growth consulting",
      "Priority symposium access",
      "Private Mastermind portal",
    ],
    cta: "Request Application",
    href: "/community#join",
  },
];

export default function CommunityMembership() {
  return (
    <section
      id="membership"
      className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-[#F9FCFE] py-14 sm:py-16 md:py-20 lg:py-24 overflow-x-hidden flex flex-col"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full min-w-0 flex flex-col">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 sm:gap-5 mb-10 sm:mb-12 md:mb-14">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#6B7585] bg-transparent">
            <span className="text-[11px] sm:text-[12px] font-semi_bold_24pt tracking-[0.12em] text-[#08386D] uppercase">
              Membership Types
            </span>
          </div>

          <h2 className="text-[26px] sm:text-3xl md:text-4xl lg:text-[44px] font-semi_bold_24pt text-[#00173C] leading-[1.15] tracking-tight">
            Choose Your Level
          </h2>
        </div>

        {/* Plans — white default, blue + green CTA on hover */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap xl:flex-nowrap gap-4 sm:gap-5 md:gap-6 w-full min-w-0 items-stretch">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="group flex flex-col min-w-0 w-full sm:w-[calc(50%-0.625rem)] xl:flex-1 xl:w-auto h-auto bg-white border-2 border-[#E0E0E0] rounded-[16px] sm:rounded-[20px] p-6 sm:p-7 transition-all duration-300 hover:bg-[#071B39] hover:border-[#00173C] hover:shadow-[0_5px_12px_rgba(0,0,0,0.10),0_22px_22px_rgba(0,0,0,0.09),0_40px_32px_rgba(0,0,0,0.05)]"
            >
              <h3 className="text-[#08386D] group-hover:text-white font-semi_bold_24pt text-[16px] sm:text-[17px] md:text-[18px] leading-snug mb-3 sm:mb-4 transition-colors">
                {plan.name}
              </h3>

              <div className="flex items-baseline gap-1 mb-4 sm:mb-5">
                <span className="text-[#00173C] group-hover:text-white font-semi_bold_24pt text-[32px] sm:text-[36px] md:text-[40px] leading-none tracking-tight transition-colors">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-[#6B7585] group-hover:text-white/55 font-regular_18pt text-[13px] sm:text-[14px] transition-colors">
                    {plan.period}
                  </span>
                )}
              </div>

              <div className="h-px w-full bg-[#E8EEF4] group-hover:bg-white/15 mb-5 sm:mb-6 transition-colors" />

              <ul className="flex flex-col gap-3 sm:gap-3.5 flex-1 mb-6 sm:mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 min-w-0">
                    <Image
                      src="/Community/icon-check.svg"
                      alt=""
                      width={15}
                      height={15}
                      className="w-[15px] h-[15px] flex-shrink-0 mt-0.5"
                    />
                    <span className="text-[#00173C] group-hover:text-white/90 font-regular_18pt text-[13px] sm:text-[14px] leading-snug transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className="mt-auto inline-flex items-center justify-center w-full bg-white border border-[#00173C] text-[#00173C] group-hover:bg-[#41F39B] group-hover:border-[#41F39B] group-hover:text-[#00173C] px-5 py-3 sm:py-3.5 rounded-[10px] font-inter-medium_18pt text-[14px] sm:text-[15px] transition-colors"
              >
                {plan.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

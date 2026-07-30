import Image from "next/image";
import Link from "next/link";

const workshops = [
  {
    tag: "DIGITAL WORKFLOW",
    title: "CAD-CAM Design Workshop",
    description:
      "Hands-on session covering digital scanning, design software, and milling workflow for restorations.",
    duration: "2 hrs session",
    href: "/enroll",
  },
  {
    tag: "CASE DOCUMENTATION",
    title: "Clinical Case Documentation Workshop",
    description:
      "Learn structured recording, submission formatting, and presentation of clinical case records.",
    duration: "4 hrs session",
    href: "/enroll",
  },
];

export default function WorkshopsSection() {
  return (
    <section
      id="workshops"
      className="w-full bg-white pb-16 sm:pb-20 md:pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 items-stretch">
          {/* Blue feature card */}
          <div
            className="flex flex-col justify-between w-full lg:w-[42%] xl:w-[38%] min-h-[280px] sm:min-h-[340px] lg:min-h-0 rounded-[20px] sm:rounded-[24px] p-7 sm:p-8 md:p-10"
            style={{
              background:
                "linear-gradient(180deg, #003283 0%, #001C4A 50%, #00173C 100%)",
            }}
          >
            <div className="mb-10 sm:mb-14">
              <Image
                src="/Course_Details/workshops-icon.svg"
                alt=""
                width={94}
                height={94}
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-[72px] md:h-[72px]"
              />
            </div>

            <div className="flex flex-col">
              <h2 className="text-[32px] sm:text-4xl md:text-[42px] font-semi_bold_24pt text-white leading-tight tracking-tight mb-3">
                Workshops
              </h2>
              <p className="text-white/85 font-regular_18pt text-[14px] sm:text-[15px] leading-relaxed max-w-xs">
                Focused, hands-on sessions on a single technique or clinical
                skill.
              </p>
            </div>
          </div>

          {/* Workshop cards */}
          <div className="flex flex-col gap-5 sm:gap-6 flex-1">
            {workshops.map((workshop) => (
              <article
                key={workshop.title}
                className="flex flex-col bg-white border border-[#E5E7EB] rounded-[16px] sm:rounded-[20px] p-5 sm:p-6 md:p-7 shadow-[0_4px_20px_rgba(0,23,60,0.04)]"
              >
                <span className="inline-flex self-start bg-[#41F39BCC] text-[#00173C] text-[11px] font-semi_bold_24pt tracking-[0.08em] uppercase px-3 py-1 rounded-full mb-4">
                  {workshop.tag}
                </span>

                <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-semi_bold_24pt text-[#00173C] leading-snug mb-2">
                  {workshop.title}
                </h3>

                <p className="text-[#6B7585] font-regular_18pt text-[14px] sm:text-[15px] leading-relaxed mb-6 max-w-2xl">
                  {workshop.description}
                </p>

                <div className="mt-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-2 text-[#6B7585]">
                    <Image
                      src="/Course_Details/clock.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="w-4 h-4 flex-shrink-0"
                    />
                    <span className="font-regular_18pt text-[14px]">
                      {workshop.duration}
                    </span>
                  </div>

                  <Link
                    href={workshop.href}
                    className="inline-flex items-center justify-center bg-white border border-[#001A4D] text-[#001A4D] hover:bg-[#001A4D] hover:text-white px-5 py-2.5 rounded-[8px] font-inter-medium_18pt text-[14px] sm:text-[15px] w-full sm:w-auto transition-colors"
                  >
                    Reserve Spot
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

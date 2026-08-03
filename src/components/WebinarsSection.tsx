import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";

export default function WebinarsSection({
  tinted = false,
}: {
  tinted?: boolean;
}) {
  return (
    <section
      id="webinars"
      className={`w-[100vw] relative left-1/2 -translate-x-1/2 py-12 sm:py-16 md:py-20 lg:py-24 ${
        tinted ? "bg-[#F9FCFE]" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-6 sm:gap-8 md:gap-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 sm:gap-4 md:gap-10 w-full">
          <h2 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[44px] font-semi_bold_24pt text-[#00173C] leading-[1.15] tracking-tight flex-shrink-0 min-w-0">
            Online Webinars
          </h2>
          <p className="text-[#6B7585] font-regular_18pt text-[14px] sm:text-[15px] md:text-[17px] leading-relaxed max-w-md md:text-right min-w-0">
            Free, live sessions covering emerging techniques and clinical
            Q&amp;A.
          </p>
        </div>

        {/* Banner */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 sm:gap-8 lg:gap-10 bg-[#00173C] rounded-[20px] sm:rounded-[24px] p-5 sm:p-8 md:p-10 shadow-[0_8px_28px_rgba(0,23,60,0.12)] w-full">
          {/* Left copy + CTA */}
          <div className="flex flex-col flex-1 min-w-0 w-full">
            <h3 className="text-[22px] sm:text-[28px] md:text-[32px] font-semi_bold_24pt text-white leading-tight tracking-tight mb-3 sm:mb-4">
              Join our next live webinar
            </h3>
            <p className="text-white/75 font-regular_18pt text-[13px] sm:text-[15px] leading-relaxed mb-5 sm:mb-8 max-w-lg">
              Free, live sessions with practicing specialists - ask questions in
              real time and earn attendance credit.
            </p>

            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-2 self-stretch sm:self-start bg-[#41F39B] text-[#00173C] px-5 py-3 rounded-[8px] font-inter-medium_18pt text-[14px] sm:text-[15px] w-full sm:w-auto"
            >
              <span>View All Webinars</span>
              <Image
                src="/Course_Details/webinar-arrow.svg"
                alt=""
                width={17}
                height={14}
                className="w-4 h-4 flex-shrink-0"
              />
            </Link>
          </div>

          {/* Upcoming card */}
          <div className="flex flex-col w-full lg:w-[42%] xl:w-[40%] lg:flex-shrink-0 bg-[#001A4D] border border-white/10 rounded-[16px] sm:rounded-[20px] p-5 sm:p-6 md:p-7 shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="w-[3px] h-4 bg-[#41F39B] rounded-full flex-shrink-0" />
              <span className="text-[#41F39B] text-[11px] sm:text-[12px] font-semi_bold_24pt tracking-[0.12em] uppercase">
                UPCOMING
              </span>
            </div>

            <h4 className="text-[17px] sm:text-[20px] md:text-[22px] font-semi_bold_24pt text-white leading-snug mb-4 sm:mb-6">
              Modern Approaches to Root Canal Retreatment
            </h4>

            <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
              <div className="inline-flex items-center gap-2 bg-[#00173C]/80 border border-white/10 rounded-full px-3.5 py-2 w-full sm:w-auto">
                <Image
                  src="/Course_Details/webinar-calendar.svg"
                  alt=""
                  width={17}
                  height={17}
                  className="w-4 h-4 flex-shrink-0"
                />
                <span className="text-white/80 font-regular_18pt text-[13px] sm:text-[14px]">
                  Friday, August 30
                </span>
              </div>

              <div className="inline-flex items-center gap-2 bg-[#00173C]/80 border border-white/10 rounded-full px-3.5 py-2 w-full sm:w-auto">
                <Clock className="w-4 h-4 text-white/80 flex-shrink-0" />
                <span className="text-white/80 font-regular_18pt text-[13px] sm:text-[14px]">
                  6:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

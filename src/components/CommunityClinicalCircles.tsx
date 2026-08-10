"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Circle = {
  title: string;
  description: string;
  badge: "free" | "invite";
  badgeLabel: string;
};

/** One entry per circle — no duplicates across the three design frames */
const circles: Circle[] = [
  {
    title: "Grey Endo Circle",
    description: "Endodontic discussions, cases and resources.",
    badge: "free",
    badgeLabel: "Free",
  },
  {
    title: "Grey Residency Circle",
    description: "Residency guidance and peer support.",
    badge: "free",
    badgeLabel: "Free",
  },
  {
    title: "Grey Implant Circle",
    description: "Implantology discussions and treatment planning.",
    badge: "free",
    badgeLabel: "Free",
  },
  {
    title: "Grey Forums",
    description: "Clinical photography tips and feedback.",
    badge: "invite",
    badgeLabel: "Invite & Paid",
  },
  {
    title: "Grey CAD-CAM Circle",
    description: "Digital dentistry and CAD-CAM workflows.",
    badge: "free",
    badgeLabel: "Free",
  },
  {
    title: "Grey Docs Circle",
    description: "Documentation techniques and templates.",
    badge: "free",
    badgeLabel: "Free",
  },
  {
    title: "Grey Photo Circle",
    description: "Clinical photography tips and feedback.",
    badge: "free",
    badgeLabel: "Free",
  },
  {
    title: "Grey Webinar Lounge",
    description: "Upcoming webinars, recordings and live sessions.",
    badge: "invite",
    badgeLabel: "Invite & Paid",
  },
  {
    title: "Grey Referral Network",
    description: "Professional referrals and collaborations.",
    badge: "free",
    badgeLabel: "Free",
  },
  {
    title: "Grey Mastermind",
    description: "Invite-only community for experienced professionals.",
    badge: "invite",
    badgeLabel: "Invite Paid",
  },
];

const EDGE_EPS = 4;

export default function CommunityClinicalCircles() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;
    setCanScrollLeft(scrollLeft > EDGE_EPS);
    setCanScrollRight(scrollLeft < maxScroll - EDGE_EPS);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    updateScrollState();

    const onScroll = () => updateScrollState();
    el.addEventListener("scroll", onScroll, { passive: true });

    const ro = new ResizeObserver(() => updateScrollState());
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
  }, [updateScrollState]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const amount = el.clientWidth;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="clinical-circles"
      className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-white overflow-x-hidden pb-14 sm:pb-16 md:pb-20 lg:pb-24 flex flex-col"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full min-w-0 flex flex-col">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 sm:gap-8 mb-8 sm:mb-10 md:mb-12 w-full min-w-0">
          <div className="flex flex-col items-start gap-4 sm:gap-5 min-w-0">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#777779] bg-white">
              <span className="text-[11px] sm:text-[12px] font-semi_bold_24pt tracking-[0.12em] text-[#2F5F75] uppercase">
                Curated Specialties
              </span>
            </div>

            <h2 className="text-[26px] sm:text-3xl md:text-4xl lg:text-[44px] font-semi_bold_24pt text-[#3A738D] leading-[1.15] tracking-tight">
              Featured Clinical Circles
            </h2>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0 self-end sm:self-auto">
            <button
              type="button"
              aria-label="Previous circles"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full transition-colors ${
                canScrollLeft
                  ? "bg-[#3A738D] text-white hover:bg-[#2F5F75]"
                  : "bg-[#E8EEF4] text-[#9AA3B2] cursor-default"
              }`}
            >
              <ArrowLeft className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={2.25} />
            </button>
            <button
              type="button"
              aria-label="Next circles"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full transition-colors ${
                canScrollRight
                  ? "bg-[#3A738D] text-white hover:bg-[#2F5F75]"
                  : "bg-[#E8EEF4] text-[#9AA3B2] cursor-default"
              }`}
            >
              <ArrowRight className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={2.25} />
            </button>
          </div>
        </div>

        {/* Cards carousel — single unique list, no clones */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-5 w-full min-w-0 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {circles.map((circle) => (
            <article
              key={circle.title}
              data-circle-card
              className="snap-start relative flex flex-col flex-shrink-0 w-[min(100%,280px)] sm:w-[calc(50%-0.625rem)] lg:w-[calc(25%-0.9375rem)] min-w-0 bg-white rounded-[16px] sm:rounded-[20px] p-5 sm:p-6 border border-[#E0E0E0] shadow-[0_4px_12px_0_rgba(0,0,0,0.08)]"
            >
              <div
                className={`inline-flex self-start items-center px-2.5 py-1 rounded-full mb-4 sm:mb-5 ${
                  circle.badge === "invite" ? "bg-[#5ECAA0]" : "bg-[#EEF1F5]"
                }`}
              >
                <span
                  className={`text-[11px] sm:text-[12px] font-inter-medium_18pt leading-none ${
                    circle.badge === "invite" ? "text-black" : "text-[#777779]"
                  }`}
                >
                  {circle.badgeLabel}
                </span>
              </div>

              <h3 className="text-[#3A738D] font-semi_bold_24pt text-[16px] sm:text-[17px] md:text-[18px] leading-snug tracking-tight mb-2 sm:mb-2.5">
                {circle.title}
              </h3>

              <p className="text-[#777779] font-regular_18pt text-[13px] sm:text-[14px] leading-relaxed">
                {circle.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

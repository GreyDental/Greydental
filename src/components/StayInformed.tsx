import Image from "next/image";
import Link from "next/link";

export default function StayInformed() {
  return (
    <section className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-8 sm:gap-10 w-full min-w-0">
        <h2 className="text-[26px] sm:text-3xl md:text-4xl lg:text-[44px] font-semi_bold_24pt text-[#3A738D] leading-[1.15] tracking-tight">
          Stay Informed
        </h2>

        <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 w-full min-w-0 items-stretch">
          {/* Article card */}
          <article className="flex flex-col flex-1 min-w-0 w-full bg-white border border-[#E5E7EB] rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-[0_8px_24px_rgba(58,115,141,0.08)]">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] min-h-[180px]">
              <Image
                src="/Resources/article.jpg"
                alt="Digital dentistry team collaborating"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col flex-1 p-5 sm:p-6 md:p-7 min-w-0">
              <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-semi_bold_24pt text-[#3A738D] leading-snug tracking-tight mb-2 sm:mb-3">
                Expanding the Horizons of Digital Dentistry: A 2026 Preview
              </h3>
              <p className="text-[#777779] font-regular_18pt text-[13px] sm:text-[14px] mb-4 sm:mb-5">
                June 10, 2026 • 8 min read
              </p>
              <Link
                href="/resources"
                className="inline-flex items-center gap-1.5 self-start mt-auto text-[#3A738D] font-inter-medium_18pt text-[14px] sm:text-[15px] hover:opacity-80 transition-opacity"
              >
                Read more
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>

          {/* APEX Newsletter card */}
          <div
            className="flex flex-col flex-1 min-w-0 w-full rounded-[16px] sm:rounded-[20px] p-5 sm:p-6 md:p-8 shadow-[0_8px_24px_rgba(58,115,141,0.18)]"
            style={{
              background: "linear-gradient(225deg, #2F5F75 0%, #2F5F75 100%)",
            }}
          >
            <div className="flex flex-row items-start justify-between gap-4 mb-6 sm:mb-8">
              <div className="flex flex-col flex-1 min-w-0 pt-1">
                <h3 className="text-[22px] sm:text-[26px] md:text-[28px] font-semi_bold_24pt text-white leading-tight tracking-tight mb-2 sm:mb-3">
                  APEX Newsletter
                </h3>
                <p className="text-white/70 font-regular_18pt text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed max-w-xs">
                  Join 5,000+ practitioners receiving monthly insights directly
                  in their inbox.
                </p>
              </div>

              <Image
                src="/Resources/icon-envelope.svg"
                alt=""
                width={90}
                height={81}
                className="w-14 h-auto sm:w-16 md:w-[72px] flex-shrink-0 opacity-90"
              />
            </div>

            <div className="mt-auto flex flex-col gap-3 sm:gap-4">
              <div className="flex flex-col gap-1.5 rounded-[12px] border border-white/15 bg-white/5 px-4 py-3 sm:px-5 sm:py-3.5">
                <span className="text-white/90 text-[11px] sm:text-[12px] font-semi_bold_24pt tracking-[0.12em] uppercase">
                  Latest Issue
                </span>
                <span className="text-white/65 font-regular_18pt text-[13px] sm:text-[14px]">
                  Future of Digital Dentistry 2026
                </span>
              </div>

              <Link
                href="#newsletter"
                className="inline-flex items-center justify-center w-full bg-[#5ECAA0] hover:bg-[#7ED9B5] text-black px-5 py-3 sm:py-3.5 rounded-[10px] font-inter-medium_18pt text-[14px] sm:text-[15px] transition-colors"
              >
                Subscribe Now
              </Link>
              <Link
                href="#newsletter"
                className="inline-flex items-center justify-center text-white/60 hover:text-white/90 font-regular_18pt text-[13px] sm:text-[14px] transition-colors"
              >
                Browse Newsletter Archive
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

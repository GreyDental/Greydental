import Image from "next/image";
import Link from "next/link";

const publications = [
  {
    tag: "LATEST RELEASE",
    title: "Grey Dental Clinical Handbooks",
    description:
      "A series of focused procedural guides designed for chairside reference. Covering endodontics to advanced restorative techniques.",
    image: "/Resources/book-1.png",
  },
  {
    tag: "LATEST RELEASE",
    title: "Grey Dental Comprehensive Text",
    description:
      "A series of focused procedural guides designed for chairside reference. Covering endodontics to advanced restorative techniques.",
    image: "/Resources/book-2.png",
  },
];

export default function CoreClinicalPublications() {
  return (
    <section className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-8 sm:gap-10 md:gap-12 w-full min-w-0">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 sm:gap-6 w-full min-w-0">
          <h2 className="text-[26px] sm:text-3xl md:text-4xl lg:text-[44px] font-semi_bold_24pt text-[#051937] leading-[1.15] tracking-tight max-w-md min-w-0">
            Core Clinical Publications
          </h2>
          <p className="text-[#6B7585] font-regular_18pt text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-md md:text-right min-w-0">
            Essential reading for surgical precision and diagnostic mastery.
            Published and recommended professional dental texts available for
            purchase or digital access.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 w-full min-w-0">
          {publications.map((pub) => (
            <article
              key={pub.title}
              className="flex flex-col sm:flex-row flex-1 min-w-0 w-full bg-white border border-[#BCBCBC] rounded-[16px] sm:rounded-[20px] overflow-hidden"
            >
              {/* Book panel */}
              <div className="flex items-center justify-center w-full sm:w-[42%] lg:w-[40%] sm:flex-shrink-0 min-h-[220px] sm:min-h-0 bg-[#F1F5F9] p-6 sm:p-8">
                <div className="relative w-full max-w-[160px] sm:max-w-[180px] aspect-[3/4]">
                  <Image
                    src={pub.image}
                    alt={pub.title}
                    fill
                    sizes="180px"
                    className="object-contain drop-shadow-[0_12px_24px_rgba(0,23,60,0.18)]"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col flex-1 min-w-0 p-5 sm:p-6 md:p-7">
                <span className="text-[#08386D] text-[11px] sm:text-[12px] font-semi_bold_24pt tracking-[0.12em] uppercase mb-2 sm:mb-3">
                  {pub.tag}
                </span>

                <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-semi_bold_24pt text-[#051937] leading-snug tracking-tight mb-2 sm:mb-3">
                  {pub.title}
                </h3>

                <p className="text-[#6B7585] font-regular_18pt text-[13px] sm:text-[14px] leading-relaxed mb-5 sm:mb-6 flex-1">
                  {pub.description}
                </p>

                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center w-full bg-[#08386D] hover:bg-[#051937] text-white px-5 py-3 sm:py-3.5 rounded-[10px] font-inter-medium_18pt text-[14px] sm:text-[15px] transition-colors"
                >
                  Buy Now
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

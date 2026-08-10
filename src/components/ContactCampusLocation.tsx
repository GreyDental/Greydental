import Image from "next/image";

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=145+Oxford+Road,+Manchester+M13+9GP,+United+Kingdom";

export default function ContactCampusLocation() {
  return (
    <section className="w-[100vw] relative left-1/2 -translate-x-1/2 overflow-x-hidden flex flex-col bg-[#F4F7F8] pb-14 sm:pb-20 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full min-w-0 flex flex-col">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
          <div className="flex flex-col min-w-0 gap-2">
            <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-semi_bold_24pt text-[#2F5F75] leading-snug tracking-tight">
              Campus Location
            </h2>
            <p className="text-[#777779] font-regular_18pt text-[14px] sm:text-[15px] leading-relaxed">
              Find us near the Oxford Road Manchester.
            </p>
          </div>

          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start sm:self-auto text-[#777779] hover:text-[#3A738D] font-inter-medium_18pt text-[14px] sm:text-[15px] transition-colors flex-shrink-0"
          >
            Get Driving Directions
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="flex-shrink-0"
            >
              <path
                d="M6.5 3.5H4.2A1.2 1.2 0 0 0 3 4.7v7.1A1.2 1.2 0 0 0 4.2 13h7.1a1.2 1.2 0 0 0 1.2-1.2V9.5M9.5 3h3.5V6.5M13 3 7.5 8.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="relative w-full min-w-0 flex flex-col items-center">
          <div className="relative w-full max-w-5xl mx-auto">
            <Image
              src="/contact/map.png"
              alt="World map showing Grey Dental Academy campus location at 145 Oxford Road, Manchester"
              width={1200}
              height={620}
              className="w-full h-auto select-none"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

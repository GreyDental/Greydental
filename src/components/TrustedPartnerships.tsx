import Image from "next/image";

const partners = [
  { name: "Planmeca", src: "/Partners/logo-planmeca.png", w: 244, h: 38 },
  { name: "NSK", src: "/Partners/logo-nsk.svg", w: 134, h: 52 },
  { name: "Midmark", src: "/Partners/logo-midmark.svg", w: 221, h: 36 },
  { name: "ADA", src: "/Partners/logo-ada.png", w: 128, h: 41 },
  { name: "FDI World Dental Federation", src: "/Partners/logo-fdi.png", w: 261, h: 127 },
  { name: "Harvard School of Dental Medicine", src: "/Partners/logo-harvard.svg", w: 220, h: 42 },
  { name: "University of Dundee", src: "/Partners/logo-dundee.png", w: 154, h: 51 },
  { name: "Dentsply Sirona", src: "/Partners/logo-dentsply.png", w: 162, h: 46 },
];

export default function TrustedPartnerships() {
  return (
    <section
      id="partnerships"
      className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-white py-14 sm:py-16 md:py-20 lg:py-24 overflow-x-hidden flex flex-col"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full min-w-0 flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 sm:gap-4 mb-10 sm:mb-12 md:mb-14 max-w-2xl min-w-0">
          <h2 className="text-[26px] sm:text-3xl md:text-4xl lg:text-[44px] font-semi_bold_24pt text-[#051937] leading-[1.15] tracking-tight">
            Trusted Partnerships
          </h2>
          <p className="text-[#6B7585] font-regular_18pt text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
            We are proud to collaborate with prestigious institutions and
            forward-thinking organizations worldwide.
          </p>
        </div>

        {/* Logo cards */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-5 w-full min-w-0">
          {partners.map((partner) => (
            <article
              key={partner.name}
              className="flex flex-col items-center justify-center min-w-0 w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(25%-0.9375rem)] min-h-[140px] sm:min-h-[160px] md:min-h-[180px] bg-[#F9FCFE] border border-[#E5E7EB] rounded-[12px] sm:rounded-[14px] px-5 sm:px-6 py-6 sm:py-8"
              style={{
                boxShadow:
                  "0px 3px 6px 0px rgba(214, 214, 214, 0.10), 0px 10px 10px 0px rgba(214, 214, 214, 0.09), 0px 22px 14px 0px rgba(214, 214, 214, 0.05), 0px 40px 16px 0px rgba(214, 214, 214, 0.03), 0px 62px 18px 0px rgba(214, 214, 214, 0.01)",
              }}
            >
              <div className="relative w-full max-w-[200px] sm:max-w-[220px] md:max-w-[240px] h-16 sm:h-20 md:h-24 flex items-center justify-center">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={partner.w}
                  height={partner.h}
                  className="max-h-14 sm:max-h-16 md:max-h-20 w-auto max-w-full object-contain"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

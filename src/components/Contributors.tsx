import Image from "next/image";

export default function Contributors() {
  const contributors = [
    {
      image: "/about-us/contributors/1.png",
      name: "Dr. R. Hale",
      role: "GUEST LECTURER",
      description: "Oral surgery, 12 yrs practice",
    },
    {
      image: "/about-us/contributors/2.png",
      name: "M. Kwan, PhD",
      role: "RESEARCHER",
      description: "Clinical biomaterials research",
    },
    {
      image: "/about-us/contributors/3.png",
      name: "Dr. A. Silva",
      role: "INDUSTRY EXPERT",
      description: "Digital workflow specialist",
    },
    {
      image: "/about-us/contributors/4.png",
      name: "Dr. T. Nakamura",
      role: "GUEST LECTURER",
      description: "Pediatric dentistry, 9 yrs practice",
    },
  ];

  return (
    <section className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-greyBg py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Pill Badge */}
        <div className="bg-white border border-gray-200/80 px-5 py-2 rounded-full mb-6 inline-block shadow-sm">
          <span className="text-[12px] font-semi_bold_24pt tracking-[0.14em] text-darkBlueText uppercase">
            CONTRIBUTORS
          </span>
        </div>

        {/* Header: Left Title, Right Description */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 mb-14 w-full min-w-0">
          <div className="flex-1 min-w-0">
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-semi_bold_24pt text-darkBlueText leading-[1.15] tracking-tight">
              Experts who enrich every learning experience
            </h2>
          </div>
          <div className="flex-1 min-w-0 lg:pl-8">
            <p className="text-gray-500 font-regular_18pt text-base md:text-[17px] leading-relaxed max-w-md">
              We believe every learner deserves personalized guidance and timely support throughout their educational journey.
            </p>
          </div>
        </div>

        {/* 4 Contributors — flex wrap */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 lg:gap-8 w-full min-w-0">
          {contributors.map((c, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start min-w-0 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.5rem)]"
            >
              {/* Green Card Image Container */}
              <div className="relative w-full aspect-[1/1.05] rounded-[10px] overflow-hidden mb-5 bg-green flex items-end justify-center shadow-sm">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Contributor Details */}
              <h3 className="text-lg font-semi_bold_24pt text-darkBlueText mb-1">
                {c.name}
              </h3>
              
              <span className="text-[11px] font-semi_bold_24pt tracking-wider text-blueText uppercase mb-1">
                {c.role}
              </span>

              <p className="text-gray-500 font-regular_18pt text-[13px]">
                {c.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

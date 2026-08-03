import Image from "next/image";

export default function OurValues() {
  const points = [
    "Delivering the highest standards of education and patient-centered care.",
    "Teaching the latest research, techniques, and best practices.",
    "Promoting professionalism, integrity, and responsibility in every clinical decision.",
    "Encouraging lifelong learning and ongoing professional development."
  ];

  return (
    <section className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-greyBg py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Pill Badge */}
        <div className="bg-white border border-gray-200/80 px-5 py-2 rounded-full mb-6 inline-block shadow-sm">
          <span className="text-[12px] font-semi_bold_24pt tracking-[0.14em] text-darkBlueText uppercase">
            OUR VALUES
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-semi_bold_24pt text-darkBlueText leading-[1.15] tracking-tight mb-12 max-w-2xl">
          Guided by Excellence, Integrity, and Lifelong Learning
        </h2>

        {/* Card flex container */}
        <div className="w-full min-w-0 bg-white rounded-[24px] md:rounded-[32px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col lg:flex-row lg:items-stretch">
          
          {/* Left Column: Image */}
          <div className="relative min-h-[340px] lg:min-h-[480px] w-full lg:w-1/2 lg:flex-shrink-0 min-w-0">
            <Image
              src="/about-us/our-values.jpg"
              alt="The Foundation of Our Academy"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Right Column: White Background Content */}
          <div className="bg-white p-8 md:p-12 lg:p-14 flex flex-col justify-center flex-1 min-w-0">
            <h3 className="text-2xl lg:text-[28px] font-semi_bold_24pt text-darkBlueText mb-4 tracking-tight">
              The Foundation of Our Academy
            </h3>
            
            <p className="text-gray-500 font-regular_18pt text-[15px] leading-relaxed mb-8">
              Our academy is built on the principles that define outstanding dental education and professional practice.
            </p>

            {/* List with Tick Icons */}
            <ul className="space-y-5">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <Image
                    src="/about-us/about-us-tick.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    className="w-6 h-6 flex-shrink-0 mt-0.5"
                  />
                  <span className="text-gray-600 font-regular_18pt text-[15px] leading-snug">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function OurApproach() {
  const cards = [
    {
      icon: "/about-us/our-approach-icons/structured-modules.svg",
      title: "Structured Modules",
      description: "Step-by-step lessons designed for effective learning."
    },
    {
      icon: "/about-us/our-approach-icons/case-studies.svg",
      title: "Clinical Case Studies",
      description: "Learn through real-world patient scenarios."
    },
    {
      icon: "/about-us/our-approach-icons/video-lectures.svg",
      title: "Expert Video Lessons",
      description: "Gain insights from experienced dental professionals."
    },
    {
      icon: "/about-us/our-approach-icons/certificate.svg",
      title: "Recognized Certification",
      description: "Earn a certificate upon successful course completion."
    }
  ];

  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Pill Badge */}
        <div className="bg-white border border-gray-200/80 px-5 py-2 rounded-full mb-6 inline-block shadow-sm">
          <span className="text-[12px] font-semi_bold_24pt tracking-[0.14em] text-darkBlueText uppercase">
            OUR APPROACH
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-semi_bold_24pt text-darkBlueText leading-[1.15] tracking-tight mb-6 max-w-3xl text-center">
          Practical Learning Designed for Real-World Success
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 font-regular_18pt text-base md:text-[17px] leading-relaxed max-w-2xl text-center mb-16">
          Our flexible learning model combines engaging digital education with practical clinical insights to help learners succeed at every stage of their dental journey.
        </p>

        {/* Flex Layout: Left Cards (2x2) & Right Image */}
        <div className="w-full min-w-0 flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-10">
          {/* Left Side: 2x2 Cards with bg-greyBg */}
          <div className="w-full lg:w-[58%] lg:flex-shrink-0 min-w-0 flex flex-col sm:flex-row sm:flex-wrap gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-greyBg rounded-[24px] p-8 border border-gray-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-start min-w-0 w-full sm:w-[calc(50%-0.75rem)]"
              >
                {/* Icon */}
                <div className="mb-6">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-semi_bold_24pt text-darkBlueText mb-3 tracking-tight">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-gray-500 font-regular_18pt text-[14px] leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Side: Image Container */}
          <div className="relative w-full lg:flex-1 min-w-0 min-h-[360px] lg:min-h-[460px] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
            <Image
              src="/about-us/our-approach-icons/our-approach-image.jpg"
              alt="Practical Learning Designed for Real-World Success"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Instructors() {
  const instructors = [
    {
      image: "/about-us/instructors/1.jpg",
      name: "Dr. Sarah Thompson",
      role: "Director of Endodontics",
    },
    {
      image: "/about-us/instructors/2.jpg",
      name: "Dr. Marcus Chen",
      role: "Implantology Lead",
    },
    {
      image: "/about-us/instructors/3.jpg",
      name: "Dr. Elena Rodriguez",
      role: "Restorative Lead",
    },
  ];

  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-semi_bold_24pt text-darkBlueText leading-[1.15] tracking-tight mb-4 text-center">
          Meet Our Instructors
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 font-regular_18pt text-base md:text-[17px] leading-relaxed max-w-xl text-center mb-16">
          Our curriculum is developed and led by world-class clinicians who are pioneers in their respective fields.
        </p>

        {/* Instructors — flex for phone */}
        <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-8">
          {instructors.map((instructor, idx) => (
            <Link
              key={idx}
              href="/instructors"
              className="flex flex-col items-start min-w-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] group"
            >
              
              {/* Image Container with Mint Green Top Accent Bar */}
              <div className="relative w-full rounded-[24px] overflow-hidden mb-6 border-t-4 border-greenBg bg-gray-100 shadow-sm">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text Info */}
              <h3 className="text-xl md:text-[22px] font-semi_bold_24pt text-darkBlueText mb-1 group-hover:text-blueText transition-colors">
                {instructor.name}
              </h3>
              <p className="text-gray-500 font-regular_18pt text-sm">
                {instructor.role}
              </p>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function EducationCategories() {
  const categories = [
    {
      image: "/education-page/categories/endodontics-remote.jpg",
      title: "Foundations of Endodontics - Remote Learning",
      description: "Build a strong foundation in endodontics through self-paced online lessons, expert guidance, and evidence-based learning.",
      href: "/courses/endodontics-remote",
    },
    {
      image: "/education-page/categories/endodontics-residency.jpg",
      title: "Foundations of Endodontics - Immersive Residency",
      description: "Gain hands-on clinical experience with expert mentorship in a structured residency designed to build confidence.",
      href: "/courses/endodontics-residency",
    },
    {
      image: "/education-page/categories/bootcamp.jpg",
      title: "Dental Implants Bootcamp for General Practitioner",
      description: "Master implant placement and treatment planning through intensive hands-on training led by experienced clinicians.",
      href: "/courses/implants-bootcamp",
    },
  ];

  return (
    <section className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-greyBg py-14 sm:py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 gap-5 sm:gap-8">
          <div className="flex-1">
            <h2 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[44px] font-semi_bold_24pt text-darkBlueText leading-[1.15] tracking-tight">
              Explore Course Categories
            </h2>
          </div>
          <div className="flex-1 lg:max-w-md">
            <p className="text-gray-500 font-regular_18pt text-[15px] sm:text-base md:text-[17px] leading-relaxed">
              Every track is taught by a practicing specialist and built around real clinical cases.
            </p>
          </div>
        </div>

        {/* Categories Cards — flex for phone */}
        <div className="flex flex-col md:flex-row md:flex-wrap gap-6 sm:gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col h-full hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-shadow duration-300 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]"
            >
              {/* Card Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl md:text-[22px] font-semi_bold_24pt text-darkBlueText mb-4 leading-snug">
                    {cat.title}
                  </h3>
                  <p className="text-gray-500 font-regular_18pt text-[14px] leading-relaxed mb-8">
                    {cat.description}
                  </p>
                </div>

                {/* Explore Modules Link */}
                <Link
                  href={cat.href}
                  className="inline-flex items-center gap-2 text-[14px] font-semi_bold_24pt text-darkBlueText hover:text-blueText transition-colors group"
                >
                  <span>Explore Modules</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

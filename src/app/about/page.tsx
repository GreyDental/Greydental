import Image from "next/image";
import Mission from "@/components/Mission";
import OurValues from "@/components/OurValues";
import OurApproach from "@/components/OurApproach";
import Team from "@/components/Team";
import Instructors from "@/components/Instructors";
import StudentSupport from "@/components/StudentSupport";
import Contributors from "@/components/Contributors";
import AboutProducts from "@/components/AboutProducts";
import Newsletter from "@/components/Newsletter";

export const metadata = {
  title: "About Us | Grey Dental",
  description:
    "Grey Dental Academy is Pakistan’s first evidence-based, clinically driven, hybrid dental education platform.",
};

export default function AboutPage() {
  return (
    <main className="w-full">
      {/* Hero Section - Matching exact reference design with bg-greyBg */}
      <section className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-greyBg py-12 sm:py-16 md:py-24 overflow-hidden border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start max-w-xl w-full flex-1 min-w-0">
            {/* Pill Badge */}
            <div className="bg-white border border-gray-200/80 px-4 sm:px-5 py-2 rounded-full mb-6 sm:mb-8 shadow-sm">
              <span className="text-[11px] sm:text-[12px] font-semi_bold_24pt tracking-[0.14em] text-darkBlueText uppercase">
                About Us
              </span>
            </div>

            {/* Title */}
            <h1 className="text-[32px] sm:text-4xl md:text-5xl lg:text-[54px] font-semi_bold_24pt text-darkBlueText leading-[1.14] tracking-tight mb-6 sm:mb-8">
              Pakistan&apos;s first evidence-based, hybrid dental education platform
            </h1>

            {/* Subtitle / Description */}
            <p className="text-gray-500 font-regular_18pt text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
              Grey Dental Academy is Pakistan&apos;s first evidence-based, clinically driven, and hybrid dental education platform. Founded in August 2025 with the goal to make continued dental education clinically accessible for every dentist. We believe that world-class education should be accessible to every dentist, whether they run a single-chair clinic or a multi-specialty setup.
            </p>
          </div>

          {/* Right Column: Hero Image */}
          <div className="relative w-full flex-1 min-w-0 min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] max-w-md mx-auto lg:max-w-none px-2 sm:px-4 lg:px-0">
            <div className="absolute inset-0 bg-greenBg rounded-[24px] sm:rounded-[32px] -rotate-3 scale-[0.98] shadow-lg"></div>
            
            <div className="absolute inset-0 rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl border-4 border-white/10">
              <Image 
                src="/about-us/hero-image.jpg" 
                fill 
                className="object-cover" 
                alt="Grey Dental Academy — evidence-based clinical education"
                priority 
              />
            </div>
          </div>

        </div>
      </section>

      {/* Mission Component */}
      <Mission />

      {/* Our Values Section */}
      <OurValues />

      {/* Our Approach Section */}
      <OurApproach />

      <AboutProducts />

      {/* Founder & Team Section */}
      <Team />

      {/* Instructors Component */}
      <Instructors />

      {/* Student Support Section */}
      <StudentSupport />

      {/* Contributors Section (uses bg-greyBg) */}
      <Contributors />

      {/* Newsletter */}
      <Newsletter />
    </main>
  );
}

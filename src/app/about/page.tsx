import Image from "next/image";
import Mission from "@/components/Mission";
import OurValues from "@/components/OurValues";
import OurApproach from "@/components/OurApproach";
import Team from "@/components/Team";
import Instructors from "@/components/Instructors";
import Contributors from "@/components/Contributors";
import Newsletter from "@/components/Newsletter";

export const metadata = {
  title: "About Us | Grey Dental",
  description: "Built by clinicians who never left the operatory. Continuing education taught by practicing specialists.",
};

export default function AboutPage() {
  return (
    <main className="w-full">
      {/* Hero Section - Matching exact reference design with bg-greyBg */}
      <section className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-greyBg py-16 md:py-24 overflow-hidden border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start max-w-xl">
            {/* Pill Badge */}
            <div className="bg-white border border-gray-200/80 px-5 py-2 rounded-full mb-8 shadow-sm">
              <span className="text-[12px] font-semi_bold_24pt tracking-[0.14em] text-darkBlueText uppercase">
                ABOUT GREY DENTAL
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-semi_bold_24pt text-darkBlueText leading-[1.14] tracking-tight mb-8">
              Built by clinicians who never left the operatory
            </h1>

            {/* Subtitle / Description */}
            <p className="text-gray-500 font-regular_18pt text-[16px] md:text-[18px] leading-relaxed">
              Grey Dental was founded on a simple idea: continuing education should be taught by people still doing the work. Every course, workshop, and case study on this platform comes from a practicing specialist&apos;s own caseload.
            </p>
          </div>

          {/* Right Column: Hero Image with Team Component Styling */}
          <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] max-w-md mx-auto lg:max-w-none px-4 lg:px-0">
            {/* Green backdrop */}
            <div className="absolute inset-0 bg-greenBg rounded-[32px] -rotate-3 scale-[0.98] shadow-lg"></div>
            
            {/* Actual image wrapper */}
            <div className="absolute inset-0 rounded-[32px] overflow-hidden shadow-2xl border-4 border-white/10">
              <Image 
                src="/about-us/hero-image.jpg" 
                fill 
                className="object-cover" 
                alt="Built by clinicians who never left the operatory"
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

      {/* Founder & Team Section */}
      <Team />

      {/* Instructors Component */}
      <Instructors />

      {/* Contributors Section (uses bg-greyBg) */}
      <Contributors />

      {/* Newsletter */}
      <Newsletter />
    </main>
  );
}

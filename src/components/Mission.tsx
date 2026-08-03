import Image from "next/image";

export default function Mission() {
  return (
    <section id="mission" className="w-full bg-white py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Quote Icon */}
        <div className="mb-8">
          <Image
            src="/about-us/mission-colon.svg"
            alt="Quote Icon"
            width={51}
            height={36}
            className="w-[51px] h-[36px]"
          />
        </div>

        {/* Mission Statement */}
        <blockquote className="text-2xl md:text-3xl lg:text-[32px] font-semi_bold_24pt text-darkBlueText tracking-tight max-w-3xl leading-relaxed">
          &quot;Our mission is to bridge the gap between clinical theory and chairside excellence, empowering dentists to master new competencies with confidence.&quot;
        </blockquote>
      </div>
    </section>
  );
}

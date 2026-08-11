import Image from "next/image";

export default function Mission() {
  return (
    <section id="mission" className="w-full bg-white py-16 sm:py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        <div className="mb-8">
          <Image
            src="/about-us/mission-colon.svg"
            alt=""
            width={51}
            height={36}
            className="w-[51px] h-[36px]"
          />
        </div>

        <div className="inline-flex items-center bg-[#F4F7F8] border border-[#D5DEE2] px-4 py-1.5 rounded-full mb-5">
          <span className="text-[11px] sm:text-[12px] font-semi_bold_24pt tracking-[0.14em] text-[#3A738D] uppercase">
            Vision
          </span>
        </div>

        <blockquote className="text-2xl md:text-3xl lg:text-[32px] font-semi_bold_24pt text-darkBlueText tracking-tight max-w-3xl leading-relaxed mb-12 sm:mb-16">
          To become a trusted platform for evidence-based clinical education and
          networking—a hub that fosters mentorship and impact, connects problem
          solvers, encourages ihsan in skill and patient care, and creates
          opportunities that benefit the entire dental community.
        </blockquote>

        <div className="w-full min-w-0 flex flex-col items-center text-center border-t border-[#D5DEE2] pt-10 sm:pt-12">
          <div className="inline-flex items-center bg-[#F4F7F8] border border-[#D5DEE2] px-4 py-1.5 rounded-full mb-5">
            <span className="text-[11px] sm:text-[12px] font-semi_bold_24pt tracking-[0.14em] text-[#3A738D] uppercase">
              Built for Substance, Not Scale
            </span>
          </div>
          <p className="text-[#777779] font-regular_18pt text-[15px] sm:text-[16px] leading-relaxed max-w-2xl">
            From the start, our focus has been on substance over scale. While we
            are a new institute, our faculty brings decades of combined clinical
            experience. Being early in our journey makes us agile. We update
            content faster, respond to doubts quicker, and build courses around
            what dentists actually need in practice today.
          </p>
        </div>
      </div>
    </section>
  );
}

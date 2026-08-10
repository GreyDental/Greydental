import Image from "next/image";

export default function CoursesHero() {
  return (
    <section
      className="w-[100vw] relative left-1/2 -translate-x-1/2 overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, #9BF7CC1A 0%, #C8DDFF1A 100%)",
      }}
    >
      {/* Left image — pinned to screen edge */}
      <div className="pointer-events-none absolute left-0 top-[58%] sm:top-1/2 -translate-y-1/2 -translate-x-[12%] sm:-translate-x-[6%] md:translate-x-0 z-0">
        <Image
          src="/Course_Details/about-image.png"
          alt=""
          width={261}
          height={370}
          quality={100}
          unoptimized
          className="w-[150px] sm:w-[200px] md:w-[240px] lg:w-[261px] h-auto"
          priority
        />
      </div>

      {/* Right image — pinned to screen edge */}
      <div className="pointer-events-none absolute right-0 top-[42%] sm:top-1/2 -translate-y-1/2 translate-x-[12%] sm:translate-x-[6%] md:translate-x-0 z-0">
        <Image
          src="/Course_Details/about-image-1.png"
          alt=""
          width={261}
          height={353}
          quality={100}
          unoptimized
          className="w-[150px] sm:w-[200px] md:w-[240px] lg:w-[261px] h-auto"
          priority
        />
      </div>

      {/* Center copy */}
      <div className="relative z-10 flex items-center justify-center min-h-[380px] sm:min-h-[440px] md:min-h-[520px] lg:min-h-[560px] px-5 sm:px-8 py-16 sm:py-20 md:py-28">
        <div className="flex flex-col items-center text-center max-w-[20rem] sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto">
          <div className="inline-flex bg-white border border-[#E9E9E9] px-4 sm:px-5 py-1.5 sm:py-2 rounded-full mb-5 sm:mb-6 shadow-sm">
            <span className="text-[11px] sm:text-[12px] font-semi_bold_24pt tracking-[0.04em] text-[#3A738D]">
              Course Categories
            </span>
          </div>

          <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-[52px] font-semi_bold_24pt text-[#3A738D] leading-[1.15] tracking-tight mb-4 sm:mb-5">
            Browse all courses,
            <br className="hidden sm:block" /> workshops &amp; webinars
          </h1>

          <p className="text-[#777779] font-regular_18pt text-[14px] sm:text-base md:text-[17px] leading-relaxed max-w-xl">
            Everything currently open for enrollment across our endodontics,
            implantology, and clinical workflow tracks.
          </p>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function CourseInstructor() {
  return (
    <section className="w-full bg-white py-14 sm:py-16 md:py-20 border-t border-[#E5E7EB]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-8 sm:gap-10 w-full min-w-0">
        <h2 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[44px] font-semi_bold_24pt text-[#00173C] leading-[1.15] tracking-tight">
          Your Instructor
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-14 items-start w-full min-w-0">
          {/* Portrait */}
          <div className="relative flex w-full max-w-[320px] sm:max-w-[360px] lg:w-[340px] lg:max-w-none lg:flex-shrink-0 mx-auto lg:mx-0 min-w-0">
            <div className="relative w-full aspect-[4/5] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-[0_12px_32px_rgba(0,23,60,0.1)] border-l-[4px] border-l-[#79F0B5]">
              <Image
                src="/Specific_Course_Page/instructor.jpg"
                alt="Dr. Sarah Thompson"
                fill
                sizes="(max-width: 1024px) 360px, 340px"
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col flex-1 min-w-0 pt-1 w-full">
            <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-semi_bold_24pt text-[#00173C] leading-tight tracking-tight mb-2">
              Dr. Sarah Thompson
            </h3>

            <p className="text-[#6B7585] text-[12px] sm:text-[13px] font-semi_bold_24pt tracking-[0.12em] uppercase mb-5 sm:mb-6">
              MDS, PH.D. ENDODONTICS
            </p>

            <div className="flex flex-col gap-4 sm:gap-5 text-[#6B7585] font-regular_18pt text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-2xl mb-6 sm:mb-8">
              <p>
                With over 15 years of clinical practice and 20+ published
                research papers, Dr. Thompson specializes in micro-endodontic
                surgery and complex retreatment protocols.
              </p>
              <p>
                Her courses are built from real cases in her own practice, not
                textbook scenarios. She has mentored 200+ dentists through Grey
                Dental certification pathways.
              </p>
              <p>
                She also serves on the editorial board of a peer-reviewed
                endodontics journal.
              </p>
            </div>

            <Link
              href="/instructors"
              className="inline-flex items-center gap-1.5 self-start text-[#00173C] font-inter-medium_18pt text-[15px] hover:opacity-80 transition-opacity"
            >
              View Profile
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

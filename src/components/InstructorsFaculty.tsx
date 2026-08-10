import Image from "next/image";
import Link from "next/link";

const faculty = [
  {
    name: "Dr. Sarah Thompson",
    role: "Director of Endodontics",
    bio: "Specializes in advanced endodontic treatments, microscopic root canal therapy, and endodontic retreatment.",
    image: "/Instructors/faculty-sarah.png",
  },
  {
    name: "Dr. Elena Schneider",
    role: "Endodontics & Clinical Education",
    bio: "Delivers practical endodontic training, helping dentists improve diagnosis, treatment planning, and patient care.",
    image: "/Instructors/faculty-elena.png",
  },
  {
    name: "Dr. Julian Tan",
    role: "Implant Dentistry & Oral Surgery",
    bio: "Expert in implant dentistry, surgical planning, and restorative implant procedures.",
    image: "/Instructors/faculty-julian.jpg",
  },
  {
    name: "Dr. Rebecca Collins",
    role: "Endodontics",
    bio: "Specializes in contemporary endodontic treatment, rotary instrumentation, and complex root canal procedures.",
    image: "/Instructors/faculty-rebecca.jpg",
  },
  {
    name: "Dr. Olivia Bennett",
    role: "Implant Dentistry",
    bio: "Extensive experience in implant planning, surgical placement, and implant restorations.",
    image: "/Instructors/faculty-olivia.png",
  },
  {
    name: "Dr. Daniel Kim",
    role: "Endodontics",
    bio: "Focuses on advanced endodontic diagnosis, retreatment, and microscope-assisted procedures.",
    image: "/Instructors/faculty-daniel.png",
    imagePosition: "50% 18%",
  },
];

const cardShadow =
  "0px 2px 5px 0px rgba(135, 135, 135, 0.05), 0px 9px 9px 0px rgba(135, 135, 135, 0.04), 0px 20px 12px 0px rgba(135, 135, 135, 0.03), 0px 36px 14px 0px rgba(135, 135, 135, 0.01), 0px 56px 16px 0px rgba(135, 135, 135, 0)";

export default function InstructorsFaculty() {
  return (
    <section
      id="instructors"
      className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-white py-14 sm:py-16 md:py-20 lg:py-24 overflow-x-hidden flex flex-col"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full min-w-0 flex flex-col items-center">
        <div className="flex flex-col items-center text-center gap-3 sm:gap-4 mb-10 sm:mb-12 md:mb-14 max-w-2xl min-w-0">
          <h2 className="text-[26px] sm:text-3xl md:text-4xl lg:text-[44px] font-semi_bold_24pt text-[#3A738D] leading-[1.15] tracking-tight">
            Meet Our Expert Faculty
          </h2>
          <p className="text-[#777779] font-regular_18pt text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
            Learn from highly qualified dental professionals who bring years of
            clinical experience, academic excellence, and a passion for teaching.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-5 sm:gap-6 w-full min-w-0">
          {faculty.map((member) => (
            <article
              key={member.name}
              className="flex flex-col min-w-0 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-white border border-[#E4E4E4] rounded-[14px] sm:rounded-[16px] overflow-hidden"
              style={{ boxShadow: cardShadow }}
            >
              <div className="relative w-full aspect-[5/4] bg-[#F3F4F6]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  style={{
                    objectPosition: member.imagePosition ?? "50% 0%",
                  }}
                />
              </div>

              <div className="flex flex-col flex-1 min-w-0 px-5 sm:px-6 pt-5 sm:pt-6 pb-5 sm:pb-6">
                <h3 className="text-[#3A738D] font-semi_bold_24pt text-[18px] sm:text-[20px] leading-snug tracking-tight mb-1">
                  {member.name}
                </h3>
                <p className="text-[#2F5F75] font-inter-medium_18pt text-[13px] sm:text-[14px] leading-snug mb-3">
                  {member.role}
                </p>
                <p className="text-[#777779] font-regular_18pt text-[13px] sm:text-[14px] leading-relaxed flex-1 mb-5">
                  {member.bio}
                </p>

                <div className="mt-auto pt-4 border-t border-[#E4E4E4]">
                  <Link
                    href="/instructors"
                    className="inline-flex items-center gap-1.5 text-[#3A738D] font-inter-medium_18pt text-[13px] sm:text-[14px] hover:text-[#2F5F75] transition-colors"
                  >
                    View Profile
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

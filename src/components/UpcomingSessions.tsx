import Image from "next/image";
import Link from "next/link";

type Session = {
  badge: string;
  title: string;
  description: string;
  meta: { icon: string; label: string }[];
  cta: string;
  image: string;
  imageAlt: string;
  imageLeft?: boolean;
};

const sessions: Session[] = [
  {
    badge: "ONLINE",
    title: "Live Case Discussion",
    description:
      "Walk through real clinical cases with peer discussion in a live webinar format — recording included after the session.",
    meta: [
      { icon: "/workshops/icon-video.svg", label: "Online Zoom/Meet" },
      { icon: "/workshops/icon-clock.svg", label: "6:00 PM" },
      { icon: "/workshops/icon-calendar.svg", label: "Aug 12" },
    ],
    cta: "Register Now",
    image: "/workshops/session-1.jpg",
    imageAlt: "Dentist reviewing cases on a laptop",
  },
  {
    badge: "IN-PERSON",
    title: "Clinical Skills Day",
    description:
      "Hands-on practical skills assessment with small-group instruction in the skills lab — limited seats for focused attention.",
    meta: [
      { icon: "/workshops/icon-location.svg", label: "Skills Lab" },
      { icon: "/workshops/icon-clock.svg", label: "9:00 AM" },
      { icon: "/workshops/icon-calendar.svg", label: "Aug 18" },
    ],
    cta: "Secure Your Seat",
    image: "/workshops/session-2.jpg",
    imageAlt: "Clinical team during a skills workshop",
    imageLeft: true,
  },
  {
    badge: "ONLINE",
    title: "Treatment Planning Q&A",
    description:
      "Instructor-led open discussion on complex treatment planning cases — bring your questions and leave with a clear approach.",
    meta: [
      { icon: "/workshops/icon-video.svg", label: "Online Q&A" },
      { icon: "/workshops/icon-clock.svg", label: "5:00 PM" },
      { icon: "/workshops/icon-calendar.svg", label: "Aug 25" },
    ],
    cta: "Register Now",
    image: "/workshops/session-3.jpg",
    imageAlt: "Online treatment planning video session",
  },
];

export default function UpcomingSessions() {
  return (
    <section
      id="upcoming"
      className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-[#F4F7F8] py-12 sm:py-16 md:py-20 lg:py-24 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14 w-full min-w-0">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 sm:gap-4 md:gap-6 w-full min-w-0">
          <h2 className="text-[26px] sm:text-3xl md:text-4xl lg:text-[44px] font-semi_bold_24pt text-[#3A738D] leading-[1.15] tracking-tight min-w-0">
            Upcoming Sessions
          </h2>
          <p className="text-[#777779] font-regular_18pt text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-md md:text-right min-w-0">
            Every session is capped at a small group size for hands-on
            attention.
          </p>
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-5 sm:gap-6 md:gap-8 lg:gap-10 w-full min-w-0">
          {sessions.map((session) => (
            <article
              key={session.title}
              className={`flex flex-col ${
                session.imageLeft ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-4 sm:gap-5 md:gap-6 w-full min-w-0 items-stretch`}
            >
              {/* Text card */}
              <div className="flex flex-col flex-1 min-w-0 w-full bg-white border border-[#BCBCBC] rounded-[16px] sm:rounded-[20px] p-4 sm:p-6 md:p-8">
                <span className="inline-flex self-start items-center bg-[#2F5F75] text-white text-[10px] sm:text-[11px] font-semi_bold_24pt tracking-[0.1em] uppercase px-3 py-1 rounded-full mb-3 sm:mb-4 md:mb-5">
                  {session.badge}
                </span>

                <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-semi_bold_24pt text-[#3A738D] leading-snug tracking-tight mb-2 sm:mb-3">
                  {session.title}
                </h3>

                <p className="text-[#777779] font-regular_18pt text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed mb-4 sm:mb-5 md:mb-6 max-w-xl">
                  {session.description}
                </p>

                {/* Meta pills — stack on phone, spread across on sm+ */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-2.5 md:gap-3 mb-5 sm:mb-6 md:mb-8 w-full min-w-0">
                  {session.meta.map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-row items-center justify-center gap-1.5 sm:gap-2 bg-[#F4F7F8] border border-[#DADADA] rounded-full px-3 py-2 sm:px-3.5 sm:py-2 w-full sm:flex-1 min-w-0"
                    >
                      <Image
                        src={item.icon}
                        alt=""
                        width={16}
                        height={16}
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0"
                      />
                      <span className="text-[#3A738D] font-regular_18pt text-[12px] sm:text-[12px] md:text-[13px] whitespace-nowrap truncate">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/workshops#upcoming"
                  className="mt-auto inline-flex items-center justify-center w-full bg-white border border-[#3A738D] text-[#3A738D] hover:bg-[#5ECAA0] hover:border-[#5ECAA0] hover:text-black px-5 py-3 sm:py-3.5 rounded-[10px] font-inter-medium_18pt text-[14px] sm:text-[15px] transition-colors"
                >
                  {session.cta}
                </Link>
              </div>

              {/* Image */}
              <div className="relative flex w-full lg:w-[42%] xl:w-[40%] lg:flex-shrink-0 min-w-0 aspect-[16/10] lg:aspect-auto lg:min-h-full min-h-[200px] rounded-[16px] sm:rounded-[20px] overflow-hidden">
                <Image
                  src={session.image}
                  alt={session.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

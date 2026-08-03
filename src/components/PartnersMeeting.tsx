import Image from "next/image";

export default function PartnersMeeting() {
  return (
    <section
      id="partners-meeting"
      className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-white overflow-hidden flex flex-col z-0"
    >
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[2.4/1] min-h-[220px] sm:min-h-[280px] md:min-h-[360px] lg:min-h-[420px]">
        <Image
          src="/Partners/partners-meeting.jpg"
          alt="Grey Dental partners collaborating in a professional meeting"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={false}
        />
      </div>
    </section>
  );
}

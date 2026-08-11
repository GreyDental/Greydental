const values = [
  {
    title: "Ilm — Commitment to Knowledge",
    body: "We foster a world of continuous learning. From clinical reasoning to the latest research, we encourage our students to understand the ‘why’ behind every procedure. Stronger knowledge builds safer, smarter clinicians.",
  },
  {
    title: "Ihsan — Excellence in Skill & Patient Care",
    body: "Ihsan means striving for excellence in the smallest details. We train you to deliver meticulous clinical work with genuine care—precise procedures, clear communication, and treatment plans that put the patient first. Good dentistry isn’t enough. We aim for the best. Our founder derives inspiration from Ihsan as Ihsan brings deeper meaning to the practice of excellence in the Islamic tradition. It constitutes divine awareness. It means to do anything as if we see Allah, and if one cannot see Him then know that He sees us.",
  },
  {
    title: "Dignity & Respect for Life",
    body: "Every patient deserves compassion and care alongside clinical skill. We emphasize informed consent, pain-management, and ethical decision-making. Technical mastery is incomplete without respect for the person in the chair.",
  },
  {
    title: "Evidence-Based Clinical Practice",
    body: "Our protocols are grounded in peer-reviewed research and validated by years of clinical outcomes. We teach techniques that are proven to work today and will remain reliable in the years ahead.",
  },
  {
    title: "Accessibility",
    body: "By keeping operations lean and digital-first, we make high-quality, hands-on training accessible to every dentist, from fresh graduates to experienced general and specialist practitioners.",
  },
  {
    title: "Agility and Responsiveness",
    body: "We update course content quickly, respond to student doubts without delay, and adjust teaching based on real clinical challenges you face. You learn what’s relevant today.",
  },
  {
    title: "Integrity in Education",
    body: "We set realistic expectations from Day 1. You’ll get a clear roadmap of what you can start independently post-course vs what needs more mentorship. Our reputation is built on dentists who actually grow, not false promises.",
  },
  {
    title: "Community and Peer Learning",
    body: "We emphasize community building that fosters mentorship and impact. You learn from experienced instructors, as well as other dentists in the batch facing the same doubts as you. Dentistry gets easier when you’re not figuring it out alone.",
  },
  {
    title: "Dignity of the Dental Profession",
    body: "We teach more than technique. We uphold the respect, ethics, and responsibility that comes with being a dentist. From honest case selection to transparent fees, we train clinicians who protect the dignity of their profession and the trust of their patients.",
  },
  {
    title: "Critical Problem-Solving",
    body: "We empower dentists to think beyond cookbooks and protocols. We train problem solvers who can analyze complex clinical challenges, adapt to unexpected intraoperative realities, and find safe, effective solutions for every patient.",
  },
  {
    title: "Mentorship & Impact",
    body: "We believe learning doesn’t end when a course finishes. We are committed to lifelong guidance—connecting emerging dentists with seasoned mentors, opening doors for professional growth, and creating a ripple effect of elevated care across the broader dental community.",
  },
];

export default function OurValues() {
  return (
    <section
      id="values"
      className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-greyBg py-16 sm:py-20 md:py-28 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full min-w-0 flex flex-col">
        <div className="bg-white border border-gray-200/80 px-5 py-2 rounded-full mb-6 inline-flex self-start shadow-sm">
          <span className="text-[12px] font-semi_bold_24pt tracking-[0.14em] text-darkBlueText uppercase">
            Our Values
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-semi_bold_24pt text-darkBlueText leading-[1.15] tracking-tight mb-10 sm:mb-12 max-w-3xl">
          The principles that shape how we teach and practice
        </h2>

        <div className="flex flex-col md:flex-row md:flex-wrap gap-4 sm:gap-5 w-full min-w-0">
          {values.map((value) => (
            <article
              key={value.title}
              className="flex flex-col min-w-0 w-full md:w-[calc(50%-0.625rem)] bg-white border border-[#D5DEE2] border-l-[4px] border-l-[#5ECAA0] rounded-[16px] p-5 sm:p-6 shadow-[0_4px_16px_rgba(58,115,141,0.04)]"
            >
              <h3 className="text-[#2F5F75] font-semi_bold_24pt text-[16px] sm:text-[17px] leading-snug mb-2.5">
                {value.title}
              </h3>
              <p className="text-[#777779] font-regular_18pt text-[14px] sm:text-[15px] leading-relaxed">
                {value.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

const bridges = [
  {
    number: "01",
    title: "Bridging the Student Gap: From Academic Theory to Clinical Mastery",
    gap: 'Top dental colleges prioritize theory over repetitive hands-on clinical execution, resulting in a mean clinical skills score of just 30.56/100 across 27 colleges in Pakistan (National Study, 2023). Graduates enter the workforce without a structured bridge to clinical competence.',
    solutionLabel: "The Grey Solution (Ilm & Accessibility)",
    solution:
      'We combine digital-first learning with high-yield, and rigorous assessments in our Courses and Workshops and practice. By mastering the core clinical reasoning and "why" behind every procedure online first, students maximize their time during hands-on training and assessments—building muscle memory, clinical confidence, and measured competence rather than just collecting certificates.',
  },
  {
    number: "02",
    title: "Bridging the Graduate Gap: Overcoming Treatment Hesitation",
    gap: "In one of our surveys done among 40+ dentists, while 76.1% of practitioners were general dentists, 67.4% rarely performed Root Canal Treatments (RCTs) due to clinical anxiety surrounding canal negotiation (58.7%) and file separation (45.7%). Furthermore, 37% struggled with referral timing, risking patient outcomes.",
    solutionLabel: "The Gap Solution (Agility & Critical Problem-Solving)",
    solution:
      'We don\'t teach "cookbook" recipes; we train problem-solvers. Our hybrid modules directly focus on key areas of skill learning and high-fear procedures like root canal negotiation, or complication management. Through our Skills Assessment Exam Certification, dentists gain realistic diagnostic clarity on when to treat independently and when ethical referral protects the patient.',
  },
  {
    number: "03",
    title: "Bridging the Education Market Gap: Accessible, Localized Excellence",
    gap: "International CPD courses ($149–$1,200+) are financially out of reach for most Pakistani dentists and tailored for Western clinical setups. Locally, there is a total void of structured online dental CPD platforms, leaving clinicians reliant on inconsistent, one-off workshops often without standardized follow-up.",
    solutionLabel: "The Grey Solution (Accessibility & Hybrid Learning)",
    solution:
      "By keeping operations lean and digital-first, we provide high-caliber continuing education designed specifically for the economic and clinical realities of Pakistani practice. We combine structured online modules with local, standardized hands-on training—delivering world-class education at an accessible investment.",
  },
  {
    number: "04",
    title: "Bridging the Instructor Gap: Standardized Outcomes Over Personal Opinions",
    gap: "Traditional workshops reflect instructor opinion and personal preference rather than peer-reviewed evidence or needs of the learner. Learning outcomes are rarely defined, leaving participants without feedback, structured evaluation, or practical transformation.",
    solutionLabel: "The Gap Solution (Evidence-Based Clinical Practice & Integrity)",
    solution:
      "Our curriculum is strictly grounded in validated research and long-term clinical outcomes. Every course features upfront, measurable learning competencies. We set realistic expectations from Day 1, providing a transparent roadmap of what you can perform independently post-course versus what requires further mentorship.",
  },
  {
    number: "05",
    title: "Bridging the Evidence Gap: Translating Research into Chairside Protocols",
    gap: 'Clinical decisions are frequently made on inherited "how it\'s always been done" methods. Practical research is locked behind paywalls or complex academic journals, leading to outdated techniques, higher complication rates, and unnecessary treatment failures.',
    solutionLabel: "The Grey Solution (Ihsan & Comprehensive Resources)",
    solution:
      "We bridge the academic-clinical divide by translating complex research into actionable chairside tools. Our Comprehensive Textbooks and Grey Dental Clinical Handbooks feature pictorial steps, evidence corners, and QR-linked procedure videos—bringing verified, high-level science straight to your operatory tray.",
  },
  {
    number: "06",
    title: "Bridging the Documentation & Soft Skills Gap: Elevating Professional Standards",
    gap: "Dentists receive no formal education in legal case documentation, clinical photography, or sensitive communication (informed consent, managing anxious patients, presenting treatment costs), exposing them to legal risk and lost patient trust.",
    solutionLabel: "The Grey Solution (Dignity of the Profession & Practice Efficiency)",
    solution:
      "We believe technical mastery is incomplete without respect for the person in the chair. We provide ready-to-use Patient & Clinic Workflow Templates, standardized documentation protocols, and soft-skills training to help clinicians communicate with empathy, uphold informed consent, and safeguard professional integrity.",
  },
  {
    number: "07",
    title: "Bridging the Psychological Safety Gap: Eliminating Professional Isolation",
    gap: "Dentists work in clinical silos with no safe space to discuss complications, ask questions, or process mistakes without fear of reputational harm or judgment. This isolation stunts professional growth and leads to repeated errors.",
    solutionLabel: "The Grey Solution (Community & Safe Mentorship)",
    solution:
      "Dentistry is easier when you aren't figuring it out alone. Through our Exclusive Networking & Discussion Forums, we foster judgment-free cohorts dedicated to honest case analysis, peer reflection, and transparent discussion of clinical setbacks.",
  },
  {
    number: "08",
    title: "Bridging the Job & Career Gap: Sustainable Skill Pathways",
    gap: "Thousands of graduates enter a saturated market without guidance on building specialized clinical competence, personal branding, or sustainable career pathways.",
    solutionLabel: "The Grey Solution (Lifelong Mentorship & Impact)",
    solution:
      "We aim to create opportunities for dentists to grow in every way possible. Our team of dentists working in various departments are a testament to that commitment. As we grow, so does the community, and more jobs will be created. Also those who enroll with us, their learning or growth doesn't end when a workshop finishes. We connect emerging dentists with seasoned mentors, offering continuous post-course guidance that empowers clinicians to elevate their practice, command respect in their market, and create a positive ripple effect across the entire dental community.",
  },
];

export default function OurApproach() {
  return (
    <section
      id="our-approach"
      className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-white py-16 sm:py-20 md:py-28 overflow-x-hidden flex flex-col"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full min-w-0 flex flex-col">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12 md:mb-16">
          <div className="bg-white border border-[#D5DEE2] px-5 py-2 rounded-full mb-5 sm:mb-6 inline-flex shadow-sm">
            <span className="text-[11px] sm:text-[12px] font-semi_bold_24pt tracking-[0.14em] text-[#3A738D] uppercase">
              OUR APPROACH
            </span>
          </div>

          <h2 className="text-[26px] sm:text-3xl md:text-4xl lg:text-[44px] font-semi_bold_24pt text-[#3A738D] leading-[1.15] tracking-tight mb-5 sm:mb-6 max-w-4xl">
            Identifying the Greys and Providing Solutions
          </h2>
        </div>

        {/* Intro + image */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 sm:gap-10 lg:gap-14 mb-12 sm:mb-16 md:mb-20 w-full min-w-0">
          <div className="flex flex-col flex-1 min-w-0 gap-5 sm:gap-6">
            <p className="text-[#777779] font-regular_18pt text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
              Through years of clinical practice, we noticed consistent gaps that
              prevent dentists from growing after attending advanced courses. This
              is because most programs focus heavily on theory and textbook
              protocols, but offer little guidance on case selection, patient
              communication, or managing complications when a real case walks into
              the clinic. The gaps create a cycle where dentists attend courses but
              still hesitate to start complex cases in their own practice.
            </p>

            <p className="text-[#777779] font-regular_18pt text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
              <span className="text-[#3A738D] font-semi_bold_24pt">
                What are the Greys?
              </span>{" "}
              We define greys as problem areas that are not clear, and therefore,
              they are problems we continue to face in dentistry. They include the
              gaps in learning and clinical practice as well as the gaps in
              opportunities and growth in the field. We are based in Pakistan and
              therefore address unique problems faced by the diaspora of dentists
              in Pakistan and around first but our approach remains global in
              solving them as we believe we are all one big community.
            </p>

            <p className="text-[#777779] font-regular_18pt text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
              All the greys or problems areas are challenges we have taken on and
              we envision doing something about them and providing solutions.
            </p>
          </div>

          <div className="relative w-full lg:w-[42%] lg:flex-shrink-0 min-w-0 min-h-[280px] sm:min-h-[340px] lg:min-h-[420px] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-[0_12px_32px_rgba(58,115,141,0.1)] border border-[#D5DEE2] bg-[#F4F7F8]">
            <Image
              src="/about-us/our-approach-icons/our-approach-image.jpg"
              alt="Identifying the Greys and providing solutions"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Eight bridges */}
        <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 w-full min-w-0 mb-12 sm:mb-16 md:mb-20">
          {bridges.map((bridge) => (
            <article
              key={bridge.number}
              className="flex flex-col w-full min-w-0 bg-[#F4F7F8] border border-[#D5DEE2] border-l-[4px] border-l-[#5ECAA0] rounded-[16px] sm:rounded-[20px] p-5 sm:p-7 md:p-8 shadow-[0_4px_20px_rgba(58,115,141,0.05)]"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-5 mb-5 sm:mb-6">
                <span className="text-[#5ECAA0] font-semi_bold_24pt text-[28px] sm:text-[32px] leading-none tracking-tight flex-shrink-0">
                  {bridge.number}
                </span>
                <h3 className="text-[#3A738D] font-semi_bold_24pt text-[18px] sm:text-[20px] md:text-[22px] leading-snug tracking-tight min-w-0">
                  {bridge.title}
                </h3>
              </div>

              <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 lg:gap-8 w-full min-w-0">
                <div className="flex flex-col flex-1 min-w-0">
                  <h4 className="text-[#3A738D] font-semi_bold_24pt text-[13px] sm:text-[14px] tracking-[0.08em] uppercase mb-2 sm:mb-2.5">
                    The Gap
                  </h4>
                  <p className="text-[#777779] font-regular_18pt text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed">
                    {bridge.gap}
                  </p>
                </div>

                <div className="hidden lg:block w-px self-stretch bg-[#D5DEE2] flex-shrink-0" aria-hidden="true" />

                <div className="flex flex-col flex-1 min-w-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#D5DEE2]">
                  <h4 className="text-[#5ECAA0] font-semi_bold_24pt text-[13px] sm:text-[14px] tracking-[0.04em] mb-2 sm:mb-2.5">
                    {bridge.solutionLabel}
                  </h4>
                  <p className="text-[#777779] font-regular_18pt text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed">
                    {bridge.solution}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Ihsan philosophy */}
        <div className="w-full min-w-0 bg-[#3A738D] rounded-[20px] sm:rounded-[24px] md:rounded-[28px] px-6 py-8 sm:px-10 sm:py-12 md:px-14 md:py-14 shadow-[0_12px_40px_rgba(58,115,141,0.18)]">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/25 mb-5 sm:mb-6">
            <span className="text-[11px] sm:text-[12px] font-semi_bold_24pt tracking-[0.14em] text-[#5ECAA0] uppercase">
              Core Philosophy
            </span>
          </div>

          <h3 className="text-white font-semi_bold_24pt text-[24px] sm:text-[28px] md:text-[32px] leading-tight tracking-tight mb-4 sm:mb-5">
            The Core Philosophy of Our Approach: Ihsan
          </h3>

          <p className="text-white/85 font-regular_18pt text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-4xl">
            At the heart of our teaching is Ihsan—striving for excellence in the
            smallest details, driven by divine awareness and ethical
            responsibility. We train clinicians who do not simply seek quick fixes
            or high volume, but who dedicate themselves to meticulous clinical
            work, genuine patient care, and honoring the dignity of the dental
            profession.
          </p>
        </div>
      </div>
    </section>
  );
}

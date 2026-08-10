"use client";

import { useState } from "react";
import Image from "next/image";

type Module = {
  id: string;
  label: string;
  title: string;
  chapters?: string[];
  outcomesNote?: string;
  outcomes: string[];
};

const modules: Module[] = [
  {
    id: "00",
    label: "MODULE 0",
    title: "Excellence in Patient Care",
    chapters: [
      "Achieving Excellence",
      "Case Documentation in Endodontics",
    ],
    outcomesNote: "To be defined.",
    outcomes: [],
  },
  {
    id: "01",
    label: "MODULE 1",
    title: "Pulp Biology & Pathology",
    outcomes: [
      "Describe the macro‐ and micro‐anatomy of the dental pulp (zones, vasculature, innervation) in relation to how it responds to injury, as well other tissues surrounding the pulp.",
      "Explain the core functions of the pulp (formative, nutritive, sensory, defensive) and how these change as disease progresses. Characterise the Polymicrobial Nature and Biofilm Ecosystems.",
      "Summarize the progression from caries → pulpal inflammation → necrosis → periapical pathology.",
      'Analyse Pulpal Hemodynamics and the "Low-Compliance" Environment.',
      "Evaluate the Dentin-Pulp Complex and Hydrodynamic Theory.",
      "Define and correctly diagnose standardized pulpal and periapical pathologies with their histologic features and clinical signs and symptoms: (a) Normal pulp, reversible pulpitis, symptomatic/asymptomatic irreversible pulpitis, pulp necrosis, previously treated, previously initiated therapy; (b) Normal apical tissues, symptomatic/asymptomatic apical periodontitis, acute/chronic apical abscess, condensing osteitis.",
      "Describe the steps involved in healing of Periradicular Lesions Following Root Canal Treatment.",
      "Identify and broadly describe non-endodontic pathological lesions that can mimic endodontic periradicular disease.",
      "Assess Age-Related Anatomic and Physiologic Alterations.",
    ],
  },
  {
    id: "02",
    label: "MODULE 2",
    title: "Endodontic Diagnosis & Radiographic",
    outcomes: [
      "Elicit and interpret a structured pain history to guide provisional pulpal/periapical diagnosis before testing (structured pain history using SOCRATES or OPQRST framework, clinical exam, pulp tests, periapical tests, radiographs, special tests).",
      "Describe indications and limitations of common imaging in endodontics (IOPA as baseline; when CBCT adds value in general practice and when it does not).",
      "Recognize situations where pulp tests are unreliable and modify the diagnostic plan accordingly: false negatives after trauma; immature teeth; calcified canals; recently anesthetized teeth; false positives from conduction; EPT is NOT vitality.",
      "Perform and document pulp sensibility tests (cold, heat, EPT) with appropriate controls and interpretation.",
      "Perform and document periapical tests (percussion, palpation, mobility, basic periodontal probing, bite tests) to localize the symptomatic tooth.",
      "Systematically interpret periapical radiographs for endodontic purposes (PDL changes, lamina dura, radiolucencies/radiopacities, resorption, previous treatment quality, obvious anatomic variations).",
      "Integrate history, test findings, and radiographs to arrive at a pulpal and periapical diagnosis for common clinical scenarios.",
      "Differentiate odontogenic from likely non‐odontogenic or referred pain and decide when additional medical/dental evaluation is indicated.",
      "Differentiate endodontic, periodontal, and combined lesions using probing, tracing, and radiographic findings (interpretation for narrow isolated deep pockets, sinus tract tracing with GP, J-shaped lesions).",
    ],
  },
  {
    id: "03",
    label: "MODULE 3",
    title: "Case Selection & Treatment Planning",
    outcomes: [
      "List key patient‐related factors that influence case selection and prognosis (systemic health, medications, compliance, oral hygiene, strategic value of tooth).",
      "List key tooth‐related factors that influence difficulty and prognosis (root/canal anatomy, curvature, calcification, previous treatment, resorption, remaining tooth structure, periodontal status).",
      "Self-assess operator competence and recognize personal limits requiring referral.",
      'Classify case difficulty (e.g., simplified AAE‐style criteria) into "suitable for beginner GP", "intermediate/with caution", and "refer to endodontist".',
      "Estimate prognosis and justify whether treatment offers meaningful benefit compared with extraction or alternatives (vital pulp therapy, non‐surgical RCT, retreatment, surgical options, extraction, or referral) based on diagnosis, case difficulty, and patient factors.",
      "Determine restorability and integrate post-endodontic restorative requirements into treatment planning.",
      "Formulate and communicate a stepwise, evidence‐based treatment plan, including emergency management, definitive treatment sequence, interim restoration, and post‐endodontic restoration plan.",
      "Learn shared-decision making and informed consent (structured consent framework; explain options, risks, benefits to the patients and formulate a treatment plan).",
      "Formulate patient centered treatment plan (consider socioeconomic status and compliance of patient).",
      "Analyse risk modification strategies: appointment length; analgesic choice; antibiotics; deferral.",
    ],
  },
  {
    id: "04",
    label: "MODULE 4",
    title: "Pain Management & Endodontic Emergencies",
    outcomes: [
      "Explain basic neurophysiology of dental pain (A‐delta vs C‐fiber responses, key inflammatory mediators, peripheral vs central sensitization) at a functional, GP‐relevant level.",
      "Implement stepwise chairside emergency management plans under time-limited conditions. Make and follow stepwise algorithms like: severe pulpitis → anesthesia → access → pulpotomy/pulpectomy → temporary → analgesics; localized abscess → drainage → debridement → analgesics → antibiotics only if indicated; swelling with systemic signs → immediate referral + antibiotics.",
      "Select appropriate local anesthetic agents and techniques based on patient factors and planned procedures.",
      "Demonstrate correct basic techniques for: infiltration anesthesia for maxillary teeth; inferior alveolar nerve block (IANB); long buccal and mental nerve blocks.",
      'Describe and apply supplemental techniques (PDL injection, intraosseous, intrapulpal) and strategies for managing "hot tooth" anesthesia failures.',
      "Recognize and manage common anesthesia- and drug-related complications safely (syncope, LA toxicity, hematoma, trismus, needle breakage, failed block, allergy, post-op flare-ups, analgesic overdose risks).",
      "Prescribe appropriate analgesics and anti‐inflammatory medications (NSAIDs, acetaminophen, combination therapy) and recognize limited indications for opioids and antibiotics.",
      "Apply principles of rational antibiotic use and recognize situations where antibiotics are not indicated.",
      "Diagnose and outline emergency management of common endodontic emergencies (symptomatic irreversible pulpitis, acute apical periodontitis, acute apical abscess, Phoenix abscess, post‐treatment flare‐ups).",
      "Recognize signs of spreading infection and systemic involvement requiring urgent referral.",
    ],
  },
  {
    id: "05",
    label: "MODULE 5",
    title: "Isolation & Access Cavity Preparation",
    outcomes: [
      "Explain and justify the rationale and advantages of rubber dam isolation in endodontics (explicit safety framing + case examples of complications).",
      "Identify and select appropriate rubber dam components (sheet, clamps, frame, punch, forceps, floss ligatures) for anterior teeth, premolars, and molars.",
      "Demonstrate rubber dam placement for single‐tooth and short‐span isolation in typical endodontic cases.",
      "Adapt isolation techniques for compromised or difficult clinical situations. Understand problem-solving isolation techniques: split dam; floss ligation; clamp modification; temporary build-ups (GIC/composite); wedges; Teflon tape; isolation with matrix bands.",
      "Describe principles of endodontic access cavity design (straight‐line access, conservation of pericervical dentin, complete deroofing, removal of caries/defective restorations).",
      "Systematic canal-finding protocol (law of symmetry, law of orifice location, use of magnification/illumination, troughing with ultrasonics, staining, DG16 exploration, dentin map reading).",
      "Identify common anatomical landmarks guiding access in anterior teeth, premolars, and molars.",
      "Recognize and avoid common access errors (gouging, perforation, missed canals, inadequate deroofing).",
      "Train in error management if they happen (recognizing perforation signs e.g. bleeding, drop-in, apex locator change; immediate sealing with bioceramic/MTA; prognosis considerations; referral decisions).",
      "Learn the importance of ergonomics & magnification (loupes/microscope basics, lighting posture, indirect vision). Decide what type of magnifying loupes to choose.",
      "Learn to locate, negotiate, access and trace canals. Will be able to find missed canals in a previously endo-treated tooth. Endodontic treatment in C-shaped canals of teeth.",
    ],
  },
  {
    id: "06",
    label: "MODULE 6",
    title: "Working Length & Biomechanical Preparation",
    outcomes: [
      "Define working length and explain its biological significance.",
      "Describe key anatomic features of the apical third (apical constriction, CDJ, apical foramen) relevant to WL determination.",
      "Distinguish between an apical stop, apical seat and open apex; explain how to evaluate these configurations and their impact on obturation.",
      "Determine and cross‐check working length using electronic apex locator (EAL) and radiographic methods.",
      "Explain factors that affect apex locator accuracy and how to troubleshoot them.",
      "Explain the biological objectives of biomechanical preparation (debridement, disinfection, tapered preparation, preservation of anatomy).",
      "Describe the properties and proper clinical use of lubricants (e.g., glycerin) to facilitate the negotiation of constricted canals.",
      "Describe the technique of pulp extirpation and demonstrate basic hand instrumentation techniques (glide path, step‐back or balanced force) in simple canals.",
      "Explain the techniques used to effectively shape irregularly shaped root canals (e.g., round, oval, hourglass, bowling-pin, kidney-bean, and ribbon-shaped canals).",
      "Define the Master Apical File (MAF) and outline the clinical steps used to determine it, including the technique of apical clearing (final apical enlargement and dry reaming) to enhance apical debridement and establish a well-defined apical stop.",
      "Discuss the challenges in canal preparation when anatomical variations hinder complete debridement.",
      "Explain the properties and clinical role of intracanal (interappointment) medicaments.",
      "Outline the general principles for using ultrasonic devices in canal cleaning and shaping.",
      "Recognize and prevent common procedural errors (ledges, transportation, zipping, instrument separation, perforation) in beginner‐level cases.",
      "Identify the different types and designs of NiTi rotary files available for endodontic procedures.",
      "Explain the indications and contraindications for using NiTi rotary files in root canal treatment.",
      "Demonstrate the correct clinical technique for using NiTi rotary files, including access preparation, glide path creation, and file sequence.",
      "Recognize common procedural errors and complications associated with NiTi rotary instrumentation, such as file separation, canal transportation, and ledge formation.",
      "Evaluate case selection criteria for safe and effective use of NiTi rotary files in general dental practice.",
    ],
  },
  {
    id: "07",
    label: "MODULE 7",
    title: "Irrigation Protocols",
    outcomes: [
      "Explain the biological rationale for irrigation (tissue dissolution, antimicrobial effect, smear layer management, lubrication).",
      "Compare major irrigants (NaOCl, EDTA, CHX, saline) and select appropriate solutions and concentrations for common scenarios.",
      "Explain key interactions between irrigants (e.g., NaOCl + CHX precipitate) and how to avoid them.",
      "Describe the needle designs and irrigation techniques that maximize irrigant effectiveness while ensuring safe delivery using side-vented needles with controlled depth and pressure.",
      "Apply a simple, evidence‐informed irrigation protocol integrated with instrumentation for foundational‐level cases.",
      "Recognize risk factors and signs of NaOCl accidents and outline immediate management steps.",
    ],
  },
  {
    id: "08",
    label: "MODULE 8",
    title: "Obturation Techniques",
    outcomes: [
      "Identify the clinical criteria indicating when to obturate and explain the biological objectives of obturation, including achieving a 3D seal, preventing microleakage, and inactivating residual microorganisms.",
      "Identify ideal properties of core materials and sealers used at foundation level.",
      "Demonstrate how to manage master cone discrepancies: if the cone is loose at working distance (e.g., trimming the tip); if the cone does not reach working distance (e.g., identifying blockages or reinstrumentation).",
      'Differentiate between "standardized" and "conventional" gutta percha cones and their appropriate clinical applications.',
      "Select an appropriate obturation technique for simple canals (e.g., cold lateral compaction, warm vertical compaction or single cone with bioceramic sealer) based on canal anatomy and preparation.",
      "Demonstrate a primary obturation technique on training blocks/typodonts, including tug-back, sealer placement methods, and why motor-driven devices should be avoided.",
      "Evaluate obturation quality radiographically (length, density, voids, missed canals) and decide when retreatment or correction is needed.",
      "Demonstrate the technique for removing excess sealer and gutta percha from the pulp chamber; explain why this is necessary to prevent tooth staining and ensure a proper bond for the final restoration.",
    ],
  },
  {
    id: "09",
    label: "MODULE 9",
    title: "Post‐Endodontic Restoration",
    outcomes: [
      "Explain how the final restoration influences the long-term survival of endodontically treated teeth, including factors that weaken tooth structure, the importance of remaining tooth tissue, the postoperative risks of leaving a tooth unrestored, and the rationale for immediate versus delayed restoration.",
      "Evaluate remaining tooth structure and fracture risk after RCT using key factors (loss of marginal ridges, access size, caries, previous restorations, occlusion).",
      "List the main temporary filling materials and explain the techniques for their placement and removal.",
      "Explain the methods for temporizing extensively damaged teeth.",
      "Outline the techniques and materials used for long-term temporization of teeth.",
      "Describe the indications for post placement in anterior and posterior teeth.",
      "Determine restorability based on ferrule, crown‐root ratio, periodontal status, and strategic value of the tooth.",
      "Decide between direct composite, cuspal coverage restoration, onlay, full crown, endocrown, or post‐and‐core for typical scenarios.",
      "Explain basic principles of post space preparation while preserving apical seal, and when posts are indicated vs contraindicated.",
      "Correlate restoration quality with long‐term endodontic prognosis and outline simple follow‐up protocols.",
    ],
  },
  {
    id: "10",
    label: "MODULE 10",
    title: "Complications & Their Management",
    outcomes: [
      "Recognize clinical and radiographic signs of common procedural complications (ledges, perforations, transportation, instrument separation, over/under‐instrumentation, over/under‐filling).",
      "Describe techniques and armamentarium for bypassing a ledge using a pre-curved small file (ISO 10 or 15) and the use of Mineral Trioxide Aggregate (MTA) for immediate internal repair of perforations.",
      "Identify biological complications (flare‐ups, persistent infection, sinus tracts, coronal leakage) and relate them to lapses in protocol.",
      "Outline basic management principles and realistic options for common complications at GP level, including when to monitor, when to retreat, and when to refer or extract.",
      "Apply preventive strategies (accurate WL, glide path, appropriate instruments, isolation, timely restoration) across the endo workflow.",
    ],
  },
];

export default function CourseCurriculum() {
  const [openId, setOpenId] = useState<string>("00");

  return (
    <section className="w-full bg-white py-14 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-8 sm:gap-10 w-full min-w-0">
        <div className="flex flex-col gap-3 max-w-3xl min-w-0">
          <h2 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[44px] font-semi_bold_24pt text-[#3A738D] leading-[1.15] tracking-tight">
            Course Curriculum
          </h2>
          <p className="text-[#777779] font-regular_18pt text-[15px] sm:text-base md:text-[17px] leading-relaxed">
            Foundations of Clinical Endodontics — module titles and learning
            outcomes from patient care through complication management.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5 w-full">
          {modules.map((module) => {
            const isOpen = openId === module.id;
            const hasContent =
              (module.chapters && module.chapters.length > 0) ||
              Boolean(module.outcomesNote) ||
              module.outcomes.length > 0;

            return (
              <article
                key={module.id}
                className="flex flex-col w-full bg-[#FFFFFF] border border-[#E5E7EB] rounded-[16px] sm:rounded-[20px] shadow-[0_8px_24px_rgba(58,115,141,0.06)] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? "" : module.id)}
                  className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 w-full text-left p-5 sm:p-6 md:p-7"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col flex-1 min-w-0 gap-2">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[#2F5F75] text-[12px] font-semi_bold_24pt tracking-[0.12em] uppercase">
                        {module.label}
                      </span>
                      <Image
                        src="/Specific_Course_Page/curriculum-chevron.svg"
                        alt=""
                        width={18}
                        height={10}
                        className={`w-[14px] h-auto flex-shrink-0 transition-transform duration-200 ${
                          isOpen ? "" : "rotate-180"
                        }`}
                      />
                    </div>

                    <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-semi_bold_24pt text-[#3A738D] leading-snug tracking-tight">
                      {module.title}
                    </h3>

                    {!isOpen && module.outcomes.length > 0 && (
                      <p className="text-[#777779] font-regular_18pt text-[13px] sm:text-[14px] leading-relaxed">
                        {module.outcomes.length} learning outcomes
                      </p>
                    )}
                    {!isOpen && module.outcomesNote && (
                      <p className="text-[#777779] font-regular_18pt text-[13px] sm:text-[14px] leading-relaxed">
                        Learning outcomes to be defined
                      </p>
                    )}
                  </div>
                </button>

                {isOpen && hasContent && (
                  <div className="flex flex-col border-t border-[#E5E7EB] px-5 sm:px-6 md:px-7 pb-5 sm:pb-6 md:pb-7 pt-4 sm:pt-5 gap-5 sm:gap-6">
                    {module.chapters && module.chapters.length > 0 && (
                      <div className="flex flex-col gap-3 min-w-0">
                        <h4 className="text-[#3A738D] font-semi_bold_24pt text-[13px] sm:text-[14px] tracking-[0.08em] uppercase">
                          Chapters
                        </h4>
                        <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
                          {module.chapters.map((chapter) => (
                            <li
                              key={chapter}
                              className="flex flex-row items-start gap-3 min-w-0"
                            >
                              <span
                                className="mt-2 w-1.5 h-1.5 rounded-full bg-[#5ECAA0] flex-shrink-0"
                                aria-hidden="true"
                              />
                              <span className="text-[#777779] font-regular_18pt text-[13px] sm:text-[15px] leading-relaxed min-w-0">
                                {chapter}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-col gap-3 min-w-0">
                      <h4 className="text-[#3A738D] font-semi_bold_24pt text-[13px] sm:text-[14px] tracking-[0.08em] uppercase">
                        Learning Outcomes
                      </h4>

                      {module.outcomesNote && (
                        <p className="text-[#777779] font-regular_18pt text-[13px] sm:text-[15px] leading-relaxed">
                          {module.outcomesNote}
                        </p>
                      )}

                      {module.outcomes.length > 0 && (
                        <ol className="flex flex-col gap-3 sm:gap-3.5 list-none p-0 m-0 counter-reset">
                          {module.outcomes.map((outcome, index) => (
                            <li
                              key={`${module.id}-${index}`}
                              className="flex flex-row items-start gap-3 sm:gap-4 min-w-0"
                            >
                              <span className="text-[#5ECAA0] font-semi_bold_24pt text-[13px] sm:text-[14px] leading-snug flex-shrink-0 tabular-nums w-6 sm:w-7 pt-0.5">
                                {index + 1}.
                              </span>
                              <span className="text-[#777779] font-regular_18pt text-[13px] sm:text-[15px] leading-relaxed min-w-0 flex-1">
                                {outcome}
                              </span>
                            </li>
                          ))}
                        </ol>
                      )}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

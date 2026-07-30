"use client";

import { useState } from "react";
import Image from "next/image";

type Lesson = {
  title: string;
  duration: string;
};

type Module = {
  id: string;
  label: string;
  title: string;
  description: string;
  lessons: Lesson[];
};

const modules: Module[] = [
  {
    id: "01",
    label: "MODULE 01",
    title: "Foundations of Endodontics",
    description:
      "Build diagnostic confidence with anatomy review, pulp pathology, and evidence-based case selection criteria.",
    lessons: [
      {
        title: "History and Evolution of Endodontic Science",
        duration: "15:30",
      },
      {
        title: "Tooth Morphology and Canal Anatomy Essentials",
        duration: "22:10",
      },
    ],
  },
  {
    id: "02",
    label: "MODULE 02",
    title: "Root Canal Treatment Workflow",
    description:
      "Walk through access, shaping, irrigation, and obturation with practical clinical checkpoints at every stage.",
    lessons: [
      {
        title: "Access Cavity Design and Location Strategies",
        duration: "18:45",
      },
      {
        title: "Irrigation Protocols and Disinfection Standards",
        duration: "20:05",
      },
    ],
  },
  {
    id: "03",
    label: "MODULE 03",
    title: "Clinical Cases & Hands-on Learning",
    description:
      "Apply concepts to real caseloads through case walkthroughs, complication management, and documentation practice.",
    lessons: [
      {
        title: "Complex Case Review: Calcified Canals",
        duration: "25:40",
      },
      {
        title: "Documentation and Case Submission Standards",
        duration: "16:20",
      },
    ],
  },
];

export default function CourseCurriculum() {
  const [openId, setOpenId] = useState<string>("01");

  return (
    <section className="w-full bg-white py-14 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-8 sm:gap-10 w-full min-w-0">
        <div className="flex flex-col gap-3 max-w-3xl min-w-0">
          <h2 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[44px] font-semi_bold_24pt text-[#00173C] leading-[1.15] tracking-tight">
            Course Curriculum
          </h2>
          <p className="text-[#6B7585] font-regular_18pt text-[15px] sm:text-base md:text-[17px] leading-relaxed">
            A structured path from diagnostic mastery to advanced clinical
            execution.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5 w-full">
          {modules.map((module) => {
            const isOpen = openId === module.id;

            return (
              <article
                key={module.id}
                className="flex flex-col w-full bg-[#FFFFFF] border border-[#E5E7EB] rounded-[16px] sm:rounded-[20px] shadow-[0_8px_24px_rgba(0,23,60,0.06)] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? "" : module.id)}
                  className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 w-full text-left p-5 sm:p-6 md:p-7"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col flex-1 min-w-0 gap-2">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[#08386D] text-[12px] font-semi_bold_24pt tracking-[0.12em] uppercase">
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

                    <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-semi_bold_24pt text-[#00173C] leading-snug tracking-tight">
                      {module.title}
                    </h3>

                    <p className="text-[#6B7585] font-regular_18pt text-[14px] sm:text-[15px] leading-relaxed max-w-3xl">
                      {module.description}
                    </p>
                  </div>
                </button>

                {isOpen && module.lessons.length > 0 && (
                  <div className="flex flex-col border-t border-[#E5E7EB] px-5 sm:px-6 md:px-7 pb-5 sm:pb-6 md:pb-7">
                    {module.lessons.map((lesson, index) => (
                      <div
                        key={lesson.title}
                        className={`flex flex-row items-center gap-3 sm:gap-4 py-4 ${
                          index < module.lessons.length - 1
                            ? "border-b border-[#E5E7EB]"
                            : ""
                        }`}
                      >
                        <div className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-[8px] bg-[#D1E7F5] flex-shrink-0">
                          <Image
                            src="/Specific_Course_Page/lesson-play.svg"
                            alt=""
                            width={10}
                            height={12}
                            className="w-2.5 h-3"
                          />
                        </div>

                        <span className="flex-1 min-w-0 text-[#6B7585] font-regular_18pt text-[13px] sm:text-[15px] leading-snug break-words">
                          {lesson.title}
                        </span>

                        <span className="text-[#6B7585] font-regular_18pt text-[13px] sm:text-[14px] flex-shrink-0 tabular-nums">
                          {lesson.duration}
                        </span>
                      </div>
                    ))}
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

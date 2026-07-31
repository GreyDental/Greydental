import Image from "next/image";

type DocItem = {
  title: string;
  meta: string;
};

type ToolkitColumn = {
  heading: string;
  icon: string;
  items: DocItem[];
};

const columns: ToolkitColumn[] = [
  {
    heading: "Patient Education Handouts",
    icon: "/Resources/icon-doc.svg",
    items: [
      { title: "Post-Operative Care Guide", meta: "PDF • 1.2 MB" },
      { title: "Dental Hygiene Basics for Adults", meta: "PDF • 850 KB" },
      { title: "What to Expect After Extraction", meta: "PDF • 2.4 MB" },
    ],
  },
  {
    heading: "Clinical Workflow Checklists",
    icon: "/Resources/icon-checklist.svg",
    items: [
      { title: "Pre-Surgical Sterilization Protocol", meta: "PDF • 440 KB" },
      { title: "Digital Impression Step-by-Step", meta: "PDF • 1.1 MB" },
      { title: "Endodontic Tray Setup Guide", meta: "PDF • 620 KB" },
    ],
  },
];

export default function ClinicalToolkits() {
  return (
    <section className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-[#F9FCFE] py-12 sm:py-16 md:py-20 lg:py-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-8 sm:gap-10 md:gap-12 w-full min-w-0">
        {/* Header */}
        <div className="flex flex-col items-start text-left gap-3 sm:gap-4 w-full min-w-0">
          <h2 className="text-[26px] sm:text-3xl md:text-4xl lg:text-[44px] font-semi_bold_24pt text-[#051937] leading-[1.15] tracking-tight">
            Clinical Toolkits
          </h2>
          <p className="text-[#6B7585] font-regular_18pt text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-2xl">
            Instant-access PDFs to streamline your daily workflow and enhance
            patient communication.
          </p>
        </div>

        {/* Columns */}
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 w-full min-w-0">
          {columns.map((col) => (
            <div
              key={col.heading}
              className="flex flex-col flex-1 min-w-0 w-full bg-[#F9FCFE] border border-[#BCBCBC] rounded-[16px] sm:rounded-[20px] p-5 sm:p-6 md:p-7"
            >
              <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-semi_bold_24pt text-[#051937] leading-snug tracking-tight text-center mb-5 sm:mb-6">
                {col.heading}
              </h3>

              <div className="flex flex-col gap-3 sm:gap-3.5 w-full min-w-0">
                {col.items.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-row items-center gap-3 sm:gap-4 w-full min-w-0 bg-white border border-[#DEDEDE] rounded-[12px] sm:rounded-[14px] px-3.5 py-3 sm:px-4 sm:py-3.5"
                  >
                    <div className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-[8px] bg-[#08386D] flex-shrink-0">
                      <Image
                        src={col.icon}
                        alt=""
                        width={16}
                        height={18}
                        className="w-4 h-auto"
                      />
                    </div>

                    <div className="flex flex-col flex-1 min-w-0">
                      <p className="text-[#051937] font-semi_bold_24pt text-[13px] sm:text-[14px] md:text-[15px] leading-snug truncate">
                        {item.title}
                      </p>
                      <p className="text-[#6B7585] font-regular_18pt text-[12px] sm:text-[13px] mt-0.5">
                        {item.meta}
                      </p>
                    </div>

                    <button
                      type="button"
                      aria-label={`Download ${item.title}`}
                      className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#41F39B66] flex-shrink-0 hover:bg-[#41F39B] transition-colors"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="block w-3.5 h-3.5"
                        aria-hidden="true"
                      >
                        <path
                          d="M7 10L2.833 5.833 4 4.625 6.167 6.792V0h1.666v6.792L9.999 4.625 11.166 5.833 7 10ZM2 13.333c-.458 0-.85-.163-1.177-.49A1.601 1.601 0 0 1 .333 11.667V9.167H2v2.5h10v-2.5h1.667v2.5c0 .458-.163.85-.49 1.177-.327.327-.719.49-1.177.49H2Z"
                          fill="#08386D"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

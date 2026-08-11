import Link from "next/link";

const products = [
  {
    title: "Hybrid Courses",
    body: "Online and in-person comprehensive modules covering diagnosis to complication management.",
    href: "/courses",
    label: "Browse courses",
  },
  {
    title: "Clinical Workshops",
    body: "Typhodont practice, supervised procedures, live demos, and Skills Assessment Exam Certification.",
    href: "/workshops",
    label: "View workshops",
  },
  {
    title: "Comprehensive Textbooks",
    body: "Pictorial, evidence-based chairside reference with clinical pearls, workbook sections, and QR-linked videos. Comprehensive modules covering diagnosis to complication management.",
    href: "/resources",
    label: "See resources",
  },
  {
    title: "Grey Dental Clinical Handbooks",
    body: "An essential resource featuring clinical pearls, evidence-based corners, and QR-linked videos.",
    href: "/resources",
    label: "See handbooks",
  },
  {
    title: "Patient & Clinic Workflow Templates",
    body: "Workflow and patient templates available on our website to enhance healthcare efficiency.",
    href: "/resources",
    label: "Get templates",
  },
  {
    title: "Live Webinars",
    body: "Live dental webinars with experts in the field sharing clinical cases and insights.",
    href: "/resources",
    label: "Watch webinars",
  },
  {
    title: "Networking & Discussion Forums",
    body: "Exclusive dental forums for networking and learning.",
    href: "/community",
    label: "Join community",
  },
];

export default function AboutProducts() {
  return (
    <section
      id="products"
      className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-[#F4F7F8] py-16 sm:py-20 md:py-28 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full min-w-0 flex flex-col">
        <div className="bg-white border border-[#D5DEE2] px-5 py-2 rounded-full mb-6 inline-flex self-start shadow-sm">
          <span className="text-[12px] font-semi_bold_24pt tracking-[0.14em] text-[#3A738D] uppercase">
            Our Products / Services
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-semi_bold_24pt text-[#2F5F75] leading-[1.15] tracking-tight mb-10 sm:mb-12 max-w-3xl">
          Education, resources, and community in one place
        </h2>

        <div className="flex flex-col md:flex-row md:flex-wrap gap-4 sm:gap-5 w-full min-w-0">
          {products.map((item) => (
            <article
              key={item.title}
              className="flex flex-col min-w-0 w-full md:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)] bg-white border border-[#D5DEE2] rounded-[16px] p-5 sm:p-6 shadow-[0_4px_16px_rgba(58,115,141,0.04)]"
            >
              <h3 className="text-[#2F5F75] font-semi_bold_24pt text-[16px] sm:text-[17px] leading-snug mb-2.5">
                {item.title}
              </h3>
              <p className="text-[#777779] font-regular_18pt text-[14px] sm:text-[15px] leading-relaxed mb-5 flex-1">
                {item.body}
              </p>
              <Link
                href={item.href}
                className="inline-flex items-center gap-1.5 self-start text-[#3A738D] font-inter-medium_18pt text-[14px] hover:opacity-80 transition-opacity"
              >
                {item.label}
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import ContactForm from "@/components/ContactForm";
import ContactCampusLocation from "@/components/ContactCampusLocation";
import ContactCtaFaq from "@/components/ContactCtaFaq";

const contactItems = [
  {
    label: "Phone",
    value: "+44 20 7123 4567",
    href: "tel:+442071234567",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z"
          fill="#3A738D"
        />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "+44 7700 900123",
    href: "https://wa.me/447700900123",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 3.2C7.1 3.2 3.2 7 3.2 11.8c0 1.7.5 3.3 1.3 4.7L3 21l4.7-1.4c1.3.7 2.8 1.1 4.3 1.1 4.9 0 8.8-3.9 8.8-8.8S16.9 3.2 12 3.2zm4.6 12.4c-.2.5-1.1 1-1.6 1.1-.4.1-.9.1-1.5-.1-.3-.1-.8-.3-1.3-.5-2.3-1-3.8-3.4-3.9-3.6-.1-.2-1-1.3-1-2.5s.6-1.8.9-2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .5.4.2.5.6 1.7.6 1.8.1.2.1.3 0 .5l-.3.5c-.1.2-.3.3-.1.6.1.3.6 1 .1.3 1.6.4.5.2.7.1.2-.1.8-.5 1-.6.2-.1.4-.1.6 0 .2.1 1.2.6 1.4.7.2.1.3.2.4.3.1.2.1.5-.1 1z"
          fill="#3A738D"
        />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "hello@greydental.com",
    href: "mailto:hello@greydental.com",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5v-11zm1.7.5 6.3 4.2L18.3 7H5.7zm12.8 1.4-6.1 4.1a1 1 0 0 1-1.1 0L5.2 8.9v8.1h13.3V8.9z"
          fill="#3A738D"
        />
      </svg>
    ),
  },
  {
    label: "Location",
    value:
      "Grey Dental Academy — 145 Oxford Road, Manchester M13 9GP, United Kingdom",
    href: "https://maps.google.com/?q=145+Oxford+Road,+Manchester+M13+9GP",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 3c-3.9 0-7 3-7 6.8 0 5.1 7 11.2 7 11.2s7-6.1 7-11.2C19 6 15.9 3 12 3zm0 9.3a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
          fill="#3A738D"
        />
      </svg>
    ),
  },
];

export default function ContactPageContent() {
  return (
    <div className="w-full min-w-0 flex flex-col flex-1">
      {/* Hero */}
      <section
        className="w-[100vw] relative left-1/2 -translate-x-1/2 overflow-x-hidden flex flex-col pb-16 sm:pb-24 md:pb-28"
        style={{
          background:
            "linear-gradient(90deg, #F4F7F8 0%, #E8F1F5 50%, #E5F8F0 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 w-full min-w-0 flex flex-col items-center text-center">
          <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-[52px] font-semi_bold_24pt text-[#2F5F75] leading-[1.15] tracking-tight mb-4 sm:mb-5 max-w-3xl">
            Contact With Grey Dental
          </h1>
          <p className="text-[#777779] font-regular_18pt text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-xl">
            Have a question about courses, enrollment, or partnerships? Reach
            out directly or send a message — our team is here to help.
          </p>
        </div>
      </section>

      {/* Overlapping panel */}
      <section
        className="w-[100vw] relative left-1/2 -translate-x-1/2 overflow-x-hidden flex flex-col -mt-14 sm:-mt-20 md:-mt-24 pb-14 sm:pb-20 md:pb-24"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, #F4F7F8 18%, #F4F7F8 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full min-w-0 flex flex-col">
          <div className="w-full min-w-0 bg-white rounded-[28px] sm:rounded-[36px] md:rounded-[44px] shadow-[0_12px_40px_rgba(58,115,141,0.08)] px-5 sm:px-8 md:px-12 lg:px-14 pt-10 sm:pt-12 md:pt-14 pb-10 sm:pb-12 md:pb-14 flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-16">
            {/* Left — direct contact */}
            <div className="flex flex-col flex-1 min-w-0 w-full">
              <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-semi_bold_24pt text-[#2F5F75] leading-snug tracking-tight mb-4 sm:mb-5">
                Connect{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #3A738D 0%, #5ECAA0 100%)",
                  }}
                >
                  with
                </span>{" "}
                Our Team
              </h2>

              <p className="text-[#777779] font-regular_18pt text-[14px] sm:text-[15px] leading-relaxed max-w-md mb-8 sm:mb-10">
                Prefer to reach out directly? Use the details below and we&apos;ll
                get back to you as soon as we can.
              </p>

              <ul className="flex flex-col w-full min-w-0">
                {contactItems.map((item, index) => (
                  <li
                    key={item.label}
                    className={`flex items-start gap-4 sm:gap-5 min-w-0 py-5 sm:py-6 ${
                      index < contactItems.length - 1
                        ? "border-b border-[#D5DEE2]"
                        : ""
                    }`}
                  >
                    <span className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-[12px] bg-[#F4F7F8] border border-[#D5DEE2] flex-shrink-0">
                      {item.icon}
                    </span>
                    <div className="flex flex-col min-w-0 gap-1 pt-0.5">
                      <span className="text-[#2F5F75] font-semi_bold_24pt text-[15px] sm:text-[16px] leading-snug">
                        {item.label}
                      </span>
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-[#777779] font-regular_18pt text-[13px] sm:text-[14px] leading-relaxed hover:text-[#3A738D] transition-colors break-words"
                      >
                        {item.value}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — form card */}
            <div className="w-full lg:w-[48%] lg:flex-shrink-0 min-w-0 flex flex-col">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <ContactCampusLocation />
      <ContactCtaFaq />
    </div>
  );
}

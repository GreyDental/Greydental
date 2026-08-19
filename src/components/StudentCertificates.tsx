"use client";

import Image from "next/image";
import Link from "next/link";
import StudentDashboardShell from "@/components/StudentDashboardShell";

const ASSET = "/Student_Dashboard";
const CERT = "/Certificates";
const cardShadow = "shadow-[0_8px_30px_rgba(47,95,117,0.06)]";
const card = `bg-white border border-[#D5DEE2] rounded-[20px] ${cardShadow}`;

const metrics = [
  {
    label: "Total Certificates",
    value: "02",
    sub: "Credentials ready to claim",
    icon: `${ASSET}/star.svg`,
  },
  {
    label: "In Progress",
    value: "03",
    sub: "Courses nearing completion",
    icon: `${ASSET}/bar-chart-3.svg`,
  },
  {
    label: "Completed Courses",
    value: "05",
    sub: "Successful learning paths",
    icon: "/education-page/Learning/Tick.svg",
  },
  {
    label: "Total CE Credits",
    value: "24.5",
    sub: "Verified state-standard hours",
    icon: `${ASSET}/star.svg`,
  },
];

const earned = [
  {
    id: "endo-foundation",
    title: "Endodontics Foundation",
    date: "Completed Dec 15, 2025",
  },
  {
    id: "clinical-photo",
    title: "Clinical Photography Basics",
    date: "Completed Nov 02, 2025",
  },
  {
    id: "referral",
    title: "Referral Network Onboarding",
    date: "Completed Oct 18, 2025",
  },
];

const inProgress = [
  {
    title: "Foundations of Endodontics - Remote Learning",
    remaining: "3 assignments remaining",
    progress: 70,
    eta: "Est. Sep 2026",
  },
  {
    title: "Foundations of Endodontics - Immersive Residency",
    remaining: "Case submission pending",
    progress: 45,
    eta: "Est. Oct 2026",
  },
  {
    title: "Dental Implants Bootcamp for GP",
    remaining: "Pre-assessment remaining",
    progress: 20,
    eta: "Est. Nov 2026",
  },
];

function ShareIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M6 8.667 10.2 6.4M6 7.333 10.2 9.6M4 11.333A2.333 2.333 0 1 0 4 6.667a2.333 2.333 0 0 0 0 4.666Zm8-4.666A2.333 2.333 0 1 0 12 2a2.333 2.333 0 0 0 0 4.667Zm0 9.333A2.333 2.333 0 1 0 12 11.333 2.333 2.333 0 0 0 12 16Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="4.5" y="4.5" width="7" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2.5 9.5V3.2A1.2 1.2 0 0 1 3.7 2h5.3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export default function StudentCertificates() {
  const copyLink = () => {
    const url = `${window.location.origin}/student-dashboard/certificates`;
    void navigator.clipboard?.writeText(url);
  };

  return (
    <StudentDashboardShell>
      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-6 sm:py-7 md:py-8 w-full min-w-0 flex flex-col gap-6">
        <div className="min-w-0">
          <h1 className="text-[#2F5F75] font-semi_bold_24pt text-[26px] sm:text-[30px] leading-tight tracking-tight">
            Certificates
          </h1>
          <p className="mt-1.5 text-[#777779] font-regular_18pt text-[14px] sm:text-[15px] leading-relaxed">
            View and download your earned certificates and credentials
          </p>
        </div>

        <section className="flex flex-col sm:flex-row flex-wrap xl:flex-nowrap gap-4 w-full min-w-0">
          {metrics.map((m) => (
            <article
              key={m.label}
              className={`flex flex-col flex-1 min-w-0 sm:min-w-[calc(50%-0.5rem)] xl:min-w-0 ${card} p-5`}
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className="text-[#777779] font-regular_18pt text-[13px] leading-snug">
                  {m.label}
                </span>
                <Image
                  src={m.icon}
                  alt=""
                  width={18}
                  height={18}
                  className="w-[18px] h-[18px] flex-shrink-0 opacity-55"
                />
              </div>
              <p className="text-[#2F5F75] font-semi_bold_24pt text-[28px] sm:text-[30px] leading-none tracking-tight mb-1.5">
                {m.value}
              </p>
              <p className="text-[#777779] font-regular_18pt text-[12px] sm:text-[13px] leading-snug">
                {m.sub}
              </p>
            </article>
          ))}
        </section>

        <div className="flex flex-col xl:flex-row gap-6 w-full min-w-0 xl:items-stretch">
          <section className="flex-1 min-w-0">
            <h2 className="text-[#2F5F75] font-semi_bold_24pt text-[18px] sm:text-[20px] leading-snug mb-4">
              Earned Certificates
            </h2>
            <div className="flex flex-col md:flex-row md:flex-wrap gap-4 w-full min-w-0">
              {earned.map((cert) => (
                <article
                  key={cert.id}
                  className={`flex flex-col min-w-0 w-full md:w-[calc(50%-0.5rem)] xl:w-[calc(33.333%-0.67rem)] ${card} overflow-hidden`}
                >
                  <div className="relative h-[200px] w-full bg-[#F4F7F8]">
                    <Image
                      src={`${CERT}/FormalFrame.png`}
                      alt={`${cert.title} certificate`}
                      fill
                      className="object-contain p-3"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-col p-4 sm:p-5">
                    <h3 className="text-[#2F5F75] font-semi_bold_24pt text-[15px] leading-snug truncate">
                      {cert.title}
                    </h3>
                    <p className="text-[#777779] font-regular_18pt text-[13px] mt-1 mb-4">
                      {cert.date}
                    </p>
                    <div className="mt-auto flex items-center gap-2">
                      <button
                        type="button"
                        className="flex-1 inline-flex items-center justify-center py-2.5 rounded-[12px] font-inter-medium_18pt text-[13px] bg-[#5ECAA0] hover:bg-[#7ED9B5] text-black transition-colors"
                      >
                        Download PDF
                      </button>
                      <button
                        type="button"
                        aria-label={`Share ${cert.title}`}
                        className="flex items-center justify-center w-10 h-10 rounded-[12px] border border-[#D5DEE2] text-[#2F5F75] hover:bg-[#F4F7F8] transition-colors flex-shrink-0"
                      >
                        <ShareIcon />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className="w-full xl:w-[280px] xl:flex-shrink-0">
            <article className={`${card} h-full p-5 sm:p-6 flex flex-col`}>
              <h2 className="text-[#2F5F75] font-semi_bold_24pt text-[17px] sm:text-[18px] leading-snug mb-2">
                Verify Credentials
              </h2>
              <p className="text-[#777779] font-regular_18pt text-[13px] leading-relaxed mb-5">
                Employers and boards can scan this code to confirm your issued Grey Dental certificates.
              </p>
              <div className="mx-auto w-[152px] h-[152px] border border-dashed border-[#3A738D]/40 rounded-[12px] bg-[#F4F7F8] flex items-center justify-center p-4 mb-5">
                <Image
                  src={`${CERT}/b39b327eeec5c8c289e7f7bfaa52b690d10b29c4.png`}
                  alt="Certificate verification QR code"
                  width={120}
                  height={120}
                  className="w-[120px] h-[120px] object-contain"
                />
              </div>
              <button
                type="button"
                onClick={copyLink}
                className="mt-auto inline-flex items-center justify-center gap-2 text-[#3A738D] hover:text-[#2F5F75] font-inter-medium_18pt text-[13px] transition-colors"
              >
                <CopyIcon />
                Copy Profile Link
              </button>
            </article>
          </aside>
        </div>

        <section className={`${card} p-5 sm:p-6`}>
          <div className="flex items-center justify-between gap-3 mb-5">
            <h2 className="text-[#2F5F75] font-semi_bold_24pt text-[17px] sm:text-[18px] leading-snug">
              In Progress Certificates
            </h2>
            <Link
              href="/education#pathways"
              className="text-[#3A738D] hover:text-[#2F5F75] font-inter-medium_18pt text-[13px] sm:text-[14px] transition-colors flex-shrink-0"
            >
              View Requirements
            </Link>
          </div>

          <ul className="flex flex-col">
            {inProgress.map((row, index) => (
              <li
                key={row.title}
                className={`flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6 py-4 ${
                  index < inProgress.length - 1 ? "border-b border-[#D5DEE2]" : "pb-0"
                } ${index === 0 ? "pt-0" : ""}`}
              >
                <div className="flex-1 min-w-0">
                  <p className="text-[#2F5F75] font-semi_bold_24pt text-[15px] leading-snug">
                    {row.title}
                  </p>
                  <p className="text-[#777779] font-regular_18pt text-[13px] mt-0.5">
                    {row.remaining}
                  </p>
                </div>
                <div className="flex items-center gap-3 w-full lg:w-[240px] flex-shrink-0">
                  <div className="flex-1 h-2 rounded-full bg-[#E9EDF2] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#5A8FA5]"
                      style={{ width: `${row.progress}%` }}
                    />
                  </div>
                  <span className="text-[#2F5F75] font-inter-medium_18pt text-[13px] w-8 text-right">
                    {row.progress}%
                  </span>
                </div>
                <span className="text-[#777779] font-regular_18pt text-[13px] lg:w-[120px] lg:text-right flex-shrink-0">
                  {row.eta}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </StudentDashboardShell>
  );
}

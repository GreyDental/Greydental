"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

const ASSET = "/Student_Dashboard";

const navItems = [
  { label: "Dashboard", icon: "Icon (8).svg", href: "/student-dashboard", active: true },
  { label: "My Courses", icon: "Icon (9).svg", href: "/courses" },
  { label: "Learning Progress", icon: "Icon (10).svg", href: "/student-dashboard" },
  { label: "Assignments", icon: "Icon (11).svg", href: "/student-dashboard" },
  { label: "Certificates", icon: "Icon (12).svg", href: "/student-dashboard" },
  { label: "Community", icon: "Icon (13).svg", href: "/community" },
  { label: "Workshops", icon: "Icon (14).svg", href: "/workshops" },
  { label: "Resources", icon: "Icon (15).svg", href: "/resources" },
  { label: "Profile", icon: "Icon (16).svg", href: "/student-dashboard" },
  { label: "Settings", icon: "Icon (17).svg", href: "/student-dashboard" },
];

const metrics = [
  {
    value: "03",
    label: "Enrolled Courses",
    sub: "Active learning programs",
    icon: `${ASSET}/book-open.svg`,
    visual: "bars" as const,
  },
  {
    value: "70%",
    label: "Overall Progress",
    sub: "Average course completion",
    icon: `${ASSET}/bar-chart-3.svg`,
    visual: "progress" as const,
    progress: 70,
  },
  {
    value: "18.5",
    label: "Learning Hours",
    sub: "+3.2h this week",
    subAccent: true,
    icon: `${ASSET}/clock.svg`,
    visual: "hours" as const,
    progress: 62,
  },
  {
    value: "02",
    label: "Certificates",
    sub: "1 ready to claim",
    icon: `${ASSET}/star.svg`,
    visual: "certs" as const,
  },
];

const deadlines = [
  {
    title: "Module Quiz",
    sub: "Endodontics Ch.7",
    when: "Friday",
    icon: `${ASSET}/Icon (22).svg`,
  },
  {
    title: "Workbook Submission",
    sub: "Clinical workbook",
    when: "Aug 12",
    icon: `${ASSET}/Icon (23).svg`,
  },
  {
    title: "Live Q&A Session",
    sub: "Office hours",
    when: "Saturday",
    icon: `${ASSET}/Icon (24).svg`,
  },
];

function asset(name: string) {
  return `${ASSET}/${encodeURIComponent(name)}`;
}

const cardShadow = "shadow-[0_8px_30px_rgba(47,95,117,0.06)]";

export default function StudentDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-dvh w-full min-w-0 overflow-hidden bg-[#F4F7F8]">
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-40 bg-[#2F5F75]/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar — fixed full viewport height */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 h-dvh w-[248px] flex flex-col bg-[#2F5F75] transition-transform duration-200 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex items-center px-4 pt-6 pb-5">
          <div className="bg-white rounded-[10px] px-2.5 py-2 w-full">
            <BrandLogo href="/student-dashboard" height={40} />
          </div>
        </div>

        <p className="px-5 mb-2.5 text-white/40 font-inter-medium_18pt text-[10px] tracking-[0.14em] uppercase">
          Main Menu
        </p>

        <nav className="flex-1 overflow-y-auto px-3 pb-4 flex flex-col gap-1 min-h-0">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-[12px] transition-colors ${
                item.active
                  ? "bg-[#3A738D] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
                  : "text-white/65 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Image
                src={asset(item.icon)}
                alt=""
                width={16}
                height={16}
                className="w-4 h-4 flex-shrink-0"
              />
              <span className="font-regular_18pt text-[14px] leading-snug truncate">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="mt-auto px-3 pb-6 pt-3 border-t border-white/10 flex flex-col gap-1">
          <Link
            href="/contact"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-[12px] text-white/65 hover:bg-white/10 hover:text-white transition-colors"
          >
            <span className="w-4 h-4 flex items-center justify-center rounded-full border border-white/40 text-[10px] font-semi_bold_24pt leading-none">
              ?
            </span>
            <span className="font-regular_18pt text-[14px]">Help Center</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-[12px] text-white/65 hover:bg-white/10 hover:text-white transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M6 14H3.333A1.333 1.333 0 0 1 2 12.667V3.333A1.333 1.333 0 0 1 3.333 2H6M10.667 11.333 14 8l-3.333-3.333M14 8H6"
                stroke="currentColor"
                strokeWidth="1.33"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-regular_18pt text-[14px]">Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main — offset for fixed sidebar, scrolls independently */}
      <div className="h-dvh min-w-0 flex flex-col lg:ml-[248px] overflow-y-auto overflow-x-hidden">
        {/* Top bar — white like Figma */}
        <header className="sticky top-0 z-30 bg-white border-b border-[#D5DEE2] px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex items-center gap-3 sm:gap-4 flex-shrink-0">
          <button
            type="button"
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#F4F7F8] border border-[#D5DEE2] text-[#2F5F75]"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path
                d="M3 4.5h12M3 9h12M3 13.5h12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <label className="relative flex-1 min-w-0 max-w-xl lg:max-w-2xl">
            <span className="sr-only">Search</span>
            <Image
              src={asset("Icon (18).svg")}
              alt=""
              width={14}
              height={14}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none"
            />
            <input
              type="search"
              placeholder="Search courses, resources, discussions..."
              className="w-full min-w-0 pl-11 pr-4 py-3 rounded-full bg-[#F4F7F8] border border-transparent focus:border-[#D5DEE2] focus:bg-white text-[#2F5F75] font-regular_18pt text-[13px] sm:text-[14px] outline-none transition-colors placeholder:text-[#777779]/65"
            />
          </label>

          <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0 ml-auto">
            <button
              type="button"
              className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white border border-[#D5DEE2] hover:border-[#3A738D]/40 transition-colors"
              aria-label="Notifications"
            >
              <Image
                src={`${ASSET}/bell.svg`}
                alt=""
                width={18}
                height={18}
                className="w-[18px] h-[18px]"
              />
              <span className="absolute top-2 right-2.5 w-2 h-2 rounded-full bg-[#3A738D] ring-2 ring-white" />
            </button>
            <button
              type="button"
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-white border border-[#D5DEE2] hover:border-[#3A738D]/40 transition-colors"
              aria-label="Messages"
            >
              <Image
                src={`${ASSET}/message-square.svg`}
                alt=""
                width={18}
                height={18}
                className="w-[18px] h-[18px]"
              />
            </button>
            <Image
              src={`${ASSET}/avatar.png`}
              alt="Dr. Sarah"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-white border border-[#D5DEE2]"
            />
          </div>
        </header>

        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-6 sm:py-7 md:py-8 w-full min-w-0 flex flex-col gap-5 sm:gap-6">
          {/* Row: Welcome + Deadlines */}
          <div className="flex flex-col xl:flex-row gap-5 sm:gap-6 w-full min-w-0 xl:items-stretch">
            <section
              className={`relative overflow-hidden flex-1 min-w-0 rounded-[20px] sm:rounded-[24px] bg-white border border-[#D5DEE2] ${cardShadow} px-6 sm:px-8 py-7 sm:py-8 flex flex-col sm:flex-row sm:items-center gap-6`}
            >
              {/* Soft mint glow — Figma */}
              <div
                className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full blur-2xl opacity-90"
                style={{
                  background:
                    "radial-gradient(circle, #5ECAA04D 0%, #3A738D1A 45%, transparent 70%)",
                }}
                aria-hidden="true"
              />

              <div className="flex flex-col flex-1 min-w-0 relative z-10">
                <h1 className="text-[26px] sm:text-[30px] md:text-[34px] font-semi_bold_24pt text-[#2F5F75] leading-[1.2] tracking-tight mb-2.5 sm:mb-3">
                  Welcome Back, Dr. Sarah!
                </h1>
                <p className="text-[#777779] font-regular_18pt text-[14px] sm:text-[15px] leading-relaxed max-w-md mb-6 sm:mb-7">
                  Continue building your clinical skills and stay on track with
                  your learning journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto min-w-0">
                  <Link
                    href="/courses"
                    className="inline-flex items-center justify-center gap-2 bg-[#5ECAA0] hover:bg-[#7ED9B5] text-black px-5 py-3 rounded-[12px] font-inter-medium_18pt text-[14px] sm:text-[15px] transition-colors shadow-[0_4px_14px_rgba(94,202,160,0.35)]"
                  >
                    <Image
                      src={asset("Icon (26).svg")}
                      alt=""
                      width={12}
                      height={12}
                      className="w-3 h-3"
                    />
                    Resume Learning
                  </Link>
                  <Link
                    href="/courses"
                    className="inline-flex items-center justify-center bg-white border border-[#3A738D] text-[#3A738D] hover:bg-[#3A738D] hover:text-white px-5 py-3 rounded-[12px] font-inter-medium_18pt text-[14px] sm:text-[15px] transition-colors"
                  >
                    Browse Courses
                  </Link>
                </div>
              </div>

              <div className="hidden sm:flex relative z-10 items-center justify-center flex-shrink-0 w-[150px] md:w-[180px] lg:w-[200px]">
                <Image
                  src="/hero-sections/main-page-tooth.svg"
                  alt=""
                  width={200}
                  height={200}
                  className="w-full h-auto object-contain drop-shadow-[0_12px_24px_rgba(47,95,117,0.15)]"
                />
              </div>
            </section>

            <aside className="w-full xl:w-[340px] xl:flex-shrink-0 min-w-0 flex flex-col">
              <article
                className={`flex flex-col flex-1 w-full min-w-0 bg-white border border-[#D5DEE2] rounded-[20px] sm:rounded-[24px] p-5 sm:p-6 ${cardShadow}`}
              >
                <div className="flex items-center gap-2.5 mb-1">
                  <h2 className="text-[#2F5F75] font-semi_bold_24pt text-[17px] sm:text-[18px] leading-snug">
                    Upcoming Deadlines
                  </h2>
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#E8F1F5] text-[#3A738D] font-semi_bold_24pt text-[12px]">
                    3
                  </span>
                </div>

                <ul className="flex flex-col w-full min-w-0 mt-2">
                  {deadlines.map((item, index) => (
                    <li
                      key={item.title}
                      className={`flex items-center gap-3 py-4 ${
                        index < deadlines.length - 1
                          ? "border-b border-[#D5DEE2]"
                          : "pb-0"
                      } ${index === 0 ? "pt-3" : ""}`}
                    >
                      <span className="flex items-center justify-center w-10 h-10 rounded-[12px] bg-[#F4F7F8] flex-shrink-0">
                        <Image
                          src={item.icon}
                          alt=""
                          width={18}
                          height={18}
                          className="w-[18px] h-[18px]"
                        />
                      </span>
                      <div className="flex flex-col flex-1 min-w-0 gap-0.5">
                        <span className="text-[#2F5F75] font-semi_bold_24pt text-[14px] leading-snug truncate">
                          {item.title}
                        </span>
                        <span className="text-[#777779] font-regular_18pt text-[12px] leading-snug truncate">
                          {item.sub}
                        </span>
                      </div>
                      <span className="text-[#777779] font-regular_18pt text-[12px] flex-shrink-0">
                        {item.when}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </aside>
          </div>

          {/* Metrics */}
          <section className="flex flex-col sm:flex-row flex-wrap xl:flex-nowrap gap-4 w-full min-w-0">
            {metrics.map((m) => (
              <article
                key={m.label}
                className={`flex flex-col flex-1 min-w-0 sm:min-w-[calc(50%-0.5rem)] xl:min-w-0 bg-white border border-[#D5DEE2] rounded-[18px] sm:rounded-[20px] p-5 ${cardShadow}`}
              >
                <div className="flex items-start justify-between gap-2 mb-4">
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
                <p className="text-[#2F5F75] font-semi_bold_24pt text-[30px] sm:text-[32px] leading-none tracking-tight mb-1.5">
                  {m.value}
                </p>
                <p
                  className={`font-regular_18pt text-[12px] sm:text-[13px] leading-snug mb-4 ${
                    m.subAccent ? "text-[#5ECAA0]" : "text-[#777779]"
                  }`}
                >
                  {m.sub}
                </p>

                {m.visual === "bars" && (
                  <div className="flex items-end gap-1.5 h-9 mt-auto">
                    {[36, 58, 44, 78, 52, 68].map((h, i) => (
                      <span
                        key={i}
                        className="flex-1 rounded-[3px] bg-[#3A738D]/20"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                )}
                {m.visual === "progress" && (
                  <div className="mt-auto h-2 rounded-full bg-[#F4F7F8] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#5ECAA0]"
                      style={{ width: `${m.progress}%` }}
                    />
                  </div>
                )}
                {m.visual === "hours" && (
                  <div className="mt-auto h-2 rounded-full bg-[#F4F7F8] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#3A738D]"
                      style={{ width: `${m.progress}%` }}
                    />
                  </div>
                )}
                {m.visual === "certs" && (
                  <div className="mt-auto flex flex-wrap gap-2">
                    {["Earned", "Earned"].map((label, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 rounded-full bg-[#E5F8F0] px-2.5 py-1 text-[11px] font-inter-medium_18pt text-[#2F5F75]"
                      >
                        <Image
                          src={`${ASSET}/star.svg`}
                          alt=""
                          width={12}
                          height={12}
                          className="w-3 h-3"
                        />
                        {label}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </section>

          {/* Continue Learning */}
          <section className="flex flex-col w-full min-w-0">
            <div className="flex items-center justify-between gap-3 mb-4">
              <h2 className="text-[#2F5F75] font-semi_bold_24pt text-[18px] sm:text-[20px] leading-snug">
                Continue Learning
              </h2>
              <Link
                href="/courses"
                className="text-[#3A738D] hover:text-[#2F5F75] font-inter-medium_18pt text-[13px] sm:text-[14px] transition-colors"
              >
                See All
              </Link>
            </div>

            <article
              className={`flex flex-col md:flex-row gap-5 w-full min-w-0 bg-white border border-[#D5DEE2] rounded-[20px] sm:rounded-[24px] p-4 sm:p-5 ${cardShadow}`}
            >
              <div className="relative w-full md:w-[210px] lg:w-[230px] h-[148px] md:h-[168px] rounded-[14px] overflow-hidden flex-shrink-0 bg-[#E8F1F5]">
                <Image
                  src={`${ASSET}/course-thumb.jpg`}
                  alt="Endodontics Foundation course"
                  fill
                  className="object-cover"
                  sizes="230px"
                />
              </div>

              <div className="flex flex-col flex-1 min-w-0 py-0.5">
                <span className="inline-flex self-start bg-[#E8F1F5] text-[#3A738D] font-semi_bold_24pt text-[10px] tracking-[0.12em] uppercase px-2.5 py-1 rounded-full mb-2.5">
                  Clinical
                </span>
                <h3 className="text-[#2F5F75] font-semi_bold_24pt text-[17px] sm:text-[19px] leading-snug mb-1">
                  Endodontics Foundation
                </h3>
                <p className="text-[#777779] font-regular_18pt text-[13px] leading-snug">
                  Dr. John Smith
                </p>
                <p className="text-[#777779] font-regular_18pt text-[13px] leading-snug mb-4">
                  Clinical Demo Video
                </p>

                <div className="flex items-center justify-between gap-3 mb-1.5">
                  <span className="text-[#2F5F75] font-inter-medium_18pt text-[13px]">
                    70%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-[#F4F7F8] overflow-hidden mb-4">
                  <div className="h-full w-[70%] rounded-full bg-[#5ECAA0]" />
                </div>

                <div className="mt-auto flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[#777779] font-regular_18pt text-[12px] sm:text-[13px] flex-1 min-w-0">
                    <span className="inline-flex items-center gap-1.5">
                      <Image
                        src={`${ASSET}/clock.svg`}
                        alt=""
                        width={14}
                        height={14}
                        className="w-3.5 h-3.5 opacity-55"
                      />
                      ~3h remaining
                    </span>
                    <span>Chapter 7 of 10</span>
                    <Link
                      href="/courses/foundations-of-clinical-endodontics"
                      className="inline-flex items-center gap-1 text-[#3A738D] hover:text-[#2F5F75] font-inter-medium_18pt"
                    >
                      Details
                      <Image
                        src={asset("Icon (27).svg")}
                        alt=""
                        width={12}
                        height={12}
                        className="w-3 h-3"
                      />
                    </Link>
                  </div>
                  <Link
                    href="/courses/foundations-of-clinical-endodontics"
                    className="inline-flex items-center justify-center gap-2 self-stretch sm:self-auto bg-[#5ECAA0] hover:bg-[#7ED9B5] text-black px-5 py-2.5 rounded-[12px] font-inter-medium_18pt text-[14px] transition-colors flex-shrink-0 shadow-[0_4px_12px_rgba(94,202,160,0.3)]"
                  >
                    <Image
                      src={asset("Icon (26).svg")}
                      alt=""
                      width={12}
                      height={12}
                      className="w-3 h-3"
                    />
                    Resume
                  </Link>
                </div>
              </div>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
}

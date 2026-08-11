"use client";

import Image from "next/image";
import Link from "next/link";
import StudentDashboardShell from "@/components/StudentDashboardShell";

const ASSET = "/Student_Dashboard";
const cardShadow = "shadow-[0_8px_30px_rgba(47,95,117,0.06)]";
const card =
  `bg-white border border-[#D5DEE2] rounded-[20px] ${cardShadow}`;

const metrics = [
  {
    label: "Overall Progress",
    value: "58%",
    sub: "Average completion score",
    progress: 58,
  },
  {
    label: "Total Learning Hours",
    value: "42.5 hrs",
    sub: "+4.2 hrs logged this week",
    progress: 68,
    delta: "+12%",
  },
  {
    label: "Modules Completed",
    value: "14/30",
    sub: "All active training courses",
    progress: 47,
  },
  {
    label: "Average Quiz Score",
    value: "85%",
    sub: "Grade: Good Standing",
    progress: 85,
  },
];

const courseRows = [
  {
    title: "Foundations of Endodontics - Remote Learning",
    image: "/main-page-featured/feature-1.jpg",
    modules: "8/12 Modules done",
    hours: "24 hrs spent",
    progress: 70,
    href: "/courses/endodontics-remote",
  },
  {
    title: "Foundations of Endodontics - Immersive Residency",
    image: "/main-page-featured/feature-2.jpg",
    modules: "4/8 Modules done",
    hours: "16 hrs spent",
    progress: 45,
    href: "/courses/endodontics-residency",
  },
  {
    title: "Dental Implants Bootcamp for GP",
    image: "/main-page-featured/feature-3.jpg",
    modules: "0/10 Modules done",
    hours: "0 hrs spent",
    progress: 0,
    href: "/courses/implants-bootcamp",
  },
];

const weekHours = [
  { day: "Mon", hours: 3.2 },
  { day: "Tue", hours: 5.0 },
  { day: "Wed", hours: 4.4 },
  { day: "Thu", hours: 8.5 },
  { day: "Fri", hours: 6.1 },
  { day: "Sat", hours: 3.8 },
  { day: "Sun", hours: 2.5 },
];

const yMax = 10;
const yTicks = [10, 7.5, 5, 2.5, 0];

const skills = [
  { label: "Clinical Knowledge", value: 85 },
  { label: "Practical Skills", value: 72 },
  { label: "Case Analysis", value: 90 },
  { label: "Patient Management", value: 65 },
  { label: "Research & Documentation", value: 40 },
];

const activity = [
  {
    title: "Completed Module 8 Quiz: Obturation Materials",
    course: "Foundations of Endodontics - Remote Learning",
    when: "2 hours ago",
  },
  {
    title: "Submitted Case Study: Multi-Rooted Molar Treatment Plan",
    course: "Foundations of Endodontics - Immersive Residency",
    when: "3 days ago",
  },
  {
    title: "Registered for Upcoming Live Hands-on Practice Session",
    course: "Foundations of Endodontics - Immersive Residency",
    when: "4 days ago",
  },
  {
    title: "Completed Diagnostic Pre-assessment Questionnaire",
    course: "Dental Implants Bootcamp for GP",
    when: "1 week ago",
  },
];

export default function StudentLearningProgress() {
  const peak = weekHours.reduce((a, b) => (b.hours > a.hours ? b : a));

  return (
    <StudentDashboardShell>
      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-6 sm:py-7 md:py-8 w-full min-w-0 flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="min-w-0">
            <h1 className="text-[#2F5F75] font-semi_bold_24pt text-[26px] sm:text-[30px] leading-tight tracking-tight">
              Learning Progress
            </h1>
            <p className="mt-1.5 text-[#777779] font-regular_18pt text-[14px] sm:text-[15px] leading-relaxed">
              Track your learning journey and performance across all courses
            </p>
          </div>
          <label className="relative inline-flex items-center self-start">
            <span className="sr-only">Select period</span>
            <select
              defaultValue="30"
              className="appearance-none bg-white border border-[#D5DEE2] text-[#2F5F75] font-regular_18pt text-[13px] rounded-full pl-4 pr-9 py-2 outline-none cursor-pointer"
            >
              <option value="7">Period: Last 7 Days</option>
              <option value="30">Period: Last 30 Days</option>
              <option value="90">Period: Last 90 Days</option>
            </select>
            <svg
              className="pointer-events-none absolute right-3.5 text-[#777779]"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 4.5 6 7.5 9 4.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </label>
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
                {m.delta && (
                  <span className="inline-flex items-center gap-0.5 text-[#5ECAA0] font-inter-medium_18pt text-[12px] flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path
                        d="M5 8V2M5 2 2.5 4.5M5 2l2.5 2.5"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {m.delta}
                  </span>
                )}
              </div>
              <p className="text-[#2F5F75] font-semi_bold_24pt text-[28px] sm:text-[30px] leading-none tracking-tight mb-1.5">
                {m.value}
              </p>
              <p className="text-[#777779] font-regular_18pt text-[12px] sm:text-[13px] leading-snug mb-4">
                {m.sub}
              </p>
              <div className="mt-auto h-2 rounded-full bg-[#E9EDF2] overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#5A8FA5]"
                  style={{ width: `${m.progress}%` }}
                />
              </div>
            </article>
          ))}
        </section>

        <section className={`${card} p-5 sm:p-6`}>
          <div className="mb-5">
            <h2 className="text-[#2F5F75] font-semi_bold_24pt text-[18px] sm:text-[20px] leading-snug">
              Course Progress Breakdown
            </h2>
            <p className="mt-1 text-[#777779] font-regular_18pt text-[13px] sm:text-[14px]">
              Detailed performance metrics for your currently enrolled dental
              training curricula
            </p>
          </div>

          <ul className="flex flex-col">
            {courseRows.map((row, index) => (
              <li
                key={row.title}
                className={`flex flex-col lg:flex-row lg:items-center gap-4 py-5 ${
                  index < courseRows.length - 1 ? "border-b border-[#D5DEE2]" : "pb-0"
                } ${index === 0 ? "pt-0" : ""}`}
              >
                <div className="relative w-full h-[140px] lg:w-[72px] lg:h-[72px] rounded-[12px] overflow-hidden bg-[#E8F1F5] flex-shrink-0">
                  <Image
                    src={row.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="72px"
                  />
                </div>

                <div className="flex flex-col flex-1 min-w-0 gap-1.5">
                  <h3 className="text-[#2F5F75] font-semi_bold_24pt text-[15px] sm:text-[16px] leading-snug">
                    {row.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[#777779] font-regular_18pt text-[13px]">
                    <span className="inline-flex items-center gap-1.5">
                      <Image
                        src={`${ASSET}/book-open.svg`}
                        alt=""
                        width={14}
                        height={14}
                        className="w-3.5 h-3.5 opacity-55"
                      />
                      {row.modules}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Image
                        src={`${ASSET}/clock.svg`}
                        alt=""
                        width={14}
                        height={14}
                        className="w-3.5 h-3.5 opacity-55"
                      />
                      {row.hours}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full lg:w-[220px] flex-shrink-0">
                  <span className="text-[#777779] font-regular_18pt text-[12px] flex-shrink-0">
                    Progress
                  </span>
                  <div className="flex-1 h-2 rounded-full bg-[#E9EDF2] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#5A8FA5]"
                      style={{ width: `${row.progress}%` }}
                    />
                  </div>
                  <span className="text-[#2F5F75] font-inter-medium_18pt text-[13px] w-8 text-right flex-shrink-0">
                    {row.progress}%
                  </span>
                </div>

                <Link
                  href={row.href}
                  className="inline-flex items-center justify-center gap-1 self-stretch lg:self-auto lg:w-[140px] flex-shrink-0 py-2.5 px-4 rounded-[12px] font-inter-medium_18pt text-[13px] transition-colors bg-white border border-[#D5DEE2] text-[#2F5F75] hover:bg-[#5ECAA0] hover:border-[#5ECAA0]"
                >
                  View Details
                  <span aria-hidden="true">&gt;</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <div className="flex flex-col xl:flex-row gap-6 w-full min-w-0 xl:items-stretch">
          <section className={`${card} flex-1 p-5 sm:p-6 min-w-0`}>
            <h2 className="text-[#2F5F75] font-semi_bold_24pt text-[17px] sm:text-[18px] leading-snug">
              Weekly Learning Activity
            </h2>
            <p className="mt-1 mb-6 text-[#777779] font-regular_18pt text-[13px]">
              Study hours logged over the last 7 days.
            </p>

            <div className="flex gap-2 h-[220px] w-full min-w-0">
              <div className="flex flex-col justify-between py-0.5 pr-1 flex-shrink-0 h-[calc(100%-22px)]">
                {yTicks.map((n) => (
                  <span
                    key={n}
                    className="text-[#777779] font-regular_18pt text-[10px] leading-none"
                  >
                    {n === 0 ? "0h" : `${n}h`}
                  </span>
                ))}
              </div>
              <div className="flex items-end gap-2 sm:gap-3 flex-1 min-w-0 h-full">
                {weekHours.map((d, i) => {
                  const isPeak = d.day === peak.day;
                  const barColor = isPeak
                    ? "bg-[#5ECAA0]"
                    : i % 2 === 0
                      ? "bg-[#2F5F75]"
                      : "bg-[#D5DEE2]";
                  return (
                    <div
                      key={d.day}
                      className="relative flex flex-col items-center justify-end flex-1 min-w-0 h-full gap-2"
                    >
                      {isPeak && (
                        <span className="absolute -top-1 left-1/2 -translate-x-1/2 -translate-y-full bg-[#2F5F75] text-white font-inter-medium_18pt text-[11px] rounded-[8px] px-2 py-1 whitespace-nowrap">
                          {d.hours}h
                        </span>
                      )}
                      <span
                        className={`w-full max-w-[36px] rounded-t-[8px] ${barColor}`}
                        style={{ height: `${(d.hours / yMax) * 100}%` }}
                        title={`${d.hours}h`}
                      />
                      <span className="text-[#777779] font-regular_18pt text-[11px]">
                        {d.day}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className={`${card} flex-1 p-5 sm:p-6 min-w-0`}>
            <h2 className="text-[#2F5F75] font-semi_bold_24pt text-[17px] sm:text-[18px] leading-snug">
              Skills Development
            </h2>
            <p className="mt-1 mb-6 text-[#777779] font-regular_18pt text-[13px]">
              Proficiency metrics mapped across core competency areas.
            </p>
            <ul className="flex flex-col gap-4">
              {skills.map((skill) => (
                <li key={skill.label} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[#2F5F75] font-inter-medium_18pt text-[13px] sm:text-[14px]">
                      {skill.label}
                    </span>
                    <span className="text-[#2F5F75] font-semi_bold_24pt text-[13px] sm:text-[14px]">
                      {skill.value}%
                    </span>
                  </div>
                  <div className="h-2.5 rounded-full bg-[#E9EDF2] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#5ECAA0]"
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className={`${card} p-5 sm:p-6`}>
          <h2 className="text-[#2F5F75] font-semi_bold_24pt text-[17px] sm:text-[18px] leading-snug">
            Recent Activity
          </h2>
          <p className="mt-1 mb-2 text-[#777779] font-regular_18pt text-[13px]">
            Historical record of your milestones and active contributions.
          </p>
          <ul className="flex flex-col">
            {activity.map((item, index) => (
              <li
                key={item.title}
                className={`flex items-start gap-3 py-4 ${
                  index < activity.length - 1 ? "border-b border-[#D5DEE2]" : "pb-0"
                }`}
              >
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#3A738D] flex-shrink-0" />
                <div className="flex flex-col flex-1 min-w-0 gap-0.5">
                  <span className="text-[#2F5F75] font-semi_bold_24pt text-[14px] leading-snug">
                    {item.title}
                  </span>
                  <span className="text-[#777779] font-regular_18pt text-[13px] leading-snug">
                    {item.course}
                  </span>
                </div>
                <span className="text-[#777779] font-regular_18pt text-[12px] flex-shrink-0 pt-0.5">
                  {item.when}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </StudentDashboardShell>
  );
}

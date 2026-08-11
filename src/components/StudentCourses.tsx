"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import StudentDashboardShell from "@/components/StudentDashboardShell";

const cardShadow = "shadow-[0_8px_30px_rgba(47,95,117,0.06)]";

type Filter = "all" | "progress" | "completed";

const courses = [
  {
    id: "endo-remote",
    title: "Foundations of Endodontics - Remote",
    image: "/main-page-featured/feature-1.jpg",
    modules: 10,
    progress: 70,
    href: "/courses/endodontics-remote",
    status: "progress" as const,
  },
  {
    id: "endo-immersive",
    title: "Foundations of Endodontics - Immersive",
    image: "/main-page-featured/feature-2.jpg",
    modules: 12,
    progress: 45,
    href: "/courses/endodontics-residency",
    status: "progress" as const,
  },
  {
    id: "implants",
    title: "Dental Implants Bootcamp",
    image: "/main-page-featured/feature-3.jpg",
    modules: 8,
    progress: 0,
    href: "/courses/implants-bootcamp",
    status: "progress" as const,
  },
];

const schedule = [
  {
    course: "Foundations of Endodontics - Remote Learning",
    task: "Module 3 Quiz — Canal Anatomy",
    status: "Due Soon",
    tone: "soon" as const,
    due: "Friday, Aug 14",
  },
  {
    course: "Foundations of Endodontics - Immersive Residency",
    task: "Workbook Submission — Access Cavity",
    status: "In Progress",
    tone: "progress" as const,
    due: "Wednesday, Aug 19",
  },
  {
    course: "Dental Implants Bootcamp for GP",
    task: "Pre-assessment Questionnaire",
    status: "Upcoming",
    tone: "upcoming" as const,
    due: "Saturday, Aug 22",
  },
];

const tabs: { id: Filter; label: string }[] = [
  { id: "all", label: "All Courses" },
  { id: "progress", label: "In Progress" },
  { id: "completed", label: "Completed" },
];

function statusClass(tone: (typeof schedule)[number]["tone"]) {
  if (tone === "soon") return "bg-[#E5F8F0] text-[#2F5F75]";
  if (tone === "progress") return "bg-[#F8F1E5] text-[#8A6A2F]";
  return "bg-[#F4F7F8] text-[#777779]";
}

export default function StudentCourses() {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = useMemo(() => {
    if (filter === "all") return courses;
    if (filter === "completed") return courses.filter((c) => c.progress >= 100);
    return courses.filter((c) => c.progress < 100);
  }, [filter]);

  return (
    <StudentDashboardShell>
      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-6 sm:py-7 md:py-8 w-full min-w-0 flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="min-w-0">
            <h1 className="text-[#2F5F75] font-semi_bold_24pt text-[26px] sm:text-[30px] leading-tight tracking-tight">
              My Courses
            </h1>
            <p className="mt-1.5 text-[#777779] font-regular_18pt text-[14px] sm:text-[15px] leading-relaxed">
              Manage and track your enrolled dental training programs.
            </p>
          </div>
          <Link
            href="/courses"
            className="inline-flex items-center justify-center self-start bg-[#3A738D] hover:bg-[#2F5F75] text-white px-5 py-2.5 rounded-[12px] font-inter-medium_18pt text-[14px] transition-colors flex-shrink-0"
          >
            Browse Catalog
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-full font-inter-medium_18pt text-[13px] sm:text-[14px] transition-colors ${
                  filter === tab.id
                    ? "bg-[#3A738D] text-white"
                    : "bg-white border border-[#D5DEE2] text-[#777779] hover:text-[#2F5F75]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <label className="relative inline-flex items-center self-start sm:self-auto">
            <span className="sr-only">Sort courses</span>
            <select
              defaultValue="recent"
              className="appearance-none bg-white border border-[#D5DEE2] text-[#2F5F75] font-regular_18pt text-[13px] rounded-full pl-4 pr-9 py-2 outline-none cursor-pointer"
            >
              <option value="recent">Sort: Recent Activity</option>
              <option value="progress">Sort: Progress</option>
              <option value="title">Sort: Title</option>
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

        {visible.length === 0 ? (
          <div
            className={`bg-white border border-[#D5DEE2] rounded-[20px] px-6 py-16 text-center ${cardShadow}`}
          >
            <p className="text-[#2F5F75] font-semi_bold_24pt text-[16px] mb-1">
              No courses in this view
            </p>
            <p className="text-[#777779] font-regular_18pt text-[14px]">
              Completed programs will show up here once you finish a course.
            </p>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row md:flex-wrap gap-6 w-full min-w-0">
            {visible.map((course) => (
              <article
                key={course.id}
                className={`flex flex-col min-w-0 w-full md:w-[calc(50%-0.75rem)] xl:w-[calc(33.333%-1rem)] bg-white border border-[#D5DEE2] rounded-[20px] overflow-hidden ${cardShadow}`}
              >
                <div className="relative h-[168px] w-full bg-[#E8F1F5]">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="flex flex-col flex-1 p-5 sm:p-6">
                  <h2 className="text-[#2F5F75] font-semi_bold_24pt text-[16px] sm:text-[17px] leading-snug mb-1.5">
                    {course.title}
                  </h2>
                  <p className="text-[#777779] font-regular_18pt text-[13px] mb-5">
                    {course.modules} modules
                  </p>

                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="text-[#777779] font-regular_18pt text-[13px]">
                      Course Progress
                    </span>
                    <span className="text-[#2F5F75] font-inter-medium_18pt text-[13px]">
                      {course.progress}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-[#E9EDF2] overflow-hidden mb-5">
                    <div
                      className="h-full rounded-full bg-[#3A738D]"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>

                  <Link
                    href={course.href}
                    className="mt-auto inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-[12px] font-inter-medium_18pt text-[14px] transition-colors bg-white border border-[#D5DEE2] text-[#2F5F75] hover:bg-[#5ECAA0] hover:border-[#5ECAA0] hover:text-[#2F5F75]"
                  >
                    {course.progress === 0 ? "Start Course" : "Continue Learning"}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        <section
          className={`bg-white border border-[#D5DEE2] rounded-[20px] sm:rounded-[24px] p-5 sm:p-6 ${cardShadow}`}
        >
          <div className="flex items-center justify-between gap-3 mb-5">
            <h2 className="text-[#2F5F75] font-semi_bold_24pt text-[17px] sm:text-[18px] leading-snug">
              Upcoming Schedule & Deadlines
            </h2>
            <span className="inline-flex items-center rounded-full bg-[#E5F8F0] text-[#2F5F75] font-inter-medium_18pt text-[12px] px-3 py-1 flex-shrink-0">
              3 Urgent
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 px-1 pb-3 border-b border-[#D5DEE2] text-[#777779] font-inter-medium_18pt text-[11px] tracking-[0.12em] uppercase">
            <span className="flex-[1.4] min-w-0">Course</span>
            <span className="flex-1 min-w-0">Task/Assignment</span>
            <span className="w-[120px] flex-shrink-0">Status</span>
            <span className="w-[140px] flex-shrink-0 text-right">Due Date</span>
          </div>

          <ul className="flex flex-col">
            {schedule.map((row, index) => (
              <li
                key={row.task}
                className={`flex flex-col md:flex-row md:items-center gap-2 md:gap-4 py-4 ${
                  index < schedule.length - 1 ? "border-b border-[#D5DEE2]" : "pb-0"
                }`}
              >
                <span className="flex-[1.4] min-w-0 text-[#2F5F75] font-inter-medium_18pt text-[14px] leading-snug">
                  {row.course}
                </span>
                <span className="flex-1 min-w-0 text-[#777779] font-regular_18pt text-[14px] leading-snug">
                  {row.task}
                </span>
                <span className="w-full md:w-[120px] flex-shrink-0">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-1 font-inter-medium_18pt text-[12px] ${statusClass(row.tone)}`}
                  >
                    {row.status}
                  </span>
                </span>
                <span className="w-full md:w-[140px] flex-shrink-0 md:text-right text-[#777779] font-regular_18pt text-[13px]">
                  {row.due}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </StudentDashboardShell>
  );
}

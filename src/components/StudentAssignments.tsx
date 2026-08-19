"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import StudentDashboardShell from "@/components/StudentDashboardShell";

const cardShadow = "shadow-[0_8px_30px_rgba(47,95,117,0.06)]";
const card = `bg-white border border-[#D5DEE2] rounded-[20px] ${cardShadow}`;

type Filter = "all" | "pending" | "submitted" | "graded";
type AssignmentStatus = "pending" | "submitted" | "graded";

const metrics = [
  {
    label: "Total Assignments",
    value: "24",
    sub: "Over active curriculum",
    progress: 100,
  },
  {
    label: "Pending",
    value: "06",
    sub: "Awaiting completion",
    progress: 25,
  },
  {
    label: "Submitted",
    value: "08",
    sub: "Awaiting grade evaluation",
    progress: 33,
  },
  {
    label: "Graded",
    value: "10",
    sub: "Avg. Grade evaluation 87%",
    progress: 42,
    badge: "Good",
  },
];

const assignments = [
  {
    id: "case-analysis",
    title: "Endodontic Case Analysis Report",
    course: "Foundations of Endodontics - Remote Learning",
    dueLabel: "In 2 days",
    status: "pending" as AssignmentStatus,
  },
  {
    id: "imaging-diagnosis",
    title: "Imaging in Endodontic Diagnosis",
    course: "Foundations of Endodontics - Remote Learning",
    dueLabel: "Submitted",
    status: "submitted" as AssignmentStatus,
  },
  {
    id: "access-cavity",
    title: "Access Cavity Recognition Video",
    course: "Foundations of Endodontics - Immersive Residency",
    dueLabel: "Completed",
    status: "graded" as AssignmentStatus,
  },
  {
    id: "molar-case",
    title: "Case Submission: Molar #30",
    course: "Foundations of Endodontics - Immersive Residency",
    dueLabel: "Completed",
    status: "graded" as AssignmentStatus,
  },
  {
    id: "module-10",
    title: "Module 10 Knowledge Assessment",
    course: "Foundations of Endodontics - Remote Learning",
    dueLabel: "Completed",
    status: "graded" as AssignmentStatus,
  },
];

const deadlines = [
  {
    day: "15",
    month: "OCT",
    title: "Endodontic Case Report",
    time: "9:00 AM",
    urgent: true,
  },
  {
    day: "18",
    month: "OCT",
    title: "Module 10 Online Quiz",
    time: "11:59 PM",
    urgent: false,
  },
  {
    day: "22",
    month: "OCT",
    title: "Workshop Feedback Form",
    time: "5:00 PM",
    urgent: false,
  },
];

const studyTips = [
  "Review rubrics before starting each assignment.",
  "Submit drafts early for instructor feedback.",
  "Keep clinical notes organized by module.",
];

const tabs: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "pending", label: "Pending" },
  { id: "submitted", label: "Submitted" },
  { id: "graded", label: "Graded" },
];

function statusBadge(status: AssignmentStatus) {
  if (status === "pending") {
    return "bg-[#F8F1E5] text-[#8A6A2F]";
  }
  if (status === "submitted") {
    return "bg-[#3A738D] text-white";
  }
  return "bg-[#E5F8F0] text-[#2F5F75]";
}

function statusLabel(status: AssignmentStatus) {
  if (status === "pending") return "Pending";
  if (status === "submitted") return "Submitted";
  return "Graded";
}

export default function StudentAssignments() {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = useMemo(() => {
    if (filter === "all") return assignments;
    return assignments.filter((a) => a.status === filter);
  }, [filter]);

  return (
    <StudentDashboardShell>
      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-6 sm:py-7 md:py-8 w-full min-w-0 flex flex-col gap-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div className="min-w-0">
            <h1 className="text-[#2F5F75] font-semi_bold_24pt text-[26px] sm:text-[30px] leading-tight tracking-tight">
              Assignments
            </h1>
            <p className="mt-1.5 text-[#777779] font-regular_18pt text-[14px] sm:text-[15px] leading-relaxed">
              Track and manage your course assignments and submissions
            </p>
          </div>

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
                {"badge" in m && m.badge && (
                  <span className="inline-flex items-center rounded-full bg-[#E5F8F0] text-[#2F5F75] font-inter-medium_18pt text-[11px] px-2.5 py-0.5 flex-shrink-0">
                    {m.badge}
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

        <div className="flex flex-col xl:flex-row gap-6 w-full min-w-0 xl:items-start">
          <section className={`${card} flex-1 min-w-0 p-5 sm:p-6`}>
            <div className="flex items-center gap-2.5 mb-5">
              <h2 className="text-[#2F5F75] font-semi_bold_24pt text-[17px] sm:text-[18px] leading-snug">
                Active Assignments
              </h2>
              <span className="inline-flex items-center rounded-full bg-[#F4F7F8] border border-[#D5DEE2] text-[#777779] font-inter-medium_18pt text-[12px] px-2.5 py-0.5">
                {visible.length} items
              </span>
            </div>

            <div className="hidden md:grid grid-cols-[1.6fr_0.7fr_0.6fr_0.5fr] gap-4 px-1 pb-3 border-b border-[#D5DEE2] text-[#777779] font-inter-medium_18pt text-[11px] tracking-[0.12em] uppercase">
              <span>Assignment</span>
              <span>Due date</span>
              <span>Status</span>
              <span className="text-right">Action</span>
            </div>

            {visible.length === 0 ? (
              <p className="py-10 text-center text-[#777779] font-regular_18pt text-[14px]">
                No assignments in this view.
              </p>
            ) : (
              <ul className="flex flex-col">
                {visible.map((row, index) => (
                  <li
                    key={row.id}
                    className={`flex flex-col md:grid md:grid-cols-[1.6fr_0.7fr_0.6fr_0.5fr] md:items-center gap-3 md:gap-4 py-4 ${
                      index < visible.length - 1 ? "border-b border-[#D5DEE2]" : "pb-0"
                    }`}
                  >
                    <div className="min-w-0">
                      <p className="text-[#2F5F75] font-semi_bold_24pt text-[14px] sm:text-[15px] leading-snug">
                        {row.title}
                      </p>
                      <p className="text-[#777779] font-regular_18pt text-[13px] leading-snug mt-0.5">
                        {row.course}
                      </p>
                    </div>

                    <div className="min-w-0">
                      <span className="md:hidden text-[#777779] font-regular_18pt text-[11px] uppercase tracking-wide">
                        Due date
                      </span>
                      <p className="text-[#777779] font-regular_18pt text-[13px]">
                        {row.dueLabel}
                      </p>
                    </div>

                    <div>
                      <span className="md:hidden text-[#777779] font-regular_18pt text-[11px] uppercase tracking-wide">
                        Status
                      </span>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-1 font-inter-medium_18pt text-[12px] ${statusBadge(row.status)}`}
                      >
                        {statusLabel(row.status)}
                      </span>
                    </div>

                    <div className="md:text-right">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center w-full md:w-auto py-2 px-4 rounded-[10px] font-inter-medium_18pt text-[13px] transition-colors bg-white border border-[#D5DEE2] text-[#2F5F75] hover:bg-[#5ECAA0] hover:border-[#5ECAA0]"
                      >
                        View Details
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <aside className="w-full xl:w-[320px] xl:flex-shrink-0 flex flex-col gap-6 min-w-0">
            <section className={`${card} p-5 sm:p-6`}>
              <h2 className="text-[#2F5F75] font-semi_bold_24pt text-[17px] sm:text-[18px] leading-snug mb-5">
                Upcoming Deadlines
              </h2>
              <ul className="flex flex-col gap-4">
                {deadlines.map((item) => (
                  <li key={item.title} className="flex items-center gap-3">
                    <div
                      className={`flex flex-col items-center justify-center w-[52px] h-[52px] rounded-[10px] flex-shrink-0 ${
                        item.urgent
                          ? "bg-[#3A738D] text-white"
                          : "bg-white border border-[#D5DEE2] text-[#2F5F75]"
                      }`}
                    >
                      <span className="font-semi_bold_24pt text-[16px] leading-none">
                        {item.day}
                      </span>
                      <span className="font-inter-medium_18pt text-[10px] tracking-wide mt-0.5">
                        {item.month}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[#2F5F75] font-semi_bold_24pt text-[14px] leading-snug">
                        {item.title}
                      </p>
                      <p className="text-[#777779] font-regular_18pt text-[12px]">
                        {item.time}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-[#E8F1F5] border border-[#D5DEE2] rounded-[20px] p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3 mb-4">
                <h2 className="text-[#2F5F75] font-semi_bold_24pt text-[17px] leading-snug">
                  Study Tips
                </h2>
                <span className="inline-flex items-center rounded-full bg-[#E5F8F0] text-[#2F5F75] font-inter-medium_18pt text-[11px] px-2.5 py-0.5">
                  Quick
                </span>
              </div>
              <ul className="flex flex-col gap-2.5 mb-5">
                {studyTips.map((tip) => (
                  <li
                    key={tip}
                    className="flex items-start gap-2 text-[#777779] font-regular_18pt text-[13px] leading-relaxed"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#3A738D] flex-shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
              <Link
                href="/resources"
                className="inline-flex items-center gap-1 text-[#3A738D] hover:text-[#2F5F75] font-inter-medium_18pt text-[13px] transition-colors"
              >
                View full study guide
                <span aria-hidden="true">→</span>
              </Link>
            </section>
          </aside>
        </div>
      </div>
    </StudentDashboardShell>
  );
}

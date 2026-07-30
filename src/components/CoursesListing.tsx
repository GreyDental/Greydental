"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Search, Star } from "lucide-react";

type Tab = "Courses" | "Workshops" | "Webinars" | "All";

const tabs: Tab[] = ["Courses", "Workshops", "Webinars", "All"];

const allCourses = [
  {
    id: "endo-remote",
    image: "/Course_Details/endo.jpg",
    badge: "REMOTE",
    title: "Foundations of Endodontics - Remote Learning",
    meta: "6 weeks · Remote Certificate",
    rating: 4.9,
    reviews: 124,
    price: "$299.00",
    href: "/courses/endodontics-remote",
    type: "Courses" as Tab,
    specialty: "Endodontics",
    format: "Remote",
  },
  {
    id: "endo-residency",
    image: "/Course_Details/immersive.jpg",
    badge: "RESIDENCY",
    title: "Foundations of Endodontics - Immersive Residency",
    meta: "8 weeks · 2-day Residency",
    rating: 4.8,
    reviews: 89,
    price: "$450.00",
    href: "/courses/endodontics-residency",
    type: "Courses" as Tab,
    specialty: "Endodontics",
    format: "Residency",
  },
  {
    id: "implants-bootcamp",
    image: "/Course_Details/bootcamp.jpg",
    badge: "HYBRID",
    title: "Dental Implants Bootcamp for General Practitioner",
    meta: "8 weeks · Hybrid Certificate",
    rating: 4.8,
    reviews: 215,
    price: "$185.00",
    href: "/courses/implants-bootcamp",
    type: "Courses" as Tab,
    specialty: "Implantology",
    format: "Hybrid",
  },
];

export default function CoursesListing() {
  const [activeTab, setActiveTab] = useState<Tab>("Courses");
  const [query, setQuery] = useState("");
  const [specialty, setSpecialty] = useState("All specialties");
  const [format, setFormat] = useState("All formats");

  const filtered = useMemo(() => {
    return allCourses.filter((course) => {
      const matchesTab = activeTab === "All" || course.type === activeTab;
      const matchesQuery =
        !query.trim() ||
        course.title.toLowerCase().includes(query.trim().toLowerCase());
      const matchesSpecialty =
        specialty === "All specialties" || course.specialty === specialty;
      const matchesFormat =
        format === "All formats" || course.format === format;
      return matchesTab && matchesQuery && matchesSpecialty && matchesFormat;
    });
  }, [activeTab, query, specialty, format]);

  const clearAll = () => {
    setQuery("");
    setSpecialty("All specialties");
    setFormat("All formats");
    setActiveTab("Courses");
  };

  const showCourseFilters = activeTab === "Courses" || activeTab === "All";

  return (
    <section className={`w-full bg-white pt-12 sm:pt-16 md:pt-20 ${showCourseFilters ? "pb-12 sm:pb-16 md:pb-20" : "pb-6 sm:pb-8"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col">
        {/* Tabs */}
        <div className="flex flex-row flex-wrap items-center gap-6 sm:gap-8 border-b border-[#E5E7EB]">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-[15px] font-inter-medium_18pt transition-colors relative ${
                activeTab === tab ? "text-[#00173C]" : "text-[#6B7585]"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute left-0 right-0 -bottom-px h-[3px] bg-[#41F39B] rounded-full" />
              )}
            </button>
          ))}
        </div>

        {showCourseFilters && (
          <>
            {/* Subtext */}
            <p className="text-[#6B7585] font-regular_18pt text-[14px] sm:text-[15px] leading-relaxed mt-5 sm:mt-6 mb-6 sm:mb-8 max-w-3xl">
              Structured, accredited programs with remote or residency completion
              tracks designed for deep specialization.
            </p>

            {/* Search / filter bar */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-3 sm:gap-4 bg-[#F2FAFF] border border-[#F3F4F6] rounded-[12px] p-3 sm:p-4 mb-8 sm:mb-10">
              <div className="flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-[8px] px-3 py-2.5 flex-1 min-w-0">
                <Search className="w-4 h-4 text-[#6B7585] flex-shrink-0" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search courses..."
                  className="w-full min-w-0 outline-none bg-transparent text-[14px] sm:text-[15px] font-regular_18pt text-[#00173C] placeholder:text-[#6B7585]"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:items-center">
                <div className="relative">
                  <select
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    className="appearance-none w-full sm:w-auto bg-white border border-[#E5E7EB] rounded-[8px] pl-3 pr-9 py-2.5 text-[14px] sm:text-[15px] font-regular_18pt text-[#00173C] outline-none cursor-pointer"
                  >
                    <option>All specialties</option>
                    <option>Endodontics</option>
                    <option>Implantology</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7585]" />
                </div>

                <div className="relative">
                  <select
                    value={format}
                    onChange={(e) => setFormat(e.target.value)}
                    className="appearance-none w-full sm:w-auto bg-white border border-[#E5E7EB] rounded-[8px] pl-3 pr-9 py-2.5 text-[14px] sm:text-[15px] font-regular_18pt text-[#00173C] outline-none cursor-pointer"
                  >
                    <option>All formats</option>
                    <option>Remote</option>
                    <option>Residency</option>
                    <option>Hybrid</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7585]" />
                </div>

                <button
                  type="button"
                  onClick={clearAll}
                  className="text-[#6B7585] font-regular_18pt text-[14px] sm:text-[15px] hover:text-[#00173C] transition-colors self-start sm:self-center whitespace-nowrap"
                >
                  Clear all
                </button>
              </div>
            </div>

            {/* Cards */}
            <div className="flex flex-col md:flex-row md:flex-wrap gap-5 sm:gap-6">
              {filtered.map((course) => (
                <article
                  key={course.id}
                  className="flex flex-col w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-white border border-[#E5E7EB] rounded-[16px] overflow-hidden shadow-[0_4px_20px_rgba(0,23,60,0.04)]"
                >
                  <div className="relative w-full aspect-[16/10]">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-white/95 border border-white/80 text-[#00173C] text-[11px] font-semi_bold_24pt tracking-[0.08em] uppercase px-3 py-1 rounded-full">
                      {course.badge}
                    </span>
                  </div>

                  <div className="flex flex-col flex-grow p-5 sm:p-6">
                    <h3 className="text-[17px] sm:text-[18px] font-semi_bold_24pt text-[#08386D] leading-snug mb-2">
                      {course.title}
                    </h3>
                    <p className="text-[#6B7585] font-regular_18pt text-[13px] sm:text-[14px] mb-3">
                      {course.meta}
                    </p>

                    <div className="flex items-center gap-1.5 mb-5">
                      <Star className="w-3.5 h-3.5 fill-[#41F39B] text-[#41F39B]" />
                      <span className="text-[#111F39] font-inter-medium_18pt text-[13px] sm:text-[14px]">
                        {course.rating.toFixed(1)} ({course.reviews})
                      </span>
                    </div>

                    <div className="mt-auto pt-4 border-t border-[#E5E7EB] flex items-center justify-between gap-3">
                      <span className="text-[#111F39] font-semi_bold_24pt text-[16px] sm:text-[17px]">
                        {course.price}
                      </span>
                      <Link
                        href={course.href}
                        className="inline-flex items-center gap-1.5 text-[#08386D] font-inter-medium_18pt text-[14px] sm:text-[15px] hover:opacity-80 transition-opacity"
                      >
                        Enroll Now
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}

              {filtered.length === 0 && (
                <p className="text-[#6B7585] font-regular_18pt text-[15px] py-8">
                  No courses match your filters.
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

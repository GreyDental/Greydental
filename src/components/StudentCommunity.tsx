"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import StudentDashboardShell from "@/components/StudentDashboardShell";

const DASH = "/Community_Dash";
const cardShadow = "shadow-[0_8px_30px_rgba(47,95,117,0.06)]";
const card = `bg-white border border-[#D5DEE2] rounded-[20px] ${cardShadow}`;

function dash(name: string) {
  return `${DASH}/${name.replaceAll(" ", "%20")}`;
}

type Tab = "all" | "whatsapp" | "facebook" | "inperson";

const tabs: { id: Tab; label: string }[] = [
  { id: "all", label: "All" },
  { id: "whatsapp", label: "WhatsApp Groups" },
  { id: "facebook", label: "Facebook Groups" },
  { id: "inperson", label: "In-Person Forums" },
];

const metrics = [
  {
    label: "Active Members",
    value: "1,240",
    sub: "Online in the last 24h",
    icon: dash("IconBox.png"),
  },
  {
    label: "Community Groups",
    value: "10",
    sub: "WhatsApp & FB circles",
    icon: dash("IconBox (1).png"),
  },
  {
    label: "Discussions This Month",
    value: "348",
    sub: "Active cases & topics",
    icon: dash("IconBox (2).png"),
  },
  {
    label: "Your Contributions",
    value: "06",
    sub: "Helpful posts & replies",
    icon: dash("IconBox (3).png"),
  },
];

const courseGroups = [
  {
    title: "Endo Foundation Group",
    course: "Foundations of Endodontics",
    members: 86,
    activity: "Active now",
    live: true,
    channel: "whatsapp" as Tab,
  },
  {
    title: "Implant Bootcamp Group",
    course: "Dental Implants Bootcamp",
    members: 124,
    activity: "Active 2h ago",
    live: false,
    channel: "whatsapp" as Tab,
  },
  {
    title: "CAD-CAM Workshop Group",
    course: "CAD-CAM Digital Dentistry",
    members: 52,
    activity: "Active 5h ago",
    live: false,
    channel: "facebook" as Tab,
  },
];

const circles = [
  {
    title: "Grey Endo Circle",
    description: "Endodontic discussions, cases and resources.",
    members: 312,
    invite: false,
  },
  {
    title: "Grey Residency Circle",
    description: "Residency guidance and peer support.",
    members: 148,
    invite: false,
  },
  {
    title: "Grey Implant Circle",
    description: "Implantology discussions and treatment planning.",
    members: 264,
    invite: false,
  },
  {
    title: "Grey CAD-CAM Circle",
    description: "Digital dentistry and CAD-CAM workflows.",
    members: 97,
    invite: false,
  },
  {
    title: "Grey Documentation Circle",
    description: "Documentation techniques and templates.",
    members: 81,
    invite: false,
  },
  {
    title: "Grey Photography Circle",
    description: "Clinical photography tips and feedback.",
    members: 119,
    invite: false,
  },
  {
    title: "Grey Webinar Lounge",
    description: "Upcoming webinars, recordings and live sessions.",
    members: 430,
    invite: false,
  },
  {
    title: "Grey Referral Network",
    description: "Professional referrals and collaborations.",
    members: 205,
    invite: false,
  },
  {
    title: "Grey Forums",
    description: "In-person networking and discussion forums.",
    members: 76,
    invite: false,
  },
  {
    title: "Grey Mastermind",
    description: "Invite-only community for experienced professionals.",
    members: 24,
    invite: true,
  },
];

const memberships = [
  {
    name: "Student",
    detail: "1 contribution/month, 1 engagement/month",
    badge: "Free" as const,
  },
  {
    name: "Contributor",
    detail: "1 contribution/month, 2 engagements/month",
    badge: "Free" as const,
  },
  {
    name: "Course Graduate",
    detail: "1 contribution/month, 1 engagement/month",
    badge: "Free" as const,
  },
  {
    name: "Starter Membership",
    detail: "Full-community lounge access, premium updates",
    badge: "Paid" as const,
  },
  {
    name: "Mastermind",
    detail: "Invite-only peer group with exclusive advisory content",
    badge: "Invite" as const,
  },
  {
    name: "Grey Forums In-Person",
    detail: "Free & Paid physical event networking access.",
    badge: null,
  },
];

const channels = [
  {
    id: "whatsapp" as Tab,
    title: "WhatsApp Community",
    description: "Updates and support groups for discussions or queries",
    cta: "Join Community",
    href: "/community",
    icon: dash("Whatsapp-Icon Streamline Svg-Logos (1).png"),
  },
  {
    id: "facebook" as Tab,
    title: "Facebook Community",
    description: "Case sharing, work sharing, and peer feedback",
    cta: "Join Group",
    href: "/community",
    icon: dash("Facebook Streamline Svg-Logos.png"),
  },
  {
    id: "inperson" as Tab,
    title: "In-Person Forums",
    description: "Networking forums and discussion forums",
    cta: "View Schedule",
    href: "/workshops",
    icon: dash("IconBox.png"),
  },
];

function badgeClass(badge: "Free" | "Paid" | "Invite") {
  if (badge === "Paid") return "bg-[#3A738D] text-white";
  if (badge === "Invite") return "bg-[#E5F8F0] text-[#2F5F75]";
  return "bg-[#E8F1F5] text-[#3A738D]";
}

const waMetrics = [
  {
    label: "Total WhatsApp Groups",
    value: "24",
    sub: "Across all disciplines",
    icon: dash("IconBox (2).png"),
  },
  {
    label: "Active Members",
    value: "890",
    sub: "Engaged in clinical cases",
    icon: dash("IconBox.png"),
  },
  {
    label: "Messages This Week",
    value: "2,150",
    sub: "Shares & peer feedback",
    icon: dash("message-square.png"),
  },
  {
    label: "Your Groups",
    value: "05",
    sub: "Active chats you joined",
    icon: dash("IconBox (3).png"),
  },
];

const waGroups = [
  {
    title: "Endo Case Discussions",
    course: "Foundations of Endodontics",
    members: 86,
    activity: "Active now",
    live: true,
  },
  {
    title: "Implant Study Group",
    course: "Dental Implants Bootcamp",
    members: 124,
    activity: "Active 5m ago",
    live: true,
  },
  {
    title: "CAD-CAM Tech Circle",
    course: "CAD-CAM Digital Dentistry",
    members: 52,
    activity: "Active 2h ago",
    live: false,
  },
];

const waRecommended = [
  {
    title: "Dental Photography Tips",
    tag: "Clinical Skills",
    description: "Lighting, isolation, and case documentation.",
  },
  {
    title: "Prosthodontics Network",
    tag: "Specialty",
    description: "Crown, bridge, and full-arch treatment talk.",
  },
  {
    title: "Pediatric Dentistry Hub",
    tag: "Specialty",
    description: "Behaviour management and paediatric cases.",
  },
  {
    title: "Dental Lab Collaborations",
    tag: "Network",
    description: "Lab communication, shade, and digital files.",
  },
];

const waGuidelines = [
  "Never share identifiable patient data. Follow HIPAA/GDPR at all times.",
  "Do not solicit diagnoses or treatment plans for active patients.",
  "Keep discussion professional, evidence-based, and respectful.",
];

function MetricCards({
  items,
}: {
  items: { label: string; value: string; sub: string; icon: string }[];
}) {
  return (
    <section className="flex flex-col sm:flex-row flex-wrap xl:flex-nowrap gap-4 w-full min-w-0">
      {items.map((m) => (
        <article
          key={m.label}
          className={`flex flex-col flex-1 min-w-0 sm:min-w-[calc(50%-0.5rem)] xl:min-w-0 ${card} p-5`}
        >
          <div className="flex items-start justify-between gap-2 mb-3">
            <span className="text-[#777779] font-regular_18pt text-[13px]">{m.label}</span>
            <Image
              src={m.icon}
              alt=""
              width={32}
              height={32}
              unoptimized
              className="w-8 h-8 flex-shrink-0 object-contain"
            />
          </div>
          <p className="text-[#2F5F75] font-semi_bold_24pt text-[28px] sm:text-[30px] leading-none tracking-tight mb-1.5">
            {m.value}
          </p>
          <p className="text-[#777779] font-regular_18pt text-[12px] sm:text-[13px]">{m.sub}</p>
        </article>
      ))}
    </section>
  );
}

function WhatsAppTab() {
  return (
    <>
      <MetricCards items={waMetrics} />

      <section>
        <h2 className="text-[#2F5F75] font-semi_bold_24pt text-[18px] sm:text-[20px] leading-snug mb-4">
          Your WhatsApp Groups
        </h2>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-4">
          {waGroups.map((group) => (
            <article
              key={group.title}
              className={`flex flex-col min-w-0 w-full md:w-[calc(50%-0.5rem)] xl:w-[calc(33.333%-0.67rem)] ${card} p-5`}
            >
              <Image
                src={dash("Whatsapp-Icon Streamline Svg-Logos (1).png")}
                alt=""
                width={36}
                height={36}
                unoptimized
                className="w-9 h-9 object-contain mb-4"
              />
              <h3 className="text-[#2F5F75] font-semi_bold_24pt text-[16px] leading-snug">
                {group.title}
              </h3>
              <p className="text-[#777779] font-regular_18pt text-[13px] mt-1 mb-4">
                {group.course}
              </p>
              <div className="flex items-center justify-between gap-2 mb-5 text-[12px] font-regular_18pt text-[#777779]">
                <span className="inline-flex items-center gap-1.5">
                  <Image
                    src={dash("IconBox.png")}
                    alt=""
                    width={14}
                    height={14}
                    unoptimized
                    className="w-3.5 h-3.5 object-contain"
                  />
                  {group.members} members
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      group.live ? "bg-[#5ECAA0]" : "bg-[#D5DEE2]"
                    }`}
                  />
                  {group.activity}
                </span>
              </div>
              <a
                href="https://wa.me"
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-[12px] font-inter-medium_18pt text-[14px] bg-[#3A738D] hover:bg-[#2F5F75] text-white transition-colors"
              >
                Open WhatsApp Chat
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <div className="flex flex-col xl:flex-row gap-6 w-full min-w-0 xl:items-start">
        <section className={`${card} flex-1 min-w-0 p-5 sm:p-6`}>
          <h2 className="text-[#2F5F75] font-semi_bold_24pt text-[17px] sm:text-[18px] leading-snug mb-4">
            Recommended WhatsApp Groups
          </h2>
          <ul className="flex flex-col">
            {waRecommended.map((item, index) => (
              <li
                key={item.title}
                className={`flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 py-4 ${
                  index < waRecommended.length - 1 ? "border-b border-[#D5DEE2]" : "pb-0"
                } ${index === 0 ? "pt-0" : ""}`}
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E5F8F0] flex-shrink-0">
                  <Image
                    src={dash("message-circle.png")}
                    alt=""
                    width={18}
                    height={18}
                    unoptimized
                    className="w-[18px] h-[18px] object-contain"
                  />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-[#2F5F75] font-semi_bold_24pt text-[15px] leading-snug">
                      {item.title}
                    </h3>
                    <span className="inline-flex items-center rounded-full bg-[#E8F1F5] text-[#3A738D] font-inter-medium_18pt text-[10px] tracking-wide uppercase px-2 py-0.5">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-[#777779] font-regular_18pt text-[13px] mt-0.5">
                    {item.description}
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center self-stretch sm:self-auto px-4 py-2 rounded-[10px] font-inter-medium_18pt text-[13px] bg-white border border-[#D5DEE2] text-[#2F5F75] hover:bg-[#5ECAA0] hover:border-[#5ECAA0] transition-colors flex-shrink-0"
                >
                  Join Group
                </button>
              </li>
            ))}
          </ul>
        </section>

        <aside className="w-full xl:w-[300px] xl:flex-shrink-0 flex flex-col gap-6">
          <section className={`${card} p-5 sm:p-6`}>
            <div className="flex items-center gap-2.5 mb-4">
              <MintBadge src={dash("Vector.png")} size={28} />
              <h2 className="text-[#2F5F75] font-semi_bold_24pt text-[17px] leading-snug">
                Group Guidelines
              </h2>
            </div>
            <ul className="flex flex-col gap-3">
              {waGuidelines.map((rule) => (
                <li
                  key={rule}
                  className="flex items-start gap-2 text-[#777779] font-regular_18pt text-[13px] leading-relaxed"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3A738D] flex-shrink-0" />
                  {rule}
                </li>
              ))}
            </ul>
          </section>

          <section className={`${card} p-5 sm:p-6`}>
            <h2 className="text-[#2F5F75] font-semi_bold_24pt text-[17px] leading-snug mb-4">
              Your Engagement
            </h2>
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="text-[#777779] font-regular_18pt text-[13px]">WhatsApp Shares</span>
              <span className="text-[#2F5F75] font-semi_bold_24pt text-[15px]">14</span>
            </div>
            <div className="flex items-center justify-between gap-3 mb-4">
              <span className="text-[#777779] font-regular_18pt text-[13px]">
                Responses Received
              </span>
              <span className="text-[#2F5F75] font-semi_bold_24pt text-[15px]">45</span>
            </div>
            <div className="pt-4 border-t border-[#D5DEE2]">
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="text-[#777779] font-regular_18pt text-[13px]">
                  Community Reputation
                </span>
                <span className="text-[#2F5F75] font-inter-medium_18pt text-[13px]">
                  Active peer
                </span>
              </div>
              <div className="h-2 rounded-full bg-[#E9EDF2] overflow-hidden">
                <div className="h-full w-[78%] rounded-full bg-[#3A738D]" />
              </div>
            </div>
          </section>
        </aside>
      </div>
    </>
  );
}

const fbMetrics = [
  {
    label: "Total Facebook Groups",
    value: "16",
    sub: "Across study branches",
    icon: dash("facebook (1).png"),
  },
  {
    label: "Active Members",
    value: "1,450",
    sub: "In online networks",
    icon: dash("IconBox.png"),
  },
  {
    label: "Posts This Week",
    value: "340",
    sub: "Threads & clinical advice",
    icon: dash("message-square (1).png"),
  },
  {
    label: "Your Groups",
    value: "03",
    sub: "Communities you participate in",
    icon: dash("IconBox (3).png"),
  },
];

const fbGroups = [
  {
    title: "Aesthetic Dentistry QA",
    course: "Smile design and composite cases",
    members: 210,
    activity: "Active now",
    live: true,
  },
  {
    title: "Orthodontics Forum",
    course: "Alignment planning and retention",
    members: 164,
    activity: "Active 20m ago",
    live: true,
  },
  {
    title: "Prosthetic Clinical Hub",
    course: "Crowns, bridges, and full-arch work",
    members: 98,
    activity: "Active 3h ago",
    live: false,
  },
];

const fbRecommended = [
  {
    title: "Pediatric Dental Network",
    tag: "Pedodontics",
    description: "Behaviour, interceptive care, and parent communication.",
    members: 186,
  },
  {
    title: "Maxillofacial Surgery Desk",
    tag: "Surgery",
    description: "Extractions, implants, and post-op case sharing.",
    members: 94,
  },
];

function MintBadge({
  src,
  size = 32,
  shape = "circle",
  whiteGlyph = false,
}: {
  src: string;
  size?: number;
  shape?: "circle" | "square";
  whiteGlyph?: boolean;
}) {
  const inner = Math.round(size * 0.56);
  return (
    <span
      className={`inline-flex items-center justify-center bg-[#E5F8F0] flex-shrink-0 ${
        shape === "circle" ? "rounded-full" : "rounded-[10px]"
      }`}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt=""
        width={inner}
        height={inner}
        unoptimized
        className={`object-contain ${whiteGlyph ? "brightness-0 invert" : ""}`}
        style={{ width: inner, height: inner }}
      />
    </span>
  );
}

function FacebookMark({ size = 36 }: { size?: number }) {
  const inner = Math.round(size * 0.62);
  return (
    <span
      className="inline-flex items-center justify-center rounded-full bg-[#E5F8F0] flex-shrink-0"
      style={{ width: size, height: size }}
    >
      <Image
        src={dash("facebook (1).png")}
        alt=""
        width={inner}
        height={inner}
        unoptimized
        className="object-contain"
        style={{ width: inner, height: inner }}
      />
    </span>
  );
}

function FacebookTab() {
  return (
    <>
      <section className="flex flex-col sm:flex-row flex-wrap xl:flex-nowrap gap-4 w-full min-w-0">
        {fbMetrics.map((m) => (
          <article
            key={m.label}
            className={`flex flex-col flex-1 min-w-0 sm:min-w-[calc(50%-0.5rem)] xl:min-w-0 ${card} p-5`}
          >
            <div className="flex items-start justify-between gap-2 mb-3">
              <span className="text-[#777779] font-regular_18pt text-[13px]">{m.label}</span>
              {m.label === "Total Facebook Groups" ? (
                <FacebookMark size={32} />
              ) : m.label === "Posts This Week" ? (
                <MintBadge src={dash("message-square (1).png")} size={32} />
              ) : (
                <Image
                  src={m.icon}
                  alt=""
                  width={32}
                  height={32}
                  unoptimized
                  className="w-8 h-8 flex-shrink-0 object-contain"
                />
              )}
            </div>
            <p className="text-[#2F5F75] font-semi_bold_24pt text-[28px] sm:text-[30px] leading-none tracking-tight mb-1.5">
              {m.value}
            </p>
            <p className="text-[#777779] font-regular_18pt text-[12px] sm:text-[13px]">{m.sub}</p>
          </article>
        ))}
      </section>

      <section>
        <h2 className="text-[#2F5F75] font-semi_bold_24pt text-[18px] sm:text-[20px] leading-snug mb-4">
          Your Facebook Groups
        </h2>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-4">
          {fbGroups.map((group) => (
            <article
              key={group.title}
              className={`flex flex-col min-w-0 w-full md:w-[calc(50%-0.5rem)] xl:w-[calc(33.333%-0.67rem)] ${card} p-5`}
            >
              <div className="mb-4">
                <FacebookMark size={36} />
              </div>
              <h3 className="text-[#2F5F75] font-semi_bold_24pt text-[16px] leading-snug">
                {group.title}
              </h3>
              <p className="text-[#777779] font-regular_18pt text-[13px] mt-1 mb-4">
                {group.course}
              </p>
              <div className="flex items-center justify-between gap-2 mb-5 text-[12px] font-regular_18pt text-[#777779]">
                <span className="inline-flex items-center gap-1.5">
                  <Image
                    src={dash("IconBox.png")}
                    alt=""
                    width={14}
                    height={14}
                    unoptimized
                    className="w-3.5 h-3.5 object-contain"
                  />
                  {group.members} members
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      group.live ? "bg-[#5ECAA0]" : "bg-[#D5DEE2]"
                    }`}
                  />
                  {group.activity}
                </span>
              </div>
              <a
                href="https://facebook.com/groups"
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-[12px] font-inter-medium_18pt text-[14px] bg-[#3A738D] hover:bg-[#2F5F75] text-white transition-colors"
              >
                Open Facebook Group
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <div className="flex flex-col xl:flex-row gap-6 w-full min-w-0 xl:items-start">
        <section className={`${card} flex-1 min-w-0 p-5 sm:p-6`}>
          <h2 className="text-[#2F5F75] font-semi_bold_24pt text-[17px] sm:text-[18px] leading-snug mb-4">
            Recommended Facebook Groups
          </h2>
          <ul className="flex flex-col">
            {fbRecommended.map((item, index) => (
              <li
                key={item.title}
                className={`flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 py-4 ${
                  index < fbRecommended.length - 1 ? "border-b border-[#D5DEE2]" : "pb-0"
                } ${index === 0 ? "pt-0" : ""}`}
              >
                <MintBadge src={dash("message-square (1).png")} size={40} shape="square" />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-[#2F5F75] font-semi_bold_24pt text-[15px] leading-snug">
                      {item.title}
                    </h3>
                    <span className="inline-flex items-center rounded-full bg-[#E8F1F5] text-[#3A738D] font-inter-medium_18pt text-[10px] tracking-wide uppercase px-2 py-0.5">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-[#777779] font-regular_18pt text-[13px] mt-0.5">
                    {item.description}
                  </p>
                  <p className="text-[#777779] font-regular_18pt text-[12px] mt-1">
                    {item.members} members
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center self-stretch sm:self-auto px-4 py-2 rounded-[10px] font-inter-medium_18pt text-[13px] bg-white border border-[#D5DEE2] text-[#2F5F75] hover:bg-[#5ECAA0] hover:border-[#5ECAA0] transition-colors flex-shrink-0"
                >
                  Join Group
                </button>
              </li>
            ))}
          </ul>
        </section>

        <aside className="w-full xl:w-[300px] xl:flex-shrink-0 flex flex-col gap-6">
          <section className={`${card} p-5 sm:p-6`}>
            <div className="flex items-center gap-2.5 mb-4">
              <MintBadge src={dash("Vector.png")} size={28} />
              <h2 className="text-[#2F5F75] font-semi_bold_24pt text-[17px] leading-snug">
                Group Guidelines
              </h2>
            </div>
            <ul className="flex flex-col gap-3">
              {waGuidelines.map((rule) => (
                <li
                  key={rule}
                  className="flex items-start gap-2 text-[#777779] font-regular_18pt text-[13px] leading-relaxed"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3A738D] flex-shrink-0" />
                  {rule}
                </li>
              ))}
            </ul>
          </section>

          <section className={`${card} p-5 sm:p-6`}>
            <h2 className="text-[#2F5F75] font-semi_bold_24pt text-[17px] leading-snug mb-4">
              Your Engagement
            </h2>
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="text-[#777779] font-regular_18pt text-[13px]">Facebook Posts</span>
              <span className="text-[#2F5F75] font-semi_bold_24pt text-[15px]">8</span>
            </div>
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="text-[#777779] font-regular_18pt text-[13px]">
                Comments Contributed
              </span>
              <span className="text-[#2F5F75] font-semi_bold_24pt text-[15px]">32</span>
            </div>
            <div className="flex items-center justify-between gap-3 mb-4">
              <span className="text-[#777779] font-regular_18pt text-[13px]">Shared Resources</span>
              <span className="text-[#2F5F75] font-semi_bold_24pt text-[15px]">5</span>
            </div>
            <div className="pt-4 border-t border-[#D5DEE2]">
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="text-[#777779] font-regular_18pt text-[13px]">
                  Community Reputation
                </span>
                <span className="text-[#2F5F75] font-inter-medium_18pt text-[13px]">
                  Helpful peer
                </span>
              </div>
              <div className="h-2 rounded-full bg-[#E9EDF2] overflow-hidden">
                <div className="h-full w-[75%] rounded-full bg-[#3A738D]" />
              </div>
            </div>
          </section>
        </aside>
      </div>
    </>
  );
}

const ipMetrics = [
  {
    label: "Total Forums",
    value: "12",
    sub: "Regional meetups active",
    icon: dash("map-pin.png"),
  },
  {
    label: "Registered Attendees",
    value: "512",
    sub: "Practitioners attending",
    icon: dash("users (1).png"),
  },
  {
    label: "Upcoming Events",
    value: "04",
    sub: "Scheduled this month",
    icon: dash("calendar.png"),
  },
  {
    label: "Your Forums",
    value: "02",
    sub: "Forums you are attending",
    icon: dash("award (1).png"),
  },
];

const ipForums = [
  {
    title: "Chicago Dental Circle",
    subtitle: "Metropolitan Clinical Study Club",
    meta: "Downtown Plaza, Chicago • Feb 24, 2026",
  },
  {
    title: "Houston Implant Forum",
    subtitle: "Gulf Coast Study Group",
    meta: "Medical Center, Houston • Mar 8, 2026",
  },
  {
    title: "Boston Restorative Circle",
    subtitle: "New England Clinical Club",
    meta: "Back Bay, Boston • Mar 21, 2026",
  },
];

const ipRecommended = [
  {
    title: "New York Endodontic Symposium",
    tag: "Endodontics",
    description: "Live cases, access cavities, and obturation workshops.",
    meta: "Midtown, New York • Apr 4, 2026",
  },
  {
    title: "Miami Pediatric Study Day",
    tag: "Pedodontics",
    description: "Behaviour guidance and interceptive treatment.",
    meta: "Coral Gables, Miami • Apr 12, 2026",
  },
  {
    title: "Seattle Orthodontics Forum",
    tag: "Orthodontics",
    description: "Aligner protocols and retention planning.",
    meta: "South Lake Union, Seattle • Apr 18, 2026",
  },
  {
    title: "Austin Restorative Hands-On",
    tag: "Restorative",
    description: "Composite artistry and occlusal finishing.",
    meta: "Downtown Austin • May 2, 2026",
  },
];

const ipGuidelines = [
  "Follow professional clinical and medical meeting guidelines at all times.",
  "Respect fellow attendees, speakers, and venue staff.",
  "Arrive on time and stay for the full scheduled session.",
];

function InPersonTab() {
  return (
    <>
      <section className="flex flex-col sm:flex-row flex-wrap xl:flex-nowrap gap-4 w-full min-w-0">
        {ipMetrics.map((m) => (
          <article
            key={m.label}
            className={`flex flex-col flex-1 min-w-0 sm:min-w-[calc(50%-0.5rem)] xl:min-w-0 ${card} p-5`}
          >
            <div className="flex items-start justify-between gap-2 mb-3">
              <span className="text-[#777779] font-regular_18pt text-[13px]">{m.label}</span>
              <MintBadge src={m.icon} size={32} />
            </div>
            <p className="text-[#2F5F75] font-semi_bold_24pt text-[28px] sm:text-[30px] leading-none tracking-tight mb-1.5">
              {m.value}
            </p>
            <p className="text-[#777779] font-regular_18pt text-[12px] sm:text-[13px]">{m.sub}</p>
          </article>
        ))}
      </section>

      <section>
        <h2 className="text-[#2F5F75] font-semi_bold_24pt text-[18px] sm:text-[20px] leading-snug mb-4">
          Your In-Person Forums
        </h2>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-4">
          {ipForums.map((forum) => (
            <article
              key={forum.title}
              className={`flex flex-col min-w-0 w-full md:w-[calc(50%-0.5rem)] xl:w-[calc(33.333%-0.67rem)] ${card} p-5`}
            >
              <div className="mb-4">
                <MintBadge src={dash("Icon-calendar.png")} size={36} />
              </div>
              <h3 className="text-[#2F5F75] font-semi_bold_24pt text-[16px] leading-snug">
                {forum.title}
              </h3>
              <p className="text-[#777779] font-regular_18pt text-[13px] mt-1 mb-3">
                {forum.subtitle}
              </p>
              <p className="text-[#777779] font-regular_18pt text-[12px] mb-5">{forum.meta}</p>
              <Link
                href="/workshops"
                className="mt-auto inline-flex items-center justify-center w-full py-2.5 rounded-[12px] font-inter-medium_18pt text-[14px] bg-[#3A738D] hover:bg-[#2F5F75] text-white transition-colors"
              >
                View Details
              </Link>
            </article>
          ))}
        </div>
      </section>

      <div className="flex flex-col xl:flex-row gap-6 w-full min-w-0 xl:items-start">
        <section className={`${card} flex-1 min-w-0 p-5 sm:p-6`}>
          <h2 className="text-[#2F5F75] font-semi_bold_24pt text-[17px] sm:text-[18px] leading-snug mb-4">
            Recommended Forums
          </h2>
          <ul className="flex flex-col">
            {ipRecommended.map((item, index) => (
              <li
                key={item.title}
                className={`flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 py-4 ${
                  index < ipRecommended.length - 1 ? "border-b border-[#D5DEE2]" : "pb-0"
                } ${index === 0 ? "pt-0" : ""}`}
              >
                <MintBadge src={dash("message-square (1).png")} size={40} shape="square" />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-[#2F5F75] font-semi_bold_24pt text-[15px] leading-snug">
                      {item.title}
                    </h3>
                    <span className="inline-flex items-center rounded-full bg-[#E8F1F5] text-[#3A738D] font-inter-medium_18pt text-[10px] tracking-wide uppercase px-2 py-0.5">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-[#777779] font-regular_18pt text-[13px] mt-0.5">
                    {item.description}
                  </p>
                  <p className="text-[#777779] font-regular_18pt text-[12px] mt-1">{item.meta}</p>
                </div>
                <Link
                  href="/workshops"
                  className="inline-flex items-center justify-center self-stretch sm:self-auto px-4 py-2 rounded-[10px] font-inter-medium_18pt text-[13px] bg-white border border-[#3A738D] text-[#3A738D] hover:bg-[#5ECAA0] hover:border-[#5ECAA0] hover:text-[#2F5F75] transition-colors flex-shrink-0"
                >
                  Register
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <aside className="w-full xl:w-[300px] xl:flex-shrink-0 flex flex-col gap-6">
          <section className={`${card} p-5 sm:p-6`}>
            <div className="flex items-center gap-2.5 mb-4">
              <MintBadge src={dash("Vector.png")} size={28} />
              <h2 className="text-[#2F5F75] font-semi_bold_24pt text-[17px] leading-snug">
                Forum Guidelines
              </h2>
            </div>
            <ol className="flex flex-col gap-3">
              {ipGuidelines.map((rule, i) => (
                <li
                  key={rule}
                  className="flex items-start gap-2.5 text-[#777779] font-regular_18pt text-[13px] leading-relaxed"
                >
                  <span className="text-[#3A738D] font-semi_bold_24pt text-[13px] w-4 flex-shrink-0">
                    {i + 1}.
                  </span>
                  {rule}
                </li>
              ))}
            </ol>
          </section>

          <section className={`${card} p-5 sm:p-6`}>
            <h2 className="text-[#2F5F75] font-semi_bold_24pt text-[17px] leading-snug mb-4">
              Your Participation
            </h2>
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="text-[#777779] font-regular_18pt text-[13px]">Registered Meetups</span>
              <span className="text-[#2F5F75] font-semi_bold_24pt text-[15px]">2 Upcoming</span>
            </div>
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="text-[#777779] font-regular_18pt text-[13px]">CE Credits Earned</span>
              <span className="text-[#2F5F75] font-semi_bold_24pt text-[15px]">12 Hours</span>
            </div>
            <div className="flex items-center justify-between gap-3 mb-4">
              <span className="text-[#777779] font-regular_18pt text-[13px]">
                Past Forums Attended
              </span>
              <span className="text-[#2F5F75] font-semi_bold_24pt text-[15px]">6 Total</span>
            </div>
            <div className="pt-4 border-t border-[#D5DEE2]">
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="text-[#777779] font-regular_18pt text-[13px]">Forum Status</span>
                <span className="text-[#2F5F75] font-inter-medium_18pt text-[13px]">
                  Pro Attendee
                </span>
              </div>
              <div className="h-2 rounded-full bg-[#E9EDF2] overflow-hidden">
                <div className="h-full w-[75%] rounded-full bg-[#3A738D]" />
              </div>
            </div>
          </section>
        </aside>
      </div>
    </>
  );
}

export default function StudentCommunity() {
  const [tab, setTab] = useState<Tab>("all");

  const visibleGroups =
    tab === "all" ? courseGroups : courseGroups.filter((g) => g.channel === tab);
  const showCircles = tab === "all";
  const visibleChannels =
    tab === "all" ? channels : channels.filter((c) => c.id === tab);

  return (
    <StudentDashboardShell>
      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-6 sm:py-7 md:py-8 w-full min-w-0 flex flex-col gap-6">
        <div className="min-w-0">
          <h1 className="text-[#2F5F75] font-semi_bold_24pt text-[26px] sm:text-[30px] leading-tight tracking-tight">
            Community
          </h1>
          <p className="mt-1.5 text-[#777779] font-regular_18pt text-[14px] sm:text-[15px] leading-relaxed">
            Connect, collaborate and grow with fellow dental professionals
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-4 border-b border-[#D5DEE2]">
            {tabs.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(item.id)}
                className={`pb-2.5 font-inter-medium_18pt text-[13px] sm:text-[14px] transition-colors ${
                  tab === item.id
                    ? "text-[#2F5F75] border-b-2 border-[#3A738D]"
                    : "text-[#777779] hover:text-[#2F5F75] border-b-2 border-transparent"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {tab === "whatsapp" ? (
          <WhatsAppTab />
        ) : tab === "facebook" ? (
          <FacebookTab />
        ) : tab === "inperson" ? (
          <InPersonTab />
        ) : (
          <>
        <MetricCards items={metrics} />

        <div className="flex flex-col xl:flex-row gap-6 w-full min-w-0 xl:items-start">
          <div className="flex-1 min-w-0 flex flex-col gap-6">
            {visibleGroups.length > 0 && (
              <section>
                <h2 className="text-[#2F5F75] font-semi_bold_24pt text-[18px] sm:text-[20px] leading-snug mb-4">
                  Your Course Communities
                </h2>
                <div className="flex flex-col md:flex-row md:flex-wrap gap-4">
                  {visibleGroups.map((group) => (
                    <article
                      key={group.title}
                      className={`flex flex-col min-w-0 w-full md:w-[calc(50%-0.5rem)] xl:w-[calc(33.333%-0.67rem)] ${card} p-5`}
                    >
                      <Image
                        src={dash("WhatsAppIconCircle.png")}
                        alt=""
                        width={36}
                        height={36}
                        unoptimized
                        className="w-9 h-9 object-contain mb-4"
                      />
                      <h3 className="text-[#2F5F75] font-semi_bold_24pt text-[16px] leading-snug">
                        {group.title}
                      </h3>
                      <p className="text-[#777779] font-regular_18pt text-[13px] mt-1 mb-4">
                        {group.course}
                      </p>
                      <div className="flex items-center justify-between gap-2 mb-5 text-[12px] font-regular_18pt text-[#777779]">
                        <span className="inline-flex items-center gap-1.5">
                          <Image
                            src={dash("IconBox.png")}
                            alt=""
                            width={14}
                            height={14}
                            className="w-3.5 h-3.5 object-contain"
                          />
                          {group.members} members
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              group.live ? "bg-[#5ECAA0]" : "bg-[#D5DEE2]"
                            }`}
                          />
                          {group.activity}
                        </span>
                      </div>
                      <button
                        type="button"
                        className="mt-auto inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-[12px] font-inter-medium_18pt text-[14px] bg-[#3A738D] hover:bg-[#2F5F75] text-white transition-colors"
                      >
                        Join Group
                        <span aria-hidden="true">→</span>
                      </button>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {showCircles && (
              <section>
                <h2 className="text-[#2F5F75] font-semi_bold_24pt text-[18px] sm:text-[20px] leading-snug mb-4">
                  Community Circles
                </h2>
                <div className="flex flex-col md:flex-row md:flex-wrap gap-4">
                  {circles.map((circle) => (
                    <article
                      key={circle.title}
                      className={`flex items-start gap-3 min-w-0 w-full md:w-[calc(50%-0.5rem)] ${card} p-4 sm:p-5 ${
                        circle.invite ? "border-[#5ECAA0]" : ""
                      }`}
                    >
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E8F1F5] flex-shrink-0">
                        <Image
                          src={circle.invite ? dash("Sphere.png") : dash("target.png")}
                          alt=""
                          width={40}
                          height={40}
                          unoptimized
                          className="w-6 h-6 object-contain"
                        />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center flex-wrap gap-2">
                          <h3 className="text-[#2F5F75] font-semi_bold_24pt text-[15px] leading-snug">
                            {circle.title}
                          </h3>
                          {circle.invite && (
                            <span className="inline-flex items-center rounded-full bg-[#E5F8F0] text-[#2F5F75] font-inter-medium_18pt text-[10px] tracking-wide px-2 py-0.5 uppercase">
                              Invite only
                            </span>
                          )}
                        </div>
                        <p className="text-[#777779] font-regular_18pt text-[13px] mt-1 mb-2">
                          {circle.description}
                        </p>
                        <div className="flex items-center gap-3">
                          <span className="text-[#777779] font-regular_18pt text-[12px]">
                            {circle.members} members
                          </span>
                          <Link
                            href="/community"
                            className="text-[#3A738D] hover:text-[#2F5F75] font-inter-medium_18pt text-[13px] underline-offset-2 hover:underline"
                          >
                            View Circle
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {visibleChannels.length > 0 && (
              <section>
                <h2 className="text-[#2F5F75] font-semi_bold_24pt text-[18px] sm:text-[20px] leading-snug mb-4">
                  Platform Channels
                </h2>
                <div className="flex flex-col md:flex-row md:flex-wrap gap-4">
                  {visibleChannels.map((channel) => (
                    <article
                      key={channel.title}
                      className={`flex flex-col min-w-0 w-full md:w-[calc(50%-0.5rem)] xl:w-[calc(33.333%-0.67rem)] ${card} p-5`}
                    >
                      <Image
                        src={channel.icon}
                        alt=""
                        width={32}
                        height={32}
                        unoptimized
                        className="w-8 h-8 object-contain mb-4"
                      />
                      <h3 className="text-[#2F5F75] font-semi_bold_24pt text-[16px] leading-snug">
                        {channel.title}
                      </h3>
                      <p className="text-[#777779] font-regular_18pt text-[13px] leading-relaxed mt-1 mb-5">
                        {channel.description}
                      </p>
                      <Link
                        href={channel.href}
                        className="mt-auto inline-flex items-center justify-center w-full py-2.5 rounded-[12px] font-inter-medium_18pt text-[14px] bg-white border border-[#D5DEE2] text-[#2F5F75] hover:bg-[#5ECAA0] hover:border-[#5ECAA0] transition-colors"
                      >
                        {channel.cta}
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="w-full xl:w-[300px] xl:flex-shrink-0 flex flex-col gap-6">
            <section className={`${card} p-5 sm:p-6`}>
              <h2 className="text-[#2F5F75] font-semi_bold_24pt text-[17px] leading-snug mb-4">
                Membership Types
              </h2>
              <ul className="flex flex-col">
                {memberships.map((item, index) => (
                  <li
                    key={item.name}
                    className={`flex items-start justify-between gap-3 py-3 ${
                      index < memberships.length - 1 ? "border-b border-[#D5DEE2]" : "pb-0"
                    } ${index === 0 ? "pt-0" : ""}`}
                  >
                    <div className="min-w-0">
                      <p className="text-[#2F5F75] font-semi_bold_24pt text-[14px] leading-snug">
                        {item.name}
                      </p>
                      <p className="text-[#777779] font-regular_18pt text-[12px] leading-snug mt-0.5">
                        {item.detail}
                      </p>
                    </div>
                    {item.badge && (
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-inter-medium_18pt text-[11px] flex-shrink-0 ${badgeClass(item.badge)}`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </section>

            <section className={`${card} p-5 sm:p-6`}>
              <h2 className="text-[#2F5F75] font-semi_bold_24pt text-[17px] leading-snug mb-4">
                Your Activity
              </h2>
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="text-[#777779] font-regular_18pt text-[13px]">
                  Posts This Month
                </span>
                <span className="text-[#2F5F75] font-semi_bold_24pt text-[15px]">4</span>
              </div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="text-[#777779] font-regular_18pt text-[13px]">Comments</span>
                <span className="text-[#2F5F75] font-semi_bold_24pt text-[15px]">12</span>
              </div>
              <div className="pt-4 border-t border-[#D5DEE2]">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="text-[#777779] font-regular_18pt text-[13px]">
                    Reputation Score
                  </span>
                  <span className="text-[#2F5F75] font-semi_bold_24pt text-[15px]">87/100</span>
                </div>
                <div className="h-2 rounded-full bg-[#E9EDF2] overflow-hidden">
                  <div className="h-full w-[87%] rounded-full bg-[#3A738D]" />
                </div>
              </div>
            </section>
          </aside>
        </div>
          </>
        )}
      </div>
    </StudentDashboardShell>
  );
}

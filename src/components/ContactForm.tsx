"use client";

import { useState } from "react";

const fieldClass =
  "w-full min-w-0 bg-transparent border-0 border-b border-[#D5DEE2] rounded-none px-0 py-3 text-[#2F5F75] font-regular_18pt text-[14px] sm:text-[15px] outline-none focus:border-[#3A738D] transition-colors placeholder:text-[#777779]/55";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-3 w-full min-w-0 bg-white border border-[#D5DEE2] rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 md:p-10 shadow-[0_8px_28px_rgba(58,115,141,0.06)]">
        <h3 className="text-[#2F5F75] font-semi_bold_24pt text-[20px] sm:text-[22px] leading-snug">
          Inquiry received
        </h3>
        <p className="text-[#777779] font-regular_18pt text-[14px] sm:text-[15px] leading-relaxed">
          Thanks for reaching out. Our team will get back to you as soon as
          possible.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-2 inline-flex items-center justify-center bg-[#5ECAA0] hover:bg-[#7ED9B5] text-black px-5 py-3 rounded-[10px] font-inter-medium_18pt text-[14px] sm:text-[15px] transition-colors"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 sm:gap-6 w-full min-w-0 bg-white border border-[#D5DEE2] rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 md:p-10 shadow-[0_8px_28px_rgba(58,115,141,0.06)]"
    >
      <p className="text-[#777779] font-regular_18pt text-[14px] sm:text-[15px] leading-relaxed mb-1">
        Complete the form below, and our team will get back to you as soon as
        possible.
      </p>

      <label className="flex flex-col w-full min-w-0">
        <span className="sr-only">Full Name</span>
        <input
          type="text"
          name="name"
          required
          placeholder="Full Name"
          className={fieldClass}
        />
      </label>

      <label className="flex flex-col w-full min-w-0">
        <span className="sr-only">Email Address</span>
        <input
          type="email"
          name="email"
          required
          placeholder="Email Address"
          className={fieldClass}
        />
      </label>

      <label className="flex flex-col w-full min-w-0">
        <span className="sr-only">Phone Number / WhatsApp</span>
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number / WhatsApp"
          className={fieldClass}
        />
      </label>

      <label className="flex flex-col w-full min-w-0 relative">
        <span className="sr-only">Course Information</span>
        <select
          name="course"
          required
          defaultValue=""
          className={`${fieldClass} appearance-none pr-8 cursor-pointer`}
        >
          <option value="" disabled>
            Course Information
          </option>
          <option value="foundations-endodontics">
            Foundations of Clinical Endodontics
          </option>
          <option value="workshops">Hands-on Workshops</option>
          <option value="webinars">Live Webinars</option>
          <option value="partnership">Partnership Inquiry</option>
          <option value="other">Other / General</option>
        </select>
        <span
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#777779]"
          aria-hidden="true"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M4 6l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </label>

      <label className="flex flex-col w-full min-w-0">
        <span className="sr-only">Your Message</span>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Your Message"
          className={`${fieldClass} resize-none`}
        />
      </label>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 w-full bg-[#5ECAA0] hover:bg-[#7ED9B5] text-black px-6 py-3.5 sm:py-4 rounded-[12px] font-inter-medium_18pt text-[15px] sm:text-[16px] transition-colors"
      >
        Submit Inquiry
        <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}

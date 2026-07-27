"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-gray-100 last:border-none py-4">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between text-left focus:outline-none group"
      >
        <span className="font-inter-medium_18pt text-[15px] text-darkBlueText group-hover:text-blueText transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-gray-400 ml-4 flex-shrink-0"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pt-3 pb-1 text-[14px] text-gray-500 font-regular_18pt leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "What's included in course enrollment?",
      answer: "Full access to video lectures, reading materials, quizzes, and a completion certificate - plus live sessions and workshops for hybrid courses."
    },
    {
      question: "Do courses count toward CE credit hours?",
      answer: "Yes, all our courses are fully accredited and provide documented CE credit hours upon successful completion."
    },
    {
      question: "Can I access course content after completion?",
      answer: "Absolutely. You get lifetime access to all course materials, including future updates to the curriculum."
    },
    {
      question: "What's the difference between online and hybrid courses?",
      answer: "Online courses are 100% remote and self-paced. Hybrid courses combine online learning with hands-on, in-person clinical workshops."
    }
  ];

  return (
    <section className="w-[100vw] relative left-1/2 -translate-x-1/2 min-h-[500px] lg:min-h-[600px] flex items-center py-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/main-page-faq.jpg" 
          alt="Dental clinic background" 
          fill 
          className="object-cover object-center opacity-90"
        />
        
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 flex justify-start">
        {/* FAQ White Card */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 w-full max-w-xl shadow-2xl h-[480px] lg:h-[520px] flex flex-col">
          <h2 className="text-3xl lg:text-[36px] font-semi_bold_24pt text-blueBtnBg mb-8 tracking-tight">
            Frequently asked questions
          </h2>
          
          <div className="flex flex-col">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

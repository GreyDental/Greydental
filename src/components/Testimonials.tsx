"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useInView } from "framer-motion";

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // 1. Create refs for start and end 
  const startRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  // 2. Track visibility of the refs inside the scroll container.
  const isStartInView = useInView(startRef, { root: scrollContainerRef });
  const isEndInView = useInView(endRef, { root: scrollContainerRef });

  // 3. Derive state directly from visibility 
  const canScrollLeft = isStartInView === false && scrollContainerRef.current !== null;
  const canScrollRight = !isEndInView;

  const testimonials = [
    {
      name: "Dr. Sarah Bennett",
      role: "Endodontics graduate",
      quote: "The module structure mirrors how we actually think through a case — diagnosis, planning, then execution. I finished the endodontics track feeling genuinely more confident chairside."
    },
    {
      name: "Dr. James Whitfield",
      role: "Implantology graduate",
      quote: "Hands-on workshops paired with the online modules made complex implant cases finally click for me. This is the CE format I've been waiting for."
    },
    {
      name: "Dr. Emily Carter",
      role: "Case Documentation graduate",
      quote: "The case documentation course completely changed how I record and present treatment plans - simple, structured, and immediately useful in practice."
    },
    {
      name: "Dr. Michael Chen",
      role: "General Dentistry",
      quote: "The hybrid approach is perfect. I could learn the theory at my own pace and then apply it during the weekend clinical workshops. Highly recommended."
    },
    {
      name: "Dr. Jessica Patel",
      role: "Cosmetic Dentistry graduate",
      quote: "The instructors are practicing specialists who share real, unstaged cases. It's incredibly refreshing to see how they handle complications in the real world."
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth / (window.innerWidth >= 768 ? 3 : 1);
      scrollContainerRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <section className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-greyBg py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center relative">
        
        {/* Badge */}
        <div className="bg-greenBg px-6 py-2 rounded-full mb-6">
          <span className="text-[13px] font-semi_bold_24pt tracking-[0.15em] text-black uppercase">
            Testimonials
          </span>
        </div>
        
        <h2 className="text-4xl lg:text-[44px] font-semi_bold_24pt text-blueText mb-4 tracking-tight text-center">
          Real students. Real results.
        </h2>
        
        <p className="text-gray-500 font-regular_18pt text-[17px] mb-16 text-center">
          Hear from our graduates
        </p>

        {/* Carousel Area */}
        <div className="relative w-full flex items-center justify-center">
          
          {/* Left Button */}
          <button 
            onClick={() => scroll('left')}
            className={`absolute -left-16 z-10 w-14 h-14 bg-blueBg rounded-full items-center justify-center shadow-lg text-white hover:bg-blueBtnBg transition-colors ${canScrollLeft ? 'hidden lg:flex' : 'hidden'}`}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* Cards Container — Removed onScroll */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 w-full pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {testimonials.map((t, idx) => {
              const isFirst = idx === 0;
              const isLast = idx === testimonials.length - 1;

              return (
                <div 
                  key={idx} 
                  className="snap-start flex-shrink-0 relative w-full md:w-[calc(33.333%-1rem)] bg-white rounded-[24px] p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col h-auto"
                >
                  {/* START invisible 1px line pinned to the left of the first card */}
                  {isFirst && (
                    <div ref={startRef} className="absolute left-0 top-0 w-px h-full pointer-events-none" />
                  )}

                  {/* END invisible 1px line pinned to the right of the last card */}
                  {isLast && (
                    <div ref={endRef} className="absolute right-0 top-0 w-px h-full pointer-events-none" />
                  )}

                  {/* Placeholder Image */}
                  <div className="w-16 h-16 relative mb-6 flex-shrink-0">
                    <Image 
                      src="/main-page-default-user.jpg" 
                      alt={t.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  
                  <p className="text-gray-500 font-regular_18pt text-[15px] leading-relaxed mb-10 flex-grow">
                    {t.quote}
                  </p>
                  
                  <div>
                    <h4 className="font-semi_bold_24pt text-[16px] text-blueText mb-1">{t.name}</h4>
                    <p className="font-regular_18pt text-[13px] text-gray-400">{t.role}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Button */}
          <button 
            onClick={() => scroll('right')}
            className={`absolute -right-16 z-10 w-14 h-14 bg-blueBg rounded-full items-center justify-center shadow-lg text-white hover:bg-blueBtnBg transition-colors ${canScrollRight ? 'hidden lg:flex' : 'hidden'}`}
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

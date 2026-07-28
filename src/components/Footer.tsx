import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-blueBg pt-14 sm:pt-20 pb-8 border-t border-[#0a234f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 mb-12 sm:mb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col lg:flex-[2] lg:pr-8">
            <h3 className="text-2xl font-semi_bold_24pt text-white mb-5 sm:mb-6">
              Grey Dental
            </h3>
            <p className="text-gray-400 font-regular_18pt text-[15px] leading-relaxed mb-6 sm:mb-8 max-w-sm">
              The future of clinical dental education. Evidence-based, expert-led, practice-focused.
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a href="#" className="w-10 h-10 rounded bg-[#102b5e] flex items-center justify-center hover:bg-blueBtnBg transition-colors">
                <Image src="/footer-icons/facebook.svg" alt="Facebook" width={16} height={16} className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-[#102b5e] flex items-center justify-center hover:bg-blueBtnBg transition-colors">
                <Image src="/footer-icons/linkedin.svg" alt="LinkedIn" width={16} height={16} className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-[#102b5e] flex items-center justify-center hover:bg-blueBtnBg transition-colors">
                <Image src="/footer-icons/twitter.svg" alt="Twitter" width={16} height={16} className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-[#102b5e] flex items-center justify-center hover:bg-blueBtnBg transition-colors">
                <Image src="/footer-icons/youtube.svg" alt="YouTube" width={16} height={16} className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="flex flex-col sm:flex-row flex-wrap lg:flex-[3] gap-10 sm:gap-12 lg:gap-8 lg:justify-between">
            <div className="flex flex-col min-w-[140px]">
              <h4 className="text-[15px] font-semi_bold_24pt tracking-[0.1em] text-white uppercase mb-5 sm:mb-6">
                About
              </h4>
              <ul className="flex flex-col gap-3 sm:gap-4">
                <li><Link href="#" className="text-gray-400 hover:text-white text-[15px] font-regular_18pt transition-colors">Our Mission</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white text-[15px] font-regular_18pt transition-colors">The Editorial Board</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white text-[15px] font-regular_18pt transition-colors">Career Opportunities</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white text-[15px] font-regular_18pt transition-colors">Contact Support</Link></li>
              </ul>
            </div>

            <div className="flex flex-col min-w-[140px]">
              <h4 className="text-[15px] font-semi_bold_24pt tracking-[0.1em] text-white uppercase mb-5 sm:mb-6">
                Education
              </h4>
              <ul className="flex flex-col gap-3 sm:gap-4">
                <li><Link href="#" className="text-gray-400 hover:text-white text-[15px] font-regular_18pt transition-colors">Endodontic Track</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white text-[15px] font-regular_18pt transition-colors">Implantology Track</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white text-[15px] font-regular_18pt transition-colors">Restorative Track</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white text-[15px] font-regular_18pt transition-colors">Certification Programs</Link></li>
              </ul>
            </div>

            <div className="flex flex-col min-w-[140px]">
              <h4 className="text-[15px] font-semi_bold_24pt tracking-[0.1em] text-white uppercase mb-5 sm:mb-6">
                Legal
              </h4>
              <ul className="flex flex-col gap-3 sm:gap-4">
                <li><Link href="#" className="text-gray-400 hover:text-white text-[15px] font-regular_18pt transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white text-[15px] font-regular_18pt transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white text-[15px] font-regular_18pt transition-colors">CE Credit Policy</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white text-[15px] font-regular_18pt transition-colors">Accessibility</Link></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#102b5e] flex flex-col justify-center items-center">
          <p className="text-gray-500 font-regular_18pt text-[14px] text-center">
            © 2026 Grey Dental. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

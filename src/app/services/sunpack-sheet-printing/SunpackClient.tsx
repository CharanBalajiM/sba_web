"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Printer, CheckCircle, HelpCircle, MessageSquare, Maximize2, Info } from "lucide-react";
import RippleEffect from "@/components/RippleEffect";

export default function SunpackSheetPrinting() {
  const [selectedSize, setSelectedSize] = useState("size2_5");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sizes = [
    {
      id: "size1",
      dimensions: "1 x 1 ft",
      inchName: "12 x 12 inches",
      useCase: "Ideal for wanted ads, warnings, and compact local listings.",
      popularity: "Compact",
      width: 48,
      height: 48,
      img: "/size-1x1-v3.png",
    },
    {
      id: "size2",
      dimensions: "1 x 1.5 ft",
      inchName: "12 x 18 inches",
      useCase: "Standard size for no parking signs, small street pole advertisements, and gate boards.",
      popularity: "Standard",
      width: 72,
      height: 48,
      img: "/size-1x1-5.png",
    },
    {
      id: "size2_5",
      dimensions: "1.5 x 2 ft",
      inchName: "18 x 24 inches",
      useCase: "Perfect for real estate plot banners, standard advertising boards, and window promotions.",
      popularity: "Popular Choice",
      width: 72,
      height: 96,
      img: "/size-1-5x2-v2.png",
    },
    {
      id: "size3",
      dimensions: "2 x 2 ft",
      inchName: "24 x 24 inches",
      useCase: "Highly popular format among schools, colleges, and educational academies for admissions campaigns.",
      popularity: "Popular Choice",
      width: 96,
      height: 96,
      img: "/size-2x2-v2.png",
    },
    {
      id: "size4",
      dimensions: "2 x 3 ft",
      inchName: "24 x 36 inches",
      useCase: "Large layout format designed for large advertising campaigns, event directions, and roadside setups.",
      popularity: "High Visibility",
      width: 96,
      height: 144,
      img: "/size-2x3.png",
    },
    {
      id: "size5",
      dimensions: "2 x 4 ft",
      inchName: "24 x 48 inches",
      useCase: "Grand openings, commercial shop gate banners, and mega promotional announcements.",
      popularity: "Large Format",
      width: 96,
      height: 192,
      img: "/size-2x4.png",
    },
  ];

  const features = [
    "Premium Weatherproof material built for outdoor endurance",
    "High-contrast UV screen & digital printing for sharp legibility",
    "Eco-friendly, recyclable corrugated plastic (coroplast) sheets",
    "Pre-punched eyelets and slot provisions for rapid wire-tie installation",
    "Perfect for real estate, tuition centers, retail promotions, and political advertising",
  ];

  const faqs = [
    {
      q: "What is the minimum order quantity (MOQ) for Sunpack printing?",
      a: "For custom screen-printed designs, our standard minimum order is 500 sheets to offer you the best bulk cost efficiency.",
    },
    {
      q: "How long do Sunpack sheet prints last outdoors?",
      a: "Our Sunpack sheets are treated for UV resistance. Depending on direct sunlight exposure, they typically last between 6 to 12 months without fading.",
    },
    {
      q: "What sizes are most popular for street pole advertising?",
      a: "The most popular and high-impact sizes are 1.5x2 ft (18x24 inches) and 2x2 ft (24x24 inches). They are highly popular among educational institutions for school and college admission campaigns.",
    },
  ];

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const currentSizeObj = sizes.find((s) => s.id === selectedSize) || sizes[0];

  return (
    <div className="py-16 md:py-24">
      <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 transform ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}>
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs font-semibold text-gray-400 mb-6 animate-fade-in-down">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
          <span>/</span>
          <span className="text-gray-600">Sunpack Sheet Printing</span>
        </div>

        {/* H1 Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6 font-sans leading-tight">
          Sunpack Sheet Printing in Tamil Nadu
        </h1>

        <div className="w-12 h-1 bg-gold mb-8 rounded-full animate-scale-up" />

        {/* Intro */}
        <p className="text-base text-gray-600 leading-relaxed mb-8">
          Looking for a cost-effective way to execute mass outdoor local marketing promotions across Tamil Nadu? 
          <strong> Sree Balaji Advertising</strong> provides premium, durable Sunpack sheet printing solutions established since 1999. 
          Specializing in **school and college admissions campaigns, educational coaching announcements, and campus signages**, our coroplast signs are lightweight, waterproof, and extremely easy to install.
        </p>

        {/* Callout Box */}
        <div className="bg-mint border border-primary/10 rounded-2xl p-6 mb-10 flex items-start space-x-4 hover:shadow-md transition-shadow duration-300">
          <Printer className="w-6 h-6 text-primary shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-bold text-gray-900">Why Choose Sunpack Sheets?</h3>
            <p className="text-xs text-gray-600 leading-relaxed mt-1">
              Sunpack sheets are the gold standard for high-volume promotions. They are water-resistant, wind-tolerant, and offer maximum return on advertising spend.
            </p>
          </div>
        </div>

        {/* Dynamic Size Guide Section */}
        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-xs">
          <div className="flex items-center space-x-2 mb-4 text-primary">
            <Maximize2 className="w-5 h-5" />
            <h2 className="text-lg font-bold text-gray-900 font-sans">Interactive Size Guide</h2>
          </div>
          <p className="text-xs text-gray-500 mb-6">Click on any size tab below to view standard specifications and recommended use cases:</p>

          <div className="flex flex-wrap gap-4 mb-6">
            {sizes.map((s) => {
              const isPopular = s.id === "size2_5" || s.id === "size3";
              return (
                <div key={s.id} className="relative mt-2.5">
                      {isPopular && (
                        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-[8px] font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow-md tracking-wider z-10 flex items-center space-x-1.5 whitespace-nowrap border border-white animate-pulse-gentle overflow-hidden">
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer-sweep" />
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
                          </span>
                          <span className="relative z-10">Popular</span>
                        </span>
                      )}
                  <button
                    onClick={() => setSelectedSize(s.id)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 relative overflow-hidden ${
                      selectedSize === s.id
                        ? "bg-primary text-white shadow-md scale-105"
                        : "bg-white text-gray-600 border border-gray-100 hover:bg-gray-100 hover:scale-[1.02]"
                    } ${isPopular ? "border-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.25)]" : ""}`}
                  >
                    <RippleEffect color={selectedSize === s.id ? "rgba(255, 255, 255, 0.65)" : "rgba(15, 61, 36, 0.25)"} />
                    <span className="relative z-10">{s.dimensions}</span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Size details block */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
            {/* Dimensions & Proportions Guide */}
            <div className="bg-white border border-gray-100 rounded-3xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
              <div>
                <span className="text-[10px] font-bold text-primary bg-mint px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {currentSizeObj.popularity}
                </span>
                <h3 className="text-xl font-extrabold text-gray-900 mt-3 mb-2">
                  {currentSizeObj.dimensions} Layout Format
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-6">{currentSizeObj.useCase}</p>
              </div>

              {/* Visual proportions mockup */}
              <div className="w-full h-56 bg-mint rounded-2xl border border-primary/10 flex items-center justify-center relative overflow-hidden">
                <div 
                  className="border border-dashed border-primary/40 rounded-xl flex items-center justify-center text-center shadow-inner transition-all duration-500 ease-out bg-white/50"
                  style={{ width: `${currentSizeObj.width}px`, height: `${currentSizeObj.height}px` }}
                >
                  <span className="text-[10px] font-bold text-primary font-mono p-1">
                    {currentSizeObj.dimensions}
                  </span>
                </div>
              </div>
            </div>

            {/* Real-world Preview Mockup Card */}
            <div className="bg-white border border-gray-100 rounded-3xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
              <div>
                <span className="text-[10px] font-bold text-gold bg-amber-50 border border-gold/10 px-2.5 py-1 rounded-md uppercase tracking-wider">
                  Preview in Action
                </span>
                <h3 className="text-xl font-extrabold text-gray-900 mt-3 mb-2">
                  Real-world Installation
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-6">
                  Simulated preview of a printed board tied securely to a street lamppost.
                </p>
              </div>

              {/* Preview image window */}
              <div 
                key={selectedSize}
                className="w-full h-64 rounded-2xl border border-gray-100 overflow-hidden bg-contain bg-no-repeat bg-gray-50 bg-center relative shadow-sm animate-scale-up"
                style={{ backgroundImage: `url(${currentSizeObj.img})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-black/45 px-2.5 py-1 rounded-md backdrop-blur-xs">
                    {currentSizeObj.dimensions} Board
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features H2 */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6 font-sans">Product Specifications &amp; Features</h2>
        <ul className="space-y-4 mb-10">
          {features.map((feat, i) => (
            <li 
              key={i} 
              className="flex items-start space-x-3 text-sm text-gray-600 hover:text-gray-950 transition-colors duration-200"
            >
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        {/* FAQs */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6 font-sans">Frequently Asked Questions</h2>
        <div className="space-y-4 mb-12">
          {faqs.map((faq, i) => {
            const isOpen = openFaqIndex === i;
            return (
              <div key={i} className="border border-gray-100 rounded-2xl p-4 bg-white hover:border-primary/20 transition-all duration-300">
                <button 
                  onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                  className="w-full text-left font-bold text-sm text-gray-900 flex items-center justify-between cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center space-x-2">
                    <HelpCircle className="w-4 h-4 text-primary shrink-0" />
                    <span>{faq.q}</span>
                  </div>
                  <svg 
                    className={`w-4 h-4 text-gray-400 transition-transform duration-300 shrink-0 ml-4 ${isOpen ? "rotate-180 text-primary" : ""}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100 mt-3 pt-3 border-t border-gray-50" : "grid-rows-[0fr] opacity-0"
                }`}>
                  <div className="overflow-hidden">
                    <p className="text-xs text-gray-600 leading-relaxed pl-6">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Disclaimer Callout */}
        <div className="bg-amber-50/50 border border-amber-200/50 rounded-2xl p-6 mb-12 flex items-start gap-4 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 shrink-0 mt-0.5 animate-pulse-gentle">
            <Info className="w-5.5 h-5.5" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-gray-900 font-sans">Why We Don&apos;t Show Fixed Prices</h3>
            <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed mt-1.5">
              Sunpack sheet printing costs vary significantly based on the sheet dimensions (ranging from 1x1 ft up to 2x4 ft), choice of printing method (high-volume screen vs. digital), and overall print quantity. We customize every quote to ensure you receive the lowest possible wholesale rates. Contact us to get your customized quote within minutes!
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="bg-emerald-950 text-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between shadow-xl">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">Need a Custom Print Quote?</h3>
            <p className="text-xs text-gray-300">Talk to our experts for bulk discounts and size selection.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="https://wa.me/919345632103?text=Hi%20Sree%20Balaji%20Advertising%2C%20I'm%20interested%20in%20Sunpack%20Sheet%20Printing."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs px-6 py-3 rounded-full shadow hover:shadow-md hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.97] transition-all duration-300 group"
            >
              <MessageSquare className="w-4 h-4 hover-bounce" />
              <span>WhatsApp Details</span>
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center space-x-1 bg-white hover:bg-gray-100 text-primary font-semibold text-xs px-6 py-3 rounded-full shadow-xs hover:shadow-md hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.97] transition-all duration-300 group"
            >
              <span>Get Quote</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

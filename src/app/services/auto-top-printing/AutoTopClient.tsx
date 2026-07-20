"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Car, CheckCircle, HelpCircle, MessageSquare, Info } from "lucide-react";

export default function AutoTopPrinting() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const specs = [
    "Premium heavy-duty rexine auto hood covers printed directly on the material",
    "Eco-solvent / UV stable inks that fuse with the rexine to avoid peeling or fading",
    "Professional tailoring and stitching to replace original auto covers for a perfect, tight fit",
    "No messy ropes or tied sheets — a seamless, premium, crease-free factory finish",
    "Over 27 years of trusted transit advertising and vehicle branding since 1999",
    "Complete turnkey service: dismantling old covers, custom tailoring, printing, and refitting",
  ];

  const faqs = [
    {
      q: "Why is Auto Top advertising highly effective in Erode?",
      a: "Vehicles travel up to 80-120 km daily in congested commercial zones, residential colonies, and market centers, ensuring thousands of impressions for a single one-time setup cost.",
    },
    {
      q: "How long does a typical Auto Top print last?",
      a: "Our Auto Top prints are finished with high-quality weather-stable coatings, lasting between 9 to 18 months depending on local environmental factors.",
    },
    {
      q: "Do you handle the distribution and installation on local vehicles?",
      a: "Yes, we handle everything. Our experienced crew removes the original auto hood and replaces it entirely with the newly printed and custom-tailored rexine hood. This ensures a clean, tight, wrinkle-free installation that doesn't rely on ropes or temporary tied sheets.",
    },
  ];

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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
          <span className="text-gray-600">Auto Top Printing</span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6 font-sans leading-tight animate-fade-in-down">
          Auto Top Printing &amp; Branding in Tamil Nadu
        </h1>

        <div className="w-12 h-1 bg-gold mb-8 rounded-full animate-scale-up" />

        <p className="text-base text-gray-600 leading-relaxed mb-8">
          Looking for a moving billboard that markets your business 24/7? 
          <strong> Sree Balaji Advertising</strong> provides premium, <strong>direct-on-rexine Auto Top printing and cover-replacement branding services across Tamil Nadu</strong>, focusing heavily on <strong>school admission openings, college recruitment drives, and coaching institute promotions</strong>. 
          Instead of tying temporary banners or loose sheets over the vehicle, we print your design directly onto auto-grade rexine material and tailor a complete replacement hood, ensuring a seamless, premium, and weather-resistant finish.
        </p>

        {/* Callout */}
        <div className="bg-mint border border-primary/10 rounded-2xl p-6 mb-10 flex items-start space-x-4 hover:shadow-md transition-shadow duration-300">
          <Car className="w-6 h-6 text-primary shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-bold text-gray-900">High-Impact Transit Advertising</h3>
            <p className="text-xs text-gray-600 leading-relaxed mt-1">
              Unlike static banners, Auto Tops are constantly in motion, taking your advertisement directly to your target audience in schools, markets, bus stands, and railway stations.
            </p>
          </div>
        </div>

        {/* FAQ Schema for AEO/GEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a,
                },
              })),
            }),
          }}
        />

        {/* Specs */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6 font-sans">What are the specifications and features of our Auto Top prints?</h2>
        <ul className="space-y-4 mb-10">
          {specs.map((spec, i) => (
            <li key={i} className="flex items-start space-x-3 text-sm text-gray-600 hover:text-gray-950 transition-colors duration-200">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>{spec}</span>
            </li>
          ))}
        </ul>

        {/* Workflow */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6 font-sans">Execution Workflow</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 text-center sm:text-left">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:bg-white hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
            <span className="text-xs font-bold text-primary bg-mint px-2.5 py-1 rounded-full">Step 1</span>
            <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">Design Layout</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              We structure bold, legible text and phone numbers that are easy to read on a moving vehicle.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:bg-white hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
            <span className="text-xs font-bold text-primary bg-mint px-2.5 py-1 rounded-full">Step 2</span>
            <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">Direct Rexine Printing</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Premium auto-grade rexine material is printed directly using weatherproof inks, then tailored for a crease-free fit.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:bg-white hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
            <span className="text-xs font-bold text-primary bg-mint px-2.5 py-1 rounded-full">Step 3</span>
            <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">Hood Replacement</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Our crew replaces the original auto hood cover entirely with the new printed rexine, ensuring a flawless factory look.
            </p>
          </div>
        </div>

        {/* FAQs */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6 font-sans">Answers to your questions about Auto Top branding</h2>
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
              Auto top branding costs depend entirely on the number of vehicles, region of deployment, and required print volume. We customize every quote to ensure you receive the maximum possible volume discount and the best local rates. Contact us to get your customized quote within minutes!
            </p>
          </div>
        </div>

        {/* Call To Actions */}
        <div className="bg-emerald-950 text-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between shadow-xl">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">Launch an Auto Top Promotion</h3>
            <p className="text-xs text-gray-300">Get complete rates including design, print, and driver union coordination.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="https://wa.me/919345632103?text=Hi%20Sree%20Balaji%20Advertising%2C%20I'm%20interested%20in%20Auto%20Top%20Printing%20rates."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs px-6 py-3 rounded-full shadow transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get Auto Rates</span>
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center space-x-1 bg-white hover:bg-gray-100 text-primary font-semibold text-xs px-6 py-3 rounded-full transition-all"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Printer, Car, ArrowRight, Sparkles, ShieldCheck, Hammer, Info } from "lucide-react";
import RippleEffect from "@/components/RippleEffect";

export default function Services() {
  const [mounted, setMounted] = useState(false);
  const [showcaseTab, setShowcaseTab] = useState("sunpack");
  const [selectedSize, setSelectedSize] = useState("size2_5");

  useEffect(() => {
    setMounted(true);
  }, []);

  const servicesList = [
    {
      title: "Sunpack Sheet Printing",
      shortDesc: "Weatherproof coroplast sheet advertising prints.",
      longDesc: "Sunpack sheet signs are a cost-effective choice for local outdoor marketing promotions. Highly popular for educational institutes, real estate agents, and retail shops.",
      path: "/services/sunpack-sheet-printing",
      icon: Printer,
    },
    {
      title: "Auto Top Printing",
      shortDesc: "High visibility transit advertising for Auto Tops.",
      longDesc: "Maximize your business exposure with custom Auto Top prints. Using heavy-duty flex/canvas material that can withstand high winds, intense sunlight, and heavy monsoons.",
      path: "/services/auto-top-printing",
      icon: Car,
    },
  ];

  const autoTopProjects = [
    {
      title: "Erode Arts and Science College Promotion",
      desc: "Rear-view high-visibility Auto Top print displaying institutional admissions copy.",
      img: "/erode-auto-mockup-v2.png",
      tag: "Auto Top Branding",
    },
    {
      title: "Aaruthran Land Developers Banner",
      desc: "Rear-view brand advertising cover for land developer promo setups.",
      img: "/aaruthran-auto-mockup.png",
      tag: "Auto Top Branding",
    },
    {
      title: "Hotel Saravana Bhava Campaign",
      desc: "Premium maroon and gold food catering print advertisement canopy.",
      img: "/saravana-auto-mockup.png",
      tag: "Auto Top Branding",
    },
  ];

  const sunpackSizes = [
    {
      id: "size1",
      dimensions: "1 x 1 ft",
      useCase: "Ideal for wanted ads, warnings, and compact local listings.",
      popularity: "Compact",
      width: 48,
      height: 48,
      img: "/size-1x1-v3.png",
    },
    {
      id: "size2",
      dimensions: "1 x 1.5 ft",
      useCase: "Standard size for no parking signs, small street pole advertisements, and gate boards.",
      popularity: "Standard",
      width: 72,
      height: 48,
      img: "/size-1x1-5.png",
    },
    {
      id: "size2_5",
      dimensions: "1.5 x 2 ft",
      useCase: "Perfect for real estate plot banners, standard advertising boards, and window promotions.",
      popularity: "Popular Choice",
      width: 72,
      height: 96,
      img: "/size-1-5x2-v2.png",
    },
    {
      id: "size3",
      dimensions: "2 x 2 ft",
      useCase: "Highly popular format among schools, colleges, and educational academies for admissions campaigns.",
      popularity: "Popular Choice",
      width: 96,
      height: 96,
      img: "/size-2x2-v2.png",
    },
    {
      id: "size4",
      dimensions: "2 x 3 ft",
      useCase: "Large layout format designed for large advertising campaigns, event directions, and roadside setups.",
      popularity: "High Visibility",
      width: 96,
      height: 144,
      img: "/size-2x3.png",
    },
    {
      id: "size5",
      dimensions: "2 x 4 ft",
      useCase: "Grand openings, commercial shop gate banners, and mega promotional announcements.",
      popularity: "Large Format",
      width: 96,
      height: 192,
      img: "/size-2x4.png",
    },
  ];

  const currentSizeObj = sunpackSizes.find((s) => s.id === selectedSize) || sunpackSizes[2];

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}>
          <h1 className="text-xs font-bold uppercase tracking-widest text-primary-light mb-3">
            Our Offerings
          </h1>
          <p className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight font-sans">
            Targeted Local Advertising Solutions
          </p>
          <div className="w-12 h-1 bg-gold mx-auto mt-5 rounded-full" />
          <p className="text-gray-600 mt-6 text-base leading-relaxed">
            We offer end-to-end screen and digital printing, canvas tailoring, and driver stand distribution across Tamil Nadu. 
            Browse our core services engineered to deliver maximum brand impressions.
          </p>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {servicesList.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={i}
                className={`bg-white border border-gray-100 rounded-3xl p-8 hover:border-primary/10 hover:-translate-y-1.5 shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between group transform ${
                  mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${(i + 1) * 150}ms` }}
              >
                <div>
                  <div className="w-12 h-12 bg-mint rounded-2xl flex items-center justify-center mb-6 text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors font-sans">
                    {svc.title}
                  </h2>
                  <p className="text-xs text-primary-light font-semibold mb-3">
                    {svc.shortDesc}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {svc.longDesc}
                  </p>
                </div>
                <Link
                  href={svc.path}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-primary group-hover:text-primary-light transition-colors mt-4"
                >
                  <span>Learn More About {svc.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Showcase Section */}
        <div className="my-16 bg-gray-50/80 border border-gray-100 rounded-3xl p-6 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary-light mb-2">
                Live Product Showcase
              </h2>
              <p className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 font-sans">
                Interactive Size &amp; Work Showcase
              </p>
            </div>
            
            {/* Filter Toggle Buttons */}
            <div className="flex gap-2 mt-4 md:mt-0 bg-white p-1.5 rounded-full border border-gray-200 shadow-sm shrink-0 relative mx-auto md:mx-0">
              <button
                onClick={() => setShowcaseTab("sunpack")}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer relative z-10 ${
                  showcaseTab === "sunpack"
                    ? "text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {showcaseTab === "sunpack" && (
                  <motion.span
                    layoutId="activeServicesShowcaseTab"
                    className="absolute inset-0 bg-primary rounded-full -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                Sunpack Sheets
              </button>
              <button
                onClick={() => setShowcaseTab("autotops")}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer relative z-10 ${
                  showcaseTab === "autotops"
                    ? "text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {showcaseTab === "autotops" && (
                  <motion.span
                    layoutId="activeServicesShowcaseTab"
                    className="absolute inset-0 bg-primary rounded-full -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                Auto Tops
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {showcaseTab === "autotops" ? (
              /* Auto Tops Grid */
              <motion.div
                key="showcase-autotops-services"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {autoTopProjects.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all group"
                  >
                    <div
                      className="h-56 flex items-center justify-center p-6 text-center text-white/10 group-hover:scale-[1.01] transition-transform duration-300 relative bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.img})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-4 left-4 right-4 text-left">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-black/45 px-2.5 py-1 rounded-md backdrop-blur-xs">
                          {item.tag}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              /* Sunpack Sheets Interactive Showcase */
              <motion.div
                key="showcase-sunpack-services"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
              >
                {/* Centered Size Filter Buttons in 4 and 2 Layout */}
                <div className="flex flex-col items-center gap-1.5 sm:gap-2 mb-8 w-full">
                  {/* Row 1: 4 buttons on all screen sizes */}
                  <div className="grid grid-cols-4 gap-1.5 sm:gap-3 w-full max-w-lg mx-auto">
                    {sunpackSizes.slice(0, 4).map((s) => {
                      const isPopular = s.id === "size2_5" || s.id === "size3";
                      return (
                        <div key={s.id} className="relative mt-2.5">
                          {isPopular && (
                            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-[7px] sm:text-[8px] font-extrabold uppercase px-1.5 sm:px-2.5 py-0.5 rounded-full shadow-md tracking-wider z-10 flex items-center space-x-1 whitespace-nowrap border border-white animate-pulse-gentle overflow-hidden">
                              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer-sweep" />
                              <span className="relative flex h-1 w-1 sm:h-1.5 sm:w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1 w-1 sm:h-1.5 sm:w-1.5 bg-white"></span>
                              </span>
                              <span className="relative z-10">Popular</span>
                            </span>
                          )}
                          <button
                            onClick={() => setSelectedSize(s.id)}
                            className={`w-full px-1 sm:px-4 py-2.5 rounded-xl text-[11px] sm:text-xs font-bold transition-all duration-300 relative overflow-hidden text-center ${
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

                  {/* Row 2: 2 buttons centered on all screen sizes */}
                  <div className="grid grid-cols-2 gap-1.5 sm:gap-3 w-[50%] max-w-[240px] sm:max-w-[280px] mx-auto">
                    {sunpackSizes.slice(4, 6).map((s) => {
                      return (
                        <div key={s.id} className="relative mt-2.5">
                          <button
                            onClick={() => setSelectedSize(s.id)}
                            className={`w-full px-1 sm:px-4 py-2.5 rounded-xl text-[11px] sm:text-xs font-bold transition-all duration-300 relative overflow-hidden text-center ${
                              selectedSize === s.id
                                ? "bg-primary text-white shadow-md scale-105"
                                : "bg-white text-gray-600 border border-gray-100 hover:bg-gray-100 hover:scale-[1.02]"
                            }`}
                          >
                            <RippleEffect color={selectedSize === s.id ? "rgba(255, 255, 255, 0.65)" : "rgba(15, 61, 36, 0.25)"} />
                            <span className="relative z-10">{s.dimensions}</span>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Side-by-side Showcase View */}
                <div className="grid grid-cols-2 gap-3 sm:gap-6 mt-6 text-left">
                  {/* Dimensions & Proportions Guide */}
                  <div className="bg-white border border-gray-100 rounded-3xl p-4 sm:p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                    <div>
                      <span className="text-[10px] font-bold text-primary bg-mint px-2.5 py-1 rounded-md uppercase tracking-wider">
                        {currentSizeObj.popularity}
                      </span>
                      <h3 className="text-base sm:text-xl font-extrabold text-gray-900 mt-2 sm:mt-3 mb-1.5 sm:mb-2">
                        {currentSizeObj.dimensions} Layout Format
                      </h3>
                      <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed mb-4 sm:mb-6">{currentSizeObj.useCase}</p>
                    </div>

                    <div className="w-full h-48 sm:h-56 bg-mint rounded-2xl border border-primary/10 flex items-center justify-center relative overflow-hidden p-3">
                      <div 
                        className="border border-dashed border-primary/40 rounded-xl flex items-center justify-center text-center shadow-inner transition-all duration-500 ease-out bg-white/50"
                        style={{ 
                          height: `min(${currentSizeObj.height * 0.85}px, 160px)`,
                          aspectRatio: `${currentSizeObj.width} / ${currentSizeObj.height}`,
                          maxWidth: '100%',
                        }}
                      >
                        <span className="text-[10px] font-bold text-primary font-mono p-1 whitespace-nowrap">
                          {currentSizeObj.dimensions}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Real-world Preview Mockup Card */}
                  <div className="bg-white border border-gray-100 rounded-3xl p-4 sm:p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                    <div>
                      <span className="text-[10px] font-bold text-gold bg-amber-50 border border-gold/10 px-2.5 py-1 rounded-md uppercase tracking-wider">
                        Preview in Action
                      </span>
                      <h3 className="text-base sm:text-xl font-extrabold text-gray-900 mt-2 sm:mt-3 mb-1.5 sm:mb-2">
                        Real-world Installation
                      </h3>
                      <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed mb-4 sm:mb-6">
                        Simulated preview of a printed board tied securely to a street lamppost.
                      </p>
                    </div>

                    <div 
                      key={selectedSize}
                      className="w-full h-44 sm:h-64 rounded-2xl border border-gray-100 overflow-hidden bg-contain bg-no-repeat bg-gray-50 bg-center relative shadow-sm animate-scale-up"
                      style={{ backgroundImage: `url(${currentSizeObj.img})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 text-white">
                        <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-gold bg-black/45 px-2 py-0.5 sm:py-1 rounded-md backdrop-blur-xs">
                          {currentSizeObj.dimensions} Board
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Pricing Disclaimer Callout */}
        <div className="bg-amber-50/50 border border-amber-200/50 rounded-3xl p-6 md:p-8 mb-16 flex flex-col md:flex-row items-start gap-4 max-w-4xl mx-auto shadow-xs">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600 shrink-0 mt-0.5">
            <Info className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900 font-sans">Why Custom Quotes? Get Our Best-Price Guarantee</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-2">
              Every branding project is unique. Pricing varies based on the size of the sheets, printing method (screen vs. high-resolution digital), and order volume. 
              We don&apos;t display fixed prices because we calculate custom pricing for each order to ensure you receive the lowest rates. 
              Contact us for a quick, obligation-free quote tailored to your budget!
            </p>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 rounded-3xl p-10 md:p-12 border border-gray-100">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-gray-900 font-sans">Our Production Journey</h2>
            <p className="text-xs text-gray-500 mt-2 font-medium">How we turn your branding idea into a deployed project</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                step: "01",
                title: "Design Layout",
                desc: "We design bold, readable advertising layout with high visibility phone numbers and services list.",
                icon: Sparkles,
              },
              {
                step: "02",
                title: "High-Volume Production",
                desc: "Using top-grade sunpack sheets or durable stitched transit canvas and UV-resistant inks.",
                icon: Hammer,
              },
              {
                step: "03",
                title: "Driver Stand Coordination",
                desc: "Our operations crew secures driver tie-ups and mounts the Auto Tops to launch your project.",
                icon: ShieldCheck,
              },
            ].map((proc, i) => {
              const Icon = proc.icon;
              return (
                <div 
                  key={i} 
                  className={`flex flex-col items-center hover:-translate-y-1.5 transition-all duration-500 cursor-default transform ${
                    mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${(i + 1) * 150 + 300}ms` }}
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary font-bold shadow-xs mb-4 border border-gray-100 relative">
                    <span className="text-[10px] text-gray-400 absolute -top-1 -right-1 bg-gray-100 rounded-full w-5 h-5 flex items-center justify-center border border-white">
                      {proc.step}
                    </span>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2">{proc.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed px-4">{proc.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

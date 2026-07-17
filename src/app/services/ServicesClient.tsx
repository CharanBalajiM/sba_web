"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Printer, Car, ArrowRight, Sparkles, ShieldCheck, Hammer, Info } from "lucide-react";

export default function Services() {
  const [mounted, setMounted] = useState(false);

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

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 transform ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
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

import type { Metadata } from "next";
import { Award, ShieldCheck, Zap, History, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | 25+ Years of Printing Experience",
  description:
    "Discover Sree Balaji Advertising, established in 1999. Erode's leading specialist in bulk Sunpack sheet printing and Auto Top branding.",
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 animate-fade-in-down">
          <h1 className="text-xs font-bold uppercase tracking-widest text-primary-light mb-3">
            Our Story
          </h1>
          <p className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight font-sans">
            Print Operations Since 1999
          </p>
          <div className="w-12 h-1 bg-gold mx-auto mt-5 rounded-full" />
          <p className="text-gray-600 mt-6 text-base leading-relaxed">
            For over two decades, Sree Balaji Advertising has been Tamil Nadu&apos;s leading specialist in high-impact Sunpack printing and Auto Top branding.
          </p>
        </div>

        {/* Narrative & Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div 
            className="space-y-6 animate-fade-in-up opacity-0"
            style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
          >
            <h2 className="text-2xl font-bold text-gray-900 font-sans">
              27 Years of Trust &amp; Print Precision
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Established in 1999, Sree Balaji Advertising started with a mission to help local brands get noticed. We focused our capabilities exclusively on high-volume outdoor printing formats: Sunpack corrugated sheets and Auto Top canvas covers.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              By narrowing our focus, we developed high-efficiency screen and digital printing processes that allow us to print, stitch, and mount thousands of advertising units at the lowest cost in the region. We work closely with local drivers in Tamil Nadu to manage project placement from start to finish.
            </p>
            <div className="p-5 bg-mint rounded-2xl border border-primary/5 flex items-start space-x-4">
              <Award className="w-8 h-8 text-primary shrink-0" />
              <div>
                <h3 className="text-sm font-bold text-gray-900">Tamil Nadu&apos;s Print Partner</h3>
                <p className="text-xs text-gray-600 leading-relaxed mt-1">
                  We are proud to have supported schools, clinics, and businesses with over 7,500 completed assignments since 1999.
                </p>
              </div>
            </div>
          </div>

          {/* Graphical element representing heritage */}
          <div 
            className="bg-emerald-950 rounded-3xl p-10 text-white shadow-xl h-[400px] flex flex-col justify-between relative overflow-hidden animate-scale-up opacity-0"
            style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent" />
            <History className="absolute -top-10 -right-10 w-64 h-64 text-white/5 transform -rotate-12" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-white/10 px-3 py-1 rounded-full backdrop-blur-md w-fit">
              Milestone Legacy
            </span>
            <div className="z-10">
              <h3 className="text-4xl font-extrabold text-white mb-2">1999</h3>
              <p className="text-xs text-gray-300 font-medium uppercase tracking-wide">
                Founded in Tamil Nadu • Over 2.7 Decades of Bulk Print Operations
              </p>
            </div>
          </div>
        </div>

        {/* Vision, Mission, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div 
            className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-default animate-fade-in-up opacity-0"
            style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
          >
            <Target className="w-8 h-8 text-primary mb-6" />
            <h3 className="text-lg font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              To provide local businesses with affordable, high-exposure outdoor printed media that gets leads and resists severe weather.
            </p>
          </div>

          <div 
            className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-default animate-fade-in-up opacity-0"
            style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
          >
            <ShieldCheck className="w-8 h-8 text-primary mb-6" />
            <h3 className="text-lg font-bold text-gray-900 mb-3">Print Quality</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              We source only high-density durable Sunpack plastic sheets and thick waterproof flex canvas to avoid tearing and color-fading.
            </p>
          </div>

          <div 
            className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-default animate-fade-in-up opacity-0"
            style={{ animationDelay: "700ms", animationFillMode: "forwards" }}
          >
            <Zap className="w-8 h-8 text-primary mb-6" />
            <h3 className="text-lg font-bold text-gray-900 mb-3">Fast Execution</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              High-speed production machinery coupled with structured partnerships to deploy projects across the city in days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

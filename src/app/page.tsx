"use client";

// Build Trigger: 2026-07-17T15:25:00+05:30
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Printer,
  Shield,
  Clock,
  ArrowRight,
  Phone,
  MessageSquare,
  Award,
  MapPin,
  Mail,
  Car,
} from "lucide-react";
import MapEmbed from "@/components/MapEmbed";
import RippleEffect from "@/components/RippleEffect";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    // Find duration based on target size
    const duration = 2000; // 2 seconds total animation
    const increment = end / (duration / 30); // 30ms interval ticks
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Home() {
  const [showcaseTab, setShowcaseTab] = useState("sunpack"); // "autotops" or "sunpack"
  const [selectedSize, setSelectedSize] = useState("size2_5");

  const services = [
    {
      title: "Sunpack Sheet Printing",
      desc: "Weatherproof corrugated plastic (coroplast) advertising sheets. High contrast prints ideal for street pole ads, real estate boards, and local promo signs.",
      path: "/services/sunpack-sheet-printing",
      icon: Printer,
      accent: "bg-emerald-50 text-primary",
      bgImage: "/sunpack-sheet-card-bg.png",
    },
    {
      title: "Auto Top Printing",
      desc: "High-visibility mobile transit advertising for Auto Tops. Weather-engineered covers using durable canvas flex that travels everywhere to build your brand.",
      path: "/services/auto-top-printing",
      icon: Car,
      accent: "bg-emerald-50 text-primary",
      bgImage: "/auto-top-card-bg.png",
    },
  ];

  const autoTopProjects = [
    {
      title: "Airtel 5G Plus Campaign",
      desc: "High-visibility Auto Top branding printed directly onto the black rexine cover.",
      img: "/auto-top-airtel-mockup.png",
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
      img: "/size-1x1.png",
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
      img: "/size-1-5x2.png",
    },
    {
      id: "size3",
      dimensions: "2 x 2 ft",
      useCase: "Highly popular format among schools, colleges, and educational academies for admissions campaigns.",
      popularity: "Popular Choice",
      width: 96,
      height: 96,
      img: "/size-2x2.png",
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

  const testimonials = [
    {
      quote:
        "Sree Balaji Advertising has been our trusted partner for sunpack sheets printing. The print clarity is outstanding, and the sheets are highly durable even in heavy monsoon rains.",
      author: "Ramanathan K.",
      designation: "Marketing Head, Bharath Electronics Limited",
    },
    {
      quote:
        "We ordered 3000 sunpack sheets for our educational promotion in Nagapattinam. Fast delivery, clean screen printing, and extremely cost-efficient pricing.",
      author: "M. Senthil",
      designation: "Admissions Coordinator, Prime Educational Institution",
    },
    {
      quote:
        "Their team coordinated directly with local drivers and stands for our Auto Top prints. Highly professional service and prompt execution of our project.",
      author: "Dr. K. Raghavan",
      designation: "Administrative Officer, Erode Arts and Science College",
    },
  ];

  const stats = [
    { target: 27, suffix: "+", label: "Years of Trust" },
    { target: 7500, suffix: "+", label: "Completed Projects" },
    { target: 1500, suffix: "+", label: "Satisfied Clients" },
    { target: 100, suffix: "%", label: "Quality Commitment" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-mint/40 via-white to-white pt-16 pb-12 md:pt-24 md:pb-16 min-h-[90vh] flex flex-col justify-center border-b border-gray-100">
        {/* Modern SaaS Grid Pattern Backdrop */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-[100px] pointer-events-none -z-10" />
        <div className="absolute bottom-12 right-1/4 w-96 h-96 bg-mint/30 rounded-full filter blur-[100px] pointer-events-none -z-10" />

        {/* Desktop Floating Left Card: Sunpack Sheet (lamppost) */}
        <Link href="/services/sunpack-sheet-printing" className="absolute left-[3%] top-[22%] hidden xl:block w-72 rotate-[-3deg] bg-white border border-gray-100 rounded-3xl p-4 shadow-2xl hover:rotate-0 hover:-translate-y-4 hover:scale-[1.03] hover:shadow-[0_20px_40px_rgba(16,185,129,0.12)] active:scale-[0.97] transition-all duration-500 ease-out z-10 cursor-pointer group">
          {/* Red Push Pin */}
          <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 z-30 select-none pointer-events-none drop-shadow-[0_4px_3px_rgba(0,0,0,0.15)] group-hover:scale-110 transition-transform duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g transform="rotate(-15 12 12)">
                <rect x="11" y="12" width="2" height="8" rx="1" fill="#9ca3af" />
                <path d="M6 5C6 4.44772 6.44772 4 7 4H17C17.5523 4 18 4.44772 18 5V7C18 7.55228 17.5523 8 17 8H7C6.44772 8 6 7.55228 6 7V5Z" fill="#dc2626" />
                <path d="M8 8H16L15 12H9L8 8Z" fill="#b91c1c" />
                <ellipse cx="12" cy="4" rx="6" ry="2" fill="#ef4444" />
                <circle cx="10" cy="6" r="1.5" fill="#fca5a5" opacity="0.6" />
              </g>
            </svg>
          </div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-bold text-primary bg-mint px-2 py-0.5 rounded">Sunpack Ads</span>
            <span className="text-[10px] text-gray-400">Street Pole</span>
          </div>
          <div className="h-44 rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 relative flex items-center justify-center">
            {/* Pinned Sunpack Board on Lamppost SVG */}
            <svg viewBox="0 0 200 150" className="w-full h-full object-contain" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="poleMetal" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#9ca3af" />
                  <stop offset="50%" stopColor="#e5e7eb" />
                  <stop offset="100%" stopColor="#6b7280" />
                </linearGradient>
                <linearGradient id="sunpackRed" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#dc2626" />
                  <stop offset="100%" stopColor="#991b1b" />
                </linearGradient>
              </defs>
              <rect x="97" y="0" width="6" height="150" fill="url(#poleMetal)" />
              <path d="M 97,15 L 75,5 L 75,0 L 97,8 Z" fill="#4b5563" />
              <path d="M 75,5 Q 65,5 65,10 L 70,12 L 80,8 Z" fill="#9ca3af" />
              <path d="M 78,40 Q 90,37 100,43" stroke="#4b5563" strokeWidth="1" fill="none" />
              <path d="M 100,43 Q 110,48 122,40" stroke="#4b5563" strokeWidth="1" fill="none" />
              <path d="M 78,110 Q 90,107 100,113" stroke="#4b5563" strokeWidth="1" fill="none" />
              <path d="M 100,113 Q 110,118 122,110" stroke="#4b5563" strokeWidth="1" fill="none" />
              <rect x="75" y="32" width="50" height="85" rx="2" fill="#ffffff" stroke="#e5e7eb" strokeWidth="0.5" />
              <line x1="80" y1="35" x2="80" y2="114" stroke="#f3f4f6" strokeWidth="0.75" />
              <line x1="85" y1="35" x2="85" y2="114" stroke="#f3f4f6" strokeWidth="0.75" />
              <line x1="90" y1="35" x2="90" y2="114" stroke="#f3f4f6" strokeWidth="0.75" />
              <line x1="95" y1="35" x2="95" y2="114" stroke="#f3f4f6" strokeWidth="0.75" />
              <line x1="105" y1="35" x2="105" y2="114" stroke="#f3f4f6" strokeWidth="0.75" />
              <line x1="110" y1="35" x2="110" y2="114" stroke="#f3f4f6" strokeWidth="0.75" />
              <line x1="115" y1="35" x2="115" y2="114" stroke="#f3f4f6" strokeWidth="0.75" />
              <line x1="120" y1="35" x2="120" y2="114" stroke="#f3f4f6" strokeWidth="0.75" />
              <circle cx="80" cy="38" r="2" fill="#9ca3af" />
              <circle cx="80" cy="38" r="1" fill="#374151" />
              <circle cx="120" cy="38" r="2" fill="#9ca3af" />
              <circle cx="120" cy="38" r="1" fill="#374151" />
              <circle cx="80" cy="111" r="2" fill="#9ca3af" />
              <circle cx="80" cy="111" r="1" fill="#374151" />
              <circle cx="120" cy="111" r="2" fill="#9ca3af" />
              <circle cx="120" cy="111" r="1" fill="#374151" />
              <ellipse cx="100" cy="54" rx="16" ry="9" fill="#1e3b8a" />
              <text x="100" y="57" fontSize="6.5" fontWeight="900" fill="#ffffff" fontFamily="sans-serif" textAnchor="middle">SBA</text>
              <rect x="75" y="68" width="50" height="9" fill="url(#sunpackRed)" />
              <text x="100" y="74.5" fontSize="4.5" fontWeight="900" fill="#ffffff" fontFamily="sans-serif" textAnchor="middle">ADMISSION OPEN!</text>
              <text x="100" y="85" fontSize="4.5" fontWeight="bold" fill="#1e293b" fontFamily="sans-serif" textAnchor="middle">ARTS &amp; SCIENCE</text>
              <text x="100" y="93" fontSize="4.5" fontWeight="bold" fill="#1e293b" fontFamily="sans-serif" textAnchor="middle">COLLEGE</text>
              <text x="100" y="102" fontSize="3.5" fill="#64748b" fontFamily="sans-serif" textAnchor="middle">Estd 1999 • Tamil Nadu</text>
            </svg>
          </div>
        </Link>

        {/* Desktop Floating Right Card: Auto Top (rexine printing) */}
        <Link href="/services/auto-top-printing" className="absolute right-[3%] top-[22%] hidden xl:block w-72 rotate-[3deg] bg-white border border-gray-100 rounded-3xl p-4 shadow-2xl hover:rotate-0 hover:-translate-y-4 hover:scale-[1.03] hover:shadow-[0_20px_40px_rgba(16,185,129,0.12)] active:scale-[0.97] transition-all duration-500 ease-out z-10 cursor-pointer group">
          {/* Red Push Pin */}
          <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 z-30 select-none pointer-events-none drop-shadow-[0_4px_3px_rgba(0,0,0,0.15)] group-hover:scale-110 transition-transform duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g transform="rotate(-15 12 12)">
                <rect x="11" y="12" width="2" height="8" rx="1" fill="#9ca3af" />
                <path d="M6 5C6 4.44772 6.44772 4 7 4H17C17.5523 4 18 4.44772 18 5V7C18 7.55228 17.5523 8 17 8H7C6.44772 8 6 7.55228 6 7V5Z" fill="#dc2626" />
                <path d="M8 8H16L15 12H9L8 8Z" fill="#b91c1c" />
                <ellipse cx="12" cy="4" rx="6" ry="2" fill="#ef4444" />
                <circle cx="10" cy="6" r="1.5" fill="#fca5a5" opacity="0.6" />
              </g>
            </svg>
          </div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-bold text-primary bg-mint px-2 py-0.5 rounded">Auto Top</span>
            <span className="text-[10px] text-gray-400">Canopy Rexine</span>
          </div>
          <div className="h-44 rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 relative flex items-center justify-center">
            {/* Detailed Auto Rickshaw Back View SVG */}
            <svg viewBox="0 0 200 150" className="w-full h-full object-contain" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="autoBody" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fde047" />
                  <stop offset="50%" stopColor="#eab308" />
                  <stop offset="100%" stopColor="#ca8a04" />
                </linearGradient>
                <linearGradient id="rexineTop" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#374151" />
                  <stop offset="100%" stopColor="#1f2937" />
                </linearGradient>
                <linearGradient id="adBanner" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1e3a8a" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
              </defs>
              <g transform="translate(20, 15) scale(0.8)">
                {/* Ground Shadow */}
                <ellipse cx="100" cy="132" rx="60" ry="7" fill="#1b4332" opacity="0.12" />

                {/* Side Rear-View Mirrors */}
                <path d="M 38,62 Q 28,60 28,52 C 28,48 34,48 38,52 Z" fill="#111827" />
                <path d="M 38,52 L 44,57" stroke="#111827" strokeWidth="1.5" />
                <path d="M 162,62 Q 172,60 172,52 C 172,48 166,48 162,52 Z" fill="#111827" />
                <path d="M 162,52 L 156,57" stroke="#111827" strokeWidth="1.5" />

                {/* Wheels */}
                <rect x="52" y="108" width="16" height="24" rx="4" fill="#111827" />
                <rect x="56" y="112" width="8" height="16" fill="#374151" />
                <rect x="132" y="108" width="16" height="24" rx="4" fill="#111827" />
                <rect x="136" y="112" width="8" height="16" fill="#374151" />

                {/* Lower Chassis & Chrome Bumper */}
                <path d="M 40,112 L 160,112 L 155,124 L 45,124 Z" fill="#1f2937" />
                <rect x="36" y="118" width="128" height="4" rx="2" fill="#9ca3af" stroke="#6b7280" strokeWidth="0.5" />
                
                {/* License Plate */}
                <rect x="85" y="115" width="30" height="9" rx="1.5" fill="#facc15" stroke="#ca8a04" strokeWidth="0.5" />
                <text x="100" y="121" fontSize="4.5" fontWeight="900" fill="#111827" fontFamily="monospace" textAnchor="middle">TN-33-SBA</text>

                {/* Yellow Metal Cab Back Panel */}
                <path d="M 42,75 C 42,100 44,112 48,112 L 152,112 C 156,112 158,100 158,75 Z" fill="url(#autoBody)" />
                <rect x="74" y="102" width="52" height="6" rx="3" fill="#1e293b" opacity="0.1" />

                {/* Tail Lights */}
                <rect x="46" y="86" width="14" height="7" rx="2" fill="#ef4444" stroke="#b91c1c" strokeWidth="0.5" />
                <rect x="46" y="86" width="4" height="7" fill="#f59e0b" />
                <rect x="140" y="86" width="14" height="7" rx="2" fill="#ef4444" stroke="#b91c1c" strokeWidth="0.5" />
                <rect x="150" y="86" width="4" height="7" fill="#f59e0b" />

                {/* Curved Canopy Rexine Top */}
                <path d="M 42,75 C 42,65 44,24 54,20 C 62,16 138,16 146,20 C 156,24 158,65 158,75 Z" fill="url(#rexineTop)" />
                
                {/* Canopy Seams / Fabric Folds */}
                <path d="M 54,20 Q 100,28 146,20" fill="none" stroke="#111827" strokeWidth="1" opacity="0.4" />
                <path d="M 54,20 Q 48,50 42,75" fill="none" stroke="#111827" strokeWidth="1.2" opacity="0.4" />
                <path d="M 146,20 Q 152,50 158,75" fill="none" stroke="#111827" strokeWidth="1.2" opacity="0.4" />

                {/* Flexible Rexine Back Window Banner Display */}
                <path d="M 50,24 L 150,24 L 146,65 L 54,65 Z" fill="url(#adBanner)" />
                <path d="M 50,24 L 150,24 L 146,65 L 54,65 Z" stroke="#eab308" strokeWidth="1.5" fill="none" />
                <circle cx="53" cy="27" r="1.5" fill="#facc15" />
                <circle cx="147" cy="27" r="1.5" fill="#facc15" />
                <circle cx="56" cy="62" r="1.5" fill="#facc15" />
                <circle cx="144" cy="62" r="1.5" fill="#facc15" />

                {/* Advertisement Copy */}
                <rect x="68" y="27" width="64" height="7" rx="1.5" fill="#dc2626" />
                <text x="100" y="32.5" fontSize="5" fontWeight="900" fill="#ffffff" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.5">EXCEL COLLEGE</text>
                <text x="100" y="44" fontSize="8" fontWeight="900" fill="#facc15" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.2">ADMISSIONS OPEN</text>
                <text x="100" y="52.5" fontSize="4.5" fontWeight="700" fill="#ffffff" fontFamily="sans-serif" textAnchor="middle">ENGINEERING &amp; ARTS</text>
                <text x="100" y="59" fontSize="3.5" fontWeight="500" fill="#93c5fd" fontFamily="sans-serif" textAnchor="middle">CALL: 93456 32103</text>
              </g>
            </svg>
          </div>
        </Link>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          {/* Centralized Text Content */}
          <div className="text-center max-w-3xl mx-auto">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-mint border border-primary/10 rounded-full px-4.5 py-1.5 mb-6 hover:bg-emerald-100/50 transition-colors animate-fade-in-down">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold text-primary tracking-wide">
                Making you seen since 1999
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 font-sans leading-[1.1] animate-fade-in-up">
              Premium Sunpack Printing &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
                Auto Top Branding
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto animate-fade-in-up">
              Target audiences across Tamil Nadu with high-impact outdoor marketing. We specialize in premium Sunpack sheet signs 
              and custom Auto Tops tailored for **schools, colleges, and educational institutions**.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link
                href="/contact"
                className="flex items-center justify-center space-x-2 bg-primary text-white hover:bg-primary-light px-8 py-4 rounded-full text-base font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.97] transition-all duration-300 w-full sm:w-auto group"
              >
                <span>Get Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href="https://wa.me/919345632103?text=Hi%20Sree%20Balaji%20Advertising%2C%20I'm%20interested%20in%20your%20printing%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-white text-gray-700 hover:text-primary border border-gray-200 hover:border-primary/20 px-8 py-4 rounded-full text-base font-semibold shadow-sm hover:shadow hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.97] transition-all duration-300 w-full sm:w-auto group"
              >
                <MessageSquare className="w-5 h-5 text-emerald-500 fill-emerald-50 hover-bounce" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Statistics Row */}
            <div 
              className="mt-2 mb-8 w-full animate-scale-up opacity-0"
              style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/80 backdrop-blur-xs border border-gray-100 shadow-md rounded-2xl p-5 divide-y md:divide-y-0 md:divide-x divide-gray-100 max-w-2xl mx-auto">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center p-2 md:p-0">
                    <div className="text-xl md:text-2xl font-extrabold text-primary font-sans">
                      <AnimatedNumber value={stat.target} suffix={stat.suffix} />
                    </div>
                    <div className="text-[10px] md:text-xs text-gray-500 font-semibold tracking-wide uppercase mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile/Tablet Only: Showcase cards stacked below CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 xl:hidden max-w-2xl mx-auto text-left">
              {/* Sunpack Sheet Card */}
              <Link href="/services/sunpack-sheet-printing" className="bg-white border border-gray-100 rounded-3xl p-5 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer block">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold text-primary bg-mint px-2 py-0.5 rounded">Sunpack Ads</span>
                  <p className="text-xs text-gray-500">Tied with eyelets to street poles</p>
                </div>
                <div className="h-32 rounded-xl overflow-hidden border border-gray-100 bg-gray-50 relative flex items-center justify-center">
                  {/* Sunpack Board on Lamppost Svg */}
                  <svg viewBox="0 0 200 150" className="w-full h-full object-contain" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="poleMetalMob" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#9ca3af" />
                        <stop offset="50%" stopColor="#d1d5db" />
                        <stop offset="100%" stopColor="#6b7280" />
                      </linearGradient>
                      <linearGradient id="sunpackRedMob" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#dc2626" />
                        <stop offset="100%" stopColor="#991b1b" />
                      </linearGradient>
                    </defs>
                    <rect x="97" y="0" width="6" height="150" fill="url(#poleMetalMob)" />
                    <path d="M 97,15 L 75,5 L 75,0 L 97,8 Z" fill="#4b5563" />
                    <path d="M 75,5 Q 65,5 65,10 L 70,12 L 80,8 Z" fill="#9ca3af" />
                    <path d="M 78,40 Q 90,37 100,43" stroke="#4b5563" strokeWidth="1" fill="none" />
                    <path d="M 100,43 Q 110,48 122,40" stroke="#4b5563" strokeWidth="1" fill="none" />
                    <path d="M 78,110 Q 90,107 100,113" stroke="#4b5563" strokeWidth="1" fill="none" />
                    <path d="M 100,113 Q 110,118 122,110" stroke="#4b5563" strokeWidth="1" fill="none" />
                    <rect x="75" y="32" width="50" height="85" rx="2" fill="#ffffff" stroke="#e5e7eb" strokeWidth="0.5" />
                    <circle cx="80" cy="38" r="2" fill="#9ca3af" />
                    <circle cx="80" cy="38" r="1" fill="#374151" />
                    <circle cx="120" cy="38" r="2" fill="#9ca3af" />
                    <circle cx="120" cy="38" r="1" fill="#374151" />
                    <circle cx="80" cy="111" r="2" fill="#9ca3af" />
                    <circle cx="80" cy="111" r="1" fill="#374151" />
                    <circle cx="120" cy="111" r="2" fill="#9ca3af" />
                    <circle cx="120" cy="111" r="1" fill="#374151" />
                    <ellipse cx="100" cy="54" rx="16" ry="9" fill="#1e3b8a" />
                    <text x="100" y="57" fontSize="6.5" fontWeight="900" fill="#ffffff" fontFamily="sans-serif" textAnchor="middle">SBA</text>
                    <rect x="75" y="68" width="50" height="9" fill="url(#sunpackRedMob)" />
                    <text x="100" y="74.5" fontSize="4.5" fontWeight="900" fill="#ffffff" fontFamily="sans-serif" textAnchor="middle">ADMISSION OPEN!</text>
                    <text x="100" y="85" fontSize="4.5" fontWeight="bold" fill="#1e293b" fontFamily="sans-serif" textAnchor="middle">ARTS &amp; SCIENCE</text>
                    <text x="100" y="93" fontSize="4.5" fontWeight="bold" fill="#1e293b" fontFamily="sans-serif" textAnchor="middle">COLLEGE</text>
                    <text x="100" y="102" fontSize="3.5" fill="#64748b" fontFamily="sans-serif" textAnchor="middle">Estd 1999 • Tamil Nadu</text>
                  </svg>
                </div>
              </Link>

              {/* Auto Top Card */}
              <Link href="/services/auto-top-printing" className="bg-white border border-gray-100 rounded-3xl p-5 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer block">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold text-primary bg-mint px-2 py-0.5 rounded">Auto Top</span>
                  <p className="text-xs text-gray-500">Printed directly on rexine canopy</p>
                </div>
                <div className="h-32 rounded-xl overflow-hidden border border-gray-100 bg-gray-50 relative flex items-center justify-center">
                  {/* Auto Rickshaw Svg */}
                  <svg viewBox="0 0 200 150" className="w-full h-full object-contain" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="autoBodyMob" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#fde047" />
                        <stop offset="50%" stopColor="#eab308" />
                        <stop offset="100%" stopColor="#ca8a04" />
                      </linearGradient>
                      <linearGradient id="rexineTopMob" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#374151" />
                        <stop offset="100%" stopColor="#1f2937" />
                      </linearGradient>
                      <linearGradient id="adBannerMob" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#1e3a8a" />
                        <stop offset="100%" stopColor="#0f172a" />
                      </linearGradient>
                    </defs>
                    <g transform="translate(20, 15) scale(0.8)">
                      {/* Ground Shadow */}
                      <ellipse cx="100" cy="132" rx="60" ry="7" fill="#1b4332" opacity="0.12" />

                      {/* Side Rear-View Mirrors */}
                      <path d="M 38,62 Q 28,60 28,52 C 28,48 34,48 38,52 Z" fill="#111827" />
                      <path d="M 38,52 L 44,57" stroke="#111827" strokeWidth="1.5" />
                      <path d="M 162,62 Q 172,60 172,52 C 172,48 166,48 162,52 Z" fill="#111827" />
                      <path d="M 162,52 L 156,57" stroke="#111827" strokeWidth="1.5" />

                      {/* Wheels */}
                      <rect x="52" y="108" width="16" height="24" rx="4" fill="#111827" />
                      <rect x="56" y="112" width="8" height="16" fill="#374151" />
                      <rect x="132" y="108" width="16" height="24" rx="4" fill="#111827" />
                      <rect x="136" y="112" width="8" height="16" fill="#374151" />

                      {/* Lower Chassis & Chrome Bumper */}
                      <path d="M 40,112 L 160,112 L 155,124 L 45,124 Z" fill="#1f2937" />
                      <rect x="36" y="118" width="128" height="4" rx="2" fill="#9ca3af" stroke="#6b7280" strokeWidth="0.5" />
                      
                      {/* License Plate */}
                      <rect x="85" y="115" width="30" height="9" rx="1.5" fill="#facc15" stroke="#ca8a04" strokeWidth="0.5" />
                      <text x="100" y="121" fontSize="4.5" fontWeight="900" fill="#111827" fontFamily="monospace" textAnchor="middle">TN-33-SBA</text>

                      {/* Yellow Metal Cab Back Panel */}
                      <path d="M 42,75 C 42,100 44,112 48,112 L 152,112 C 156,112 158,100 158,75 Z" fill="url(#autoBodyMob)" />
                      <rect x="74" y="102" width="52" height="6" rx="3" fill="#1e293b" opacity="0.1" />

                      {/* Tail Lights */}
                      <rect x="46" y="86" width="14" height="7" rx="2" fill="#ef4444" stroke="#b91c1c" strokeWidth="0.5" />
                      <rect x="46" y="86" width="4" height="7" fill="#f59e0b" />
                      <rect x="140" y="86" width="14" height="7" rx="2" fill="#ef4444" stroke="#b91c1c" strokeWidth="0.5" />
                      <rect x="150" y="86" width="4" height="7" fill="#f59e0b" />

                      {/* Curved Canopy Rexine Top */}
                      <path d="M 42,75 C 42,65 44,24 54,20 C 62,16 138,16 146,20 C 156,24 158,65 158,75 Z" fill="url(#rexineTopMob)" />
                      
                      {/* Canopy Seams / Fabric Folds */}
                      <path d="M 54,20 Q 100,28 146,20" fill="none" stroke="#111827" strokeWidth="1" opacity="0.4" />
                      <path d="M 54,20 Q 48,50 42,75" fill="none" stroke="#111827" strokeWidth="1.2" opacity="0.4" />
                      <path d="M 146,20 Q 152,50 158,75" fill="none" stroke="#111827" strokeWidth="1.2" opacity="0.4" />

                      {/* Flexible Rexine Back Window Banner Display */}
                      <path d="M 50,24 L 150,24 L 146,65 L 54,65 Z" fill="url(#adBannerMob)" />
                      <path d="M 50,24 L 150,24 L 146,65 L 54,65 Z" stroke="#eab308" strokeWidth="1.5" fill="none" />
                      <circle cx="53" cy="27" r="1.5" fill="#facc15" />
                      <circle cx="147" cy="27" r="1.5" fill="#facc15" />
                      <circle cx="56" cy="62" r="1.5" fill="#facc15" />
                      <circle cx="144" cy="62" r="1.5" fill="#facc15" />

                      {/* Advertisement Copy */}
                      <rect x="68" y="27" width="64" height="7" rx="1.5" fill="#dc2626" />
                      <text x="100" y="32.5" fontSize="5" fontWeight="900" fill="#ffffff" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.5">EXCEL COLLEGE</text>
                      <text x="100" y="44" fontSize="8" fontWeight="900" fill="#facc15" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.2">ADMISSIONS OPEN</text>
                      <text x="100" y="52.5" fontSize="4.5" fontWeight="700" fill="#ffffff" fontFamily="sans-serif" textAnchor="middle">ENGINEERING &amp; ARTS</text>
                      <text x="100" y="59" fontSize="3.5" fontWeight="500" fill="#93c5fd" fontFamily="sans-serif" textAnchor="middle">CALL: 93456 32103</text>
                    </g>
                  </svg>
                </div>
              </Link>
            </div>

          </div>
        </div>

      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-white border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary-light mb-3">
              Our Core Services
            </h2>
            <p className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 font-sans">
              Specialized Local Advertising Services
            </p>
            <div className="w-12 h-1 bg-gold mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <Link
                  href={svc.path}
                  key={i}
                  className="bg-white/70 backdrop-blur-md border border-gray-100/80 hover:border-primary/20 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:bg-white/90 transition-all duration-300 group flex flex-col sm:flex-row gap-6 cursor-pointer items-stretch"
                >
                  {/* Left Side: Information */}
                  <div className="flex-1 flex flex-col justify-between py-2">
                    <div>
                      <div className={`w-12 h-12 rounded-xl ${svc.accent} flex items-center justify-center mb-6`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                        {svc.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {svc.desc}
                      </p>
                    </div>
                    
                    <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-primary group-hover:text-primary-light transition-colors">
                      <span>Read Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Right Side: Product Mockup Image */}
                  <div className="w-full sm:w-48 h-48 sm:h-auto shrink-0 relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-gray-50">
                    <img 
                      src={svc.bgImage} 
                      alt={svc.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary-light mb-3">
                Our Work
              </h2>
              <p className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 font-sans">
                Our Print Showcase
              </p>
            </div>
            
            {/* Filter Toggle Buttons */}
            <div className="flex gap-2 mt-6 md:mt-0 bg-white p-1.5 rounded-full border border-gray-200 shadow-sm shrink-0">
              <button
                onClick={() => setShowcaseTab("sunpack")}
                className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer ${
                  showcaseTab === "sunpack"
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Sunpack Sheets
              </button>
              <button
                onClick={() => setShowcaseTab("autotops")}
                className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer ${
                  showcaseTab === "autotops"
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Auto Tops
              </button>
            </div>
          </div>

          {/* Conditional Rendering Grid */}
          {showcaseTab === "autotops" ? (
            /* Auto Tops Grid */
            <div key="showcase-autotops" className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {autoTopProjects.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all group"
                >
                  <div
                    className="h-64 flex items-center justify-center p-6 text-center text-white/10 group-hover:scale-[1.01] transition-transform duration-300 relative bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.img})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4 right-4 text-left">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-black/45 px-2.5 py-1 rounded-md backdrop-blur-xs">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Sunpack Sheets Interactive Showcase */
            <div key="showcase-sunpack" className="max-w-6xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {sunpackSizes.map((s) => {
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

              {/* Split Screen Showcase Block */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6 text-left">
                {/* Dimensions & Proportions Guide */}
                <div className="bg-white border border-gray-100 rounded-3xl p-6 flex flex-col justify-between">
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
          )}


        </div>
      </section>

      {/* Trust Factors / Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary-light mb-3">
                Uncompromising Standards
              </h2>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6 font-sans leading-tight">
                Why Businesses Trust Sree Balaji Advertising
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Since 1999, we have stayed committed to delivering top-quality bulk prints. We assist businesses, schools, and hospitals in setting up high-visibility promotions across Tamil Nadu.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "27 Years of Local Expertise",
                    desc: "Established in 1999, we understand durable canvas flex stitching, pole board sizing, and transit advertising rules.",
                    icon: Award,
                  },
                  {
                    title: "High-Volume Machinery Capabilities",
                    desc: "Equipped with high-speed screen printing tables and UV flatbed printers to deliver thousands of boards on tight schedules.",
                    icon: Shield,
                  },
                  {
                    title: "Union and Auto Stand Partnerships",
                    desc: "Seamless rollout on local Auto Tops through coordination with local drivers.",
                    icon: Clock,
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-mint rounded-lg flex items-center justify-center shrink-0 text-primary">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-gray-900">{item.title}</h4>
                        <p className="text-xs text-gray-600 leading-relaxed mt-1">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Simulated premium image/box */}
            <div className="bg-emerald-950 rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl h-[450px] flex flex-col justify-end">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
              <div className="absolute inset-0 bg-[url('/sunpack-sheet-mockup.png')] bg-cover bg-center opacity-25" />
              <div className="relative z-20">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                  Weatherproof Focus
                </span>
                <h4 className="text-2xl font-extrabold mt-4 mb-2">
                  Built to Withstand Tamil Nadu Sun and Monsoon.
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Every Sunpack sheet is printed with UV-resistant inks and fitted with durable metal eyelets to prevent color fading, tearing, and wind damage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary-light mb-3">
              Testimonials
            </h2>
            <p className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 font-sans">
              What Our Clients Say
            </p>
            <div className="w-12 h-1 bg-gold mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-gold mb-4">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-gray-600 text-sm italic leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{t.author}</h4>
                  <p className="text-[11px] text-gray-500 font-semibold uppercase mt-0.5">
                    {t.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section on Home */}
      <section className="py-20 bg-white border-t border-gray-100" id="contact-home">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary-light mb-3">
                Let&apos;s Build Your Project
              </h2>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 font-sans">
                Request a Print Quote
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Ready to roll out localized marketing? Drop your specifications and our print consultants will contact you with custom packages.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-xs flex items-start space-x-3.5">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                      Call Us Directly
                    </h4>
                    <a
                      href="tel:+919345632103"
                      className="text-sm font-semibold text-gray-900 hover:text-primary transition-colors block mt-1"
                    >
                      +91 93456 32103
                    </a>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-xs flex items-start space-x-3.5">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                      Email Query
                    </h4>
                    <a
                      href="mailto:sreebalajiadvertising@gmail.com"
                      className="text-sm font-semibold text-gray-900 hover:text-primary transition-colors block mt-1"
                    >
                      sreebalajiadvertising@gmail.com
                    </a>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-xs flex items-start space-x-3.5 sm:col-span-2">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                      Head Office Address
                    </h4>
                    <p className="text-sm font-semibold text-gray-900 mt-1">
                      L362, Periyar Nagar, Erode - 638009, Tamil Nadu
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Column */}
            <div className="flex flex-col justify-center">
              <MapEmbed />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

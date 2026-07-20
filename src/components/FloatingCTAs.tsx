"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingCTAs() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      {/* WhatsApp CTA */}
      <a
        href="https://wa.me/919345632103?text=Hi%20Sree%20Balaji%20Advertising%2C%20I'm%20interested%20in%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 text-white rounded-full shadow-lg hover:bg-emerald-600 transition-all duration-300 hover:scale-110 active:scale-95 animate-bounce"
        aria-label="Chat on WhatsApp"
        style={{ animationDuration: "3s" }}
      >
        <span className="absolute right-16 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
          WhatsApp Us
        </span>
        <MessageCircle className="w-6 h-6 fill-white" />
      </a>  

      {/* Direct Call CTA */}
      <a
        href="tel:+919345632103"
        className="group relative flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:bg-primary-light transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Call Now"
      >
        <span className="absolute right-16 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
          Call Now
        </span>
        <Phone className="w-5 h-5 fill-white" />
      </a>
    </div>
  );
}

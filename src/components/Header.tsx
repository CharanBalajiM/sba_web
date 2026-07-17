"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import RippleEffect from "./RippleEffect";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();
  const isServicesActive = pathname.startsWith("/services");

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    { name: "Sunpack Sheet Printing", path: "/services/sunpack-sheet-printing" },
    { name: "Auto Top Printing", path: "/services/auto-top-printing" },
  ];

  // Close dropdown on path changes
  useEffect(() => {
    setServicesDropdownOpen(false);
    setIsOpen(false);
  }, [pathname]);

  // Click outside to close services dropdown
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("#services-menu-btn") && !target.closest("#services-dropdown")) {
        setServicesDropdownOpen(false);
      }
    };
    if (servicesDropdownOpen) {
      document.addEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [servicesDropdownOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Name */}
          <Link href="/" className="flex items-center space-x-3 group">
            <img 
              src="/logo-v2.png" 
              alt="SBA Logo" 
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-primary font-sans leading-none">
                Sree Balaji
              </span>
              <span className="text-[10px] text-gray-500 tracking-wider uppercase font-semibold leading-normal mt-1">
                Advertising • Estd 1999
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`text-sm font-semibold transition-all duration-200 px-4 py-2 rounded-full ${
                    isActive
                      ? "bg-primary text-white shadow-sm"
                      : "text-gray-600 hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Services Dropdown in Header */}
            <div className="relative">
              <button 
                id="services-menu-btn"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`text-sm font-semibold px-4 py-2 rounded-full flex items-center space-x-1 cursor-pointer transition-colors ${
                  servicesDropdownOpen 
                    ? "bg-mint text-primary" 
                    : isServicesActive
                      ? "bg-primary text-white shadow-sm"
                      : "text-gray-600 hover:text-primary hover:bg-gray-50"
                }`}
              >
                <span>Services</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                id="services-dropdown"
                className={`absolute right-0 mt-2 w-64 bg-white border border-gray-100 rounded-xl shadow-lg transition-all duration-300 transform overflow-hidden ${
                  servicesDropdownOpen 
                    ? "opacity-100 pointer-events-auto translate-y-0" 
                    : "opacity-0 pointer-events-none translate-y-2"
                }`}
              >
                <div className="p-2 bg-gray-50 text-[11px] font-bold text-gray-400 uppercase tracking-wider px-4 py-2 border-b border-gray-100">
                  Specialized Printing
                </div>
                <div className="py-1">
                  {services.map((svc) => {
                    const isSvcActive = pathname === svc.path;
                    return (
                      <Link
                        key={svc.name}
                        href={svc.path}
                        onClick={() => setServicesDropdownOpen(false)}
                        className={`block px-4 py-2.5 text-xs transition-colors ${
                          isSvcActive
                            ? "bg-mint text-primary font-semibold"
                            : "text-gray-700 hover:bg-mint hover:text-primary"
                        }`}
                      >
                        {svc.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+919345632103"
              className="flex items-center space-x-2 text-xs font-semibold text-primary hover:text-primary-light border border-primary/20 hover:border-primary/50 px-4 py-2 rounded-full hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.97] transition-all duration-300 group"
            >
              <Phone className="w-3.5 h-3.5 hover-wiggle" />
              <span>+91 93456 32103</span>
            </a>
            <a
              href="https://wa.me/919345632103?text=Hi%20Sree%20Balaji%20Advertising%2C%20I'm%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-xs font-semibold text-primary px-5 py-2.5 rounded-full transition-all duration-300 relative overflow-hidden group glass-button-green hover:-translate-y-[1px] hover:scale-[1.02] active:scale-[0.97]"
            >
              <RippleEffect color="rgba(15, 61, 36, 0.2)" />
              {/* Looping White Glass Shimmer Overlay */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none animate-shimmer-loop" />
              <MessageSquare className="w-3.5 h-3.5 text-primary/80 relative z-10 hover-bounce" />
              <span className="relative z-10">Get Quote</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white shadow-xl absolute top-full left-0 w-full z-40 transition-all duration-300">
          <nav className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-semibold transition-colors px-4 py-2 rounded-xl block ${
                    isActive ? "bg-primary text-white" : "text-gray-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="border-t border-gray-100 my-2 pt-4">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-3">
                Our Specialized Services
              </span>
              <div className="grid grid-cols-1 gap-2.5 pl-2">
                {services.map((svc) => {
                  const isSvcActive = pathname === svc.path;
                  return (
                    <Link
                      key={svc.name}
                      href={svc.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-sm font-semibold transition-colors px-4 py-2 rounded-xl block ${
                        isSvcActive
                          ? "bg-mint text-primary"
                          : "text-gray-600 hover:text-primary"
                      }`}
                    >
                      {svc.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
              <a
                href="tel:+919345632103"
                className="flex items-center justify-center space-x-2 text-sm font-semibold text-primary border border-primary/20 py-3 rounded-xl hover:bg-gray-50 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.97] transition-all duration-300 group"
              >
                <Phone className="w-4 h-4 hover-wiggle" />
                <span>Call: +91 93456 32103</span>
              </a>
              <a
                href="https://wa.me/919345632103?text=Hi%20Sree%20Balaji%20Advertising%2C%20I'm%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 text-sm font-semibold bg-primary text-white py-3 rounded-xl hover:bg-primary-light shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.97] transition-all duration-300 group"
              >
                <MessageSquare className="w-4 h-4 text-green-300 hover-bounce" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import MapEmbed from "@/components/MapEmbed";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Request Print Project Quote",
  description:
    "Get in touch with Sree Balaji Advertising in Erode. Contact us at +91 93456 32103 or email sreebalajiadvertising@gmail.com for Sunpack sheet printing and Auto Top branding.",
  alternates: {
    canonical: "https://sreebalajiadvertising.co.in/contact",
  },
};

export default function Contact() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-down">
          <h1 className="text-xs font-bold uppercase tracking-widest text-primary-light mb-3">
            Contact Us
          </h1>
          <p className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight font-sans">
            Start Your Outdoor Print Project
          </p>
          <div className="w-12 h-1 bg-gold mx-auto mt-5 rounded-full" />
          <p className="text-gray-600 mt-6 text-base leading-relaxed">
            Ready to design or order advertising materials for your business? Visit our print studio in Erode, give us a call, or send an email. We will guide you with quantity recommendations.
          </p>
        </div>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div 
            className="bg-gray-50 border border-gray-100 p-8 rounded-2xl flex items-start space-x-4 animate-scale-up opacity-0"
            style={{ animationDelay: "150ms", animationFillMode: "forwards" }}
          >
            <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Phone Contacts</h3>
              <p className="text-xs text-gray-500 mt-1">Available Mon-Sat, 9AM to 8PM</p>
              <a
                href="tel:+919345632103"
                className="text-base font-semibold text-primary hover:text-primary-light block mt-2"
              >
                +91 93456 32103
              </a>
            </div>
          </div>

          <div 
            className="bg-gray-50 border border-gray-100 p-8 rounded-2xl flex items-start space-x-4 animate-scale-up opacity-0"
            style={{ animationDelay: "250ms", animationFillMode: "forwards" }}
          >
            <Mail className="w-6 h-6 text-primary shrink-0 mt-1" />
            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Email Enquiries</h3>
              <p className="text-xs text-gray-500 mt-1">Send artwork or specifications for quotes</p>
              <a
                href="mailto:sreebalajiadvertising@gmail.com"
                className="text-base font-semibold text-primary hover:text-primary-light block mt-2 break-all"
              >
                sreebalajiadvertising@gmail.com
              </a>
            </div>
          </div>

          <div 
            className="bg-gray-50 border border-gray-100 p-8 rounded-2xl flex items-start space-x-4 animate-scale-up opacity-0"
            style={{ animationDelay: "350ms", animationFillMode: "forwards" }}
          >
            <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Business Hours</h3>
              <p className="text-xs text-gray-500 mt-1">Visit us to inspect material quality</p>
              <p className="text-sm font-semibold text-gray-900 mt-2">
                Mon - Sat: 9:00 AM - 8:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Form and Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Interactive Form */}
          <div 
            className="animate-fade-in-up opacity-0"
            style={{ animationDelay: "450ms", animationFillMode: "forwards" }}
          >
            <ContactForm />
          </div>

          {/* Location and Map */}
          <div 
            className="space-y-8 animate-fade-in-up opacity-0"
            style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
          >
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-3xl">
              <h2 className="text-xl font-bold text-gray-900 mb-4 font-sans">Our Studio Location</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Visit our workspace in Erode to inspect physical samples of coroplast sheets, check print sharpness, and feel the heavy canvas flex tops.
              </p>
              <div className="flex items-start space-x-3 text-sm font-semibold text-gray-900">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Vasuki Street Number 1, opposite to SCS hospital, Erode Fort,
                  <br />
                  Erode - 638001, Tamil Nadu
                </span>
              </div>
            </div>
            <MapEmbed />
          </div>
        </div>
      </div>
    </div>
  );
}

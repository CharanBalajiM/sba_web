"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Select a printing service",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format the WhatsApp message with markdown bolding
    const emailVal = formData.email ? formData.email : "Not provided";
    const messageText = `Hi Sree Balaji Advertising,\n\nI would like to make an enquiry:\n\n*Name*: ${formData.name}\n*Phone*: ${formData.phone}\n*Email*: ${emailVal}\n*Service*: ${formData.service}\n\n*Message*:\n${formData.message}`;
    
    // WhatsApp URL (Targeting +91 93456 32103)
    const whatsappUrl = `https://wa.me/919345632103?text=${encodeURIComponent(messageText)}`;

    // Simulate small latency for UX transition before opening WhatsApp
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "Select a printing service",
      message: "",
    });

    // Auto-clear success message after 6 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 6000);
  };

  if (submitSuccess) {
    return (
      <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-3xl text-center space-y-4 animate-scale-up">
        <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-emerald-900">Enquiry Sent Successfully!</h3>
        <p className="text-sm text-emerald-700 max-w-sm mx-auto leading-relaxed">
          Thank you for reaching out. Sree Balaji Advertising will review your project details and contact you shortly.
        </p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="mt-2 text-xs font-semibold text-emerald-800 hover:text-emerald-950 underline underline-offset-4 cursor-pointer"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-xl">
      <h2 className="text-xl font-bold text-gray-900 mb-6 font-sans">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary text-sm transition-all"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary text-sm transition-all"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary text-sm transition-all"
            />
          </div>
        </div>
        <div>
          <label htmlFor="service" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Service Needed
          </label>
          <select
            id="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary text-sm bg-white transition-all text-gray-700"
          >
            <option>Select a printing service</option>
            <option>Sunpack Sheet Printing</option>
            <option>Auto Top Printing</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Project Details
          </label>
          <textarea
            id="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Specify board sizes, number of vehicles, printing colors, or layout design details..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary text-sm transition-all"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary disabled:bg-primary-light/70 disabled:cursor-not-allowed text-white hover:bg-primary-light py-4 rounded-xl text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-2 group"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span>Send Enquiry</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}

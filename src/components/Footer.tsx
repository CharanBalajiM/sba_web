import Link from "next/link";
import { Phone, Mail, MapPin, Printer, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Request Quote", path: "/contact" },
  ];

  const serviceLinks = [
    { name: "Sunpack Sheet Printing", path: "/services/sunpack-sheet-printing" },
    { name: "Auto Top Printing", path: "/services/auto-top-printing" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <img 
                src="/logo-v2.png" 
                alt="SBA Logo" 
                className="h-10 w-auto object-contain brightness-0 invert"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white leading-none">
                  Sree Balaji
                </span>
                <span className="text-[10px] text-gray-500 tracking-wider uppercase font-semibold leading-normal">
                  Advertising • Estd 1999
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mt-2 leading-relaxed">
              Premium Sunpack sheet printing and Auto rickshaw hood branding across Tamil Nadu. Crafting high-impact local marketing campaigns for over 25 years.
            </p>
            <div className="flex items-center space-x-2 text-xs text-primary-light font-semibold pt-2">
              <ShieldCheck className="w-4 h-4 text-primary-light" />
              <span>Certified Printing Professionals</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Company
            </h3>
            <ul className="space-y-3.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Specialized Printing
            </h3>
            <ul className="space-y-3.5">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-light mt-0.5 shrink-0" />
                <span>
                  L362, Periyar Nagar,
                  <br />
                  Erode - 638009, Tamil Nadu
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-light shrink-0" />
                <a href="tel:+919345632103" className="hover:text-white transition-colors">
                  +91 93456 32103
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-light shrink-0" />
                <a
                  href="mailto:sreebalajiadvertising@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  sreebalajiadvertising@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower footer section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {currentYear} Sree Balaji Advertising. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="flex items-center space-x-1">
              <Printer className="w-3.5 h-3.5" />
              <span>Premium Printing Partner since 1999</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

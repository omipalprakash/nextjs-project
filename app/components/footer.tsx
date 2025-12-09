import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

const productLinks = [
  "PVC & CPVC Pressure Pipes",
  "Gravity Sewer Pipes",
  "Ductile Iron Pipes",
  "PE/HDPE Pipes",
  "Polypropylene Pipes",
  "Fittings & Accessories",
  "View All Products",
];

const toolboxLinks = [
  "Product Catalogs",
  "Technical Data Sheets",
  "CAD Drawings",
  "Installation Guides",
  "Specifications",
  "Design Calculators",
  "Literature Library",
];

const newsItems = [
  { date: "Nov 15, 2024", title: "ApexPipe wins Infrastructure Award" },
  { date: "Oct 28, 2024", title: "New manufacturing facility opens" },
  { date: "Oct 10, 2024", title: "Sustainability report released" },
];

const Footer = () => {
  return (
    <footer className="bg-[#18212b] text-footer-text">
      {/* Main Footer */}
      <div className="container px-4 sm:px-6 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {/* Product & Resource Center */}
          <div className="col-span-1">
            <h3 className="font-display text-sm sm:text-base md:text-lg font-bold text-white mb-4 sm:mb-6 uppercase tracking-wide">
              Product & Resource Center
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {productLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-xs sm:text-sm hover:text-[#00a35a] transition-colors text-[rgb(179,191,204)]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Engineer's Toolbox */}
          <div className="col-span-1">
            <h3 className="font-display text-sm sm:text-base md:text-lg font-bold text-white mb-4 sm:mb-6 uppercase tracking-wide">
              Engineer's Toolbox
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {toolboxLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-xs sm:text-sm hover:text-[#00a35a] transition-colors text-[rgb(179,191,204)]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* News & Events */}
          <div className="col-span-1">
            <h3 className="font-display text-sm sm:text-base md:text-lg font-bold text-white mb-4 sm:mb-6 uppercase tracking-wide">
              News & Events
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {newsItems.map((item) => (
                <li key={item.title}>
                  <span className="text-[10px] sm:text-xs text-[#00a35a] block mb-1">{item.date}</span>
                  <a href="#" className="text-xs sm:text-sm hover:text-[#00a35a] transition-colors leading-tight block text-[rgb(179,191,204)]">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="font-display text-sm sm:text-base md:text-lg font-bold text-white mb-4 sm:mb-6 uppercase tracking-wide">
              Contact Us
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#00a35a] flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[rgb(179,191,204)]">
                  5200 West Century Blvd.<br />
                  Los Angeles, CA 90045
                </p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#00a35a]" />
                <a href="tel:1-800-555-7473" className="text-xs sm:text-sm hover:text-accent transition-colors text-[rgb(179,191,204)]">
                  1-800-555-PIPE
                </a>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#00a35a]" />
                <a href="mailto:info@apexpipe.com" className="text-xs sm:text-sm hover:text-accent transition-colors text-[rgb(179,191,204)]">
                  info@apexpipe.com
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4">
                <a href="#" className="text-footer-text hover:text-[#00a35a] transition-colors text-[rgb(179,191,204)]" aria-label="Facebook">
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="text-footer-text hover:text-[#00a35a] transition-colors text-[rgb(179,191,204)]" aria-label="Twitter">
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="text-footer-text hover:text-[#00a35a] transition-colors text-[rgb(179,191,204)]" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="text-footer-text hover:text-[#00a35a] transition-colors text-[rgb(179,191,204)]" aria-label="YouTube">
                  <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="text-footer-text hover:text-[#00a35a] transition-colors text-[rgb(179,191,204)]" aria-label="Instagram">
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[rgba(179,191,204,0.2)]">
        <div className="container px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col items-center gap-4 sm:gap-3 md:flex-row md:justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-4">
              <span className="font-display text-lg sm:text-xl font-bold text-white">
                APEX<span className="text-[#00a35a]">PIPE</span>
              </span>
              <span className="text-[10px] sm:text-xs text-[rgba(179,191,204,0.6)]">
                America's Pipe Company
              </span>
            </div>

            {/* Certifications */}
            <div className="flex items-center gap-3 sm:gap-6 flex-wrap justify-center">
              <span className="text-[10px] sm:text-xs text-[rgba(179,191,204,0.6)] uppercase tracking-wide">NSF Certified</span>
              <span className="text-[10px] sm:text-xs text-[rgba(179,191,204,0.6)] uppercase tracking-wide">ISO 9001</span>
              <span className="text-[10px] sm:text-xs text-[rgba(179,191,204,0.6)] uppercase tracking-wide">Made in USA</span>
            </div>

            {/* Copyright */}
            <p className="text-[10px] sm:text-xs text-[rgba(179,191,204,0.6)]">
              © 2024 ApexPipe Inc. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Accent bar */}
      <div className="h-1 bg-[#00a35a]" />
    </footer>
  );
};

export default Footer;

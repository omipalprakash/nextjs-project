// import React from "react";
// import HeroBanner from "../../components/Helper/HeroBanner";
// import ContactSection from "./components/ContactSection";

// const ContactPage = () => {
//   return (
//     <>
//       <HeroBanner />
//       <ContactSection />
//     </>
//   );
// };

// export default ContactPage;
import HeroBanner from "../../components/Helper/HeroBanner";
import { ContactPageClient } from "./components/contact-page-client";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <HeroBanner />
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Breadcrumb Navigation */}
        <div className="border-b border-blue-100 bg-white/50 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-blue-600 hover:text-blue-700">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-gray-700">Contact</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-700">
              What would you like to do today?
            </p>
          </div>

          <ContactPageClient />
        </div>
      </main>
    </>
  );
}

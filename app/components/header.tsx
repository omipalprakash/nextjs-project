"use client"

import { useState } from "react"
import { Menu, X, Search, Facebook, Linkedin, Twitter, Youtube } from "lucide-react"
import Image from "next/image"

const navItems = [
  { label: "HOME", href: "/" },
  { label: "COMPANY", href: "/company" },
  { label: "PRODUCTS", href: "/products" },
  { label: "DISTRIBUTOR LOCATION", href: "/distributor" },
  { label: "CAREERS", href: "/careers" },
  { label: "CONTACT US", href: "/contact" },
  { label: "QUICK LINKS", href: "/quick" },
  { label: "MEDIA & FILMS", href: "/media" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 flex items-center justify-end py-2 gap-4">
          {/* Social Media Icons */}
          <div className="hidden sm:flex items-center gap-3">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors" aria-label="YouTube">
              <Youtube className="w-4 h-4" />
            </a>
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300  px-3 py-1.5 text-sm w-32 lg:w-40 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              <Search className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Request a Quote Button */}
          <button className="border-2 border-[#00a35a] text-[#00a35a] hover:bg-[#00a35a] hover:text-white font-semibold text-xs uppercase tracking-wide px-4 py-1.5 h-9 transition-colors">
            Request a Quote
          </button>
        </div>
      </div>

      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between py-3">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <Image
              src="/jm-eagle-logo.png"
              alt="JM Eagle - Made in America"
              width={80}
              height={80}
              priority
              className="h-16 md:h-20 lg:h-24 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-gray-800 hover:text-[#00a35a] transition-colors whitespace-nowrap text-sm font-bold"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Tablet Navigation (condensed) */}
          <div className="hidden lg:flex xl:hidden items-center gap-1">
            {navItems.slice(0, 5).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-2 py-2 text-[#18212b] hover:text-blue-600 transition-colors whitespace-nowrap text-xs font-semibold"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-800 hover:text-blue-600 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-gray-800 hover:text-blue-600 transition-colors md:hidden"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-800 hover:text-blue-600 transition-colors"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {searchOpen && (
          <div className="md:hidden px-4 pb-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="xl:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-4 space-y-1">
              {/* Mobile Social Icons */}
              <div className="flex sm:hidden items-center gap-4 pb-4 border-b border-gray-200 mb-4">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors" aria-label="YouTube">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>

              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-gray-800 hover:bg-gray-100 hover:text-blue-600 rounded transition-colors font-semibold uppercase text-sm tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200 mt-4">
                <button className="w-full border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-semibold uppercase tracking-wide px-4 py-2 rounded transition-colors">
                  Request a Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Menu,
  X,
  Search,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "COMPANY", href: "/company" },
  { label: "PRODUCTS", href: "/products" },
  { label: "LOCATIONS", href: "/distributor" },
  { label: "CAREERS", href: "/careers" },
  { label: "CONTACT US", href: "/contact" },
  { label: "QUICK LINKS", href: "/quick" },
  { label: "NEWS", href: "/news" },
];

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false); // menu
  const [searchOpen, setSearchOpen] = useState(false); // search

  const searchRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  // 🔥 Outside click for search + menu
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;

      if (
        searchOpen &&
        searchRef.current &&
        !searchRef.current.contains(target)
      ) {
        setSearchOpen(false);
      }

      if (isOpen && menuRef.current && !menuRef.current.contains(target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [searchOpen, isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-t-[1.5mm] border-t-[rgb(0,150,77)]">
      {/* TOP BAR */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 flex items-center justify-end py-2 gap-4">
          <div className="flex items-center gap-3">
            <Link href="https://www.facebook.com/" className="cursor-pointer">
              <Facebook className="w-4 h-4 text-gray-600 hover:text-[#00964d]" />
            </Link>
            <Link href="https://www.linkedin.com/" className="cursor-pointer">
              <Linkedin className="w-4 h-4 text-gray-600 hover:text-[#00964d]" />
            </Link>
            <Link href="https://x.com/" className="cursor-pointer">
              <Twitter className="w-4 h-4 text-gray-600 hover:text-[#00964d]" />
            </Link>
            <Link href="https://www.youtube.com/" className="cursor-pointer">
              <Youtube className="w-4 h-4 text-gray-600 hover:text-[#00964d]" />
            </Link>
          </div>

          {/* DESKTOP SEARCH */}
          <div className="hidden lg:flex items-center relative">
            <button
              onClick={() => setSearchOpen((p) => !p)}
              className="p-2 text-gray-700 hover:text-[#00964d]"
            >
              <Search className="w-5 h-5 cursor-pointer" />
            </button>

            {searchOpen && (
              <div ref={searchRef} className="absolute right-0 z-50">
                <div className="border border-gray-300 bg-white flex items-center gap-3 px-3 py-2 w-[600px]">
                  <Search className="w-5 h-5" />
                  <input
                    autoFocus
                    placeholder="Search..."
                    className="flex-1 text-sm outline-none"
                  />
                  <X
                    className="w-5 h-5 cursor-pointer"
                    onClick={() => setSearchOpen(false)}
                  />
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => router.push("/contact")}
            className="btn-primary"
          >
            Request a Quote
          </button>
        </div>
      </div>

      {/* NAV */}
      <nav className="relative bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between py-3">
          <Link href="/">
            <Image
              src="/jm-eagle-logo.png"
              alt="JM Eagle"
              width={80}
              height={80}
              className="h-16 md:h-20 lg:h-24 w-auto"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-3 py-2 text-sm transition-colors ${
                  isActive(item.href)
                    ? "font-bold text-[#00964d]"
                    : "text-gray-800 hover:text-[#00a35a]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* MOBILE BUTTONS */}
          <div className="flex lg:hidden items-center gap-2">
            <button onClick={() => setSearchOpen((p) => !p)} className="p-2">
              <Search className="w-5 h-5" />
            </button>

            <button onClick={() => setIsOpen((p) => !p)} className="p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* MOBILE SEARCH */}
        {searchOpen && (
          <div ref={searchRef} className="xl:hidden px-4 pb-3">
            <div className="relative">
              <input
                autoFocus
                type="text"
                placeholder="Search..."
                className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
        )}

        {/* MOBILE MENU */}
        {isOpen && (
          <div
            ref={menuRef}
            className=" xl:hidden absolute left-0 top-full w-full bg-white border-t border-gray-200 shadow-lg z-50 transition-all duration-300"
          >
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-sm transition-colors ${
                    isActive(item.href)
                      ? "font-bold text-[#00964d] bg-gray-50"
                      : "text-gray-800 hover:bg-gray-100 hover:text-[#00a35a]"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

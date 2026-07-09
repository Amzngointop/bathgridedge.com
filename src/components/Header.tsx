"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, LayoutGrid } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { categories } from "@/data/categories";
// categories.icon field no longer used in Header — text-only list per BUG G

const navLinks = [
  { href: "/guides", label: "Guides" },
  { href: "/#how-we-choose", label: "How We Choose" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [mobileCatsOpen, setMobileCatsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCategoryOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-stone-950/95 backdrop-blur-sm border-b border-[#E8E6E1] dark:border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-6">
        <Link
          href="/"
          className="font-serif text-xl font-medium text-[#14171A] dark:text-stone-100 tracking-[-0.01em] shrink-0"
        >
          BathGridEdge
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-[#4A4F4A] dark:text-stone-400">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-[#14171A] dark:hover:text-stone-100 transition-colors"
            >
              {l.label}
            </Link>
          ))}

          {/* Category dropdown trigger */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setCategoryOpen((o) => !o)}
              aria-expanded={categoryOpen}
              aria-label="Shop by category"
              className={`flex items-center gap-1.5 hover:text-[#14171A] dark:hover:text-stone-100 transition-colors ${
                categoryOpen ? "text-[#14171A] dark:text-stone-100" : ""
              }`}
            >
              <LayoutGrid size={15} />
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${categoryOpen ? "rotate-180" : ""}`}
              />
            </button>

            {categoryOpen && (
              <div className="absolute right-0 top-full mt-3 w-64 bg-white dark:bg-stone-900 border border-[#E8E6E1] dark:border-stone-700 shadow-sm py-1.5">
                <p className="eyebrow px-4 pt-2 pb-3">Shop by Category</p>
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/best/${cat.slug}`}
                    onClick={() => setCategoryOpen(false)}
                    className="block px-4 py-2.5 text-[13px] text-[#4A4F4A] dark:text-stone-400 hover:bg-[#F7F6F3] dark:hover:bg-stone-800 hover:text-[#14171A] dark:hover:text-stone-100 transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            className="md:hidden p-2 text-[#4A4F4A] dark:text-stone-400"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-stone-950 border-t border-[#E8E6E1] dark:border-stone-800 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="py-2 text-sm text-[#4A4F4A] dark:text-stone-400 hover:text-[#14171A] dark:hover:text-stone-100 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}

          {/* Mobile category sub-section */}
          <div className="border-t border-[#E8E6E1] dark:border-stone-800 mt-2 pt-2">
            <button
              className="w-full flex items-center justify-between py-2 text-sm text-[#4A4F4A] dark:text-stone-400"
              onClick={() => setMobileCatsOpen((o) => !o)}
            >
              <span className="font-medium">Shop by Category</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${mobileCatsOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileCatsOpen && (
              <div className="pl-3 pb-1 flex flex-col gap-0.5">
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/best/${cat.slug}`}
                    onClick={() => { setMenuOpen(false); setMobileCatsOpen(false); }}
                    className="block py-2 text-[13px] text-[#4A4F4A] dark:text-stone-400 hover:text-[#14171A] dark:hover:text-stone-100 transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

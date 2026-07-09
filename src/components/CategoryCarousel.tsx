"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

function getPreviewImage(previewAsin: string): string {
  return products.find((p) => p.asin === previewAsin)?.image ?? "";
}

/*
  BUG N fix: replaced the previous dual-render (hidden md:block grid + md:hidden carousel)
  with a SINGLE implementation per viewport — no chance of both rendering simultaneously.

  BUG M fix: desktop uses grid-cols-3 so each card is ~2× wider than a 6-col layout,
  giving photos substantially more visual weight. Mobile uses wider fixed-width cards
  (260px) in a horizontal scroll track.
*/
export default function CategoryCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  function checkScroll() {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  function scrollBy(dir: -1 | 1) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 300, behavior: "smooth" });
  }

  return (
    <section className="py-14 border-t border-[#E8E6E1] dark:border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-center tracking-[-0.01em] text-[#14171A] dark:text-stone-100 mb-10">
          Browse by Category
        </h2>
      </div>

      {/* ── Desktop: 3-col centered grid (md+) ── */}
      <div className="hidden md:block max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-3 gap-6">
          {categories.map((cat) => {
            const img = getPreviewImage(cat.previewAsin);
            return (
              <Link
                key={cat.slug}
                href={`/best/${cat.slug}`}
                className="group rounded-xl overflow-hidden border border-[#E8E6E1] dark:border-stone-800 hover:border-[#5B7561] dark:hover:border-[#8AA391] transition-colors"
              >
                {/* BUG M: 4/3 landscape with full column width → much larger photos */}
                <div className="aspect-[4/3] overflow-hidden bg-[#F7F6F3] dark:bg-stone-900">
                  {img && (
                    <img
                      src={img}
                      alt={cat.name}
                      className="w-full h-full object-contain transition-transform duration-[400ms] ease-in-out group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="px-4 py-3 bg-[#5B7561]/[0.08] dark:bg-[#8AA391]/10">
                  <p className="text-[11px] font-medium uppercase tracking-widest text-[#3A4D40] dark:text-[#8AA391] leading-snug">
                    {cat.name}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* ── Mobile: horizontal scroll carousel (<md) ── */}
      <div className="relative md:hidden">
        <button
          onClick={() => scrollBy(-1)}
          aria-label="Scroll left"
          className={`absolute left-1 top-[45%] -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white dark:bg-stone-900 border border-[#E8E6E1] dark:border-stone-700 text-[#14171A] dark:text-stone-100 shadow-sm rounded-full transition-opacity ${
            canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <ChevronLeft size={15} />
        </button>

        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto scroll-smooth px-4 pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((cat) => {
            const img = getPreviewImage(cat.previewAsin);
            return (
              /* BUG M: wider cards (260px) for more visual weight on mobile */
              <Link
                key={cat.slug}
                href={`/best/${cat.slug}`}
                className="group shrink-0 w-[260px] rounded-xl overflow-hidden border border-[#E8E6E1] dark:border-stone-800 hover:border-[#5B7561] dark:hover:border-[#8AA391] transition-colors"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#F7F6F3] dark:bg-stone-900">
                  {img && (
                    <img
                      src={img}
                      alt={cat.name}
                      className="w-full h-full object-contain transition-transform duration-[400ms] ease-in-out group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="px-3 py-2.5 bg-[#5B7561]/[0.08] dark:bg-[#8AA391]/10">
                  <p className="text-[11px] font-medium uppercase tracking-widest text-[#3A4D40] dark:text-[#8AA391] leading-snug">
                    {cat.name}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <button
          onClick={() => scrollBy(1)}
          aria-label="Scroll right"
          className={`absolute right-1 top-[45%] -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white dark:bg-stone-900 border border-[#E8E6E1] dark:border-stone-700 text-[#14171A] dark:text-stone-100 shadow-sm rounded-full transition-opacity ${
            canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <ChevronRight size={15} />
        </button>
      </div>
    </section>
  );
}

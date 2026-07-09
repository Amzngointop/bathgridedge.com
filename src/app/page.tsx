"use client";

import Link from "next/link";
import { guides } from "@/data/guides";
import { getTopProductPerCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import FadeUp from "@/components/FadeUp";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import BathroomFitFinder from "@/components/BathroomFitFinder";
import CategoryCarousel from "@/components/CategoryCarousel";

const heroImageUrl =
  "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1600&q=80";

const testimonials = [
  {
    name: "Sarah M.",
    detail: "Renter, Chicago",
    text: "I'd been storing my shampoo on the tub ledge for years. The no-drill caddy guide changed that in one weekend — the adhesive actually holds, even through hot showers. Nothing has fallen.",
  },
  {
    name: "James T.",
    detail: "Parent of three, Austin",
    text: "The under-sink organizer recommendation turned a disaster cabinet into something functional. Pull-out trays mean my kids can actually find what they need without emptying the whole cabinet.",
  },
  {
    name: "Priya K.",
    detail: "Homeowner, Seattle",
    text: "I bought the sage chenille bath mat set after reading the materials guide. The difference between a mat that dries fast and one that sits damp all day is not something I'd thought about before.",
  },
  {
    name: "David L.",
    detail: "Studio apartment, New York",
    text: "The small bathroom guide was exactly what I needed. Vertical tension pole in the shower, rotating tray on the counter — I have the same number of products and my bathroom finally feels like it has space.",
  },
];

export default function HomePage() {
  // BUG K: static — no filter state, no filteredProducts, no dead code
  const topProducts = getTopProductPerCategory();

  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative w-full aspect-[16/7] sm:aspect-[16/6] overflow-hidden bg-[#C8C5BF]">
        <img
          src={heroImageUrl}
          alt="A calm, organized bathroom with soft morning light"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 max-w-3xl">
          <p className="eyebrow text-white/70 mb-2">Bathroom Organization & Accessories</p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-white leading-tight">
            An organized bathroom is<br className="hidden sm:block" /> a calmer morning.
          </h1>
        </div>
      </section>

      {/* Editorial intro */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 border-b border-[#E8E6E1] dark:border-stone-800">
        <p className="max-w-2xl text-base text-[#4A4F4A] dark:text-stone-400 leading-relaxed">
          BathGridEdge is an independent guide to bathroom organization — from shower caddies that actually stick to bath mats built to last. We research what holds up in real bathrooms, so you can buy once and stop reorganizing.
        </p>
      </div>

      {/* ── 2. Browse by Category ────────────────────────────────────────────── */}
      <CategoryCarousel />

      {/* ── 3. Top Picks — static 2×3 grid, no filter tabs (BUG K+L) ────────── */}
      <section id="top-picks" className="max-w-6xl mx-auto px-4 sm:px-6 py-14 border-t border-[#E8E6E1] dark:border-stone-800">
        <div className="flex items-baseline justify-between mb-3">
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#14171A] dark:text-stone-100">
            Top Picks
          </h2>
          <span className="text-[13px] text-[#7A7F7A] dark:text-stone-500 hidden sm:block">
            One best pick per category
          </span>
        </div>

        <AffiliateDisclosure />

        {/*
          BUG L: explicit 3-col on desktop → 2 rows of 3.
          BUG M: with only 3 cols the cards are ~2× wider than a 6-col layout,
                 giving photos much more breathing room without changing aspect ratio.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {topProducts.map((product, i) => (
            <FadeUp key={product.id} delay={i * 60}>
              <ProductCard product={product} />
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── 4. Guides strip ──────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 border-t border-[#E8E6E1] dark:border-stone-800">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-serif text-2xl font-medium text-[#14171A] dark:text-stone-100">
            Organization Guides
          </h2>
          <Link
            href="/guides"
            className="text-[13px] text-[#5B7561] dark:text-[#8AA391] hover:underline"
          >
            All guides →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {guides.slice(0, 3).map((guide, i) => (
            <FadeUp key={guide.slug} delay={i * 80}>
              <Link href={`/guides/${guide.slug}`} className="group block">
                <div className="overflow-hidden bg-[#F7F6F3] dark:bg-stone-900 aspect-[3/2] mb-3 rounded-xl">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-cover transition-transform duration-[400ms] ease-in-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <p className="eyebrow mb-1">{guide.category} · {guide.readTime}</p>
                <h3 className="font-serif text-base font-medium text-[#14171A] dark:text-stone-100 leading-snug group-hover:underline decoration-[#5B7561] decoration-1 underline-offset-2">
                  {guide.title}
                </h3>
                <p className="text-[13px] text-[#4A4F4A] dark:text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                  {guide.excerpt}
                </p>
              </Link>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── 5. Bathroom Fit Finder ───────────────────────────────────────────── */}
      <BathroomFitFinder />

      {/* ── 6. How We Choose ─────────────────────────────────────────────────── */}
      <section
        id="how-we-choose"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-16"
      >
        <p className="eyebrow text-center mb-3">Our Process</p>
        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-center text-[#14171A] dark:text-stone-100 mb-14">
          How We Choose
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              n: "01",
              title: "Research & Signals",
              body: "We analyze purchase patterns, verified buyer feedback, and category-specific performance indicators — absorption rates for mats, adhesion strength for caddies, rust resistance ratings for hardware.",
            },
            {
              n: "02",
              title: "Editorial Standards",
              body: "Products are evaluated against the specific use case each category demands. A renter's storage pick is judged differently than a homeowner's. Fit for purpose matters more than features in isolation.",
            },
            {
              n: "03",
              title: "Ongoing Updates",
              body: "Our picks are reviewed and updated whenever significant new products enter the market or existing recommendations receive substantial new signal. Nothing on this site is set-and-forgotten.",
            },
          ].map((item, i) => (
            <FadeUp key={item.n} delay={i * 100}>
              <div className="flex gap-5">
                <span className="font-serif text-3xl font-medium text-[#E8E6E1] dark:text-stone-700 leading-none shrink-0 select-none">
                  {item.n}
                </span>
                <div>
                  <h3 className="font-serif text-lg font-medium text-[#14171A] dark:text-stone-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-[#4A4F4A] dark:text-stone-400 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── 7. Testimonials ──────────────────────────────────────────────────── */}
      <section className="border-t border-[#E8E6E1] dark:border-stone-800 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="eyebrow text-center mb-3">Reader Feedback</p>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-center text-[#14171A] dark:text-stone-100 mb-12">
            What Readers Say
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#E8E6E1] dark:divide-stone-800">
            {testimonials.map((t, i) => (
              <FadeUp key={i} delay={i * 80} className="px-0 sm:px-6 first:pl-0 last:pr-0 py-8 sm:py-0">
                <p className="font-serif text-[15px] italic text-[#14171A] dark:text-stone-100 leading-relaxed mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="text-[12px] font-medium text-[#4A4F4A] dark:text-stone-400">
                  {t.name}
                </p>
                <p className="text-[12px] text-[#7A7F7A] dark:text-stone-500">
                  {t.detail}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Editor's Note ─────────────────────────────────────────────────── */}
      <section className="border-t border-[#E8E6E1] dark:border-stone-800 py-16 bg-[#F7F6F3] dark:bg-stone-900/50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="eyebrow mb-6">From Our Editors</p>
          <blockquote className="font-serif text-xl sm:text-2xl font-medium text-[#14171A] dark:text-stone-100 leading-relaxed mb-6">
            &ldquo;We don&rsquo;t think a bathroom needs to look like a magazine spread to feel calm. It just needs a place for everything — and nothing in the way. Every pick on this site is chosen because it solves a real problem without creating new ones.&rdquo;
          </blockquote>
          <div>
            <p className="text-[13px] font-medium text-[#4A4F4A] dark:text-stone-400">
              Clara Hensley
            </p>
            <p className="text-[12px] text-[#7A7F7A] dark:text-stone-500">
              Senior Editor, Bath & Storage · BathGridEdge
            </p>
          </div>
        </div>
      </section>

      {/* ── 9. Newsletter ────────────────────────────────────────────────────── */}
      <section className="border-t border-[#E8E6E1] dark:border-stone-800 py-16">
        <div className="max-w-md mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-xl font-medium text-[#14171A] dark:text-stone-100 mb-2">
            New guides, delivered.
          </h2>
          <p className="text-sm text-[#7A7F7A] dark:text-stone-500 mb-8">
            No promotions. Just useful bathroom organization content when it publishes.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 items-stretch"
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-transparent border-b border-[#4A4F4A] dark:border-stone-600 pb-2 text-sm text-[#14171A] dark:text-stone-100 placeholder:text-[#7A7F7A] dark:placeholder:text-stone-600 outline-none focus:border-[#5B7561] dark:focus:border-[#8AA391] transition-colors"
            />
            <button
              type="submit"
              className="text-sm font-medium text-[#5B7561] dark:text-[#8AA391] hover:text-[#3A4D40] dark:hover:text-[#A6BCA9] transition-colors whitespace-nowrap"
            >
              Subscribe →
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

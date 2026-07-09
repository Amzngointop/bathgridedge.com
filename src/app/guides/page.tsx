import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/data/guides";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Bathroom Organization Guides (2026)",
  description:
    "Practical guides to organizing every corner of your bathroom — from the shower to the under-sink cabinet.",
};

export default function GuidesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="max-w-xl mb-12">
        <p className="eyebrow mb-3">2026 Guide Library</p>
        <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#14171A] dark:text-stone-100 mb-4">
          Organization Guides
        </h1>
        <p className="text-base text-[#4A4F4A] dark:text-stone-400 leading-relaxed">
          Practical, room-by-room guidance for building a bathroom that stays organized — not just looks it on moving day.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {guides.map((guide, i) => (
          <FadeUp key={guide.slug} delay={i * 60}>
            <Link href={`/guides/${guide.slug}`} className="group block">
              <div className="overflow-hidden bg-[#F7F6F3] dark:bg-stone-900 aspect-[3/2] mb-4 rounded-xl">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-full object-cover transition-transform duration-[400ms] ease-in-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <p className="eyebrow mb-1.5">{guide.category} · {guide.readTime}</p>
              <h2 className="font-serif text-lg font-medium text-[#14171A] dark:text-stone-100 leading-snug mb-2 group-hover:underline decoration-[#5B7561] decoration-1 underline-offset-2">
                {guide.title}
              </h2>
              <p className="text-[13px] text-[#4A4F4A] dark:text-stone-400 leading-relaxed line-clamp-3">
                {guide.excerpt}
              </p>
            </Link>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}

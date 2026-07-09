import Link from "next/link";
import { categories } from "@/data/categories";

const explore = [
  { href: "/guides", label: "Organization Guides" },
  { href: "/#fit-finder", label: "Bathroom Fit Finder" },
  { href: "/#how-we-choose", label: "How We Choose" },
  { href: "/contact", label: "Contact" },
];

const legal = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
  { href: "/terms", label: "Terms of Use" },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-stone-950 border-t border-[#E8E6E1] dark:border-stone-800 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <p className="font-serif text-lg font-medium text-[#14171A] dark:text-stone-100 mb-3">
            BathGridEdge
          </p>
          <p className="text-[13px] text-[#7A7F7A] dark:text-stone-500 leading-relaxed mb-4">
            Curated picks and practical guides for a calmer, more organized bathroom.
          </p>
          <p className="text-[12px] text-[#7A7F7A] dark:text-stone-500">
            77 Linen Fold Lane, Suite 3
            <br />
            Charleston, SC 29401
          </p>
          <a
            href="mailto:contact@bathgridedge.com"
            className="text-[12px] text-[#5B7561] dark:text-[#8AA391] mt-1 block hover:underline"
          >
            contact@bathgridedge.com
          </a>
        </div>

        <div>
          <p className="eyebrow mb-4">Categories</p>
          <ul className="space-y-2">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/best/${c.slug}`}
                  className="text-[13px] text-[#4A4F4A] dark:text-stone-400 hover:text-[#14171A] dark:hover:text-stone-100 transition-colors"
                >
                  {c.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Explore</p>
          <ul className="space-y-2">
            {explore.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[13px] text-[#4A4F4A] dark:text-stone-400 hover:text-[#14171A] dark:hover:text-stone-100 transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Legal</p>
          <ul className="space-y-2">
            {legal.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[13px] text-[#4A4F4A] dark:text-stone-400 hover:text-[#14171A] dark:hover:text-stone-100 transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-[#E8E6E1] dark:border-stone-800 pt-6">
        <p className="text-[12px] text-[#7A7F7A] dark:text-stone-500">
          © 2026 BathGridEdge.com. All rights reserved.
        </p>
        <p className="text-[12px] text-[#7A7F7A] dark:text-stone-500 max-w-md">
          BathGridEdge is a participant in the Amazon Services LLC Associates Program. We earn from qualifying purchases at no extra cost to you.
        </p>
      </div>
    </footer>
  );
}

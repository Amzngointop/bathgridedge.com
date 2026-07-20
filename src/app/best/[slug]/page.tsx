import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { categories } from "@/data/categories";
import { getProductsByCategory, getAmazonUrl } from "@/data/products";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FadeUp from "@/components/FadeUp";
import ProductCard from "@/components/ProductCard";
import { ArrowUpRight } from "lucide-react";

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return {};
  return {
    title: `Best ${cat.name} (2026)`,
    description: cat.description,
  };
}

export default async function BestCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) notFound();

  const products = getProductsByCategory(slug);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-[12px] text-[#7A7F7A] dark:text-stone-500 mb-8 flex gap-2">
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <span>{cat.name}</span>
      </nav>

      {/* Header */}
      <div className="max-w-2xl mb-6">
        <p className="eyebrow mb-2">Best of 2026</p>
        <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#14171A] dark:text-stone-100 mb-4 leading-tight">
          Best {cat.name}
        </h1>
        <p className="text-base text-[#4A4F4A] dark:text-stone-400 leading-relaxed">
          {cat.description}
        </p>
      </div>

      <AffiliateDisclosure />

      {/* Quick nav */}
      <div className="flex flex-wrap gap-2 mb-10">
        {products.map((p) => (
          <a
            key={p.id}
            href={`#${p.id}`}
            className="text-[12px] px-3 py-1 border border-[#E8E6E1] dark:border-stone-700 text-[#4A4F4A] dark:text-stone-400 hover:border-[#5B7561] hover:text-[#5B7561] dark:hover:text-[#8AA391] transition-colors"
          >
            #{p.rank} {p.badge ?? p.name.split(" ").slice(0, 3).join(" ")}
          </a>
        ))}
      </div>

      {/* Comparison table */}
      <section className="mb-14">
        <h2 className="font-serif text-xl font-medium text-[#14171A] dark:text-stone-100 mb-4">
          At a Glance
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-[13px] border-collapse">
            <thead>
              <tr className="border-b border-[#E8E6E1] dark:border-stone-800">
                {["Product", "Best For", "Key Feature", "Top Con", "Link"].map((h) => (
                  <th
                    key={h}
                    className="text-left py-3 px-3 eyebrow font-medium first:pl-0 last:pr-0"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr
                  key={p.id}
                  className="border-b border-[#E8E6E1] dark:border-stone-800 hover:bg-[#F7F6F3] dark:hover:bg-stone-900 transition-colors"
                >
                  <td className="py-3 px-3 pl-0 font-medium text-[#14171A] dark:text-stone-100 max-w-[180px]">
                    <span className="text-[#7A7F7A] dark:text-stone-500 mr-1">#{p.rank}</span>
                    {p.name.split(" ").slice(0, 5).join(" ")}
                    {p.badge && (
                      <span className="ml-1 text-[11px] text-[#5B7561] dark:text-[#8AA391]">
                        — {p.badge}
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-3 text-[#4A4F4A] dark:text-stone-400 max-w-[140px]">
                    {p.bestFor}
                  </td>
                  <td className="py-3 px-3 text-[#4A4F4A] dark:text-stone-400">
                    {p.keyFeature}
                  </td>
                  <td className="py-3 px-3 text-[#4A4F4A] dark:text-stone-400">
                    {p.topCon}
                  </td>
                  <td className="py-3 px-3 pr-0">
                    <a
                      href={getAmazonUrl(p.asin)}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="inline-flex items-center gap-0.5 text-[#5B7561] dark:text-[#8AA391] hover:text-[#3A4D40] dark:hover:text-[#A6BCA9] transition-colors"
                    >
                      Amazon
                      <ArrowUpRight size={12} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Full product reviews */}
      <div className="space-y-16">
        {products.map((product, i) => (
          <FadeUp key={product.id} delay={i * 40}>
            <article id={product.id} className="scroll-mt-28">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="overflow-hidden bg-[#F7F6F3] dark:bg-stone-900 aspect-[4/5]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain hover:scale-[1.03] transition-transform duration-[400ms]"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="eyebrow mb-1">#{product.rank}</p>
                  {product.badge && (
                    <p className="text-[12px] font-medium text-[#5B7561] dark:text-[#8AA391] uppercase tracking-wide mb-1">
                      {product.badge}
                    </p>
                  )}
                  <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#14171A] dark:text-stone-100 mb-3 leading-snug">
                    {product.name}
                  </h2>
                  <p className="text-sm text-[#4A4F4A] dark:text-stone-400 leading-relaxed mb-5">
                    {product.summary}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                    <div>
                      <p className="eyebrow mb-2">Pros</p>
                      <ul className="space-y-1.5">
                        {product.pros.map((pro) => (
                          <li
                            key={pro}
                            className="text-[13px] text-[#4A4F4A] dark:text-stone-400 flex gap-2"
                          >
                            <span className="text-[#5B7561] dark:text-[#8AA391] shrink-0 mt-0.5">
                              ✓
                            </span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="eyebrow mb-2">Cons</p>
                      <ul className="space-y-1.5">
                        {product.cons.map((con) => (
                          <li
                            key={con}
                            className="text-[13px] text-[#4A4F4A] dark:text-stone-400 flex gap-2"
                          >
                            <span className="text-[#7A7F7A] dark:text-stone-500 shrink-0 mt-0.5">
                              ✗
                            </span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <p className="text-[12px] text-[#7A7F7A] dark:text-stone-500 mb-4">
                    <strong className="font-medium text-[#4A4F4A] dark:text-stone-400">
                      Best for:
                    </strong>{" "}
                    {product.bestFor}
                  </p>

                  <a
                    href={getAmazonUrl(product.asin)}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center gap-1 text-sm text-[#5B7561] dark:text-[#8AA391] hover:text-[#3A4D40] dark:hover:text-[#A6BCA9] transition-colors"
                  >
                    View on Amazon
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </article>
            {i < products.length - 1 && (
              <div className="divider mt-16" />
            )}
          </FadeUp>
        ))}
      </div>

      {/* Bottom disclosure */}
      <div className="mt-14 pt-8 border-t border-[#E8E6E1] dark:border-stone-800">
        <AffiliateDisclosure compact />
      </div>
    </div>
  );
}

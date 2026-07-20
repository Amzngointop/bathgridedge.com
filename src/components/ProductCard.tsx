import { Product, getAmazonUrl } from "@/data/products";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/categories";

interface Props {
  product: Product;
  // `wide` retained for signature compatibility but no longer used in Top Picks
  wide?: boolean;
}

function getCategoryShortName(slug: string): string {
  return categories.find((c) => c.slug === slug)?.shortName ?? slug;
}

/*
  BUG H: matches Browse by Category visual system (rounded-xl, sage-tint label strip,
         same hover scale, same border treatment).
  BUG M: portrait aspect-[4/5] gives substantially taller photos in a 3-col grid,
         title upgraded to text-lg, label strip padding increased.
*/
export default function ProductCard({ product }: Props) {
  const amazonUrl = getAmazonUrl(product.asin);
  const categoryLabel = getCategoryShortName(product.categorySlug);

  return (
    <article className="group rounded-xl overflow-hidden border border-[#E8E6E1] dark:border-stone-800 hover:border-[#5B7561] dark:hover:border-[#8AA391] transition-colors flex flex-col h-full">
      {/* Photo — portrait to give maximum visual weight per card */}
      <div className="aspect-[4/5] overflow-hidden bg-[#F7F6F3] dark:bg-stone-900 shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-[400ms] ease-in-out group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>

      {/* Label strip — sage tint, matching Browse by Category */}
      <div className="px-4 py-3 bg-[#5B7561]/[0.08] dark:bg-[#8AA391]/10 border-t border-[#E8E6E1]/60 dark:border-stone-800">
        <p className="eyebrow mb-1">{categoryLabel}</p>
        <h3 className="font-serif text-lg font-medium text-[#14171A] dark:text-stone-100 leading-snug line-clamp-2">
          {product.name}
        </h3>
      </div>

      {/* Badge + CTA */}
      <div className="px-4 py-3.5 flex items-center justify-between gap-3 flex-wrap mt-auto">
        {product.badge ? (
          <span className="text-[11px] font-medium text-[#5B7561] dark:text-[#8AA391] uppercase tracking-wide">
            {product.badge}
          </span>
        ) : (
          <span />
        )}
        <a
          href={amazonUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-1 text-[12px] text-[#5B7561] dark:text-[#8AA391] hover:text-[#3A4D40] dark:hover:text-[#A6BCA9] transition-colors shrink-0"
        >
          View on Amazon
          <ArrowUpRight size={12} />
        </a>
      </div>
    </article>
  );
}

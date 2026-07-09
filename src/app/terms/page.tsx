import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 py-16">
      <p className="eyebrow mb-3">Legal</p>
      <h1 className="font-serif text-3xl font-medium text-[#14171A] dark:text-stone-100 mb-6">
        Terms of Use
      </h1>
      <div className="space-y-5 text-[14px] text-[#4A4F4A] dark:text-stone-400 leading-relaxed">
        <p>
          By using BathGridEdge.com, you agree to these terms. The site provides informational content about bathroom organization products and is not responsible for purchasing decisions or product experiences.
        </p>
        <p>
          <strong className="font-medium text-[#14171A] dark:text-stone-100">Content:</strong> All written content on this site is original to BathGridEdge and may not be reproduced without attribution and a link to the source page.
        </p>
        <p>
          <strong className="font-medium text-[#14171A] dark:text-stone-100">External links:</strong> We link to Amazon and authoritative sources. We are not responsible for the content or practices of external sites.
        </p>
        <p>
          <strong className="font-medium text-[#14171A] dark:text-stone-100">Accuracy:</strong> We make reasonable efforts to keep product information current, but prices, availability, and product details change. Verify current details on Amazon before purchase.
        </p>
        <p>Last updated: January 2026.</p>
      </div>
    </div>
  );
}

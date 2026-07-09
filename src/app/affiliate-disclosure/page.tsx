import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "BathGridEdge affiliate disclosure and editorial independence statement.",
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 py-16">
      <p className="eyebrow mb-3">Legal</p>
      <h1 className="font-serif text-3xl font-medium text-[#14171A] dark:text-stone-100 mb-6">
        Affiliate Disclosure
      </h1>
      <div className="space-y-5 text-[14px] text-[#4A4F4A] dark:text-stone-400 leading-relaxed">
        <p>
          BathGridEdge.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
        </p>
        <p>
          When you click a product link on this site and make a purchase on Amazon, we may receive a small commission at no additional cost to you. This is how we fund the time spent researching and writing guides.
        </p>
        <p>
          Our editorial selections are made independently of affiliate relationships. Products are evaluated based on quality, fit for purpose, and category-specific criteria — not on commission rate or promotional considerations.
        </p>
        <p>
          If you have questions about our editorial process, contact us at{" "}
          <a
            href="mailto:contact@bathgridedge.com"
            className="text-[#5B7561] dark:text-[#8AA391] hover:underline"
          >
            contact@bathgridedge.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}

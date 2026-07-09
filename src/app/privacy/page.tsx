import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 py-16">
      <p className="eyebrow mb-3">Legal</p>
      <h1 className="font-serif text-3xl font-medium text-[#14171A] dark:text-stone-100 mb-6">
        Privacy Policy
      </h1>
      <div className="space-y-5 text-[14px] text-[#4A4F4A] dark:text-stone-400 leading-relaxed">
        <p>
          BathGridEdge.com does not collect personal data beyond what is necessary to operate the site. We do not run advertising tracking pixels, retargeting systems, or behavioral profiling.
        </p>
        <p>
          <strong className="font-medium text-[#14171A] dark:text-stone-100">Newsletter:</strong> If you subscribe to our newsletter, we store your email address for the purpose of sending guide updates. You can unsubscribe at any time via the link in any email.
        </p>
        <p>
          <strong className="font-medium text-[#14171A] dark:text-stone-100">Amazon links:</strong> When you click through to Amazon, you are subject to Amazon's privacy policy. We do not receive personal data from Amazon as part of the affiliate relationship.
        </p>
        <p>
          <strong className="font-medium text-[#14171A] dark:text-stone-100">Analytics:</strong> We may use anonymized, aggregated analytics to understand which guides are most useful. This data is not linked to individual users.
        </p>
        <p>Last updated: January 2026. For questions: <a href="mailto:contact@bathgridedge.com" className="text-[#5B7561] dark:text-[#8AA391] hover:underline">contact@bathgridedge.com</a></p>
      </div>
    </div>
  );
}

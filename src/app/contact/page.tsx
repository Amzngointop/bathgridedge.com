import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with BathGridEdge.",
};

export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 py-16">
      <p className="eyebrow mb-3">Get in touch</p>
      <h1 className="font-serif text-3xl font-medium text-[#14171A] dark:text-stone-100 mb-6">
        Contact
      </h1>
      <p className="text-[15px] text-[#4A4F4A] dark:text-stone-400 leading-relaxed mb-8">
        Questions about a recommendation, a correction to report, or a partnership inquiry — reach us at the address below. We read every email and respond to substantive questions.
      </p>
      <div className="space-y-3 text-[14px] text-[#4A4F4A] dark:text-stone-400">
        <p>
          <span className="font-medium text-[#14171A] dark:text-stone-100">Email: </span>
          <a
            href="mailto:contact@bathgridedge.com"
            className="text-[#5B7561] dark:text-[#8AA391] hover:underline"
          >
            contact@bathgridedge.com
          </a>
        </p>
        <p>
          <span className="font-medium text-[#14171A] dark:text-stone-100">Address: </span>
          77 Linen Fold Lane, Suite 3, Charleston, SC 29401
        </p>
      </div>
    </div>
  );
}

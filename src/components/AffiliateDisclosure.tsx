export default function AffiliateDisclosure({ compact = false }: { compact?: boolean }) {
  return (
    <p
      className={`text-[12px] text-[#7A7F7A] dark:text-stone-500 italic ${
        compact ? "" : "mb-8"
      }`}
    >
      <strong className="not-italic font-medium text-[#4A4F4A] dark:text-stone-400">
        Affiliate Disclosure:
      </strong>{" "}
      BathGridEdge participates in the Amazon Services LLC Associates Program. We may earn a commission on qualifying purchases at no additional cost to you. Our editorial selections are independent of affiliate relationships.
    </p>
  );
}

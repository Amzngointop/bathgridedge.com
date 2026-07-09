export interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  publishDate: string;
  externalLinks: { url: string; label: string }[];
}

export const guides: Guide[] = [
  {
    slug: "complete-bathroom-organization-guide",
    title: "Complete Bathroom Organization Guide: Room-by-Room Framework (2026)",
    excerpt:
      "A systematic approach to bathroom organization that works across apartment bathrooms, family homes, and everything between. Start with a clear-out, then build zone by zone.",
    category: "Organization",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1564540583246-934409427776?q=80&w=1153&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    publishDate: "2026-01-15",
    externalLinks: [
      {
        url: "https://www.epa.gov/watersense/bathroom-faucets",
        label: "EPA WaterSense: Efficient Bathroom Products",
      },
      {
        url: "https://www.cdc.gov/hygiene/personal-hygiene/index.html",
        label: "CDC: Personal Hygiene Recommendations",
      },
    ],
  },
  {
    slug: "no-drill-storage-for-renters",
    title: "No-Drill Storage Solutions for Renters (2026)",
    excerpt:
      "Security deposits are not worth sacrificing for bathroom storage. This guide covers adhesive, tension, suction, and over-door solutions that leave zero traces at move-out.",
    category: "Renters",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1722650272297-794262e9f3aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    publishDate: "2026-02-03",
    externalLinks: [
      {
        url: "https://www.hud.gov/topics/rental_assistance",
        label: "HUD: Renter Rights and Resources",
      },
      {
        url: "https://www.consumerreports.org/home-garden/bathroom-accessories/",
        label: "Consumer Reports: Bathroom Accessories",
      },
    ],
  },
  {
    slug: "how-to-stop-under-sink-clutter",
    title: "How to Stop Under-Sink Clutter for Good (2026)",
    excerpt:
      "The under-sink cabinet collects what the rest of the bathroom rejects. Here is a step-by-step method for clearing it out, working around the plumbing, and keeping it organized long-term.",
    category: "Storage",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1595515770330-ceeea7d82cfd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    publishDate: "2026-02-20",
    externalLinks: [
      {
        url: "https://www.epa.gov/saferchoice/products",
        label: "EPA Safer Choice: Cleaning Products Guide",
      },
      {
        url: "https://www.nfpa.org/Public-Education/Fire-causes-and-risks/Safety-equipment-and-tools/Flammable-liquids",
        label: "NFPA: Safe Storage of Cleaning Products",
      },
    ],
  },
  {
    slug: "choosing-the-right-bath-mat",
    title: "Choosing the Right Bath Mat: Materials, Absorbency & Safety (2026)",
    excerpt:
      "Chenille, microfiber, memory foam, cotton terry — each material behaves differently underfoot, in the wash, and over years of use. This guide maps your priorities to the right material.",
    category: "Bath Mats",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1634831083590-338cdcd1f160?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    publishDate: "2026-03-05",
    externalLinks: [
      {
        url: "https://www.cpsc.gov/Safety-Education/Safety-Guides/Home/Bathroom-Safety",
        label: "CPSC: Bathroom Safety for All Ages",
      },
      {
        url: "https://www.ncoa.org/article/how-to-prevent-falls-in-the-bathroom",
        label: "NCOA: Preventing Bathroom Falls",
      },
    ],
  },
  {
    slug: "small-bathroom-storage-ideas",
    title: "Small Bathroom Storage Ideas That Actually Work (2026)",
    excerpt:
      "Under 50 square feet is when creative storage becomes necessary. Vertical space, door backs, corner zones, and over-toilet shelving — solutions that multiply capacity without crowding a small room.",
    category: "Small Spaces",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1595515422510-7ece0438c07d?q=80&w=1159&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    publishDate: "2026-03-22",
    externalLinks: [
      {
        url: "https://www.census.gov/construction/chars/highlights.html",
        label: "US Census: Average Home Size Data",
      },
      {
        url: "https://www.architecturaldigest.com/story/small-bathroom-storage-ideas",
        label: "Architectural Digest: Small Bathroom Storage",
      },
    ],
  },
  {
    slug: "bathroom-hygiene-basics",
    title: "Bathroom Hygiene Basics: What Belongs Where (2026)",
    excerpt:
      "Airborne bacteria, cross-contamination risks, and the simple organizational habits that significantly reduce both. A straightforward guide to keeping the bathroom cleaner without more cleaning time.",
    category: "Hygiene",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1737372805905-be0b91ec86fb?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    publishDate: "2026-04-10",
    externalLinks: [
      {
        url: "https://www.cdc.gov/handwashing/when-how-handwashing.html",
        label: "CDC: When and How to Wash Your Hands",
      },
      {
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5094102/",
        label: "NIH Study: Bathroom Bacterial Contamination",
      },
    ],
  },
];

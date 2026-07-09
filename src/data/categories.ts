export interface Category {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  description: string;
  /** ASIN of the product whose image is used in the Browse by Category carousel.
   *  Must be a different product than the rank:1 pick shown in Top Picks. */
  previewAsin: string;
}

export const categories: Category[] = [
  {
    id: "shower-bathtub-organizers",
    slug: "shower-bathtub-organizers",
    name: "Shower & Bathtub Organizers",
    shortName: "Shower",
    description:
      "Keep shampoos, conditioners, and body washes within reach without the rust and clutter. From tension-pole towers to adhesive corner caddies, find the right fit for your tub.",
    // rank:2 product — Sakugi Corner Caddy
    previewAsin: "B0CMJ8H7ZD",
  },
  {
    id: "vanity-countertop-organizers",
    slug: "vanity-countertop-organizers",
    name: "Vanity & Countertop Organizers",
    shortName: "Vanity",
    description:
      "A clear countertop starts your morning right. Rotating trays, drawer organizers, and tiered shelves to corral skincare, makeup, and daily essentials.",
    // rank:2 product — DIY 8-Layer Rotating Organizer
    previewAsin: "B0BR9V9FKP",
  },
  {
    id: "under-sink-cabinet-organizers",
    slug: "under-sink-cabinet-organizers",
    name: "Under-Sink & Cabinet Organizers",
    shortName: "Under-Sink",
    description:
      "The cabinet beneath the sink is wasted potential. Stackable drawers, pull-out trays, and sliding baskets that transform dead space into accessible storage.",
    // rank:2 product — Ukeetap Pull-Out Black
    previewAsin: "B0DNTQ2YNT",
  },
  {
    id: "bath-mats-floor-storage",
    slug: "bath-mats-floor-storage",
    name: "Bath Mats & Floor Storage",
    shortName: "Bath Mats",
    description:
      "Safety and softness underfoot, with options that stay put, absorb fast, and clean easily. Includes chenille, memory foam, microfiber, and cotton terry picks.",
    // rank:2 product — Gorilla Grip Bath Mat
    previewAsin: "B07FPQZG6V",
  },
  {
    id: "toothbrush-holders",
    slug: "toothbrush-holders",
    name: "Toothbrush Holders",
    shortName: "Toothbrush",
    description:
      "A proper toothbrush holder keeps bristles off counters and away from airborne bacteria. Bamboo, stainless steel, wall-mounted, and UV-sanitizing options.",
    // rank:2 product — Bitvae UV Holder
    previewAsin: "B0F3JGLLB8",
  },
  {
    id: "soap-dispensers",
    slug: "soap-dispensers",
    name: "Soap Dispensers",
    shortName: "Soap",
    description:
      "Ditch the cluttered pump bottles. Glass dispensers, touchless sensors, and farmhouse-style pumps that look good and reduce plastic waste at the sink.",
    // rank:2 product — Farmhouse Matte Black Dispenser
    previewAsin: "B0C994176Z",
  },
];

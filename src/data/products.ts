export interface Product {
  id: string;
  asin: string;
  categorySlug: string;
  rank: number;
  name: string;
  badge?: string;
  image: string;
  summary: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  keyFeature: string;
  topCon: string;
}

export const products: Product[] = [
  // ─── Shower & Bathtub Organizers ───────────────────────────────────────────
  {
    id: "shower-1",
    asin: "B0GFCW85CK",
    categorySlug: "shower-bathtub-organizers",
    rank: 1,
    name: "8-Piece Adhesive Shower Caddy Set with Soap Dishes & Hooks",
    badge: "Best Complete Kit",
    image: "https://m.media-amazon.com/images/I/71Q6jFlfOrL._AC_SL1500_.jpg",
    summary:
      "A rare eight-piece system that covers every surface in one purchase. The adhesive mounts hold through steam and humidity, and the matte black finish blends into most tile without looking utilitarian.",
    bestFor: "Renters wanting a complete renter-friendly shower refresh",
    pros: [
      "Eight pieces cover soap, toothbrushes, and hooks in one set",
      "Rust-proof construction survives high-humidity showers",
      "No-drill adhesive rated for tile, glass, and stone",
      "Matte black finish complements modern and traditional bathrooms",
    ],
    cons: [
      "Adhesive needs 24-hour cure before loading with products",
      "Matte black may show water spots more than chrome",
    ],
    keyFeature: "8-piece no-drill system",
    topCon: "Requires 24h adhesive cure time",
  },
  {
    id: "shower-2",
    asin: "B0CMJ8H7ZD",
    categorySlug: "shower-bathtub-organizers",
    rank: 2,
    name: "Sakugi Corner Shower Caddy 2-Pack with 8 Hooks",
    image: "https://m.media-amazon.com/images/I/81OEYX0su9L._AC_SL1500_.jpg",
    summary:
      "Stainless steel corner shelves that fit into unused shower angles. The eight integrated hooks add towel and loofah storage that flat caddies miss entirely.",
    bestFor: "Maximizing corner space in small showers",
    pros: [
      "Stainless steel resists rust in the most steam-heavy showers",
      "Corner placement keeps the main shower wall clear",
      "Eight hooks handle loofahs, razors, and small towels",
      "No-drill adhesive preserves tile grout",
    ],
    cons: [
      "Corner installation requires two flat adjacent walls",
      "Shelf depth is modest — oversized bottles may be unstable",
    ],
    keyFeature: "Corner-fit adhesive stainless steel",
    topCon: "Requires two flat adjacent walls",
  },
  {
    id: "shower-3",
    asin: "B0CPPVH7KF",
    categorySlug: "shower-bathtub-organizers",
    rank: 3,
    name: "NESOMI 7-Piece Adhesive Shower Caddy with Soap Dish & 24 Hooks",
    image: "https://m.media-amazon.com/images/I/71L2coC4CeL._AC_SL1500_.jpg",
    summary:
      "When hook count matters, this seven-piece kit delivers 24 hanging points alongside caddy shelves and a soap dish — enough for a household that cycles through bath accessories.",
    bestFor: "Busy households with lots of hanging accessories",
    pros: [
      "24 hooks accommodate a full family's worth of accessories",
      "Seven pieces provide modular placement flexibility",
      "Stainless steel resists corrosion in wet environments",
      "Soap dish has drainage channels to prevent bar soap from sitting in water",
    ],
    cons: [
      "Installing 7 pieces takes 30–45 minutes total",
      "Chrome finish shows water spots more readily than matte finishes",
    ],
    keyFeature: "24 hooks across 7-piece set",
    topCon: "Longer installation time than smaller sets",
  },
  {
    id: "shower-4",
    asin: "B0DSBM7RQL",
    categorySlug: "shower-bathtub-organizers",
    rank: 4,
    name: "HAMITOR 4-Tier Tension Pole Shower Caddy, 47–121 Inch, Silver",
    image: "https://m.media-amazon.com/images/I/71nnj-gmr4L._AC_SL1500_.jpg",
    summary:
      "A floor-to-ceiling tension pole that requires no tools and leaves no marks. Four shelves provide substantial storage for households with many products.",
    bestFor: "High-volume storage without wall mounting",
    pros: [
      "Adjustable 47–121 inch height fits standard and tall ceilings",
      "No drilling or adhesive required — purely tension-based",
      "Four shelves hold large-format shampoo and conditioner bottles",
      "Rust-resistant coating holds up through daily wet/dry cycles",
    ],
    cons: [
      "Takes up floor space near the tub",
      "Tension poles can shift if installed on uneven or textured ceilings",
    ],
    keyFeature: "No-drill floor-to-ceiling tension pole",
    topCon: "Can shift on textured ceilings",
  },
  {
    id: "shower-5",
    asin: "B0D1C6J36J",
    categorySlug: "shower-bathtub-organizers",
    rank: 5,
    name: "TAILI Heavy-Duty Suction Cup Shower Caddy 2-Pack with Soap Holder",
    image: "https://m.media-amazon.com/images/I/71EqgW5ukZL._AC_SL1500_.jpg",
    summary:
      "Industrial-strength suction cups rated for heavy loads on smooth tile or glass. The integrated soap holder keeps bar soap dry between uses.",
    bestFor: "Smooth-tile or glass shower walls",
    pros: [
      "Heavy-duty suction rated for significant weight on smooth surfaces",
      "Integrated soap dish with drainage keeps bar soap off the caddy floor",
      "2-pack covers two different wall zones",
      "Black metal finish is more premium-looking than plastic alternatives",
    ],
    cons: [
      "Suction cups lose grip on textured, matte, or porous tile",
      "Periodic reseating required every few months",
    ],
    keyFeature: "Heavy-duty suction for smooth tile/glass",
    topCon: "Does not work on textured or porous tile",
  },
  {
    id: "shower-6",
    asin: "B0CXT9YZ24",
    categorySlug: "shower-bathtub-organizers",
    rank: 6,
    name: "YASONIC Large-Capacity Adhesive Shower Caddy 2-Pack",
    image: "https://m.media-amazon.com/images/I/71jacDsqbsL._AC_SL1500_.jpg",
    summary:
      "Deeper shelves than most adhesive caddies, designed for the jumbo-size bottles that standard shelves can't accommodate. A practical choice for households that buy in bulk.",
    bestFor: "Oversized shampoo and body wash bottles",
    pros: [
      "Shelf depth accommodates 33oz and larger bottles upright",
      "2-pack provides redundant storage across two walls",
      "Rustproof finish holds up to daily moisture exposure",
      "No-drill adhesive preserves rental tile",
    ],
    cons: [
      "Larger footprint means fewer placement options on small tile",
      "Black color may show soap scum more visibly",
    ],
    keyFeature: "Extra-deep shelves for large bottles",
    topCon: "Limited placement spots in compact showers",
  },
  {
    id: "shower-7",
    asin: "B0GZZ3VM69",
    categorySlug: "shower-bathtub-organizers",
    rank: 7,
    name: "HAMITOR 4-Tier Corner Tension Pole Caddy with Soap Holder & Hooks, Black",
    image: "https://m.media-amazon.com/images/I/71-yXcLCN8L._AC_SL1500_.jpg",
    summary:
      "Corner-positioned tension pole that doubles the storage footprint without doubling the wall real estate. The matte black finish is a step up aesthetically from standard chrome poles.",
    bestFor: "Renters who need max storage in a corner footprint",
    pros: [
      "Corner position uses otherwise wasted shower real estate",
      "Matte black finish elevates the visual quality of the shower",
      "Integrated soap holder keeps bar soap accessible",
      "Hooks for razors and loofahs included",
    ],
    cons: [
      "Requires an accessible, open shower corner",
      "Taller ceiling needed for full height adjustment range",
    ],
    keyFeature: "Corner-fit tension pole in matte black",
    topCon: "Requires open corner space",
  },
  {
    id: "shower-8",
    asin: "B07XLLLFBB",
    categorySlug: "shower-bathtub-organizers",
    rank: 8,
    name: "SEIRIONE 4-Shelf Adjustable Tension Pole Caddy, 34–116 Inch, Silver",
    image: "https://m.media-amazon.com/images/I/719Kqn9WGZL._AC_SL1500_.jpg",
    summary:
      "A compact tension pole with a lower starting height — the right pick for standard-height bathrooms or bathtub surrounds where ceiling clearance is limited.",
    bestFor: "Standard-height bathrooms with low clearance",
    pros: [
      "34-inch minimum fits low-clearance bathtub surrounds",
      "Four adjustable shelves suit different bottle heights",
      "No tools or hardware required to install",
      "Rust-resistant for long-term wet-environment use",
    ],
    cons: [
      "Silver finish shows water spots more than matte options",
      "Lower weight rating than heavier-gauge alternatives",
    ],
    keyFeature: "Compact range fits 34–116 inch ceilings",
    topCon: "Lower weight capacity than steel alternatives",
  },
  {
    id: "shower-9",
    asin: "B0FVF5QQDY",
    categorySlug: "shower-bathtub-organizers",
    rank: 9,
    name: "Shower Caddy 3-Pack Shelves with Soap Holder, No-Drill Adhesive",
    image: "https://m.media-amazon.com/images/I/71WDD-WWjnL._AC_SL1500_.jpg",
    summary:
      "Three matching shelves that can be positioned at different heights to suit each person's reach. The coordinated look keeps the shower wall tidy rather than eclectic.",
    bestFor: "Households where each person wants their own shelf level",
    pros: [
      "Three pieces allow height customization per household member",
      "Matched set creates a unified, intentional look",
      "Soap holder integrated into one shelf saves counter space",
      "Adhesive-only install leaves tile intact",
    ],
    cons: [
      "Three separate installation steps require planning",
      "Combined weight capacity distributed across three pieces",
    ],
    keyFeature: "Three matching shelves at custom heights",
    topCon: "Three separate adhesive installs required",
  },
  {
    id: "shower-10",
    asin: "B0D1BZJSX4",
    categorySlug: "shower-bathtub-organizers",
    rank: 10,
    name: "YASONIC 6-Pack Adhesive Shower Caddy with Soap Holder",
    image: "https://m.media-amazon.com/images/I/71CCkDvz7YL._AC_SL1500_.jpg",
    summary:
      "For a bathroom shared by many or a shower space that needs organizers on every wall — the six-pack delivers bulk value without sacrificing finish quality.",
    bestFor: "Large shared bathrooms or whole-bathroom caddy refresh",
    pros: [
      "Six pieces allow full shower and bathroom wall coverage",
      "Best per-unit value in the no-drill caddy category",
      "Soap holder in each piece keeps bar soap dry",
      "Rustproof finish consistent across the full set",
    ],
    cons: [
      "Six adhesive installs is a significant time investment",
      "Not practical for small showers with limited flat wall area",
    ],
    keyFeature: "6-pack for whole-bathroom coverage",
    topCon: "Time-intensive to install all six pieces",
  },

  // ─── Vanity & Countertop Organizers ────────────────────────────────────────
  {
    id: "vanity-1",
    asin: "B0C42YJVCD",
    categorySlug: "vanity-countertop-organizers",
    rank: 1,
    name: "Asayuee 2-Tier 360° Rotating Makeup Organizer, Sage Green",
    badge: "Best for Daily Routines",
    image: "https://m.media-amazon.com/images/I/71a1xwzC2tL._AC_SL1500_.jpg",
    summary:
      "A rotating two-tier tray in a genuinely appealing sage green that brings the stored items to you instead of requiring you to reach and rummage. The color integrates well with spa-toned bathrooms.",
    bestFor: "Daily makeup and skincare routines on a crowded vanity",
    pros: [
      "Full 360° rotation brings any product to hand instantly",
      "Sage green finish doubles as décor in earthy-toned bathrooms",
      "Two tiers hold tall bottles on top, small jars on bottom",
      "Large capacity without expanding the countertop footprint",
    ],
    cons: [
      "Rotation mechanism needs occasional cleaning under the base",
      "Sage green color may clash with bold or jewel-toned bathrooms",
    ],
    keyFeature: "360° rotation with sage green finish",
    topCon: "Fixed color limits décor flexibility",
  },
  {
    id: "vanity-2",
    asin: "B0BR9V9FKP",
    categorySlug: "vanity-countertop-organizers",
    rank: 2,
    name: "DIY 8-Layer Rotating Skincare Organizer, Clear Acrylic",
    image: "https://m.media-amazon.com/images/I/61cVCxMax5L._SL1500_.jpg",
    summary:
      "Fully adjustable clear acrylic tower that lets you configure layer count and height to fit your specific product collection. The transparent panels keep everything visible at a glance.",
    bestFor: "Growing skincare collections that change seasonally",
    pros: [
      "DIY configuration means the organizer grows with your collection",
      "Clear acrylic makes every product visible without digging",
      "Rotating base reduces reaching across a deep counter",
      "8 adjustable layers accommodate products of very different heights",
    ],
    cons: [
      "Clear acrylic shows fingerprints and dust prominently",
      "Assembly requires patience to align all layers correctly",
    ],
    keyFeature: "DIY 8-layer adjustable rotating tower",
    topCon: "Shows fingerprints and requires regular cleaning",
  },
  {
    id: "vanity-3",
    asin: "B0DJ8BKK8V",
    categorySlug: "vanity-countertop-organizers",
    rank: 3,
    name: "StorBin 5-Tier Makeup Organizer with 3 Large Drawers, Amber",
    image: "https://m.media-amazon.com/images/I/71FajMftJXL._AC_SL1500_.jpg",
    summary:
      "Warm amber tones make this five-tier organizer feel more like a decorative piece than a storage box. Large drawers accommodate bulky palettes and brushes that smaller organizers ignore.",
    bestFor: "Full makeup collections including large palettes",
    pros: [
      "Amber tint adds warmth and is more elegant than clear plastic",
      "Three large drawers handle oversized palettes and tools",
      "Five tiers maximize vertical storage for tall bottles",
      "Sturdy construction holds substantial weight without bowing",
    ],
    cons: [
      "Amber color limits versatility in very cool or white bathrooms",
      "Large footprint requires significant counter space",
    ],
    keyFeature: "Amber aesthetic with 3 large drawers",
    topCon: "Large footprint demands ample counter space",
  },
  {
    id: "vanity-4",
    asin: "B0DG27JTRS",
    categorySlug: "vanity-countertop-organizers",
    rank: 4,
    name: "White Makeup Organizer with Drawers for Dresser or Countertop",
    image: "https://m.media-amazon.com/images/I/71+qWQZDcYL._AC_SL1500_.jpg",
    summary:
      "A clean-lined white organizer that complements most bathroom palettes without calling attention to itself. Drawers keep frequently used items hidden and accessible simultaneously.",
    bestFor: "Minimalist bathrooms where visual clutter is a priority concern",
    pros: [
      "All-white finish disappears into light-colored bathroom environments",
      "Drawers conceal products for a cleaner countertop appearance",
      "Works equally well on dresser or bathroom counter",
      "Practical size that does not overwhelm smaller surfaces",
    ],
    cons: [
      "White plastic can discolor or yellow over time near windows",
      "Drawer space is more limited than open-shelf alternatives",
    ],
    keyFeature: "Concealed-drawer minimalist white design",
    topCon: "White plastic may yellow near direct sunlight",
  },
  {
    id: "vanity-5",
    asin: "B0DMNK7BBX",
    categorySlug: "vanity-countertop-organizers",
    rank: 5,
    name: "Jesginboo 3-Tier Corner Bathroom Shelf Organizer, Black",
    image: "https://m.media-amazon.com/images/I/61T377WmNPL._AC_SL1500_.jpg",
    summary:
      "A corner-optimized shelf that uses the dead countertop angle most organizers ignore. Three tiers in matte black suit bathrooms that lean modern or industrial.",
    bestFor: "Corner countertop space that typically goes unused",
    pros: [
      "Corner footprint claims otherwise unused countertop real estate",
      "Matte black finish complements modern and industrial aesthetics",
      "Three tiers handle a full morning skincare line-up",
      "Compact profile despite significant storage capacity",
    ],
    cons: [
      "Corner placement means the center of the counter is still occupied",
      "Not ideal if countertop has no accessible corner zone",
    ],
    keyFeature: "Corner-fit 3-tier matte black shelf",
    topCon: "Only works when countertop corner is accessible",
  },
  {
    id: "vanity-6",
    asin: "B0DQ378K28",
    categorySlug: "vanity-countertop-organizers",
    rank: 6,
    name: "HBlife Large Makeup Organizer with Brush Holder, All White",
    image: "https://m.media-amazon.com/images/I/71ZDpOA8SKL._AC_SL1500_.jpg",
    summary:
      "An all-in-one white organizer with a built-in brush holder port — the solution for makeup users who want everything in one place and clean aesthetics to match.",
    bestFor: "Makeup enthusiasts who prioritize brush organization",
    pros: [
      "Integrated brush holder keeps brushes vertical and accessible",
      "Large capacity handles significant product collections",
      "Uniform all-white look creates a spa-like countertop appearance",
      "Durable plastic holds up to daily use without warping",
    ],
    cons: [
      "Brush holder width may not fit very thick handle brushes",
      "Large size is a commitment on smaller countertops",
    ],
    keyFeature: "Built-in brush holder in large all-white format",
    topCon: "May not fit large-handled brushes",
  },
  {
    id: "vanity-7",
    asin: "B0D8KWGK5X",
    categorySlug: "vanity-countertop-organizers",
    rank: 7,
    name: "Pajiriona Makeup Organizer with Drawers & Handle, Sage Green",
    image: "https://m.media-amazon.com/images/I/71U3zTTQW4L._AC_SL1500_.jpg",
    summary:
      "A portable makeup organizer that moves from bathroom to bedroom to travel bag thanks to its integrated handle. The sage green exterior is a natural companion to earthy bathroom palettes.",
    bestFor: "Users who move their makeup kit between rooms",
    pros: [
      "Carry handle makes it genuinely portable between rooms or trips",
      "Sage green color coordinates with organic and earthy bathrooms",
      "Drawers keep products contained during movement",
      "Compact size fits into tote bags for travel",
    ],
    cons: [
      "Smaller capacity than stationary organizers",
      "Drawers may slide if carried at a steep angle",
    ],
    keyFeature: "Portable design with carry handle",
    topCon: "Lower capacity than fixed-position organizers",
  },

  // ─── Under-Sink & Cabinet Organizers ───────────────────────────────────────
  {
    id: "under-1",
    asin: "B0BZNPDHR9",
    categorySlug: "under-sink-cabinet-organizers",
    rank: 1,
    name: "Vtopmart 4-Pack 2-Tier Clear Pull-Out Under Sink Organizers",
    badge: "Best Visibility",
    image: "https://m.media-amazon.com/images/I/81q5VP6XSgL._AC_SL1500_.jpg",
    summary:
      "Clear construction means you can see every product stored inside without opening the cabinet door — the single most underrated feature in under-sink storage. Four pieces transform a full cabinet instantly.",
    bestFor: "Anyone who struggles to find items stored under the sink",
    pros: [
      "Crystal-clear sides reveal contents without opening drawers",
      "Four-pack handles an entire double-sink cabinet in one purchase",
      "Pull-out mechanism eliminates reaching to the back of deep cabinets",
      "Two tiers double the usable vertical space",
    ],
    cons: [
      "Clear plastic shows staining from cleaning product drips over time",
      "Not stackable when plumbing pipes pass through the cabinet floor",
    ],
    keyFeature: "Clear pull-out in a value 4-pack",
    topCon: "Staining visible through clear walls over time",
  },
  {
    id: "under-2",
    asin: "B0DNTQ2YNT",
    categorySlug: "under-sink-cabinet-organizers",
    rank: 2,
    name: "Ukeetap Multi-Purpose Pull-Out Storage Organizers, Black, 2-Pack",
    image: "https://m.media-amazon.com/images/I/811uMdiQm7L._AC_SL1500_.jpg",
    summary:
      "A sleeker black finish for those who want their under-sink storage to look as considered as the rest of the bathroom. The pull-out function works smoothly even when fully loaded.",
    bestFor: "Modern bathrooms where black accents are used throughout",
    pros: [
      "Matte black finish suits modern and high-contrast bathrooms",
      "Smooth pull-out works reliably under heavy loads",
      "Multi-purpose design works in kitchen cabinets too",
      "2-pack is a practical starting point for most single sinks",
    ],
    cons: [
      "Dark interior makes seeing product labels harder in low light",
      "Black surface shows dust and water drips more visibly",
    ],
    keyFeature: "Matte black pull-out for modern bathrooms",
    topCon: "Dark interior reduces visibility",
  },
  {
    id: "under-3",
    asin: "B0BNQ56MH5",
    categorySlug: "under-sink-cabinet-organizers",
    rank: 3,
    name: "Delamu 2-Tier Stackable Under Sink Organizers, White, 2-Pack",
    image: "https://m.media-amazon.com/images/I/81DosoMTz6L._AC_SL1500_.jpg",
    summary:
      "Stackable white units that adapt to the irregular pipe configurations found under most bathroom sinks. The open sides let you see and grab products without pulling the entire unit out.",
    bestFor: "Bathrooms with pipes that interrupt cabinet floor space",
    pros: [
      "Stackable design works around P-traps and supply lines",
      "White finish blends into most cabinet interiors",
      "Open design provides immediate product visibility",
      "2-pack covers most single-sink cabinet needs",
    ],
    cons: [
      "Open sides mean items can fall out if tilted",
      "White shows cleaning product staining faster than darker colors",
    ],
    keyFeature: "Stackable, pipe-friendly design",
    topCon: "Open sides mean items can fall out if tilted",
  },
  {
    id: "under-4",
    asin: "B0CFQDSSYB",
    categorySlug: "under-sink-cabinet-organizers",
    rank: 4,
    name: "REALINN 2-Tier Pull-Out Cabinet Organizer, White",
    image: "https://m.media-amazon.com/images/I/71X8D81V-rL._AC_SL1500_.jpg",
    summary:
      "A single sturdy unit with two-tier pull-out action — straightforward, well-built, and reliably smooth in operation. An excellent first under-sink organizer.",
    bestFor: "First-time under-sink organizer buyers wanting something simple",
    pros: [
      "Simple two-tier design is intuitive to install and use",
      "Pull-out action brings rear-stored items to the front easily",
      "White finish is universally compatible with bathroom cabinetry",
      "Solid construction prevents wobble under heavy cleaning supply loads",
    ],
    cons: [
      "Single unit covers only part of a double-sink cabinet",
      "Two tiers may not be enough for very large product collections",
    ],
    keyFeature: "Simple reliable 2-tier pull-out",
    topCon: "Single unit leaves half a double-sink cabinet unorganized",
  },
  {
    id: "under-5",
    asin: "B0BZCTXKPZ",
    categorySlug: "under-sink-cabinet-organizers",
    rank: 5,
    name: "Vtopmart 4-Pack Large Stackable Acrylic Storage Drawers",
    image: "https://m.media-amazon.com/images/I/81UsPrx1EJL._AC_SL1500_.jpg",
    summary:
      "Acrylic drawers that work as well in under-sink cabinets as they do on open shelving — the premium-looking option for those who want bathroom storage to look intentional.",
    bestFor: "Open shelving or countertop use as much as under-sink",
    pros: [
      "Acrylic construction looks premium compared to basic plastic",
      "Large size accommodates tall product bottles standing upright",
      "Stackable for flexible configuration in deep cabinets",
      "Clear walls make product identification immediate",
    ],
    cons: [
      "Higher cost than wire or basic plastic alternatives",
      "Acrylic scratches more easily than polycarbonate",
    ],
    keyFeature: "Premium acrylic stackable drawers",
    topCon: "Acrylic scratches more easily than polycarbonate",
  },
  {
    id: "under-6",
    asin: "B0CHNL1JYB",
    categorySlug: "under-sink-cabinet-organizers",
    rank: 6,
    name: "Kitstorack 2-Tier Metal Sliding Drawer Under Sink Organizer, Black, 2-Pack",
    image: "https://m.media-amazon.com/images/I/81qh81qY0QL._AC_SL1500_.jpg",
    summary:
      "Metal-frame construction in matte black for those who need durability under cleaning-supply-heavy cabinets. The sliding drawers take a bit more force but hold their position reliably.",
    bestFor: "Heavy cleaning supply storage requiring metal durability",
    pros: [
      "Metal construction handles heavier loads than plastic equivalents",
      "Matte black frame elevates the under-sink aesthetic",
      "Sliding drawer eliminates need to reach to the cabinet back",
      "2-pack covers most single-sink under-cabinet footprints",
    ],
    cons: [
      "Metal slides require slightly more force than plastic-rail alternatives",
      "Heavier tare weight than plastic options",
    ],
    keyFeature: "Metal-frame durability for heavy loads",
    topCon: "Slides require slightly more force to pull",
  },
  {
    id: "under-7",
    asin: "B0B3JJYJSS",
    categorySlug: "under-sink-cabinet-organizers",
    rank: 7,
    name: "DEKAVA 2-Pack 2-Tier Sliding Cabinet Basket, Black",
    image: "https://m.media-amazon.com/images/I/81MikjLhfzL._AC_SL1500_.jpg",
    summary:
      "Open-basket style with pull-out slides — items are visible from multiple angles, making it easy to spot what you need without removing everything from the cabinet.",
    bestFor: "Users who prefer open-basket visibility over drawer privacy",
    pros: [
      "Open basket design offers view-from-all-angles visibility",
      "Sliding mechanism eliminates need to crouch and reach",
      "Black finish coordinates with modern bathroom hardware",
      "2-pack is appropriately sized for a standard vanity cabinet",
    ],
    cons: [
      "Open basket means small items can fall through if not contained",
      "No lid means dust and moisture accumulate on stored products",
    ],
    keyFeature: "Open-basket slide for maximum visibility",
    topCon: "Small items may fall through open basket sides",
  },
  {
    id: "under-8",
    asin: "B0CBDF4SMK",
    categorySlug: "under-sink-cabinet-organizers",
    rank: 8,
    name: "Sevenblue 3-Pack 2-Tier Under Sink Organizers, Black",
    image: "https://m.media-amazon.com/images/I/81RYYEs+bZL._AC_SL1500_.jpg",
    summary:
      "A three-pack that makes sense for double-sink vanities or households with a linen closet that needs the same treatment as the bathroom cabinet. Consistent black finish across all three.",
    bestFor: "Double-sink bathrooms or multi-zone under-cabinet organization",
    pros: [
      "Three pieces cover double-sink cabinets or multiple storage areas",
      "Consistent black finish creates a unified under-cabinet look",
      "Two-tier design doubles vertical space utilization",
      "Best value per piece in the multi-pack under-sink category",
    ],
    cons: [
      "Three units require more time to configure and position",
      "Black interior makes reading small product labels difficult",
    ],
    keyFeature: "3-pack value for double-sink setups",
    topCon: "Three installs required; dark interior reduces label readability",
  },
  {
    id: "under-9",
    asin: "B0D176VGXZ",
    categorySlug: "under-sink-cabinet-organizers",
    rank: 9,
    name: "PXRACK Height-Adjustable 2-Tier Under Sink Organizer, White, 2-Pack",
    image: "https://m.media-amazon.com/images/I/813BIdw-tgL._AC_SL1500_.jpg",
    summary:
      "Adjustable internal height lets you configure each tier independently — critical for fitting around the P-traps and supply lines that make most under-sink cabinets awkward to organize.",
    bestFor: "Cabinets with pipes at unusual heights",
    pros: [
      "Height-adjustable tiers work around virtually any pipe configuration",
      "White finish integrates into most bathroom cabinet interiors",
      "Large size is generous even for deep under-sink cabinets",
      "2-pack covers most bathroom single-sink cabinet footprints",
    ],
    cons: [
      "Adjustment mechanism requires some initial setup time",
      "Large units may not fit in compact cabinet spaces",
    ],
    keyFeature: "Height-adjustable tiers for pipe clearance",
    topCon: "Large size may not fit compact cabinets",
  },
  {
    id: "under-10",
    asin: "B0DDKSX2CW",
    categorySlug: "under-sink-cabinet-organizers",
    rank: 10,
    name: "Sevenblue 2-Pack Height-Adjustable Under Sink Organizer, Black, Large",
    image: "https://m.media-amazon.com/images/I/81F8TfxB-HL._AC_SL1500_.jpg",
    summary:
      "Height-adjustable in a matte black finish — the intersection of practical pipe-clearance features and the modern aesthetic that black hardware bathrooms demand.",
    bestFor: "Modern bathrooms with black hardware and irregular plumbing",
    pros: [
      "Adjustable height clears supply lines and P-traps of any size",
      "Matte black exterior suits modern bathroom aesthetics",
      "Large format handles significant product volumes",
      "2-pack is correctly sized for a standard single-sink cabinet",
    ],
    cons: [
      "Adjusting height requires removing contents to reconfigure",
      "Dark color makes small product labels harder to read inside",
    ],
    keyFeature: "Height-adjustable matte black large organizer",
    topCon: "Reconfiguration requires removing all stored items",
  },

  // ─── Bath Mats & Floor Storage ──────────────────────────────────────────────
  {
    id: "mat-1",
    asin: "B0CFGYFCYL",
    categorySlug: "bath-mats-floor-storage",
    rank: 1,
    name: "OLANLY 30×20 Extra-Soft Chenille Bath Rug, Grey",
    badge: "Editor's Choice",
    image: "https://m.media-amazon.com/images/I/914ufIDbM1L._AC_SL1500_.jpg",
    summary:
      "The 30×20 size hits the sweet spot for most bathrooms — large enough to step out of the shower onto, compact enough not to crowd the floor. Chenille yarns absorb faster than cotton loops and dry faster too.",
    bestFor: "Everyday bath mat that balances softness, absorption, and easy care",
    pros: [
      "Extra-soft chenille feels plush underfoot on cold mornings",
      "Absorbs water rapidly compared to standard cotton pile rugs",
      "Rubber backing prevents sliding on tile, stone, and vinyl floors",
      "Machine washable with minimal lint shedding after first wash",
    ],
    cons: [
      "Grey color shows pet hair more prominently than darker options",
      "Rubber backing degrades over time in high-heat dryer cycles",
    ],
    keyFeature: "Fast-dry chenille with rubber non-slip backing",
    topCon: "High-heat drying degrades rubber backing",
  },
  {
    id: "mat-2",
    asin: "B07FPQZG6V",
    categorySlug: "bath-mats-floor-storage",
    rank: 2,
    name: "Gorilla Grip Thick Absorbent Chenille Bath Mat, 24×17 Grey",
    image: "https://m.media-amazon.com/images/I/712wdsCwBkL._AC_SL1000_.jpg",
    summary:
      "Gorilla Grip's reputation for non-slip performance is well-earned here. The grip system holds the mat firmly even on polished tile that defeats most rubber-backed mats.",
    bestFor: "High-traffic bathrooms where slip resistance is the top priority",
    pros: [
      "Industry-leading grip system works on polished tile and stone",
      "Thick chenille pile absorbs high volumes of water quickly",
      "Machine washable and retains shape through many cycles",
      "24×17 compact size fits small bathroom entries",
    ],
    cons: [
      "Smaller 24×17 size may not cover wide tub step-out zones",
      "Grip system can leave marks on some delicate floor finishes",
    ],
    keyFeature: "Superior non-slip grip on polished surfaces",
    topCon: "May leave marks on delicate floor finishes",
  },
  {
    id: "mat-3",
    asin: "B0CBP8CL71",
    categorySlug: "bath-mats-floor-storage",
    rank: 3,
    name: "OLANLY 30×20 Extra-Soft Absorbent Microfiber Bath Rug, Grey",
    image: "https://m.media-amazon.com/images/I/81A8ELzT-SL._AC_SL1500_.jpg",
    summary:
      "Microfiber construction dries faster than chenille while matching it on softness — a better pick for humid bathrooms where the mat stays damp longer than you'd like.",
    bestFor: "Bathrooms with limited ventilation where mats stay damp",
    pros: [
      "Microfiber dries significantly faster than chenille equivalents",
      "30×20 size matches the full step-out zone of most tubs",
      "Extra-soft surface comparable to premium chenille",
      "Machine washable with quick-dry care requirements",
    ],
    cons: [
      "Microfiber can pill after multiple machine wash cycles",
      "Less plush underfoot than thick chenille alternatives",
    ],
    keyFeature: "Fast-drying microfiber in 30×20 format",
    topCon: "Can pill after repeated machine washing",
  },
  {
    id: "mat-4",
    asin: "B09Y116MJP",
    categorySlug: "bath-mats-floor-storage",
    rank: 4,
    name: "H.VERSAILTEX Sage Striped Chenille Bath Rug Set of 2",
    image: "https://m.media-amazon.com/images/I/71CszaXX0eL._AC_SL1200_.jpg",
    summary:
      "A coordinated two-piece set in sage green with a textured stripe pattern — the designer-level option for bathrooms where the mat is part of the decor, not an afterthought.",
    bestFor: "Bathrooms where color coordination matters as much as function",
    pros: [
      "Matching 2-piece set eliminates mismatched rug problems",
      "Sage green coordinates with earthy, botanical bathroom palettes",
      "Extra-thick chenille is noticeably more plush than standard mats",
      "Striped texture adds visual interest without busy patterning",
    ],
    cons: [
      "Sage green is a specific color commitment that limits future redecorating",
      "Thicker pile retains moisture longer in low-airflow bathrooms",
    ],
    keyFeature: "Matching 2-piece set in sage stripe",
    topCon: "Specific color may limit future décor flexibility",
  },
  {
    id: "mat-5",
    asin: "B0CGDLK8JY",
    categorySlug: "bath-mats-floor-storage",
    rank: 5,
    name: "Bosap Ultra-Thin Non-Slip Rubber Bath Mat, Grey, 17×27",
    image: "https://m.media-amazon.com/images/I/81+xany8mDL._AC_SL1500_.jpg",
    summary:
      "A nearly flat rubber mat designed for the space-constrained bathroom where a thick rug catches on cabinet doors or creates a tripping hazard. Safety-focused without sacrificing floor coverage.",
    bestFor: "Bathrooms with swinging cabinet doors or small clearances",
    pros: [
      "Ultra-thin profile clears low-clearance cabinet doors without bunching",
      "Rubber construction provides excellent grip without a separate backing layer",
      "17×27 size covers the front of a standard tub exit",
      "Easy to clean — wipe down or rinse in the shower",
    ],
    cons: [
      "No cushioning underfoot — purely functional, not luxurious",
      "Rubber can discolor on lighter-colored tile over extended use",
    ],
    keyFeature: "Ultra-thin profile for low-clearance spaces",
    topCon: "No cushioning — function over comfort",
  },
  {
    id: "mat-6",
    asin: "B0G31YQW46",
    categorySlug: "bath-mats-floor-storage",
    rank: 6,
    name: "Smiry Waffle Bath Mat 30×20, Extra Soft Absorbent, Brown",
    image: "https://m.media-amazon.com/images/I/91Dfo2EhxlL._AC_SL1500_.jpg",
    summary:
      "A waffle-weave texture that drains water into the grid pattern rather than trapping it at the surface — the mat appears drier faster because it technically is. Warm brown pairs naturally with wood-accent bathrooms.",
    bestFor: "Bathrooms with warm wood tones or earthy décor",
    pros: [
      "Waffle texture channels water away from the standing surface",
      "Brown colorway pairs naturally with wood and terracotta accents",
      "30×20 provides generous step-out coverage",
      "Visually distinctive from standard chenille in the best way",
    ],
    cons: [
      "Waffle texture traps soap residue in grid channels over time",
      "Brown may appear muddy in cool-toned or grey-heavy bathrooms",
    ],
    keyFeature: "Waffle texture for visible moisture drainage",
    topCon: "Grid channels trap soap residue over time",
  },
  {
    id: "mat-7",
    asin: "B0FJRQC5LZ",
    categorySlug: "bath-mats-floor-storage",
    rank: 7,
    name: "OLANLY Memory Foam Bath Mat 30×20, Super Soft, Grey",
    image: "https://m.media-amazon.com/images/I/91j+vHJUTSL._AC_SL1500_.jpg",
    summary:
      "Memory foam underfoot means every morning feels cushioned — ideal if you stand at the sink for extended periods during your routine. The microfiber top layer handles the absorption duties.",
    bestFor: "People who stand at the sink for extended grooming routines",
    pros: [
      "Memory foam provides superior underfoot cushioning vs standard pile",
      "Microfiber top layer absorbs water rapidly despite the foam core",
      "30×20 size covers a standard tub exit area",
      "Non-slip bottom keeps the thick mat stable during use",
    ],
    cons: [
      "Memory foam core takes longer to dry fully than flat mats",
      "Not suitable for in-shower use — foam core not fully waterproof",
    ],
    keyFeature: "Memory foam cushioning with absorbent microfiber top",
    topCon: "Foam core takes longer to dry thoroughly",
  },
  {
    id: "mat-8",
    asin: "B0BR3F4HFX",
    categorySlug: "bath-mats-floor-storage",
    rank: 8,
    name: "MontVoo Non-Slip Super Absorbent Stain-Resistant Bath Mat, 17×27 Grey",
    image: "https://m.media-amazon.com/images/I/81wD+vG4dXL._AC_SL1500_.jpg",
    summary:
      "The stain-resistance coating makes this the right call for bathrooms where hair dye, self-tanner, or cosmetics regularly find their way onto the floor mat.",
    bestFor: "Bathrooms where staining from hair dye or cosmetics is a concern",
    pros: [
      "Stain-resistant coating prevents permanent marking from hair dye and cosmetics",
      "Super-absorbent pile handles high-moisture step-outs",
      "Non-slip backing reliable on both tile and vinyl",
      "17×27 provides extra length from tub to floor",
    ],
    cons: [
      "Stain resistance can diminish after extended use at high wash temperatures",
      "Slightly stiffer texture compared to uncoated chenille",
    ],
    keyFeature: "Stain-resistant coating for cosmetics and hair dye",
    topCon: "Stain resistance fades at high wash temperatures",
  },
  {
    id: "mat-9",
    asin: "B0FQNL2QN5",
    categorySlug: "bath-mats-floor-storage",
    rank: 9,
    name: "OLANLY Small Chenille Bath Rug 24×16, Extra Soft, Brown",
    image: "https://m.media-amazon.com/images/I/81psBS8tPIL._AC_SL1500_.jpg",
    summary:
      "The small-footprint option for powder rooms, half baths, or the tight space beside a pedestal sink where a standard 30×20 mat simply does not fit.",
    bestFor: "Powder rooms and half baths with limited floor space",
    pros: [
      "24×16 compact size fits the tight floor space of powder rooms",
      "Extra-soft chenille matches the quality of the full-size OLANLY mats",
      "Warm brown tone works in earthy and neutral bathroom schemes",
      "Machine washable, matching care routine of the larger OLANLY family",
    ],
    cons: [
      "Small size does not provide full coverage for a standard bathtub exit",
      "Brown color shows light-colored pet hair prominently",
    ],
    keyFeature: "Compact 24×16 for powder rooms",
    topCon: "Too small for standard tub step-out zone",
  },
  {
    id: "mat-10",
    asin: "B0BQRRVMRY",
    categorySlug: "bath-mats-floor-storage",
    rank: 10,
    name: "ILANGO White Microfiber Plush Bath Rug, 24×17, Non-Slip",
    image: "https://m.media-amazon.com/images/I/71gph+8HS0L._AC_SL1500_.jpg",
    summary:
      "Pure white for bathrooms where the color palette is intentionally monochromatic. Microfiber plush provides cloudlike softness that holds up through repeated washing better than standard cotton terry.",
    bestFor: "All-white or monochromatic bathroom palettes",
    pros: [
      "Crisp white coordinates with all-white or minimalist bathrooms",
      "Microfiber plush softness rivals chenille at a lighter weight",
      "Non-slip backing effective on both tile and vinyl",
      "Stays white through machine washing at moderate temperatures",
    ],
    cons: [
      "White shows staining and discoloration from hard water over time",
      "Requires washing separately from colored items to prevent dye transfer",
    ],
    keyFeature: "Bright white microfiber for monochromatic bathrooms",
    topCon: "Shows staining and hard-water marks prominently",
  },
  {
    id: "mat-11",
    asin: "B0DVQ9Z2MM",
    categorySlug: "bath-mats-floor-storage",
    rank: 11,
    name: "Feather & Stitch 2-Piece 100% Cotton Terry Bath Mats, 30×21, Taupe",
    image: "https://m.media-amazon.com/images/I/91PKbF0yNIL._AC_SL1500_.jpg",
    summary:
      "Real cotton terry — the material used in hotel-quality towels — brings hotel-bath feel to the home floor. The taupe colorway bridges warm and cool bathroom palettes without committing to either.",
    bestFor: "Those who prioritize natural materials over synthetic alternatives",
    pros: [
      "100% cotton terry is natural, biodegradable, and skin-friendly",
      "Towel-like texture feels familiar and luxurious underfoot",
      "Taupe colorway coordinates with a wide range of bathroom palettes",
      "Two-piece coordinated set covers both tub and toilet zones",
    ],
    cons: [
      "Cotton terry takes longer to dry than microfiber or chenille",
      "Natural fibers require slightly more delicate washing than synthetics",
    ],
    keyFeature: "100% cotton terry — natural material alternative",
    topCon: "Slower to dry than synthetic fiber alternatives",
  },

  // ─── Toothbrush Holders ─────────────────────────────────────────────────────
  {
    id: "tb-1",
    asin: "B0BFGNSXYL",
    categorySlug: "toothbrush-holders",
    rank: 1,
    name: "GFWARE 5-Slot Bamboo Marble-Look Toothbrush Holder",
    badge: "Most Stylish",
    image: "https://m.media-amazon.com/images/I/61mw+D857cL._AC_SL1500_.jpg",
    summary:
      "Natural bamboo with a marble-pattern print that convincingly elevates the visual weight of a countertop. Five slots handle a family's toothbrushes plus the tube, and the material choice avoids plastic entirely.",
    bestFor: "Design-forward bathrooms that avoid plastic on the counter",
    pros: [
      "Natural bamboo is a renewable, plastic-free material choice",
      "Marble-print exterior looks premium against white countertops",
      "Five slots accommodate a family of four plus toothpaste",
      "Naturally antimicrobial bamboo surface resists bacterial growth",
    ],
    cons: [
      "Bamboo can crack if allowed to stay wet for extended periods",
      "Marble print fades faster than actual stone patterns",
    ],
    keyFeature: "Natural bamboo with marble-look finish",
    topCon: "Bamboo can crack if kept continuously wet",
  },
  {
    id: "tb-2",
    asin: "B0F3JGLLB8",
    categorySlug: "toothbrush-holders",
    rank: 2,
    name: "Bitvae UV Toothbrush Holder 2.0, Infrared Sensing, Wall-Mounted",
    image: "https://m.media-amazon.com/images/I/615x2CCyeEL._AC_SL1500_.jpg",
    summary:
      "An infrared-sensor-activated UV sanitizer that activates automatically when you place your toothbrush inside — no button presses, no forgetting to run a cycle. Wall-mounted to free up counter space entirely.",
    bestFor: "Hygiene-conscious households who want hands-free UV sanitizing",
    pros: [
      "Infrared sensor activates UV cycle automatically on each use",
      "Wall-mounted design keeps the entire countertop clear",
      "UV light reduces bacterial load on bristles between brushings",
      "Gold accent trim elevates the visual quality above utility-grade holders",
    ],
    cons: [
      "Requires wall mounting with drilling",
      "USB charging adds one more cable to manage in the bathroom",
    ],
    keyFeature: "Auto UV sanitizer with infrared sensor",
    topCon: "Requires drilling to wall-mount",
  },
  {
    id: "tb-3",
    asin: "B0F1MY38VR",
    categorySlug: "toothbrush-holders",
    rank: 3,
    name: "7-Slot Detachable Countertop Toothbrush & Organizer Holder",
    image: "https://m.media-amazon.com/images/I/71n70+n+XSL._AC_SL1500_.jpg",
    summary:
      "The seven-slot design accommodates a full family lineup including electric toothbrush heads. The detachable sections make cleaning around the base simple — a detail that single-piece holders typically ignore.",
    bestFor: "Families using a mix of manual and electric toothbrushes",
    pros: [
      "Seven slots handle a large family's toothbrushes without crowding",
      "Detachable sections simplify deep cleaning of holder and counter",
      "Anti-slip base prevents shifting during daily use",
      "Neutral color works in any bathroom palette",
    ],
    cons: [
      "Detachable joints can loosen over time with daily disassembly",
      "Wider footprint than single-piece holders",
    ],
    keyFeature: "7-slot detachable sections for easy cleaning",
    topCon: "Detachable joints loosen with repeated disassembly",
  },
  {
    id: "tb-4",
    asin: "B08P4ZZTNG",
    categorySlug: "toothbrush-holders",
    rank: 4,
    name: "Urbanstrive 304 Stainless Steel Toothbrush Holder, Black, Small",
    image: "https://m.media-amazon.com/images/I/71Qwk49f+CL._AC_SL1500_.jpg",
    summary:
      "Surgical-grade 304 stainless steel in matte black — the most durably hygienic countertop option. No plastic, no bamboo cracking risk, and built to last through decades of bathroom humidity.",
    bestFor: "Long-term use with zero concern about material degradation",
    pros: [
      "304 stainless steel is fully rustproof in high-humidity environments",
      "Matte black finish adds a premium, hardware-coordinated look",
      "Small footprint is easier to clean around than wide plastic holders",
      "Non-porous surface is easier to sterilize than wood or plastic",
    ],
    cons: [
      "Small size limits slot count — may not suit families with 4+ toothbrushes",
      "Matte black shows water drip marks prominently",
    ],
    keyFeature: "304 stainless steel for permanent durability",
    topCon: "Shows water drip marks on matte black finish",
  },
  {
    id: "tb-5",
    asin: "B0D62VC617",
    categorySlug: "toothbrush-holders",
    rank: 5,
    name: "GFWARE 7-Slot Detachable Electric Toothbrush & Toothpaste Holder",
    image: "https://m.media-amazon.com/images/I/71NcrOA6KlL._AC_SL1500_.jpg",
    summary:
      "Purpose-built for electric toothbrush handles, with wider slots that accommodate Oral-B and Sonicare bases without jamming. The toothpaste holder keeps the tube from rolling across the counter.",
    bestFor: "Electric toothbrush users who need wider slots",
    pros: [
      "Wide slots designed specifically for electric toothbrush handles",
      "Dedicated toothpaste holder prevents tube clutter",
      "Seven slots serve mixed manual and electric toothbrush households",
      "Detachable design simplifies countertop cleaning",
    ],
    cons: [
      "Larger footprint required by the wide slots",
      "Toothpaste holder section is sized for standard tubes, not pump dispensers",
    ],
    keyFeature: "Wide slots sized for electric toothbrush handles",
    topCon: "Toothpaste holder doesn't fit pump-style dispensers",
  },
  {
    id: "tb-6",
    asin: "B0B8VG753F",
    categorySlug: "toothbrush-holders",
    rank: 6,
    name: "3-Slot Bamboo Toothbrush Holder, Black",
    image: "https://m.media-amazon.com/images/I/51Bhqi9I0aL._AC_SL1500_.jpg",
    summary:
      "Minimal form for minimal households. Three slots in natural bamboo with a black finish — the combination of natural material and dark color works especially well in earthy, spa-influenced bathrooms.",
    bestFor: "Single or couple households who prefer natural materials",
    pros: [
      "Three-slot minimalism suits solo or couple bathroom setups",
      "Natural bamboo reduces plastic waste on the countertop",
      "Black finish coordinates with black hardware and fixtures",
      "Compact footprint takes minimal counter space",
    ],
    cons: [
      "Three slots insufficient for families with more than two toothbrushes",
      "Bamboo requires drying between wet environments to prevent cracking",
    ],
    keyFeature: "Minimal 3-slot bamboo in black",
    topCon: "Only 3 slots — insufficient for families",
  },
  {
    id: "tb-7",
    asin: "B09TVMB6DM",
    categorySlug: "toothbrush-holders",
    rank: 7,
    name: "Boperzi Toothbrush & Toothpaste Holder with Drainage & Adjustable Dividers",
    image: "https://m.media-amazon.com/images/I/61-MX7BR3+L._AC_SL1500_.jpg",
    summary:
      "Adjustable internal dividers mean this holder reconfigures as your dental routine evolves — accommodate a single toothbrush with interdental brushes today, or a family lineup next year.",
    bestFor: "Changing households or evolving dental care routines",
    pros: [
      "Adjustable dividers reconfigure the interior for any combination of tools",
      "Drainage holes prevent standing water from accumulating inside",
      "Toothpaste holder keeps tube organized within the same footprint",
      "Grey neutral suits most bathroom color schemes",
    ],
    cons: [
      "Adjusting dividers requires some effort and patience",
      "Not ideal for very bulky electric toothbrush handles without adjustment",
    ],
    keyFeature: "Adjustable dividers + built-in drainage",
    topCon: "Divider adjustment requires effort and time",
  },

  // ─── Soap Dispensers ────────────────────────────────────────────────────────
  {
    id: "soap-1",
    asin: "B0B5TYRW23",
    categorySlug: "soap-dispensers",
    rank: 1,
    name: "JASAI 2-Pack 18oz Glass Soap Dispenser with Stainless Steel Pump",
    badge: "Best Glass Pick",
    image: "https://m.media-amazon.com/images/I/7153lOzyslL._AC_SL1201_.jpg",
    summary:
      "Glass body, rust-proof stainless pump, 18oz capacity — the combination that makes these the go-to recommendation for anyone upgrading from plastic pump bottles. The 2-pack covers sink and shower simultaneously.",
    bestFor: "Replacing plastic pump bottles with a durable glass alternative",
    pros: [
      "Glass body does not absorb odors or discolor over time",
      "Rust-proof stainless steel pump survives wet countertop environments",
      "18oz capacity holds enough to go weeks between refills",
      "2-pack coordinates hand soap and body wash in matching dispensers",
    ],
    cons: [
      "Glass is breakable if knocked off a wet countertop",
      "Heavy when full — not ideal if the dispenser location is precarious",
    ],
    keyFeature: "Glass body with rust-proof stainless pump",
    topCon: "Glass body can break if knocked from a wet counter",
  },
  {
    id: "soap-2",
    asin: "B0C994176Z",
    categorySlug: "soap-dispensers",
    rank: 2,
    name: "Modern Farmhouse Striped Matte Black Plastic Soap Dispenser",
    image: "https://m.media-amazon.com/images/I/411VIB8rd1L._AC_SL1000_.jpg",
    summary:
      "A farmhouse-stripe pattern in matte black plastic that delivers visual interest without the fragility of glass. The small size suits powder rooms or vanities with limited space.",
    bestFor: "Farmhouse or modern-country bathroom aesthetics",
    pros: [
      "Farmhouse stripe pattern adds texture without busy visual noise",
      "Matte black finish coordinates with black hardware and fixtures",
      "Plastic construction is shatter-proof on slippery surfaces",
      "Small profile fits tight powder room vanities",
    ],
    cons: [
      "Plastic body may discolor or fade with strong cleaning products",
      "Smaller capacity requires more frequent refilling",
    ],
    keyFeature: "Farmhouse stripe in shatter-proof matte black",
    topCon: "Smaller capacity requires frequent refilling",
  },
  {
    id: "soap-3",
    asin: "B0DH52T8F8",
    categorySlug: "soap-dispensers",
    rank: 3,
    name: "JASAI 18oz Green Glass Soap Dispenser with Gold Rust-Proof Pump",
    image: "https://m.media-amazon.com/images/I/71eWyeNniML._AC_SL1500_.jpg",
    summary:
      "The green glass with gold pump is the boutique-hotel finish that transforms an ordinary sink area. The 18oz capacity matches the standard JASAI but adds a color accent without repainting a wall.",
    bestFor: "Adding a color accent to a neutral bathroom palette",
    pros: [
      "Forest green glass adds color without a permanent design commitment",
      "Gold pump coordinates with warm-metal hardware trends",
      "18oz capacity matches the full-size JASAI glass dispenser",
      "Rust-proof pump construction identical to the stainless-pump version",
    ],
    cons: [
      "Green color is a specific aesthetic commitment",
      "Glass breakability same limitation as the clear JASAI version",
    ],
    keyFeature: "Green glass with gold pump for color accent",
    topCon: "Specific green color may date over time",
  },
  {
    id: "soap-4",
    asin: "B09J24RW5F",
    categorySlug: "soap-dispensers",
    rank: 4,
    name: "Clear Glass Soap Dispenser 2-Pack, 16oz, Waterproof Labels Included",
    image: "https://m.media-amazon.com/images/I/61JC24Df9rL._AC_SL1200_.jpg",
    summary:
      "Includes waterproof labels — the thoughtful detail that makes these ready for immediate use as labeled hand soap and lotion dispensers without separately sourcing adhesive labels.",
    bestFor: "Organized bathroom setups with labeled dispensers",
    pros: [
      "Waterproof labels survive daily water splashing near the sink",
      "2-pack allows labeling hand soap and lotion in matching vessels",
      "Clear glass body shows when the dispenser is running low",
      "Rust-proof pump construction prevents the most common failure mode",
    ],
    cons: [
      "16oz capacity is slightly smaller than the 18oz JASAI option",
      "Label adhesive may eventually lift at edges over time",
    ],
    keyFeature: "Waterproof labels included in the 2-pack",
    topCon: "Label edges may lift with prolonged moisture exposure",
  },
  {
    id: "soap-5",
    asin: "B0F5311G47",
    categorySlug: "soap-dispensers",
    rank: 5,
    name: "OHIFAST USB-Rechargeable Touchless Automatic Soap Dispenser, White",
    image: "https://m.media-amazon.com/images/I/61QIimnunPL._AC_SL1500_.jpg",
    summary:
      "USB-rechargeable removes the battery replacement problem that plagues automatic dispensers. The touchless motion sensor is fast enough that it does not create a waiting moment during hand washing.",
    bestFor: "Touchless handwashing compliance for households with young children",
    pros: [
      "USB charging eliminates ongoing battery replacement cost",
      "Motion sensor is responsive without false activations",
      "No-touch operation reduces cross-contamination at the sink",
      "All-white finish suits clean, minimalist bathroom environments",
    ],
    cons: [
      "Requires USB charging cable management near the sink",
      "Foam-mode works best with foaming soap specifically",
    ],
    keyFeature: "USB rechargeable with no battery replacement",
    topCon: "Requires foam soap — does not work well with liquid soap",
  },
  {
    id: "soap-6",
    asin: "B0CVNGWWX6",
    categorySlug: "soap-dispensers",
    rank: 6,
    name: "simplehuman 9oz Liquid Sensor Pump, Touchless, Brushed Stainless",
    image: "https://m.media-amazon.com/images/I/41N6FynRvYL._AC_SL1000_.jpg",
    summary:
      "The premium touchless option. Simplehuman's build quality is a noticeable step above the category, with a metal body and sensor calibrated to avoid the dripping and over-dispensing that most automatic pumps produce.",
    bestFor: "Those willing to invest in the most refined automatic dispenser",
    pros: [
      "Metal body construction is substantively more durable than plastic",
      "Calibrated sensor dispenses the right amount without wasted product",
      "Brushed stainless finish is a genuinely premium bathroom accent",
      "No-touch operation is both hygienic and convenient",
    ],
    cons: [
      "Premium price point significantly above basic automatic alternatives",
      "9oz capacity requires more frequent refilling than 18oz alternatives",
    ],
    keyFeature: "Premium metal body with calibrated sensor",
    topCon: "Highest price point in the category",
  },
  {
    id: "soap-7",
    asin: "B0DN4TDRYV",
    categorySlug: "soap-dispensers",
    rank: 7,
    name: "Aunmaon Hands-Free Touchless Automatic Soap Dispenser, Black",
    image: "https://m.media-amazon.com/images/I/61GxqGmim8L._AC_SL1500_.jpg",
    summary:
      "A value automatic dispenser in matte black that coordinates with black fixture trends without the premium price of metal-body alternatives. Reliable motion sensor without the complexity of rechargeable systems.",
    bestFor: "Black-hardware bathrooms on a mid-range budget",
    pros: [
      "Matte black finish coordinates with black fixtures and faucets",
      "Automatic dispensing reduces contact at the sink",
      "Accessible price point relative to premium automatic alternatives",
      "Compact footprint suits smaller vanity areas",
    ],
    cons: [
      "Battery-powered rather than rechargeable",
      "Sensor can occasionally false-activate with nearby movement",
    ],
    keyFeature: "Touchless in matte black at accessible price",
    topCon: "Battery-powered with ongoing replacement cost",
  },
];

const affiliateLinks: Record<string, string> = {
  // Shower & Bathtub Organizers
  B0GFCW85CK:
    "https://www.amazon.com/Rustproof-Toothbrush-No-Drilling-Organizers-Accessories/dp/B0GFCW85CK?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=2602570b205eca5da3b91702cccf3a12&language=en_US&ref_=as_li_ss_tl",
  B0CMJ8H7ZD:
    "https://www.amazon.com/Sakugi-Corner-Shower-Caddy-Space-Saving/dp/B0CMJ8H7ZD?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=0378cf9e82644f404b6a7f4abcdab831&language=en_US&ref_=as_li_ss_tl",
  B0CPPVH7KF:
    "https://www.amazon.com/NESOMI-Adhesive-Organizer-Rustproof-Stainless/dp/B0CPPVH7KF?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=24e31f40e28690fd89369a4993cd5053&language=en_US&ref_=as_li_ss_tl",
  B0DSBM7RQL:
    "https://www.amazon.com/HAMITOR-Corner-Shower-Caddy-Tension/dp/B0DSBM7RQL?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=3cec79be104eb1ca722352755489d2fc&language=en_US&ref_=as_li_ss_tl",
  B0D1C6J36J:
    "https://www.amazon.com/TAILI-Suction-Organizer-Bathroom-Drilling/dp/B0D1C6J36J?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=453e12398c71d6202302d2bd74e87be5&language=en_US&ref_=as_li_ss_tl",
  B0CXT9YZ24:
    "https://www.amazon.com/YASONIC-Adhesive-Organizers-Removable-Wall-Mounted/dp/B0CXT9YZ24?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=da2cea1f5e1b2dca0ee66e6414e7abf4&language=en_US&ref_=as_li_ss_tl",
  B0GZZ3VM69:
    "https://www.amazon.com/HAMITOR-Shower-Caddy-Tension-Pole/dp/B0GZZ3VM69?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=7778cb02e63b987a849bc4fa6af6da80&language=en_US&ref_=as_li_ss_tl",
  B07XLLLFBB:
    "https://www.amazon.com/SEIRIONE-Bathroom-Rustproof-Stainless-Adjustable/dp/B07XLLLFBB?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=406f8560f9a4128ad29360258a45e7a8&language=en_US&ref_=as_li_ss_tl",
  B0FVF5QQDY:
    "https://www.amazon.com/Rustproof-Organizer-Organizers-Storage-Black/dp/B0FVF5QQDY?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=612ff1410182551635a9807d1fb0bff5&language=en_US&ref_=as_li_ss_tl",
  B0D1BZJSX4:
    "https://www.amazon.com/YASONIC-Adhesive-Organizers-Removable-Wall-Mounted/dp/B0D1BZJSX4?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=5c71744b00bb7ab51efed5e50b6c9d31&language=en_US&ref_=as_li_ss_tl",

  // Vanity & Countertop Organizers
  B0C42YJVCD:
    "https://www.amazon.com/Asayuee-Organizer-Cosmetics-Organizers-Countertop/dp/B0C42YJVCD?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=e407b301a41bd68cae88cdda431ec4a9&language=en_US&ref_=as_li_ss_tl",
  B0BR9V9FKP:
    "https://www.amazon.com/Rotating-Organizer-Adjustable-Multi-Function-Countertop/dp/B0BR9V9FKP?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=36de6bd49b7de701c80aed6e48c30064&language=en_US&ref_=as_li_ss_tl",
  B0DJ8BKK8V:
    "https://www.amazon.com/Drawers-Tier-Makeup-Organizer-Versatile/dp/B0DJ8BKK8V?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=66bdf381c792f905bb564e5137ae8a89&language=en_US&ref_=as_li_ss_tl",
  B0DG27JTRS:
    "https://www.amazon.com/Makeup-Organizer-Cosmetic-Bathroom-Countertop/dp/B0DG27JTRS?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=f72fdae81b583be67d5ff7d6182b4d04&language=en_US&ref_=as_li_ss_tl",
  B0DMNK7BBX:
    "https://www.amazon.com/Jesginboo-Bathroom-Organizer-Countertop-Organizers/dp/B0DMNK7BBX?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=35e9250411e705ff4e70b2afc2e26f04&language=en_US&ref_=as_li_ss_tl",
  B0DQ378K28:
    "https://www.amazon.com/HBlife-Organizer-Countertop-Lipsticks-Eyeshadow/dp/B0DQ378K28?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=a06efb58cb00ec799b91cbae0999d67e&language=en_US&ref_=as_li_ss_tl",
  B0D8KWGK5X:
    "https://www.amazon.com/Pajiriona-Organizer-Skincare-Cosmetic-Countertop/dp/B0D8KWGK5X?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=ee279261855d085e5a00535f731175a2&language=en_US&ref_=as_li_ss_tl",

  // Under-Sink & Cabinet Organizers
  B0BZNPDHR9:
    "https://www.amazon.com/Organizer-Vtopmart-Organizers-Container-Organization/dp/B0BZNPDHR9?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=fd02694387115cd7ec4a0ace47525046&language=en_US&ref_=as_li_ss_tl",
  B0DNTQ2YNT:
    "https://www.amazon.com/Ukeetap-Multi-Purpose-Pull-Out-Organizers-Bathroom/dp/B0DNTQ2YNT?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=8d036ad8670df9a9c256addf08837fe5&language=en_US&ref_=as_li_ss_tl",
  B0BNQ56MH5:
    "https://www.amazon.com/Multi-Purpose-Countertop-Organizers-Stackable-Organization/dp/B0BNQ56MH5?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=e5ed9e78adb2e1001820f0d5d6c49876&language=en_US&ref_=as_li_ss_tl",
  B0CFQDSSYB:
    "https://www.amazon.com/REALINN-Organizer-Cabinet-Storage-Bathroom/dp/B0CFQDSSYB?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=973c3a97cc9c853d0d0397aba403501e&language=en_US&ref_=as_li_ss_tl",
  B0BZCTXKPZ:
    "https://www.amazon.com/Vtopmart-Stackable-Organizers-Undersink-organization/dp/B0BZCTXKPZ?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=04a887a0435db5dda6057472ca7d925d&language=en_US&ref_=as_li_ss_tl",
  B0CHNL1JYB:
    "https://www.amazon.com/Under-Sink-Organizer-Organizers-Organization/dp/B0CHNL1JYB?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=69f64b48f96e386441cd4bc0b327eb8b&language=en_US&ref_=as_li_ss_tl",
  B0B3JJYJSS:
    "https://www.amazon.com/DEKAVA-Pack%EF%BC%8CBathroom-Organizer%EF%BC%8C2-Multi-Purpose-Collection/dp/B0B3JJYJSS?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=7540156be947917bbbc6ff18234d4244&language=en_US&ref_=as_li_ss_tl",
  B0CBDF4SMK:
    "https://www.amazon.com/Sevenblue-Organizer-Multi-Use-Organizers-Bathroom/dp/B0CBDF4SMK?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=d3211af2da3872b28ff2acb2d1df8a06&language=en_US&ref_=as_li_ss_tl",
  B0D176VGXZ:
    "https://www.amazon.com/PXRACK-Under-Sink-Organizer-Adjustable/dp/B0D176VGXZ?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=e78c0df3e962a70192320df62831a447&language=en_US&ref_=as_li_ss_tl",
  B0DDKSX2CW:
    "https://www.amazon.com/Sevenblue-Organizer-Adjustable-organizer-Multi-Purpose/dp/B0DDKSX2CW?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=9c9af5df15c1e36410a2fa7a51f53e7e&language=en_US&ref_=as_li_ss_tl",

  // Bath Mats & Floor Storage
  B0CFGYFCYL:
    "https://www.amazon.com/OLANLY-Bathroom-Absorbent-Chenille-Non-Slip/dp/B0CFGYFCYL?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=895e6363b359c492b535dcdc022f9af1&language=en_US&ref_=as_li_ss_tl",
  B07FPQZG6V:
    "https://www.amazon.com/Gorilla-Grip-Bathroom-Rug-Mat/dp/B07FPQZG6V?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=f39b3356a2b288336f9457635ddc6b1c&language=en_US&ref_=as_li_ss_tl",
  B0CBP8CL71:
    "https://www.amazon.com/OLANLY-Bathroom-Absorbent-Microfiber-Non-Slip/dp/B0CBP8CL71?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=37094c90c2cea0dadbf28e48261dc7c5&language=en_US&ref_=as_li_ss_tl",
  B09Y116MJP:
    "https://www.amazon.com/Extra-Chenille-Striped-Pattern-Bathroom/dp/B09Y116MJP?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=1ab8e712192a7e8a752568c59d872656&language=en_US&ref_=as_li_ss_tl",
  B0CGDLK8JY:
    "https://www.amazon.com/Bosap-Rubber-Bathroom-Washable-Absorbent/dp/B0CGDLK8JY?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=6f54922a6c68023178b33425ee79c21e&language=en_US&ref_=as_li_ss_tl",
  B0G31YQW46:
    "https://www.amazon.com/Smiry-Absorbent-Bathroom-Washable-Accessories/dp/B0G31YQW46?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=c4be16c77597a75d02c7fa76f0c9b518&language=en_US&ref_=as_li_ss_tl",
  B0FJRQC5LZ:
    "https://www.amazon.com/OLANLY-Absorbent-Bathroom-Washable-Accessories/dp/B0FJRQC5LZ?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=14def9fd4788c0054d83d1681ff38847&language=en_US&ref_=as_li_ss_tl",
  B0BR3F4HFX:
    "https://www.amazon.com/MontVoo-Bath-Innovative-Bathroom-Absorbent-Resistant/dp/B0BR3F4HFX?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=dff711de04be0098251c82f28ef40a33&language=en_US&ref_=as_li_ss_tl",
  B0FQNL2QN5:
    "https://www.amazon.com/OLANLY-Bathroom-Absorbent-Chenille-Accessories/dp/B0FQNL2QN5?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=325392c6c55ef1c41f4dd25ae17413ee&language=en_US&ref_=as_li_ss_tl",
  B0BQRRVMRY:
    "https://www.amazon.com/ILANGO-Microfiber-Bathroom-Absorbent-Washable/dp/B0BQRRVMRY?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=d283fd0df8fdc05b2fa6073d53271f7f&language=en_US&ref_=as_li_ss_tl",
  B0DVQ9Z2MM:
    "https://www.amazon.com/Feather-Stitch-Bathroom-Absorbent-Washable/dp/B0DVQ9Z2MM?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=03822996de3c3dfd753e60ef392a6c9f&language=en_US&ref_=as_li_ss_tl",

  // Toothbrush Holders
  B0BFGNSXYL:
    "https://www.amazon.com/GFWARE-Toothbrush-Bathrooms-Toothpaste-Countertop/dp/B0BFGNSXYL?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=8450bb7c7da903962f99d54fa7a3e379&language=en_US&ref_=as_li_ss_tl",
  B0F3JGLLB8:
    "https://www.amazon.com/Bitvae-Bathroom-Toothbrush-Wall-Mounted-Toothbrushes/dp/B0F3JGLLB8?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=71809245b2c7f4823905c4ef1a4898da&language=en_US&ref_=as_li_ss_tl",
  B0F1MY38VR:
    "https://www.amazon.com/Detachable-Toothbrush-Toothpaste-Countertop-Accessories/dp/B0F1MY38VR?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=dac9eee994817154d9069667127b7596&language=en_US&ref_=as_li_ss_tl",
  B08P4ZZTNG:
    "https://www.amazon.com/Urbanstrive-Stainless-Toothbrush-Toothpaste-Accessories/dp/B08P4ZZTNG?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=2df54a8b71947721830aac280df6fe10&language=en_US&ref_=as_li_ss_tl",
  B0D62VC617:
    "https://www.amazon.com/GFWARE-Bathroom-Organizers-Storage-Organization/dp/B0D62VC617?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=d8af3d7ef0a52a1d9955c5e68fbc6876&language=en_US&ref_=as_li_ss_tl",
  B0B8VG753F:
    "https://www.amazon.com/Toothbrush-Bathrooms-Toothpaste-Organizer-Toothbrushes/dp/B0B8VG753F?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=1b251fa5ecdf5299cb80083c51062a1e&language=en_US&ref_=as_li_ss_tl",
  B09TVMB6DM:
    "https://www.amazon.com/Boperzi-Toothbrush-Toothpaste-Countertop-Freestanding/dp/B09TVMB6DM?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=32e88a2de5fbf734f255a74126641e91&language=en_US&ref_=as_li_ss_tl",

  // Soap Dispensers
  B0B5TYRW23:
    "https://www.amazon.com/JASAI-Dispenser-Stainless-Refillable-Bathroom/dp/B0B5TYRW23?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=47d4f85e47bb57a8dd4b8970b0de30f2&language=en_US&ref_=as_li_ss_tl",
  B0C994176Z:
    "https://www.amazon.com/Dispenser-Bathroom-Kitchen-Farmhouse-Striped/dp/B0C994176Z?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=51fc069ee8b58781059080271bacedb2&language=en_US&ref_=as_li_ss_tl",
  B0DH52T8F8:
    "https://www.amazon.com/JASAI-Dispenser-Refillable-Kitchen-Bathroom/dp/B0DH52T8F8?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=138d75fce2316dc92d8f3a04cf7d7299&language=en_US&ref_=as_li_ss_tl",
  B09J24RW5F:
    "https://www.amazon.com/Dispenser-Waterproof-Bathroom-Plastic-Kitchen/dp/B09J24RW5F?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=0dea06f3d999f025c960da6bf802d464&language=en_US&ref_=as_li_ss_tl",
  B0F5311G47:
    "https://www.amazon.com/Automatic-Dispenser-Touchless-Rechargeable-Adjustable/dp/B0F5311G47?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=21d8ece5854d6e163a9749d1e1e1b4bc&language=en_US&ref_=as_li_ss_tl",
  B0CVNGWWX6:
    "https://www.amazon.com/simplehuman-Touch-Free-Automatic-Rechargeable-Stainless/dp/B0CVNGWWX6?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=85e0e33f4698d8f34a4fd7922a3c8b01&language=en_US&ref_=as_li_ss_tl",
  B0DN4TDRYV:
    "https://www.amazon.com/Aunmaon-Automatic-Hands-Free-Adjustable-Compatible/dp/B0DN4TDRYV?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=3041d10bf4ba121d35a8d8cddf2f9779&language=en_US&ref_=as_li_ss_tl",
};

export function getAmazonUrl(asin: string): string {
  return (
    affiliateLinks[asin] ??
    `https://www.amazon.com/dp/${asin}?tag=bathgridedge-20`
  );
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products
    .filter((p) => p.categorySlug === categorySlug)
    .sort((a, b) => a.rank - b.rank);
}

export function getTopProductPerCategory(): Product[] {
  const seen = new Set<string>();
  const top: Product[] = [];
  for (const p of products) {
    if (p.rank === 1 && !seen.has(p.categorySlug)) {
      seen.add(p.categorySlug);
      top.push(p);
    }
  }
  return top;
}

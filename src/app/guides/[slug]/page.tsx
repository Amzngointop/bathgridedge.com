import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { guides } from "@/data/guides";
import { categories } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) return {};
  return { title: guide.title, description: guide.excerpt };
}

// ── Full guide content ────────────────────────────────────────────────────────

function GuideContent({ slug }: { slug: string }) {
  switch (slug) {
    case "complete-bathroom-organization-guide":
      return <CompleteGuide />;
    case "no-drill-storage-for-renters":
      return <NoDrillGuide />;
    case "how-to-stop-under-sink-clutter":
      return <UnderSinkGuide />;
    case "choosing-the-right-bath-mat":
      return <BathMatGuide />;
    case "small-bathroom-storage-ideas":
      return <SmallBathroomGuide />;
    case "bathroom-hygiene-basics":
      return <HygieneGuide />;
    default:
      return null;
  }
}

function CompleteGuide() {
  return (
    <div className="prose-content">
      <p>
        The bathroom is the most-used room per square foot in any home, and it tends to accumulate more categories of product than any other space. Shampoos, medicines, cleaning supplies, towels, cosmetics, dental care — each category has different storage requirements. A useful organizational framework treats them accordingly.
      </p>

      <h2>Step 1: The Clear-Out</h2>
      <p>
        Before buying a single organizer, remove everything from the bathroom. Every product under the sink, every item on the countertop, every bottle on the shower shelf. Lay it on a bed or towel on the floor. You are looking for three things: expired products, duplicates, and items that don't belong in the bathroom at all.
      </p>
      <p>
        The average bathroom contains 12–18 products that are expired or no longer used. They occupy prime real estate and make every storage system harder to maintain.
      </p>

      <h2>Step 2: Zone the Space</h2>
      <p>
        Divide the bathroom into functional zones rather than furniture zones. The zones that matter in most bathrooms:
      </p>
      <ul>
        <li><strong>Shower zone</strong> — products used in the shower, nothing else</li>
        <li><strong>Sink zone</strong> — daily-use items within arm's reach of the faucet</li>
        <li><strong>Mirror zone</strong> — items used while looking at the mirror (makeup, skincare, dental care)</li>
        <li><strong>Storage zone</strong> — backup supplies, cleaning products, infrequently used items</li>
      </ul>
      <p>
        The goal is that every item lives in the zone where it's actually used. Moving between zones to complete a routine is a sign that something is in the wrong place.
      </p>

      <h2>Step 3: Match Storage to the Zone</h2>
      <p>
        <strong>Shower zone:</strong> Caddies that keep products inside the shower prevent countertop clutter. Adhesive caddies are the most flexible choice for most bathrooms, as they work across tile, stone, and glass without permanent installation. Tension poles work when you need significant volume — four shelves can hold a full household's shower products.
      </p>
      <p>
        <strong>Sink zone:</strong> The sink area benefits most from a toothbrush holder that keeps bristles off the counter and a soap dispenser that replaces plastic pump bottles. These two swaps alone transform most sink zones.
      </p>
      <p>
        <strong>Mirror zone:</strong> Rotating trays bring products to you rather than requiring you to reach. For countertops with limited space, a corner shelf is the right solution — it uses an angle that's typically ignored.
      </p>
      <p>
        <strong>Storage zone:</strong> Under-sink cabinet space is the most underutilized in most bathrooms. Two-tier pull-out organizers, configured around the plumbing, can double the accessible storage in a standard vanity cabinet.
      </p>

      <h2>Step 4: The Floor</h2>
      <p>
        A non-slip bath mat is both a safety and organization decision. Mats that absorb quickly and dry fast reduce the damp, unhygienic floor conditions that make bathrooms feel permanently unclean. Choosing the right material for your bathroom's ventilation conditions matters significantly — see our{" "}
        <Link href="/guides/choosing-the-right-bath-mat" className="text-[#5B7561] dark:text-[#8AA391] hover:underline">
          bath mat guide
        </Link>{" "}
        for a material-by-material breakdown.
      </p>

      <h2>Maintaining the System</h2>
      <p>
        The organizing decisions you make in step 3 only hold if the system is genuinely easy to use. If returning a product to its place takes more than two seconds, it will stop being returned. The best bathroom organization systems are the ones with the lowest friction — not the prettiest, not the most elaborate.
      </p>
      <p>
        A brief weekly reset (five minutes, everything back to its zone) prevents the slow drift that turns an organized bathroom into a chaotic one over 60 days.
      </p>
    </div>
  );
}

function NoDrillGuide() {
  return (
    <div className="prose-content">
      <p>
        Most rental leases prohibit wall holes, and most bathroom storage advice assumes you own your walls. This guide covers every practical no-drill solution for a renter's bathroom — organized by storage zone.
      </p>

      <h2>The Four No-Drill Methods</h2>
      <p>
        Before looking at specific products, it helps to understand what you're choosing between:
      </p>
      <ul>
        <li><strong>Adhesive:</strong> Strips or pads that bond to smooth surfaces. Work on tile, glass, stone, and sealed grout. Do not work on textured, unsealed, or porous surfaces. Rated for specific weight limits — always stay under them.</li>
        <li><strong>Tension/pressure:</strong> Spring-loaded poles or rods that wedge between two surfaces using pressure. No adhesives, no surface contact damage. Require two parallel surfaces the right distance apart.</li>
        <li><strong>Suction cup:</strong> Vacuum-seal cups that grip smooth, non-porous surfaces. Work on glass, glazed tile, and mirrors. Require periodic reseating and fail completely on textured tile.</li>
        <li><strong>Over-door/over-cabinet:</strong> Hooks or racks that hang over the top edge of a door or cabinet panel. Require no surface contact at all. Limited weight capacity but zero installation.</li>
      </ul>

      <h2>Shower Storage Without Drilling</h2>
      <p>
        The shower is where renters most often compromise and live with insufficient storage. The options are better than most people know.
      </p>
      <p>
        <strong>Adhesive caddies</strong> are the strongest-feeling solution if your tile is smooth-glazed. The adhesive systems used in quality caddies are engineered specifically for wet environments. Crucially, they need 24–48 hours of cure time before loading — rushing this step is the cause of most adhesive failures.
      </p>
      <p>
        <strong>Tension pole caddies</strong> are the right answer when you're not sure about your tile surface. The pole stands on the shower floor and presses against the ceiling — no surface contact on the walls. A good tension pole with four shelves holds more product than most adhesive systems.
      </p>

      <h2>Countertop and Vanity</h2>
      <p>
        Freestanding countertop organizers are the easiest win in a renter's bathroom. Rotating trays, corner shelves, and toothbrush holders all sit on the counter without touching the wall. No installation, no approval needed.
      </p>
      <p>
        For mirror storage, look for adhesive-backed organizers rated for mirrors specifically — the adhesive formulas differ from tile adhesives. Test in a small corner before committing the whole mirror.
      </p>

      <h2>Under-Sink Without Drilling</h2>
      <p>
        Pull-out under-sink organizers sit on the cabinet floor without attaching to anything. They simply slide in and pull out. No assembly, no installation, and they move out with you. Two-tier units with pull-out drawers are the most practical choice because they eliminate the need to crouch and reach to the back of deep cabinets.
      </p>

      <h2>Move-Out Cleanup</h2>
      <p>
        Quality adhesive systems are designed to release cleanly when removed properly — warm water or a heat gun softens the adhesive, and slow peeling removes the pad in one piece. The surface should be residue-free. Suction cup marks on tile are always removable with a damp cloth. Tension poles leave the floor and ceiling completely unmarked.
      </p>
      <p>
        Document your bathroom before you install anything — photos with a timestamp — so you have evidence of the pre-existing condition.
      </p>
    </div>
  );
}

function UnderSinkGuide() {
  return (
    <div className="prose-content">
      <p>
        The cabinet beneath the bathroom sink is where products go when they lose their home elsewhere. Backup soap, expired medicines, cleaning supplies from three years ago, and a hairdryer that works if you hold it at a specific angle. Getting control of this space is more impactful than organizing anywhere else in the bathroom.
      </p>

      <h2>Why Under-Sink is Hard</h2>
      <p>
        Two things make under-sink organization different from other cabinet storage. First, the plumbing — the P-trap, supply lines, and shut-off valves take up a surprising portion of the cabinet's volume in irregular shapes. Second, the depth — most bathroom vanity cabinets are deeper than you can comfortably reach, so things pushed to the back become functionally invisible.
      </p>

      <h2>The Clear-Out Method</h2>
      <p>
        Remove everything. All of it. Then apply the three-category rule to everything you pulled out:
      </p>
      <ul>
        <li><strong>Daily or weekly use:</strong> These products need to be in front, accessible without crouching to look.</li>
        <li><strong>Monthly or backup use:</strong> These can go further back, on an upper tier, or in a container that slides out.</li>
        <li><strong>Unknown or unused:</strong> Check expiration dates. If you can't remember using it in the past year, it likely doesn't belong here.</li>
      </ul>

      <h2>Choosing the Right Organizer</h2>
      <p>
        The pipe configuration determines your options. Sketch the cabinet interior before buying — specifically where the P-trap sits and how much clearance you have on each side of it.
      </p>
      <p>
        <strong>Two-tier pull-outs</strong> are the most universally useful option. They slide out, bringing rear items to the front. The two tiers double vertical space, and most can be configured around standard plumbing. Look for height-adjustable tiers — being able to accommodate pipes of different heights is genuinely valuable.
      </p>
      <p>
        <strong>Clear-sided organizers</strong> are the better choice when you have multiple people using the same cabinet. Being able to see through the sides without opening the cabinet reduces the daily friction of finding a specific product.
      </p>
      <p>
        <strong>Stackable drawer units</strong> work best in cabinets where the plumbing is positioned to one side, leaving a clear vertical zone on the other. They provide more storage density than pull-outs but require a clear footprint.
      </p>

      <h2>Keeping It Organized</h2>
      <p>
        The under-sink cabinet collects clutter again because it's easy to push things in and close the door. Two habits maintain the system: returning products to their designated tier consistently, and scheduling a quarterly review to remove expired or unused items before they accumulate.
      </p>
      <p>
        The CDC and EPA both recommend storing cleaning products away from personal care items, and in original containers with labels intact. Under-sink storage that physically separates these categories — cleaning supplies on one side, personal care on the other — is both safer and easier to navigate.
      </p>
    </div>
  );
}

function BathMatGuide() {
  return (
    <div className="prose-content">
      <p>
        A bath mat is doing more work than it appears. It's absorbing water, preventing slips, regulating floor temperature, and collecting whatever's on feet after a shower. The material you choose affects how well it does each of those jobs — and how long before it stops doing them.
      </p>

      <h2>The Core Materials</h2>

      <h3>Chenille</h3>
      <p>
        Chenille yarns have a high surface area that absorbs water quickly. They feel soft underfoot — more so than standard terry — and they retain that softness through machine washing better than cotton loops. The downside is drying time: chenille holds moisture longer than microfiber, which matters in bathrooms with poor ventilation.
      </p>

      <h3>Microfiber</h3>
      <p>
        Microfiber absorbs quickly and dries faster than chenille or cotton terry. It's the right material for bathrooms without exhaust fans, or where the mat stays in place between multiple showers. The trade-off is texture — microfiber feels less plush than thick chenille, and it can pill after multiple machine wash cycles.
      </p>

      <h3>Memory Foam</h3>
      <p>
        Memory foam provides cushioning that no other bath mat material matches. It's the right choice if you stand at the sink for extended periods. The foam core takes longer to dry fully — days if the bathroom is humid — making it a poor choice for bathrooms without adequate ventilation.
      </p>

      <h3>Cotton Terry</h3>
      <p>
        The hotel-standard material. 100% cotton terry is natural, biodegradable, and becomes softer with washing over time. It dries more slowly than microfiber but more quickly than thick chenille. It's the material most consumers trust intuitively, and the trust is warranted.
      </p>

      <h2>Non-Slip Performance</h2>
      <p>
        The Consumer Product Safety Commission notes that bathroom falls are one of the leading causes of home injury across all age groups. Non-slip backing is not optional. Rubber backing performs differently on different floor types — suction-cup-style backing holds better on textured tile, while flat rubber holds better on polished stone or vinyl. Test any new mat before using it as your primary step-out surface.
      </p>

      <h2>Size and Coverage</h2>
      <p>
        The standard 24×17 mat fits in front of a toilet or vanity, but is small for a bathtub step-out. A 30×20 mat covers most tub exit zones adequately. For wide walk-in showers, a runner-style mat provides full coverage. Two-piece sets that coordinate a tub mat and toilet mat in matching materials eliminate the mismatched-rug problem entirely.
      </p>

      <h2>Care and Lifespan</h2>
      <p>
        Most bath mats are machine washable, but a few care decisions extend their useful life significantly. Tumble dry on low or air dry — high heat degrades rubber backing faster than anything else. Wash separately from heavily dyed items to prevent color transfer onto light-colored mats. Shake mats outside periodically to remove loose fibers before they accumulate in the bathroom.
      </p>
    </div>
  );
}

function SmallBathroomGuide() {
  return (
    <div className="prose-content">
      <p>
        A bathroom under 50 square feet changes the rules. Standard storage advice — "add a shelf," "use a cabinet" — often doesn't apply when there's no wall space, no floor clearance, and no surface that isn't already occupied. Small bathroom storage is a problem of volume and reach, not product selection.
      </p>

      <h2>Think Vertical</h2>
      <p>
        Vertical storage is the most reliable win in a small bathroom. The space between the top of the vanity and the ceiling is unused in most bathrooms. A tension-pole shelf tower, an over-toilet shelf unit, or a tall narrow cabinet all use this vertical zone without touching the floor.
      </p>
      <p>
        On shower walls, the same principle applies: stack caddies vertically rather than spreading them across the wall. A tension pole caddy provides four shelves in the footprint of one.
      </p>

      <h2>Use the Door</h2>
      <p>
        The back of the bathroom door and the inside of cabinet doors are both storage surfaces in a small bathroom. Over-door hooks handle towels, robes, and bags. Inside-cabinet-door organizers hold hair tools, cleaning supplies, and products that would otherwise claim shelf space.
      </p>

      <h2>Countertop Discipline</h2>
      <p>
        In a small bathroom, the countertop is the most visible space and the most contested. The default is to let it collect everything that doesn't have another home. The better approach is to give everything a home that isn't the counter.
      </p>
      <p>
        Daily-use items can stay on the counter in a compact rotating tray or corner shelf — everything that's used less than daily should live in a drawer, cabinet, or under-sink organizer. The smaller the bathroom, the more important this discipline is.
      </p>

      <h2>The Under-Sink Opportunity</h2>
      <p>
        Small bathrooms often have limited or no linen closet space, which means the under-sink cabinet has to work harder. Two-tier pull-out organizers can hold a significant volume of backup supplies, cleaning products, and personal care items. In a compact bathroom, treating the under-sink space seriously is one of the highest-leverage decisions available.
      </p>

      <h2>Multi-Purpose Picks</h2>
      <p>
        Products that do more than one job earn their place in small bathrooms. A countertop organizer with integrated toothbrush holders occupies one footprint instead of two. A shower caddy with built-in hooks eliminates the need for a separate hook system. A bath mat with a non-slip backing doubles as the floor safety solution without requiring a separate rug layer underneath.
      </p>

      <h2>Mirrors and Light</h2>
      <p>
        This is not a storage solution, but it affects how small a bathroom feels: a larger mirror or one that extends to the countertop level makes any bathroom feel more open. If a renovation is on the table, this is the highest-ROI change for perceived space.
      </p>
    </div>
  );
}

function HygieneGuide() {
  return (
    <div className="prose-content">
      <p>
        Bathroom organization and bathroom hygiene are more connected than most organizational advice acknowledges. Where products live, how surfaces are used, and what's stored where all affect the bacterial environment of the room. This guide covers the practical decisions that improve hygiene alongside organization.
      </p>

      <h2>Toothbrush Placement</h2>
      <p>
        Research published in journals catalogued by the National Institutes of Health has documented bacterial aerosolization from toilet flushing — commonly referred to as "the toilet plume." Toothbrushes stored within 3–6 feet of the toilet and left in open holders are exposed to this aerosolization. Practical responses: keep toothbrushes in a closed holder, store them as far from the toilet as the countertop allows, or use a wall-mounted holder away from the toilet zone.
      </p>

      <h2>Soap Dispensers vs. Bar Soap</h2>
      <p>
        Bar soap accumulates bacteria on its surface between uses, though at levels that are generally considered hygienically insignificant for healthy adults. A soap dish with adequate drainage reduces the buildup by preventing the bar from sitting in standing water. Pump dispensers avoid the shared-surface issue entirely and reduce the visual clutter of soap residue on the counter.
      </p>

      <h2>Towel Hygiene</h2>
      <p>
        The CDC recommends washing hand towels and bath towels regularly. The specific frequency depends on usage, but bath towels used daily should be washed every 3–4 uses. Towels that remain damp between uses accumulate bacteria faster than those that dry completely. Good ventilation and towel bars that fully extend the towel (rather than hooks that bunch it) make a meaningful difference in drying speed.
      </p>

      <h2>Under-Sink Product Separation</h2>
      <p>
        Storing cleaning chemicals alongside personal care products creates accidental cross-contamination risk. Keep cleaning supplies — bleach, mold removers, toilet bowl cleaners — in a clearly designated zone of the under-sink cabinet, separated from shampoos, medicines, and personal care items. This is both a hygiene practice and a safety practice: the EPA's Safer Choice program provides guidance on safely storing household cleaning products.
      </p>

      <h2>Expired Products</h2>
      <p>
        Expired personal care products don't typically become harmful, but preservatives degrade, active ingredients lose potency, and the products can separate or change texture in ways that make them less effective. A quarterly clear-out of expired products — sunscreens, medicines, opened skincare products past their use-by period — keeps the bathroom functional and reduces the storage demands on the space.
      </p>

      <h2>Surface Cleaning Frequency</h2>
      <p>
        The most hygienic bathroom organization is one that makes cleaning easy. Storage systems that can be moved to wipe beneath them, organizers that don't trap water, and holders with drainage channels all reduce the cleaning time required to maintain a hygienic surface. The organizational choice and the hygiene outcome are the same decision.
      </p>
    </div>
  );
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) notFound();

  const relatedCat = categories.find(
    (c) =>
      guide.category.toLowerCase().includes(c.shortName.toLowerCase()) ||
      c.shortName.toLowerCase().includes(guide.category.toLowerCase())
  );
  const relatedProducts = relatedCat
    ? getProductsByCategory(relatedCat.slug).slice(0, 3)
    : [];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-[12px] text-[#7A7F7A] dark:text-stone-500 mb-8 flex gap-2">
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <Link href="/guides" className="hover:underline">Guides</Link>
        <span>/</span>
        <span>{guide.category}</span>
      </nav>

      <AffiliateDisclosure />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
        {/* Main content */}
        <article>
          <p className="eyebrow mb-3">{guide.category} · {guide.readTime}</p>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#14171A] dark:text-stone-100 mb-5 leading-tight">
            {guide.title}
          </h1>
          <p className="text-base text-[#4A4F4A] dark:text-stone-400 leading-relaxed mb-8 border-l-2 border-[#5B7561] dark:border-[#8AA391] pl-4">
            {guide.excerpt}
          </p>

          <div className="overflow-hidden bg-[#F7F6F3] dark:bg-stone-900 aspect-[16/7] mb-10">
            <img
              src={guide.image}
              alt={guide.title}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="text-[15px] text-[#4A4F4A] dark:text-stone-400 leading-relaxed space-y-5
            [&_h2]:font-serif [&_h2]:text-xl [&_h2]:font-medium [&_h2]:text-[#14171A] [&_h2]:dark:text-stone-100 [&_h2]:mt-10 [&_h2]:mb-3
            [&_h3]:font-serif [&_h3]:text-lg [&_h3]:font-medium [&_h3]:text-[#14171A] [&_h3]:dark:text-stone-100 [&_h3]:mt-6 [&_h3]:mb-2
            [&_ul]:list-none [&_ul]:space-y-2 [&_ul_li]:pl-4 [&_ul_li]:relative
            [&_ul_li]:before:content-['—'] [&_ul_li]:before:absolute [&_ul_li]:before:left-0 [&_ul_li]:before:text-[#5B7561] [&_ul_li]:before:dark:text-[#8AA391]
            [&_strong]:text-[#14171A] [&_strong]:dark:text-stone-100 [&_strong]:font-medium
            [&_a]:text-[#5B7561] [&_a]:dark:text-[#8AA391] [&_a]:underline">
            <GuideContent slug={slug} />
          </div>

          {/* External links */}
          {guide.externalLinks.length > 0 && (
            <div className="mt-12 pt-8 border-t border-[#E8E6E1] dark:border-stone-800">
              <p className="eyebrow mb-4">Further Reading</p>
              <ul className="space-y-3">
                {guide.externalLinks.map((link) => (
                  <li key={link.url}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-[#5B7561] dark:text-[#8AA391] hover:text-[#3A4D40] dark:hover:text-[#A6BCA9] transition-colors"
                    >
                      <ExternalLink size={13} />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-10 pt-8 border-t border-[#E8E6E1] dark:border-stone-800">
            <AffiliateDisclosure compact />
          </div>
        </article>

        {/* Sidebar: related products */}
        {relatedProducts.length > 0 && (
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="eyebrow mb-5">Related Picks</p>
              <div className="space-y-6">
                {relatedProducts.map((p) => (
                  <div key={p.id} className="flex gap-4">
                    <div className="w-20 h-20 shrink-0 overflow-hidden bg-[#F7F6F3] dark:bg-stone-900">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="text-[13px] font-medium text-[#14171A] dark:text-stone-100 leading-snug mb-1 line-clamp-2">
                        {p.name}
                      </p>
                      <a
                        href={`https://www.amazon.com/dp/${p.asin}?tag=YOURTAG-20`}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="inline-flex items-center gap-1 text-[12px] text-[#5B7561] dark:text-[#8AA391] hover:underline"
                      >
                        Amazon <ArrowUpRight size={11} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {relatedCat && (
                <Link
                  href={`/best/${relatedCat.slug}`}
                  className="mt-6 block text-[12px] text-[#5B7561] dark:text-[#8AA391] hover:underline"
                >
                  See all {relatedCat.shortName} picks →
                </Link>
              )}
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}

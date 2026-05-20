import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Banknote,
  Barcode,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Cpu,
  CreditCard,
  Gift,
  Globe,
  Layers,
  Library,
  Mail,
  MapPin,
  Monitor,
  Nfc,
  Package,
  Phone,
  Printer,
  RotateCcw,
  ScanLine,
  ShieldCheck,
  Shirt,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Store,
  Tablet,
  Tag,
  Tent,
  Users,
  WifiOff,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { SALES_EMAIL, SALES_PHONE_DISPLAY, SALES_PHONE_HREF } from "@/lib/contact";

type Feature = { Icon: LucideIcon; title: string; description: string };

// 12 modules — modelled on what Square / Shopify POS / Lightspeed Retail /
// Clover / Vend / Loyverse / Stripe Terminal ship in 2025.
const FEATURES: Feature[] = [
  {
    Icon: ShoppingCart,
    title: "Sales & Checkout",
    description:
      "Sub-second billing with item search, barcode scan, modifiers, holds, parked sales and split tender — works on tablet or terminal.",
  },
  {
    Icon: CreditCard,
    title: "Payments, all-in-one",
    description:
      "Card, contactless, QR, cash, wallets and BNPL — settled to one ledger. Pre-integrated processors or bring your own.",
  },
  {
    Icon: Package,
    title: "Inventory Management",
    description:
      "Real-time SKU and variant tracking, low-stock alerts, barcode generation, stock-takes, transfers and serial / lot control.",
  },
  {
    Icon: Users,
    title: "Customer Profiles & CRM",
    description:
      "Build a unified customer record across stores and channels — purchase history, lifetime value, notes, segments and tags.",
  },
  {
    Icon: Gift,
    title: "Loyalty & Gift Cards",
    description:
      "Points, rewards and tiered loyalty out of the box. Sell and redeem physical and digital gift cards across every outlet.",
  },
  {
    Icon: Tag,
    title: "Discounts & Promotions",
    description:
      "Item, cart and customer-level rules — happy hours, BOGO, bundle pricing, coupon codes and schedule-based campaigns.",
  },
  {
    Icon: RotateCcw,
    title: "Returns & Exchanges",
    description:
      "Quick returns by receipt, by item or by customer — refund to original tender or issue store credit with one tap.",
  },
  {
    Icon: MapPin,
    title: "Multi-Location, Multi-Register",
    description:
      "Roll-up reporting across outlets with location-specific pricing, taxes, staff and stock — no separate database to manage.",
  },
  {
    Icon: ShieldCheck,
    title: "Staff, Roles & Permissions",
    description:
      "PIN logins, granular role permissions, void / discount approvals, attendance, shift tracking and tip pooling.",
  },
  {
    Icon: WifiOff,
    title: "Offline Mode",
    description:
      "Keep selling when the internet drops. Transactions queue locally and sync the moment you're back online.",
  },
  {
    Icon: BarChart3,
    title: "Reports & Analytics",
    description:
      "End-of-day Z-reports, sales by hour / item / staff, margin by SKU, register variance and channel attribution.",
  },
  {
    Icon: Globe,
    title: "Omnichannel — In-Store + Online",
    description:
      "Sync inventory and customers with your storefront, marketplaces and delivery partners. Buy online, pick up in store, return anywhere.",
  },
];

type BusinessType = { Icon: LucideIcon; label: string };

const BUSINESS_TYPES: BusinessType[] = [
  { Icon: Store, label: "Retail Stores" },
  { Icon: Shirt, label: "Apparel & Boutiques" },
  { Icon: ShoppingBag, label: "Grocery & Convenience" },
  { Icon: Cpu, label: "Electronics & Hardware" },
  { Icon: Library, label: "Books & Stationery" },
  { Icon: BookOpen, label: "Specialty Retail" },
  { Icon: Tent, label: "Pop-ups & Markets" },
  { Icon: Wrench, label: "Service Counters" },
];

type Hardware = { Icon: LucideIcon; title: string; description: string };

const HARDWARE: Hardware[] = [
  {
    Icon: Barcode,
    title: "Barcode Scanners",
    description: "1D, 2D and QR scanners — wired or Bluetooth, paired in seconds.",
  },
  {
    Icon: Printer,
    title: "Receipt Printers",
    description: "Thermal printers over USB, Ethernet or Bluetooth, plus e-receipts.",
  },
  {
    Icon: Nfc,
    title: "Card Terminals",
    description: "Chip, swipe, tap and QR — countertop, handheld and mobile readers.",
  },
  {
    Icon: Banknote,
    title: "Cash Drawers",
    description: "Auto-trigger on cash sale, with cash-management logs by shift.",
  },
  {
    Icon: Monitor,
    title: "Customer Displays",
    description: "Show line items, totals, loyalty status and tip prompts on a second screen.",
  },
  {
    Icon: Tablet,
    title: "Tablet & Mobile POS",
    description: "iOS, Android and Windows — run a full register on any modern device.",
  },
];

type Value = { Icon: LucideIcon; title: string; description: string };

const VALUES: Value[] = [
  {
    Icon: Zap,
    title: "Fast where it matters",
    description:
      "Built for queues — sub-second item lookup, one-tap split tender, offline-first sync.",
  },
  {
    Icon: Layers,
    title: "One stack, not five",
    description:
      "POS, payments, inventory, CRM, loyalty, reporting — one cloud, one login, one bill.",
  },
  {
    Icon: Sparkles,
    title: "Ready on day one",
    description:
      "Pre-built tax templates, peripheral drivers, receipt layouts and roles — open box to first sale in hours.",
  },
];

const COMPARES: string[] = [
  "Everything Square POS does for retail",
  "Everything Lightspeed Retail does for multi-outlet",
  "Everything Shopify POS does for omnichannel",
  "Everything Clover does for hardware flexibility",
];

export function PosCloud() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg hero-vignette relative isolate overflow-hidden">
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 pb-24 pt-32 text-center sm:px-6 md:pt-40">
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur hover:bg-white/10"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All clouds
          </Link>

          <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-200">
            <ScanLine className="h-3.5 w-3.5" />
            POS Cloud
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            The point-of-sale cloud that
            <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-500 bg-clip-text text-transparent">
              {" "}runs your whole storefront.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-white/80 md:text-xl">
            Checkout, payments, inventory, customers, loyalty, multi-outlet reporting —
            one cloud, every register, online and in-store. Built for retailers who
            outgrew their starter POS.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-14 px-7 text-lg">
              <a href={`mailto:${SALES_EMAIL}`}>
                Contact Sales
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-7 text-lg">
              <a href="#features">See features</a>
            </Button>
          </div>

          <div className="mt-10 flex flex-col items-center gap-1 text-sm text-white/60 sm:flex-row sm:gap-6">
            <a
              href={`mailto:${SALES_EMAIL}`}
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <Mail className="h-4 w-4 text-brand" />
              {SALES_EMAIL}
            </a>
            <a
              href={`tel:${SALES_PHONE_HREF}`}
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <Phone className="h-4 w-4 text-brand" />
              {SALES_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* What is POS Cloud */}
      <section className="border-t border-white/10 bg-ink-950 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="What is POS Cloud"
            title="A modern POS, an inventory system and a back office — in one cloud."
            description="POS Cloud is zAI ERP's industry cloud for retail. It replaces the stack of legacy POS, separate inventory tool, marketing app and reporting spreadsheet with one connected platform — so every register, every outlet and every channel speaks the same language."
          />

          <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
            {COMPARES.map((c) => (
              <li
                key={c}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-ink-900 p-4 text-sm text-white/85"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-400" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Business types */}
      <section className="border-t border-white/10 bg-black py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="Built for every kind of retailer"
            description="Whether you ring up twenty tickets a day or twenty thousand, POS Cloud scales with you."
          />
          <ul className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {BUSINESS_TYPES.map(({ Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-sm text-white/90 transition-colors hover:border-white/30"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/15 ring-1 ring-sky-500/30">
                  <Icon className="h-4 w-4 text-sky-300" />
                </span>
                <span className="font-medium">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Feature grid */}
      <section id="features" className="border-t border-white/10 bg-ink-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
          <SectionHeading
            eyebrow="Everything you need at the counter"
            title="Twelve modules. One register. One cloud."
            description="From checkout to year-end reports — POS Cloud covers every job your store actually has to do."
          />

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900 p-6 transition-all hover:-translate-y-1 hover:border-white/30"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/15 ring-1 ring-sky-500/30">
                  <Icon className="h-6 w-6 text-sky-300" />
                </span>
                <h3 className="relative mt-4 text-lg font-semibold text-white">{title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-white/70">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware */}
      <section className="border-t border-white/10 bg-black py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
          <SectionHeading
            eyebrow="Works with your hardware"
            title="Plug in what you have. Or pick from our kit."
            description="POS Cloud runs on iOS, Android and Windows — and pairs with the peripherals your floor already uses."
          />

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HARDWARE.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-ink-900 p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
                  <Icon className="h-5 w-5 text-white" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-sm text-white/65">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why POS Cloud */}
      <section className="border-t border-white/10 bg-ink-950 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
          <SectionHeading title="Why retailers pick POS Cloud" />
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {VALUES.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-ink-900 p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 ring-1 ring-brand/30">
                  <Icon className="h-6 w-6 text-brand" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative isolate overflow-hidden border-t border-white/10 bg-black py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-500/10 via-transparent to-transparent"
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Ready to upgrade your registers?
          </h2>
          <p className="mt-4 text-base text-white/70 md:text-lg">
            Talk to our sales team — we'll map your operation, set up your hardware,
            import your catalog and have you ringing sales on POS Cloud quickly.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-14 px-7 text-lg">
              <a href={`mailto:${SALES_EMAIL}`}>
                Email Sales
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-7 text-lg">
              <a href={`tel:${SALES_PHONE_HREF}`}>
                Call {SALES_PHONE_DISPLAY}
                <Phone className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

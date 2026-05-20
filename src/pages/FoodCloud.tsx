import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  Calendar,
  ChefHat,
  ClipboardList,
  Coffee,
  Cookie,
  Globe,
  Heart,
  Mail,
  Monitor,
  Package,
  PartyPopper,
  Phone,
  Pizza,
  Receipt,
  ShieldCheck,
  Sparkles,
  Truck,
  UtensilsCrossed,
  Users,
  Wallet,
  Wine,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { SALES_EMAIL, SALES_PHONE_DISPLAY, SALES_PHONE_HREF } from "@/lib/contact";

type Feature = {
  Icon: LucideIcon;
  title: string;
  description: string;
};

// 12-feature grid — informed by what the leading restaurant management
// platforms (Toast, Square for Restaurants, Lightspeed, TouchBistro,
// Restaurant365, Petpooja, MarketMan) ship today.
const FEATURES: Feature[] = [
  {
    Icon: Receipt,
    title: "Point of Sale",
    description:
      "Lightning-fast billing for dine-in, takeaway and delivery — with split bills, modifiers, and offline mode.",
  },
  {
    Icon: ClipboardList,
    title: "Order Management",
    description:
      "Every order — dine-in, QR menu, phone, online — flows into one screen with status, source and timeline.",
  },
  {
    Icon: Globe,
    title: "Online Ordering & Delivery",
    description:
      "Branded ordering site plus integrations with Uber Eats, DoorDash, Zomato and Swiggy — no tablet pile-up.",
  },
  {
    Icon: Monitor,
    title: "Kitchen Display System",
    description:
      "Replace printed dockets with smart KDS screens — coursing, prep timers and station routing built in.",
  },
  {
    Icon: Package,
    title: "Inventory & Stock",
    description:
      "Ingredient-level tracking with live stock, low-stock alerts, wastage logs and automated stock-takes.",
  },
  {
    Icon: BookOpen,
    title: "Recipe & Food Cost",
    description:
      "Engineer your menu with ingredient costs, recipe yields, margin analysis and food-cost dashboards.",
  },
  {
    Icon: Truck,
    title: "Vendors & Purchase Orders",
    description:
      "Supplier directory, auto-generated POs from par levels, GRNs and three-way invoice matching.",
  },
  {
    Icon: Wallet,
    title: "Expense Management",
    description:
      "Capture every operating expense — rent, utilities, repairs, marketing — with approvals and receipts.",
  },
  {
    Icon: Calendar,
    title: "Tables & Reservations",
    description:
      "Visual floor plans, table status, walk-in waitlist, and online reservations with reminders.",
  },
  {
    Icon: Heart,
    title: "Loyalty & CRM",
    description:
      "Customer profiles, points and rewards, win-back campaigns, gift cards and segmented promotions.",
  },
  {
    Icon: Users,
    title: "Staff & Payroll",
    description:
      "Shift scheduling, attendance, tip pooling, role-based access and payroll-ready exports.",
  },
  {
    Icon: BarChart3,
    title: "Reports & Analytics",
    description:
      "Real-time dashboards for sales, top items, food cost %, labor %, channel mix and outlet comparison.",
  },
];

type BusinessType = { Icon: LucideIcon; label: string };

const BUSINESS_TYPES: BusinessType[] = [
  { Icon: UtensilsCrossed, label: "Restaurants" },
  { Icon: Coffee, label: "Cafés" },
  { Icon: ChefHat, label: "Cloud Kitchens" },
  { Icon: Pizza, label: "QSR & Fast Food" },
  { Icon: Truck, label: "Food Trucks" },
  { Icon: Cookie, label: "Bakeries" },
  { Icon: Wine, label: "Bars & Lounges" },
  { Icon: PartyPopper, label: "Catering" },
];

type Value = { Icon: LucideIcon; title: string; description: string };

const VALUES: Value[] = [
  {
    Icon: Zap,
    title: "One cloud, every channel",
    description:
      "Stop duct-taping a POS, an inventory tool and three delivery tablets. Food Cloud unifies the entire stack.",
  },
  {
    Icon: ShieldCheck,
    title: "Built for food operations",
    description:
      "Recipe costing, wastage, food safety logs and multi-outlet rollups — not a generic ERP forced to fit a kitchen.",
  },
  {
    Icon: Sparkles,
    title: "Ready on day one",
    description:
      "Pre-configured menus, tax templates, KDS layouts and reports for your format — go live in days, not months.",
  },
];

export function FoodCloud() {
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

          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-200">
            <UtensilsCrossed className="h-3.5 w-3.5" />
            Food Cloud
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            The complete cloud for
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              {" "}every food business.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-white/80 md:text-xl">
            From a single café to a chain of cloud kitchens — Food Cloud runs your POS,
            kitchen, inventory, online orders, staff and finances in one place.
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

      {/* What is Food Cloud */}
      <section className="border-t border-white/10 bg-ink-950 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="What is Food Cloud"
            title="An operating system for food, not a generic ERP."
            description="Food Cloud is zAI ERP's industry cloud purpose-built for food businesses. It replaces the patchwork of POS, KDS, inventory, accounting, online-ordering apps and spreadsheets with one connected platform — so your floor, kitchen, supply chain and back office finally speak the same language."
          />
        </div>
      </section>

      {/* Business types */}
      <section className="border-t border-white/10 bg-black py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="Built for every kind of food business"
            description="Whether you serve fifty covers a night or a thousand orders an hour, Food Cloud fits."
          />
          <ul className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {BUSINESS_TYPES.map(({ Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-sm text-white/90 transition-colors hover:border-white/30"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/15 ring-1 ring-amber-500/30">
                  <Icon className="h-4 w-4 text-amber-300" />
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
            eyebrow="Everything you need, in one cloud"
            title="The features your food business runs on."
            description="Twelve modules, one platform. Replace your POS, KDS, inventory tool, delivery aggregator manager, loyalty app and reporting stack — all of it."
          />

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900 p-6 transition-all hover:-translate-y-1 hover:border-white/30"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/15 ring-1 ring-amber-500/30">
                  <Icon className="h-6 w-6 text-amber-300" />
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

      {/* Why Food Cloud */}
      <section className="border-t border-white/10 bg-black py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
          <SectionHeading title="Why operators pick Food Cloud" />
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
      <section className="relative isolate overflow-hidden border-t border-white/10 bg-ink-950 py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent"
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Ready to run your kitchen on Food Cloud?
          </h2>
          <p className="mt-4 text-base text-white/70 md:text-lg">
            Talk to our sales team — we'll map your operation, configure your cloud,
            and have you live faster than you'd expect.
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

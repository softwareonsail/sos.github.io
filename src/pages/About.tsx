import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Cloud,
  Compass,
  Globe,
  Heart,
  Layers,
  Mail,
  Rocket,
  Sparkles,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { SALES_EMAIL } from "@/lib/contact";

type Pillar = { Icon: LucideIcon; title: string; description: string };

const PILLARS: Pillar[] = [
  {
    Icon: Layers,
    title: "One platform, many clouds",
    description:
      "Every customer gets the cloud built for their industry — POS for retail, Food for restaurants, Health for clinics — riding on one shared platform.",
  },
  {
    Icon: Rocket,
    title: "Built for operators",
    description:
      "We build for the people running the store, the kitchen, the clinic — not for procurement decks. Every module earns its place at the counter.",
  },
  {
    Icon: Globe,
    title: "Cloud-first, mobile-everywhere",
    description:
      "Run your business from a tablet at the counter, a phone in the kitchen, or a laptop at home. One source of truth, always in sync.",
  },
];

type Value = { Icon: LucideIcon; title: string; description: string };

const VALUES: Value[] = [
  {
    Icon: Compass,
    title: "Industry first",
    description:
      "Generic ERPs make every business look the same. We start with the industry and shape the cloud around it.",
  },
  {
    Icon: Heart,
    title: "Close to the customer",
    description:
      "Our team sits shotgun with operators. Their problems set the roadmap — not the loudest voice in the room.",
  },
  {
    Icon: Sparkles,
    title: "Craft over scale",
    description:
      "We grow when our software earns it. Polished beats prolific — every release ships ready for the customer's busiest day.",
  },
  {
    Icon: Users,
    title: "Small senior teams",
    description:
      "Tight teams with deep expertise ship faster, decide better and stay closer to the work.",
  },
];

type Stat = { value: string; label: string };

const STATS: Stat[] = [
  { value: "5", label: "Industry clouds in build" },
  { value: "12+", label: "Modules per cloud, on average" },
  { value: "100%", label: "Cloud-native, mobile-ready" },
  { value: "1", label: "Login. One bill. One platform." },
];

export function About() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg hero-vignette relative isolate overflow-hidden">
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 pb-20 pt-32 text-center sm:px-6 md:pt-40">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur">
            <Building2 className="h-3.5 w-3.5 text-brand" />
            About zAI ERP
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            We're building the multi-cloud ERP for
            <span className="bg-gradient-to-r from-brand via-rose-500 to-brand bg-clip-text text-transparent">
              {" "}every industry.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-white/80 md:text-xl">
            zAI ERP ships a different cloud to every kind of business — so you get the
            ERP built for what you actually do, not a generic suite forced to fit.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="border-t border-white/10 bg-ink-950 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/80">
            <Target className="h-3.5 w-3.5 text-brand" />
            Our mission
          </span>
          <p className="mt-6 text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
            Give every business — from a single café to a chain of clinics — the same
            calibre of operating software the largest enterprises rely on, shaped for
            their industry from day one.
          </p>
        </div>
      </section>

      {/* What we do */}
      <section className="border-t border-white/10 bg-black py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
          <SectionHeading
            eyebrow="What we do"
            title="One platform. A cloud for each industry."
            description="POS Cloud for retail, Food Cloud for restaurants, Fitness Cloud for gyms, Groom Cloud for salons and Health Cloud for clinics — each shaped to the way that industry actually runs."
          />

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {PILLARS.map(({ Icon, title, description }) => (
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

          <div className="mt-10 flex justify-center">
            <Button asChild size="lg" variant="outline" className="h-12 px-6">
              <Link to="/clouds/pos">
                Explore POS Cloud
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-white/10 bg-ink-950 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-ink-900 p-6 text-center"
              >
                <p className="text-3xl font-black text-white sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wider text-white/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-white/10 bg-black py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
          <SectionHeading
            eyebrow="What we believe"
            title="The principles behind the product."
          />

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {VALUES.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-ink-900 p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
                  <Icon className="h-5 w-5 text-white" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-sm text-white/70">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative isolate overflow-hidden border-t border-white/10 bg-ink-950 py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand/10 via-transparent to-transparent"
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Cloud className="mx-auto h-8 w-8 text-brand" />
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Want to see your cloud?
          </h2>
          <p className="mt-4 text-base text-white/70 md:text-lg">
            Reach out to our sales team — we'll walk you through the cloud built for
            your industry and figure out the fit together.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-14 px-7 text-lg">
              <a href={`mailto:${SALES_EMAIL}`}>
                Email Sales
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-7 text-lg">
              <Link to="/careers">
                We're hiring
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

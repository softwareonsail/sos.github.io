import {
  ArrowRight,
  Building2,
  Calendar,
  Compass,
  Globe,
  GraduationCap,
  Heart,
  Laptop,
  Mail,
  MapPin,
  Rocket,
  Sparkles,
  Stethoscope,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { SALES_EMAIL } from "@/lib/contact";

const CAREERS_EMAIL = "careers@zai-erp.example";

type Value = { Icon: LucideIcon; title: string; description: string };

const VALUES: Value[] = [
  {
    Icon: Compass,
    title: "Build for industries, not the average",
    description:
      "We ship a different cloud for every kind of business. Generic isn't good enough — we go deep on each vertical.",
  },
  {
    Icon: Rocket,
    title: "Ship over slides",
    description:
      "Roadmaps don't ship software. We bias to working code in the customer's hands over polished decks.",
  },
  {
    Icon: Users,
    title: "Close to the customer",
    description:
      "Engineers, designers and PMs all sit shotgun with customers. The shortest path from problem to fix is owning both ends.",
  },
  {
    Icon: Sparkles,
    title: "Craft matters",
    description:
      "Performance, design, copy, operations — we sweat the details because our customers run their business on what we ship.",
  },
];

type Benefit = { Icon: LucideIcon; title: string; description: string };

const BENEFITS: Benefit[] = [
  {
    Icon: Zap,
    title: "Competitive comp & equity",
    description: "Market-leading salaries plus meaningful equity from day one.",
  },
  {
    Icon: Globe,
    title: "Remote-first",
    description: "Work from where you do your best work. Async by default, deep-work friendly.",
  },
  {
    Icon: Stethoscope,
    title: "Health for you & family",
    description: "Comprehensive medical, dental and vision — for you and your dependants.",
  },
  {
    Icon: GraduationCap,
    title: "Learning budget",
    description: "Annual stipend for courses, books and conferences that make you better at your craft.",
  },
  {
    Icon: Laptop,
    title: "Modern hardware",
    description: "Latest MacBook Pro (or your weapon of choice), monitors, peripherals — on us.",
  },
  {
    Icon: Calendar,
    title: "Generous PTO",
    description: "Unlimited vacation, with a mandatory minimum. Recharge isn't optional.",
  },
];

type Role = {
  title: string;
  department: string;
  location: string;
  type: string;
};

const ROLES: Role[] = [
  {
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Senior Backend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Cloud Solutions Architect — POS Cloud",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Sales Account Executive",
    department: "Sales",
    location: "Karachi · Lahore · Remote",
    type: "Full-time",
  },
  {
    title: "Customer Success Manager",
    department: "Customer",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Implementation Specialist — Food Cloud",
    department: "Customer",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Content Marketing Lead",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
  },
];

const DEPARTMENTS = Array.from(new Set(ROLES.map((r) => r.department))).sort();

export function Careers() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg hero-vignette relative isolate overflow-hidden">
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 pb-20 pt-32 text-center sm:px-6 md:pt-40">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur">
            <Building2 className="h-3.5 w-3.5 text-brand" />
            Careers at zAI ERP
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Build the cloud
            <span className="bg-gradient-to-r from-brand via-rose-500 to-brand bg-clip-text text-transparent">
              {" "}built for every industry.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-white/80 md:text-xl">
            We're a small, senior team shipping a multi-cloud ERP for the businesses
            that actually run our economy — restaurants, retailers, clinics, gyms,
            salons and more. Come help us ship it.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-14 px-7 text-lg">
              <a href="#open-roles">
                See open roles
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-7 text-lg">
              <a href={`mailto:${CAREERS_EMAIL}`}>
                Email Careers
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-white/10 bg-ink-950 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
          <SectionHeading
            eyebrow="Why work here"
            title="What we hire for, what we ship for."
            description="A few principles we hold tight — they show up in our hiring, our reviews, and the way we build product."
          />

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
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

      {/* Benefits */}
      <section className="border-t border-white/10 bg-black py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
          <SectionHeading
            eyebrow="Benefits & perks"
            title="The setup you'd want — minus the corporate cruft."
            description="Compensation that respects your craft, the tools to do the job, and the runway to take care of yourself."
          />

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-ink-900 p-5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
                  <Icon className="h-5 w-5 text-white" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-white">{title}</h3>
                <p className="mt-1 text-sm text-white/70">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section id="open-roles" className="border-t border-white/10 bg-ink-950 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
          <SectionHeading
            eyebrow="Open roles"
            title="We're hiring across every team."
            description="Don't see your role? Reach out anyway — we always make room for exceptional people."
          />

          <p className="mt-8 text-center text-xs font-medium uppercase tracking-wider text-white/50">
            Departments hiring · {DEPARTMENTS.join(" · ")}
          </p>

          <ul className="mt-8 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-ink-900">
            {ROLES.map((role) => {
              const subject = encodeURIComponent(`Application — ${role.title}`);
              return (
                <li
                  key={role.title}
                  className="flex flex-col gap-4 p-5 transition-colors hover:bg-white/[0.03] sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-base font-semibold text-white sm:text-lg">
                      {role.title}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/60">
                      <span className="inline-flex items-center gap-1.5">
                        <Building2 className="h-3.5 w-3.5" />
                        {role.department}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {role.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {role.type}
                      </span>
                    </div>
                  </div>
                  <Button asChild size="sm" variant="secondary" className="sm:px-5">
                    <a href={`mailto:${CAREERS_EMAIL}?subject=${subject}`}>
                      Apply
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </li>
              );
            })}
          </ul>

          <div className="mt-10 rounded-2xl border border-white/10 bg-ink-900 p-6 text-center sm:p-8">
            <Heart className="mx-auto h-6 w-6 text-brand" />
            <h3 className="mt-3 text-xl font-semibold text-white">
              Didn't see the right role?
            </h3>
            <p className="mt-2 text-sm text-white/70">
              We hire for talent over titles. Send us a note and tell us what you'd build.
            </p>
            <Button asChild size="lg" className="mt-5 h-12 px-6">
              <a href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent("Open application")}`}>
                Introduce yourself
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-white/10 bg-black py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-sm text-white/60">
            For sales or product questions, please email{" "}
            <a
              href={`mailto:${SALES_EMAIL}`}
              className="text-white underline-offset-4 hover:underline"
            >
              {SALES_EMAIL}
            </a>{" "}
            instead.
          </p>
        </div>
      </section>
    </>
  );
}

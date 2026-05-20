import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Cloud,
  Dumbbell,
  ScanLine,
  Scissors,
  Stethoscope,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

type CloudCard = {
  name: string;
  tagline: string;
  Icon: LucideIcon;
  accent: string;
  href?: string;
};

// Listed alphabetically — keep this order when adding new clouds.
const CLOUDS: CloudCard[] = [
  {
    name: "Fitness Cloud",
    tagline: "Gyms, studios & trainers",
    Icon: Dumbbell,
    accent: "from-emerald-500/30 to-emerald-500/0",
  },
  {
    name: "Food Cloud",
    tagline: "Restaurants, cafés & cloud kitchens",
    Icon: UtensilsCrossed,
    accent: "from-amber-500/30 to-amber-500/0",
    href: "/clouds/food",
  },
  {
    name: "Groom Cloud",
    tagline: "Salons, spas & barbershops",
    Icon: Scissors,
    accent: "from-fuchsia-500/30 to-fuchsia-500/0",
  },
  {
    name: "Health Cloud",
    tagline: "Clinics, hospitals & pharmacies",
    Icon: Stethoscope,
    accent: "from-rose-500/30 to-rose-500/0",
  },
  {
    name: "POS Cloud",
    tagline: "Retail, boutiques & multi-outlet brands",
    Icon: ScanLine,
    accent: "from-sky-500/30 to-sky-500/0",
    href: "/clouds/pos",
  },
];

function CardBody({ name, tagline, Icon, accent, href }: CloudCard) {
  return (
    <>
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent} opacity-70 transition-opacity duration-300 group-hover:opacity-100`}
      />
      <div className="relative flex items-start justify-between">
        <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
          <Icon className="h-7 w-7 text-white" />
        </span>
        {href ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/90 ring-1 ring-white/15">
            Explore
            <ArrowUpRight className="h-3 w-3" />
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/60 ring-1 ring-white/10">
            Coming soon
          </span>
        )}
      </div>
      <div className="relative mt-auto">
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <p className="mt-1 text-sm text-white/60">{tagline}</p>
      </div>
    </>
  );
}

function Card(props: CloudCard) {
  const base =
    "group relative mx-3 flex h-52 w-72 shrink-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-900 p-5 shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:border-white/30 sm:w-80";
  if (props.href) {
    return (
      <Link to={props.href} className={base} role="listitem" aria-label={props.name}>
        <CardBody {...props} />
      </Link>
    );
  }
  return (
    <div className={base} role="listitem" aria-label={props.name}>
      <CardBody {...props} />
    </div>
  );
}

export function CloudsCarousel() {
  // Duplicate the list so the keyframe can translate -50% for a seamless loop.
  const loop = [...CLOUDS, ...CLOUDS];

  return (
    <section className="relative border-y border-white/10 bg-ink-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/80">
            <Cloud className="h-3.5 w-3.5 text-brand" />
            One platform, many clouds
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            A cloud for every kind of business
          </h2>
          <p className="mt-3 max-w-2xl text-base text-white/70 md:text-lg">
            Restaurant owner? You get the Food Cloud. Run a retail store? POS Cloud.
            Pick your industry — we ship the ERP cloud built for it. More clouds are on
            the way.
          </p>
        </div>
      </div>

      <div className="marquee-mask relative mt-12 overflow-hidden">
        <div
          className="marquee-track flex w-max animate-marquee items-center"
          role="list"
          aria-label="zAI ERP industry clouds"
        >
          {loop.map((c, i) => (
            <Card key={`${c.name}-${i}`} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";

type FooterLink = { label: string; to: string };

// Listed alphabetically — keep in sync with the carousel.
const SERVICES: FooterLink[] = [
  { label: "Fitness Cloud", to: "#" },
  { label: "Food Cloud", to: "/clouds/food" },
  { label: "Groom Cloud", to: "#" },
  { label: "Health Cloud", to: "#" },
  { label: "POS Cloud", to: "/clouds/pos" },
];

const COMPANY: FooterLink[] = [
  { label: "About", to: "/about" },
  { label: "Careers", to: "/careers" },
  { label: "Contact Sales", to: "/contact" },
  { label: "Terms of Use", to: "#" },
];

function FooterCol({ heading, items }: { heading: string; items: FooterLink[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
        {heading}
      </h3>
      <ul className="mt-4 space-y-3 text-sm">
        {items.map((item) => {
          const isInternal = item.to.startsWith("/");
          return (
            <li key={item.label}>
              {isInternal ? (
                <Link
                  to={item.to}
                  className="text-white/70 underline-offset-4 hover:text-white hover:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.to}
                  className="text-white/70 underline-offset-4 hover:text-white hover:underline"
                >
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white/70">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Link to="/" className="inline-block">
          <Logo />
        </Link>

        <div className="mt-10 grid grid-cols-1 gap-12 sm:grid-cols-2">
          <FooterCol heading="Company" items={COMPANY} />
          <FooterCol heading="Services" items={SERVICES} />
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/50">
          zAI ERP {new Date().getFullYear()} — Smarter clouds for every business.
        </div>
      </div>
    </footer>
  );
}

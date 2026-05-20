import { useState, type FormEvent } from "react";
import { ChevronRight, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  return (
    <section className="hero-bg hero-vignette relative isolate overflow-hidden">
      <div className="relative mx-auto flex min-h-[88vh] max-w-5xl flex-col items-center justify-center px-4 pb-24 pt-32 text-center sm:px-6 md:min-h-[92vh] md:pt-40">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/80 backdrop-blur">
            <Layers className="h-3.5 w-3.5 text-brand" />
            One ERP. A cloud for every industry.
          </span>
        </div>

        <h1
          className="mt-6 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-white animate-fade-up sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          Run your entire business on the
          <span className="bg-gradient-to-r from-brand via-rose-500 to-brand bg-clip-text text-transparent">
            {" "}cloud built for your industry.
          </span>
        </h1>

        <p
          className="mt-5 max-w-2xl text-lg text-white/80 animate-fade-up md:text-xl"
          style={{ animationDelay: "160ms" }}
        >
          Industry-specific ERP clouds for food, fitness, healthcare, grooming and services —
          ready to plug in, ready to grow.
        </p>

        <p
          className="mt-8 text-base font-medium text-white/85 animate-fade-up md:text-lg"
          style={{ animationDelay: "220ms" }}
        >
          Ready to transform your business? Enter your email to talk to sales.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-4 flex w-full max-w-2xl flex-col gap-3 animate-fade-up sm:flex-row"
          style={{ animationDelay: "260ms" }}
          noValidate
        >
          <label htmlFor="hero-email" className="sr-only">
            Work email
          </label>
          <Input
            id="hero-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError(null);
            }}
            className="h-14 flex-1 text-base"
            aria-invalid={Boolean(error)}
            aria-describedby={error ? "hero-email-error" : undefined}
          />
          <Button
            type="submit"
            size="lg"
            className="h-14 px-7 text-lg"
            aria-label="Contact sales"
          >
            Contact Sales
            <ChevronRight className="h-6 w-6" />
          </Button>
        </form>

        <div
          className="mt-3 min-h-[1.25rem] text-sm animate-fade-up"
          style={{ animationDelay: "320ms" }}
          aria-live="polite"
        >
          {error && (
            <p id="hero-email-error" className="text-rose-400">
              {error}
            </p>
          )}
          {submitted && !error && (
            <p className="text-emerald-400">
              Thanks — our sales team will reach out shortly.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

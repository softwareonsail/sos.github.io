import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock,
  Headphones,
  Mail,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/utils";
import { SALES_EMAIL, SALES_PHONE_DISPLAY, SALES_PHONE_HREF } from "@/lib/contact";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const EMPTY: FormState = { name: "", email: "", company: "", message: "" };

export function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update =
    (k: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in your name, email and message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
    setSubmitted(true);
    setForm(EMPTY);
  };

  return (
    <>
      {/* Hero */}
      <section className="hero-bg hero-vignette relative isolate overflow-hidden">
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 pb-16 pt-32 text-center sm:px-6 md:pt-40">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur">
            <Headphones className="h-3.5 w-3.5 text-brand" />
            Talk to Sales
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Let's figure out
            <span className="bg-gradient-to-r from-brand via-rose-500 to-brand bg-clip-text text-transparent">
              {" "}your cloud.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-white/80 md:text-xl">
            Tell us a little about your business and we'll get back to you within one
            working day — usually a lot sooner.
          </p>
        </div>
      </section>

      {/* Contact cards + form */}
      <section className="border-t border-white/10 bg-ink-950 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 md:px-10 lg:grid-cols-5">
          {/* Left: contact info */}
          <aside className="space-y-4 lg:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-ink-900 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand/15 ring-1 ring-brand/30">
                <Mail className="h-5 w-5 text-brand" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">Email Sales</h3>
              <p className="mt-1 text-sm text-white/70">
                Send us a note — the right human will pick it up.
              </p>
              <a
                href={`mailto:${SALES_EMAIL}`}
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-white hover:underline"
              >
                {SALES_EMAIL}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-ink-900 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand/15 ring-1 ring-brand/30">
                <Phone className="h-5 w-5 text-brand" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">Call Sales</h3>
              <p className="mt-1 text-sm text-white/70">
                Prefer voice? We pick up Mon–Sat, 9am–7pm PKT.
              </p>
              <a
                href={`tel:${SALES_PHONE_HREF}`}
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-white hover:underline"
              >
                {SALES_PHONE_DISPLAY}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-ink-900 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
                  <Clock className="h-4 w-4 text-white" />
                </span>
                <h3 className="text-base font-semibold text-white">Response time</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">
                One working day, but usually within a few hours. For anything urgent,
                the chat bubble in the bottom-right pings sales directly.
              </p>
            </div>
          </aside>

          {/* Right: contact form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-white/10 bg-ink-900 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/15 ring-1 ring-brand/30">
                  <MessageCircle className="h-5 w-5 text-brand" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white">Send a message</h3>
                  <p className="text-sm text-white/60">
                    We'll match you to the right cloud and the right human.
                  </p>
                </div>
              </div>

              <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-white/70">
                      Your name
                    </label>
                    <Input
                      id="name"
                      placeholder="Jane Cooper"
                      value={form.name}
                      onChange={update("name")}
                      autoComplete="name"
                      className="h-12 text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-white/70">
                      Work email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jane@yourcompany.com"
                      value={form.email}
                      onChange={update("email")}
                      autoComplete="email"
                      className="h-12 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="mb-1.5 block text-xs font-medium text-white/70">
                    Company <span className="text-white/40">(optional)</span>
                  </label>
                  <Input
                    id="company"
                    placeholder="Acme Inc."
                    value={form.company}
                    onChange={update("company")}
                    autoComplete="organization"
                    className="h-12 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-white/70">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell us about your business and which cloud you're considering…"
                    value={form.message}
                    onChange={update("message")}
                    rows={5}
                    className={cn(
                      "flex w-full rounded-md border border-white/30 bg-black/60 px-4 py-3 text-sm text-white placeholder:text-white/50 backdrop-blur focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                    )}
                  />
                </div>

                {error && (
                  <p role="alert" className="text-sm text-rose-400">
                    {error}
                  </p>
                )}

                {submitted && !error && (
                  <div className="flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-200">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                    <div>
                      <p className="font-semibold">Thanks — message received.</p>
                      <p className="mt-0.5 text-emerald-200/80">
                        Our sales team will reach out shortly.
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-white/50">
                    By submitting you agree to be contacted by our sales team.
                  </p>
                  <Button type="submit" size="lg" className="h-12 px-6">
                    Send message
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer hint */}
      <section className="border-t border-white/10 bg-black py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <SectionHeading
            EyebrowIcon={Building2}
            eyebrow="Press, partnerships & careers"
            title="Looking for something else?"
            description="For partnerships or media, email sales — we'll route it. For careers, see open roles on the Careers page."
          />
        </div>
      </section>
    </>
  );
}

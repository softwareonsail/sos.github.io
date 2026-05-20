import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { Mail, MessageCircle, Phone, Send, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { SALES_EMAIL, SALES_PHONE_DISPLAY, SALES_PHONE_HREF } from "@/lib/contact";

type Msg =
  | { role: "bot"; text: string; id: number }
  | { role: "user"; text: string; id: number };

const BOT_REPLY =
  "Thanks for reaching out! For any questions about zAI ERP, please contact our sales team — they'll get back to you quickly.";

function ContactCard() {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/60">
        Contact Sales
      </p>
      <a
        href={`mailto:${SALES_EMAIL}`}
        className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-white hover:bg-white/10"
      >
        <Mail className="h-4 w-4 text-brand" />
        <span className="break-all">{SALES_EMAIL}</span>
      </a>
      <a
        href={`tel:${SALES_PHONE_HREF}`}
        className="mt-1 flex items-center gap-2 rounded-lg px-2 py-1.5 text-white hover:bg-white/10"
      >
        <Phone className="h-4 w-4 text-brand" />
        <span>{SALES_PHONE_DISPLAY}</span>
      </a>
    </div>
  );
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>(() => [
    {
      role: "bot",
      id: 0,
      text:
        "Hi, I'm the zAI ERP assistant. Ask me anything — for detailed questions our sales team is the best route.",
    },
  ]);
  const nextId = useRef(1);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const panelId = useId();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    const userId = nextId.current++;
    const botId = nextId.current++;
    setMessages((m) => [
      ...m,
      { role: "user", id: userId, text: trimmed },
      { role: "bot", id: botId, text: BOT_REPLY },
    ]);
    setInput("");
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat with sales"}
        aria-expanded={open}
        aria-controls={panelId}
        className={cn(
          "fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-[0_10px_30px_-8px_rgba(229,9,20,0.8)] ring-1 ring-white/10 transition-all hover:bg-brand-dark hover:scale-105 sm:bottom-6 sm:right-6",
          open && "rotate-90"
        )}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {open && (
        <div
          id={panelId}
          role="dialog"
          aria-label="zAI ERP chat assistant"
          className="fixed bottom-24 right-5 z-50 flex max-h-[min(80vh,640px)] w-[min(92vw,380px)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-2xl sm:right-6"
        >
          <div className="flex items-center gap-3 border-b border-white/10 bg-black/40 px-4 py-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/15 ring-1 ring-brand/30">
              <Sparkles className="h-4 w-4 text-brand" />
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-white">zAI ERP Assistant</p>
              <p className="text-xs text-white/50">Replies usually within a few hours</p>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close chat"
              className="rounded-md p-1 text-white/70 hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto bg-ink-950 px-3 py-4"
          >
            {messages.map((m) =>
              m.role === "bot" ? (
                <div key={m.id} className="flex max-w-[85%] flex-col gap-2">
                  <div className="rounded-2xl rounded-tl-sm bg-white/10 px-3 py-2 text-sm text-white">
                    {m.text}
                  </div>
                </div>
              ) : (
                <div key={m.id} className="ml-auto flex max-w-[85%] flex-col">
                  <div className="rounded-2xl rounded-tr-sm bg-brand px-3 py-2 text-sm text-white">
                    {m.text}
                  </div>
                </div>
              )
            )}

            <div className="max-w-[90%]">
              <ContactCard />
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="flex items-center gap-2 border-t border-white/10 bg-black/40 p-3"
          >
            <label htmlFor={`${panelId}-input`} className="sr-only">
              Type your message
            </label>
            <Input
              id={`${panelId}-input`}
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything…"
              className="h-11 flex-1 text-sm"
            />
            <Button
              type="submit"
              size="icon"
              aria-label="Send message"
              className="h-11 w-11 shrink-0"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
}

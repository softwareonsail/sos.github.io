import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <span
      aria-label="zAI ERP"
      className={cn("group flex items-center gap-2 select-none", className)}
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-brand to-brand-dark shadow-[0_6px_24px_-8px_rgba(229,9,20,0.85)] ring-1 ring-white/10">
        <span className="text-2xl font-black leading-none text-white">z</span>
        <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-white/90 shadow-[0_0_12px_2px_rgba(255,255,255,0.6)]" />
      </span>
      <span className="flex items-baseline gap-1 text-xl font-extrabold tracking-tight">
        <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
          zAI
        </span>
        <span className="text-brand transition-colors group-hover:text-white">
          ERP
        </span>
      </span>
    </span>
  );
}

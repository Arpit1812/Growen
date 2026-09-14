import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

type Tone = "solid" | "dark" | "outline" | "quiet";

const TONES: Record<Tone, string> = {
  solid: "bg-primary text-primary-foreground hover:bg-oxblood-soft",
  dark: "bg-ink text-ink-foreground hover:bg-ink/90",
  outline: "border border-border text-foreground hover:border-oxblood",
  quiet: "border border-ink-border text-ink-foreground hover:bg-ink-foreground/10",
};

/**
 * CTA with an animated arrow: the disc expands, the arrow slides out and a
 * second arrow slides in behind it.
 */
export function ArrowLink({
  to,
  hash,
  children,
  tone = "solid",
  className = "",
}: {
  to: string;
  hash?: string;
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <Link
      to={to}
      {...(hash ? { hash } : {})}
      className={`group relative inline-flex items-center gap-3 rounded-full py-2 pl-7 pr-2 font-display font-bold transition-colors ${TONES[tone]} ${className}`}
    >
      <span>{children}</span>
      <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-current/15 transition-transform duration-300 ease-out group-hover:scale-110">
        <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-6 group-hover:opacity-0" />
        <ArrowRight className="absolute h-4 w-4 -translate-x-6 opacity-0 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
      </span>
    </Link>
  );
}

export function GlowingSeparator({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`h-0.5 w-full bg-oxblood shadow-[0_0_10px_2px_rgba(143,65,77,0.24),0_0_28px_8px_rgba(143,65,77,0.12)] ${className}`}
    />
  );
}

const WORDS = ["Capture", "Score", "Route", "Engage", "Expand", "Build Infrastructure"];

export function Marquee() {
  const items = [...WORDS, ...WORDS, ...WORDS, ...WORDS];
  return (
    <section className="bg-cream-deep px-6 py-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-full border border-border bg-cream py-4 shadow-[inset_0_1px_0_oklch(1_0_0/60%)]">
        <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap px-6">
          {items.map((word, i) => (
            <span key={`${word}-${i}`} className="flex items-center gap-10">
              <span className="voice text-xl text-foreground/80">{word}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-oxblood-soft" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const items = [
  'Penang', 'George Town', 'Bayan Lepas', 'Selangor', 'Puchong', 'Bukit Jalil',
  'Singapore', 'Kedah', 'Interior Design', '3D Visualization', 'Custom Carpentry', 'Turnkey Build',
];

export function Marquee() {
  const doubled = [...items, ...items];

  return (
    <section className="overflow-hidden border-y border-beige-300/60 bg-beige-50 py-5">
      <div className="flex animate-marquee whitespace-nowrap motion-reduce:animate-none">
        {doubled.map((item, i) => (
          <span key={i} className="mx-6 flex items-center gap-6 text-sm font-medium uppercase tracking-widest text-graphite-400">
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-beige-500" />
          </span>
        ))}
      </div>
    </section>
  );
}

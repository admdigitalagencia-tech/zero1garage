interface Props {
  t: (key: string) => string;
}

const stats = [
  { num: 'stats.1.num', label: 'stats.1.label' },
  { num: 'stats.2.num', label: 'stats.2.label' },
  { num: 'stats.3.num', label: 'stats.3.label' },
  { num: 'stats.4.num', label: 'stats.4.label' },
];

export default function Stats({ t }: Props) {
  return (
    <section className="section-strip py-12 md:py-16">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map(s => (
          <div key={s.num}>
            <div className="font-display text-primary leading-none" style={{ fontSize: 'clamp(3rem, 5vw, 5rem)' }}>
              {t(s.num)}
            </div>
            <div className="font-body text-xs uppercase tracking-widest text-foreground mt-2">{t(s.label)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

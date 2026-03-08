interface Props {
  t: (key: string) => string;
}

const stats = [
  { num: 'cred.1.num', label: 'cred.1.label', note: 'cred.1.note' },
  { num: 'cred.2.num', label: 'cred.2.label' },
  { num: 'cred.3.num', label: 'cred.3.label' },
  { num: 'cred.4.num', label: 'cred.4.label' },
];

export default function CredibilityBar({ t }: Props) {
  return (
    <section className="section-dark py-12 md:py-16 border-t border-border">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map(s => (
          <div key={s.num} className="relative">
            <div className="font-display text-gold leading-none" style={{ fontSize: 'clamp(3rem, 5vw, 5rem)' }}>
              {t(s.num)}
            </div>
            <div className="font-body text-xs uppercase tracking-widest text-foreground mt-2">{t(s.label)}</div>
            {'note' in s && s.note && (
              <div className="font-body text-[10px] text-muted-foreground mt-1 italic">{t(s.note)}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

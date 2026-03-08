interface Props {
  t: (key: string) => string;
}

const reviews = [
  { initials: 'CM', name: 'Carlos M.', date: '2 semanas atrás', text: '"Bati o carro e não sabia o que fazer. A Zero1 cuidou de tudo com o seguro, não precisei ligar uma vez. Recebi o carro melhor do que antes do acidente."' },
  { initials: 'FR', name: 'Fernanda R.', date: '1 mês atrás', text: '"Pintura impecável, cor perfeita. E o processo com a seguradora foi resolvido em dias, não semanas. Recomendo demais."' },
  { initials: 'DS', name: 'Diego S.', date: '3 semanas atrás', text: '"Fui lá sem esperança porque o carro estava destruído. A equipe abriu o sinistro, negociou com o seguro e entregou o carro restaurado. Profissionalismo absurdo."' },
];

export default function Reviews({ t }: Props) {
  return (
    <section className="section-light py-20 md:py-28">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-text-dark text-4xl md:text-7xl mb-4">
          5<span className="text-gold">★</span> {t('reviews.headline').replace('5★ ', '')}
        </h2>
        <p className="font-body text-text-muted mb-4">{t('reviews.sub')}</p>
        <span className="inline-block font-body text-xs text-foreground bg-bg-dark border border-border px-4 py-2 mb-12">
          {t('reviews.pill')}
        </span>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {reviews.map(r => (
            <div key={r.initials} className="bg-foreground border border-border p-6 text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gold text-primary-foreground font-bold text-sm flex items-center justify-center rounded-full">
                  {r.initials}
                </div>
                <div>
                  <div className="font-body text-sm text-text-dark font-medium">{r.name}</div>
                  <div className="font-body text-xs text-text-muted">{r.date}</div>
                </div>
              </div>
              <div className="text-gold text-xs mb-3">★★★★★</div>
              <p className="font-body text-sm text-text-dark/90 font-light leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>

        <a href="https://g.page/zero1garage" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-gold hover:underline tracking-wide">
          {t('reviews.link')}
        </a>
      </div>
    </section>
  );
}

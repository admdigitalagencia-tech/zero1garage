interface Props {
  t: (key: string) => string;
}

const reviews = [
  { initials: 'CM', name: 'Carlos M.', date: '2 semanas atrás', text: '"Trouxe meu carro sem ideia do problema. Me explicaram tudo com clareza, consertaram no prazo e o preço foi exatamente o que prometeram."' },
  { initials: 'FR', name: 'Fernanda R.', date: '1 mês atrás', text: '"Funilaria impecável. Cuidaram de tudo com o seguro e me devolveram o carro melhor do que antes do acidente."' },
  { initials: 'DS', name: 'Diego S.', date: '3 semanas atrás', text: '"Finalmente uma oficina honesta em Hawthorne. Sem enrolação, sem surpresa na conta. Só voltarei aqui."' },
];

export default function Reviews({ t }: Props) {
  return (
    <section className="section-dark py-20 md:py-28">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-foreground text-4xl md:text-7xl mb-4">
          5<span className="text-primary">★</span> {t('reviews.headline').replace('5★ ', '')}
        </h2>
        <p className="font-body text-muted-foreground mb-4">{t('reviews.sub')}</p>
        <span className="inline-block font-body text-xs text-muted-foreground bg-bg-mid border border-border px-4 py-2 mb-12">
          {t('reviews.pill')}
        </span>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {reviews.map(r => (
            <div key={r.initials} className="bg-bg-mid border border-border p-6 text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center rounded-full">
                  {r.initials}
                </div>
                <div>
                  <div className="font-body text-sm text-foreground font-medium">{r.name}</div>
                  <div className="font-body text-xs text-muted-foreground">{r.date}</div>
                </div>
              </div>
              <div className="text-primary text-xs mb-3">★★★★★</div>
              <p className="font-body text-sm text-foreground/90 font-light leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>

        <a href="https://g.page/zero1garage" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-primary hover:underline tracking-wide">
          {t('reviews.link')}
        </a>
      </div>
    </section>
  );
}

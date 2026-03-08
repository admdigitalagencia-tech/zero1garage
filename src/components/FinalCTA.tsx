interface Props {
  t: (key: string) => string;
}

export default function FinalCTA({ t }: Props) {
  return (
    <section id="contato" className="bg-gold py-20 md:py-28">
      <div className="container mx-auto px-4 text-center">
        <p className="uppercase tracking-[0.15em] text-[0.72rem] font-medium text-primary-foreground/80 font-body mb-4">
          {t('cta.overline')}
        </p>
        <h2 className="font-display text-primary-foreground text-4xl md:text-6xl lg:text-7xl mb-6">{t('cta.headline')}</h2>
        <p className="font-body text-primary-foreground/80 max-w-2xl mx-auto mb-8 font-light">
          {t('cta.body')}
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          <a href="tel:+14245239244" className="bg-bg-dark text-foreground font-bold uppercase tracking-widest text-sm px-8 py-3 hover:bg-bg-mid transition-colors">
            {t('cta.ligar')}
          </a>
          <a href="https://wa.me/14245239244" target="_blank" rel="noopener noreferrer" className="bg-bg-dark text-foreground font-bold uppercase tracking-widest text-sm px-8 py-3 hover:bg-bg-mid transition-colors">
            {t('cta.whatsapp')}
          </a>
        </div>
        <p className="font-body text-lg text-primary-foreground font-medium mb-2">(424) 523-9244</p>
        <p className="font-body text-sm text-primary-foreground/70 italic mt-4">{t('cta.tagline')}</p>
      </div>
    </section>
  );
}

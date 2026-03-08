import { Star, MapPin, Phone, MessageCircle } from 'lucide-react';

interface Props {
  t: (key: string) => string;
}

export default function Hero({ t }: Props) {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center section-dark pt-[60px]">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex-1 flex flex-col justify-center">
        <div className="max-w-[54%] max-lg:max-w-full">
          <p className="overline mb-4">{t('hero.overline')}</p>
          <h1 className="font-display text-foreground leading-[0.95] mb-6" style={{ fontSize: 'clamp(3rem, 8vw, 8rem)' }}>
            {t('hero.h1.1')}<br />
            {t('hero.h1.2')}<br />
            {t('hero.h1.3')}
          </h1>
          <p className="font-body text-muted-foreground text-base max-w-[500px] mb-8 font-light leading-relaxed">
            {t('hero.sub')}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:+14245239244" className="bg-gold text-primary-foreground font-bold uppercase tracking-widest text-sm px-8 py-3 hover:brightness-110 transition">
              {t('hero.cta1')}
            </a>
            <a href="#processo" className="border-2 border-gold text-gold font-bold uppercase tracking-widest text-sm px-8 py-3 hover:bg-gold hover:text-primary-foreground transition-colors">
              {t('hero.cta2')}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="relative z-10 bg-bg-strip border-t border-border">
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center gap-6 md:gap-10 text-sm font-body text-muted-foreground">
          <span className="flex items-center gap-2"><Star size={14} className="text-gold" /> {t('hero.google')}</span>
          <span className="flex items-center gap-2"><MapPin size={14} /> Hawthorne, CA</span>
          <a href="tel:+14245239244" className="flex items-center gap-2 hover:text-gold transition-colors"><Phone size={14} /> (424) 523-9244</a>
          <a href="https://wa.me/14245239244" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors"><MessageCircle size={14} /> {t('hero.whatsapp')}</a>
        </div>
      </div>
    </section>
  );
}

import bodyImg from '@/assets/bodyshop-section.jpg';

interface Props {
  t: (key: string) => string;
}

const bullets = ['body.b1', 'body.b2', 'body.b3', 'body.b4', 'body.b5', 'body.b6'];

export default function BodyShopSection({ t }: Props) {
  return (
    <section className="section-dark py-20 md:py-28">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="overline mb-3">{t('body.overline')}</p>
          <h2 className="font-display text-foreground text-3xl md:text-5xl mb-6">{t('body.headline')}</h2>
          <div className="font-body text-muted-foreground font-light mb-6 whitespace-pre-line leading-relaxed">
            {t('body.body')}
          </div>
          <ul className="space-y-2 mb-8">
            {bullets.map(b => (
              <li key={b} className="font-body text-sm text-foreground/80 flex items-start gap-2">
                <span className="text-gold font-bold">→</span> {t(b)}
              </li>
            ))}
          </ul>
          <a href="https://wa.me/14245239244" target="_blank" rel="noopener noreferrer" className="inline-block bg-gold text-primary-foreground font-bold uppercase tracking-widest text-sm px-8 py-3 hover:brightness-110 transition mb-4">
            {t('body.cta')}
          </a>
          <div className="font-body text-xs text-muted-foreground space-y-1">
            <p>📞 (424) 523-9244</p>
            <p>✉️ zeroonegaragellc@gmail.com</p>
          </div>
        </div>
        <div>
          <img src={bodyImg} alt="Professional paint booth" className="w-full h-[500px] object-cover" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

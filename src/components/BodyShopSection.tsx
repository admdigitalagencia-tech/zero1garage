import bodyImg from '@/assets/bodyshop-section.jpg';

interface Props {
  t: (key: string) => string;
}

const bullets = ['body.b1', 'body.b2', 'body.b3', 'body.b4', 'body.b5'];

export default function BodyShopSection({ t }: Props) {
  return (
    <section id="funilaria" className="section-light py-20 md:py-28">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <img src={bodyImg} alt="Auto body paint repair" className="w-full h-[500px] object-cover" loading="lazy" />
        </div>
        <div className="order-1 md:order-2">
          <p className="overline mb-3">{t('body.overline')}</p>
          <h2 className="font-display text-text-dark text-3xl md:text-5xl mb-6">{t('body.headline')}</h2>
          <p className="font-body text-text-muted font-light mb-6">{t('body.body')}</p>
          <ul className="space-y-2 mb-8">
            {bullets.map(b => (
              <li key={b} className="font-body text-sm text-text-dark/80 flex items-start gap-2">
                <span className="text-primary font-bold">→</span> {t(b)}
              </li>
            ))}
          </ul>
          <a href="tel:+14245239244" className="inline-block bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm px-7 py-3 hover:bg-text-dark hover:text-bg-light transition-colors mb-4">
            {t('body.cta')}
          </a>
          <div className="font-body text-xs text-text-muted space-y-1">
            <p>📞 (424) 523-9244</p>
            <p>✉️ zeroonegaragellc@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

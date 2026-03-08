import repairImg from '@/assets/repair-section.jpg';

interface Props {
  t: (key: string) => string;
}

const bullets = ['repair.b1', 'repair.b2', 'repair.b3', 'repair.b4', 'repair.b5', 'repair.b6'];

export default function RepairSection({ t }: Props) {
  return (
    <section id="reparo" className="section-dark py-20 md:py-28">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="overline mb-3">{t('repair.overline')}</p>
          <h2 className="font-display text-foreground text-3xl md:text-5xl mb-6">{t('repair.headline')}</h2>
          <p className="font-body text-muted-foreground font-light mb-6">{t('repair.body')}</p>
          <ul className="space-y-2 mb-8">
            {bullets.map(b => (
              <li key={b} className="font-body text-sm text-foreground/80 flex items-start gap-2">
                <span className="text-primary font-bold">→</span> {t(b)}
              </li>
            ))}
          </ul>
          <a href="tel:+14245239244" className="inline-block bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm px-7 py-3 hover:bg-foreground hover:text-background transition-colors mb-4">
            {t('repair.cta')}
          </a>
          <div className="font-body text-xs text-muted-foreground space-y-1">
            <p>📞 (424) 523-9244</p>
            <p>✉️ zeroonegaragellc@gmail.com</p>
          </div>
        </div>
        <div className="relative">
          <img src={repairImg} alt="Mechanic repairing engine" className="w-full h-[500px] object-cover" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

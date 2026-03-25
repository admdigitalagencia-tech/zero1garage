import repairImg from '@/assets/repair-section.jpg';
import totalLossImg from '@/assets/about-team.jpg';

interface Props {
  t: (key: string) => string;
}

const insBullets = ['ins.b1', 'ins.b2', 'ins.b3', 'ins.b4', 'ins.b5', 'ins.b6'];
const tlBullets = ['tl.b1', 'tl.b2', 'tl.b3', 'tl.b4'];

export default function InsuranceSection({ t }: Props) {
  return (
    <section id="seguros">
      {/* Insurance Management */}
      <div className="section-light py-20 md:py-28">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src={repairImg} alt="Insurance claim process" className="w-full h-[500px] object-cover" loading="lazy" />
          </div>
          <div>
            <p className="overline mb-3">{t('ins.overline')}</p>
            <h2 className="font-display text-text-dark text-3xl md:text-5xl mb-6">{t('ins.headline')}</h2>
            <p className="font-body text-text-muted font-light mb-6">{t('ins.body')}</p>
            <ul className="space-y-2 mb-6">
              {insBullets.map(b => (
                <li key={b} className="font-body text-sm text-text-dark/80 flex items-start gap-2">
                  <span className="text-gold font-bold">→</span> {t(b)}
                </li>
              ))}
            </ul>
            <p className="font-body text-xs text-text-muted italic mb-6">{t('ins.note')}</p>
            <a href="https://wa.me/14245239244" target="_blank" rel="noopener noreferrer" className="inline-block bg-gold text-primary-foreground font-bold uppercase tracking-widest text-sm px-8 py-3 hover:brightness-110 transition mb-4">
              {t('ins.cta')}
            </a>
            <div className="font-body text-xs text-text-muted space-y-1">
              <p>📞 (424) 523-9244</p>
              <p>✉️ zeroonegaragellc@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Deductible Highlight */}
      <div className="section-dark py-20 md:py-28">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="overline mb-4">{t('ded.overline')}</p>
          <h2 className="font-display text-foreground text-3xl md:text-5xl lg:text-6xl mb-6">{t('ded.headline')}</h2>
          <p className="font-body text-muted-foreground font-light mb-8 max-w-2xl mx-auto">{t('ded.body')}</p>
          <a href="https://wa.me/14245239244" target="_blank" rel="noopener noreferrer" className="inline-block bg-gold text-primary-foreground font-bold uppercase tracking-widest text-sm px-8 py-3 hover:brightness-110 transition mb-6">
            {t('ded.cta')}
          </a>
          <div className="mt-4">
            <span className="inline-block border-2 border-gold text-gold font-body text-xs uppercase tracking-widest px-6 py-2 font-bold">
              {t('ded.badge')}
            </span>
          </div>
        </div>

        {/* 3 Cards */}
        <div className="container mx-auto px-4 mt-16 grid md:grid-cols-3 gap-6 max-w-5xl">
          {['ded.card1', 'ded.card2', 'ded.card3'].map(key => (
            <div key={key} className="bg-bg-light-alt p-8">
              <h3 className="font-display text-text-dark text-xl mb-2">{t(`${key}.title`)}</h3>
              <p className="font-body text-text-muted text-sm font-light">{t(`${key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Total Loss */}
      <div className="bg-bg-mid py-20 md:py-28">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="overline mb-3">{t('tl.overline')}</p>
            <h2 className="font-display text-foreground text-3xl md:text-5xl mb-6">{t('tl.headline')}</h2>
            <p className="font-body text-muted-foreground font-light mb-6">{t('tl.body')}</p>
            <ul className="space-y-2 mb-8">
              {tlBullets.map(b => (
                <li key={b} className="font-body text-sm text-foreground/80 flex items-start gap-2">
                  <span className="text-gold font-bold">→</span> {t(b)}
                </li>
              ))}
            </ul>
            <a href="https://wa.me/14245239244" target="_blank" rel="noopener noreferrer" className="inline-block bg-gold text-primary-foreground font-bold uppercase tracking-widest text-sm px-8 py-3 hover:brightness-110 transition">
              {t('tl.cta')}
            </a>
          </div>
          <div>
            <img src={totalLossImg} alt="Total loss vehicle in yard" className="w-full h-[450px] object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

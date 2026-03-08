import aboutImg from '@/assets/about-team.jpg';
import { useShopStatus } from '@/hooks/useShopStatus';

interface Props {
  t: (key: string) => string;
}

const values = [
  { title: 'about.v1.title', desc: 'about.v1.desc' },
  { title: 'about.v2.title', desc: 'about.v2.desc' },
  { title: 'about.v3.title', desc: 'about.v3.desc' },
  { title: 'about.v4.title', desc: 'about.v4.desc' },
];

export default function About({ t }: Props) {
  const isOpen = useShopStatus();

  return (
    <section id="sobre" className="section-light py-20 md:py-28">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
        <div className="relative">
          <img src={aboutImg} alt="Zero1 Garage team" className="w-full h-auto object-cover" loading="lazy" />
          <div className="absolute bottom-4 left-4 bg-bg-dark/80 text-foreground font-body text-xs px-3 py-1.5">
            Zero1 Garage · Hawthorne, CA
          </div>
        </div>
        <div>
          <p className="overline mb-3">{t('about.overline')}</p>
          <h2 className="font-display text-text-dark text-3xl md:text-5xl mb-6">{t('about.headline')}</h2>
          <p className="font-body text-text-muted font-light mb-4">{t('about.p1')}</p>
          <p className="font-body text-text-muted font-light mb-8">{t('about.p2')}</p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {values.map(v => (
              <div key={v.title} className="border-l-2 border-primary pl-4">
                <div className="font-display text-text-dark text-lg">{t(v.title)}</div>
                <div className="font-body text-xs text-text-muted font-light">{t(v.desc)}</div>
              </div>
            ))}
          </div>

          <div className="border-l-4 border-primary bg-foreground p-5 mb-8">
            <p className="font-body text-text-dark text-sm italic font-light">{t('about.quote')}</p>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500'}`} />
            <span className="font-body text-xs text-text-muted">
              {isOpen ? t('nav.aberto') : t('about.status.closed')}
            </span>
          </div>
          <div className="font-body text-xs text-text-muted space-y-1">
            <p>📍 3456 W El Segundo Blvd, Hawthorne, CA 90250</p>
            <p>🕐 {t('about.hours')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

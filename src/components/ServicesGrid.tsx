import { Wrench, Paintbrush, Settings } from 'lucide-react';

interface Props {
  t: (key: string) => string;
}

const services = [
  { icon: Wrench, title: 'services.1.title', desc: 'services.1.desc' },
  { icon: Paintbrush, title: 'services.2.title', desc: 'services.2.desc', badge: 'services.2.badge' },
  { icon: Settings, title: 'services.3.title', desc: 'services.3.desc' },
];

export default function ServicesGrid({ t }: Props) {
  return (
    <section id="servicos" className="section-light py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="overline mb-3">{t('services.overline')}</p>
          <h2 className="font-display text-text-dark text-4xl md:text-6xl mb-4">{t('services.headline')}</h2>
          <p className="font-body text-text-muted max-w-xl mx-auto">{t('services.sub')}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map(s => (
            <div key={s.title} className="bg-foreground border border-border p-8 group hover:border-l-4 hover:border-l-gold hover:shadow-lg transition-all relative">
              {s.badge && t(s.badge) && (
                <span className="inline-block font-body text-[10px] uppercase tracking-widest bg-gold text-primary-foreground px-3 py-1 mb-3 font-bold">
                  {t(s.badge)}
                </span>
              )}
              <s.icon size={28} className="text-gold mb-4" />
              <h3 className="font-display text-text-dark text-2xl mb-2">{t(s.title)}</h3>
              <p className="font-body text-text-muted text-sm mb-4 font-light">{t(s.desc)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

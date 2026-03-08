import { Wrench, Shield, Car, ClipboardList } from 'lucide-react';

interface Props {
  t: (key: string) => string;
}

const services = [
  { icon: Wrench, title: 'services.1.title', desc: 'services.1.desc' },
  { icon: Shield, title: 'services.2.title', desc: 'services.2.desc' },
  { icon: Car, title: 'services.3.title', desc: 'services.3.desc' },
  { icon: ClipboardList, title: 'services.4.title', desc: 'services.4.desc' },
];

export default function ServicesGrid({ t }: Props) {
  return (
    <section id="servicos" className="section-light py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="overline mb-3">{t('services.overline')}</p>
          <h2 className="font-display text-text-dark text-4xl md:text-6xl mb-4">{t('services.headline')}</h2>
          <p className="font-body text-text-muted max-w-md mx-auto">{t('services.sub')}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map(s => (
            <div key={s.title} className="bg-foreground border border-border p-8 group hover:border-l-4 hover:border-l-primary hover:shadow-lg transition-all">
              <s.icon size={28} className="text-primary mb-4" />
              <h3 className="font-display text-text-dark text-2xl mb-2">{t(s.title)}</h3>
              <p className="font-body text-text-muted text-sm mb-4 font-light">{t(s.desc)}</p>
              <a href="#" className="font-body text-sm font-medium text-primary hover:underline">{t('services.saiba')}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

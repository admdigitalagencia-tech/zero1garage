import { Car, FileText, Wrench, CheckCircle } from 'lucide-react';

interface Props {
  t: (key: string) => string;
}

const steps = [
  { icon: Car, num: '01', title: 'process.1.title', desc: 'process.1.desc' },
  { icon: FileText, num: '02', title: 'process.2.title', desc: 'process.2.desc' },
  { icon: Wrench, num: '03', title: 'process.3.title', desc: 'process.3.desc' },
  { icon: CheckCircle, num: '04', title: 'process.4.title', desc: 'process.4.desc' },
];

export default function ProcessSteps({ t }: Props) {
  return (
    <section id="processo" className="section-dark py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="overline mb-3">{t('process.overline')}</p>
          <h2 className="font-display text-foreground text-4xl md:text-6xl">{t('process.headline')}</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
          {/* Decorative line */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gold/30" />

          {steps.map((s, i) => (
            <div key={s.num} className="text-center relative">
              <div className="relative inline-flex items-center justify-center w-16 h-16 border-2 border-gold mb-6 bg-bg-dark">
                <s.icon size={28} className="text-gold" />
              </div>
              <div className="font-display text-gold text-lg mb-1">{s.num}</div>
              <h3 className="font-display text-foreground text-xl mb-3">{t(s.title)}</h3>
              <p className="font-body text-sm text-muted-foreground font-light">{t(s.desc)}</p>
              {i < steps.length - 1 && (
                <span className="hidden md:block absolute top-12 -right-4 text-gold text-xl">→</span>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a href="tel:+14245239244" className="inline-block bg-gold text-primary-foreground font-bold uppercase tracking-widest text-sm px-8 py-3 hover:brightness-110 transition">
            {t('process.cta')}
          </a>
        </div>
      </div>
    </section>
  );
}

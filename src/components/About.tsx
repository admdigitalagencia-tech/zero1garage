import { motion } from 'framer-motion';
import mechanicImg from '@/assets/mechanic-pro.jpg';
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
    <section id="sobre" className="relative section-dark py-24 md:py-32 overflow-hidden">
      <div className="watermark top-10 right-0 translate-x-1/4">PEOPLE</div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img src={mechanicImg} alt="Zero1 Garage professional" className="w-full h-auto object-cover" loading="lazy" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bg-dark/80 to-transparent p-6">
            <div className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${isOpen ? 'bg-gold' : 'bg-destructive'}`} />
              <span className="font-body text-xs text-foreground/80">
                {isOpen ? t('nav.aberto') : t('about.status.closed')}
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="overline mb-3">{t('about.overline')}</p>
          <h2 className="font-display text-foreground text-3xl md:text-5xl mb-6">{t('about.headline')}</h2>
          <p className="font-body text-muted-foreground font-light mb-4 whitespace-pre-line leading-relaxed">{t('about.p1')}</p>
          <p className="font-body text-muted-foreground font-light mb-10 whitespace-pre-line leading-relaxed">{t('about.p2')}</p>

          <div className="grid grid-cols-2 gap-4 mb-10">
            {values.map(v => (
              <div key={v.title} className="border-l-2 border-gold pl-4 py-1">
                <div className="font-display text-foreground text-lg">{t(v.title)}</div>
                <div className="font-body text-xs text-muted-foreground font-light">{t(v.desc)}</div>
              </div>
            ))}
          </div>

          <div className="border-l-4 border-gold bg-bg-mid p-6 mb-8">
            <p className="font-body text-foreground text-sm italic font-light leading-relaxed">{t('about.quote')}</p>
          </div>

          <div className="font-body text-xs text-muted-foreground space-y-1">
            <p>📍 3456 W El Segundo Blvd, Hawthorne, CA 90250</p>
            <p>🕐 {t('about.hours')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

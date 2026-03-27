import { motion } from 'framer-motion';
import { Hammer, Paintbrush, Wrench } from 'lucide-react';
import collisionImg from '@/assets/collision-damage.jpg';
import paintImg from '@/assets/paint-booth.jpg';
import bodyshopImg from '@/assets/bodyshop-section.jpg';

interface Props {
  t: (key: string) => string;
}

const services = [
  { icon: Hammer, title: 'services.1.title', desc: 'services.1.desc', img: collisionImg },
  { icon: Paintbrush, title: 'services.2.title', desc: 'services.2.desc', img: paintImg, badge: 'services.2.badge' },
  { icon: Wrench, title: 'services.3.title', desc: 'services.3.desc', img: bodyshopImg },
];

export default function ServicesGrid({ t }: Props) {
  return (
    <section id="servicos" className="relative section-dark py-24 md:py-32 overflow-hidden">
      <div className="watermark bottom-0 right-0 translate-x-1/4">GARAGE</div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="overline mb-4">{t('services.overline')}</p>
          <h2 className="font-display text-foreground text-4xl md:text-6xl lg:text-7xl mb-4">{t('services.headline')}</h2>
          <p className="font-body text-muted-foreground font-light max-w-xl mx-auto">{t('services.sub')}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="premium-card group relative overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-52 -mx-8 -mt-8 mb-6 overflow-hidden">
                <img src={s.img} alt={t(s.title)} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              </div>

              <div className="relative">
                <div className="inline-flex items-center justify-center w-10 h-10 border border-gold/30 bg-gold/10 mb-4">
                  <s.icon size={20} className="text-gold" />
                </div>

                {s.badge && t(s.badge) && (
                  <span className="ml-3 inline-flex items-center text-[10px] font-body uppercase tracking-widest text-gold bg-gold/10 border border-gold/20 px-3 py-1">
                    {t(s.badge)}
                  </span>
                )}

                <h3 className="font-display text-foreground text-xl md:text-2xl mb-3">{t(s.title)}</h3>
                <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">{t(s.desc)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import heroBg from '@/assets/hero-bg.jpg';
import { Star, MapPin, Phone, MessageCircle } from 'lucide-react';

interface Props {
  t: (key: string) => string;
}

export default function Hero({ t }: Props) {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center section-dark pt-[60px] overflow-hidden">
      {/* BG image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Auto body shop" className="w-full h-full object-cover" loading="eager" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-dark/95 via-bg-dark/80 to-bg-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent" />
      </div>

      {/* Watermark */}
      <div className="watermark top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">ZER01</div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex-1 flex flex-col justify-center py-12">
        <div className="max-w-[54%] max-lg:max-w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="overline mb-5"
          >
            {t('hero.overline')}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-foreground leading-[0.92] mb-6"
            style={{ fontSize: 'clamp(3rem, 8vw, 8rem)' }}
          >
            {t('hero.h1.1')}<br />
            {t('hero.h1.2')}<br />
            <span className="text-gold">{t('hero.h1.3')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-muted-foreground text-base md:text-lg max-w-[520px] mb-4 font-light leading-relaxed whitespace-pre-line"
          >
            {t('hero.sub')}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="font-body text-foreground text-sm font-medium tracking-wide mb-10"
          >
            {t('hero.support')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-4"
          >
            <a href="https://wa.me/14245239244" target="_blank" rel="noopener noreferrer" className="cta-whatsapp">
              <MessageCircle size={18} />
              {t('hero.cta1')}
            </a>
            <a href="#processo" className="cta-secondary">
              {t('hero.cta2')}
            </a>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8"
          >
            <span className="inline-flex items-center gap-2 border border-gold/30 bg-gold/5 text-gold font-body text-xs tracking-widest uppercase px-5 py-2">
              <Star size={12} fill="currentColor" /> ATENDIMENTO PREMIUM
            </span>
          </motion.div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="relative z-10 border-t border-border bg-bg-dark/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center gap-6 md:gap-10 text-sm font-body text-muted-foreground">
          <span className="flex items-center gap-2"><Star size={14} className="text-gold" fill="currentColor" /> {t('hero.google')}</span>
          <span className="flex items-center gap-2"><MapPin size={14} /> Hawthorne, CA</span>
          <a href="tel:+14245239244" className="flex items-center gap-2 hover:text-gold transition-colors"><Phone size={14} /> (424) 523-9244</a>
          <a href="https://wa.me/14245239244" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors"><MessageCircle size={14} /> {t('hero.whatsapp')}</a>
        </div>
      </div>
    </section>
  );
}

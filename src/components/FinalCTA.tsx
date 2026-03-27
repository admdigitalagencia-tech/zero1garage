import { motion } from 'framer-motion';
import { MessageCircle, Phone, CheckCircle } from 'lucide-react';

interface Props {
  t: (key: string) => string;
}

export default function FinalCTA({ t }: Props) {
  return (
    <section id="contato" className="relative overflow-hidden" style={{ background: 'var(--gradient-gold)' }}>
      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-primary-foreground/5 pointer-events-none select-none" style={{ fontSize: 'clamp(10rem, 25vw, 30rem)', whiteSpace: 'nowrap' }}>
        ZER01
      </div>

      <div className="relative z-10 py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="uppercase tracking-[0.15em] text-[0.72rem] font-medium text-primary-foreground/70 font-body mb-4">
              {t('cta.overline')}
            </p>
            <h2 className="font-display text-primary-foreground text-4xl md:text-6xl lg:text-7xl mb-8">{t('cta.headline')}</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 max-w-lg mx-auto"
          >
            {['cta.check1', 'cta.check2', 'cta.check3'].map(key => (
              <span key={key} className="flex items-center gap-1.5 text-primary-foreground/90 font-body text-sm">
                <CheckCircle size={14} /> {t(key)}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-primary-foreground/80 max-w-2xl mx-auto mb-10 font-light whitespace-pre-line text-lg leading-relaxed"
          >
            {t('cta.body')}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center mb-8"
          >
            <a href="https://wa.me/14245239244" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-bg-dark text-foreground font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-bg-mid transition-all duration-300 hover:-translate-y-1">
              <MessageCircle size={18} />
              {t('cta.whatsapp')}
            </a>
            <a href="tel:+14245239244" className="inline-flex items-center gap-2 bg-bg-dark text-foreground font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-bg-mid transition-all duration-300 hover:-translate-y-1">
              <Phone size={18} />
              {t('cta.ligar')}
            </a>
          </motion.div>

          <p className="font-body text-lg text-primary-foreground font-medium mb-2">(424) 523-9244</p>
          <p className="font-body text-sm text-primary-foreground/60 italic mt-4">{t('cta.tagline')}</p>
        </div>
      </div>
    </section>
  );
}

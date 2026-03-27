import { motion } from 'framer-motion';
import { Shield, ArrowRight, CheckCircle } from 'lucide-react';

interface Props {
  t: (key: string) => string;
}

const bullets = ['body.b1', 'body.b2', 'body.b3', 'body.b4', 'body.b5', 'body.b6'];

export default function BodyShopSection({ t }: Props) {
  return (
    <section className="relative section-light py-24 md:py-32 overflow-hidden">
      <div className="watermark top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-text-dark">ZER01</div>

      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-gold bg-gold/10 mb-6">
            <Shield size={32} className="text-gold" />
          </div>
          <p className="overline mb-4">{t('body.overline')}</p>
          <h2 className="font-display text-text-dark text-3xl md:text-5xl lg:text-6xl mb-8">{t('body.headline')}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-body text-text-muted font-light mb-10 text-lg leading-relaxed whitespace-pre-line max-w-2xl mx-auto"
        >
          {t('body.body')}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12 text-left"
        >
          {bullets.map((b) => (
            <div key={b} className="flex items-start gap-3 bg-bg-light-alt p-4 border border-border-dark/10">
              <CheckCircle size={18} className="text-gold mt-0.5 shrink-0" />
              <span className="font-body text-sm text-text-dark/80">{t(b)}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <a href="https://wa.me/14245239244" target="_blank" rel="noopener noreferrer" className="cta-primary">
            <ArrowRight size={18} />
            {t('body.cta')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

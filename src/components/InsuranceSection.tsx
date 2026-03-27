import { motion } from 'framer-motion';
import repairImg from '@/assets/repair-section.jpg';
import aboutImg from '@/assets/about-team.jpg';
import { FileText, ArrowRight, CheckCircle } from 'lucide-react';

interface Props {
  t: (key: string) => string;
}

const insBullets = ['ins.b1', 'ins.b2', 'ins.b3', 'ins.b4', 'ins.b5', 'ins.b6'];
const tlBullets = ['tl.b1', 'tl.b2', 'tl.b3', 'tl.b4'];

export default function InsuranceSection({ t }: Props) {
  return (
    <section id="seguros">
      {/* Insurance Management */}
      <div className="section-light py-24 md:py-32">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img src={repairImg} alt="Insurance claim process" className="w-full h-[500px] object-cover" loading="lazy" />
            <div className="absolute -bottom-4 -right-4 bg-gold px-5 py-3">
              <span className="font-display text-primary-foreground text-lg">INSURANCE EXPERTS</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="overline mb-3">{t('ins.overline')}</p>
            <h2 className="font-display text-text-dark text-3xl md:text-5xl mb-6">{t('ins.headline')}</h2>
            <p className="font-body text-text-muted font-light mb-8 leading-relaxed">{t('ins.body')}</p>
            <ul className="space-y-3 mb-8">
              {insBullets.map(b => (
                <li key={b} className="font-body text-sm text-text-dark/80 flex items-start gap-3">
                  <CheckCircle size={16} className="text-gold mt-0.5 shrink-0" />
                  {t(b)}
                </li>
              ))}
            </ul>
            <p className="font-body text-xs text-text-muted italic mb-8">{t('ins.note')}</p>
            <a href="https://wa.me/14245239244" target="_blank" rel="noopener noreferrer" className="cta-primary">
              <ArrowRight size={18} />
              {t('ins.cta')}
            </a>
            <div className="font-body text-xs text-text-muted space-y-1 mt-6">
              <p>📞 (424) 523-9244</p>
              <p>✉️ zeroonegaragellc@gmail.com</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Deductible Highlight */}
      <div className="relative section-dark py-24 md:py-32 overflow-hidden">
        <div className="watermark top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">98%</div>
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <p className="overline mb-4">{t('ded.overline')}</p>
          <h2 className="font-display text-foreground text-3xl md:text-5xl lg:text-6xl mb-6">{t('ded.headline')}</h2>
          <p className="font-body text-muted-foreground font-light mb-10 max-w-2xl mx-auto leading-relaxed">{t('ded.body')}</p>
          <a href="https://wa.me/14245239244" target="_blank" rel="noopener noreferrer" className="cta-whatsapp mb-6">
            {t('ded.cta')}
          </a>
          <div className="mt-6">
            <span className="inline-block border-2 border-gold text-gold font-body text-xs uppercase tracking-widest px-6 py-2.5 font-bold animate-shimmer">
              {t('ded.badge')}
            </span>
          </div>
        </div>

        {/* 3 Cards */}
        <div className="container mx-auto px-4 mt-20 grid md:grid-cols-3 gap-6 max-w-5xl">
          {['ded.card1', 'ded.card2', 'ded.card3'].map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="premium-card"
            >
              <h3 className="font-display text-foreground text-xl mb-3">{t(`${key}.title`)}</h3>
              <p className="font-body text-muted-foreground text-sm font-light leading-relaxed">{t(`${key}.desc`)}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Total Loss */}
      <div className="bg-bg-mid py-24 md:py-32">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="overline mb-3">{t('tl.overline')}</p>
            <h2 className="font-display text-foreground text-3xl md:text-5xl mb-6">{t('tl.headline')}</h2>
            <p className="font-body text-muted-foreground font-light mb-8 leading-relaxed">{t('tl.body')}</p>
            <ul className="space-y-3 mb-10">
              {tlBullets.map(b => (
                <li key={b} className="font-body text-sm text-foreground/80 flex items-start gap-3">
                  <CheckCircle size={16} className="text-gold mt-0.5 shrink-0" />
                  {t(b)}
                </li>
              ))}
            </ul>
            <a href="https://wa.me/14245239244" target="_blank" rel="noopener noreferrer" className="cta-primary">
              <ArrowRight size={18} />
              {t('tl.cta')}
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <img src={aboutImg} alt="Total loss vehicle in yard" className="w-full h-[450px] object-cover" loading="lazy" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

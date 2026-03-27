import { motion } from 'framer-motion';
import { Car, FileText, Wrench, CheckCircle, MessageCircle } from 'lucide-react';

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
    <section id="processo" className="relative section-dark py-24 md:py-32 overflow-hidden">
      <div className="watermark bottom-0 left-0 -translate-x-1/4">PROCESS</div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="overline mb-3">{t('process.overline')}</p>
          <h2 className="font-display text-foreground text-4xl md:text-6xl lg:text-7xl">{t('process.headline')}</h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px">
            <div className="w-full h-full bg-gradient-to-r from-gold/10 via-gold/40 to-gold/10" />
          </div>

          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="text-center relative"
            >
              <div className="relative inline-flex items-center justify-center w-[72px] h-[72px] border-2 border-gold mb-6 bg-bg-dark">
                <s.icon size={28} className="text-gold" />
                <span className="absolute -top-3 -right-3 bg-gold text-primary-foreground font-display text-sm w-7 h-7 flex items-center justify-center">
                  {s.num}
                </span>
              </div>
              <h3 className="font-display text-foreground text-lg md:text-xl mb-3">{t(s.title)}</h3>
              <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">{t(s.desc)}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a href="https://wa.me/14245239244" target="_blank" rel="noopener noreferrer" className="cta-whatsapp">
            <MessageCircle size={18} />
            {t('process.cta')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

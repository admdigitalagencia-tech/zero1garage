import { motion } from 'framer-motion';
import { ShieldCheck, FileCheck, Star, Award } from 'lucide-react';

interface Props {
  t: (key: string) => string;
}

const icons = [ShieldCheck, FileCheck, Star, Award];

const stats = [
  { num: 'cred.1.num', label: 'cred.1.label', note: 'cred.1.note' },
  { num: 'cred.2.num', label: 'cred.2.label' },
  { num: 'cred.3.num', label: 'cred.3.label' },
  { num: 'cred.4.num', label: 'cred.4.label' },
];

export default function CredibilityBar({ t }: Props) {
  return (
    <section className="relative section-dark py-16 md:py-20 border-t border-border overflow-hidden">
      <div className="watermark -top-8 left-10">ZERO1</div>
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => {
          const Icon = icons[i];
          return (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 border border-gold/30 bg-gold/5 mb-4">
                <Icon size={22} className="text-gold" />
              </div>
              <div className="font-display text-gold leading-none" style={{ fontSize: 'clamp(2.5rem, 4vw, 4.5rem)' }}>
                {t(s.num)}
              </div>
              <div className="font-body text-[10px] md:text-xs uppercase tracking-widest text-foreground/80 mt-3">{t(s.label)}</div>
              {'note' in s && s.note && (
                <div className="font-body text-[10px] text-muted-foreground mt-1 italic">{t(s.note)}</div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

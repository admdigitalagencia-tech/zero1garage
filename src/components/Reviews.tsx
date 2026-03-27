import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';

interface Props {
  t: (key: string) => string;
}

const reviews = [
  { initials: 'CM', name: 'Carlos M.', date: '2 semanas atrás', text: '"Bati o carro e não sabia o que fazer. A Zero1 cuidou de tudo com o seguro, não precisei ligar uma vez. Recebi o carro melhor do que antes do acidente."' },
  { initials: 'FR', name: 'Fernanda R.', date: '1 mês atrás', text: '"Pintura impecável, cor perfeita. E o processo com a seguradora foi resolvido em dias, não semanas. Recomendo demais."' },
  { initials: 'DS', name: 'Diego S.', date: '3 semanas atrás', text: '"Fui lá sem esperança porque o carro estava destruído. A equipe abriu o sinistro, negociou com o seguro e entregou o carro restaurado. Profissionalismo absurdo."' },
];

const stars = Array(5).fill(null);

export default function Reviews({ t }: Props) {
  return (
    <section className="relative section-light py-24 md:py-32 overflow-hidden">
      <div className="watermark top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-text-dark">★★★★★</div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Stars */}
          <div className="flex items-center justify-center gap-1.5 mb-6">
            {stars.map((_, i) => (
              <Star key={i} size={28} className="text-gold" fill="hsl(41 66% 47%)" />
            ))}
          </div>

          <h2 className="font-display text-text-dark text-4xl md:text-6xl lg:text-7xl mb-4">
            {t('reviews.headline').replace('5★ ', '')}
          </h2>
          <p className="font-body text-text-muted mb-6 max-w-2xl mx-auto">{t('reviews.sub')}</p>
          <span className="inline-flex items-center gap-2 font-body text-xs text-foreground bg-bg-dark border border-border px-5 py-2.5 mb-14">
            <Star size={12} className="text-gold" fill="currentColor" />
            {t('reviews.pill')}
          </span>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {reviews.map((r, i) => (
            <motion.div
              key={r.initials}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-foreground border border-border-dark/10 p-8 text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 bg-gold text-primary-foreground font-bold text-sm flex items-center justify-center rounded-full">
                  {r.initials}
                </div>
                <div>
                  <div className="font-body text-sm text-text-dark font-medium">{r.name}</div>
                  <div className="font-body text-xs text-text-muted">{r.date}</div>
                </div>
              </div>
              <div className="flex gap-0.5 mb-4">
                {stars.map((_, j) => (
                  <Star key={j} size={14} className="text-gold" fill="hsl(41 66% 47%)" />
                ))}
              </div>
              <p className="font-body text-sm text-text-dark/90 font-light leading-relaxed">{r.text}</p>
            </motion.div>
          ))}
        </div>

        <a href="https://g.page/zero1garage" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-body text-sm text-gold hover:underline tracking-wide">
          <ExternalLink size={14} />
          {t('reviews.link')}
        </a>
      </div>
    </section>
  );
}

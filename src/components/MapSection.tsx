import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

interface Props {
  t: (key: string) => string;
}

export default function MapSection({ t }: Props) {
  return (
    <section className="section-light py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <MapPin size={16} className="text-gold" />
          <p className="overline">{t('map.overline')}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <iframe
            title="Zero1 Garage Location"
            src="https://maps.google.com/maps?q=3456+W+El+Segundo+Blvd+Hawthorne+CA+90250&output=embed"
            className="w-full border-0"
            height={460}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}

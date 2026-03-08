interface Props {
  t: (key: string) => string;
}

export default function MapSection({ t }: Props) {
  return (
    <section className="section-light py-16">
      <div className="container mx-auto px-4">
        <p className="overline mb-6 text-center">{t('map.overline')}</p>
        <iframe
          title="Zero1 Garage Location"
          src="https://maps.google.com/maps?q=3456+W+El+Segundo+Blvd+Hawthorne+CA+90250&output=embed"
          className="w-full border-0"
          height={480}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

interface Props {
  t: (key: string) => string;
}

export default function Footer({ t }: Props) {
  return (
    <footer className="section-dark border-t border-border py-16">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex flex-col leading-none mb-3">
            <div className="font-display text-2xl">
              <span className="text-silver">ZER</span>
              <span className="text-gold">01</span>
            </div>
            <span className="font-display text-sm text-silver">GARAGE</span>
          </div>
          <p className="font-body text-xs text-muted-foreground mb-3 font-light">{t('footer.tagline')}</p>
          <p className="font-body text-xs text-muted-foreground font-light">3456 W El Segundo Blvd<br />Hawthorne, CA 90250</p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display text-foreground text-base mb-3">{t('footer.servicos')}</h4>
          <ul className="font-body text-xs text-muted-foreground space-y-2 font-light">
            <li><a href="#servicos" className="hover:text-gold transition-colors">{t('footer.funilaria')}</a></li>
            <li><a href="#seguros" className="hover:text-gold transition-colors">{t('footer.seguros')}</a></li>
            <li><a href="#seguros" className="hover:text-gold transition-colors">{t('footer.deductible')}</a></li>
            <li><a href="#seguros" className="hover:text-gold transition-colors">{t('footer.perdatotal')}</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-display text-foreground text-base mb-3">{t('footer.empresa')}</h4>
          <ul className="font-body text-xs text-muted-foreground space-y-2 font-light">
            <li><a href="#sobre" className="hover:text-gold transition-colors">{t('footer.historia')}</a></li>
            <li><a href="https://g.page/zero1garage" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">{t('footer.avaliacoes')}</a></li>
            <li><a href="https://www.instagram.com/zero1garage_usa/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">{t('footer.instagram')}</a></li>
            <li><a href="mailto:zeroonegaragellc@gmail.com" className="hover:text-gold transition-colors">{t('footer.contato2')}</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-foreground text-base mb-3">{t('footer.contato')}</h4>
          <ul className="font-body text-xs text-muted-foreground space-y-2 font-light">
            <li>📞 <a href="tel:+14245239244" className="hover:text-gold transition-colors">(424) 523-9244</a></li>
            <li>✉️ <a href="mailto:zeroonegaragellc@gmail.com" className="hover:text-gold transition-colors">zeroonegaragellc@gmail.com</a></li>
            <li>📷 <a href="https://www.instagram.com/zero1garage_usa/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">@zero1garage_usa</a></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <p className="font-body text-[10px] text-muted-foreground text-center">{t('footer.horarios')}</p>
      </div>

      <div className="container mx-auto px-4 mt-6 pt-6 border-t border-border">
        <p className="font-body text-xs text-muted-foreground text-center font-light mb-2">{t('footer.copy')}</p>
        <p className="font-body text-[10px] text-muted-foreground/60 text-center font-light italic max-w-2xl mx-auto">{t('footer.legal')}</p>
      </div>
    </footer>
  );
}

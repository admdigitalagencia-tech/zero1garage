interface Props {
  t: (key: string) => string;
}

export default function Footer({ t }: Props) {
  return (
    <footer className="section-dark border-t border-border py-16">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-baseline gap-1 mb-2">
            <span className="font-display text-2xl text-foreground">ZERO1</span>
            <span className="font-display text-lg text-primary">GARAGE</span>
          </div>
          <p className="font-body text-xs text-muted-foreground mb-3 font-light">{t('footer.tagline')}</p>
          <p className="font-body text-xs text-muted-foreground font-light">3456 W El Segundo Blvd<br />Hawthorne, CA 90250</p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display text-foreground text-base mb-3">{t('footer.servicos')}</h4>
          <ul className="font-body text-xs text-muted-foreground space-y-2 font-light">
            <li><a href="#reparo" className="hover:text-primary transition-colors">{t('footer.reparo')}</a></li>
            <li><a href="#funilaria" className="hover:text-primary transition-colors">{t('footer.funilaria')}</a></li>
            <li><a href="#servicos" className="hover:text-primary transition-colors">{t('footer.manutencao')}</a></li>
            <li><a href="#servicos" className="hover:text-primary transition-colors">{t('footer.diagnostico')}</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-display text-foreground text-base mb-3">{t('footer.empresa')}</h4>
          <ul className="font-body text-xs text-muted-foreground space-y-2 font-light">
            <li><a href="#sobre" className="hover:text-primary transition-colors">{t('footer.historia')}</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">{t('footer.avaliacoes')}</a></li>
            <li><a href="https://www.instagram.com/zero1garage_usa/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{t('footer.instagram')}</a></li>
            <li><a href="mailto:zeroonegaragellc@gmail.com" className="hover:text-primary transition-colors">{t('footer.contato2')}</a></li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-display text-foreground text-base mb-3">{t('footer.horarios')}</h4>
          <ul className="font-body text-xs text-muted-foreground space-y-2 font-light">
            <li>{t('footer.seg')}</li>
            <li>{t('footer.sab')}</li>
            <li>{t('footer.dom')}</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-foreground text-base mb-3">{t('footer.contato')}</h4>
          <ul className="font-body text-xs text-muted-foreground space-y-2 font-light">
            <li>📞 <a href="tel:+14245239244" className="hover:text-primary transition-colors">(424) 523-9244</a></li>
            <li>✉️ <a href="mailto:zeroonegaragellc@gmail.com" className="hover:text-primary transition-colors">zeroonegaragellc@gmail.com</a></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 pt-6 border-t border-border">
        <p className="font-body text-xs text-muted-foreground text-center font-light">{t('footer.copy')}</p>
      </div>
    </footer>
  );
}

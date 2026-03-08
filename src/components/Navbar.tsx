import { useState } from 'react';
import { useShopStatus } from '@/hooks/useShopStatus';
import type { Lang } from '@/hooks/useTranslations';
import { Menu, X } from 'lucide-react';

interface Props {
  t: (key: string) => string;
  lang: Lang;
  setLang: (l: Lang) => void;
}

const navLinks = [
  { key: 'nav.inicio', href: '#inicio' },
  { key: 'nav.servicos', href: '#servicos' },
  { key: 'nav.reparo', href: '#reparo' },
  { key: 'nav.funilaria', href: '#funilaria' },
  { key: 'nav.sobre', href: '#sobre' },
];

export default function Navbar({ t, lang, setLang }: Props) {
  const isOpen = useShopStatus();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-dark/95 backdrop-blur-sm border-b border-border" style={{ height: 58 }}>
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        {/* Logo */}
        <a href="#inicio" className="flex items-baseline gap-1">
          <span className="font-display text-[28px] leading-none text-foreground">ZERO1</span>
          <span className="font-display text-[18px] leading-none text-primary">GARAGE</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(l => (
            <a key={l.key} href={l.href} className="font-body text-xs tracking-widest text-foreground/70 hover:text-primary transition-colors">
              {t(l.key)}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Status */}
          <div className="flex items-center gap-1.5 text-xs font-body">
            <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500'}`} />
            <span className="text-muted-foreground">{isOpen ? t('nav.aberto') : t('nav.fechado')}</span>
          </div>

          {/* Language */}
          <div className="flex gap-1 text-[10px] font-body text-muted-foreground">
            {(['PT', 'EN', 'ES'] as Lang[]).map(l => (
              <button key={l} onClick={() => setLang(l)} className={`px-1.5 py-0.5 transition-colors ${lang === l ? 'text-primary' : 'hover:text-foreground'}`}>
                {l}
              </button>
            ))}
          </div>

          {/* CTA */}
          <a href="tel:+14245239244" className="bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs px-5 py-2 hover:bg-foreground hover:text-background transition-colors">
            {t('nav.agendar')}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 top-[58px] bg-bg-dark/98 z-40 flex flex-col items-center justify-center gap-8">
          {navLinks.map(l => (
            <a key={l.key} href={l.href} onClick={() => setMenuOpen(false)} className="font-display text-3xl text-foreground hover:text-primary transition-colors">
              {t(l.key)}
            </a>
          ))}
          <div className="flex gap-3 text-sm font-body text-muted-foreground">
            {(['PT', 'EN', 'ES'] as Lang[]).map(l => (
              <button key={l} onClick={() => setLang(l)} className={lang === l ? 'text-primary' : ''}>
                {l}
              </button>
            ))}
          </div>
          <a href="tel:+14245239244" className="bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm px-7 py-3">
            {t('nav.agendar')}
          </a>
        </div>
      )}
    </nav>
  );
}

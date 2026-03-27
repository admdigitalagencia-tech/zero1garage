import { motion } from 'framer-motion';
import { useState } from 'react';
import { useShopStatus } from '@/hooks/useShopStatus';
import type { Lang } from '@/hooks/useTranslations';
import { Menu, X, MessageCircle } from 'lucide-react';

interface Props {
  t: (key: string) => string;
  lang: Lang;
  setLang: (l: Lang) => void;
}

const navLinks = [
  { key: 'nav.inicio', href: '#inicio' },
  { key: 'nav.servicos', href: '#servicos' },
  { key: 'nav.seguros', href: '#seguros' },
  { key: 'nav.sobre', href: '#sobre' },
  { key: 'nav.contato', href: '#contato' },
];

export default function Navbar({ t, lang, setLang }: Props) {
  const isOpen = useShopStatus();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-dark/95 backdrop-blur-md border-b border-border" style={{ height: 60 }}>
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        {/* Logo */}
        <a href="#inicio" className="flex flex-col leading-none">
          <div className="font-display text-[26px] leading-none">
            <span className="text-silver">ZER</span>
            <span className="text-gold">01</span>
          </div>
          <span className="font-display text-[14px] leading-none text-silver tracking-wider">GARAGE</span>
          <span className="font-body text-[8px] text-silver/60 tracking-[0.15em] uppercase">AUTO BODY SHOP</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(l => (
            <a key={l.key} href={l.href} className="font-body text-xs tracking-widest text-foreground/70 hover:text-gold transition-colors duration-200">
              {t(l.key)}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-xs font-body">
            <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-gold' : 'bg-destructive'}`} />
            <span className="text-muted-foreground">{isOpen ? t('nav.aberto') : t('nav.fechado')}</span>
          </div>

          <div className="flex gap-1 text-[10px] font-body text-muted-foreground">
            {(['PT', 'EN', 'ES'] as Lang[]).map(l => (
              <button key={l} onClick={() => setLang(l)} className={`px-1.5 py-0.5 transition-colors ${lang === l ? 'text-gold' : 'hover:text-foreground'}`}>
                {l}
              </button>
            ))}
          </div>

          <a href="https://wa.me/14245239244" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gold text-primary-foreground font-bold uppercase tracking-widest text-xs px-5 py-2 hover:brightness-110 transition-all duration-300">
            <MessageCircle size={14} />
            {t('nav.orcamento')}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden fixed inset-0 top-[60px] bg-bg-dark/98 z-40 flex flex-col items-center justify-center gap-8"
        >
          {navLinks.map(l => (
            <a key={l.key} href={l.href} onClick={() => setMenuOpen(false)} className="font-display text-3xl text-foreground hover:text-gold transition-colors">
              {t(l.key)}
            </a>
          ))}
          <div className="flex gap-3 text-sm font-body text-muted-foreground">
            {(['PT', 'EN', 'ES'] as Lang[]).map(l => (
              <button key={l} onClick={() => setLang(l)} className={lang === l ? 'text-gold' : ''}>
                {l}
              </button>
            ))}
          </div>
          <a href="https://wa.me/14245239244" target="_blank" rel="noopener noreferrer" className="cta-whatsapp">
            <MessageCircle size={18} />
            {t('nav.orcamento')}
          </a>
        </motion.div>
      )}
    </nav>
  );
}

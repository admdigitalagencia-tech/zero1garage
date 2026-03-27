import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/14245239244"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-whatsapp text-foreground shadow-2xl hover:scale-105 transition-all duration-300 group"
      aria-label="WhatsApp"
      title="Fale conosco no WhatsApp"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 bg-whatsapp animate-pulse-ring" />

      {/* Expanded button on desktop, icon-only on mobile */}
      <span className="relative z-10 flex items-center gap-2 px-5 py-3.5 md:px-6">
        <MessageCircle size={22} fill="white" className="text-foreground" />
        <span className="hidden md:inline font-body text-sm font-bold uppercase tracking-wider">WhatsApp</span>
      </span>
    </a>
  );
}

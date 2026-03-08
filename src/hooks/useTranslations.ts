import { useState, useCallback } from 'react';

export type Lang = 'PT' | 'EN' | 'ES';

const translations: Record<string, Record<Lang, string>> = {
  // Nav
  'nav.inicio': { PT: 'INÍCIO', EN: 'HOME', ES: 'INICIO' },
  'nav.servicos': { PT: 'SERVIÇOS', EN: 'SERVICES', ES: 'SERVICIOS' },
  'nav.reparo': { PT: 'REPARO', EN: 'REPAIR', ES: 'REPARACIÓN' },
  'nav.funilaria': { PT: 'FUNILARIA', EN: 'BODY SHOP', ES: 'CARROCERÍA' },
  'nav.sobre': { PT: 'SOBRE', EN: 'ABOUT', ES: 'NOSOTROS' },
  'nav.agendar': { PT: 'AGENDAR →', EN: 'BOOK NOW →', ES: 'AGENDAR →' },
  'nav.aberto': { PT: 'Aberto', EN: 'Open', ES: 'Abierto' },
  'nav.fechado': { PT: 'Fechado', EN: 'Closed', ES: 'Cerrado' },

  // Hero
  'hero.overline': { PT: '— HAWTHORNE, CA', EN: '— HAWTHORNE, CA', ES: '— HAWTHORNE, CA' },
  'hero.h1.1': { PT: 'SEU CARRO.', EN: 'YOUR CAR.', ES: 'TU AUTO.' },
  'hero.h1.2': { PT: 'NOSSA', EN: 'OUR', ES: 'NUESTRA' },
  'hero.h1.3': { PT: 'RESPONSABILIDADE.', EN: 'RESPONSIBILITY.', ES: 'RESPONSABILIDAD.' },
  'hero.sub': {
    PT: 'Reparo automotivo e funilaria em Hawthorne, CA. Diagnóstico honesto, serviço preciso, zero enrolação.',
    EN: 'Auto repair and body shop in Hawthorne, CA. Honest diagnostics, precise service, zero BS.',
    ES: 'Reparación automotriz y carrocería en Hawthorne, CA. Diagnóstico honesto, servicio preciso, cero excusas.',
  },
  'hero.cta1': { PT: 'NOSSOS SERVIÇOS →', EN: 'OUR SERVICES →', ES: 'NUESTROS SERVICIOS →' },
  'hero.cta2': { PT: 'NOSSA HISTÓRIA →', EN: 'OUR STORY →', ES: 'NUESTRA HISTORIA →' },
  'hero.google': { PT: '5.0 Google', EN: '5.0 Google', ES: '5.0 Google' },
  'hero.whatsapp': { PT: 'WhatsApp', EN: 'WhatsApp', ES: 'WhatsApp' },

  // Stats
  'stats.1.num': { PT: '1000+', EN: '1000+', ES: '1000+' },
  'stats.1.label': { PT: 'CARROS ATENDIDOS', EN: 'CARS SERVICED', ES: 'AUTOS ATENDIDOS' },
  'stats.2.num': { PT: '5.0', EN: '5.0', ES: '5.0' },
  'stats.2.label': { PT: 'AVALIAÇÃO GOOGLE', EN: 'GOOGLE RATING', ES: 'CALIFICACIÓN GOOGLE' },
  'stats.3.num': { PT: '100%', EN: '100%', ES: '100%' },
  'stats.3.label': { PT: 'DIAGNÓSTICO TRANSPARENTE', EN: 'TRANSPARENT DIAGNOSTICS', ES: 'DIAGNÓSTICO TRANSPARENTE' },
  'stats.4.num': { PT: '0', EN: '0', ES: '0' },
  'stats.4.label': { PT: 'SURPRESAS NA CONTA', EN: 'SURPRISE CHARGES', ES: 'SORPRESAS EN LA CUENTA' },

  // Services
  'services.overline': { PT: 'O QUE FAZEMOS', EN: 'WHAT WE DO', ES: 'QUÉ HACEMOS' },
  'services.headline': { PT: 'UM LUGAR. TUDO QUE SEU CARRO PRECISA.', EN: 'ONE PLACE. EVERYTHING YOUR CAR NEEDS.', ES: 'UN LUGAR. TODO LO QUE TU AUTO NECESITA.' },
  'services.sub': { PT: 'Não terceirizamos. Não enrolamos. Resolvemos.', EN: "We don't outsource. We don't stall. We solve.", ES: 'No tercerizamos. No dilatamos. Resolvemos.' },
  'services.saiba': { PT: 'Saiba Mais →', EN: 'Learn More →', ES: 'Saber Más →' },
  'services.1.title': { PT: 'REPARO AUTOMOTIVO', EN: 'AUTO REPAIR', ES: 'REPARACIÓN AUTOMOTRIZ' },
  'services.1.desc': { PT: 'Diagnóstico preciso, explicação clara, conserto garantido. Sem cobranças surpresa.', EN: 'Precise diagnostics, clear explanation, guaranteed repair. No surprise charges.', ES: 'Diagnóstico preciso, explicación clara, reparación garantizada. Sin cargos sorpresa.' },
  'services.2.title': { PT: 'FUNILARIA E PINTURA', EN: 'BODY & PAINT', ES: 'CARROCERÍA Y PINTURA' },
  'services.2.desc': { PT: 'Acidentes acontecem. Cuidamos do carro e do seguro do início ao fim.', EN: 'Accidents happen. We handle the car and insurance from start to finish.', ES: 'Los accidentes pasan. Cuidamos del auto y del seguro de principio a fin.' },
  'services.3.title': { PT: 'MANUTENÇÃO PREVENTIVA', EN: 'PREVENTIVE MAINTENANCE', ES: 'MANTENIMIENTO PREVENTIVO' },
  'services.3.desc': { PT: 'Troca de óleo, freios, filtros e muito mais. Antes que vire um problema caro.', EN: 'Oil changes, brakes, filters and more. Before it becomes an expensive problem.', ES: 'Cambio de aceite, frenos, filtros y más. Antes de que se vuelva un problema costoso.' },
  'services.4.title': { PT: 'DIAGNÓSTICO COMPLETO', EN: 'FULL DIAGNOSTICS', ES: 'DIAGNÓSTICO COMPLETO' },
  'services.4.desc': { PT: 'Relatório escrito do que encontramos. Você decide o que fazer. Sem pressão.', EN: 'Written report of our findings. You decide what to do. No pressure.', ES: 'Informe escrito de lo que encontramos. Tú decides qué hacer. Sin presión.' },

  // Repair
  'repair.overline': { PT: 'REPARO', EN: 'REPAIR', ES: 'REPARACIÓN' },
  'repair.headline': { PT: 'AQUELA LUZ DE AVISO NÃO VAI SUMIR SOZINHA.', EN: "THAT WARNING LIGHT WON'T GO AWAY ON ITS OWN.", ES: 'ESA LUZ DE AVISO NO VA A DESAPARECER SOLA.' },
  'repair.body': {
    PT: 'Quanto mais você espera, mais caro fica. Na Zero1, diagnósticamos com clareza, explicamos em português e consertamos de primeira.',
    EN: 'The longer you wait, the more expensive it gets. At Zero1, we diagnose clearly, explain in plain language, and fix it right the first time.',
    ES: 'Cuanto más esperas, más caro sale. En Zero1, diagnosticamos con claridad, explicamos en tu idioma y reparamos a la primera.',
  },
  'repair.b1': { PT: 'Troca de óleo e manutenção programada', EN: 'Oil changes and scheduled maintenance', ES: 'Cambio de aceite y mantenimiento programado' },
  'repair.b2': { PT: 'Freios, suspensão e direção', EN: 'Brakes, suspension and steering', ES: 'Frenos, suspensión y dirección' },
  'repair.b3': { PT: 'Motor e câmbio', EN: 'Engine and transmission', ES: 'Motor y transmisión' },
  'repair.b4': { PT: 'Diferencial e caixa de transferência', EN: 'Differential and transfer case', ES: 'Diferencial y caja de transferencia' },
  'repair.b5': { PT: 'Relatório diagnóstico completo por escrito', EN: 'Complete written diagnostic report', ES: 'Informe diagnóstico completo por escrito' },
  'repair.b6': { PT: 'Garantia em todos os reparos', EN: 'Warranty on all repairs', ES: 'Garantía en todas las reparaciones' },
  'repair.cta': { PT: 'AGENDAR REPARO →', EN: 'SCHEDULE REPAIR →', ES: 'AGENDAR REPARACIÓN →' },

  // Body shop
  'body.overline': { PT: 'FUNILARIA E PINTURA', EN: 'BODY & PAINT', ES: 'CARROCERÍA Y PINTURA' },
  'body.headline': { PT: 'CONSERTAMOS O CARRO. LIDAMOS COM O SEGURO.', EN: 'WE FIX THE CAR. WE HANDLE THE INSURANCE.', ES: 'REPARAMOS EL AUTO. NOS ENCARGAMOS DEL SEGURO.' },
  'body.body': {
    PT: 'Depois de um acidente, você não deveria ter que lidar com papelada, seguradoras e orçamentos confusos. Nós cuidamos de tudo isso por você.',
    EN: "After an accident, you shouldn't have to deal with paperwork, insurers and confusing quotes. We handle all of that for you.",
    ES: 'Después de un accidente, no deberías tener que lidiar con papeleo, aseguradoras y presupuestos confusos. Nos encargamos de todo eso por ti.',
  },
  'body.b1': { PT: 'Reparo de colisão estrutural e cosmético', EN: 'Structural and cosmetic collision repair', ES: 'Reparación de colisión estructural y cosmética' },
  'body.b2': { PT: 'Pintura com padrão original (OEM)', EN: 'OEM-standard painting', ES: 'Pintura con estándar original (OEM)' },
  'body.b3': { PT: 'Remoção de amassados e arranhões', EN: 'Dent and scratch removal', ES: 'Eliminación de abolladuras y rayones' },
  'body.b4': { PT: 'Coordenação completa do sinistro de seguro', EN: 'Full insurance claim coordination', ES: 'Coordinación completa del siniestro de seguro' },
  'body.b5': { PT: 'Do primeiro orçamento à entrega final', EN: 'From first quote to final delivery', ES: 'Del primer presupuesto a la entrega final' },
  'body.cta': { PT: 'ORÇAMENTO GRATUITO →', EN: 'FREE ESTIMATE →', ES: 'PRESUPUESTO GRATUITO →' },

  // Reviews
  'reviews.headline': { PT: '5★ NO GOOGLE.', EN: '5★ ON GOOGLE.', ES: '5★ EN GOOGLE.' },
  'reviews.sub': { PT: 'Clientes reais. Resultados reais. Verificado pelo Google.', EN: 'Real customers. Real results. Verified by Google.', ES: 'Clientes reales. Resultados reales. Verificado por Google.' },
  'reviews.pill': { PT: '● Avaliação 5.0 · Google Reviews', EN: '● Rating 5.0 · Google Reviews', ES: '● Calificación 5.0 · Google Reviews' },
  'reviews.link': { PT: '→ VER TODAS AS AVALIAÇÕES NO GOOGLE', EN: '→ SEE ALL REVIEWS ON GOOGLE', ES: '→ VER TODAS LAS RESEÑAS EN GOOGLE' },

  // About
  'about.overline': { PT: 'NOSSA HISTÓRIA', EN: 'OUR STORY', ES: 'NUESTRA HISTORIA' },
  'about.headline': { PT: 'CONSTRUÍDA SEM ATALHOS. MOVIDA POR RESULTADO.', EN: 'BUILT WITHOUT SHORTCUTS. DRIVEN BY RESULTS.', ES: 'CONSTRUIDA SIN ATAJOS. MOVIDA POR RESULTADOS.' },
  'about.p1': {
    PT: 'A Zero1 Garage nasceu de uma ideia simples: que todo cliente merece honestidade total sobre o que está acontecendo com seu carro. Sem jargão. Sem cobrança surpresa. Sem desculpa.',
    EN: 'Zero1 Garage was born from a simple idea: every customer deserves total honesty about what\'s happening with their car. No jargon. No surprise charges. No excuses.',
    ES: 'Zero1 Garage nació de una idea simple: que cada cliente merece honestidad total sobre lo que pasa con su auto. Sin jerga. Sin cargos sorpresa. Sin excusas.',
  },
  'about.p2': {
    PT: 'Estamos em Hawthorne, CA, atendendo as comunidades local, latina e brasileira com o mesmo padrão de excelência — porque confiança não tem idioma.',
    EN: 'We\'re in Hawthorne, CA, serving the local, Latino and Brazilian communities with the same standard of excellence — because trust has no language barrier.',
    ES: 'Estamos en Hawthorne, CA, atendiendo a las comunidades local, latina y brasileña con el mismo estándar de excelencia — porque la confianza no tiene idioma.',
  },
  'about.v1.title': { PT: 'HONESTIDADE', EN: 'HONESTY', ES: 'HONESTIDAD' },
  'about.v1.desc': { PT: 'Falamos o que vemos. Sempre.', EN: 'We say what we see. Always.', ES: 'Decimos lo que vemos. Siempre.' },
  'about.v2.title': { PT: 'PRECISÃO', EN: 'PRECISION', ES: 'PRECISIÓN' },
  'about.v2.desc': { PT: 'Fazemos certo da primeira vez.', EN: 'We get it right the first time.', ES: 'Lo hacemos bien a la primera.' },
  'about.v3.title': { PT: 'TRANSPARÊNCIA', EN: 'TRANSPARENCY', ES: 'TRANSPARENCIA' },
  'about.v3.desc': { PT: 'Você sabe o que acontece em cada etapa.', EN: 'You know what happens at every step.', ES: 'Sabes lo que pasa en cada etapa.' },
  'about.v4.title': { PT: 'RESPONSABILIDADE', EN: 'ACCOUNTABILITY', ES: 'RESPONSABILIDAD' },
  'about.v4.desc': { PT: 'Seu problema é o nosso problema. Resolvemos.', EN: 'Your problem is our problem. We solve it.', ES: 'Tu problema es nuestro problema. Lo resolvemos.' },
  'about.quote': {
    PT: '"Na Zero1, um negócio bem feito é, por si só, uma contribuição para a comunidade que servimos."',
    EN: '"At Zero1, a job well done is, by itself, a contribution to the community we serve."',
    ES: '"En Zero1, un trabajo bien hecho es, por sí solo, una contribución a la comunidad que servimos."',
  },
  'about.status.closed': { PT: 'Fechado · Abre Seg às 9AM', EN: 'Closed · Opens Mon at 9AM', ES: 'Cerrado · Abre Lun a las 9AM' },
  'about.hours': { PT: 'Seg–Sex: 9h–18h / Sáb: 9h–14h / Dom: Fechado', EN: 'Mon–Fri: 9AM–6PM / Sat: 9AM–2PM / Sun: Closed', ES: 'Lun–Vie: 9h–18h / Sáb: 9h–14h / Dom: Cerrado' },

  // Map
  'map.overline': { PT: 'ENCONTRE-NOS', EN: 'FIND US', ES: 'ENCUÉNTRANOS' },

  // Footer
  'footer.tagline': { PT: 'Seu carro. Nossa responsabilidade.', EN: 'Your car. Our responsibility.', ES: 'Tu auto. Nuestra responsabilidad.' },
  'footer.servicos': { PT: 'SERVIÇOS', EN: 'SERVICES', ES: 'SERVICIOS' },
  'footer.empresa': { PT: 'EMPRESA', EN: 'COMPANY', ES: 'EMPRESA' },
  'footer.horarios': { PT: 'HORÁRIOS', EN: 'HOURS', ES: 'HORARIOS' },
  'footer.contato': { PT: 'CONTATO', EN: 'CONTACT', ES: 'CONTACTO' },
  'footer.reparo': { PT: 'Reparo Automotivo', EN: 'Auto Repair', ES: 'Reparación Automotriz' },
  'footer.funilaria': { PT: 'Funilaria e Pintura', EN: 'Body & Paint', ES: 'Carrocería y Pintura' },
  'footer.manutencao': { PT: 'Manutenção Preventiva', EN: 'Preventive Maintenance', ES: 'Mantenimiento Preventivo' },
  'footer.diagnostico': { PT: 'Diagnóstico', EN: 'Diagnostics', ES: 'Diagnóstico' },
  'footer.historia': { PT: 'Nossa História', EN: 'Our Story', ES: 'Nuestra Historia' },
  'footer.avaliacoes': { PT: 'Avaliações', EN: 'Reviews', ES: 'Reseñas' },
  'footer.instagram': { PT: 'Instagram', EN: 'Instagram', ES: 'Instagram' },
  'footer.contato2': { PT: 'Contato', EN: 'Contact', ES: 'Contacto' },
  'footer.seg': { PT: 'Seg–Sex: 9h–18h', EN: 'Mon–Fri: 9AM–6PM', ES: 'Lun–Vie: 9h–18h' },
  'footer.sab': { PT: 'Sáb: 9h–14h', EN: 'Sat: 9AM–2PM', ES: 'Sáb: 9h–14h' },
  'footer.dom': { PT: 'Dom: Fechado', EN: 'Sun: Closed', ES: 'Dom: Cerrado' },
  'footer.copy': { PT: '© 2025 Zero1 Garage LLC · Hawthorne, CA · Todos os direitos reservados', EN: '© 2025 Zero1 Garage LLC · Hawthorne, CA · All rights reserved', ES: '© 2025 Zero1 Garage LLC · Hawthorne, CA · Todos los derechos reservados' },
};

export function useTranslations() {
  const [lang, setLang] = useState<Lang>('PT');
  const t = useCallback((key: string) => translations[key]?.[lang] ?? key, [lang]);
  return { lang, setLang, t };
}

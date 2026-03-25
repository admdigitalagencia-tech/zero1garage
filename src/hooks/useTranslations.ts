import { useState, useCallback } from 'react';

export type Lang = 'PT' | 'EN' | 'ES';

const translations: Record<string, Record<Lang, string>> = {
  // Nav
  'nav.inicio': { PT: 'INÍCIO', EN: 'HOME', ES: 'INICIO' },
  'nav.servicos': { PT: 'SERVIÇOS', EN: 'SERVICES', ES: 'SERVICIOS' },
  'nav.seguros': { PT: 'SEGUROS', EN: 'INSURANCE', ES: 'SEGUROS' },
  'nav.sobre': { PT: 'SOBRE', EN: 'ABOUT', ES: 'NOSOTROS' },
  'nav.contato': { PT: 'CONTATO', EN: 'CONTACT', ES: 'CONTACTO' },
  'nav.orcamento': { PT: 'FALAR NO WHATSAPP →', EN: 'CHAT ON WHATSAPP →', ES: 'HABLAR POR WHATSAPP →' },
  'nav.aberto': { PT: 'Aberto', EN: 'Open', ES: 'Abierto' },
  'nav.fechado': { PT: 'Fechado', EN: 'Closed', ES: 'Cerrado' },

  // Hero
  'hero.overline': { PT: '— HAWTHORNE, CA · AUTO BODY SHOP', EN: '— HAWTHORNE, CA · AUTO BODY SHOP', ES: '— HAWTHORNE, CA · AUTO BODY SHOP' },
  'hero.h1.1': { PT: 'VOCÊ BATEU', EN: 'HAD A CAR', ES: '¿CHOCASTE' },
  'hero.h1.2': { PT: 'O CARRO?', EN: 'ACCIDENT?', ES: 'EL AUTO?' },
  'hero.h1.3': { PT: 'NÃO PAGUE A FRANQUIA.', EN: 'DON\'T PAY THE DEDUCTIBLE.', ES: 'NO PAGUES EL DEDUCIBLE.' },
  'hero.sub': {
    PT: 'Em 98% dos casos, você não paga nada do seu bolso.\nVocê entrega as chaves e nós cuidamos de tudo — do seguro ao reparo.',
    EN: 'In 98% of cases, you pay nothing out of pocket.\nYou hand over the keys and we handle everything — from insurance to repair.',
    ES: 'En el 98% de los casos, no pagas nada de tu bolsillo.\nEntregas las llaves y nosotros nos encargamos de todo — del seguro a la reparación.',
  },
  'hero.support': {
    PT: 'Sem dor de cabeça. Sem burocracia. Sem surpresa.',
    EN: 'No headaches. No paperwork. No surprises.',
    ES: 'Sin dolores de cabeza. Sin burocracia. Sin sorpresas.',
  },
  'hero.cta1': { PT: 'FALAR NO WHATSAPP AGORA →', EN: 'CHAT ON WHATSAPP NOW →', ES: 'HABLAR POR WHATSAPP AHORA →' },
  'hero.cta2': { PT: 'COMO FUNCIONA →', EN: 'HOW IT WORKS →', ES: 'CÓMO FUNCIONA →' },
  'hero.google': { PT: '5.0 Google', EN: '5.0 Google', ES: '5.0 Google' },
  'hero.whatsapp': { PT: 'WhatsApp', EN: 'WhatsApp', ES: 'WhatsApp' },

  // Credibility Bar (Benefícios)
  'cred.1.num': { PT: '98%', EN: '98%', ES: '98%' },
  'cred.1.label': { PT: 'DOS CLIENTES NÃO PAGAM FRANQUIA', EN: 'OF CLIENTS DON\'T PAY DEDUCTIBLE', ES: 'DE LOS CLIENTES NO PAGAN DEDUCIBLE' },
  'cred.1.note': { PT: '*mesmo quando o cliente é o culpado na colisão', EN: '*even when the client is at fault', ES: '*incluso cuando el cliente tiene la culpa' },
  'cred.2.num': { PT: '100%', EN: '100%', ES: '100%' },
  'cred.2.label': { PT: 'DA BUROCRACIA RESOLVIDA POR NÓS', EN: 'OF PAPERWORK HANDLED BY US', ES: 'DEL PAPELEO RESUELTO POR NOSOTROS' },
  'cred.3.num': { PT: '5★', EN: '5★', ES: '5★' },
  'cred.3.label': { PT: 'AVALIAÇÃO NO GOOGLE', EN: 'GOOGLE RATING', ES: 'CALIFICACIÓN EN GOOGLE' },
  'cred.4.num': { PT: 'PREMIUM', EN: 'PREMIUM', ES: 'PREMIUM' },
  'cred.4.label': { PT: 'ATENDIMENTO DO INÍCIO AO FIM', EN: 'SERVICE FROM START TO FINISH', ES: 'SERVICIO DE INICIO A FIN' },

  // Services (Serviços - simplificado)
  'services.overline': { PT: 'NOSSOS SERVIÇOS', EN: 'OUR SERVICES', ES: 'NUESTROS SERVICIOS' },
  'services.headline': { PT: 'REPARAMOS SEU CARRO COMO SE NADA TIVESSE ACONTECIDO', EN: 'WE REPAIR YOUR CAR AS IF NOTHING HAPPENED', ES: 'REPARAMOS TU AUTO COMO SI NADA HUBIERA PASADO' },
  'services.sub': { PT: 'Tudo com aprovação da seguradora e acompanhamento completo.', EN: 'Everything with insurer approval and full follow-up.', ES: 'Todo con aprobación de la aseguradora y acompañamiento completo.' },
  'services.saiba': { PT: 'Saiba Mais →', EN: 'Learn More →', ES: 'Saber Más →' },
  'services.1.title': { PT: 'REPARO DE COLISÃO', EN: 'COLLISION REPAIR', ES: 'REPARACIÓN DE COLISIÓN' },
  'services.1.desc': { PT: 'Leve ou grave — reparamos qualquer tipo de dano causado por colisão, devolvendo seu carro ao estado original.', EN: 'Minor or major — we repair any type of collision damage, returning your car to its original state.', ES: 'Leve o grave — reparamos cualquier tipo de daño por colisión, devolviendo tu auto a su estado original.' },
  'services.2.title': { PT: 'PINTURA PROFISSIONAL', EN: 'PROFESSIONAL PAINT', ES: 'PINTURA PROFESIONAL' },
  'services.2.desc': { PT: 'Acabamento de fábrica com tintas OEM e calibração digital de cor. Ninguém vai notar o reparo.', EN: 'Factory finish with OEM paints and digital color calibration. Nobody will notice the repair.', ES: 'Acabado de fábrica con pinturas OEM y calibración digital de color. Nadie notará la reparación.' },
  'services.2.badge': { PT: 'ACABAMENTO OEM', EN: 'OEM FINISH', ES: 'ACABADO OEM' },
  'services.3.title': { PT: 'REPAROS ESTRUTURAIS E ESTÉTICOS', EN: 'STRUCTURAL & COSMETIC REPAIRS', ES: 'REPARACIONES ESTRUCTURALES Y ESTÉTICAS' },
  'services.3.desc': { PT: 'De amassados a danos estruturais — restauramos com peças e processos aprovados pela seguradora.', EN: 'From dents to structural damage — we restore with insurer-approved parts and processes.', ES: 'De abolladuras a daños estructurales — restauramos con piezas y procesos aprobados por la aseguradora.' },
  'services.3.badge': { PT: '', EN: '', ES: '' },

  // Body Shop (Quebra de objeção - Seguro)
  'body.overline': { PT: 'NÃO TENHA MEDO DO SEGURO', EN: 'DON\'T FEAR INSURANCE', ES: 'NO LE TEMAS AL SEGURO' },
  'body.headline': { PT: 'NÃO DEIXE DE CONSERTAR SEU CARRO POR MEDO DO SEGURO', EN: 'DON\'T LEAVE YOUR CAR DAMAGED OUT OF FEAR OF INSURANCE', ES: 'NO DEJES DE REPARAR TU AUTO POR MIEDO AL SEGURO' },
  'body.body': { PT: 'Muita gente evita acionar o seguro achando que vai pagar mais caro depois.\n\nMas a verdade é simples:\nA seguradora já considera o sinistro, independente de quem foi o culpado.\n\nOu seja: não vale a pena deixar o carro danificado.', EN: 'Many people avoid filing a claim thinking their rates will go up.\n\nBut the truth is simple:\nThe insurer already considers the claim, regardless of who was at fault.\n\nIn other words: it\'s not worth leaving your car damaged.', ES: 'Mucha gente evita usar el seguro pensando que va a pagar más después.\n\nPero la verdad es simple:\nLa aseguradora ya considera el siniestro, sin importar quién fue el culpable.\n\nEs decir: no vale la pena dejar el auto dañado.' },
  'body.b1': { PT: 'Nós te orientamos em todo o processo', EN: 'We guide you through the entire process', ES: 'Te orientamos en todo el proceso' },
  'body.b2': { PT: 'Sem complicação, sem burocracia', EN: 'No complications, no paperwork', ES: 'Sin complicaciones, sin burocracia' },
  'body.b3': { PT: 'Se o seu plano inclui carro de aluguel, te ajudamos com isso', EN: 'If your plan includes a rental car, we help with that too', ES: 'Si tu plan incluye auto de alquiler, te ayudamos con eso' },
  'body.b4': { PT: 'Cuidamos de toda a comunicação com a seguradora', EN: 'We handle all communication with the insurer', ES: 'Nos encargamos de toda la comunicación con la aseguradora' },
  'body.b5': { PT: 'Acompanhamento em tempo real', EN: 'Real-time follow-up', ES: 'Acompañamiento en tiempo real' },
  'body.b6': { PT: 'Entrega do veículo restaurado com garantia', EN: 'Delivery of restored vehicle with warranty', ES: 'Entrega del vehículo restaurado con garantía' },
  'body.cta': { PT: 'FALAR NO WHATSAPP →', EN: 'CHAT ON WHATSAPP →', ES: 'HABLAR POR WHATSAPP →' },

  // Insurance (removido - merged into body)
  'ins.overline': { PT: 'GESTÃO DE SEGUROS', EN: 'INSURANCE MANAGEMENT', ES: 'GESTIÓN DE SEGUROS' },
  'ins.headline': { PT: 'VOCÊ PAGOU PELO SEGURO. NÃO TENHA MEDO DE USAR.', EN: 'YOU PAID FOR INSURANCE. DON\'T BE AFRAID TO USE IT.', ES: 'PAGASTE POR EL SEGURO. NO TENGAS MIEDO DE USARLO.' },
  'ins.body': { PT: 'Muita gente evita acionar o seguro com medo da burocracia ou de pagar a franquia. Na Zero1, resolvemos os dois problemas. Cuidamos de toda a comunicação com a seguradora — e na maioria dos casos, conseguimos que você não pague nada.', EN: 'Many people avoid filing a claim out of fear of paperwork or paying the deductible. At Zero1, we solve both problems. We handle all communication with the insurer — and in most cases, we ensure you pay nothing.', ES: 'Mucha gente evita usar el seguro por miedo al papeleo o al deducible. En Zero1, resolvemos ambos problemas. Nos encargamos de toda la comunicación con la aseguradora — y en la mayoría de los casos, logramos que no pagues nada.' },
  'ins.b1': { PT: 'Abertura e acompanhamento do sinistro por você', EN: 'Claim opening and follow-up on your behalf', ES: 'Apertura y seguimiento del siniestro por ti' },
  'ins.b2': { PT: 'Comunicação direta com a seguradora — sem você no meio', EN: 'Direct communication with insurer — without you in the middle', ES: 'Comunicación directa con la aseguradora — sin ti en el medio' },
  'ins.b3': { PT: 'Documentação técnica, fotos e laudo de evidência', EN: 'Technical documentation, photos and evidence report', ES: 'Documentación técnica, fotos e informe de evidencia' },
  'ins.b4': { PT: 'Negociação do valor de reparo e aprovação', EN: 'Repair value negotiation and approval', ES: 'Negociación del valor de reparación y aprobación' },
  'ins.b5': { PT: 'Atualizações em tempo real para você', EN: 'Real-time updates for you', ES: 'Actualizaciones en tiempo real para ti' },
  'ins.b6': { PT: 'Entrega do veículo aprovado e restaurado', EN: 'Delivery of approved and restored vehicle', ES: 'Entrega del vehículo aprobado y restaurado' },
  'ins.note': { PT: 'Trabalhamos com todas as seguradoras de Los Angeles e Califórnia.', EN: 'We work with all insurers in Los Angeles and California.', ES: 'Trabajamos con todas las aseguradoras de Los Ángeles y California.' },
  'ins.cta': { PT: 'FALAR NO WHATSAPP →', EN: 'CHAT ON WHATSAPP →', ES: 'HABLAR POR WHATSAPP →' },

  // Deductible
  'ded.overline': { PT: 'O DIFERENCIAL QUE NINGUÉM TE CONTA', EN: 'THE DIFFERENCE NOBODY TELLS YOU', ES: 'EL DIFERENCIAL QUE NADIE TE CUENTA' },
  'ded.headline': { PT: 'VOCÊ É O CULPADO NA BATIDA? AINDA ASSIM PODE NÃO PAGAR A FRANQUIA.', EN: 'YOU\'RE AT FAULT? YOU STILL MAY NOT PAY THE DEDUCTIBLE.', ES: '¿TIENES LA CULPA? AÚN ASÍ PUEDES NO PAGAR EL DEDUCIBLE.' },
  'ded.body': { PT: 'O deductible (franquia) de $500 ou $1.000 assusta. Mas na Zero1, em 98% dos casos conseguimos resolver para que você não pague — mesmo quando a culpa é sua. Não deixe esse medo te impedir de consertar o seu veículo.', EN: 'The $500 or $1,000 deductible is scary. But at Zero1, in 98% of cases we resolve it so you don\'t pay — even when it\'s your fault. Don\'t let that fear stop you from fixing your vehicle.', ES: 'El deducible de $500 o $1,000 asusta. Pero en Zero1, en el 98% de los casos lo resolvemos para que no pagues — incluso cuando la culpa es tuya. No dejes que ese miedo te impida reparar tu vehículo.' },
  'ded.cta': { PT: 'FALAR NO WHATSAPP →', EN: 'CHAT ON WHATSAPP →', ES: 'HABLAR POR WHATSAPP →' },
  'ded.badge': { PT: '98% DE SUCESSO NA ELIMINAÇÃO DO DEDUCTIBLE', EN: '98% SUCCESS IN DEDUCTIBLE ELIMINATION', ES: '98% DE ÉXITO EN ELIMINACIÓN DEL DEDUCIBLE' },
  'ded.card1.title': { PT: 'CUIDAMOS DE TUDO', EN: 'WE HANDLE EVERYTHING', ES: 'NOS ENCARGAMOS DE TODO' },
  'ded.card1.desc': { PT: 'Abertura, documentação, negociação e entrega. Zero ligação da sua parte.', EN: 'Filing, documentation, negotiation and delivery. Zero calls from your end.', ES: 'Apertura, documentación, negociación y entrega. Cero llamadas de tu parte.' },
  'ded.card2.title': { PT: 'ESPECIALISTAS EM SINISTRO', EN: 'CLAIM SPECIALISTS', ES: 'ESPECIALISTAS EN SINIESTROS' },
  'ded.card2.desc': { PT: 'Sabemos exatamente como as seguradoras operam. Sabemos como aprovar.', EN: 'We know exactly how insurers operate. We know how to get approvals.', ES: 'Sabemos exactamente cómo operan las aseguradoras. Sabemos cómo aprobar.' },
  'ded.card3.title': { PT: 'SEM MEDO DE ACIONAR', EN: 'DON\'T BE AFRAID TO FILE', ES: 'SIN MIEDO A RECLAMAR' },
  'ded.card3.desc': { PT: 'Na maioria dos casos você não paga franquia. Fale com a gente antes de decidir.', EN: 'In most cases you don\'t pay the deductible. Talk to us before you decide.', ES: 'En la mayoría de los casos no pagas deducible. Habla con nosotros antes de decidir.' },

  // Total Loss
  'tl.overline': { PT: 'PERDA TOTAL', EN: 'TOTAL LOSS', ES: 'PÉRDIDA TOTAL' },
  'tl.headline': { PT: 'SEU CARRO FOI PERDA TOTAL? A GENTE RESOLVE ISSO TAMBÉM.', EN: 'YOUR CAR IS A TOTAL LOSS? WE HANDLE THAT TOO.', ES: '¿TU AUTO ES PÉRDIDA TOTAL? TAMBIÉN RESOLVEMOS ESO.' },
  'tl.body': { PT: 'Não tem problema. Temos um pátio enorme onde guardamos seu veículo. Nossa equipe liga para a seguradora, explica tudo o que aconteceu e acompanha o processo para que você receba o valor do seu carro o mais rápido possível — e possa comprar outro.', EN: 'No problem. We have a large yard where we store your vehicle. Our team calls the insurer, explains everything and follows through so you receive your car\'s value as quickly as possible — and can buy another one.', ES: 'No hay problema. Tenemos un patio enorme donde guardamos tu vehículo. Nuestro equipo llama a la aseguradora, explica todo lo que pasó y acompaña el proceso para que recibas el valor de tu auto lo más rápido posible — y puedas comprar otro.' },
  'tl.b1': { PT: 'Pátio próprio para guarda do veículo', EN: 'Own yard for vehicle storage', ES: 'Patio propio para guardar el vehículo' },
  'tl.b2': { PT: 'Comunicação completa com a seguradora', EN: 'Full communication with insurer', ES: 'Comunicación completa con la aseguradora' },
  'tl.b3': { PT: 'Documentação e laudo de perda total', EN: 'Total loss documentation and report', ES: 'Documentación e informe de pérdida total' },
  'tl.b4': { PT: 'Acompanhamento até o recebimento do valor', EN: 'Follow-up until you receive payment', ES: 'Acompañamiento hasta recibir el pago' },
  'tl.cta': { PT: 'FALAR SOBRE MEU CASO →', EN: 'DISCUSS MY CASE →', ES: 'HABLAR SOBRE MI CASO →' },

  // Process
  'process.overline': { PT: 'PROCESSO', EN: 'PROCESS', ES: 'PROCESO' },
  'process.headline': { PT: 'COMO FUNCIONA', EN: 'HOW IT WORKS', ES: 'CÓMO FUNCIONA' },
  'process.1.title': { PT: 'ABRA O SINISTRO E NOS ENTREGUE O CARRO', EN: 'FILE THE CLAIM AND BRING US THE CAR', ES: 'ABRE EL SINIESTRO Y TRÁENOS EL AUTO' },
  'process.1.desc': { PT: 'Basta trazer o veículo e o número do sinistro.', EN: 'Just bring the vehicle and the claim number.', ES: 'Solo trae el vehículo y el número del siniestro.' },
  'process.2.title': { PT: 'NÓS CUIDAMOS DA BUROCRACIA', EN: 'WE HANDLE THE PAPERWORK', ES: 'NOSOTROS NOS ENCARGAMOS DEL PAPELEO' },
  'process.2.desc': { PT: 'Falamos com a seguradora, enviamos documentos e resolvemos tudo.', EN: 'We talk to the insurer, send documents and resolve everything.', ES: 'Hablamos con la aseguradora, enviamos documentos y resolvemos todo.' },
  'process.3.title': { PT: 'EXECUTAMOS O REPARO', EN: 'WE EXECUTE THE REPAIR', ES: 'EJECUTAMOS LA REPARACIÓN' },
  'process.3.desc': { PT: 'Trabalhamos com peças e processos adequados, com aprovação da seguradora.', EN: 'We work with proper parts and processes, with insurer approval.', ES: 'Trabajamos con piezas y procesos adecuados, con aprobación de la aseguradora.' },
  'process.4.title': { PT: 'VOCÊ RETIRA O CARRO PRONTO', EN: 'YOU PICK UP YOUR CAR', ES: 'RECOGES TU AUTO LISTO' },
  'process.4.desc': { PT: 'Sem surpresas, sem complicação.', EN: 'No surprises, no complications.', ES: 'Sin sorpresas, sin complicaciones.' },
  'process.cta': { PT: 'FALAR NO WHATSAPP →', EN: 'CHAT ON WHATSAPP →', ES: 'HABLAR POR WHATSAPP →' },

  // Reviews (Prova Social)
  'reviews.headline': { PT: '5★ QUEM CONFIA NA ZERO1 GARAGE', EN: '5★ WHO TRUSTS ZERO1 GARAGE', ES: '5★ QUIÉNES CONFÍAN EN ZERO1 GARAGE' },
  'reviews.sub': { PT: 'Avaliação 5 estrelas no Google · Centenas de clientes atendidos · Especialistas em resolver sinistros com seguradora', EN: '5-star Google rating · Hundreds of clients served · Specialists in resolving insurance claims', ES: 'Calificación 5 estrellas en Google · Cientos de clientes atendidos · Especialistas en resolver siniestros con aseguradoras' },
  'reviews.pill': { PT: '● Avaliação 5.0 · Google Reviews', EN: '● Rating 5.0 · Google Reviews', ES: '● Calificación 5.0 · Google Reviews' },
  'reviews.link': { PT: '→ VER TODAS AS AVALIAÇÕES NO GOOGLE', EN: '→ SEE ALL REVIEWS ON GOOGLE', ES: '→ VER TODAS LAS RESEÑAS EN GOOGLE' },

  // About (Humanização)
  'about.overline': { PT: 'NOSSA HISTÓRIA', EN: 'OUR STORY', ES: 'NUESTRA HISTORIA' },
  'about.headline': { PT: 'NÃO É SOBRE CARROS. É SOBRE PESSOAS.', EN: 'IT\'S NOT ABOUT CARS. IT\'S ABOUT PEOPLE.', ES: 'NO ES SOBRE AUTOS. ES SOBRE PERSONAS.' },
  'about.p1': { PT: 'A Zero1 Garage foi criada para ajudar quem passa por um momento chato: bater o carro.\n\nNosso objetivo é simples:', EN: 'Zero1 Garage was created to help those going through a tough moment: a car accident.\n\nOur goal is simple:', ES: 'Zero1 Garage fue creada para ayudar a quienes pasan por un momento difícil: chocar el auto.\n\nNuestro objetivo es simple:' },
  'about.p2': { PT: 'Você sempre sabe o que está acontecendo.\nSem surpresas. Sem complicação.', EN: 'You always know what\'s happening.\nNo surprises. No complications.', ES: 'Siempre sabes lo que está pasando.\nSin sorpresas. Sin complicaciones.' },
  'about.v1.title': { PT: 'TIRAR O PROBLEMA DA SUA MÃO', EN: 'TAKE THE PROBLEM OFF YOUR HANDS', ES: 'QUITAR EL PROBLEMA DE TUS MANOS' },
  'about.v1.desc': { PT: 'Você entrega as chaves e nós cuidamos de tudo.', EN: 'You hand over the keys and we handle everything.', ES: 'Entregas las llaves y nos encargamos de todo.' },
  'about.v2.title': { PT: 'RESOLVER COM TRANSPARÊNCIA', EN: 'SOLVE WITH TRANSPARENCY', ES: 'RESOLVER CON TRANSPARENCIA' },
  'about.v2.desc': { PT: 'Cada etapa comunicada. Sem surpresas.', EN: 'Every step communicated. No surprises.', ES: 'Cada etapa comunicada. Sin sorpresas.' },
  'about.v3.title': { PT: 'DEVOLVER SEU CARRO COMO NOVO', EN: 'RETURN YOUR CAR LIKE NEW', ES: 'DEVOLVER TU AUTO COMO NUEVO' },
  'about.v3.desc': { PT: 'Reparo com padrão original, garantido.', EN: 'Repair to original standard, guaranteed.', ES: 'Reparación con estándar original, garantizada.' },
  'about.v4.title': { PT: 'TRANSPARÊNCIA', EN: 'TRANSPARENCY', ES: 'TRANSPARENCIA' },
  'about.v4.desc': { PT: 'Você sabe o que está acontecendo em cada etapa.', EN: 'You know what\'s happening at every step.', ES: 'Sabes lo que pasa en cada etapa.' },
  'about.quote': { PT: '"Não tenha medo de acionar o seu seguro. A Zero1 resolve para você."', EN: '"Don\'t be afraid to use your insurance. Zero1 handles it for you."', ES: '"No tengas miedo de usar tu seguro. Zero1 lo resuelve por ti."' },
  'about.status.closed': { PT: 'Fechado · Abre Seg às 9AM', EN: 'Closed · Opens Mon at 9AM', ES: 'Cerrado · Abre Lun a las 9AM' },
  'about.hours': { PT: 'Seg–Sex: 9h–18h · Sáb: 9h–14h · Dom: Fechado', EN: 'Mon–Fri: 9AM–6PM · Sat: 9AM–2PM · Sun: Closed', ES: 'Lun–Vie: 9h–18h · Sáb: 9h–14h · Dom: Cerrado' },

  // Map
  'map.overline': { PT: 'ENCONTRE-NOS', EN: 'FIND US', ES: 'ENCUÉNTRANOS' },

  // Final CTA (Bloco Final + CTA)
  'cta.overline': { PT: 'RESOLVA ISSO AGORA', EN: 'RESOLVE THIS NOW', ES: 'RESUÉLVELO AHORA' },
  'cta.headline': { PT: 'RESOLVA ISSO AGORA.', EN: 'RESOLVE THIS NOW.', ES: 'RESUÉLVELO AHORA.' },
  'cta.body': { PT: 'Você não precisa ficar sem carro.\nVocê não precisa se preocupar com o seguro.\nVocê não precisa pagar franquia na maioria dos casos.\n\nAqui você resolve tudo em um só lugar.', EN: 'You don\'t have to go without a car.\nYou don\'t have to worry about insurance.\nYou don\'t have to pay the deductible in most cases.\n\nHere you resolve everything in one place.', ES: 'No tienes que quedarte sin auto.\nNo tienes que preocuparte por el seguro.\nNo tienes que pagar deducible en la mayoría de los casos.\n\nAquí resuelves todo en un solo lugar.' },
  'cta.whatsapp': { PT: 'FALAR NO WHATSAPP AGORA →', EN: 'CHAT ON WHATSAPP NOW →', ES: 'HABLAR POR WHATSAPP AHORA →' },
  'cta.ligar': { PT: 'QUERO RESOLVER MEU PROBLEMA →', EN: 'I WANT TO SOLVE MY PROBLEM →', ES: 'QUIERO RESOLVER MI PROBLEMA →' },
  'cta.tagline': { PT: '"Não é sobre carros. É sobre pessoas."', EN: '"It\'s not about cars. It\'s about people."', ES: '"No es sobre autos. Es sobre personas."' },

  // Footer
  'footer.tagline': { PT: 'Não é sobre carros. É sobre pessoas.', EN: 'It\'s not about cars. It\'s about people.', ES: 'No es sobre autos. Es sobre personas.' },
  'footer.servicos': { PT: 'SERVIÇOS', EN: 'SERVICES', ES: 'SERVICIOS' },
  'footer.empresa': { PT: 'EMPRESA', EN: 'COMPANY', ES: 'EMPRESA' },
  'footer.contato': { PT: 'CONTATO', EN: 'CONTACT', ES: 'CONTACTO' },
  'footer.funilaria': { PT: 'Reparo de Colisão', EN: 'Collision Repair', ES: 'Reparación de Colisión' },
  'footer.seguros': { PT: 'Gestão de Seguros', EN: 'Insurance Management', ES: 'Gestión de Seguros' },
  'footer.deductible': { PT: 'Franquia / Deductible', EN: 'Deductible', ES: 'Deducible' },
  'footer.perdatotal': { PT: 'Perda Total', EN: 'Total Loss', ES: 'Pérdida Total' },
  'footer.historia': { PT: 'Nossa História', EN: 'Our Story', ES: 'Nuestra Historia' },
  'footer.avaliacoes': { PT: 'Avaliações', EN: 'Reviews', ES: 'Reseñas' },
  'footer.instagram': { PT: 'Instagram', EN: 'Instagram', ES: 'Instagram' },
  'footer.contato2': { PT: 'Contato', EN: 'Contact', ES: 'Contacto' },
  'footer.horarios': { PT: 'Seg–Sex: 9h–18h · Sáb: 9h–14h · Dom: Fechado', EN: 'Mon–Fri: 9AM–6PM · Sat: 9AM–2PM · Sun: Closed', ES: 'Lun–Vie: 9h–18h · Sáb: 9h–14h · Dom: Cerrado' },
  'footer.copy': { PT: '© 2025 Zero1 Garage LLC · Hawthorne, CA', EN: '© 2025 Zero1 Garage LLC · Hawthorne, CA', ES: '© 2025 Zero1 Garage LLC · Hawthorne, CA' },
  'footer.legal': { PT: 'Em aproximadamente 98% dos casos, o cliente não paga franquia. Exceções podem ocorrer em situações específicas, como danos de baixo valor.', EN: 'In approximately 98% of cases, the client does not pay the deductible. Exceptions may occur in specific situations, such as low-value damage.', ES: 'En aproximadamente el 98% de los casos, el cliente no paga el deducible. Pueden ocurrir excepciones en situaciones específicas, como daños de bajo valor.' },
};

export function useTranslations() {
  const [lang, setLang] = useState<Lang>('PT');
  const t = useCallback((key: string) => translations[key]?.[lang] ?? key, [lang]);
  return { lang, setLang, t };
}

import { useState, useCallback } from 'react';

export type Lang = 'PT' | 'EN' | 'ES';

const translations: Record<string, Record<Lang, string>> = {
  // Nav
  'nav.inicio': { PT: 'INÍCIO', EN: 'HOME', ES: 'INICIO' },
  'nav.servicos': { PT: 'SERVIÇOS', EN: 'SERVICES', ES: 'SERVICIOS' },
  'nav.seguros': { PT: 'SEGUROS', EN: 'INSURANCE', ES: 'SEGUROS' },
  'nav.sobre': { PT: 'SOBRE', EN: 'ABOUT', ES: 'NOSOTROS' },
  'nav.contato': { PT: 'CONTATO', EN: 'CONTACT', ES: 'CONTACTO' },
  'nav.orcamento': { PT: 'ORÇAMENTO GRATUITO →', EN: 'FREE ESTIMATE →', ES: 'PRESUPUESTO GRATIS →' },
  'nav.aberto': { PT: 'Aberto', EN: 'Open', ES: 'Abierto' },
  'nav.fechado': { PT: 'Fechado', EN: 'Closed', ES: 'Cerrado' },

  // Hero
  'hero.overline': { PT: '— LOS ANGELES, CA · AUTO BODY SHOP', EN: '— LOS ANGELES, CA · AUTO BODY SHOP', ES: '— LOS ANGELES, CA · AUTO BODY SHOP' },
  'hero.h1.1': { PT: 'BATEU O CARRO?', EN: 'CAR ACCIDENT?', ES: '¿CHOCASTE EL AUTO?' },
  'hero.h1.2': { PT: 'A GENTE', EN: 'WE HANDLE', ES: 'NOSOTROS' },
  'hero.h1.3': { PT: 'RESOLVE TUDO.', EN: 'EVERYTHING.', ES: 'RESOLVEMOS TODO.' },
  'hero.sub': {
    PT: 'Consertamos seu carro ou moto e cuidamos de toda a burocracia com a seguradora. Na maioria dos casos, você nem paga a franquia — mesmo sendo o culpado.',
    EN: 'We fix your car or motorcycle and handle all the paperwork with the insurance company. In most cases, you don\'t even pay the deductible — even if you\'re at fault.',
    ES: 'Reparamos tu auto o moto y nos encargamos de todo el papeleo con la aseguradora. En la mayoría de los casos, ni siquiera pagas el deducible — incluso si tú tienes la culpa.',
  },
  'hero.cta1': { PT: 'FALAR COM A GENTE →', EN: 'TALK TO US →', ES: 'HABLAR CON NOSOTROS →' },
  'hero.cta2': { PT: 'COMO FUNCIONA →', EN: 'HOW IT WORKS →', ES: 'CÓMO FUNCIONA →' },
  'hero.google': { PT: '5.0 Google', EN: '5.0 Google', ES: '5.0 Google' },
  'hero.whatsapp': { PT: 'WhatsApp', EN: 'WhatsApp', ES: 'WhatsApp' },

  // Credibility Bar
  'cred.1.num': { PT: '98%', EN: '98%', ES: '98%' },
  'cred.1.label': { PT: 'DOS CLIENTES NÃO PAGAM A FRANQUIA', EN: 'OF CLIENTS DON\'T PAY THE DEDUCTIBLE', ES: 'DE LOS CLIENTES NO PAGAN EL DEDUCIBLE' },
  'cred.1.note': { PT: '*mesmo quando o cliente é o culpado na colisão', EN: '*even when the client is at fault', ES: '*incluso cuando el cliente tiene la culpa' },
  'cred.2.num': { PT: '5.0', EN: '5.0', ES: '5.0' },
  'cred.2.label': { PT: 'AVALIAÇÃO GOOGLE', EN: 'GOOGLE RATING', ES: 'CALIFICACIÓN GOOGLE' },
  'cred.3.num': { PT: '100%', EN: '100%', ES: '100%' },
  'cred.3.label': { PT: 'DA BUROCRACIA RESOLVIDA POR NÓS', EN: 'OF PAPERWORK HANDLED BY US', ES: 'DEL PAPELEO RESUELTO POR NOSOTROS' },
  'cred.4.num': { PT: '$0', EN: '$0', ES: '$0' },
  'cred.4.label': { PT: 'QUE VOCÊ GASTA COM LIGAÇÕES', EN: 'YOU SPEND ON PHONE CALLS', ES: 'QUE GASTAS EN LLAMADAS' },

  // Services
  'services.overline': { PT: 'NOSSO SERVIÇO', EN: 'OUR SERVICE', ES: 'NUESTRO SERVICIO' },
  'services.headline': { PT: 'UM ACIDENTE. ZERO DORES DE CABEÇA.', EN: 'ONE ACCIDENT. ZERO HEADACHES.', ES: 'UN ACCIDENTE. CERO DOLORES DE CABEZA.' },
  'services.sub': { PT: 'Consertamos seu carro ou moto e resolvemos tudo com o seguro. Você entrega as chaves — nós cuidamos do resto.', EN: 'We fix your car or motorcycle and handle everything with insurance. You hand over the keys — we take care of the rest.', ES: 'Reparamos tu auto o moto y resolvemos todo con el seguro. Entregas las llaves — nosotros nos encargamos del resto.' },
  'services.saiba': { PT: 'Saiba Mais →', EN: 'Learn More →', ES: 'Saber Más →' },
  'services.1.title': { PT: 'FUNILARIA & PINTURA OEM', EN: 'OEM BODY & PAINT', ES: 'CARROCERÍA & PINTURA OEM' },
  'services.1.desc': { PT: 'Reparo de colisão em carros e motos com tintas e peças originais do fabricante. Entregamos o veículo como saiu de fábrica.', EN: 'Collision repair for cars and motorcycles with OEM paints and parts. We deliver the vehicle like it left the factory.', ES: 'Reparación de colisión en autos y motos con pinturas y piezas originales del fabricante. Entregamos el vehículo como salió de fábrica.' },
  'services.2.badge': { PT: 'DIFERENCIAL ZERO1', EN: 'ZERO1 DIFFERENCE', ES: 'DIFERENCIAL ZERO1' },
  'services.2.title': { PT: 'CUIDAMOS DE TUDO COM O SEGURO', EN: 'WE HANDLE ALL INSURANCE', ES: 'NOS ENCARGAMOS DE TODO CON EL SEGURO' },
  'services.2.desc': { PT: 'Abrimos o sinistro, falamos diretamente com a seguradora e acompanhamos cada etapa. Você não precisa fazer uma ligação sequer.', EN: 'We open the claim, talk directly with the insurer and follow up at every step. You don\'t need to make a single phone call.', ES: 'Abrimos el siniestro, hablamos directamente con la aseguradora y acompañamos cada etapa. No necesitas hacer una sola llamada.' },
  'services.3.badge': { PT: '98% DE SUCESSO', EN: '98% SUCCESS', ES: '98% DE ÉXITO' },
  'services.3.title': { PT: 'NÃO PAGUE SUA FRANQUIA', EN: 'DON\'T PAY YOUR DEDUCTIBLE', ES: 'NO PAGUES TU DEDUCIBLE' },
  'services.3.desc': { PT: 'Mesmo sendo o culpado na batida, em 98% dos casos conseguimos que você não pague o deductible de $500 ou $1.000. Não tenha medo de acionar o seguro.', EN: 'Even if you\'re at fault, in 98% of cases we get you out of paying the $500 or $1,000 deductible. Don\'t be afraid to use your insurance.', ES: 'Incluso si tienes la culpa, en el 98% de los casos logramos que no pagues el deducible de $500 o $1,000. No tengas miedo de usar tu seguro.' },
  'services.4.title': { PT: 'CARRO COM PERDA TOTAL?', EN: 'TOTAL LOSS VEHICLE?', ES: '¿AUTO CON PÉRDIDA TOTAL?' },
  'services.4.desc': { PT: 'Temos pátio para guardar seu veículo. Ligamos para a seguradora, explicamos tudo e resolvemos para que você receba o valor rapidamente e possa comprar outro carro.', EN: 'We have a yard to store your vehicle. We call the insurer, explain everything and work it out so you receive the value quickly and can buy another car.', ES: 'Tenemos patio para guardar tu vehículo. Llamamos a la aseguradora, explicamos todo y resolvemos para que recibas el valor rápidamente y puedas comprar otro auto.' },

  // Body Shop
  'body.overline': { PT: 'FUNILARIA & PINTURA', EN: 'BODY & PAINT', ES: 'CARROCERÍA & PINTURA' },
  'body.headline': { PT: 'DEVOLVEMOS SEU CARRO EXATAMENTE COMO ERA.', EN: 'WE RETURN YOUR CAR EXACTLY AS IT WAS.', ES: 'DEVOLVEMOS TU AUTO EXACTAMENTE COMO ERA.' },
  'body.body': { PT: 'Não importa o tamanho do dano — amassado, arranhão profundo ou colisão severa. Usamos tintas OEM e técnicas de calibração de cor para garantir que ninguém vai notar o reparo.', EN: 'No matter the size of the damage — dent, deep scratch or severe collision. We use OEM paints and color calibration techniques to ensure nobody will notice the repair.', ES: 'No importa el tamaño del daño — abolladura, rayón profundo o colisión severa. Usamos pinturas OEM y técnicas de calibración de color para garantizar que nadie note la reparación.' },
  'body.b1': { PT: 'Reparo de colisão estrutural e cosmético', EN: 'Structural and cosmetic collision repair', ES: 'Reparación de colisión estructural y cosmética' },
  'body.b2': { PT: 'Pintura OEM com cabine pressurizada', EN: 'OEM paint with pressurized booth', ES: 'Pintura OEM con cabina presurizada' },
  'body.b3': { PT: 'Calibração digital de cor', EN: 'Digital color calibration', ES: 'Calibración digital de color' },
  'body.b4': { PT: 'Remoção de amassados (PDR e convencional)', EN: 'Dent removal (PDR and conventional)', ES: 'Eliminación de abolladuras (PDR y convencional)' },
  'body.b5': { PT: 'Troca de peças danificadas com fornecedores certificados', EN: 'Replacement of damaged parts with certified suppliers', ES: 'Reemplazo de piezas dañadas con proveedores certificados' },
  'body.b6': { PT: 'Entrega com garantia por escrito', EN: 'Delivery with written warranty', ES: 'Entrega con garantía por escrito' },
  'body.cta': { PT: 'ORÇAMENTO GRATUITO →', EN: 'FREE ESTIMATE →', ES: 'PRESUPUESTO GRATUITO →' },

  // Insurance
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
  'ins.cta': { PT: 'FALAR COM A GENTE →', EN: 'TALK TO US →', ES: 'HABLAR CON NOSOTROS →' },

  // Deductible
  'ded.overline': { PT: 'O DIFERENCIAL QUE NINGUÉM TE CONTA', EN: 'THE DIFFERENCE NOBODY TELLS YOU', ES: 'EL DIFERENCIAL QUE NADIE TE CUENTA' },
  'ded.headline': { PT: 'VOCÊ É O CULPADO NA BATIDA? AINDA ASSIM PODE NÃO PAGAR A FRANQUIA.', EN: 'YOU\'RE AT FAULT? YOU STILL MAY NOT PAY THE DEDUCTIBLE.', ES: '¿TIENES LA CULPA? AÚN ASÍ PUEDES NO PAGAR EL DEDUCIBLE.' },
  'ded.body': { PT: 'O deductible (franquia) de $500 ou $1.000 assusta. Mas na Zero1, em 98% dos casos conseguimos resolver para que você não pague — mesmo quando a culpa é sua. Não deixe esse medo te impedir de consertar o seu veículo.', EN: 'The $500 or $1,000 deductible is scary. But at Zero1, in 98% of cases we resolve it so you don\'t pay — even when it\'s your fault. Don\'t let that fear stop you from fixing your vehicle.', ES: 'El deducible de $500 o $1,000 asusta. Pero en Zero1, en el 98% de los casos lo resolvemos para que no pagues — incluso cuando la culpa es tuya. No dejes que ese miedo te impida reparar tu vehículo.' },
  'ded.cta': { PT: 'VERIFICAR MEU CASO →', EN: 'CHECK MY CASE →', ES: 'VERIFICAR MI CASO →' },
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
  'process.headline': { PT: '4 PASSOS. ZERO COMPLICAÇÃO.', EN: '4 STEPS. ZERO COMPLICATIONS.', ES: '4 PASOS. CERO COMPLICACIONES.' },
  'process.1.title': { PT: 'VOCÊ NOS TRAZ O CARRO', EN: 'YOU BRING US THE CAR', ES: 'NOS TRAES EL AUTO' },
  'process.1.desc': { PT: 'Depois do acidente, traga o veículo para a Zero1. Fazemos uma avaliação completa e gratuita.', EN: 'After the accident, bring the vehicle to Zero1. We do a complete and free evaluation.', ES: 'Después del accidente, trae el vehículo a Zero1. Hacemos una evaluación completa y gratuita.' },
  'process.2.title': { PT: 'ABRIMOS O SINISTRO POR VOCÊ', EN: 'WE OPEN THE CLAIM FOR YOU', ES: 'ABRIMOS EL SINIESTRO POR TI' },
  'process.2.desc': { PT: 'Nossa equipe cuida de toda a comunicação com a seguradora — documentação, fotos, laudo técnico.', EN: 'Our team handles all communication with the insurer — documentation, photos, technical report.', ES: 'Nuestro equipo se encarga de toda la comunicación con la aseguradora — documentación, fotos, informe técnico.' },
  'process.3.title': { PT: 'REPARAMOS COM PADRÃO ORIGINAL', EN: 'WE REPAIR TO OEM STANDARD', ES: 'REPARAMOS CON ESTÁNDAR ORIGINAL' },
  'process.3.desc': { PT: 'Com a aprovação em mãos, executamos o reparo com peças e tintas OEM. Nenhum atalho.', EN: 'With approval in hand, we execute the repair with OEM parts and paints. No shortcuts.', ES: 'Con la aprobación en mano, ejecutamos la reparación con piezas y pinturas OEM. Sin atajos.' },
  'process.4.title': { PT: 'VOCÊ BUSCA O CARRO PRONTO', EN: 'YOU PICK UP YOUR CAR', ES: 'RECOGES TU AUTO LISTO' },
  'process.4.desc': { PT: 'Entrega com garantia por escrito. Sem surpresas na conta — a seguradora pagou.', EN: 'Delivery with written warranty. No surprise charges — insurance paid.', ES: 'Entrega con garantía por escrito. Sin sorpresas en la cuenta — el seguro pagó.' },
  'process.cta': { PT: 'COMEÇAR AGORA →', EN: 'GET STARTED →', ES: 'COMENZAR AHORA →' },

  // Reviews
  'reviews.headline': { PT: '5★ NO GOOGLE.', EN: '5★ ON GOOGLE.', ES: '5★ EN GOOGLE.' },
  'reviews.sub': { PT: 'Clientes reais. Resultados reais.', EN: 'Real customers. Real results.', ES: 'Clientes reales. Resultados reales.' },
  'reviews.pill': { PT: '● Avaliação 5.0 · Google Reviews', EN: '● Rating 5.0 · Google Reviews', ES: '● Calificación 5.0 · Google Reviews' },
  'reviews.link': { PT: '→ VER TODAS AS AVALIAÇÕES NO GOOGLE', EN: '→ SEE ALL REVIEWS ON GOOGLE', ES: '→ VER TODAS LAS RESEÑAS EN GOOGLE' },

  // About
  'about.overline': { PT: 'NOSSA HISTÓRIA', EN: 'OUR STORY', ES: 'NUESTRA HISTORIA' },
  'about.headline': { PT: 'NÃO É SOBRE CARROS. É SOBRE PESSOAS.', EN: 'IT\'S NOT ABOUT CARS. IT\'S ABOUT PEOPLE.', ES: 'NO ES SOBRE AUTOS. ES SOBRE PERSONAS.' },
  'about.p1': { PT: 'A Zero1 Garage foi criada para quem mora aqui em Los Angeles e na Califórnia — e sabe como é frustrante bater o carro e não saber o que fazer. Consertamos seu veículo, seja carro ou moto, mas o que nos diferencia é cuidar de tudo com o seguro para que você não precise resolver nada sozinho.', EN: 'Zero1 Garage was created for those living in Los Angeles and California — who know how frustrating it is to have an accident and not know what to do. We fix your vehicle, car or motorcycle, but what sets us apart is handling everything with insurance so you don\'t have to figure it out alone.', ES: 'Zero1 Garage fue creada para quienes viven en Los Ángeles y California — y saben lo frustrante que es chocar el auto y no saber qué hacer. Reparamos tu vehículo, auto o moto, pero lo que nos diferencia es encargarnos de todo con el seguro para que no tengas que resolverlo solo.' },
  'about.p2': { PT: 'Atendemos as comunidades de Hawthorne, Los Angeles e toda a região — em português, espanhol e inglês. Porque resolver o problema de alguém é mais do que um serviço. É responsabilidade.', EN: 'We serve the communities of Hawthorne, Los Angeles and the entire region — in Portuguese, Spanish and English. Because solving someone\'s problem is more than a service. It\'s a responsibility.', ES: 'Atendemos las comunidades de Hawthorne, Los Ángeles y toda la región — en portugués, español e inglés. Porque resolver el problema de alguien es más que un servicio. Es responsabilidad.' },
  'about.v1.title': { PT: 'PESSOAS PRIMEIRO', EN: 'PEOPLE FIRST', ES: 'PERSONAS PRIMERO' },
  'about.v1.desc': { PT: 'Não é sobre carros. É sobre quem depende deles.', EN: 'It\'s not about cars. It\'s about who depends on them.', ES: 'No es sobre autos. Es sobre quienes dependen de ellos.' },
  'about.v2.title': { PT: 'SEM BUROCRACIA', EN: 'NO RED TAPE', ES: 'SIN BUROCRACIA' },
  'about.v2.desc': { PT: 'Você não faz uma ligação. A gente resolve tudo.', EN: 'You don\'t make a single call. We handle everything.', ES: 'No haces una sola llamada. Nosotros resolvemos todo.' },
  'about.v3.title': { PT: 'RESPONSABILIDADE', EN: 'ACCOUNTABILITY', ES: 'RESPONSABILIDAD' },
  'about.v3.desc': { PT: 'Abrimos o sinistro e acompanhamos até o fim.', EN: 'We open the claim and follow through to the end.', ES: 'Abrimos el siniestro y acompañamos hasta el final.' },
  'about.v4.title': { PT: 'TRANSPARÊNCIA', EN: 'TRANSPARENCY', ES: 'TRANSPARENCIA' },
  'about.v4.desc': { PT: 'Você sabe o que está acontecendo em cada etapa.', EN: 'You know what\'s happening at every step.', ES: 'Sabes lo que pasa en cada etapa.' },
  'about.quote': { PT: '"Não tenha medo de acionar o seu seguro. A Zero1 resolve para você."', EN: '"Don\'t be afraid to use your insurance. Zero1 handles it for you."', ES: '"No tengas miedo de usar tu seguro. Zero1 lo resuelve por ti."' },
  'about.status.closed': { PT: 'Fechado · Abre Seg às 9AM', EN: 'Closed · Opens Mon at 9AM', ES: 'Cerrado · Abre Lun a las 9AM' },
  'about.hours': { PT: 'Seg–Sex: 9h–18h · Sáb: 9h–14h · Dom: Fechado', EN: 'Mon–Fri: 9AM–6PM · Sat: 9AM–2PM · Sun: Closed', ES: 'Lun–Vie: 9h–18h · Sáb: 9h–14h · Dom: Cerrado' },

  // Map
  'map.overline': { PT: 'ENCONTRE-NOS', EN: 'FIND US', ES: 'ENCUÉNTRANOS' },

  // Final CTA
  'cta.overline': { PT: 'LOS ANGELES & CALIFÓRNIA', EN: 'LOS ANGELES & CALIFORNIA', ES: 'LOS ÁNGELES & CALIFORNIA' },
  'cta.headline': { PT: 'BATEU O CARRO? NÃO RESOLVE SOZINHO. FALA COM A GENTE.', EN: 'CAR ACCIDENT? DON\'T GO IT ALONE. TALK TO US.', ES: '¿CHOCASTE? NO LO RESUELVAS SOLO. HABLA CON NOSOTROS.' },
  'cta.body': { PT: 'Consertamos seu carro ou moto e cuidamos de tudo com o seguro. Na maioria dos casos, você não paga a franquia — mesmo sendo o culpado. Avaliação gratuita, sem compromisso.', EN: 'We fix your car or motorcycle and handle everything with insurance. In most cases, you don\'t pay the deductible — even if you\'re at fault. Free evaluation, no commitment.', ES: 'Reparamos tu auto o moto y nos encargamos de todo con el seguro. En la mayoría de los casos, no pagas el deducible — incluso si tienes la culpa. Evaluación gratuita, sin compromiso.' },
  'cta.ligar': { PT: 'LIGAR AGORA →', EN: 'CALL NOW →', ES: 'LLAMAR AHORA →' },
  'cta.whatsapp': { PT: 'WHATSAPP →', EN: 'WHATSAPP →', ES: 'WHATSAPP →' },
  'cta.tagline': { PT: '"Não é sobre carros. É sobre pessoas."', EN: '"It\'s not about cars. It\'s about people."', ES: '"No es sobre autos. Es sobre personas."' },

  // Footer
  'footer.tagline': { PT: 'Não é sobre carros. É sobre pessoas.', EN: 'It\'s not about cars. It\'s about people.', ES: 'No es sobre autos. Es sobre personas.' },
  'footer.servicos': { PT: 'SERVIÇOS', EN: 'SERVICES', ES: 'SERVICIOS' },
  'footer.empresa': { PT: 'EMPRESA', EN: 'COMPANY', ES: 'EMPRESA' },
  'footer.contato': { PT: 'CONTATO', EN: 'CONTACT', ES: 'CONTACTO' },
  'footer.funilaria': { PT: 'Funilaria & Pintura', EN: 'Body & Paint', ES: 'Carrocería & Pintura' },
  'footer.seguros': { PT: 'Gestão de Seguros', EN: 'Insurance Management', ES: 'Gestión de Seguros' },
  'footer.deductible': { PT: 'Deductible', EN: 'Deductible', ES: 'Deducible' },
  'footer.perdatotal': { PT: 'Perda Total', EN: 'Total Loss', ES: 'Pérdida Total' },
  'footer.historia': { PT: 'Nossa História', EN: 'Our Story', ES: 'Nuestra Historia' },
  'footer.avaliacoes': { PT: 'Avaliações', EN: 'Reviews', ES: 'Reseñas' },
  'footer.instagram': { PT: 'Instagram', EN: 'Instagram', ES: 'Instagram' },
  'footer.contato2': { PT: 'Contato', EN: 'Contact', ES: 'Contacto' },
  'footer.horarios': { PT: 'Seg–Sex: 9h–18h · Sáb: 9h–14h · Dom: Fechado', EN: 'Mon–Fri: 9AM–6PM · Sat: 9AM–2PM · Sun: Closed', ES: 'Lun–Vie: 9h–18h · Sáb: 9h–14h · Dom: Cerrado' },
  'footer.copy': { PT: '© 2025 Zero1 Garage LLC · Hawthorne, CA', EN: '© 2025 Zero1 Garage LLC · Hawthorne, CA', ES: '© 2025 Zero1 Garage LLC · Hawthorne, CA' },
};

export function useTranslations() {
  const [lang, setLang] = useState<Lang>('PT');
  const t = useCallback((key: string) => translations[key]?.[lang] ?? key, [lang]);
  return { lang, setLang, t };
}

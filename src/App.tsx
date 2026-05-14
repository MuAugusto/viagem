import { useState } from 'react';
import { 
  Map, 
  Calendar, 
  Info, 
  Coffee, 
  Sun, 
  Moon, 
  Utensils, 
  IceCream2, 
  AlertCircle, 
  CheckCircle2, 
  DollarSign,
  ChevronRight,
  ChevronLeft,
  MapPin,
  Clock,
  Heart
} from 'lucide-react';

// --- DADOS DA VIAGEM ---
const dataViagem = {
  reservas: [
    { nome: "Colonia Express — Colonia del Sacramento", tempo: "entre 3 e 4 semanas antes", motivo: "Motivo: horários específicos e vagas podem acabar. Preferência: saída pela manhã para aproveitar mais a cidade.", docs: "RG em bom estado ou passaporte" },
    { nome: "Tango Porteño", tempo: "2 a 3 semanas antes", motivo: "Escolha recomendada: Jantar + show. Dica: Assentos centrais costumam valer mais a pena." },
    { nome: "La Cabrera", tempo: "1 a 2 semanas antes", motivo: "Melhor horário: entre 20h e 21h." },
    { nome: "Teatro Colón", tempo: "1 semana antes", motivo: "Preferência: visitas entre manhã e início da tarde." },
    { nome: "El SecreTito", tempo: "alguns dias antes", motivo: "Motivo: costuma lotar." },
  ],
  dicas: [
    "Cartão transporte público: Sube",
    "Aplicativo para saber as rotas do metrô: BA Cómo Llego",
    "Aplicativo de entrega de comida: PedidosYa",
    "Aplicativo de transporte uber e taxi premium",
    "Comprar repelente",
    "Ao sacar o dinheiro em uma das unidades da WesterUnion se atentar aos horários que elas abrem",
    "Site para aquisição dos passeios: https://www.civitatis.com/br/buenos-aires/",
    "Treinar perguntas imigração: Onde vai ficar, motivo da viagem, tempo"
  ],
  dinheiro: {
    tabela: [
      { metodo: "Wise", valor: "R$ 3.600–4.200", uso: "restaurantes, Uber, reservas, La Cabrera, Tango Porteño, lojas" },
      { metodo: "Dinheiro / WU", valor: "R$ 1.800–2.400", uso: "cafés pequenos, gorjetas, feiras, kioscos, emergências, descontos em dinheiro" }
    ],
    estrategia: "No dia 1 da viagem na Western Union:\nRetiraria algo como ARS equivalente a R$ 800–1.200 inicialmente.\nIsso cobre aproximadamente: cafés, Mercado San Telmo, pequenas compras, SUBE, gorjetas, kioscos, situações onde aparece desconto por pagamento em dinheiro.\nDepois, no meio da viagem (Dia 5–6), vocês olham o ritmo de gasto."
  },
  roteiro: [
    {
      dia: 1,
      imagem: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?q=80&w=600&auto=format&fit=crop",
      titulo: "Microcentro leve + San Telmo de domingo",
      manha: "Aterrissagem e Uber do aeroporto diretamente para o apartamento na Suipacha, Retiro. Após o check-in e alocação das bagagens, o casal deve realizar um breve descanso para restauração de energia.",
      almoco: "Restaurante principal: Santos Manjares (Calle Paraguay 938). Localizado a escassos minutos de caminhada daSuipacha . Este é um estabelecimento de cortes de carne excelentes a preços justos, introduzindo o paladar à parrilla argentina sem o peso de um protocolo extremamente formal de lua de mel.\n\nAlternativa de restaurante: Pizzería El Cuartito (Talcahuano 937), oferecendo a experiência vibrante e calorosa das clássicas empanadas argentinas e pizzas de massa alta.",
      tarde: "Caminhada contemplativa pela icônica Calle Florida em direção ao Obelisco. A transição da Suipacha para a Calle Florida é uma descida suave rumo ao eixo comercial histórico de Buenos Aires. Este momento serve para absorver o ritmo da cidade, observar a arquitetura eclética e adentrar o suntuoso edifício das Galerías Pacífico, cuja cúpula central exibe magníficos murais afrescados.\n\nCompras / Logística (Obrigatório): Parada estratégica na agência Western Union localizada no interior das Galerías Pacífico (Av. Córdoba 550).\n\nInstruções: Uma vez que o desembarque ocorre em um domingo, a quase totalidade das casas de câmbio de rua e pequenas agências da Western Union encontram-se fechadas. A filial dentro deste shopping não apenas opera aos domingos (das 10:00 às 20:00), mas também detém vastas reservas de dinheiro em espécie e oferece o amparo da segurança privada do centro comercial.\n\nFila e Dicas: Pode haver uma fila de cerca de 30 minutos. É imperativo portar o passaporte físico original (cópias não são aceitas) e o número MTCN da transferência. Sugere-se que um aguarde na fila enquanto o outro observa a arquitetura ou adquire um café nas proximidades.",
      gelato: "Cadore , na Av. Corrientes 1695, é a parada mais simbólica para fechar o primeiro dia; Alternativa próxima e mais “leve”: uma Rapanui da cidade.",
      noite: "Jantar recomendado: Pizzería Guerrín (Avenida Corrientes 1368). Símbolo supremo da identidade urbana portenha.\n\nPasseio noturno opcional: Caminhada pela Avenida Corrientes sob as luzes neon, admirando as fachadas dos teatros de revista em direção ao Obelisco iluminado, capturando a primeira grande fotografia noturna da lua de mel.",
      obs: "Melhor forma de transporte: Exclusivamente a pé. Todo o perímetro daSuipacha , Calle Florida, Galerías Pacífico e Avenida Corrientes forma um circuito contíguo, plano e vibrante."
    },
    {
      dia: 2,
      imagem: "https://images.unsplash.com/photo-1612294037637-ec328d0e075e?q=80&w=600&auto=format&fit=crop",
      titulo: "Recoleta clássica + livraria + arte",
      manha: "Comece pela Biblioteca Nacional Mariano Moreno , que atende presencialmente em dias úteis de 9h às 18h . Dali, siga para o El Ateneo Grand Splendid , na Av. Santa Fe 1860; a livraria funciona de segunda a sábado, 9h às 21h , e domingo, 11h às 21h . Esse é um dia perfeito para caminhar com calma, porque tudo fica muito bem conectado em Recoleta.",
      almoco: "Almoce na própria Recoleta, de preferência algo que não roube energia do passeio\nRestaurante: El Sanjuanino .",
      tarde: "Faça o combo Museu MALBA + Cementerio de Recoleta . O MALBA abre de segunda, quarta, quinta, sexta, sábado e domingo , com terça fechado; o horário mais confortável para vocês aqui é o início da tarde, e o museu fica em Av. Figueroa Alcorta 3415. O Cementerio de Recoleta faz visitas turísticas de 9h às 17h , com visitas guiadas gratuitas em espanhol saindo de hora em hora. Esse bloco fica muito elegante e muito argentino ao mesmo tempo.",
      gelato: "Se ainda sobrar espaço, encaixe uma Rapanui da região ou volte mais tarde para o Cadore se vocês já tiverem gostado dele. Para este dia, eu gosto de deixar o gelato como uma pausa entre o museu e o cemitério, porque ajuda a dar ritmo ao passeio.",
      noite: "Jantar leve em Recoleta ou Retiro. Nada muito pesado, porque o dia já tem bastante conteúdo cultural. Se quiserem um fim de noite romântico, caminhem pela zona mais iluminada da Recoleta e voltem cedo.\nVer restaurante que fica em Recoleta",
      obs: "Melhor transporte: quase tudo a pé, com apoio de táxi entre MALBA e o cemitério se estiverem cansados. Cuidados: o cemitério é bonito, mas merece respeito e tempo; não tentem correr. Reservas necessárias: MALBA e El Ateneo normalmente são fáceis de encaixar sem grande drama, mas a ordem do dia deve respeitar as horas de abertura. O que vale muito: Biblioteca + El Ateneo + Recoleta"
    },
    {
      dia: 3,
      imagem: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=600&auto=format&fit=crop",
      titulo: "Palermo verde + Jardim Japonês + Planetário",
      manha: "Comece pelo Jardín Japonés , que fica em Palermo e abre todos os dias de 10h às 18h45 . Logo depois, emende no Planetario Galileo Galilei , que trabalha com agenda e tickets; a própria página oficial orienta a consultar a programação, então a melhor decisão é verificar a função do dia e encaixar conforme a agenda da semana da viagem. Esse dia funciona muito bem pela manhã e começo da tarde, porque a região é verde e bonita para caminhar.",
      almoco: "Fique em Palermo e almoce sem pressa. A ideia aqui é um almoço com varanda, jardim ou vista para o parque, porque esse é um dos dias mais “lua de mel” do roteiro. Se estiverem com apetite leve, guardem energia para o fim da tarde.",
      tarde: "Façam o circuito a pé pelos Bosques de Palermo , Rosedal , Floralis Genérica e Facultad de Derecho . O Parque 3 de Febrero é livre e inclui lago, jardins e o Rosedal; a Floralis fica na Plaza de las Naciones Unidas e a Faculdade de Direito também é um ícone de Recoleta. É um bloco lindo, fotogênico e com bastante natureza para o que vocês gostam.",
      gelato: "Hoje eu colocaria Rapanui , porque ela tem casas em Retiro, Recoleta, Palermo, Belgrano e Caballito e trabalha com helados artesanais. Sabor que combina com o dia: pistache ou doce de leite . Alternativa próxima: voltar ao Cadore se quiserem fechar a tarde em Corrientes mais tarde.",
      noite: "Noite no Uptown Bar",
      obs: "Melhor transporte: a pé + táxi/Uber entre o hotel e Palermo, porque o deslocamento é fácil mas o trajeto é mais confortável assim. Cuidados: o Planetário depende da agenda; confirme na semana. Reservas necessárias: no Jardim Japonês, basta comprar o ingresso conforme a visita; no Planetário, siga a agenda oficial. O que vale muito: esse é o melhor dia de natureza do roteiro."
    },
    {
      dia: 4,
      imagem: "https://images.unsplash.com/photo-1507812984078-917a29406523?q=80&w=600&auto=format&fit=crop",
      titulo: "Centro histórico + Teatro Colón + tango da noite",
      manha: "Faça o eixo Plaza de Mayo + Casa Rosada . O Museu da Casa Rosada abre quarta a domingo e feriados, das 10h às 18h ; então a quarta-feira é o encaixe ideal. Depois, caminhem pelo centro histórico sem pressa, com a Catedral e o entorno da praça.",
      almoco: "Almoce no corredor da Avenida de Mayo e deixe o café para o Tortoni. O Café Tortoni funciona todos os dias de 8h às 21h , e o show de tango acontece de segunda a sábado, às 18h e 20h . É um clássico absoluto, muito turístico, mas com identidade porteña real — vale mais pela atmosfera do que pela cozinha em si.",
      tarde: "Passe pelo Teatro Colón . As visitas guiadas acontecem todos os dias , com saídas a cada 15 minutos, de 10h a 16h45 , e duração média de 50 minutos ; a bilheteria presencial funciona de segunda a sábado de 9h às 20h e domingos/feriados de 9h às 17h . Depois, siga pela área do Obelisco e da Corrientes para uma caminhada clássica de Buenos Aires.",
      gelato: "Aqui o mais natural é parar no Cadore , porque ele fica na Av. Corrientes 1695, pertinho do circuito teatral. É o gelato certo para um fim de tarde clássico. Sabor-destaque para mim neste dia: dulce de leche ou chocolate amargo .",
      noite: "A noite é do Tango Porteño. Ele fica a poucos metros do Obelisco e o site oficial mostra a experiência como jantar às 20h30 e show às 22h00, com duração de cerca de 1h30. É a escolha mais coerente para lua de mel neste roteiro porque entrega espetáculo, jantar e logística fácil no mesmo bloco",
      obs: "Melhor transporte: a pé + táxi/Uber entre Plaza de Mayo, Colón e Puerto Madero. Cuidados: esse é um dia em que os horários importam, então eu faria Casa Rosada cedo, Colón depois e o tango no fim da noite. Reservas necessárias: Casa Rosada, Colón e Madero Tango merecem organização prévia. O que vale muito: é o dia mais “postal” do roteiro."
    },
    {
      dia: 5,
      imagem: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop",
      titulo: "Caballito cultural + Museu Bernardino Rivadavia + La Cabrera",
      manha: "Deixe a manhã mais solta e use para ir com calma até Caballito . O ponto obrigatório aqui é o Museo de Ciencias Naturales Bernardino Rivadavia , que abre todos os dias de 14h às 19h ; por isso ele encaixa melhor depois do almoço. Esse dia fica bom para respirar um pouco fora do eixo mais turístico e ainda assim manter o roteiro bonito e inteligente.",
      almoco: "Faça um almoço leve perto de Caballito ou já perto de Palermo, dependendo do ritmo de vocês. Eu não gastaria o “cartucho” de jantar premium no almoço deste dia, porque a noite merece a La Cabrera .",
      tarde: "Visite o museu com calma e, se der vontade, alongue a caminhada com um pedacinho de parque. O museu é o mais antigo do país e tem uma coleção muito forte de paleontologia, geologia e fauna; para quem gosta de experiências memoráveis, ele encaixa bem porque foge do roteiro mais óbvio.",
      gelato: "Se estiverem próximos da Corrientes depois, voltem de novo ao Cadore ; se preferirem algo mais prático, uma Rapanui em Palermo ou Caballito resolve sem desvio. Hoje eu iria de sabor clássico, simples e seguro.",
      noite: "Aqui entra a La Cabrera , em Palermo, que funciona todos os dias de 12h às 16h e de 18h30 à 1h . É uma casa mais turística e mais cara, mas muito forte para uma noite especial; o melhor momento para reservar é com antecedência, e eu trataria esse jantar como um dos dois grandes “luxos” do roteiro. Alternativa mais econômica: dividir cortes e acompanhamentos, ou trocar por uma parrilla de bairro no mesmo perímetro de Palermo.",
      obs: "Melhor transporte: táxi/Uber entre Caballito e Palermo para não perder energia. Cuidados: o museu abre só à tarde, então não vale correr pela manhã. Reservas necessárias: La Cabrera, sim; o museu, não. O que vale muito: esse é o dia que equilibra cultura menos óbvia com jantar premium."
    },
    {
      dia: 6,
      imagem: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=600&auto=format&fit=crop",
      titulo: "Belgrano + Barrio Chino + parques do norte",
      manha: "Vá para Belgrano e caminhe com calma pelo Barrio Chino , que fica entre Arribeños, Mendoza, Juramento e Montañeses . A área é uma porção bem definida do bairro, com identidade oriental forte e ótima para passeio a pé. Eu gosto desse dia para uma manhã sem pressa, com lojas, padarias, restaurantes e ambiente diferente do resto da cidade.",
      almoco: "Almoce dentro ou ao redor do Barrio Chino. Esse é um dos lugares mais autênticos para variar da parrilla e da pizza, sem perder o clima local. Se quiserem economizar, um almoço simples aqui rende melhor do que tentar transformar tudo em comida cara de bairro turístico.",
      tarde: "Estique a caminhada até as Barrancas de Belgrano e, se ainda houver energia, dê um salto ao Parque 3 de Febrero , que é uma área livre e verde ótima para caminhar. O parque reúne lago, rosedal, planetário e outras atrações, então é uma tarde muito boa para natureza urbana.",
      gelato: "Aqui eu faria Rapanui Belgrano ou Rapanui Palermo , porque isso casa bem com o bairro e com o ritmo do dia. Sabor certo: algo cremoso e clássico, como dulce de leche ou pistache .",
      noite: "Noite no bairro ou retorno cedo. Se quiserem jantar fora, esse pode ser o dia do El SecreTito ; é um bodegón de clima muito local, com pratos abundantes e forte identidade de bairro, e o Turismo Buenos Aires avisa que ele costuma lotar, então reservar é o ideal. É uma escolha excelente para equilibrar o orçamento, porque entrega mais autenticidade do que glamour.",
      obs: "Melhor transporte: táxi/Uber até Belgrano e caminhada no bairro. Cuidados: o Barrio Chino funciona melhor de dia e começo da tarde. Reservas necessárias: El SecreTito, sim. O que vale muito: é o dia mais “local” do roteiro norte."
    },
    {
      dia: 7,
      imagem: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=600&auto=format&fit=crop",
      titulo: "Colonia del Sacramento, Uruguai",
      manha: "Saída cedo de Puerto Madero Sur , no terminal da Colonia Express em Av. Elvira Rawson de Dellepiane 155 . Para o trecho Buenos Aires–Colonia, a companhia oferece saídas, no período de 01/03/2026 a 30/11/2026 , às 8:30, 10:30, 12:50, 18:30 e 20:00 , com duração de 1h15 . Para o seu perfil, o melhor é a saída mais cedo possível, porque você ganha tempo útil na cidade uruguaia sem correr demais.",
      almoco: "Leve lanche na bolsa e use a cidade para uma refeição mais simples. Os próprios relatos de viagem que vocês trouxeram já apontam que comer lá pode pesar, então o plano mais inteligente é priorizar o passeio e controlar o gasto.",
      tarde: "Passeio livre por Colonia del Sacramento : centro histórico, ruas de pedra, mirantes e pausa romântica. Em lua de mel, esse é o passeio que mais foge do óbvio e que normalmente vira lembrança forte da viagem. Eu deixaria ao menos algumas horas sem compromisso, para caminhar, sentar e aproveitar a cidade com calma.",
      gelato: "Se houver tempo no retorno a Buenos Aires, faça um gelato leve na volta. Se o dia apertar, a regra aqui é não inventar moda: Colonia já é o grande programa do dia.",
      noite: "Jantar leve perto do hotel ou descanso total. A travessia costuma cansar um pouco, então vale mais chegar bem ao fim da noite do que tentar “aproveitar cada segundo”.",
      obs: "Melhor transporte: ferry + caminhada na cidade. Cuidados: compre com antecedência e mantenha documentos à mão. Reservas necessárias: sim, principalmente se quiser a grade mais cedo. O que vale muito: esse é o melhor bate-volta do roteiro para casal."
    },
    {
      dia: 8,
      imagem: "https://images.unsplash.com/photo-1516483638261-f40af5ff5891?q=80&w=600&auto=format&fit=crop",
      titulo: "San Telmo profundo + Caminito de dia",
      manha: "Passeios sugeridos: A icônica passagem de paralelepípedos de Caminito no bairro operário de La Boca\n\nDica: Chegar cedo para evitar turistas",
      almoco: "Use um lugar simples e despretensioso em San Telmo. O bairro combina muito com comida de mesa corrida, bodegón ou um mercado gastronômico, e a graça é mais a atmosfera do que o luxo.\n\nRestaurantes: La Brigada, ou choripáns",
      tarde: "Passeios (Obrigatório): Feira de San Telmo. Desdobrando-se estritamente aos domingos a partir da poética e sombreada Plaza Dorrego, a feira transborda pela extensão contígua da Calle Defensa\n\nCasa da Mafalda fica aqui",
      gelato: "Freddo (na própria unidade da Calle Defensa 995, em San Telmo).",
      noite: "Se tiverem energia, retornem para Puerto Madero para uma caminhada noturna curta. É um fechamento muito bonito depois de um dia mais histórico e popular.",
      obs: "Melhor transporte: taxi/Uber entre San Telmo e Caminito. Cuidados: La Boca rende muito mais de dia. Reservas necessárias: nenhuma para a parte de rua; só jantar, se vocês quiserem algo específico. O que vale muito: é o lado mais histórico e popular de Buenos Aires."
    },
    {
      dia: 9,
      imagem: "https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?q=80&w=600&auto=format&fit=crop",
      titulo: "Puerto Madero de dia + Puente de la Mujer",
      manha: "Faça um passeio bem tranquilo por Puerto Madero , com tempo para calçadão e fotos. O Puente de la Mujer é um dos símbolos do bairro; a própria Cidade de Buenos Aires explica que ele representa um casal dançando tango. É um passeio que conversa bem com a lua de mel sem exigir esforço.\n\nUma ideia de passeio também é o Reserva Ecológica Costanera Sur",
      almoco: "Almoce por ali se quiserem conforto e praticidade. Como é uma área mais turística e mais arrumada, ela é boa para um almoço bonito, mas eu não deixaria um orçamento pesado no bairro todos os dias.",
      tarde: "Continue caminhando por Puerto Madero sem meta rígida. O ideal é deixar o ritmo mais lento, porque o bairro funciona muito bem para casal, fotos e descanso visual depois dos dias mais cheios.",
      gelato: "Persicco",
      noite: "Se vocês quiserem uma noite romântica sem show, Puerto Madero é a melhor escolha para jantar e voltar cedo. Se quiserem rever uma experiência mais “espetáculo”, esse também é um bom dia para uma segunda opção de tango, mas eu só faria isso se o orçamento permitir.",
      obs: "Melhor transporte: a pé + táxi/Uber. Cuidados: não precisa lotar esse dia; o charme está justamente em deixá-lo leve. Reservas necessárias: apenas se forem jantar em restaurante mais disputado. O que vale muito: é o dia mais romântico do waterfront."
    },
    {
      dia: 10,
      imagem: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=600&auto=format&fit=crop",
      titulo: "Tigre + Delta do Paraná",
      manha: "Saída para Tigre a partir de Retiro de trem. A própria Cidade de Buenos Aires descreve Tigre como um refúgio ribeirinho a cerca de 30 km da cidade , com viagem de trem em torno de 1 hora , e como porta de entrada do Delta do Paraná.",
      almoco: "Comam algo simples em Tigre ou levem lanche, para não prender o dia num almoço caro. O foco aqui é o passeio de água e verde.",
      tarde: "Façam o passeio de barco pelo Delta e caminhem pelo centro de Tigre. Esse é o grande dia de natureza fora da cidade, e ele conversa muito bem com o perfil de vocês.",
      gelato: "Na volta, se sobrar disposição, um gelato em Buenos Aires; se não, deixem para o dia 12.",
      noite: "Volta tranquila para o hotel e jantar simples. Observação prática: Tigre é o melhor bate-volta de natureza do roteiro e entra muito bem logo antes do único dia de respiro.\n\nRestaurante Pizzería Banchero, ou ifood",
      obs: "Melhor bate-volta de natureza. Entra muito bem logo antes do dia de respiro."
    },
    {
      dia: 11,
      imagem: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=600&auto=format&fit=crop",
      titulo: "ÚNICO dia de respiro",
      manha: "Nada de programa pesado. Café com calma, caminhada curta e, no máximo, um giro leve perto do hotel. Esse é o único dia pensado para descansar de verdade.",
      almoco: "Escolham algo próximo e confortável.",
      tarde: "Tarde de compras, escolham um mercado e vão comprar lembrancinhas",
      noite: "Jantar romântico sem compromisso, ou só descanso mesmo. Aqui eu deixaria o casal livre para fazer o que der vontade na hora, sem obrigação de cumprir roteiro.",
      obs: "Dia pensado para descansar de verdade, sem obrigação de cumprir roteiro."
    },
    {
      dia: 12,
      imagem: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?q=80&w=600&auto=format&fit=crop",
      titulo: "Parque de la Memoria + Museo Nacional de Arte Decorativo + Recoleta norte",
      manha: "Esse é o bloco novo que substitui a repetição. Comecem pelo Parque de la Memoria , que fica aberto de segunda a sexta, das 10h às 18h , e sábados, domingos e feriados, das 10h às 19h . É um espaço de reflexão, arte e vista para o rio, muito bonito para quem gosta de caminhar e quer algo mais contemplativo.",
      almoco: "Façam um almoço na faixa de Recoleta/Palermo norte ou perto da rota de volta.",
      tarde: "Siga para o Museo Nacional de Arte Decorativo , que abre de quarta a domingo, das 13h às 19h . Ele traz uma atmosfera de palacete e casa muito bem com um dia elegante, sem repetir MALBA nem Biblioteca. Se quiserem, fechem com uma caminhada pela Recoleta norte e Av. Alvear.",
      gelato: "Cadore no retorno ao centro ou Rapanui se estiverem mais para o lado norte. Sabor: dulce de leche .",
      noite: "Ir ao bar Florería Atlántico",
      obs: "Dia elegante e contemplativo."
    },
    {
      dia: 13,
      imagem: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600&auto=format&fit=crop",
      titulo: "Volta ao Brasil",
      manha: "Café da manhã sem pressa, check-out e saída com folga. Como o voo é às 18h , vocês ainda têm uma janela confortável para não acordar correndo.",
      almoco: "Almoço cedo e simples. Nada pesado antes do aeroporto.",
      tarde: "Saída para o aeroporto com margem de segurança. Se sobrar tempo, apenas uma última parada prática e nada mais.",
      gelato: "Se ainda couber uma despedida doce, fique com a casa mais perto do hotel. Não complica.",
      obs: "Melhor transporte: carro por app. Cuidados: trânsito e atraso de última hora. Reservas necessárias: nenhuma. O que vale ou não vale a pena: no último dia, vale sair cedo e não estressar com passeio extra."
    }
  ]
};

// --- COMPONENTES ---

const TabButton = ({ active, onClick, icon: Icon, label }: { active: boolean; onClick: () => void; icon: React.ElementType; label: string }) => (
  <button
    onClick={onClick}
    className={`flex-1 py-4 flex flex-col items-center justify-center gap-1 border-b-4 transition-colors ${
      active 
        ? 'border-rose-600 text-rose-700 bg-rose-50' 
        : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
    }`}
  >
    <Icon size={24} />
    <span className="text-sm font-medium">{label}</span>
  </button>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden ${className}`}>
    {children}
  </div>
);

const ViewGuia = () => (
  <div className="space-y-6 pb-20 animate-fade-in">
    {/* Reservas */}
    <section>
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Calendar className="text-rose-600" />
        Reservas Antecipadas
      </h2>
      <div className="grid gap-3 md:grid-cols-2">
        {dataViagem.reservas.map((res, i) => (
          <Card key={i} className="p-4 border-l-4 border-l-rose-500">
            <h3 className="font-bold text-gray-800 text-lg">{res.nome}</h3>
            <div className="flex items-center text-sm text-rose-600 font-medium mt-1 mb-2">
              <Clock size={14} className="mr-1" />
              {res.tempo}
            </div>
            <p className="text-sm text-gray-600 mb-1">{res.motivo}</p>
            {res.docs && (
              <p className="text-xs text-gray-500 bg-gray-50 p-2 rounded mt-2 border border-gray-100">
                <span className="font-semibold text-gray-700">Documentos:</span> {res.docs}
              </p>
            )}
          </Card>
        ))}
      </div>
    </section>

    {/* Dinheiro */}
    <section>
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <DollarSign className="text-rose-600" />
        Dinheiro e Câmbio
      </h2>
      <Card className="mb-4">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
              <tr>
                <th className="px-4 py-3">Método</th>
                <th className="px-4 py-3">Valor Recomendado</th>
                <th className="px-4 py-3">Uso Ideal</th>
              </tr>
            </thead>
            <tbody>
              {dataViagem.dinheiro.tabela.map((row, i) => (
                <tr key={i} className="border-b last:border-0 hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">{row.metodo}</td>
                  <td className="px-4 py-3 text-emerald-600 font-semibold">{row.valor}</td>
                  <td className="px-4 py-3">{row.uso}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3 text-amber-800 text-sm">
        <AlertCircle className="shrink-0 mt-0.5" size={20} />
        <div>
          <strong className="block mb-1 text-base">Estratégia Western Union (Dia 1)</strong>
          {dataViagem.dinheiro.estrategia}
        </div>
      </div>
    </section>

    {/* Dicas */}
    <section>
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Info className="text-rose-600" />
        Informações Úteis
      </h2>
      <Card className="p-4">
        <ul className="space-y-3">
          {dataViagem.dicas.map((dica, i) => (
            <li key={i} className="flex gap-3 text-gray-700 text-sm items-start">
              <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
              <span dangerouslySetInnerHTML={{__html: dica.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" class="text-rose-600 underline">Link</a>')}} />
            </li>
          ))}
        </ul>
      </Card>
    </section>
  </div>
);

const ViewRoteiroList = ({ onSelectDay }: { onSelectDay: (dia: number) => void }) => (
  <div className="space-y-3 pb-20 animate-fade-in">
    <div className="bg-rose-50 rounded-xl p-4 mb-6 border border-rose-100 flex items-center gap-4">
      <Heart className="text-rose-500 shrink-0" size={32} />
      <div>
        <h3 className="font-bold text-rose-900">Roteiro de Lua de Mel</h3>
        <p className="text-sm text-rose-700">13 dias pensados para equilíbrio entre passeios, gastronomia e romance.</p>
      </div>
    </div>

    {dataViagem.roteiro.map((dia) => (
      <button
        key={dia.dia}
        onClick={() => onSelectDay(dia.dia)}
        className="w-full bg-white rounded-xl p-3 shadow-sm border border-gray-100 hover:border-rose-300 hover:shadow-md transition-all flex items-center text-left group overflow-hidden"
      >
        <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0 mr-4 border border-gray-100">
          <img src={dia.imagem} alt={dia.titulo} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <span className="text-white font-black text-lg drop-shadow-md">Dia {dia.dia}</span>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-gray-800 leading-tight">{dia.titulo}</h3>
        </div>
        <ChevronRight className="text-gray-300 group-hover:text-rose-500 transition-colors" />
      </button>
    ))}
  </div>
);

const ViewDiaDetalhe = ({ dia, onBack }: { dia: number; onBack: () => void }) => {
  const info = dataViagem.roteiro.find(d => d.dia === dia);
  if (!info) return null;

  const blocos = [
    { icon: Sun, label: "Manhã", content: info.manha, color: "text-amber-500", bg: "bg-amber-50" },
    { icon: Utensils, label: "Almoço", content: info.almoco, color: "text-orange-500", bg: "bg-orange-50" },
    { icon: Coffee, label: "Tarde", content: info.tarde, color: "text-sky-500", bg: "bg-sky-50" },
    { icon: IceCream2, label: "Gelato do Dia", content: info.gelato, color: "text-pink-500", bg: "bg-pink-50" },
    { icon: Moon, label: "Noite", content: info.noite, color: "text-indigo-500", bg: "bg-indigo-50" },
  ];

  return (
    <div className="pb-20 animate-fade-in">
      <button 
        onClick={onBack}
        className="flex items-center text-rose-600 font-medium mb-4 hover:underline"
      >
        <ChevronLeft size={20} />
        Voltar para todos os dias
      </button>

      <div className="mb-6 rounded-xl overflow-hidden shadow-sm relative h-56 border border-gray-200">
        <img src={info.imagem} alt={info.titulo} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-5">
          <div className="inline-block bg-rose-600 text-white font-bold px-3 py-1 rounded-full text-xs mb-2 w-fit">
            Dia {info.dia}
          </div>
          <h2 className="text-2xl font-bold text-white leading-tight drop-shadow-md">{info.titulo}</h2>
        </div>
      </div>

      <div className="space-y-4">
        {blocos.map((bloco, idx) => {
          const BlocoIcon = bloco.icon;
          return (
          <Card key={idx} className="p-4 border-l-4" style={{ borderLeftColor: 'currentColor' }}>
            <div className={`flex items-start gap-3 ${bloco.color}`}>
              <div className={`p-2 rounded-lg ${bloco.bg} shrink-0`}>
                <BlocoIcon size={20} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-sm uppercase tracking-wider mb-1">{bloco.label}</h4>
                <p className="text-gray-700 leading-relaxed text-[15px] whitespace-pre-line">{bloco.content}</p>
              </div>
            </div>
          </Card>
          );
        })}

        {info.obs && (
          <div className="mt-6 bg-gray-800 text-gray-50 rounded-xl p-4 flex gap-3 shadow-lg">
            <Info className="text-gray-400 shrink-0 mt-0.5" size={20} />
            <div>
              <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-1">Observações Práticas</h4>
              <p className="text-gray-300 text-[15px] leading-relaxed whitespace-pre-line">{info.obs}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// --- APP PRINCIPAL ---
export default function App() {
  const [activeTab, setActiveTab] = useState('roteiro');
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 font-sans max-w-2xl mx-auto shadow-2xl relative">
      {/* Header Fixo */}
      <header className="bg-rose-700 text-white p-5 sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-3">
          <MapPin size={28} className="text-rose-200" />
          <div>
            <h1 className="text-xl font-black tracking-tight">Buenos Aires</h1>
            <p className="text-xs text-rose-200 font-medium tracking-widest uppercase">Lua de Mel</p>
          </div>
        </div>
      </header>

      {/* Conteúdo */}
      <main className="p-4 md:p-6">
        {activeTab === 'guia' && <ViewGuia />}
        
        {activeTab === 'roteiro' && !selectedDay && (
          <ViewRoteiroList onSelectDay={setSelectedDay} />
        )}

        {activeTab === 'roteiro' && selectedDay && (
          <ViewDiaDetalhe 
            dia={selectedDay} 
            onBack={() => setSelectedDay(null)} 
          />
        )}
      </main>

      {/* Navegação Inferior Fixa */}
      <nav className="fixed bottom-0 w-full max-w-2xl bg-white border-t border-gray-200 flex shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-20">
        <TabButton 
          active={activeTab === 'roteiro'} 
          onClick={() => { setActiveTab('roteiro'); setSelectedDay(null); }}
          icon={Map}
          label="Roteiro"
        />
        <TabButton 
          active={activeTab === 'guia'} 
          onClick={() => { setActiveTab('guia'); setSelectedDay(null); }}
          icon={Info}
          label="Preparativos"
        />
      </nav>

      <style dangerouslySetInnerHTML={{__html: `
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}
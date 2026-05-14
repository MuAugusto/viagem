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
      imagem: "https://images.unsplash.com/photo-1590114174489-6186e8befc15?q=80&w=600&auto=format&fit=crop",
      titulo: "Palermo verde + Jardim Japonês + Planetário",
      manha: "Comece pelo Jardín Japonês, que fica em Palermo e abre todos os dias de 10h às 18h45 . Logo depois, emende no Planetario Galileo Galilei , que trabalha com agenda e tickets; a própria página oficial orienta a consultar a programação, então a melhor decisão é verificar a função do dia e encaixar conforme a agenda da semana da viagem. Esse dia funciona muito bem pela manhã e começo da tarde, porque a região é verde e bonita para caminhar.",
      almoco: "Fique em Palermo e almoce sem pressa. A ideia aqui é um almoço com varanda, jardim ou vista para o parque, porque esse é um dos dias mais “lua de mel” do roteiro. Se estiverem com apetite leve, guardem energia para o fim da tarde.",
      tarde: "Façam o circuito a pé pelos Bosques de Palermo , Rosedal , Floralis Genérica e Facultad de Derecho . O Parque 3 de Febrero é livre e inclui lago, jardins e o Rosedal; a Floralis fica na Plaza de las Naciones Unidas e a Faculdade de Direito também é um ícone de Recoleta. É um bloco lindo, fotogênico e com bastante natureza para o que vocês gostam.",
      gelato: "Hoje eu colocaria Rapanui , porque ela tem casas em Retiro, Recoleta, Palermo, Belgrano e Caballito e trabalha com helados artesanais. Sabor que combina com o dia: pistache ou doce de leite . Alternativa próxima: voltar ao Cadore se quiserem fechar a tarde em Corrientes mais tarde.",
      noite: "Noite no Uptown Bar",
      obs: "Melhor transporte: a pé + táxi/Uber entre o hotel e Palermo, porque o deslocamento é fácil mas o trajeto é mais confortável assim. Cuidados: o Planetário depende da agenda; confirme na semana. Reservas necessárias: no Jardim Japonês, basta comprar o ingresso conforme a visita; no Planetário, siga a agenda oficial. O que vale muito: esse é o melhor dia de natureza do roteiro."
    },
    {
      dia: 4,      
      imagem: "https://images.unsplash.com/photo-1761359841098-8e84b7cf3661?q=80&w=600&auto=format&fit=crop",
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
      imagem: "data:image/webp;base64,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",
      titulo: "Museu Bernardino Rivadavia + La Cabrera",
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
      noite: "Jantar no El SecreTito ; é um bodegón de clima muito local, com pratos abundantes e forte identidade de bairro, e o Turismo Buenos Aires avisa que ele costuma lotar, então reservar é o ideal. É uma escolha excelente para equilibrar o orçamento, porque entrega mais autenticidade do que glamour.",
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

const Card = ({ 
  children, 
  className = "", 
  style 
}: { 
  children: React.ReactNode; 
  className?: string; 
  style?: React.CSSProperties 
}) => (
  <div 
    className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden ${className}`}
    style={style}
  >
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

import { useState } from 'react';
import { 
  Map, 
  Info, 
  Coffee, 
  Sun, 
  Moon, 
  Utensils, 
  IceCream2, 
  AlertCircle, 
  CheckCircle2, 
  ChevronRight,
  ChevronLeft,
  MapPin,
  ListChecks,
  CheckSquare,
  Square,
  Ticket,
  Search,
  Music,
  Video,
  Languages,
  MessageCircle,
  Heart,
  Luggage,
  CalendarClock
} from 'lucide-react';

const dataViagem = {
  dicas: [
    "Cartão transporte público: Sube",
    "Aplicativo para saber as rotas do metrô: BA Cómo Llego",
    "Aplicativo de entrega de comida: PedidosYa",
    "Aplicativo de transporte uber e taxi premium",
    "Treinar perguntas imigração: Onde vai ficar, motivo da viagem, tempo"
  ],
  roteiro: [
    {
      dia: 1,
      imagem: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?q=80&w=600&auto=format&fit=crop",
      titulo: "Microcentro leve + Rota do Obelisco",
      manha: "Aterrissagem e Uber do aeroporto diretamente para o apartamento na Suipacha 1211, Retiro. Após o check-in e alocação das bagagens, realizem um breve descanso.",
      almoco: "Restaurante principal: Santos Manjares (Calle Paraguay 938). Fica a escassos minutos de caminhada do hotel. (Alternativa: Pizzería El Cuartito).",
      tarde: "🗺️ A ROTA: Saindo do almoço, vocês vão 'descer' (em direção ao rio) até a Calle Florida (um calçadão gigante para pedestres). Caminhem nela até a esquina com a Av. Córdoba para entrar no shopping Galerías Pacífico.\n\n🛒 COMPRAS FLEXÍVEIS: Vocês não precisam correr para fazer as compras da farmácia/mercado de uma vez só! Façam isso enquanto caminham ao longo da Calle Florida. Entrem numa Farmaplus e num mercadinho (Carrefour/DIA) de forma natural durante o passeio.\n\nApós o shopping, vocês vão 'subir' as ruas na direção contrária até a imensa Avenida 9 de Julio para ver o Obelisco (esquina com a Av. Corrientes).",
      gelato: "Cadore (Av. Corrientes 1695) ou Rapanui.",
      noite: "Jantar recomendado: Pizzería Guerrín (Avenida Corrientes 1368).\nCaminhada na Av. Corrientes sob as luzes neon.",
      obs: "NÃO PRECISA se preocupar com Western Union hoje! O dia é todo a pé. Use apenas o seu cartão Wise (ou de crédito) para os restaurantes e mercados hoje. Deixaremos a burocracia do dinheiro vivo para a manhã de segunda-feira.",
      locais: ["Farmaplus / Farmacity", "Carrefour Express", "Santos Manjares", "Galerías Pacífico", "Obelisco", "Pizzería Guerrín"],
      reservas: []
    },
    {
      dia: 2,
      imagem: "https://images.unsplash.com/photo-1612294037637-ec328d0e075e?q=80&w=600&auto=format&fit=crop",
      titulo: "Recoleta clássica + livraria + arte",
      manha: "Missão financeira logo cedo: ir à agência da Western Union próxima ao hotel (como a da rua Florida) para sacar os pesos argentinos da semana (Obrigatório levar Passaporte físico ou RG original). \n\nApós o saque (e já com a doleira cheia), comecem o passeio oficial indo até a grandiosa e brutalista Biblioteca Nacional Mariano Moreno (que atende presencialmente em dias úteis de 9h às 18h). Tirem fotos e depois caminhem pela Avenida Santa Fe até a belíssima livraria El Ateneo Grand Splendid (que funciona dentro de um antigo teatro na Av. Santa Fe 1860). O bairro da Recoleta é perfeito para caminhar com calma e reparar na arquitetura.",
      almoco: "Almoce na própria Recoleta.\nRestaurante sugerido: El Sanjuanino (tradicionalíssimo pelas empanadas).",
      tarde: "Faça o combo clássico da Recoleta: O imponente Cementerio de Recoleta (um museu a céu aberto impressionante, onde está o túmulo de Evita Perón) e depois o Museo MALBA (Museu de Arte Latino-Americana). \n\nEles não ficam tão distantes, mas como vocês já terão andado muito de manhã, não hesitem em pegar um táxi/Uber entre o Cemitério e o MALBA se o cansaço bater.",
      gelato: "Rapanui da Recoleta.",
      noite: "Depende do termômetro do cansaço:\n🔥 COM PIQUE: Vão jantar uma carne clássica na Parrilla Los Pinos (na Recoleta mesmo).\n😴 CANSADOS: Vão jantar no charmoso Croque Madame, que é uma opção excelente e que fica bem pertinho do hotel de vocês.",
      obs: "O MALBA geralmente abre às segundas-feiras e fecha às terças, então hoje é um dia estratégico para conhecê-lo. \n\n💡 Lembrete de Noite Livre: Dependendo do ânimo, veja a aba 'Observações Adicionais' para dicas (como o Milión ou o Victoria Brown) caso queiram esticar para um drink.",
      locais: ["Western Union", "Biblioteca Nacional Mariano Moreno", "El Ateneo Grand Splendid", "El Sanjuanino", "Cementerio de Recoleta", "MALBA", "Parrilla Los Pinos", "Croque Madame (Retiro)"],
      reservas: ["MALBA: Recomenda-se comprar o ingresso antecipado pelo site oficial para evitar filas."] 
    },
    {
      dia: 3,
      imagem: "https://images.unsplash.com/photo-1588614959060-4d144f28b207?q=80&w=600&auto=format&fit=crop",
      titulo: "Palermo verde + Ecoparque",
      manha: "Comece pelo Jardín Japonés. Em seguida, caminhe até o Ecoparque de Buenos Aires (antigo zoológico transformado em parque aberto, cheio de pavões e maras soltas).",
      almoco: "O almoço aqui é 100% flexível dependendo da fome:\n🥪 Para Lanches Rápidos: Milanga (famosos lanches de milanesa) ou Kido.\n🍽️ Para Almoço Sentado/Restaurante: Narda Comedor (da chef Narda Lepes, comida fresca incrível) ou Belisario Roldán (opção clássica perto dos parques).",
      tarde: "Circuito a pé pela natureza: Bosques de Palermo, Rosedal, Floralis Genérica (a flor de metal) e Facultad de Derecho.",
      gelato: "Lucciano's (Em Palermo. Peçam os famosos 'ice pops' em formato de bichinhos ou os sabores de pistache).",
      noite: "Noite animada no Uptown Bar (o famoso bar que você entra por uma estação de metrô de NY falsa).",
      obs: "Melhor transporte hoje: a pé nos parques e Uber/Táxi para voltar.",
      locais: ["Jardín Japonés", "Ecoparque de Buenos Aires", "Bosques de Palermo", "Uptown Bar", "Milanga", "Kido", "Narda Comedor", "Belisario Roldán", "Lucciano's"],
      reservas: ["Uptown Bar: Tente reservar no site ou chegue assim que abrir (20h) para fugir de uma fila absurda na porta."]
    },
    {
      dia: 4,
      imagem: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=600&auto=format&fit=crop",
      titulo: "Casa Rosada, Flexibilidade e Tango",
      manha: "Manhã 100% livre! Como a noite anterior foi agitada no Uptown, acordem a hora que quiserem. \n\nQuando estiverem prontos, vão para a Plaza de Mayo ver a Casa Rosada por fora e visitar o Museo del Bicentenario (museu gratuito, incrível e que fica logo atrás da Casa Rosada).",
      almoco: "Depende da energia de vocês após o museu:\n\n🏃‍♂️ COM PIQUE: Caminhem até San Telmo, tirem foto com a estátua da Mafalda e comam uma carne no La Brigada ou um choripán clássico no El Desnivel.\n\n🚶‍♀️ MÉDIO: Caminhem para Puerto Madero e almocem no La Parolaccia Trattoria (excelentes massas com vista pros diques).\n\n🥱 MUITO CANSADOS: Vão direto para a Avenida de Mayo comer no clássico Café Tortoni, ou num café pertinho do Teatro Colón para sentar e descansar antes da visita.",
      tarde: "Às 16h00 em ponto: Visita Guiada ao Teatro Colón (durante 50 minutos vocês conhecerão um dos teatros mais bonitos do mundo). Fiquem atentos ao horário para não atrasar!",
      gelato: "Cadore (já que fica na Av. Corrientes, perto do Tango).",
      noite: "Noite super elegante de Tango Porteño (Jantar e show).",
      obs: "A ideia de hoje é focar numa manhã tardia, um almoço flexível e guardar as pernas para a elegância do Tango à noite.",
      locais: ["Casa Rosada", "Museo del Bicentenario", "Estátua da Mafalda", "Parrilla La Brigada", "El Desnivel", "La Parolaccia Trattoria", "Café Tortoni", "Teatro Colón", "Tango Porteño"],
      reservas: [
        "Teatro Colón: JÁ RESERVADA PARA ÀS 16h00 (em português).",
        "Tango Porteño: JÁ PAGO!"
      ]
    },
    {
      dia: 5,
      imagem: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=600&auto=format&fit=crop",
      titulo: "Caballito cultural + La Cabrera",
      manha: "09:00–10:00 — ☕ Café da manhã no Terraza Mediterránea\n\n10:00–11:30 — 🏘️ Caminhada no Barrio Inglés + Av. Pedro Goyena. Bairro incrível pelas casas e arquitetura de influência britânica.\nRota: Terraza Mediterránea → Pedro Goyena → ruas do Barrio Inglés → voltar em direção ao Parque Rivadavia.\n\n11:30–12:30 — 📚 Parque Rivadavia (Foco na feira permanente de livros, revistas e discos usados, além da antiga noria da família Lezica).\n\n12:30 — 🚕 Peguem um Uber/Cabify direto do Rivadavia para o Parque Centenario (não vale a pena ir andando).\n\n13:00–13:30 — 🌳 Parque Centenario (Volta curta pelo lago e área verde).",
      almoco: "13:30–14:30 — ☕ Almoço/café flexível e espontâneo.\nOpções perto do parque Centenario: Traje Café (Díaz Vélez), Tienda de Café (Díaz Vélez), Ugá coffee house (Ángel Gallardo) ou Café del Parque (Viel).",
      tarde: "15:00–17:00 — 🦖 Museo de Ciencias Naturales Bernardino Rivadavia.",
      gelato: "Rapanui.",
      noite: "Noite de jantar premium: La Cabrera, em Palermo.",
      obs: "Não coma pratos pesados no almoço para ter espaço para as carnes e guarnições da La Cabrera à noite.",
      locais: ["Terraza Mediterránea", "Barrio Inglés", "Parque Rivadavia", "Parque Centenario", "Museo Bernardino Rivadavia", "La Cabrera"],
      reservas: ["La Cabrera: Reservar via site ou WhatsApp com 1 a 2 semanas de antecedência (busque entre 20h e 21h)."]
    },
    {
      dia: 6,
      imagem: "https://images.unsplash.com/photo-1555529733-0e67056058ab?q=80&w=600&auto=format&fit=crop",
      titulo: "Belgrano + Barrio Chino + La Uat",
      manha: "Vá para Belgrano e caminhe pelo Barrio Chino (Chinatown portenha).",
      almoco: "Comida asiática de rua ou num restaurante no Barrio Chino.",
      tarde: "Barrancas de Belgrano e Parque 3 de Febrero.",
      gelato: "Qualquer uma nas redondezas.",
      noite: "La Uat. Atenção à vibe: diferente do Uptown que é mais focado na coquetelaria sentada, o La Uat tem uma pegada muito mais balada/pista de dança para o final da noite.",
      obs: "Se bater cansaço, voltem pro Airbnb de tarde antes da balada.",
      locais: ["Barrio Chino", "Barrancas de Belgrano", "La Uat"],
      reservas: ["La Uat: Mesa JÁ RESERVADA para as 23h15! (Cheguem com a energia alta, pois é mais balada!)."]
    },
    {
      dia: 7,
      imagem: "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?q=80&w=600&auto=format&fit=crop",
      titulo: "Colonia del Sacramento (Uruguai)",
      manha: "⛴️ 11h20: Check-in Obrigatório no terminal!\nO terminal é o 'Colonia Express' em Puerto Madero Sur (Av. Elvira Rawson de Dellepiane 155). Peguem um Uber do Airbnb umas 10h45 para chegar lá com folga (1h30 antes do barco).\n12h50: Saída do Barco.\n14h05: Chegada no Uruguai.",
      almoco: "Como vocês chegam às 14h, comam algo rápido pela cidade histórica, pois vocês têm um lanche robusto agendado logo depois.",
      tarde: "Caminhem pela cidade velha, vejam a rua de pedras 'Calle de los Suspiros' e o Farol.\n\n☕ 16h00 às 18h30: Merienda na Casa Lahusen!\nDirijam-se para a Casa Lahusen (Rua De España, 217). Vocês têm o clássico café da tarde uruguaio ('Merienda') que já está pago no voucher de vocês!",
      gelato: "Se quiserem, após o café da tarde.",
      noite: "⛴️ 18h45: Retorno ao terminal del porto en Colonia para el Check-in da volta.\n20h15: Saída do barco de volta para a Argentina.\n21h30: Chegada em Buenos Aires.",
      obs: "⚠️ LEVE O PASSAPORTE/RG FÍSICO (É imigração de verdade)! Imprima os dois PDFs (BookingConfirmation e Voucher) que você recebeu por email e os entregue nos guichês.",
      locais: ["Terminal Colonia Express (Av. Elvira Rawson 155)", "Colonia del Sacramento", "Casa Lahusen (De España 217)"],
      reservas: ["Colonia Express: JÁ PAGO! (Inclui o barco ida/volta e a Merienda). Chegar ao terminal às 11h20 em ponto!"]
    },
    {
      dia: 8,
      imagem: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=600&auto=format&fit=crop",
      titulo: "Caminito + San Telmo (Feira)",
      manha: "Visita rápida ao Caminito (bairro de La Boca) só pela manhã para evitar muito turista e muito sol. (Lembrete: Não fujam das 3 ruelas principais super turísticas por segurança).",
      almoco: "Parrilla clássica ou lanches na rua (choripán clássico de domingo).",
      tarde: "Feira de San Telmo (A maior feira da cidade acontece aos domingos!). Caminhem com calma, vejam os antiquários, ouçam os músicos de rua e aproveitem a tarde livre de horários.",
      gelato: "Freddo (San Telmo).",
      noite: "Noite Livre! Após bater perna o dia todo na feira (que é enorme), voltem para o Airbnb e descansem. \n🍕 Sugestão Perfeita: Aproveitem a noite livre e o cansaço para pedir ou ir comer uma pizza porteña clássica na Pizzería Guerrín, na Av. Corrientes.",
      obs: "Um dia 100% solto, feito apenas para caminhar e curtir a vibração portenha de domingo sem amarras.",
      locais: ["Caminito", "Feira de San Telmo", "Pizzería Guerrín"],
      reservas: []
    },
    {
      dia: 9,
      imagem: "https://images.unsplash.com/photo-1596489510344-909d73d6eb75?q=80&w=600&auto=format&fit=crop",
      titulo: "Palácio Barolo + Florería Atlántico",
      manha: "Manhã de descanso e recuperação! Durmam até mais tarde e tomem um café da manhã sem pressa pelas redondezas.",
      almoco: "Almocem num lugar aconchegante pelo centro ou Retiro.",
      tarde: "🏛️ Visita guiada ao Palacio Barolo (no Centro Histórico). Subam até o farol para ver a cidade de cima na luz do fim de tarde! Um passeio de arquitetura belíssimo que não exige grande esforço físico.",
      gelato: "Cadore (Perto do Barolo).",
      noite: "Noite sofisticadíssima no Florería Atlántico (bar escondido no subsolo de uma floricultura chique). \nFica na região do Retiro, super prático para ir a partir do hotel de vocês após tomarem um banho.",
      obs: "O Palácio Barolo é maravilhoso para preencher a tarde e não cansa muito, perfeito para estarem 'inteiros' na noite de drinks finos no Florería.",
      locais: ["Palacio Barolo", "Florería Atlántico"],
      reservas: [
        "Palacio Barolo: Comprar o ingresso guiado online com 2 ou 3 dias de antecedência.",
        "Florería Atlántico: Planejem chegar lá por volta das 19h / 19h30 para sentar confortavelmente no balcão sem enfrentar filas quilométricas!"
      ]
    },
    {
      dia: 10,
      imagem: "https://images.unsplash.com/photo-1522008629172-0c14eeef99b9?q=80&w=600&auto=format&fit=crop",
      titulo: "Tigre e o Delta do Paraná",
      manha: "08h00: Estación Retiro (Tren Mitre) → Estación Tigre.\n09h15: Chegada e caminhada até a Estación Fluvial.\n09h30: Comprar 'Paseo por el Delta'.\n10h-11h30: Passeio turístico de barco.",
      almoco: "12h30: Restaurantes na beira do rio.",
      tarde: "11h30: Caminhar pelo lindíssimo Paseo Victorica.\n14h: Fotos externas no Museo de Arte Tigre.\n15h: Compras de artesanato e coisas para casa no Puerto de Frutos.\n17h: Retornar caminhando para a Estação Tigre e pegar o trem de volta.",
      gelato: "Antes de pegar o trem.",
      noite: "Noite Livre e de descanso do trem.\n🍕 Sugestão: Se ainda não foram, a Pizzería Guerrín é uma excelente pedida rápida para matar a fome da viagem.",
      obs: "🧠 MAPA MENTAL PARA HOJE:\n1. Trem em Retiro (Ramal Tigre) \n2. Chega na Estación Tigre \n3. Caminha pra Estación Fluvial \n4. Barco Turístico no Delta \n5. Caminha pelo Paseo Victorica \n6. Foto no Museo de Arte \n7. Feirinha no Puerto de Frutos \n8. Volta pra Estación Tigre e pega Trem.",
      locais: ["Estación Retiro Mitre", "Estación Tigre", "Estación Fluvial (Tigre)", "Paseo Victorica", "Museo de Arte Tigre", "Puerto de Frutos", "Pizzería Guerrín"],
      reservas: ["Passeio de Barco e Trem: Compra-se tudo na hora nos guichês e com o cartão Sube."]
    },
    {
      dia: 11,
      imagem: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=600&auto=format&fit=crop",
      titulo: "Planetário + Tarde/Noite Livre",
      manha: "Manhã totalmente livre para acordar sem despertador.\n\n🔭 12h00: Vão para os Bosques de Palermo para a Visita Guiada do Planetário.\n🔭 13h00: Assistam a apresentação imersiva da cúpula ('Buracos Negros').",
      almoco: "Após o espetáculo (umas 14h00), achem um lugar agradável e calmo por Palermo para um almoço tardio.",
      tarde: "Tarde livre! Já que estão em Palermo, passeiem sem destino ou voltem para o Airbnb para curtir um fim de tarde sem burocracias.",
      gelato: "Qualquer um favorito.",
      noite: "Noite Livre! Uma janela fantástica para vocês decidirem espontaneamente. \n🍕 Lembrete: Se ainda sobrou espaço, a Guerrín ou algum speakeasy da lista (como o Victoria Brown) são ótimas opções.",
      obs: "O dia de 'respiro' perfeito. Compromisso guiado apenas ao meio-dia, o resto do dia e da noite são 100% para improvisar e relaxar.",
      locais: ["Planetario Galileo Galilei", "Victoria Brown Bar", "Pizzería Guerrín"],
      reservas: [
        "Planetário: Comprar o ingresso online no site deles com antecedência (a agenda abre por semana, fiquem de olho!)."
      ]
    },
    {
      dia: 12,
      imagem: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?q=80&w=600&auto=format&fit=crop",
      titulo: "Reserva Ecológica + Arte + El SecreTito",
      manha: "Caminhada relaxante e grandiosa pela Reserva Ecológica Costanera Sur (em Puerto Madero). O foco aqui é a natureza e caminhar sem pressa. Usem repelente!",
      almoco: "Almocem num restaurante agradável nos diques de Puerto Madero (Ex: La Parolaccia Trattoria) ou na região de Recoleta/Palermo onde fica o museu.",
      tarde: "Passeio pelo lindíssimo Museo Nacional de Arte Decorativo. Um dos prédios (por fora e por dentro) mais bonitos de toda Buenos Aires.",
      gelato: "Despedida do sorvete portenho.",
      noite: "O grande jantar de despedida: El SecreTito.\nÉ um bodegón de bairro autêntico e fenomenal, perfeito para fechar a viagem com chave de ouro e muita fartura.",
      obs: "Este é o último dia inteiro de fato. Usem tênis na parte da manhã por conta da Reserva e aproveitem a noite no bodegón!",
      locais: ["Reserva Ecológica Costanera Sur", "Museo Nacional de Arte Decorativo", "El SecreTito"],
      reservas: ["El SecreTito: Bodegón hiper concorrido. Liguem ou mandem WhatsApp com 2 a 3 dias de antecedência para garantir a mesa de despedida!"]
    },
    {
      dia: 13,
      imagem: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600&auto=format&fit=crop",
      titulo: "O Retorno",
      manha: "Check-out do apartamento e café leve.",
      almoco: "Bem tranquilo.",
      tarde: "Saída para o aeroporto.",
      gelato: "No aeroporto.",
      noite: "Voo.",
      obs: "Façam o check-in online na noite anterior.",
      locais: ["Aeroporto"],
      reservas: ["Apenas confirmar o Uber com antecedência dependendo do trânsito."]
    }
  ]
};

const TabButton = ({ active, onClick, icon: Icon, label }) => (
  <button
    onClick={onClick}
    className={`flex-1 py-4 flex flex-col items-center justify-center gap-1 border-b-4 transition-colors shrink-0 min-w-[80px] ${
      active 
        ? 'border-rose-600 text-rose-700 bg-rose-50' 
        : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
    }`}
  >
    <Icon size={24} />
    <span className="text-sm font-medium">{label}</span>
  </button>
);

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden ${className}`}>
    {children}
  </div>
);

const ViewChecklist = () => {
  const [itens, setItens] = useState([
    { id: 1, text: "Adaptador de tomada universal (Pino 'I')", checked: false },
    { id: 2, text: "Doleira / Porta-dólar", checked: false },
    { id: 3, text: "Ziplocs Transparentes (Para levar os potinhos no aeroporto)", checked: false },
    { id: 4, text: "Repelente de insetos (MENOR q 100ml)", checked: false },
    { id: 5, text: "Desodorantes Roll-on (NUNCA levar Aerosol)", checked: false },
    { id: 6, text: "Pastas de dente pequenas (para voo)", checked: false },
    { id: 7, text: "Protetor Labial e Hidratante Facial", checked: false },
    { id: 8, text: "Band-Aids (para bolhas das caminhadas)", checked: false },
    { id: 9, text: "Remédios (Dor de cabeça, estômago, enjoo/Dramin)", checked: false },
  ]);

  const toggleCheck = (id) => {
    setItens(itens.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  return (
    <div className="space-y-6 pb-20 animate-fade-in">
      <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100 flex items-center gap-4">
        <Luggage className="text-emerald-500 shrink-0" size={32} />
        <div>
          <h3 className="font-bold text-emerald-900">Viagem Leve</h3>
          <p className="text-sm text-emerald-700">Somente Mala de Bordo (10kg) + Mochila. Roupa pesada no corpo. Vocês usarão a máquina de lavar do Airbnb no dia 6!</p>
        </div>
      </div>

      <section>
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <AlertCircle className="text-rose-600" />
          A Regra do Ziploc (Líquidos)
        </h2>
        <Card className="p-4 border-l-4 border-l-rose-500 bg-white">
          <p className="text-sm text-gray-700 mb-3">
            Como vocês <strong>não vão despachar mala</strong>, a regra internacional no raio-x é severa:
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-rose-500"/> Máximo de 100ml por frasco/potinho.</li>
            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-rose-500"/> Frascos devem caber num saco plástico Ziploc transparente.</li>
            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-rose-500"/> Desodorante aerosol é <strong>proibido e jogado fora</strong>. Leve só roll-on.</li>
          </ul>
        </Card>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <ListChecks className="text-rose-600" />
          Para Comprar / Separar (Os 2)
        </h2>
        <Card className="p-2">
          <ul className="divide-y divide-gray-100">
            {itens.map((item) => (
              <li 
                key={item.id} 
                className="flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleCheck(item.id)}
              >
                {item.checked ? (
                  <CheckSquare className="text-emerald-500 shrink-0" size={24} />
                ) : (
                  <Square className="text-gray-300 shrink-0" size={24} />
                )}
                <span className={`text-sm ${item.checked ? 'text-gray-400 line-through' : 'text-gray-700 font-medium'}`}>
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </section>
    </div>
  );
};

const ViewObservacoes = () => (
  <div className="space-y-6 pb-20 animate-fade-in">
    <section>
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Info className="text-sky-500" />
        Dicas e Logística
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

    <section>
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Moon className="text-indigo-600" />
        Quer sair à noite?
      </h2>
      <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100 mb-4">
        <p className="text-sm text-indigo-900 mb-3">
          Nos dias em que o roteiro aponta "Noite Livre", aqui estão excelentes opções portenhas:
        </p>
        <ul className="space-y-4">
          <li className="flex gap-3">
            <Utensils className="text-indigo-500 shrink-0 mt-1" size={18} />
            <div>
              <strong className="block text-indigo-900 text-sm">Pizzería Guerrín (Av. Corrientes)</strong>
              <span className="text-xs text-indigo-700">A pizza clássica argentina. Super caótica, farta de queijo (fugazzeta) e tradicional.</span>
            </div>
          </li>
          <li className="flex gap-3">
            <Music className="text-indigo-500 shrink-0 mt-1" size={18} />
            <div>
              <strong className="block text-indigo-900 text-sm">Victoria Brown Bar (Palermo)</strong>
              <span className="text-xs text-indigo-700">Bar secreto (speakeasy) escondido atrás de um café. Atmosfera steampunk.</span>
            </div>
          </li>
          <li className="flex gap-3">
            <Music className="text-indigo-500 shrink-0 mt-1" size={18} />
            <div>
              <strong className="block text-indigo-900 text-sm">Milión (Recoleta)</strong>
              <span className="text-xs text-indigo-700">Bar/Restaurante num casarão antigo espetacular com um jardim lindíssimo no fundo.</span>
            </div>
          </li>
        </ul>
      </div>

      <a 
        href="https://www.tiktok.com/@avenidacorriente/video/7424075727932378373" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full bg-black text-white rounded-xl p-4 flex items-center justify-between hover:bg-gray-800 transition-colors shadow-md"
      >
        <div className="flex items-center gap-3">
          <Video className="text-rose-500" size={24} />
          <div className="text-left">
            <strong className="block text-sm">Buenos Aires depois da meia-noite</strong>
            <span className="text-xs text-gray-300">Assistir vídeo no TikTok</span>
          </div>
        </div>
        <ChevronRight size={20} className="text-gray-400" />
      </a>
    </section>
  </div>
);

const ViewRoteiroList = ({ onSelectDay }) => (
  <div className="space-y-3 pb-20 animate-fade-in">
    
    {}
    {/* PAINEL DE TAREFAS DISCRETO */}
    <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-200">
      <div className="flex items-center gap-2 mb-3 border-b border-slate-200 pb-2">
        <CalendarClock className="text-slate-500 shrink-0" size={20} />
        <h3 className="font-semibold text-slate-700 text-sm tracking-wide">PENDÊNCIAS DE RESERVA</h3>
      </div>
      <ul className="space-y-2 text-sm text-slate-600 ml-1">
        <li className="flex items-start gap-2">
          <Ticket size={16} className="mt-0.5 shrink-0 text-slate-400" /> 
          <span>Comprar online: <strong>MALBA</strong> (Dia 2)</span>
        </li>
        <li className="flex items-start gap-2">
          <Ticket size={16} className="mt-0.5 shrink-0 text-slate-400" /> 
          <span>Comprar online: <strong>Planetário</strong> (Ficar de olho, Dia 11)</span>
        </li>
        <li className="flex items-start gap-2">
          <Ticket size={16} className="mt-0.5 shrink-0 text-slate-400" /> 
          <span>Comprar online: <strong>Palácio Barolo</strong> (Dia 9)</span>
        </li>
        <li className="flex items-start gap-2">
          <MessageCircle size={16} className="mt-0.5 shrink-0 text-slate-400" /> 
          <span>WhatsApp: Mesa no <strong>El SecreTito</strong> (Dia 12)</span>
        </li>
      </ul>
    </div>

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
        className="w-full bg-white rounded-xl p-3 shadow-sm border border-gray-100 hover:border-rose-300 transition-all flex items-center text-left group overflow-hidden"
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

const ViewDiaDetalhe = ({ dia, onBack }) => {
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
        {blocos.map((bloco, idx) => (
          <Card key={idx} className="p-4 border-l-4" style={{ borderLeftColor: 'currentColor' }}>
            <div className={`flex items-start gap-3 ${bloco.color}`}>
              <div className={`p-2 rounded-lg ${bloco.bg} shrink-0`}>
                <bloco.icon size={20} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-sm uppercase tracking-wider mb-1">{bloco.label}</h4>
                <p className="text-gray-700 leading-relaxed text-[15px] whitespace-pre-line">{bloco.content}</p>
              </div>
            </div>
          </Card>
        ))}

        {info.obs && (
          <div className="mt-4 bg-gray-800 text-gray-50 rounded-xl p-4 flex gap-3 shadow-lg">
            <Info className="text-gray-400 shrink-0 mt-0.5" size={20} />
            <div>
              <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-1">Dica de Logística</h4>
              <p className="text-gray-300 text-[15px] leading-relaxed whitespace-pre-line">{info.obs}</p>
            </div>
          </div>
        )}

        <div className={`mt-2 border rounded-xl p-4 ${info.reservas && info.reservas.length > 0 ? 'bg-rose-50 border-rose-200' : 'bg-emerald-50 border-emerald-200'}`}>
          <h4 className={`font-bold text-sm flex items-center gap-2 mb-2 ${info.reservas && info.reservas.length > 0 ? 'text-rose-900' : 'text-emerald-900'}`}>
            <Ticket size={16} /> 
            {info.reservas && info.reservas.length > 0 ? 'Reservas Necessárias' : 'Dia Livre'}
          </h4>
          
          {info.reservas && info.reservas.length > 0 ? (
            <ul className="list-disc list-inside text-rose-800 text-sm space-y-1">
              {info.reservas.map((res, i) => (
                <li key={i}>{res}</li>
              ))}
            </ul>
          ) : (
            <p className="text-emerald-800 text-sm italic">Nenhuma reserva obrigatória ou burocracia para hoje. Aproveitem a espontaneidade!</p>
          )}
        </div>

        {info.locais && (
          <div className="mt-2 bg-sky-50 border border-sky-100 rounded-xl p-4">
            <h4 className="font-bold text-sky-900 text-sm flex items-center gap-2 mb-3">
              <Search size={16} /> Verifique no Google Maps hoje:
            </h4>
            <div className="flex flex-wrap gap-2">
              {info.locais.map((local, i) => (
                <span key={i} className="bg-white border border-sky-200 text-sky-800 text-xs px-3 py-1 rounded-full font-medium shadow-sm">
                  {local}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ViewEspanhol = () => (
  <div className="space-y-6 pb-20 animate-fade-in">
    <div className="bg-purple-50 rounded-xl p-4 mb-6 border border-purple-100 flex items-center gap-4">
      <Languages className="text-purple-500 shrink-0" size={32} />
      <div>
        <h3 className="font-bold text-purple-900">Espanhol de Sobrevivência</h3>
        <p className="text-sm text-purple-700">Frases úteis para não passar aperto. Tente arriscar, os portenhos adoram!</p>
      </div>
    </div>

    <section>
      <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
        <MessageCircle className="text-purple-600" size={20} /> Saudações
      </h2>
      <Card className="p-0 overflow-hidden">
        <ul className="divide-y divide-gray-100">
          <li className="p-3 bg-white">
            <strong className="block text-gray-900">Olá / Bom dia / Boa tarde / Boa noite</strong>
            <span className="text-purple-700 text-sm italic">"¡Hola! / Buenos días / Buenas tardes / Buenas noches"</span>
          </li>
          <li className="p-3 bg-gray-50">
            <strong className="block text-gray-900">Por favor / Obrigado(a) / Desculpe</strong>
            <span className="text-purple-700 text-sm italic">"Por favor / Gracias / Perdón (ou Disculpe)"</span>
          </li>
        </ul>
      </Card>
    </section>

    <section>
      <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
        <Utensils className="text-orange-500" size={20} /> Restaurantes
      </h2>
      <Card className="p-0 overflow-hidden">
        <ul className="divide-y divide-gray-100">
          <li className="p-3 bg-white">
            <strong className="block text-gray-900">Uma mesa para dois, por favor.</strong>
            <span className="text-purple-700 text-sm italic">"Una mesa para dos, por favor."</span>
          </li>
          <li className="p-3 bg-gray-50">
            <strong className="block text-gray-900">Ponto da carne: Mal passada / Ao Ponto / Bem passada</strong>
            <span className="text-purple-700 text-sm italic">"Jugoso / A punto / Bien cocido"</span>
            <p className="text-xs text-gray-500 mt-1">* Dica: Na Argentina, a carne 'ao punto' é bem rosada (quase vermelha) no meio.</p>
          </li>
          <li className="p-3 bg-white">
            <strong className="block text-gray-900">A conta, por favor. Aceita dinheiro?</strong>
            <span className="text-purple-700 text-sm italic">"La cuenta, por favor. ¿Aceptan efectivo?"</span>
          </li>
        </ul>
      </Card>
    </section>

    <section>
      <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
        <AlertCircle className="text-rose-500" size={20} /> Imigração
      </h2>
      <Card className="p-4 bg-rose-50 border-rose-100">
        <ul className="space-y-3">
          <li>
            <strong className="block text-rose-900 text-sm">"¿Cuál es el motivo de su viaje?"</strong>
            <span className="text-rose-700 text-sm italic block">R: Turismo. Lua de mel. (Luna de miel)</span>
          </li>
          <li>
            <strong className="block text-rose-900 text-sm">"¿Dónde se va a hospedar?"</strong>
            <span className="text-rose-700 text-sm italic block">R: En un Airbnb en Retiro. (Mostre o app).</span>
          </li>
        </ul>
      </Card>
    </section>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('roteiro');
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 font-sans max-w-2xl mx-auto shadow-2xl relative">
      <header className="bg-rose-700 text-white p-5 sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-3">
          <MapPin size={28} className="text-rose-200" />
          <div>
            <h1 className="text-xl font-black tracking-tight">Buenos Aires</h1>
            <p className="text-xs text-rose-200 font-medium tracking-widest uppercase">Lua de Mel</p>
          </div>
        </div>
      </header>

      <main className="p-4 md:p-6 pb-24">
        {activeTab === 'observacoes' && <ViewObservacoes />}
        {activeTab === 'checklist' && <ViewChecklist />}
        {activeTab === 'espanhol' && <ViewEspanhol />}
        {activeTab === 'roteiro' && !selectedDay && <ViewRoteiroList onSelectDay={setSelectedDay} />}
        {activeTab === 'roteiro' && selectedDay && <ViewDiaDetalhe dia={selectedDay} onBack={() => setSelectedDay(null)} />}
      </main>

      <nav className="fixed bottom-0 w-full max-w-2xl bg-white border-t border-gray-200 flex shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-20 overflow-x-auto">
        <div className="flex w-full min-w-[320px]">
          <TabButton active={activeTab === 'roteiro'} onClick={() => { setActiveTab('roteiro'); setSelectedDay(null); }} icon={Map} label="Roteiro" />
          <TabButton active={activeTab === 'observacoes'} onClick={() => { setActiveTab('observacoes'); setSelectedDay(null); }} icon={Info} label="Obs Extras" />
          <TabButton active={activeTab === 'checklist'} onClick={() => { setActiveTab('checklist'); setSelectedDay(null); }} icon={ListChecks} label="Mala" />
          <TabButton active={activeTab === 'espanhol'} onClick={() => { setActiveTab('espanhol'); setSelectedDay(null); }} icon={Languages} label="Espanhol" />
        </div>
      </nav>

      <style dangerouslySetInnerHTML={{__html: `
        .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
      `}} />
    </div>
  );
}

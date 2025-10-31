

export const navItems= [
    { name:"Home", href:"#home"},
    { name:"Programas", href:"#programas"},
    { name:"Sobre", href:"#sobre"},
    { name:"Preços", href:"#preços"},
    { name:"Contato", href:"#contatos"},
    
]

export const programs = [
    {
    title: "Treinamento de força",
    description: "Construa músculos e aumente a força com nossos programas de treinamento de força liderados por especialistas.",
    image: "/muscular.png",
    alt: "Treinamento de força"},

    {
    title: "Yoga e Flexibilidade",
    description: "Melhore sua flexibilidade e encontre paz interior com nossas sessões de ioga.",
    image: "/yoga.jpg",
    alt: "Yoga e Flexibilidade"},

    {
    title: "Cardio Fitness",
    description: "Aumente sua resistência e saúde cardíaca com nossos exercícios cardiovasculares dinâmicos.",
    image: "/cardio.png",
    alt: "Cardio Fitness"},

    
    {
    title: "Orientação Nutricional",
    description: "Obtenha planos nutricionais personalizados para complementar sua jornada fitness.",
    image: "/nutria.png",
    alt: "Orientação Nutricional"},

]

export const testimonials = [
    {
    name: "Sarah H",
    story:"Perdi 20 kilos em 3 meses com este programa!",
    details:"O plano personalizado de treinamento e nutrição fez toda a diferença. Sinto-me mais forte e confiante do que nunca.",
    image:"/pic-2.png",
    rating: 5,
   },
   
   { 
    name: "john d",
    story:"O treinador me leva além dos meus limites de uma forma saudável.",
    details:"Profissional, motivador e orientado a resultados. Ganhei músculos e melhorei significativamente meu condicionamento físico geral.",
    image:"/pic-1.png",
    rating: 4,
   },

    { 
    name: "Mario Costa",
    story:"O agendamento flexível tornou mais fácil permanecer consistente.",
    details:"Como mãe ocupada, as sessões online e o horário flexível me ajudaram a manter minha rotina de exercícios sem estresse.",
    image:"/pic-3.png",
    rating: 5,
   },
];

export const plans = [
    {
        name: "Básico",
        price: 29,
        period: "mês",
        description: "Perfeito para iniciantes que desejam iniciar sua jornada fitness.",
        
        features: [
            "Acesso à academia",
            "Uso básico do equipamento",
            "Acesso ao vestiário",
            "Acesso a aplicativos móveis",
            "Acompanhamento do progresso",
            

        ],
        cta: "Comece agora",
        popular: false,
    },

    {
        name: "Pro",
        price: 59,
        period: "mês",
        description: "Escolha mais popular para entusiastas sérios do fitness.",
        
        features: [
            "Tudo em Básico",
            "4 Sessões de Treinamento Pessoal",
            "Aulas em grupo",
            "Plano de Nutrição",
            "Suporte Prioritário",
            "Planos de treino personalizados",
            

        ],
        cta: "Comece agora",
        popular: true,
    },

    {
        name: "Elite",
        price: 99,
        period: "mês",
        description: "Pacote completo de transformação de condicionamento físico.",
        
        features: [
            "Tudo em Pro",
            "Sessões de treinamento ilimitadas",
            "Acesso a aulas online",
            "Acesso à academia 24 horas por dia, 7 dias por semana",
            "Sessões de Recuperação e Bem-Estar",
            "Benefícios para membros VIP",
            

        ],
        cta: "Comece agora",
        popular: false,
    }
];
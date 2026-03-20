// ═══════════════════════════════════════════════════
// IMPERMEX SERVIÇOS — config-site.js
// Este arquivo é gerado pelo Painel Admin
// ═══════════════════════════════════════════════════
window.SITE_CONFIG = {
  businessName: "Impermex Serviços",
  tagline: "Limpeza a Seco e Impermeabilização",
  phone: "5585992902592",
  phoneDisplay: "(85) 99290-2592",
  instagram: "impermexservicos",
  location: "Atendimento em Fortaleza-CE e região",
  footerCopy: "© 2025 Impermex Serviços. Todos os direitos reservados.",

  heroBadge: "Limpeza a Seco & Impermeabilização",
  heroTitle: "SEU SOFÁ MERECE O <span>MELHOR</span>",
  heroSub: "Limpeza profissional a seco de sofás, colchões, tapetes, cortinas e muito mais — sem sair da sua casa.",
  stat1: "500+", stat1Label: "Clientes Satisfeitos",
  stat2: "5★",   stat2Label: "Avaliação Média",
  stat3: "3+",   stat3Label: "Anos de Experiência",

  cores: {
    primary:      "#1A7A4A",
    primaryLight: "#25A864",
    bgPrimary:    "#F8FFFE",
    bgDark:       "#EDFAF4",
    bgCard:       "#FFFFFF",
    textPrimary:  "#1A2E24",
    textGrey:     "#6B8C7A",
    accentPromo:  "#0A5C8A"
  },

  services: [
    {
      categoria: "Sofás e Poltronas", icone: "🛋️", imagem: "",
      servicos: [
        { nome: "Limpeza de Sofá 2 Lugares",     desc: "Higienização profunda a seco. Elimina manchas, ácaros e odores.",    type: "fixo", preco: "A partir de R$ 80",  destaque: false },
        { nome: "Limpeza de Sofá 3 Lugares",     desc: "Higienização profunda a seco. Elimina manchas, ácaros e odores.",    type: "fixo", preco: "A partir de R$ 100", destaque: false },
        { nome: "Limpeza de Sofá Retrátil",      desc: "Higienização completa incluindo área retrátil e reclinável.",        type: "fixo", preco: "A partir de R$ 130", destaque: true  },
        { nome: "Poltrona / Cadeira",             desc: "Limpeza individual de poltronas e cadeiras estofadas.",              type: "fixo", preco: "A partir de R$ 40",  destaque: false }
      ]
    },
    {
      categoria: "Colchões", icone: "🛏️", imagem: "",
      servicos: [
        { nome: "Colchão Solteiro",   desc: "Limpeza profunda, eliminação de ácaros e manchas.",   type: "fixo", preco: "A partir de R$ 80",  destaque: false },
        { nome: "Colchão Casal",      desc: "Limpeza profunda, eliminação de ácaros e manchas.",   type: "fixo", preco: "A partir de R$ 100", destaque: true  },
        { nome: "Colchão Queen/King", desc: "Limpeza profunda, eliminação de ácaros e manchas.",   type: "fixo", preco: "A partir de R$ 130", destaque: false }
      ]
    },
    {
      categoria: "Tapetes e Cortinas", icone: "🏠", imagem: "",
      servicos: [
        { nome: "Tapete Pequeno (até 2m²)",   desc: "Lavagem e higienização completa do tapete.",              type: "fixo",    preco: "A partir de R$ 50",  destaque: false },
        { nome: "Tapete Médio (2m² a 6m²)",   desc: "Lavagem e higienização completa do tapete.",              type: "fixo",    preco: "A partir de R$ 90",  destaque: false },
        { nome: "Tapete Grande (acima de 6m²)",desc: "Lavagem e higienização. Preço por metro quadrado.",       type: "fixo",    preco: "Consultar",          destaque: false },
        { nome: "Cortinas",                    desc: "Limpeza e higienização de cortinas no local.",            type: "consulta",                              destaque: false }
      ]
    },
    {
      categoria: "Impermeabilização", icone: "💧", imagem: "",
      servicos: [
        { nome: "Impermeabilização de Sofá",   desc: "Proteção contra líquidos, manchas e desgaste.",         type: "fixo",    preco: "A partir de R$ 60",  destaque: true  },
        { nome: "Impermeabilização de Colchão",desc: "Proteção completa contra umidade e manchas.",           type: "fixo",    preco: "A partir de R$ 50",  destaque: false },
        { nome: "Impermeabilização de Tapete", desc: "Proteção profissional para tapetes e carpetes.",        type: "consulta",                               destaque: false }
      ]
    }
  ],

  pacotes: [
    {
      nome: "Kit Quarto",  tier: "Econômico", destaque: false, imagem: "",
      descricao: "Tudo que você precisa para um quarto limpo e saudável.",
      itens: ["Colchão Casal", "2 Travesseiros", "Higienização completa", "Eliminação de ácaros"],
      preco: "R$ 149",
      nota: "*Ideal para famílias com crianças ou alérgicos"
    },
    {
      nome: "Kit Sala",    tier: "Mais Popular", destaque: true, imagem: "",
      descricao: "Deixe sua sala impecável com um único atendimento.",
      itens: ["Sofá 3 lugares", "Tapete até 4m²", "Cadeira estofada", "Impermeabilização inclusa"],
      preco: "R$ 249",
      nota: "*Nosso pacote mais pedido"
    },
    {
      nome: "Kit Residencial", tier: "Completo", destaque: false, imagem: "",
      descricao: "Atendimento completo para toda a residência.",
      itens: ["Sofá + Poltrona", "Colchão casal", "Tapete", "Cortinas", "Impermeabilização em tudo"],
      preco: "R$ 449",
      nota: "*Melhor custo-benefício"
    }
  ],

  promocoes: [],

  gallery: [
    { url: "", caption: "Sofá antes e depois — Limpeza Completa" },
    { url: "", caption: "Colchão Higienizado — Resultado Impecável" },
    { url: "", caption: "Tapete Persa Restaurado" },
    { url: "", caption: "Poltrona — Remoção de Manchas" },
    { url: "", caption: "Impermeabilização de Sofá em L" },
    { url: "", caption: "Cortinas Higienizadas no Local" }
  ],

  bookingTitle: "AGENDE SEU<br>ATENDIMENTO",
  bookingDesc:  "Preencha o formulário e confirmaremos pelo WhatsApp em minutos.",
  feat1Title: "Atendimento em Casa",   feat1Desc: "Vamos até você — sem precisar retirar os móveis.",
  feat2Title: "Confirmação Rápida",    feat2Desc: "Resposta pelo WhatsApp em minutos.",
  feat3Title: "Produtos Certificados", feat3Desc: "Produtos seguros para crianças e animais.",

  contactTitle: "VAMOS DEIXAR SUA CASA <span>IMPECÁVEL</span>"
};

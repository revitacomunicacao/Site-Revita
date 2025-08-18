import type { IPortfolios } from "../types/IPortfolios";

export const portfolioData: Record<string, IPortfolios[]> = {
  branding: [
    {
      id: 1,
      title: "Dr. João Silva - Cardiologia",
      description: "Branding completo para médico cardiologista, incluindo identidade visual, logotipo e material impresso. Foco na credibilidade e confiança médica.",
      galeria_de_foto: [
        "https://via.placeholder.com/600x400/660042/ffffff?text=Dr.+João+Silva+1",
        "https://via.placeholder.com/600x400/660042/ffffff?text=Dr.+João+Silva+2",
        "https://via.placeholder.com/600x400/660042/ffffff?text=Dr.+João+Silva+3"
      ],
      url_do_video: "",
      categories: ["Branding Médico"],
      tags: ["Cardiologia", "Branding", "Identidade Visual", "Credibilidade"]
    },
    {
      id: 2,
      title: "Clínica Ortopédica São Lucas",
      description: "Desenvolvimento de marca para clínica ortopédica, com foco em modernidade e tecnologia. Inclui aplicação em uniformes, fachada e material digital.",
      galeria_de_foto: [
        "https://via.placeholder.com/600x400/FF9025/ffffff?text=Clínica+São+Lucas+1",
        "https://via.placeholder.com/600x400/FF9025/ffffff?text=Clínica+São+Lucas+2",
        "https://via.placeholder.com/600x400/FF9025/ffffff?text=Clínica+São+Lucas+3"
      ],
      url_do_video: "",
      categories: ["Branding Médico"],
      tags: ["Ortopedia", "Modernidade", "Tecnologia", "Uniforme"]
    },
    {
      id: 3,
      title: "Dr. Maria Santos - Dermatologia",
      description: "Branding sofisticado para dermatologista, com paleta de cores elegante e aplicação em consultório, cartão de visita e redes sociais.",
      galeria_de_foto: [
        "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Dr.+Maria+Santos+1",
        "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Dr.+Maria+Santos+2",
        "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Dr.+Maria+Santos+3"
      ],
      url_do_video: "",
      categories: ["Branding Médico"],
      tags: ["Dermatologia", "Elegância", "Sofisticação", "Consultório"]
    }
  ],
  "redes-sociais": [
    {
      id: 4,
      title: "Clínica Cardíaca - Instagram",
      description: "Gestão completa do Instagram para clínica cardíaca, com conteúdo educativo sobre saúde do coração, stories informativos e engajamento com pacientes.",
      galeria_de_foto: [
        "https://via.placeholder.com/600x400/660042/ffffff?text=Instagram+Cardíaca+1",
        "https://via.placeholder.com/600x400/660042/ffffff?text=Instagram+Cardíaca+2",
        "https://via.placeholder.com/600x400/660042/ffffff?text=Instagram+Cardíaca+3"
      ],
      url_do_video: "",
      categories: ["Redes Sociais"],
      tags: ["Instagram", "Educativo", "Engajamento", "Saúde"]
    },
    {
      id: 5,
      title: "Dr. Pedro Costa - LinkedIn",
      description: "Posicionamento profissional no LinkedIn para neurocirurgião, com artigos técnicos, participação em eventos médicos e networking estratégico.",
      galeria_de_foto: [
        "https://via.placeholder.com/600x400/FF9025/ffffff?text=LinkedIn+Dr.+Pedro+1",
        "https://via.placeholder.com/600x400/FF9025/ffffff?text=LinkedIn+Dr.+Pedro+2",
        "https://via.placeholder.com/600x400/FF9025/ffffff?text=LinkedIn+Dr.+Pedro+3"
      ],
      url_do_video: "",
      categories: ["Redes Sociais"],
      tags: ["LinkedIn", "Neurocirurgia", "Artigos", "Networking"]
    },
    {
      id: 6,
      title: "Clínica Pediátrica - Facebook",
      description: "Gestão do Facebook para clínica pediátrica, com posts interativos, dicas para pais, lives educativas e comunidade engajada.",
      galeria_de_foto: [
        "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Facebook+Pediatria+1",
        "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Facebook+Pediatria+2",
        "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Facebook+Pediatria+3"
      ],
      url_do_video: "",
      categories: ["Redes Sociais"],
      tags: ["Facebook", "Pediatria", "Interativo", "Comunidade"]
    }
  ],
  sites: [
    {
      id: 7,
      title: "Clínica Cardíaca - Site Institucional",
      description: "Site profissional para clínica cardíaca, com design moderno, informações sobre procedimentos, equipe médica e agendamento online.",
      galeria_de_foto: [
        "https://via.placeholder.com/600x400/660042/ffffff?text=Site+Cardíaca+1",
        "https://via.placeholder.com/600x400/660042/ffffff?text=Site+Cardíaca+2",
        "https://via.placeholder.com/600x400/660042/ffffff?text=Site+Cardíaca+3"
      ],
      url_do_video: "",
      categories: ["Sites Médicos"],
      tags: ["Site Institucional", "Agendamento", "Equipe", "Procedimentos"]
    },
    {
      id: 8,
      title: "Dr. Ana Silva - Landing Page",
      description: "Landing page otimizada para conversão de consultas online, com formulário de contato, depoimentos e informações sobre especialidade.",
      galeria_de_foto: [
        "https://via.placeholder.com/600x400/FF9025/ffffff?text=Landing+Dr.+Ana+1",
        "https://via.placeholder.com/600x400/FF9025/ffffff?text=Landing+Dr.+Ana+2",
        "https://via.placeholder.com/600x400/FF9025/ffffff?text=Landing+Dr.+Ana+3"
      ],
      url_do_video: "",
      categories: ["Sites Médicos"],
      tags: ["Landing Page", "Conversão", "Formulário", "Depoimentos"]
    },
    {
      id: 9,
      title: "Clínica Ortopédica - E-commerce",
      description: "Site de e-commerce para venda de produtos ortopédicos, com catálogo completo, carrinho de compras e integração com pagamentos.",
      galeria_de_foto: [
        "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=E-commerce+Ortopedia+1",
        "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=E-commerce+Ortopedia+2",
        "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=E-commerce+Ortopedia+3"
      ],
      url_do_video: "",
      categories: ["Sites Médicos"],
      tags: ["E-commerce", "Produtos", "Carrinho", "Pagamentos"]
    }
  ],
  "trafego-pago": [
    {
      id: 10,
      title: "Campanha Google Ads - Cardiologia",
      description: "Campanha de Google Ads para clínica cardíaca, com segmentação por localização, palavras-chave médicas e landing pages otimizadas.",
      galeria_de_foto: [
        "https://via.placeholder.com/600x400/660042/ffffff?text=Google+Ads+Cardio+1",
        "https://via.placeholder.com/600x400/660042/ffffff?text=Google+Ads+Cardio+2",
        "https://via.placeholder.com/600x400/660042/ffffff?text=Google+Ads+Cardio+3"
      ],
      url_do_video: "",
      categories: ["Tráfego Pago"],
      tags: ["Google Ads", "Segmentação", "Palavras-chave", "Landing"]
    },
    {
      id: 11,
      title: "Campanha Facebook Ads - Dermatologia",
      description: "Campanha no Facebook Ads para dermatologista, com público-alvo específico, criativos atrativos e remarketing estratégico.",
      galeria_de_foto: [
        "https://via.placeholder.com/600x400/FF9025/ffffff?text=Facebook+Ads+Derma+1",
        "https://via.placeholder.com/600x400/FF9025/ffffff?text=Facebook+Ads+Derma+2",
        "https://via.placeholder.com/600x400/FF9025/ffffff?text=Facebook+Ads+Derma+3"
      ],
      url_do_video: "",
      categories: ["Tráfego Pago"],
      tags: ["Facebook Ads", "Público-alvo", "Criativos", "Remarketing"]
    },
    {
      id: 12,
      title: "Campanha Instagram Ads - Pediatria",
      description: "Campanha no Instagram Ads para clínica pediátrica, com stories ads, carrosséis informativos e direcionamento para WhatsApp.",
      galeria_de_foto: [
        "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Instagram+Ads+Pediatria+1",
        "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Instagram+Ads+Pediatria+2",
        "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Instagram+Ads+Pediatria+3"
      ],
      url_do_video: "",
      categories: ["Tráfego Pago"],
      tags: ["Instagram Ads", "Stories", "Carrossel", "WhatsApp"]
    }
  ],
  videos: [
    {
      id: 13,
      title: "Vídeo Institucional - Clínica Cardíaca",
      description: "Vídeo institucional emocionante para clínica cardíaca, mostrando a equipe, instalações e compromisso com a saúde dos pacientes.",
      galeria_de_foto: [
        "https://via.placeholder.com/600x400/660042/ffffff?text=Vídeo+Cardíaca+1",
        "https://via.placeholder.com/600x400/660042/ffffff?text=Vídeo+Cardíaca+2",
        "https://via.placeholder.com/600x400/660042/ffffff?text=Vídeo+Cardíaca+3"
      ],
      url_do_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      categories: ["Vídeos"],
      tags: ["Institucional", "Emocional", "Equipe", "Instalações"]
    },
    {
      id: 14,
      title: "Vídeo Educativo - Dr. Carlos",
      description: "Série de vídeos educativos sobre saúde mental, com dicas práticas, explicações técnicas e engajamento com o público.",
      galeria_de_foto: [
        "https://via.placeholder.com/600x400/FF9025/ffffff?text=Vídeo+Educativo+1",
        "https://via.placeholder.com/600x400/FF9025/ffffff?text=Vídeo+Educativo+2",
        "https://via.placeholder.com/600x400/FF9025/ffffff?text=Vídeo+Educativo+3"
      ],
      url_do_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      categories: ["Vídeos"],
      tags: ["Educativo", "Saúde Mental", "Série", "Dicas"]
    },
    {
      id: 15,
      title: "Vídeo Depoimento - Pacientes",
      description: "Vídeo com depoimentos reais de pacientes, mostrando resultados, satisfação e confiança na clínica e equipe médica.",
      galeria_de_foto: [
        "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Depoimentos+1",
        "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Depoimentos+2",
        "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Depoimentos+3"
      ],
      url_do_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      categories: ["Vídeos"],
      tags: ["Depoimentos", "Resultados", "Satisfação", "Confiança"]
    }
  ]
}; 
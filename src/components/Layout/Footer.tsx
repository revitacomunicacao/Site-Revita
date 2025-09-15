import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import logo from "@/assets/logoRevitaComunicacao.png";
import iconRevita from "@/assets/iconeDevRevita.png";

export const Footer = () => {
  return (
    <footer id="contato" className="bg-[#0e0e0e] text-white relative overflow-hidden">
      {/* Gradiente de fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#660042]/20 via-[#0e0e0e] to-[#0e0e0e]" />
      
      <div className="relative z-10">
        {/* Conteúdo principal */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            
            {/* Coluna 1: Logo e Sobre */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="mb-6">
                <img src={logo} alt="Revita Comunicação" className="h-10 sm:h-12 w-auto" />
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Somos uma agência de marketing digital focada em resultados. 
                Transformamos marcas através de estratégias inovadoras e 
                soluções personalizadas.
              </p>
              <div className="flex flex-row gap-2 mb-6 items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10">
                  <img src={iconRevita} alt="Revita Comunicação" className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Desenvolvido por <br /> <span className="text-secondary">Revita Comunicação</span>
                  </p>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <a href="https://www.instagram.com/revita.comunicacao/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 bg-[#660042] rounded-full flex items-center justify-center hover:bg-secondary transition-colors duration-300">
                  <FaInstagram className="text-white text-sm sm:text-base" />
                </a>
                <a href="https://www.facebook.com/people/Revita-Comunica%C3%A7%C3%A3o/61571725990042/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 bg-[#660042] rounded-full flex items-center justify-center hover:bg-secondary transition-colors duration-300">
                  <FaFacebook className="text-white text-sm sm:text-base" />
                </a>
                <a href="https://www.linkedin.com/company/revita-comunicacao?originalSubdomain=br" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 bg-[#660042] rounded-full flex items-center justify-center hover:bg-secondary transition-colors duration-300">
                  <FaLinkedin className="text-white text-sm sm:text-base" />
                </a>
                <a href="https://api.whatsapp.com/send/?phone=5534996374463&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 bg-[#660042] rounded-full flex items-center justify-center hover:bg-secondary transition-colors duration-300">
                  <FaWhatsapp className="text-white text-sm sm:text-base" />
                </a>
              </div>
            </div>

            {/* Coluna 2: Links Rápidos */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-secondary">Links Rápidos</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="/desenvolvimento/revita/agencia" className="text-white/70 hover:text-secondary transition-colors duration-300 text-sm">
                    A Agência
                  </a>
                </li>
                <li>
                  <a href="/desenvolvimento/revita/portfolio" className="text-white/70 hover:text-secondary transition-colors duration-300 text-sm">
                    Portfólio
                  </a>
                </li>
                <li>
                  <a href="/desenvolvimento/revita/blog" className="text-white/70 hover:text-secondary transition-colors duration-300 text-sm">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/desenvolvimento/revita/contato" className="text-white/70 hover:text-secondary transition-colors duration-300 text-sm">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="/desenvolvimento/revita/politicas-de-privacidade" className="text-white/70 hover:text-secondary transition-colors duration-300 text-sm">
                    Política de Privacidade
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Serviços */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-secondary">Nossos Serviços</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="/desenvolvimento/revita/servicos#inteligencia-artificial" className="text-white/70 hover:text-secondary transition-colors duration-300 text-sm">
                  Inteligência Artificial
                  </a>
                </li>
                <li>
                  <a href="/desenvolvimento/revita/servicos#branding" className="text-white/70 hover:text-secondary transition-colors duration-300 text-sm">
                  Branding
                  </a>
                </li>
                <li>
                  <a href="/desenvolvimento/revita/servicos#publicidade" className="text-white/70 hover:text-secondary transition-colors duration-300 text-sm">
                  Publicidade
                  </a>
                </li>
                <li>
                  <a href="/desenvolvimento/revita/servicos#redes-sociais" className="text-white/70 hover:text-secondary transition-colors duration-300 text-sm">
                  Redes Sociais
                  </a>
                </li>
                <li>
                  <a href="/desenvolvimento/revita/servicos#sites" className="text-white/70 hover:text-secondary transition-colors duration-300 text-sm">
                  Sites
                  </a>
                </li>
                <li>
                  <a href="/desenvolvimento/revita/servicos#trafego-pago" className="text-white/70 hover:text-secondary transition-colors duration-300 text-sm">
                  Tráfego pago
                  </a>
                </li>
                <li>
                  <a href="/desenvolvimento/revita/servicos#seo" className="text-white/70 hover:text-secondary transition-colors duration-300 text-sm">
                  SEO
                  </a>
                </li>
                <li>
                  <a href="/desenvolvimento/revita/servicos#conteudo-inbound" className="text-white/70 hover:text-secondary transition-colors duration-300 text-sm">
                  Conteúdo e Inbound
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 4: Contato e Newsletter */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-secondary">Contato</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="text-secondary mt-1 flex-shrink-0" size={16} />
                  <div>
                    <p className="text-white/70 text-sm">contato@revitacomunicacao.com.br</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <a href="https://api.whatsapp.com/send/?phone=5534996374463&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="flex flex-row gap-2">
                    <Phone className="text-secondary mt-1 flex-shrink-0" size={16} />
                    <FaWhatsapp className="text-secondary mt-1 flex-shrink-0" size={16} />
                    <div>
                      <p className="text-white/70 text-sm">(34) 99637-4463</p>
                    </div>
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-secondary mt-1 flex-shrink-0" size={16} />
                  <div>
                    <p className="text-white/70 text-sm">Rua Padre Zeferino, 819</p>
                    <p className="text-white/70 text-sm">Uberaba - MG</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-secondary mt-1 flex-shrink-0" size={16} />
                  <div>
                    <p className="text-white/70 text-sm">Seg - Qui: 8h30 às 18h</p>
                    <p className="text-white/70 text-sm">Sex: 8h30 às 17h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Linha separadora */}
        <div className="border-t border-[#660042]/30" />

        {/* Copyright */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-xs sm:text-sm text-center sm:text-left">
              © 2025 Revita Comunicação. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="/desenvolvimento/revita/politicas-de-privacidade" className="text-white/60 hover:text-secondary transition-colors duration-300">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
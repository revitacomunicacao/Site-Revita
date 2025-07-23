import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import logo from "@/assets/logoRevitaComunicação.png";

export const Footer = () => {
  return (
    <footer className="bg-[#0e0e0e] text-white relative overflow-hidden">
      {/* Gradiente de fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#660042]/20 via-[#0e0e0e] to-[#0e0e0e]" />
      
      <div className="relative z-10">
        {/* Conteúdo principal */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Coluna 1: Logo e Sobre */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <img src={logo} alt="Revita Comunicação" className="h-12 w-auto" />
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Somos uma agência de marketing digital focada em resultados. 
                Transformamos marcas através de estratégias inovadoras e 
                soluções personalizadas.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-[#660042] rounded-full flex items-center justify-center hover:bg-setext-secondary transition-colors duration-300">
                  <FaInstagram className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-[#660042] rounded-full flex items-center justify-center hover:bg-setext-secondary transition-colors duration-300">
                  <FaFacebook className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-[#660042] rounded-full flex items-center justify-center hover:bg-setext-secondary transition-colors duration-300">
                  <FaLinkedin className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-[#660042] rounded-full flex items-center justify-center hover:bg-setext-secondary transition-colors duration-300">
                  <FaWhatsapp className="text-white" />
                </a>
              </div>
            </div>

            {/* Coluna 2: Links Rápidos */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-secondary">Links Rápidos</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/agencia" className="text-white/70 hover:text-secondary transition-colors duration-300 text-sm">
                    A Agência
                  </a>
                </li>
                <li>
                  <a href="/servicos" className="text-white/70 hover:text-secondary transition-colors duration-300 text-sm">
                    Nossos Serviços
                  </a>
                </li>
                <li>
                  <a href="/portfolio" className="text-white/70 hover:text-secondary transition-colors duration-300 text-sm">
                    Portfólio
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-white/70 hover:text-secondary transition-colors duration-300 text-sm">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/contato" className="text-white/70 hover:text-secondary transition-colors duration-300 text-sm">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="/politica-privacidade" className="text-white/70 hover:text-secondary transition-colors duration-300 text-sm">
                    Política de Privacidade
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Serviços */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-secondary">Nossos Serviços</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-white/70 hover:text-secondary transition-colors duration-300 text-sm">
                    Marketing Digital
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-secondary transition-colors duration-300 text-sm">
                    Criação de Sites
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-secondary transition-colors duration-300 text-sm">
                    SEO e Tráfego Pago
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-secondary transition-colors duration-300 text-sm">
                    Gestão de Redes Sociais
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-secondary transition-colors duration-300 text-sm">
                    Branding e Identidade Visual
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-secondary transition-colors duration-300 text-sm">
                    Inbound Marketing
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 4: Contato e Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-secondary">Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="text-secondary mt-1 flex-shrink-0" size={16} />
                  <div>
                    <p className="text-white/70 text-sm">contato@revitacomunicacao.com.br</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-secondary mt-1 flex-shrink-0" size={16} />
                  <div>
                    <p className="text-white/70 text-sm">(34) 99710-0854</p>
                    <p className="text-white/70 text-sm">(34) 99710-0854</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-secondary mt-1 flex-shrink-0" size={16} />
                  <div>
                    <p className="text-white/70 text-sm">Uberlândia - MG</p>
                    <p className="text-white/70 text-sm">Brasil</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-secondary mt-1 flex-shrink-0" size={16} />
                  <div>
                    <p className="text-white/70 text-sm">Seg - Sex: 8h às 18h</p>
                    <p className="text-white/70 text-sm">Sáb: 8h às 12h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Linha separadora */}
        <div className="border-t border-[#660042]/30" />

        {/* Copyright */}
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 Revita Comunicação. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/termos" className="text-white/60 hover:text-secondary transition-colors duration-300">
                Termos de Uso
              </a>
              <a href="/privacidade" className="text-white/60 hover:text-secondary transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="/cookies" className="text-white/60 hover:text-secondary transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
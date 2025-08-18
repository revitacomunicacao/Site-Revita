import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";
import { Mail, Phone, Menu } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaPlay, FaRocket, FaWhatsapp } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { FaBoltLightning } from "react-icons/fa6";
import { IoDesktop } from "react-icons/io5";
import logo from "@/assets/logoRevitaComunicacao.png";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";

export const FloatingHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Aparece após 200px de scroll
      setIsVisible(scrollTop > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Remove o foco quando o Sheet é fechado
  useEffect(() => {
    if (!isSheetOpen) {
      // Remove o foco do botão após um pequeno delay
      const timer = setTimeout(() => {
        const button = document.querySelector('[data-radix-collection-item]') as HTMLElement;
        if (button) {
          button.blur();
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [isSheetOpen]);

  // Função para rolagem suave com offset
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      const headerHeight = 120; // Altura aproximada do header
      const targetPosition = contactSection.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Ícone de menu personalizado com as cores do site
  const CustomMenuIcon = () => (
    <div className="flex flex-col gap-1.5 items-end justify-center w-7 h-7">
      {/* Linha pequena - cor primária */}
      <div className="w-5 h-[4px] bg-[#660042] rounded-full transition-all duration-300" />
      {/* Linha média - cor secundária */}
      <div className="w-6 h-[4px] bg-[#FF9025] rounded-full transition-all duration-300" />
      {/* Linha grande - cor primária */}
      <div className="w-7 h-[4px] bg-[#660042] rounded-full transition-all duration-300" />
    </div>
  );

  return (
    <div className={`fixed top-0 right-0 z-[50000] transition-all duration-700 ease-out ${
      isVisible 
        ? 'translate-x-0 opacity-100' 
        : 'translate-x-full opacity-0 pointer-events-none'
    }`}>
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <button className="w-20 h-20 bg-[#242424] backdrop-blur-md border-l border-t border-[#660042]/30 rounded-bl-[80%] flex items-center justify-center hover:bg-[#660042]/20 hover:border-[#660042]/50 transition-all duration-300 shadow-lg hover:shadow-xl group focus:outline-none focus:ring-0 focus:ring-offset-0">
            <CustomMenuIcon />
          </button>
        </SheetTrigger>
        
        <SheetContent side="right" className="w-[260px] sm:w-[280px] md:w-[300px] bg-[#0e0e0e] border-l border-[#660042] z-[50001]">
          <SheetHeader className="border-b border-[#660042] pb-4 rounded-3xl">
            <SheetTitle className="text-white text-left">
              <img src={logo} alt="logo" className="h-8 w-auto" />
            </SheetTitle>
          </SheetHeader>

          {/* Menu de Navegação */}
          <ScrollArea className="h-[calc(100vh-120px)] pr-4">
            <div className="flex flex-col space-y-6 mt-6 px-4 pb-24">
              {/* Links Principais */}
              <div className="space-y-4">
                <h3 className="text-[#FF9025] font-semibold text-sm uppercase tracking-wider">Menu</h3>
                <div className="space-y-3">
                  <SheetClose asChild>
                    <Link to="/agencia" className="block text-white hover:text-[#FF9025] transition-colors duration-200 py-2 text-lg">
                      A Agência
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/portfolio" className="block text-white hover:text-[#FF9025] transition-colors duration-200 py-2 text-lg">
                      Portfolio
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <a href="#contato" className="block text-white hover:text-[#FF9025] transition-colors duration-200 py-2 text-lg cursor-pointer" onClick={scrollToContact}>
                      Contato
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/blog" className="block text-white hover:text-[#FF9025] transition-colors duration-200 py-2 text-lg">
                      Blog
                    </Link>
                  </SheetClose>
                </div>
              </div>

              {/* Soluções */}
              <div className="space-y-4">
                <h3 className="text-[#FF9025] font-semibold text-sm uppercase tracking-wider">Soluções</h3>
                <div className="space-y-3">
                  <SheetClose asChild>
                    <Link to="/servicos#branding-medico" className="flex items-center gap-3 text-white hover:text-[#FF9025] transition-colors duration-200 py-2">
                      <HiSpeakerphone className="text-purple-700 text-lg" />
                      <span>Branding Médico</span>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/servicos#publicidade-medica" className="flex items-center gap-3 text-white hover:text-[#FF9025] transition-colors duration-200 py-2">
                      <FaBoltLightning className="text-yellow-500 text-lg" />
                      <span>Publicidade Médica</span>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/servicos#redes-sociais" className="flex items-center gap-3 text-white hover:text-[#FF9025] transition-colors duration-200 py-2">
                      <FaPlay className="text-cyan-600 text-lg" />
                      <span>Redes Sociais</span>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/servicos#sites-medicos" className="flex items-center gap-3 text-white hover:text-[#FF9025] transition-colors duration-200 py-2">
                      <IoDesktop className="text-green-700 text-lg" />
                      <span>Sites Médicos</span>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/servicos#trafego-pago" className="flex items-center gap-3 text-white hover:text-[#FF9025] transition-colors duration-200 py-2">
                      <FaRocket className="text-amber-700 text-lg" />
                      <span>Tráfego Pago</span>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/servicos#seo-medico" className="flex items-center gap-3 text-white hover:text-[#FF9025] transition-colors duration-200 py-2">
                      <HiSpeakerphone className="text-blue-600 text-lg" />
                      <span>SEO Médico</span>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/servicos#conteudo-medico" className="flex items-center gap-3 text-white hover:text-[#FF9025] transition-colors duration-200 py-2">
                      <FaPlay className="text-green-600 text-lg" />
                      <span>Conteúdo Médico</span>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/servicos#inbound-medico" className="flex items-center gap-3 text-white hover:text-[#FF9025] transition-colors duration-200 py-2">
                      <FaRocket className="text-purple-600 text-lg" />
                      <span>Inbound Médico</span>
                    </Link>
                  </SheetClose>
                </div>
              </div>

              {/* Contato */}
              <div className="space-y-4">
                <h3 className="text-[#FF9025] font-semibold text-sm uppercase tracking-wider">Contato</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-white">
                    <Mail className="text-[#FF9025] text-lg mt-1 flex-shrink-0" />
                    <span className="text-xs break-all leading-relaxed">contato@revitacomunicacao.com.br</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <Phone className="text-[#FF9025] text-lg" />
                    <span className="text-sm">(34) 99637-4463</span>
                  </div>
                                           <div className="flex items-center gap-3 text-white">
                           <a href="https://wa.me/5534996374463" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-[#FF9025] transition-colors duration-200">
                             <FaWhatsapp className="text-[#FF9025] text-lg" />
                             <span className="text-sm">(34) 99637-4463</span>
                           </a>
                         </div>
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="space-y-4">
                <h3 className="text-[#FF9025] font-semibold text-sm uppercase tracking-wider">Redes Sociais</h3>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/revita.comunicacao/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF9025] transition-colors duration-200">
                    <FaInstagram className="text-2xl" />
                  </a>
                  <a href="https://www.facebook.com/people/Revita-Comunica%C3%A7%C3%A3o/61571725990042/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF9025] transition-colors duration-200">
                    <FaFacebook className="text-2xl" />
                  </a>
                  <a href="https://www.linkedin.com/company/revita-comunicacao?originalSubdomain=br" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF9025] transition-colors duration-200">
                    <FaLinkedin className="text-2xl" />
                  </a>
                                     <a href="https://wa.me/5534996374463" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF9025] transition-colors duration-200">
                     <FaWhatsapp className="text-2xl" />
                   </a>
                </div>
              </div>

              {/* Botão CTA */}
              <div className="pt-4 border-t border-[#660042] pb-6">
                <SheetClose asChild>
                  <button className="w-full rounded-full bg-[#FF9025] text-[#660042] font-bold py-3 px-6 flex items-center justify-center gap-2 hover:bg-white hover:text-[#FF9025] transition-all duration-300">
                    Fale Conosco
                    <HiOutlineChatBubbleOvalLeftEllipsis size={20} />
                  </button>
                </SheetClose>
              </div>
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
};

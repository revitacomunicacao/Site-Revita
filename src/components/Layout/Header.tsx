import { Mail, Phone, Menu } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaPlay, FaRocket, FaWhatsapp } from "react-icons/fa";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { HiSpeakerphone } from "react-icons/hi";
import { FaBoltLightning } from "react-icons/fa6";
import { IoDesktop } from "react-icons/io5";
import logo from "@/assets/logoRevitaComunicacao.png"
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { useEffect, useRef, useState } from "react";
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

export const Header = () => {
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

  return (
    <header className="text-white">
      {/* HEADER DESKTOP */}
      <div className="hidden sm:flex flex-col">
        {/* HEADER SUPERIOR */}
        <div className="hidden sm:flex justify-center items-center bg-[#0e0e0e]">
          <div className="w-full max-w-6xl flex justify-between py-2 px-4">
            {/* Contato */}
            <div className="flex gap-10">
              <div className="flex items-center gap-2">
                <Mail className="text-secondary" size={15} />
                <p className="text-[12px]">contato@revitacomunicacao.com.br</p>
              </div>
              <div className="flex flex-row gap-2">
                <div className="flex items-center gap-2">
                  <a href="https://wa.me/5534996374463">
                    <Phone className="text-secondary" size={15} />
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <a href="https://wa.me/5534996374463" className="flex flex-row gap-2
                  justify-center items-center">
                    <FaWhatsapp className="text-secondary" size={15} />
                  <p className="text-[12px]">(34) 99637-4463</p>
                  </a>
                </div>
              </div>
            </div>
            {/* Redes Sociais */}
            <div className="flex gap-4">
              <a href="https://www.instagram.com/revita.comunicacao/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition duration-300 ease-in-out">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="https://www.facebook.com/people/Revita-Comunica%C3%A7%C3%A3o/61571725990042/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition duration-300 ease-in-out">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="https://www.linkedin.com/company/revita-comunicacao?originalSubdomain=br" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition duration-300 ease-in-out">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="https://wa.me/5534996374463" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition duration-300 ease-in-out">
                <FaWhatsapp className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* MENU DE NAVEGAÇÃO */}
        <div
          className="w-full z-30 py-4 bg-[#660042]"
          style={{
            // background: 'rgba(26, 26, 26, 0.95)',
            // backdropFilter: 'blur(20px)',
            // borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            // boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',

            // background: 'linear-gradient(180deg, #0e0e0e 0%, #660042 100%)',
            // boxShadow: 'none',
          }}
        >
          <div className="flex flex-row justify-center items-center gap-15 max-w-6xl mx-auto w-full px-4">
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src={logo}
                  alt="logo"
                />
              </Link>
            </div>
            <nav className="flex-1">
              <NavigationMenu viewport={false} >
                <NavigationMenuList className="flex flex-row gap-8 items-center justify-center w-full">
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-gradient-hover whitespace-nowrap">
                      <Link to="/agencia" className="text-[18px]">
                        A Agência
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-[#11111100] text-gradient-hover">
                      <Link to={"/servicos"} className="text-[18px]">
                        Soluções
                      </Link>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="p-0 border-none ">
                      <div className="flex flex-col gap-3 bg-[#29003c] w-[300px] p-2 rounded-1xl">
                        <div>
                          <Link to="/servicos#branding-medico" className="text-white flex gap-2 flex-row items-center p-2 rounded-2xl hover:bg-[#111522] transition duration-300 ease-in-out cursor-pointer">
                            <HiSpeakerphone className="text-purple-700" />
                            Branding
                          </Link>
                        </div>
                        <Link to="/servicos#publicidade-medica" className="text-white flex gap-2 flex-row items-center p-2 rounded-2xl hover:bg-[#111522] transition duration-300 ease-in-out cursor-pointer">
                          <FaBoltLightning className="text-yellow-500" />
                          Publicidade
                        </Link>
                        <Link to="/servicos#redes-sociais" className="text-white flex gap-2 flex-row items-center p-2 rounded-2xl hover:bg-[#111522] transition duration-300 ease-in-out cursor-pointer">
                          <FaPlay className="text-cyan-600" />
                          Redes Sociais
                        </Link>
                        <Link to="/servicos#sites-medicos" className="text-white flex gap-2 flex-row items-center p-2 rounded-2xl hover:bg-[#111522] transition duration-300 ease-in-out cursor-pointer">
                          <IoDesktop className="text-green-700" />
                          Sites
                        </Link>
                        <Link to="/servicos#trafego-pago" className="text-white flex gap-2 flex-row items-center p-2 rounded-2xl hover:bg-[#111522] transition duration-300 ease-in-out cursor-pointer">
                          <FaRocket className="text-amber-700" />
                          Tráfego Pago
                        </Link>
                        <Link to="/servicos#seo-medico" className="text-white flex gap-2 flex-row items-center p-2 rounded-2xl hover:bg-[#111522] transition duration-300 ease-in-out cursor-pointer">
                          <HiSpeakerphone className="text-blue-600" />
                          SEO
                        </Link>
                        <Link to="/servicos#conteudo-medico" className="text-white flex gap-2 flex-row items-center p-2 rounded-2xl hover:bg-[#111522] transition duration-300 ease-in-out cursor-pointer">
                          <FaPlay className="text-green-600" />
                          Conteúdo
                        </Link>
                        <Link to="/servicos#inbound-medico" className="text-white flex gap-2 flex-row items-center p-2 rounded-2xl hover:bg-[#111522] transition duration-300 ease-in-out cursor-pointer">
                          <FaRocket className="text-purple-600" />
                          Inbound
                        </Link>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-gradient-hover">
                      <Link to="/portfolio" className="text-[18px]">
                        Portfolio
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-gradient-hover">
                      <a href="#contato" onClick={scrollToContact} className="text-[18px] cursor-pointer">
                        Contato
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-gradient-hover">
                      <Link to="/blog" className="text-[18px]">
                        Blog
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
            <div className="flex-shrink-0">
              <Link to={"https://api.whatsapp.com/send/?phone=5534996374463&text&type=phone_number&app_absent=0"}>
                <button className="rounded-full bg-secondary px-5 flex gap-2 items-center hover:bg-white hover:text-secondary cursor-pointer py-1 text-base">
                  Fale Conosco
                  <HiOutlineChatBubbleOvalLeftEllipsis size={20} />
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div>

      <div className="sm:hidden">
        {/* header mob */}
        <div
          className="w-full z-[230001] py-4"
          style={{
            background: 'rgba(26, 26, 26, 0.9)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
          }}
        >
          <div className="flex items-center justify-between px-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src={logo}
                  alt="logo"
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            {/* menu mob */}
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200">
                  <Menu className="h-6 w-6 text-white" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[260px] sm:w-[280px] md:w-[300px] bg-[#0e0e0e] border-l border-[#660042] z-[50200]">
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
                          <a href="#contato" onClick={scrollToContact} className="block text-white hover:text-[#FF9025] transition-colors duration-200 py-2 text-lg cursor-pointer">
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
                          <Link to="/servicos#branding" className="flex items-center gap-3 text-white hover:text-[#FF9025] transition-colors duration-200 py-2">
                            <HiSpeakerphone className="text-purple-700 text-lg" />
                            <span>Branding</span>
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link to="/servicos#publicidade" className="flex items-center gap-3 text-white hover:text-[#FF9025] transition-colors duration-200 py-2">
                            <FaBoltLightning className="text-yellow-500 text-lg" />
                            <span>Publicidade</span>
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link to="/servicos#redes-sociais" className="flex items-center gap-3 text-white hover:text-[#FF9025] transition-colors duration-200 py-2">
                            <FaPlay className="text-cyan-600 text-lg" />
                            <span>Redes Sociais</span>
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link to="/servicos#sites" className="flex items-center gap-3 text-white hover:text-[#FF9025] transition-colors duration-200 py-2">
                            <IoDesktop className="text-green-700 text-lg" />
                            <span>Sites</span>
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link to="/servicos#trafego-pago" className="flex items-center gap-3 text-white hover:text-[#FF9025] transition-colors duration-200 py-2">
                            <FaRocket className="text-amber-700 text-lg" />
                            <span>Tráfego Pago</span>
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link to="/servicos#seo" className="flex items-center gap-3 text-white hover:text-[#FF9025] transition-colors duration-200 py-2">
                            <HiSpeakerphone className="text-blue-600 text-lg" />
                            <span>SEO</span>
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link to="/servicos#conteudo" className="flex items-center gap-3 text-white hover:text-[#FF9025] transition-colors duration-200 py-2">
                            <FaPlay className="text-green-600 text-lg" />
                            <span>Conteúdo</span>
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link to="/servicos#inbound" className="flex items-center gap-3 text-white hover:text-[#FF9025] transition-colors duration-200 py-2">
                            <FaRocket className="text-purple-600 text-lg" />
                            <span>Inbound</span>
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
                        <a href="https://wa.me/+5534996374465" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF9025] transition-colors duration-200">
                          <FaWhatsapp className="text-2xl" />
                        </a>
                      </div>
                    </div>

                    {/* Botão CTA */}
                    <div className="pt-4 border-t border-[#660042] pb-6">
                      <SheetClose asChild>
                        <a href="https://api.whatsapp.com/send/?phone=5534996374463&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="w-full rounded-full bg-[#FF9025] text-[#660042] font-bold py-3 px-6 flex items-center justify-center gap-2 hover:bg-white hover:text-[#FF9025] transition-all duration-300">
                          Fale Conosco
                          <HiOutlineChatBubbleOvalLeftEllipsis size={20} />
                        </a>
                      </SheetClose>
                    </div>
                  </div>
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Espaçador removido - header não é mais fixo */}
      </div>
    </header>
  );
};

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
import logo from "@/assets/logoRevitaComunicação.png"
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
  const [showNav, setShowNav] = useState(true);
  const [isFixed, setIsFixed] = useState(false);
  const lastScrollY = useRef(0);
  const headerSuperiorHeight = 40; 

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > headerSuperiorHeight) {
        setShowNav(false); // Rolando para baixo, esconde
      } else {
        setShowNav(true); // Rolando para cima, mostra
      }
      setIsFixed(currentScrollY > headerSuperiorHeight);
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="text-white">
      {/* HEADER DESKTOP */}
      <div className="hidden sm:flex flex-col">
        {/* HEADER SUPERIOR */}
        <div className="hidden sm:flex justify-center items-center bg-[#0e0e0e]">
          <div className="w-full max-w-6xl flex justify-between py-2 px-4">
            {/* Contato */}
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <Mail className="text-secondary" size={15} />
                <p className="text-[12px]">contato@revitacomunicacao.com.br</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="text-secondary" size={15} />
                <p className="text-[12px]">(34) 997100854</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="text-secondary" size={15} />
                <p className="text-[12px]">(34) 997100854</p>
              </div>
            </div>
            {/* Redes Sociais */}
            <div className="flex gap-4">
              <FaInstagram className="text-2xl hover:text-secondary transition duration-300 ease-in-out" />
              <FaFacebook className="text-2xl hover:text-secondary transition duration-300 ease-in-out" />
              <FaLinkedin className="text-2xl hover:text-secondary transition duration-300 ease-in-out" />
              <FaWhatsapp className="text-2xl hover:text-secondary transition duration-300 ease-in-out" />
            </div>
          </div>
        </div>

        {/* MENU DE NAVEGAÇÃO */}
        <div
          className={`w-full z-30 transition-all duration-500 ease-in-out
            relative
            ${showNav ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}
          `}
          style={{
            background: 'linear-gradient(180deg, #0e0e0e 0%, #660042 100%)',
            boxShadow: 'none',
          }}
        >
          <div className="flex flex-row justify-center items-center py-4 gap-15 max-w-6xl mx-auto w-full">
            <div className="flex-shrink-0">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <nav className="flex-1">
              <NavigationMenu viewport={false} >
                <NavigationMenuList className="flex flex-row gap-8 items-center justify-center w-full">

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-[18px] text-gradient-hover whitespace-nowrap">
                      <Link to="/agencia">A Agencia</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-[#11111100] text-[18px] text-gradient-hover">
                      <Link to={"/servicos"}>
                        Serviços
                      </Link>
                      </NavigationMenuTrigger>
                    <NavigationMenuContent className="p-0 border-none ">
                      <div className="flex flex-col gap-3 bg-[#29003c] w-[300px] p-2 rounded-1xl">
                        <div>
                          <Link to="/servicos#branding-medico" className="text-white flex gap-2 flex-row items-center p-2 rounded-2xl hover:bg-[#111522] transition duration-300 ease-in-out cursor-pointer"> 
                            <HiSpeakerphone className="text-purple-700" /> 
                            Branding Médico
                          </Link>
                        </div>
                        <Link to="/servicos#publicidade-medica" className="text-white flex gap-2 flex-row items-center p-2 rounded-2xl hover:bg-[#111522] transition duration-300 ease-in-out cursor-pointer"> 
                          <FaBoltLightning className="text-yellow-500" /> 
                          Publicidade Médica
                        </Link>
                        <Link to="/servicos#redes-sociais" className="text-white flex gap-2 flex-row items-center p-2 rounded-2xl hover:bg-[#111522] transition duration-300 ease-in-out cursor-pointer"> 
                          <FaPlay className="text-cyan-600" /> 
                          Redes Sociais
                        </Link>
                        <Link to="/servicos#sites-medicos" className="text-white flex gap-2 flex-row items-center p-2 rounded-2xl hover:bg-[#111522] transition duration-300 ease-in-out cursor-pointer">
                          <IoDesktop className="text-green-700" /> 
                          Sites Médicos
                        </Link>
                        <Link to="/servicos#trafego-pago" className="text-white flex gap-2 flex-row items-center p-2 rounded-2xl hover:bg-[#111522] transition duration-300 ease-in-out cursor-pointer">
                          <FaRocket className="text-amber-700" /> 
                          Tráfego Pago
                        </Link>
                        <Link to="/servicos#seo-medico" className="text-white flex gap-2 flex-row items-center p-2 rounded-2xl hover:bg-[#111522] transition duration-300 ease-in-out cursor-pointer">
                          <HiSpeakerphone className="text-blue-600" /> 
                          SEO Médico
                        </Link>
                        <Link to="/servicos#conteudo-medico" className="text-white flex gap-2 flex-row items-center p-2 rounded-2xl hover:bg-[#111522] transition duration-300 ease-in-out cursor-pointer">
                          <FaPlay className="text-green-600" /> 
                          Conteúdo Médico
                        </Link>
                        <Link to="/servicos#inbound-medico" className="text-white flex gap-2 flex-row items-center p-2 rounded-2xl hover:bg-[#111522] transition duration-300 ease-in-out cursor-pointer">
                          <FaRocket className="text-purple-600" /> 
                          Inbound Médico
                        </Link>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-[18px] text-gradient-hover">
                      <Link to="/portfolio">Portfolio</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-[18px] text-gradient-hover">
                      <Link to="/contato">Contato</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-[18px] text-gradient-hover">
                      <Link to="/blog">Blog</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                </NavigationMenuList>
              </NavigationMenu>
            </nav>
            <div className="flex-shrink-0">
              <button className="rounded-full bg-secondary px-5 py-1 flex gap-2 items-center hover:bg-white hover:text-secondary transition duration-300 ease-in-out cursor-pointer">
                Fale Conosco
                <HiOutlineChatBubbleOvalLeftEllipsis size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* HEADER MOBILE */}
      <div className="sm:hidden">
        {/* Header Mobile Fixo */}
        <div
          className={`w-full z-40 transition-all duration-500 ease-in-out fixed top-0
            ${showNav ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}
          `}
          style={{
            background: 'linear-gradient(180deg, #0e0e0e 0%, #660042 100%)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          }}
        >
          <div className="flex items-center justify-between px-4 py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img src={logo} alt="logo" className="h-12 w-auto" />
              </Link>
            </div>

            {/* Menu Hambúrguer */}
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200">
                  <Menu className="h-6 w-6 text-white" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-[#0e0e0e] border-l border-[#660042]">
                <SheetHeader className="border-b border-[#660042] pb-4">
                  <SheetTitle className="text-white text-left">
                    <img src={logo} alt="logo" className="h-8 w-auto" />
                  </SheetTitle>
                </SheetHeader>

                {/* Menu de Navegação */}
                <ScrollArea className="h-[calc(100vh-120px)]">
                  <div className="flex flex-col space-y-6 mt-6 px-4 pb-6">
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
                        <Link to="/contato" className="block text-white hover:text-[#FF9025] transition-colors duration-200 py-2 text-lg">
                          Contato
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link to="/blog" className="block text-white hover:text-[#FF9025] transition-colors duration-200 py-2 text-lg">
                          Blog
                        </Link>
                      </SheetClose>
                    </div>
                  </div>

                  {/* Serviços */}
                  <div className="space-y-4">
                    <h3 className="text-[#FF9025] font-semibold text-sm uppercase tracking-wider">Serviços</h3>
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
                      <div className="flex items-center gap-3 text-white">
                        <Mail className="text-[#FF9025] text-lg" />
                        <span className="text-sm">contato@revitacomunicacao.com.br</span>
                      </div>
                      <div className="flex items-center gap-3 text-white">
                        <Phone className="text-[#FF9025] text-lg" />
                        <span className="text-sm">(34) 997100854</span>
                      </div>
                      <div className="flex items-center gap-3 text-white">
                        <Phone className="text-[#FF9025] text-lg" />
                        <span className="text-sm">(34) 997100854</span>
                      </div>
                    </div>
                  </div>

                  {/* Redes Sociais */}
                  <div className="space-y-4">
                    <h3 className="text-[#FF9025] font-semibold text-sm uppercase tracking-wider">Redes Sociais</h3>
                    <div className="flex gap-4">
                      <a href="#" className="text-white hover:text-[#FF9025] transition-colors duration-200">
                        <FaInstagram className="text-2xl" />
                      </a>
                      <a href="#" className="text-white hover:text-[#FF9025] transition-colors duration-200">
                        <FaFacebook className="text-2xl" />
                      </a>
                      <a href="#" className="text-white hover:text-[#FF9025] transition-colors duration-200">
                        <FaLinkedin className="text-2xl" />
                      </a>
                      <a href="#" className="text-white hover:text-[#FF9025] transition-colors duration-200">
                        <FaWhatsapp className="text-2xl" />
                      </a>
                    </div>
                  </div>

                                     {/* Botão CTA */}
                   <div className="pt-4 border-t border-[#660042]">
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
        </div>

        {/* Espaçador para o conteúdo não ficar sob o header fixo */}
        <div className="h-20"></div>
      </div>
    </header>
  );
};

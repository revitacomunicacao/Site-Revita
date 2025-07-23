import { Mail, Phone } from "lucide-react";
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
            background: 'linear-gradient(10deg, #660042 0%, #0e0e0e 100%)',
            boxShadow: 'none',
          }}
        >
          <div className="flex flex-row justify-center items-center py-4 gap-15 max-w-6xl mx-auto w-full">
            <div className="flex-shrink-0">
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <nav className="flex-1">
              <NavigationMenu viewport={false} >
                <NavigationMenuList className="flex flex-row gap-8 items-center justify-center w-full">

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-[18px] text-gradient-hover whitespace-nowrap">
                      <a href="/agencia">A Agencia</a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-[#11111100] text-[18px] text-gradient-hover">Serviços</NavigationMenuTrigger>
                    <NavigationMenuContent className="p-0 border-none ">
                      <div className="flex flex-col gap-3 bg-[#29003c] w-[300px] p-2 rounded-1xl">
                        <div>
                          <a href="#" className="text-white flex gap-2 flex-row items-center p-2 rounded-2xl hover:bg-[#111522] transition duration-300 ease-in-out cursor-pointer"> <HiSpeakerphone className="text-purple-700" /> Marketing</a>
                        </div>
                        <a href="#" className="text-white flex gap-2 flex-row items-center p-2 rounded-2xl hover:bg-[#111522] transition duration-300 ease-in-out cursor-pointer"> <FaBoltLightning className="text-yellow-500" /> Perfomace</a>
                        <a href="#" className="text-white flex gap-2 flex-row items-center p-2 rounded-2xl hover:bg-[#111522] transition duration-300 ease-in-out cursor-pointer"> <FaPlay className="text-cyan-600" /> Programatica</a>
                        <a href="#" className="text-white flex gap-2 flex-row items-center p-2 rounded-2xl hover:bg-[#111522] transition duration-300 ease-in-out cursor-pointer"><IoDesktop className="text-green-700" /> Projetos</a>
                        <a href="#" className="text-white flex gap-2 flex-row items-center p-2 rounded-2xl hover:bg-[#111522] transition duration-300 ease-in-out cursor-pointer"><FaRocket className="not-placeholder-shown:text-amber-700" /> Seo</a>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-[18px] text-gradient-hover">
                      <a href="/portfolio">Portfolio</a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-[18px] text-gradient-hover">
                      <a href="/contato">Contato</a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-[18px] text-gradient-hover">
                      <a href="/blog">Blog</a>
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
      <div>

      </div>

    </header>
  );
};

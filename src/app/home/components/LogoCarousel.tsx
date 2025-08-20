import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clientes from "@/assets/clientes.svg"
import { AnimatedElement } from "@/components/AnimatedElement";

// Importando todas as logos
import logoCanabrava from "@/assets/logos/canabrava.png";
import logoCardioclinica from "@/assets/logos/cardioclinica.png";
import logoCartaovida from "@/assets/logos/cartaovida.png";
import logoCasaApoioDaniele from "@/assets/logos/casaapoiodanielle.png";
import logoCepaj from "@/assets/logos/cepaj.png";
import logoColorado from "@/assets/logos/colorado.png";
import logoCoperura from "@/assets/logos/coperura.png";
import logoCopyArt from "@/assets/logos/copyart.png";
import logoCriativa from "@/assets/logos/criativa.png";
import logoDecoracoesJunior from "@/assets/logos/decoracoesjunior.png";
import logoDemick from "@/assets/logos/demick.png";
import logoDiCasa from "@/assets/logos/dicasa.png";
import logoDrySolution from "@/assets/logos/drysolution.png";
import logoDuBrasil from "@/assets/logos/dubrasil.png";
import logoEdmarcos from "@/assets/logos/edmarcos.png";
import logoErs from "@/assets/logos/ers.png";
import logoEscon from "@/assets/logos/escon.png";
import logoEuroforte from "@/assets/logos/euroforte.png";
import logoFarmaciaVitae from "@/assets/logos/farmaciavitae.png";
import logoFermargraf from "@/assets/logos/fermargraf.png";
import logoGarra from "@/assets/logos/garra.png";
import logoHealth from "@/assets/logos/health.png";
import logoIad from "@/assets/logos/iad.png";
import logoIatbm from "@/assets/logos/ieatm.png";
import logoIcbeu from "@/assets/logos/icbeu.png";
import logoIntec from "@/assets/logos/intec.png";
import logoJaniPontes from "@/assets/logos/janiopontes.png";
import logoJockey from "@/assets/logos/jockey.png";
import logoJkBuffet from "@/assets/logos/jkbuffet.png";
import logoLarDaEsperanca from "@/assets/logos/lardaesperança.png";
import logoLaurene from "@/assets/logos/laurene.png";
import logoLemon from "@/assets/logos/lemon.png";
import logoLeone from "@/assets/logos/leone.png";
import logoMacaricoDeOuro from "@/assets/logos/maçaricodeouro.png";
import logoNavirai from "@/assets/logos/navirai.png";
import logoNetBovino from "@/assets/logos/netbovino.png";
import logoNetNucleo from "@/assets/logos/netnucleo.png";
import logoPodium from "@/assets/logos/podium.png";
import logoRadan from "@/assets/logos/radan.png";
import logoRafaelAndrade from "@/assets/logos/rafaelandrade.png";
import logoRecanto from "@/assets/logos/recanto.png";
import logoRecantoDosBaixinhos from "@/assets/logos/recantodosbaixinhos.png";
import logoRedeCaxuxa from "@/assets/logos/redecaxuxa.png";
import logoRental from "@/assets/logos/rental.png";
import logoResultMartins from "@/assets/logos/resultmartins.png";
import logoRicardoBrandolis from "@/assets/logos/ricardobrandolis.png";
import logoRoseDutra from "@/assets/logos/rosedutra.png";
import logoSaboardi from "@/assets/logos/saboardi.png";
import logoSaoBasilioFrango from "@/assets/logos/saobasiliofrango.png";
import logoSignorelliEDePaula from "@/assets/logos/signorelliedepaula.png";
import logoSigma from "@/assets/logos/sigma.png";
import logoSonoraves from "@/assets/logos/sonoraves.png";
import logoToptTech from "@/assets/logos/toptech.png";
import logoUbata from "@/assets/logos/ubata.png";
import logoUbemix from "@/assets/logos/ubemix.png";
import logoUberconta from "@/assets/logos/uberconta.png";
import logoUbox from "@/assets/logos/ubox.png";
import logoVillage from "@/assets/logos/village.png";
import logoVisiteUberaba from "@/assets/logos/visiteuberaba.png";
import logoVitaCenter from "@/assets/logos/vitacenter.png";

const logos = [
  { name: "Canabrava", logo: logoCanabrava, bg: "bg-gradient-to-br from-[#c5c5c5] to-[#fff]" },
  { name: "Cardioclinica", logo: logoCardioclinica, bg: "bg-gradient-to-br from-[#f7e4bc] to-[#fff]" },
  { name: "Cartaovida", logo: logoCartaovida, bg: "bg-gradient-to-br from-[#8f9eff] to-[#fff]" },
  { name: "Casa Apoio Danielle", logo: logoCasaApoioDaniele, bg: "bg-gradient-to-br from-[#FF8C00] to-[#fff]" },
  { name: "Cepaj", logo: logoCepaj, bg: "bg-gradient-to-br from-[#c5c5c5] to-[#fff]" },
  { name: "Colorado", logo: logoColorado, bg: "bg-gradient-to-br from-[#ff9393] to-[#fff]" },
  { name: "Coperura", logo: logoCoperura, bg: "bg-gradient-to-br from-[#99ff95] to-[#fff]" },
  { name: "CopyArt", logo: logoCopyArt, bg: "bg-gradient-to-br from-[#FF6B6B] to-[#fff]" },
  { name: "Criativa", logo: logoCriativa, bg: "bg-gradient-to-br from-[#a595ff] to-[#fff]" },
  { name: "Decoracoes Junior", logo: logoDecoracoesJunior, bg: "bg-gradient-to-br from-[#ff9595] to-[#fff]" },
  { name: "Demick", logo: logoDemick, bg: "bg-gradient-to-br from-[#fd5656] to-[#fff]" },
  { name: "Di Casa", logo: logoDiCasa, bg: "bg-gradient-to-br from-[#93ffcd] to-[#fff]" },
  { name: "Dry Solution", logo: logoDrySolution, bg: "bg-gradient-to-br from-[#ffa845] to-[#fff]" },
  { name: "Du Brasil", logo: logoDuBrasil, bg: "bg-gradient-to-br from-[#4845ff] to-[#fff]" },
  { name: "Edmarcos", logo: logoEdmarcos, bg: "bg-gradient-to-br from-[#4845ff] to-[#fff]" },
  { name: "ERS", logo: logoErs, bg: "bg-gradient-to-br from-[#90ffec] to-[#fff]" },
  { name: "Escon", logo: logoEscon, bg: "bg-gradient-to-br from-[#ff9090] to-[#fff]" },
  { name: "Euroforte", logo: logoEuroforte, bg: "bg-gradient-to-br from-[#90ffac] to-[#fff]" },
  { name: "Farmacia Vitae", logo: logoFarmaciaVitae, bg: "bg-gradient-to-br from-[#66BB6A] to-[#fff]" },
  { name: "Fermargraf", logo: logoFermargraf, bg: "bg-gradient-to-br from-[#26A69A] to-[#fff]" },
  { name: "Garra", logo: logoGarra, bg: "bg-gradient-to-br from-[#EF5350] to-[#fff]" },
  { name: "Health", logo: logoHealth, bg: "bg-gradient-to-br from-[#42A5F5] to-[#fff]" },
  { name: "IAD", logo: logoIad, bg: "bg-gradient-to-br from-[#a33636] to-[#fff]" },
  { name: "IATBM", logo: logoIatbm, bg: "bg-gradient-to-br from-[#26C6DA] to-[#fff]" },
  { name: "ICBEU", logo: logoIcbeu, bg: "bg-gradient-to-br from-[#363da3] to-[#fff]" },
  { name: "Intec", logo: logoIntec, bg: "bg-gradient-to-br from-[#a6ff90] to-[#fff]" },
  { name: "Janio Pontes", logo: logoJaniPontes, bg: "bg-gradient-to-br from-[#8D6E63] to-[#fff]" },
  { name: "Jockey", logo: logoJockey, bg: "bg-gradient-to-br from-[#ff9790] to-[#fff]" },
  { name: "JK Buffet", logo: logoJkBuffet, bg: "bg-gradient-to-br from-[#9E9E9E] to-[#fff]" },
  { name: "Lar da Esperança", logo: logoLarDaEsperanca, bg: "bg-gradient-to-br from-[#b5ffbb] to-[#fff]" },
  { name: "Laurene", logo: logoLaurene, bg: "bg-gradient-to-br from-[#BA68C8] to-[#fff]" },
  { name: "Lemon", logo: logoLemon, bg: "bg-gradient-to-br from-[#b5ffbb] to-[#fff]" },
  { name: "Leone", logo: logoLeone, bg: "bg-gradient-to-br from-[#bcb5ff] to-[#fff]" },
  { name: "Maçarico de Ouro", logo: logoMacaricoDeOuro, bg: "bg-gradient-to-br from-[#aa3535] to-[#fff]" },
  { name: "Navirai", logo: logoNavirai, bg: "bg-gradient-to-br from-[#81C784] to-[#fff]" },
  { name: "Net Bovino", logo: logoNetBovino, bg: "bg-gradient-to-br from-[#ffbc6f] to-[#fff]" },
  { name: "Net Nucleo", logo: logoNetNucleo, bg: "bg-gradient-to-br from-[#ffbc6f] to-[#fff]" },
  { name: "Podium", logo: logoPodium, bg: "bg-gradient-to-br from-[#FFB300] to-[#fff]" },
  { name: "Radan", logo: logoRadan, bg: "bg-gradient-to-br from-[#ff9393] to-[#fff]" },
  { name: "Rafael Andrade", logo: logoRafaelAndrade, bg: "bg-gradient-to-br from-[#f8ff93] to-[#fff]" },
  { name: "Recanto", logo: logoRecanto, bg: "bg-gradient-to-br from-[#388E3C] to-[#fff]" },
  { name: "Recanto dos Baixinhos", logo: logoRecantoDosBaixinhos, bg: "bg-gradient-to-br from-[#FF5722] to-[#fff]" },
  { name: "Rede Caxuxa", logo: logoRedeCaxuxa, bg: "bg-gradient-to-br from-[#ff6f6f] to-[#fff]" },
  { name: "Rental", logo: logoRental, bg: "bg-gradient-to-br from-[#ffbc6f] to-[#fff]" },
  { name: "Result Martins", logo: logoResultMartins, bg: "bg-gradient-to-br from-[#97cdff] to-[#fff]" },
  { name: "Ricardo Brandolis", logo: logoRicardoBrandolis, bg: "bg-gradient-to-br from-[#97cdff] to-[#fff]" },
  { name: "Rose Dutra", logo: logoRoseDutra, bg: "bg-gradient-to-br from-[#ff97b6] to-[#fff]" },
  { name: "Saboardi", logo: logoSaboardi, bg: "bg-gradient-to-br from-[#fa5f5f] to-[#fff]" },
  { name: "São Basilio Frango", logo: logoSaoBasilioFrango, bg: "bg-gradient-to-br from-[#ffd3af] to-[#fff]" },
  { name: "Signorelli e De Paula", logo: logoSignorelliEDePaula, bg: "bg-gradient-to-br from-[#cccccc] to-[#fff]" },
  { name: "Sigma", logo: logoSigma, bg: "bg-gradient-to-br from-[#bebcff] to-[#fff]" },  
  { name: "Sonoraves", logo: logoSonoraves, bg: "bg-gradient-to-br from-[#bcffc2] to-[#fff]" },
  { name: "TopTech", logo: logoToptTech, bg: "bg-gradient-to-br from-[#3F51B5] to-[#fff]" },
  { name: "Ubata", logo: logoUbata, bg: "bg-gradient-to-br from-[#FF5722] to-[#fff]" },
  { name: "Ubemix", logo: logoUbemix, bg: "bg-gradient-to-br from-[#bdbcff] to-[#fff]" },
  { name: "Uberconta", logo: logoUberconta, bg: "bg-gradient-to-br from-[#ffbcbc] to-[#fff]" },
  { name: "Ubox", logo: logoUbox, bg: "bg-gradient-to-br from-[#ffac93] to-[#fff]" },
  { name: "Village", logo: logoVillage, bg: "bg-gradient-to-br from-[#ff9393] to-[#fff]" },
  { name: "Visite Uberaba", logo: logoVisiteUberaba, bg: "bg-gradient-to-br from-[#4CAF50] to-[#fff]" },
  { name: "Vita Center", logo: logoVitaCenter, bg: "bg-gradient-to-br from-[#bcffcd] to-[#fff]" },
];

export const LogoCarousel = () => {
  return (
    <section className="w-full bg-background relative overflow-hidden py-12">
      {/* Título grande e moderno */}
      <AnimatedElement animation="slide-down" className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-12 justify-center items-center mb-8 sm:mb-12 w-full px-4 sm:px-6">
        <AnimatedElement animation="slide-right" delay={200}>
          <div className="w-16 sm:w-24 md:w-32 lg:w-40">
            <div className="h-2 sm:h-3 md:h-4 lg:h-6 rounded-full bg-[#FF9025] shadow-lg"></div>
          </div>
        </AnimatedElement>
        <AnimatedElement animation="slide-up" delay={300}>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-[90px] text-white font-bold text-center md:text-left">
            Nossos <br />
            <span className="shimmer-gradient">
              Clientes
            </span>
          </h1>
        </AnimatedElement>
        <AnimatedElement animation="slide-left" delay={400}>
          <div className="w-16 sm:w-24 md:w-32 lg:w-40 flex justify-center md:justify-start items-start">
            <img src={clientes} alt="Troféu" className="w-12 h-12 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain drop-shadow-lg" />
          </div>
        </AnimatedElement>
      </AnimatedElement>

      {/* Carrossel */}
      <div className="w-full relative group">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
            dragFree: true
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-0">
            {logos.map((item, index) => (
              <CarouselItem key={index} className="pl-0 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/7">
                <div className={`w-full h-20 sm:h-24 md:h-32 ${item.bg} flex items-center justify-center p-3 sm:p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer`}>
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Setas de navegação - aparecem apenas no hover */}
          <CarouselPrevious className="!bg-gray-600 !border-gray-500 !text-white hover:!bg-gray-700 transition-all duration-300 invisible group-hover:visible scale-90 group-hover:scale-100 absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 group-hover:!opacity-100">
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </CarouselPrevious>
          <CarouselNext className="!bg-gray-600 !border-gray-500 !text-white hover:!bg-gray-700 transition-all duration-300 invisible group-hover:visible scale-90 group-hover:scale-100 absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 group-hover:!opacity-100">
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
}; 
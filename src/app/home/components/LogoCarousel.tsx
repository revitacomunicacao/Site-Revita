import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import logoColorado from "@/assets/logoColorado.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clientes from "@/assets/clientes.svg"
import { AnimatedElement } from "@/components/AnimatedElement";

// Importando todas as logos
import logoCanabrava from "@/assets/logos/canabrava.png";
import logoCardioclinica from "@/assets/logos/cardioclinica.png";
import logoCartaovida from "@/assets/logos/cartaovida.png";
import logoCasaApoioDaniele from "@/assets/logos/casaapoiodanielle.png";
import logoCepaj from "@/assets/logos/cepaj.png";
import logoCoperura from "@/assets/logos/coperura.png";
import logoCopyArt from "@/assets/logos/copyart.png";
import logoCriativa from "@/assets/logos/criativa.png";
import logoDecoracoesJunior from "@/assets/logos/decoracoes junior.png";
import logoDemick from "@/assets/logos/demick.png";
import logoDiCasa from "@/assets/logos/di casa.png";
import logoDrySolution from "@/assets/logos/dry solution.png";
import logoDuBrasil from "@/assets/logos/du brasil.png";
import logoEdmarcos from "@/assets/logos/edmarcos.png";
import logoErs from "@/assets/logos/ers.png";
import logoEscon from "@/assets/logos/escon.png";
import logoEuroforte from "@/assets/logos/euroforte.png";
import logoFarmaciaVitae from "@/assets/logos/farmacia vitae.png";
import logoFermargraf from "@/assets/logos/fermargraf.png";
import logoGarra from "@/assets/logos/garra.png";
import logoHealth from "@/assets/logos/health.png";
import logoIad from "@/assets/logos/iad.png";
import logoIatbm from "@/assets/logos/ieatm.png";
import logoIcbeu from "@/assets/logos/icbeu.png";
import logoIntec from "@/assets/logos/intec.png";
import logoJaniPontes from "@/assets/logos/janio pontes.png";
import logoJockey from "@/assets/logos/jockey.png";
import logoJkBuffet from "@/assets/logos/jk buffet.png";
import logoLarDaEsperanca from "@/assets/logos/lar da esperança.png";
import logoLaurene from "@/assets/logos/laurene.png";
import logoLemon from "@/assets/logos/lemon.png";
import logoLeone from "@/assets/logos/leone.png";
import logoMacaricoDeOuro from "@/assets/logos/maçarico de ouro.png";
import logoNavirai from "@/assets/logos/navirai.png";
import logoNetBovino from "@/assets/logos/net bovino.png";
import logoNetNucleo from "@/assets/logos/net nucleo.png";
import logoPodium from "@/assets/logos/podium.png";
import logoRadan from "@/assets/logos/radan.png";
import logoRafaelAndrade from "@/assets/logos/rafael andrade.png";
import logoRecanto from "@/assets/logos/recanto.png";
import logoRecantoDosBaixinhos from "@/assets/logos/recanto dos baixinhos.png";
import logoRedeCaxuxa from "@/assets/logos/rede caxuxa.png";
import logoRental from "@/assets/logos/rental.png";
import logoResultMartins from "@/assets/logos/result martins.png";
import logoRicardoBrandolis from "@/assets/logos/ricardo brandolis.png";
import logoRoseDutra from "@/assets/logos/rose dutra.png";
import logoSaboardi from "@/assets/logos/saboardi.png";
import logoSaoBasilioFrango from "@/assets/logos/sao basilio frango.png";
import logoSignorelliEDePaula from "@/assets/logos/signorelli e de paula.png";
import logoSigma from "@/assets/logos/sigma.png";
import logoSonoraves from "@/assets/logos/sonoraves.png";
import logoToptTech from "@/assets/logos/toptech.png";
import logoUbata from "@/assets/logos/ubata.png";
import logoUbemix from "@/assets/logos/ubemix.png";
import logoUberconta from "@/assets/logos/uberconta.png";
import logoUbox from "@/assets/logos/ubox.png";
import logoVillage from "@/assets/logos/village.png";
import logoVisiteUberaba from "@/assets/logos/visite uberaba.png";
import logoVitaCenter from "@/assets/logos/vita center.png";

const logos = [
  { name: "Canabrava", logo: logoCanabrava, bg: "bg-gradient-to-br from-[#dddddd] to-[#fff]" },
  { name: "Cardioclinica", logo: logoCardioclinica, bg: "bg-gradient-to-br from-[#FF9025] to-[#FF6B35]" },
  { name: "Cartaovida", logo: logoCartaovida, bg: "bg-gradient-to-br from-[#4A148C] to-[#7B1FA2]" },
  { name: "Casa Apoio Danielle", logo: logoCasaApoioDaniele, bg: "bg-gradient-to-br from-[#FF8C00] to-[#FFA500]" },
  { name: "Cepaj", logo: logoCepaj, bg: "bg-gradient-to-br from-[#6A0DAD] to-[#8E24AA]" },
  { name: "Colorado", logo: logoColorado, bg: "bg-gradient-to-br from-[#5D3FD3] to-[#7C4DFF]" },
  { name: "Coperura", logo: logoCoperura, bg: "bg-gradient-to-br from-[#FF7F50] to-[#FF6347]" },
  { name: "CopyArt", logo: logoCopyArt, bg: "bg-gradient-to-br from-[#FF6B6B] to-[#FF8E8E]" },
  { name: "Criativa", logo: logoCriativa, bg: "bg-gradient-to-br from-[#4ECDC4] to-[#44A08D]" },
  { name: "Decoracoes Junior", logo: logoDecoracoesJunior, bg: "bg-gradient-to-br from-[#A8E6CF] to-[#7FCDCD]" },
  { name: "Demick", logo: logoDemick, bg: "bg-gradient-to-br from-[#FFD93D] to-[#FF6B6B]" },
  { name: "Di Casa", logo: logoDiCasa, bg: "bg-gradient-to-br from-[#6C5CE7] to-[#A29BFE]" },
  { name: "Dry Solution", logo: logoDrySolution, bg: "bg-gradient-to-br from-[#00B894] to-[#00CEC9]" },
  { name: "Du Brasil", logo: logoDuBrasil, bg: "bg-gradient-to-br from-[#FDCB6E] to-[#E17055]" },
  { name: "Edmarcos", logo: logoEdmarcos, bg: "bg-gradient-to-br from-[#74B9FF] to-[#0984E3]" },
  { name: "ERS", logo: logoErs, bg: "bg-gradient-to-br from-[#FD79A8] to-[#E84393]" },
  { name: "Escon", logo: logoEscon, bg: "bg-gradient-to-br from-[#55A3FF] to-[#0066CC]" },
  { name: "Euroforte", logo: logoEuroforte, bg: "bg-gradient-to-br from-[#FFA726] to-[#FF9800]" },
  { name: "Farmacia Vitae", logo: logoFarmaciaVitae, bg: "bg-gradient-to-br from-[#66BB6A] to-[#4CAF50]" },
  { name: "Fermargraf", logo: logoFermargraf, bg: "bg-gradient-to-br from-[#26A69A] to-[#00897B]" },
  { name: "Garra", logo: logoGarra, bg: "bg-gradient-to-br from-[#EF5350] to-[#E53935]" },
  { name: "Health", logo: logoHealth, bg: "bg-gradient-to-br from-[#42A5F5] to-[#1976D2]" },
  { name: "IAD", logo: logoIad, bg: "bg-gradient-to-br from-[#AB47BC] to-[#8E24AA]" },
  { name: "IATBM", logo: logoIatbm, bg: "bg-gradient-to-br from-[#26C6DA] to-[#00ACC1]" },
  { name: "ICBEU", logo: logoIcbeu, bg: "bg-gradient-to-br from-[#D4E157] to-[#C0CA33]" },
  { name: "Intec", logo: logoIntec, bg: "bg-gradient-to-br from-[#FF7043] to-[#E64A19]" },
  { name: "Janio Pontes", logo: logoJaniPontes, bg: "bg-gradient-to-br from-[#8D6E63] to-[#6D4C41]" },
  { name: "Jockey", logo: logoJockey, bg: "bg-gradient-to-br from-[#795548] to-[#5D4037]" },
  { name: "JK Buffet", logo: logoJkBuffet, bg: "bg-gradient-to-br from-[#9E9E9E] to-[#757575]" },
  { name: "Lar da Esperança", logo: logoLarDaEsperanca, bg: "bg-gradient-to-br from-[#FFB74D] to-[#FF9800]" },
  { name: "Laurene", logo: logoLaurene, bg: "bg-gradient-to-br from-[#BA68C8] to-[#9C27B0]" },
  { name: "Lemon", logo: logoLemon, bg: "bg-gradient-to-br from-[#FFF176] to-[#FDD835]" },
  { name: "Leone", logo: logoLeone, bg: "bg-gradient-to-br from-[#FF8A65] to-[#FF5722]" },
  { name: "Maçarico de Ouro", logo: logoMacaricoDeOuro, bg: "bg-gradient-to-br from-[#FFD54F] to-[#FFC107]" },
  { name: "Navirai", logo: logoNavirai, bg: "bg-gradient-to-br from-[#81C784] to-[#66BB6A]" },
  { name: "Net Bovino", logo: logoNetBovino, bg: "bg-gradient-to-br from-[#4DB6AC] to-[#26A69A]" },
  { name: "Net Nucleo", logo: logoNetNucleo, bg: "bg-gradient-to-br from-[#4FC3F7] to-[#29B6F6]" },
  { name: "Podium", logo: logoPodium, bg: "bg-gradient-to-br from-[#FFB300] to-[#FF8F00]" },
  { name: "Radan", logo: logoRadan, bg: "bg-gradient-to-br from-[#7E57C2] to-[#5E35B1]" },
  { name: "Rafael Andrade", logo: logoRafaelAndrade, bg: "bg-gradient-to-br from-[#FF6F00] to-[#E65100]" },
  { name: "Recanto", logo: logoRecanto, bg: "bg-gradient-to-br from-[#388E3C] to-[#2E7D32]" },
  { name: "Recanto dos Baixinhos", logo: logoRecantoDosBaixinhos, bg: "bg-gradient-to-br from-[#FF5722] to-[#D84315]" },
  { name: "Rede Caxuxa", logo: logoRedeCaxuxa, bg: "bg-gradient-to-br from-[#5C6BC0] to-[#3F51B5]" },
  { name: "Rental", logo: logoRental, bg: "bg-gradient-to-br from-[#26A69A] to-[#00897B]" },
  { name: "Result Martins", logo: logoResultMartins, bg: "bg-gradient-to-br from-[#FF7043] to-[#E64A19]" },
  { name: "Ricardo Brandolis", logo: logoRicardoBrandolis, bg: "bg-gradient-to-br from-[#8D6E63] to-[#6D4C41]" },
  { name: "Rose Dutra", logo: logoRoseDutra, bg: "bg-gradient-to-br from-[#E91E63] to-[#C2185B]" },
  { name: "Saboardi", logo: logoSaboardi, bg: "bg-gradient-to-br from-[#FF9800] to-[#F57C00]" },
  { name: "São Basilio Frango", logo: logoSaoBasilioFrango, bg: "bg-gradient-to-br from-[#795548] to-[#5D4037]" },
  { name: "Signorelli e De Paula", logo: logoSignorelliEDePaula, bg: "bg-gradient-to-br from-[#607D8B] to-[#455A64]" },
  { name: "Sigma", logo: logoSigma, bg: "bg-gradient-to-br from-[#9C27B0] to-[#7B1FA2]" },
  { name: "Sonoraves", logo: logoSonoraves, bg: "bg-gradient-to-br from-[#00BCD4] to-[#0097A7]" },
  { name: "TopTech", logo: logoToptTech, bg: "bg-gradient-to-br from-[#3F51B5] to-[#303F9F]" },
  { name: "Ubata", logo: logoUbata, bg: "bg-gradient-to-br from-[#FF5722] to-[#D84315]" },
  { name: "Ubemix", logo: logoUbemix, bg: "bg-gradient-to-br from-[#4CAF50] to-[#388E3C]" },
  { name: "Uberconta", logo: logoUberconta, bg: "bg-gradient-to-br from-[#2196F3] to-[#1976D2]" },
  { name: "Ubox", logo: logoUbox, bg: "bg-gradient-to-br from-[#9C27B0] to-[#7B1FA2]" },
  { name: "Village", logo: logoVillage, bg: "bg-gradient-to-br from-[#FF9800] to-[#F57C00]" },
  { name: "Visite Uberaba", logo: logoVisiteUberaba, bg: "bg-gradient-to-br from-[#4CAF50] to-[#388E3C]" },
  { name: "Vita Center", logo: logoVitaCenter, bg: "bg-gradient-to-br from-[#00BCD4] to-[#0097A7]" },
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
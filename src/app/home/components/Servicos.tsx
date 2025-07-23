import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FaRocket, FaBullhorn, FaPalette, FaGlobe, FaChartLine, FaSearch, FaPenNib, FaMagnet } from "react-icons/fa";

const services = [
  { name: "Branding", icon: <FaPalette />, desc: "Construção e gestão de marcas memoráveis." },
  { name: "Publicidade", icon: <FaBullhorn />, desc: "Campanhas criativas e estratégicas." },
  { name: "Mídias sociais", icon: <FaGlobe />, desc: "Gestão e performance nas redes sociais." },
  { name: "Sites", icon: <FaRocket />, desc: "Criação de sites modernos e responsivos." },
  { name: "Tráfego pago", icon: <FaChartLine />, desc: "Gestão de anúncios para resultados reais." },
  { name: "SEO", icon: <FaSearch />, desc: "Otimização para mecanismos de busca." },
  { name: "Conteúdo", icon: <FaPenNib />, desc: "Produção de conteúdo relevante e estratégico." },
  { name: "Inbound Mkt", icon: <FaMagnet />, desc: "Atração e conversão de leads qualificados." },
];

export const Servicos = () => {
  return (
    <>
    <div className="flex flex-row">
      <div className="w-full h-[10px] bg-secondary"></div>
    </div>
      <section className="w-full py-24 flex flex-col items-center justify-center bg-[#660042] relative overflow-hidden">
        {/* Título e descrição centralizados */}
        <div className="w-full max-w-4xl flex flex-col items-center gap-4 px-6 z-10 relative mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight text-center">
            Nossos <span className="text-[#FF9025]">Serviços</span>
          </h2>
          <Separator className="bg-gradient-to-r from-[#FF9025] to-[#fff] opacity-40 h-1 w-24 rounded-full" />
          <p className="text-white/90 text-lg max-w-2xl text-center">
            Soluções completas para impulsionar sua marca no universo digital. Estratégia, criatividade e tecnologia para resultados reais.
          </p>
        </div>
        {/* Grid dos serviços 4x2 */}
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 z-10">
          {services.map((service, idx) => (
            <Card key={service.name} className="group bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#FF9025] shadow-xl hover:shadow-orange-900/30 transition-all duration-300 rounded-2xl p-0 overflow-hidden cursor-pointer">
              <CardContent className="flex flex-col gap-3 py-7 px-6 items-start">
                <span className="text-3xl md:text-4xl text-[#FF9025] group-hover:text-white transition-colors duration-300 drop-shadow-lg">
                  {service.icon}
                </span>
                <span className="text-xl font-semibold text-white group-hover:text-[#FF9025] transition-colors duration-300">
                  {service.name}
                </span>
                <span className="text-white/80 text-sm font-normal">
                  {service.desc}
                </span>
                <Badge className="mt-2 bg-[#FF9025] text-[#660042] text-xs font-medium px-3 py-1 rounded group-hover:bg-white group-hover:text-[#FF9025] transition-colors duration-300 shadow">
                  {service.name}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    <div className="flex flex-row">
      <div className="w-full h-[10px] bg-secondary"></div>
    </div>
    </>
  );
};
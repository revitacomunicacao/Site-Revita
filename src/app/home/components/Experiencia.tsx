import React, { useState } from "react";
import { AnimatedElement } from "@/components/AnimatedElement";
import { Badge } from "@/components/ui/badge";

// Importando os ícones SVG
import calendarIcon from "@/assets/calendar.svg";
import starIcon from "@/assets/star.svg";
import usersIcon from "@/assets/users.svg";
import handshakeIcon from "@/assets/handshake.svg";
import { FaLocationArrow } from "react-icons/fa";

interface ExperienciaItem {
  icon: string;
  title: string;
  description: string;
}

const experienciaData: ExperienciaItem[] = [
  {
    icon: calendarIcon,
    title: "27 ANOS DE EXPERIÊNCIA",
    description: "Desde 1998 aprimorando conhecimento e aplicando em diversas clínicas médicas de diferentes especialidades.",
  },
  {
    icon: starIcon,
    title: "15 ANOS DE MERCADO",
    description: "Uma agência completa, Full Service, com expertise em marketing digital para clínicas médicas e desenvolvimento web especializado.",
  },
  {
    icon: usersIcon,
    title: "EQUIPE MULTIPROFISSIONAL",
    description: "Formada por profissionais capacitados em marketing médico e desenvolvimento web, prontos para dar o melhor atendimento à sua clínica.",
  },
  {
    icon: handshakeIcon,
    title: "FOCO EM RESULTADOS",
    description: "Nosso objetivo é transformar ações de marketing em mais pacientes qualificados e consultas para sua clínica médica.",
  },
];

export const Experiencia = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-br from-[#181828] via-[#1a1a2e] to-[#16213e] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#FF9025] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-500 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <AnimatedElement animation="slide-down" className="text-center mb-16">
          <AnimatedElement animation="slide-up" delay={200}>
            <Badge className="mb-6 bg-gradient-to-r from-[#FF9025] to-orange-600 text-[#660042] px-6 py-2 rounded-full text-sm font-bold">
              NOSSA EXPERIÊNCIA
            </Badge>
          </AnimatedElement>
          <AnimatedElement animation="slide-up" delay={300}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="shimmer-gradient">
                Experiências
              </span>{" "}
              que transformam Clínicas Médicas
            </h2>
          </AnimatedElement>
          <AnimatedElement animation="slide-up" delay={400}>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Mais de duas décadas dedicadas à excelência em marketing digital
            </p>
          </AnimatedElement>
        </AnimatedElement>

        {/* Cards Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {experienciaData.map((item, i) => (
            <AnimatedElement
              key={i}
              animation="slide-up"
              delay={i * 200}
            >
              <div className="group relative p-8 rounded-2xl shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 h-full flex flex-col border-t-[#FF9025] border-t-6">
                {/* Decorative background elements */}
                <div className="absolute inset-0 rounded-2xl opacity-20 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>

                {/* Corner accent */}
                <div
                  className="absolute top-4 right-4 w-3 h-3 rounded-full opacity-60"
                  style={{ backgroundColor: "#FF9025" }}
                ></div>

                {/* Large icon container */}
                <div className="relative mb-8 flex-shrink-0">
                  {/* Icon without background */}
                  <div className="flex items-center justify-center mb-4 mx-auto">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-16 h-16 relative z-10 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-4 leading-tight text-white group-hover:text-gray-100 transition-colors duration-300 text-center">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-300 group-hover:text-gray-200 transition-colors duration-300 flex-1">
                    {item.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="mt-6 flex items-center justify-center gap-2">
                    <div
                      className="w-8 h-0.5 rounded-full"
                      style={{ backgroundColor: "#FF9025" }}
                    ></div>
                    <div
                      className="w-4 h-0.5 rounded-full opacity-60"
                      style={{ backgroundColor: "#FF9025" }}
                    ></div>
                  </div>
                </div>

                {/* Hover overlay effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br from-white to-transparent"></div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <AnimatedElement animation="slide-up" delay={800} className="text-center mt-16 flex justify-center">
          <a 
            href="https://api.whatsapp.com/send/?phone=5534996374463&text=Ol%C3%A1!%20Acessei%20o%20site%20da%20Revita%20e%20quero%20mais%20informa%C3%A7%C3%B5es." 
            target="_blank" 
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-[#FF9025] text-[#660042] font-bold text-lg rounded-full hover:bg-white hover:text-[#FF9025] transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
          >
            Fale Conosco
            <FaLocationArrow size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </AnimatedElement>
      </div>
    </section>
  );
};
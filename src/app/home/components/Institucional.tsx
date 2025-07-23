import { FaLocationArrow, FaStar } from "react-icons/fa";
import modeloSelos from "@/assets/Modelo-Selos.png";
import backgroundVideo from "@/assets/video-luzes-vertical.mp4"; // importe seu vídeo

export const Institutional = () => {
  return (
    <section className="relative flex justify-center items-end overflow-hidden">
      {/* Vídeo de fundo */}
      <video
        className="absolute inset-0 w-full h-full object-cover hidden sm:flex"
        src={backgroundVideo}
        autoPlay
        loop
        muted
      />

      {/* Conteúdo sobreposto */}
      <div className="relative z-10 max-w-6xl flex flex-col sm:flex-row gap-8 justify-center items-center p-8">
        <div className="flex flex-col gap-6 sm:w-1/2">
          <h1 className="text-white sm:text-6xl text-3xl font-bold">
            Uma agência de <span className="text-[#f4b414]">Transformação</span>{" "}
            Digital e Growth <span className="text-[#f4b414]">Marketing</span>
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex flex-row gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-[#f4b414]" />
              ))}
            </div>
            <div className="flex-1">
              <div className="h-[2px] bg-[#f4b414] rounded-full" />
            </div>
          </div>
          <p className="text-white">
            Somos autoridade em{" "}
            <span className="text-[#f4b414]">e-commerce</span> e temos{" "}
            <span className="text-[#f4b414]">expertise</span> em oferecer{" "}
            <span className="text-[#f4b414]">soluções completas</span> para
            levar seu negócio ao sucesso.
          </p>
        <button className="rounded-full bg-[#f4b414] px-5 py-1 flex gap-2 items-center hover:bg-white hover:text-[#f4b414] w-fit text-white transition duration-300 ease-in-out">
          Fale Conosco
          <FaLocationArrow size={20} />
        </button>
        </div>
        <div className="w-1/2">
          <img
            src={modeloSelos}
            alt="Modelo de selos"
            className="relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

import Image from "next/image";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Button } from "@/components/ui/button";
import { Rocket, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen mt-16 flex flex-col-reverse md:flex-row items-center md:items-center justify-center px-6 bg-[#0B0B0D] text-white overflow-hidden">
      {/* Fondo animado */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.08}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          "absolute inset-0 skew-y-6"
        )}
      />

      {/* Texto */}
      <div className="relative z-10 w-full md:w-[52%] md:pl-4 md:mt-10 text-center md:text-left">
        <div className="inline-block bg-gradient-to-r from-cosmicBlue to-white text-black px-4 py-1 rounded-full shadow-lg text-sm font-semibold">
          🚀 Somos Digital Nova
        </div>

        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.2] tracking-tight">
          Transformamos ideas en{" "}
          <span className="text-cosmicBlue">experiencias digitales</span>
        </h1>

        <p className="mt-6 text-white/70 text-lg">
          Creamos sitios que combinan diseño, tecnología y estrategia para hacer
          crecer tu marca en internet.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center md:justify-start justify-center">
          <Button className="group bg-white text-black hover:bg-gray-100 transition">
            Ver servicios
            <Rocket className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button
            variant="outline"
            className="group border-white text-black hover:bg-white/10 transition"
          >
            <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            Contáctanos
          </Button>
        </div>
      </div>

      {/* Imagen */}
      <div className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-end mb-10 md:mb-0">
        <Image
          src="/hero-image.svg"
          alt="Ilustración desarrollo web"
          width={400}
          height={400}
          className="w-full max-w-xs md:max-w-md h-auto object-contain drop-shadow-xl"
        />
      </div>
    </section>
  );
};

export default HeroSection;

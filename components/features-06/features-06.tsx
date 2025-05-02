import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    category: "E-commerce",
    title: "Farat: tienda de electrodomésticos industriales",
    details:
      "Diseño y desarrollo de un catálogo online moderno, con interfaz clara, adaptable a móviles y pensado para conversión.",
    tutorialLink: "#farat",
  },
  {
    category: "Consultora tecnológica",
    title: "Consultnova: soluciones digitales para empresas",
    details:
      "Landing institucional con enfoque profesional, animaciones sutiles y una experiencia de usuario fluida para destacar sus servicios.",
    tutorialLink: "#consultnova",
  },
  {
    category: "Racing Team",
    title: "Aracing: presencia online de equipo deportivo",
    details:
      "Sitio visualmente dinámico que transmite velocidad y tecnología, con galería de fotos y secciones interactivas.",
    tutorialLink: "#aracing",
  },
  {
    category: "Fábrica de acrílicos",
    title: "Acrilrev: catálogo y contacto para clientes mayoristas",
    details:
      "Web funcional y responsiva con foco en exhibir productos y permitir una comunicación ágil con clientes.",
    tutorialLink: "#acrilrev",
  },
  {
    category: "Gobierno local",
    title: "Comuna Carrizales: información accesible y clara",
    details:
      "Portal institucional con secciones autogestionables, noticias, cultura, turismo y avisos comunitarios.",
    tutorialLink: "#comuna",
  },
];

const ProjectsSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0B0B0D] text-white">
      <div className="max-w-screen-lg w-full py-20 px-6">
        <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-xl md:text-center md:mx-auto">
          Algunos de nuestros proyectos destacados
        </h2>

        <div className="mt-16 space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse"
            >
              <div className="w-full aspect-[6/4] bg-white/10 rounded-xl border border-white/10 basis-1/2 flex items-center justify-center text-white/50">
                {/* Acá podés reemplazar por una imagen */}
                Imagen del proyecto
              </div>

              <div className="basis-1/2 shrink-0">
                <span className="uppercase font-semibold text-sm text-white/60">
                  {project.category}
                </span>
                <h4 className="my-3 text-3xl font-semibold tracking-tight">
                  {project.title}
                </h4>
                <p className="text-white/70 text-[17px]">{project.details}</p>
                <Button
                  asChild
                  className="mt-6 rounded-full min-w-40 text-[15px] bg-white text-black hover:bg-gray-100"
                >
                  <Link href={project.tutorialLink}>
                    Ver proyecto <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

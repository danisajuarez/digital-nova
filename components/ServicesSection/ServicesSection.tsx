const services = [
  {
    title: "Diseño Web",
    description:
      "Creamos interfaces atractivas, intuitivas y responsive que reflejan la identidad de tu marca.",
  },
  {
    title: "Desarrollo a Medida",
    description:
      "Construimos soluciones robustas, modernas y escalables con tecnologías de vanguardia.",
  },
  {
    title: "Identidad Visual",
    description:
      "Desde el logo hasta los colores y tipografía, te ayudamos a comunicar visualmente tu esencia.",
  },
  {
    title: "Optimización SEO",
    description:
      "Mejoramos la visibilidad de tu sitio en buscadores para que más personas te encuentren.",
  },
  {
    title: "Mantenimiento Web",
    description:
      "Nos ocupamos de que tu sitio funcione siempre al 100%, sin errores ni caídas.",
  },
  {
    title: "Consultoría UX/UI",
    description:
      "Auditamos y mejoramos la experiencia de usuario para convertir visitas en resultados.",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="servicios"
      className="min-h-screen bg-[#0B0B0D] text-white py-24 px-6 flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Servicios que potencian tu presencia digital
        </h2>

        <p className="text-white/70 text-lg mt-4 max-w-2xl mx-auto">
          Acompañamos a marcas y emprendedores en cada etapa digital con
          soluciones creativas y funcionales.
        </p>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#131416] border border-white/10 rounded-xl p-6 text-left shadow-lg"
            >
              <h3 className="text-xl font-semibold text-cosmicBlue">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-white/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

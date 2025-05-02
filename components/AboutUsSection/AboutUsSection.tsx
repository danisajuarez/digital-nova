const AboutUsSection = () => {
  return (
    <section
      id="nosotros"
      className="min-h-screen bg-[#0B0B0D] text-white py-24 px-6 flex items-center justify-center"
    >
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Somos un equipo que diseña y construye con pasión
        </h2>

        <p className="text-white/70 text-lg max-w-3xl mx-auto">
          En <span className="text-cosmicBlue font-semibold">Digital Nova</span>
          combinamos creatividad, tecnología y estrategia para transformar ideas
          en experiencias digitales memorables. Somos desarrolladores,
          diseñadores y soñadores con un mismo objetivo: hacer que tu marca
          brille online.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-[#131416] rounded-xl p-6 border border-white/10 shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-cosmicBlue">
              Compromiso
            </h3>
            <p className="text-white/70 text-sm">
              Nos involucramos en cada proyecto como si fuera propio. La calidad
              y el detalle no se negocian.
            </p>
          </div>
          <div className="bg-[#131416] rounded-xl p-6 border border-white/10 shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-cosmicBlue">
              Creatividad
            </h3>
            <p className="text-white/70 text-sm">
              Creamos experiencias que conectan. Cada diseño tiene intención,
              cada línea de código, propósito.
            </p>
          </div>
          <div className="bg-[#131416] rounded-xl p-6 border border-white/10 shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-cosmicBlue">
              Tecnología
            </h3>
            <p className="text-white/70 text-sm">
              Usamos herramientas modernas para ofrecer soluciones sólidas,
              rápidas y escalables.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

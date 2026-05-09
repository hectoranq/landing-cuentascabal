export default function CTASection() {
  return (
    <section className="py-32 px-margin-mobile md:px-margin-desktop text-center bg-gradient-to-b from-background to-surface-container-lowest">
      <div className="max-w-container-max-width mx-auto">
        <h2 className="font-display-lg text-display-lg text-primary mb-8">
          ¿Listo para la libertad financiera?
        </h2>
        <p className="text-on-surface-variant text-body-md font-body-md mb-12 max-w-xl mx-auto opacity-80">
          Únete a más de 10,000 emprendedores que ya están recuperando 5 horas
          semanales de carga administrativa.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-primary-container text-on-primary-container px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(0,242,204,0.3)] transition-all">
            Empezar Gratis
          </button>
          <button className="border border-outline-variant text-on-surface px-10 py-4 rounded-full font-bold text-lg hover:bg-surface-variant/30 transition-all">
            Ver Demo
          </button>
        </div>
      </div>
    </section>
  );
}

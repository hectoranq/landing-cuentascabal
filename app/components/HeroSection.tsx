import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative pt-20 pb-32 px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="hero-glow absolute inset-0 -z-10"></div>
      <div className="max-w-container-max-width mx-auto text-center">
        <span className="inline-block px-4 py-1.5 rounded-full border border-primary-container/30 text-primary-container font-label-sm text-label-sm mb-6 tracking-widest">
          YescaBox
        </span>
        <h1 className="font-display-lg text-display-lg text-primary max-w-4xl mx-auto mb-8 leading-tight">
          Elimina la carga administrativa. Enfócate en tu negocio.
        </h1>
        <p className="text-on-surface-variant text-body-md font-body-md max-w-2xl mx-auto mb-12 opacity-80">
          La primera plataforma de gestión financiera diseñada para emprendedores
          que odian el papeleo. Inteligencia artificial que trabaja para ti, no al
          revés.
        </p>

        {/* Hero Image */}
        <div className="mt-16 relative mx-auto max-w-5xl">
          <div className="glass-card rounded-2xl overflow-hidden shadow-2xl p-4 md:p-8 transform hover:scale-[1.02] transition-transform duration-500">
            <Image
              alt="Dashboard Financeiro"
              className="w-full h-auto rounded-xl border border-outline-variant/30"
              src="/cuentas_cabal_landing.png"
              width={1200}
              height={675}
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </div>

          {/* Floating UI element */}
          <div className="absolute -top-10 -right-5 md:-right-10 glass-card p-4 rounded-xl hidden md:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary-container">
                  trending_up
                </span>
              </div>
              <div>
                <p className="text-label-sm font-label-sm text-on-surface-variant">
                  Rentabilidad
                </p>
                <p className="text-body-md font-bold text-primary">+24.8%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

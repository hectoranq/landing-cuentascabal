export default function BentoSection() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max-width mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main dashboard card */}
          <div className="md:col-span-8 glass-card p-10 rounded-3xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-headline-lg text-headline-lg text-primary mb-4">
                Dashboard de Inteligencia Financiera
              </h3>
              <p className="text-on-surface-variant text-body-md font-body-md max-w-lg mb-8">
                Control total con visualizaciones dinámicas. Identifica tendencias
                de gastos, proyecta tu flujo de caja y recibe alertas proactivas.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-surface-container-high/60 p-4 rounded-2xl text-center">
                  <span className="material-symbols-outlined text-secondary block mb-2">
                    shopping_cart
                  </span>
                  <span className="text-label-sm font-label-sm block opacity-70">
                    Marketing
                  </span>
                </div>
                <div className="bg-surface-container-high/60 p-4 rounded-2xl text-center">
                  <span className="material-symbols-outlined text-primary block mb-2">
                    inventory_2
                  </span>
                  <span className="text-label-sm font-label-sm block opacity-70">
                    Suministros
                  </span>
                </div>
                <div className="bg-surface-container-high/60 p-4 rounded-2xl text-center border border-primary-container/20">
                  <span className="material-symbols-outlined text-primary-container block mb-2">
                    health_and_safety
                  </span>
                  <span className="text-label-sm font-label-sm block opacity-70">
                    Salud Financiera
                  </span>
                </div>
                <div className="bg-surface-container-high/60 p-4 rounded-2xl text-center">
                  <span className="material-symbols-outlined text-tertiary-fixed block mb-2">
                    local_shipping
                  </span>
                  <span className="text-label-sm font-label-sm block opacity-70">
                    Logística
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 w-1/3 opacity-20 pointer-events-none">
              <span className="material-symbols-outlined text-[200px]">
                monitoring
              </span>
            </div>
          </div>

          {/* Reports card */}
          <div className="md:col-span-4 glass-card p-10 rounded-3xl bg-primary-container/5 border-primary-container/20">
            <h3 className="font-headline-lg text-headline-lg text-primary mb-4">
              Reportes Pro
            </h3>
            <p className="text-on-surface-variant text-body-md font-body-md mb-6">
              Listados cronológicos con miniaturas y filtros avanzados.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 p-3 bg-surface-container/50 rounded-xl border border-outline-variant/10">
                <div className="w-8 h-8 rounded bg-surface-variant flex items-center justify-center">
                  <span className="material-symbols-outlined text-label-sm">
                    image
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-label-sm font-bold">Amazon Web Services</p>
                  <p className="text-[10px] opacity-60">12 Oct, 2024 • Tech</p>
                </div>
                <span className="text-primary font-bold">$124.50</span>
              </li>
              <li className="flex items-center gap-3 p-3 bg-surface-container/50 rounded-xl border border-outline-variant/10">
                <div className="w-8 h-8 rounded bg-surface-variant flex items-center justify-center">
                  <span className="material-symbols-outlined text-label-sm">
                    receipt_long
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-label-sm font-bold">Starbucks Coffee</p>
                  <p className="text-[10px] opacity-60">11 Oct, 2024 • Meals</p>
                </div>
                <span className="text-primary font-bold">$12.40</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

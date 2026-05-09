import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest/50">
      <div className="max-w-container-max-width mx-auto">
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
            Tecnología de Próxima Generación
          </h2>
          <p className="text-on-surface-variant opacity-70">
            Olvídate de las hojas de cálculo y la entrada de datos manual. Hemos
            automatizado todo el ciclo de vida financiero.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1: Voice */}
          <div className="glass-card p-8 rounded-2xl flex flex-col justify-between group">
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-secondary-container/20 rounded-xl">
                  <span className="material-symbols-outlined text-secondary">
                    mic
                  </span>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-primary">
                  Entrada por Voz Inteligente
                </h3>
              </div>
              <p className="text-on-surface-variant text-body-md font-body-md leading-relaxed mb-8">
                Dicta tus gastos tal como los piensas. Nuestra IA procesa lenguaje
                natural, extrae montos y categoriza en tiempo real.
              </p>
              <div className="flex items-end gap-1 h-12">
                <div className="w-1 bg-primary-container h-4 rounded-full"></div>
                <div className="w-1 bg-primary-container h-8 rounded-full"></div>
                <div className="w-1 bg-primary-container h-12 rounded-full"></div>
                <div className="w-1 bg-primary-container h-6 rounded-full"></div>
                <div className="w-1 bg-primary-container h-10 rounded-full"></div>
                <div className="w-1 bg-primary-container h-4 rounded-full"></div>
                <div className="w-1 bg-primary-container h-8 rounded-full"></div>
                <div className="w-1 bg-white h-10 rounded-full"></div>
                <div className="w-1 bg-primary-container h-6 rounded-full"></div>
                <div className="w-1 bg-primary-container h-10 rounded-full"></div>
              </div>
            </div>
            <Image
              alt="Voice Intelligence Visual"
              className="rounded-xl opacity-60 group-hover:opacity-100 transition-opacity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQaxT16TkZcjYZPr-vRZRUElW7S33JorNxWVdIaAPmOVyGTNQ70Rfmi9LbWIWKIABBjBkwqRs_Ys2nQ1XtSTzg503nu5gb3SCSle0895sopxOT5-DdzVGcXqcTkSWRVv-297po1g8u-Yr3F2gicyR8rvJAuqIWx7wDQa_vEFE473Ddc4Qa7PZyFDUgyW7VeXQcPegWSq-gFqYEVOpBi9mPVEGq7qgh2l5pMv94BtiYjuEbT4nqjYRebvNNN3Z6_pyp2bPrDrnDYwM"
              width={600}
              height={300}
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          {/* Feature 2: OCR */}
          <div className="glass-card p-8 rounded-2xl flex flex-col justify-between group">
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary-container/20 rounded-xl">
                  <span className="material-symbols-outlined text-primary-fixed">
                    document_scanner
                  </span>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-primary">
                  Escaneo OCR Proactivo
                </h3>
              </div>
              <p className="text-on-surface-variant text-body-md font-body-md leading-relaxed mb-8">
                Captura facturas individuales o en lote. Extracción progresiva de
                campos como impuestos, comercio y totales de forma automática.
              </p>
              <div className="bg-surface-container-high/50 p-4 rounded-xl border border-outline-variant/20">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-label-sm font-label-sm text-secondary">
                    PROCESANDO...
                  </span>
                  <span className="text-label-sm font-label-sm text-on-surface-variant">
                    98% Accuracy
                  </span>
                </div>
                <div className="w-full bg-surface-variant h-1 rounded-full overflow-hidden">
                  <div className="bg-primary-container h-full w-[98%]"></div>
                </div>
              </div>
            </div>
            <Image
              alt="OCR Technology"
              className="rounded-xl opacity-60 group-hover:opacity-100 transition-opacity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi2UMkIrTEAc5CKh3PcdJICf_xfiflk2D3duHwRXM_0muiobVuOkiO-5PYS43IoKchIpEdnyUzVpfqd-d-DgACvVkjMg3qipKRMXQxCHUI4YcxwA5imdVeMsMFevnFC2mbYH9vhFoWmBvDMKqTkHhWO6QK0G_QSGSp3An2EROojghC6WnG-P5dy_OcazLDWoAxw7p7XNdmn_Ln9mmWvlyKdx1W8rfqooG1czq9OBHFoFMXtwRGETxqc2o_mmJgJcslH5FKr6L1qPs"
              width={600}
              height={300}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

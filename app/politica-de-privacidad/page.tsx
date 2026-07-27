import Link from "next/link";

export default function PoliticaDePrivacidadPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-800">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <div className="space-y-3">
          <p className="inline-flex rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Documento legal
          </p>
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Política de Privacidad
          </h1>
          <p className="text-sm text-slate-500">
            Última actualización: julio de 2026 · Versión 1.0
          </p>
        </div>

        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-900">
          Esta política explica qué información recopilamos, cómo la usamos y cómo la protegemos cuando usas nuestra aplicación de registro de ingresos y gastos. La aplicación no se conecta a ningún banco ni institución financiera.
        </div>

        <section className="space-y-3 rounded-2xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-blue-600">1. Información que recopilamos</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
            <li>Datos de autenticación: nombre, correo electrónico y foto de perfil proporcionados por Google.</li>
            <li>Datos de cuentas y billeteras registradas manualmente por el usuario.</li>
            <li>Registros de ingresos, gastos, categorías, montos, fechas y descripciones.</li>
            <li>Datos de voz del modo micrófono, procesados temporalmente para convertirlos en texto.</li>
          </ul>
        </section>

        <section className="space-y-3 rounded-2xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-blue-600">2. Cómo usamos tu información</h2>
          <p className="text-sm text-slate-600">
            Usamos tus datos para identificarte, mantener tu sesión activa, mostrar tus registros y generar resúmenes e insights de tu actividad financiera. No usamos tu información para publicidad ni la vendemos a terceros.
          </p>
        </section>

        <section className="space-y-3 rounded-2xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-blue-600">3. Autenticación con Google</h2>
          <p className="text-sm text-slate-600">
            Utilizamos Google Sign-In como método de acceso. Google nos comparte tu nombre, correo electrónico y foto de perfil pública, sujetos a su política de privacidad.
          </p>
        </section>

        <section className="space-y-3 rounded-2xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-blue-600">4. Uso del micrófono</h2>
          <p className="text-sm text-slate-600">
            El audio se procesa en tiempo real para generar texto y no se almacenan grabaciones de audio en nuestros servidores.
          </p>
        </section>

        <section className="space-y-3 rounded-2xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-blue-600">5. Seguridad y conservación</h2>
          <p className="text-sm text-slate-600">
            Implementamos medidas técnicas y organizativas para proteger tus datos y los almacenamos únicamente mientras mantengas tu cuenta activa. Puedes solicitar la eliminación de tus datos en cualquier momento.
          </p>
        </section>

        <div className="rounded-2xl bg-slate-900 p-6 text-sm text-slate-300">
          <h2 className="mb-2 text-lg font-semibold text-blue-300">Contacto</h2>
          <p>Si tienes preguntas, solicitudes o inquietudes sobre esta política, puedes contactarnos en privacidad@cuentascabal.lat.</p>
        </div>

        <Link
          href="/"
          className="inline-flex w-fit items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}

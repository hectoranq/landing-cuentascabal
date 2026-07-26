export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-margin-desktop py-12 max-w-container-max-width mx-auto">
        <div className="md:col-span-1">
          <div className="font-headline-lg text-headline-lg font-bold text-primary mb-4">
            YescaBox
          </div>
          <p className="text-on-surface-variant font-body-md text-body-md opacity-70">
            IA para el control total de tus finanzas empresariales.
          </p>
        </div>
        <div>
          <h4 className="text-primary font-bold mb-4">Producto</h4>
          <ul className="space-y-2 text-on-surface-variant font-body-md text-body-md">
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Características
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Seguridad
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Precios
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-primary font-bold mb-4">Compañía</h4>
          <ul className="space-y-2 text-on-surface-variant font-body-md text-body-md">
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Contact Us
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-primary font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-on-surface-variant font-body-md text-body-md">
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Terms of Service
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-container-max-width mx-auto px-margin-desktop py-6 border-t border-outline-variant/5 text-center md:text-left text-on-surface-variant/50 text-label-sm font-label-sm">
        © 2024 YescaBox. All rights reserved.
      </div>
    </footer>
  );
}

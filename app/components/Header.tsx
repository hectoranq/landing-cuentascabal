export default function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-xl top-0 sticky z-50 border-b border-outline-variant/20">
      <div className="flex justify-between items-center px-margin-desktop py-4 max-w-container-max-width mx-auto">
        <div className="font-display-lg text-display-lg font-bold text-primary tracking-tighter">
          Cuentas Cabal
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a
            className="text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md"
            href="#"
          >
            Features
          </a>
          <a
            className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors"
            href="#"
          >
            Voice Entry
          </a>
          <a
            className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors"
            href="#"
          >
            Scanning
          </a>
          <a
            className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors"
            href="#"
          >
            Intelligence
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="hidden md:block text-on-surface hover:text-primary transition-colors font-body-md text-body-md">
            Login
          </button>
          <button className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-full font-bold hover:scale-95 duration-200 ease-in-out transition-all">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}

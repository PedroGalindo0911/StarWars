import logo from "../images/logo.png";  // Imagen del logo

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-black text-yellow-400 py-3 px-6 z-50 border-b-4 border-yellow-500">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src={logo}  // Ruta de la imagen del logo con fondo transparente
            alt="Logo"
            className="w-24 h-12 transition-all transform filter grayscale hover:grayscale-0 hover:scale-110"
          />
        </div>

        {/* Enlaces de navegación */}
        <div className="bg-black text-yellow-400 rounded-xl px-6 py-1 flex items-center gap-6">
          <a
            href="#home"
            className="hover:bg-yellow-500 hover:text-black rounded-xl px-4 py-2 text-sm font-sans transition-all"
          >
            Home
          </a>
          <a
            href="#xwing"
            className="hover:bg-yellow-500 hover:text-black rounded-xl px-4 py-2 text-sm font-sans transition-all"
          >
            X-wing
          </a>
          <a
            href="#author"
            className="hover:bg-yellow-500 hover:text-black rounded-xl px-4 py-2 text-sm font-sans transition-all"
          >
            George Lucas
          </a>
        </div>

        {/* Navbar móvil */}
        <div className="md:hidden mt-4">
          <button className="w-full bg-yellow-500 text-black py-2 rounded-lg hover:bg-yellow-600">
            Menú
          </button>
        </div>
      </div>
    </nav>
  );
}

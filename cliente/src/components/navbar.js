// navbar.js
import Link from 'next/link'; // Importante: Usar Link de Next.js

export default function Navbar() {
  return (
    // Contenedor principal del navbar
    <nav className="
      sticky top-0 z-10 w-full            // Fijo en la parte superior y ocupa todo el ancho
      bg-black/50 backdrop-blur-sm        // Fondo negro semitransparente con desenfoque
      border-b border-white/10            // Borde inferior sutil para separar del contenido
      shadow-lg                           // Sombra suave para darle profundidad
    ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start h-12"> {/* Aumentamos la altura */}
          <Link href="/" className="
            text-gray-200 hover:text-white    // Color de texto que resalta y cambia al pasar el mouse
            font-semibold text-lg             // Texto más grande y notorio
            px-3 py-2 rounded-md              // Padding interno para que no se vea apretado
            transition-colors duration-200    // Transición suave de color
          ">
            Inicio
          </Link>
        </div>
      </div>
    </nav>
  );
}
import {
} from "@heroicons/react/24/outline";
import logo2 from "./img//logo 2.jpg";

function Navbar() {

  return (
    <div className="w-full z-50">
      {/* Ajusta el top para que el navbar esté justo debajo de la franja head */}
      <nav className="bg-Navbar w-full fixed top-[2.2rem] left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center py-2">
            {/* Logo y menú principal */}
            <div className="flex items-center gap-12">
              {/* Logo */}
              <a href="/" className="flex items-center gap-1 font-bold text-white">
                <img className="w-8 h-8 rounded-full" src={logo2} alt="Logo" />
                <span className="text-lg leading-tight">BIOFLORA</span>
              </a>
              {/* Menú principal */}
              <div className="hidden text-white lg:flex gap-8">
                <a href="#" className="hover:text-primary">Inicio</a>
                <a href="#" className="hover:text-primary">Nosotros</a>
                <a href="#" className="hover:text-primary">Tienda</a>
                <a href="#" className="hover:text-primary">Promociones</a>
              </div>
            </div>
            {/* Menú secundario */}
            <div className="flex items-center gap-4 text-white">
              <a href="#" className="hover:text-primary">Whatsapp</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

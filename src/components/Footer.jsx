import facebookIcon from './img/facebook.svg';
import whatsappIcon from './img/whatsapp.svg';
import emailIcon from './img/correo.svg';
import phoneIcon from './img/telefono.svg';
import logo from './img/logo.jpg';

function Footer() {
  return (
    <footer className="bg-footer text-white mt-auto">
      <div className="container mx-auto px-4 py-4 flex flex-col lg:flex-row lg:justify-between border-t border-gray-700">
        {/* Logo y Medios de Contacto */}
        <div className="mb-4 lg:mb-0 lg:w-1/2 flex flex-col items-center lg:items-start">
          <img className="w-24 h-24 rounded-full mb-2" src={logo} alt="Logo" />
          <p className="mb-2 text-gray-300 text-sm">
            Otros canales de contacto:
          </p>
          <div className="flex gap-3">
            <a href="https://web.facebook.com/profile.php?id=100089304934779" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
              <img className="w-6 h-6" src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://wa.me/51994056605" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
              <img className="w-6 h-6" src={whatsappIcon} alt="WhatsApp" />
            </a>
            <a href="mailto:operaciones@transportej.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
              <img className="w-6 h-6" src={emailIcon} alt="Correo" />
            </a>
            <a href="tel:017176148" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors">
              <img className="w-6 h-6" src={phoneIcon} alt="Teléfono" />
            </a>
          </div>
        </div>

        {/* Menú de Páginas y Contacto */}
        <div className="lg:w-1/2 flex flex-col lg:flex-row lg:justify-between">
          <div className="mb-4 lg:mb-0 lg:w-1/2">
            <h4 className="font-bold text-md mb-2 border-b border-white pb-1">Páginas</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-gray-400 transition-colors text-sm">Términos y condiciones</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors text-sm">Libro de reclamaciones</a></li>
            </ul>
          </div>

          <div className="lg:w-1/2">
            <h4 className="font-bold text-md mb-2 border-b border-white pb-1">Escríbenos</h4>
            <a href="https://wa.me/51994056605" target="_blank" rel="noopener noreferrer" className="flex items-center mb-1 hover:text-green-500 transition-colors text-sm">
              <img className="w-5 h-5 mr-2" src={whatsappIcon} alt="WhatsApp" />
              <p>+51 910 387 836</p>
            </a>
            <a href="mailto:operaciones@transportej.com" target="_blank" rel="noopener noreferrer" className="flex items-center mb-1 hover:text-red-500 transition-colors text-sm">
              <img className="w-5 h-5 mr-2" src={emailIcon} alt="Correo" />
              <p>bioflora.peru@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-footBar py-2 text-center border-t border-white">
        <p className="text-white text-sm">
          Copyright © 2024 BIOFLORA  Todos los derechos reservados | by Jhos
        </p>
      </div>
    </footer>
  );
}

export default Footer;

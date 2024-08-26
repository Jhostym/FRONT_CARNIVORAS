import ubicacionIcono from './img/ubicacion.svg';
import correoIcono from './img/correo.svg';
import facebookIcono from './img/facebook.svg';

function Head() {
  return (
    <div className="fixed top-0 left-0 w-full bg-hearBar text-white py-2 z-50"> {/* Cambié py-4 a py-2 */}
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-8">
          <a
            href="https://www.google.com/maps/place/Bioflora/@-11.9771633,-77.0975699,739m/data=!3m2!1e3!4b1!4m6!3m5!1s0x9105cf7fa047e70f:0x6474826b7325872c!8m2!3d-11.9771633!4d-77.0975699!16s%2Fg%2F11vz7tf5ws?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-gray-300"
            title="Clic para ver en Maps"
          >
            <img className="w-5 h-5" src={ubicacionIcono} alt="Ubicación" /> {/* Cambié w-6 h-6 a w-5 h-5 */}
            <span className="text-sm">Monte de los Olivos mz B - Lima - SMP </span> {/* Cambié el tamaño de texto a text-sm */}
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 hover:text-gray-300"
            title="Clic escribir un correo"
          >
            <img className="w-5 h-5" src={correoIcono} alt="Correo" /> {/* Cambié w-6 h-6 a w-5 h-5 */}
            <span className="text-sm">bioflora.peru@gmail.com</span> {/* Cambié el tamaño de texto a text-sm */}
          </a>
        </div>

        <div>
          <a
            href="https://www.facebook.com/profile.php?id=61557749725242&mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <img className="w-5 h-5" src={facebookIcono} alt="Facebook" /> {/* Cambié w-6 h-6 a w-5 h-5 */}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Head;

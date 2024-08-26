import { useState } from 'react';

function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: 'Bienvenido a nuestro Jardín Virtual',
      description: 'Descubre las mejores plantas para tu hogar y aprende a cuidarlas.',
      img: 'https://www.carnivorasland.com/1448-large_default/dionaea-muscipula-typical.jpg'
    },
    {
      title: 'Plantas para Todos los Espacios',
      description: 'Desde plantas de interior hasta jardines exteriores, tenemos lo que necesitas.',
      img: 'https://assets.jumpseller.com/store/carnivorassantiago/assets/sarra.jpg?0'
    },
    {
      title: 'Guías y Consejos Expertos',
      description: 'Obtén consejos y guías detalladas para cuidar tus plantas.',
      img: 'https://www.shutterstock.com/image-photo/sticky-leaves-drosera-binata-600nw-2402048049.jpg'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-green-600 text-white py-20">
        <div className="absolute inset-0 bg-opacity-50 bg-green-800"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl font-bold mb-4">Bienvenido a nuestro Jardín Carnivoro</h1>
          <p className="text-lg mb-8">Descubre, aprende y cuida tus plantas favoritas con nosotros.</p>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Descubre nuestras ofertas semanales</h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="min-w-full flex-shrink-0">
                    <div className="w-full h-96 relative">
                      <img
                        src={slide.img}
                        alt={slide.title}
                        className="w-full h-full object-cover rounded-lg shadow-md"
                      />
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">{slide.title}</h3>
                      <p>{slide.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              &lt;
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              &gt;
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Características Principales</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Fácil de Usar</h3>
                <p className="text-gray-700">Una interfaz intuitiva para gestionar todas tus plantas.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Guías de Cuidado</h3>
                <p className="text-gray-700">Información detallada para cuidar cada tipo de planta.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Recordatorios</h3>
                <p className="text-gray-700">Recordatorios para regar y cuidar tus plantas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Nuestros Servicios</h2>
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-green-100 p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold mb-4">Consultoría en Jardinería</h3>
                <p>Asesoramiento personalizado para crear el jardín perfecto.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-green-100 p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold mb-4">Venta de Plantas</h3>
                <p>Variedad de plantas para embellecer tu espacio.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-green-100 p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold mb-4">Talleres y Cursos</h3>
                <p>Aprende a cuidar y cultivar tus plantas con nuestros talleres.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Testimonios</h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                <div className="min-w-full flex-shrink-0 bg-white p-6 rounded-lg shadow-lg">
                  <p className="text-lg mb-4">"Excelente plataforma para aprender sobre plantas. Las guías son muy útiles."</p>
                  <p className="font-semibold">- Ana Gómez</p>
                </div>
                <div className="min-w-full flex-shrink-0 bg-white p-6 rounded-lg shadow-lg">
                  <p className="text-lg mb-4">"Me encanta la facilidad para gestionar mis plantas y recibir recordatorios."</p>
                  <p className="font-semibold">- Juan Pérez</p>
                </div>
              </div>
            </div>
            <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
              &lt;
            </button>
            <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
              &gt;
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;

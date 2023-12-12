import React from 'react';

const Galeriatest = () => {

  const img = [
    "/img/textura2.jpeg",
    "/img/textura1.jpeg",
    "/img/fondoSeccion1b.png",
    "/img/IMG_5743.JPG",
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Insertar imagenes</h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">el componente se reutiliza dependiendo de la cantidad de imagenes en el array de rutas</p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
        {img.map((img, index) => (
         <div key={index} className={`md:p-2 p-1 w-${index % 2 === 0 ? '1/2' : 'full'}`}>
           <img alt="gallery" className="w-full h-full object-cover object-center block" src={img} />
         </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Galeriatest;

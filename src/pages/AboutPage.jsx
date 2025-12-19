import React from 'react';

const AboutPage = () => {
  return (
    <main className="about">
      <section>
        <h2>Acerca de Filmax</h2>
        <p>
          Filmax es una plataforma dedicada a los amantes del cine. Nuestro
          objetivo es ayudarte a descubrir nuevas películas, guardar tus
          favoritas y conocer información clara y directa sobre cada título.
        </p>
      </section>

      <section>
        <h3>¿Qué puedes hacer en Filmax?</h3>
        <ul>
          <li>Explorar un catálogo de películas</li>
          <li>Consultar fichas con información básica</li>
          <li>Crear listas de películas favoritas</li>
          <li>Descubrir recomendaciones</li>
        </ul>
      </section>

      <section>
        <h3>Nuestra misión</h3>
        <p>
          Queremos que elegir qué película ver sea rápido, sencillo y sin
          distracciones. Menos tiempo buscando y más tiempo disfrutando del
          cine.
        </p>
      </section>
    </main>
  );
};

export default AboutPage;

  /*preguntas frecuentes
  const tarjetas = document.querySelectorAll('.tarjetaPFrecuente');

  tarjetas.forEach(tarjeta => {
    const titulo = tarjeta.querySelector('h5');
    const contenido = tarjeta.querySelector('.contenido');
  
    titulo.addEventListener('click', () => {
      contenido.classList.toggle('escondido');
    });
  });
*/


  //agregar canonical y palabras claves

        // Función para crear y agregar una etiqueta <meta>
        function agregarMeta(name, content) {
          const meta = document.createElement('meta');
          meta.setAttribute('name', name);
          meta.setAttribute('content', content);
          document.head.appendChild(meta);
      }

      // Función para crear y agregar la etiqueta <link> canonical
      function agregarCanonical(url) {
          const link = document.createElement('link');
          link.setAttribute('rel', 'canonical');
          link.setAttribute('href', url);
          document.head.appendChild(link);
      }

      // Agregar palabras clave
      const palabrasClave = 'Bama,fotografía, catamarca, bamafotografia';
      agregarMeta('keywords', palabrasClave);

      // Agregar descripción (opcional)
      const descripcion = 'Soy bama una fotografa apasionada, que cuenta historias a través de imágenes.Mi portafolio muestra una selección de mis mejores trabajos, desde retratos conmovedores hasta paisajes impresionantes.';
      agregarMeta('description', descripcion);

      // Agregar enlace canonical
      const urlCanonical = 'https://bamafotografia.com/index.html'; // Utiliza la URL actual
      agregarCanonical(urlCanonical);
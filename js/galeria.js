
const imagenes = window.links;
 
const imagenCarga = 'https://i.ibb.co/tmFzM5z/Logo-Carga.webp';
  // Función para generar la estructura HTML
  function generarEstructuraHTML(imagenes) {
    // Crear el elemento contenedor
    const contenedor = document.querySelector(".imagen");

    //crear el elemento para visualizar las imagenes
    const container = document.createElement('div');
  container.classList.add('mostrarImg');
  const image = document.createElement('img');
  image.classList.add('imagenActual');
  image.src = '';
  image.alt = '';
  container.appendChild(image);
  document.body.appendChild(container);
  //crea p
  const contador = document.createElement('p');
  contador.classList.add('contador');
  container.appendChild(contador);
    // Recorrer el array de imágenes
    for (const imagen of imagenes) {
      // Crear un elemento img
      const img = document.createElement("img");
      img.src = imagenCarga; // Asignar la URL de la imagen
      img.alt = "imagen de muestra";
      img.setAttribute('data-src', imagen);//creo el atributo para las imagenes reales
      img.classList.add('lazy-image');//agrego la clase
      // Agregar el elemento img al contenedor
      contenedor.appendChild(img);
    }
    // Devolver la estructura HTML completa
    return contenedor.outerHTML;
  }
  // Obtener la estructura HTML generada
  const estructuraHTML = generarEstructuraHTML(imagenes); 





// galeria
var primer = 0, ultimo = imagenes.length;
var indiceGlobal;
const imagenContainer = document.querySelector(".imagen");
const mostrarImg = document.querySelector('.mostrarImg');
var mostrarFoto = mostrarImg.querySelector('img');
const MostrarContador = document.querySelector('.contador');
// botones
const btnClose = document.querySelector('.close');
const btnAnt = document.querySelector('.ant');
const btnSig = document.querySelector('.sig');
const contBtn = document.querySelector('.containerBtn');

// saco indice y link
var indiceImagen = imagenContainer.addEventListener("click", (event) => {
    const imagenSeleccionada = event.target; // Obtener la imagen seleccionada link
    let src = imagenSeleccionada.src;
    const elementoEncontrado = imagenes.findIndex(numero => numero === src); // comparo el link y obtengo el indice
    if (elementoEncontrado != -1) {
        MostrarBotones(src);
        indiceGlobal = elementoEncontrado;
    } else {
        console.log("intente de nuevo");
    }
    let linkImg = imagenes[indiceGlobal]; // link buscado a traves del indice actual
    if(indiceGlobal != -1){
      
      mostrarFoto.src = linkImg; // muestra  foto
      MostrarContador.textContent = `${indiceGlobal + 1}/${ultimo}`;
    }
});
    // **Move event listener creation for btnSig outside of indiceImagen:**
    btnSig.addEventListener('click', () => {
      // Implement btnSig logic here (e.g., increase indiceGlobal)
      indiceGlobal = indiceGlobal+1;
      if(indiceGlobal >= primer && indiceGlobal <= ultimo-1){
        linkImg = imagenes[indiceGlobal];
        mostrarFoto.src = linkImg;
        MostrarContador.textContent = `${indiceGlobal + 1}/${ultimo}`;
      }else{
        indiceGlobal = ultimo-1;
      }
    });

btnAnt.addEventListener('click', () => {
  indiceGlobal = indiceGlobal-1;
  if(indiceGlobal >= primer && indiceGlobal <= ultimo-1){
    linkImg = imagenes[indiceGlobal];
    mostrarFoto.src = linkImg;
    MostrarContador.textContent = `${indiceGlobal + 1}/${ultimo}`;
  }else{
    indiceGlobal = primer;
  }
});
//no deja despazar hacia abajo el scroll del body
const body = document.querySelector('body');
function MostrarBotones(link) {
    body.style.overflow = 'hidden';
    btnClose.style.display = "block";
    btnAnt.style.display = "block";
    btnSig.style.display = "block";
    mostrarImg.style.display = "block";
    // boton cerrar
    btnClose.addEventListener('click', () => {
       body.style.overflow = 'scroll';
        btnClose.style.display = "none";
        btnAnt.style.display = "none";
        btnSig.style.display = "none";
        link.src = " "; // saco la imagen
        mostrarImg.style.display = "none";
        indiceGlobal = undefined;
    });
};


//cambiar con flechas
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    indiceGlobal = indiceGlobal-1;
  if(indiceGlobal >= primer && indiceGlobal <= ultimo-1){
    linkImg = imagenes[indiceGlobal];
    mostrarFoto.src = linkImg;
    MostrarContador.textContent = `${indiceGlobal + 1}/${ultimo}`;
  }else{
    indiceGlobal = primer;
  }

  } else if (event.key === 'ArrowRight') {
    indiceGlobal = indiceGlobal+1;
      if(indiceGlobal >= primer && indiceGlobal <= ultimo-1){
        linkImg = imagenes[indiceGlobal];
        mostrarFoto.src = linkImg;
        MostrarContador.textContent = `${indiceGlobal + 1}/${ultimo}`;
      }else{
        indiceGlobal = ultimo-1;
      }
  }
});




// Obtener imágenes perezosas lazy load
const imagenesPerezosas = document.querySelectorAll('.lazy-image');
// Crear observador de intersecciones
const observador = new IntersectionObserver((entradas, observador) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      // Cargar la imagen al entrar en el viewport
      const imagen = entrada.target;
      imagen.src = imagen.dataset.src;
      imagen.classList.remove('lazy-image'); // Eliminar la clase lazy-image
      // Dejar de observar la imagen una vez cargada
      observador.unobserve(imagen);
    }
  });
});
// Observar cada imagen perezosa
imagenesPerezosas.forEach(imagen => {
  observador.observe(imagen);
});









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
        const palabrasClave = 'Bama, bama,fotografía,Fotografía, catamarca,Catamarca, bamafotografia,Bamafotografia,bama fotografia, bamafotografía,Bamafotografía, bama fotografía, fotografos catamarca,Fotografos Catamarca, fotografos argentina,Fotografos Argentina, Mayra Nicole,mayra nicole, fotografia catamarca';
        agregarMeta('keywords', palabrasClave);

        // Agregar descripción (opcional)
        const descripcion = "¡Hola! Soy Mayra Nicole Barros, fotógrafa en Catamarca, Argentina. Desde 2019, convertí mi pasión por la fotografía en mi profesión. Mi trabajo abarca autorretratos, eventos sociales y proyectos documentales. He participado en exposiciones colectivas en San Fernando del Valle de Catamarca, como la Muestra del Taller Anual de Fotografía y 'Cuerpos'. Estoy lista para capturar tu próxima propuesta con dedicación y estilo artístico. ¡Hablemos!";
        agregarMeta('description', descripcion);

        // Agregar enlace canonical
        const urlCanonical = window.location.href; // Utiliza la URL actual
        agregarCanonical(urlCanonical);







// Ejemplo de array con links de imágenes (al menos 5)
const imagenes = [
  "https://i.ibb.co/D1CW9vW/image.jpg",
  "https://i.ibb.co/vzRkwmy/1.jpg",
  "https://i.ibb.co/GTvCZnK/2.jpg",
  "https://i.ibb.co/bsjkXSf/3.jpg",
  "https://i.ibb.co/Ht15dys/4.jpg",
  "https://i.ibb.co/rpKRwsg/5.jpg",
  "https://i.ibb.co/8drRVqr/6.jpg",
  "https://i.ibb.co/F463gW2/7.jpg",
  "https://i.ibb.co/pQV13Wv/8.jpg",
  "https://i.ibb.co/wZHXrZm/9.jpg",
  "https://i.ibb.co/Lxwdj1q/10.jpg",
  "https://i.ibb.co/4ZG1CFh/11.jpg",
  "https://i.ibb.co/P171Qh9/12.jpg",
  "https://i.ibb.co/PCLZn3n/13.jpg",
  "https://i.ibb.co/d6rHz7r/14.jpg",
  ];
  
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
      img.src = imagen; // Asignar la URL de la imagen
      img.alt = "imagen de muestra";
      img.loading = "lazy";
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

function MostrarBotones(link) {
    btnClose.style.display = "block";
    btnAnt.style.display = "block";
    btnSig.style.display = "block";
    mostrarImg.style.display = "block";
    // boton cerrar
    btnClose.addEventListener('click', () => {
        btnClose.style.display = "none";
        btnAnt.style.display = "none";
        btnSig.style.display = "none";
        link.src = " "; // saco la imagen
        mostrarImg.style.display = "none";
        indiceGlobal = undefined;
    });
};














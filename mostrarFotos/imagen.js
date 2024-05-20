// Ejemplo de array con links de imágenes (al menos 5)
const imagenes = [
  "https://picsum.photos/200/300",
  "https://picsum.photos/300/200",
  "https://picsum.photos/400/500",
  "https://picsum.photos/500/400",
  "https://picsum.photos/600/300",
  "https://picsum.photos/700/400",
  "https://picsum.photos/800/200",
  "https://picsum.photos/900/500",
  "https://picsum.photos/1000/600",
  "https://picsum.photos/1100/700",
  "https://picsum.photos/1200/800",
  "https://picsum.photos/1300/900",
  ];
  
  // Función para generar la estructura HTML
  function generarEstructuraHTML(imagenes) {
    // Crear el elemento contenedor
    const contenedor = document.querySelector(".imagen");
    // Recorrer el array de imágenes
    for (const imagen of imagenes) {
      // Crear un elemento img
      const img = document.createElement("img");
      img.src = imagen; // Asignar la URL de la imagen
      // Agregar el elemento img al contenedor
      contenedor.appendChild(img);
    }
    // Devolver la estructura HTML completa
    return contenedor.outerHTML;
  }
  
  
  // Obtener la estructura HTML generada
  const estructuraHTML = generarEstructuraHTML(imagenes);
  



//galeria
var imgActual,imgSig,imgAnt, primer = imagenes[0],ultimo = imagenes[7];
const imagenContainer = document.querySelector(".imagen");
const imageness = imagenContainer.querySelectorAll("img");
const btnClose = document.querySelector('.close');
const btnAnt = document.querySelector('.ant');
const btnSig = document.querySelector('.sig');
const contBtn =document.querySelector('.containerBtn');

var indiceImagen = imagenContainer.addEventListener("click", (event) => {
  const imagenSeleccionada = event.target; // Obtener la imagen seleccionada link
  const elementoEncontrado = imagenes.findIndex(numero => numero === imagenSeleccionada.src);//comparo el link y obtengo el indice
  imgActual = elementoEncontrado;
  imgAnt = (imgActual - 1); imgAnt = imagenes[imgAnt];
  imgSig = (imgActual + 1); imgSig = imagenes[imgSig];
  if(imagenSeleccionada != -1 && imagenSeleccionada !== imagenContainer){
   
    return  funcionalidad(imagenes,elementoEncontrado, imagenSeleccionada);
  } return false;
   
});

function funcionalidad(imagenescop, indice, imgselect){
let aux = imgselect.src;
//anterior btn
btnAnt.addEventListener('click', () =>{
  if(imgselect.className == 'imgActual' && indice > 0 && indice <= 7){
    indice = indice - 1;
    imgselect.src = imagenescop[indice];
  }
else{
  indice = 7;
  imgselect.src = imagenescop[indice];
}
    });
//suguiente btn
btnSig.addEventListener('click', () =>{
  if(imgselect.className == 'imgActual' && indice >= 0 && indice <= 6){
      indice = indice+1;
      imgselect.src = imagenescop[indice];
    }
  else{
    indice = 0;
    imgselect.src = imagenescop[indice];
  }
    });
    // Add 'imgActual' class for styling and functionality
    imgselect.classList.add('imgActual');
    // Toggle button visibility based on the presence of 'imgActual'
    if (imgselect.classList.contains('imgActual')) {
      btnClose.style.display = "block";
      btnAnt.style.display = "block";
      btnSig.style.display = "block";
    }
    // Add event listener for close button (assuming btnClose is defined)
    btnClose.addEventListener('click', () => {
      imgselect.classList.remove('imgActual');
      btnClose.style.display = "none"; // Ensure close button hides on click
      btnAnt.style.display = "none";
      btnSig.style.display = "none";
      //imgselect.className = 'nada';  Elimina todas las clases del elemento
      imgselect.src = aux;
    });
    
}



//menu retarcatil
const dropdown = document.querySelector('.dropdown');
const sublist = document.querySelector('.sublist');
const aparece = document.querySelector('.aparece');
const ulMain = document.querySelector('.ul-main');

dropdown.addEventListener('click', () => {
  sublist.classList.toggle('hover');
});

aparece.addEventListener("click", () =>{
ulMain.classList.toggle('seve');
});


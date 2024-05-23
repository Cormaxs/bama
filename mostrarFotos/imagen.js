// Ejemplo de array con links de imágenes (al menos 5)
const imagenes = [
  "https://github.com/Cormaxs/bama/blob/main/Fotos-Prueba.nicole/0.jpg?raw=true",
  "https://github.com/Cormaxs/bama/blob/main/Fotos-Prueba.nicole/1.jpg?raw=true",
  "https://github.com/Cormaxs/bama/blob/main/Fotos-Prueba.nicole/2.jpg?raw=true",
  "https://github.com/Cormaxs/bama/blob/main/Fotos-Prueba.nicole/3.jpg?raw=true",
  "https://github.com/Cormaxs/bama/blob/main/Fotos-Prueba.nicole/4.jpg?raw=true",
  "https://github.com/Cormaxs/bama/blob/main/Fotos-Prueba.nicole/5.jpg?raw=true",
  "https://github.com/Cormaxs/bama/blob/main/Fotos-Prueba.nicole/6.jpg?raw=true",
  "https://github.com/Cormaxs/bama/blob/main/Fotos-Prueba.nicole/7.jpg?raw=true",
  "https://github.com/Cormaxs/bama/blob/main/Fotos-Prueba.nicole/8.jpg?raw=true",
  "https://github.com/Cormaxs/bama/blob/main/Fotos-Prueba.nicole/9.jpg?raw=true",
  "https://github.com/Cormaxs/bama/blob/main/Fotos-Prueba.nicole/10.jpg?raw=true",
  "https://github.com/Cormaxs/bama/blob/main/Fotos-Prueba.nicole/11.jpg?raw=true",
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
      img.alt = "imagen de muestra";
      // Agregar el elemento img al contenedor
      contenedor.appendChild(img);
    }
    // Devolver la estructura HTML completa
    return contenedor.outerHTML;
  }
  
  
  // Obtener la estructura HTML generada
  const estructuraHTML = generarEstructuraHTML(imagenes);
  



//galeria
var primer = 0 ,ultimo = 11;
const imagenContainer = document.querySelector(".imagen");
const imageness = imagenContainer.querySelectorAll("img");
const btnClose = document.querySelector('.close');
const btnAnt = document.querySelector('.ant');
const btnSig = document.querySelector('.sig');
const contBtn =document.querySelector('.containerBtn');

var indiceImagen = imagenContainer.addEventListener("click", (event) => {
  const imagenSeleccionada = event.target; // Obtener la imagen seleccionada link
  let src = imagenSeleccionada.src;
  const elementoEncontrado = imagenes.findIndex(numero => numero === src);//comparo el link y obtengo el indice 
  
  if(imagenSeleccionada != -1 && imagenSeleccionada !== imagenContainer){
    return  funcionalidad(imagenes,elementoEncontrado, imagenSeleccionada);
  } return false;
   
});

function funcionalidad(imagenescop, indice, imgselect){
let aux = imgselect.src;
if(imgselect.className !== " "){
//anterior btn
btnAnt.addEventListener('click', () =>{
  if(imgselect.className == 'imgActual' && indice > primer  && indice <= ultimo){
    indice = (indice - 1);
    imgselect.src = imagenescop[indice];
    
  }
else {
  indice = ultimo;
  imgselect.src = imagenescop[indice];
}
    });
//suguiente btn
btnSig.addEventListener('click', () =>{
  if(imgselect.className == 'imgActual' && indice >= primer && indice <= (ultimo -1)){
      indice = indice + 1;
      imgselect.src = imagenescop[indice];
    }
  else{
    indice = primer;
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
      imgselect.src = aux;
      imgselect.classList.remove('imgActual');
      imgselect.className = ' ';
      btnClose.style.display = "none"; // Ensure close button hides on click
      btnAnt.style.display = "none";
      btnSig.style.display = "none";
      //imgselect.className = 'nada';  Elimina todas las clases del elemento
      
    });
    
}
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


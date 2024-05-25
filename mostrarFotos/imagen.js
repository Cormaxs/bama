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

    //crear el elemento para visualizar las imagenes
    const container = document.createElement('div');
  container.classList.add('mostrarImg');
  const image = document.createElement('img');
  image.classList.add('imagenActual');
  image.src = 'algo.jpg';
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
      // Agregar el elemento img al contenedor
      contenedor.appendChild(img);
    }
    // Devolver la estructura HTML completa
    return contenedor.outerHTML;
  }
  // Obtener la estructura HTML generada
  const estructuraHTML = generarEstructuraHTML(imagenes); 





//galeria
var primer = 0 ,ultimo = imagenes.length;
var indiceGlobal;
const imagenContainer = document.querySelector(".imagen");
const mostrarImg = document.querySelector('.mostrarImg');
//botones
const btnClose = document.querySelector('.close');
const btnAnt = document.querySelector('.ant');
const btnSig = document.querySelector('.sig');
const contBtn =document.querySelector('.containerBtn');

//saco indice y link
var indiceImagen = imagenContainer.addEventListener("click", (event) => {
  const imagenSeleccionada = event.target; // Obtener la imagen seleccionada link
  let src = imagenSeleccionada.src;
  const elementoEncontrado = imagenes.findIndex(numero => numero === src);//comparo el link y obtengo el indice 
  ;MostrarBotones(src);
  indiceGlobal = elementoEncontrado;
  let linkImg = imagenes[indiceGlobal];//link buscado a traves del indice actual
  var mostrarFoto =  mostrarImg.querySelector('img');
  mostrarFoto.src = linkImg;//muestra  foto
  const MostrarContador = document.querySelector('.contador');
  MostrarContador.textContent = `${indiceGlobal +1}/${ultimo}`;


   //botones
   btnSig.addEventListener('click', () => {
    indiceGlobal = indiceGlobal +1;
    linkImg = imagenes[indiceGlobal];
    if(indiceGlobal >= primer && indiceGlobal <= ultimo -1){
      MostrarContador.textContent = `${indiceGlobal +1}/${ultimo}`;
      return mostrarFoto.src = linkImg;//muestra  foto
    }else{
      return indiceGlobal = primer;
    }
   
  });
 
  btnAnt.addEventListener('click', () => {
    indiceGlobal = indiceGlobal -1;
    linkImg = imagenes[indiceGlobal];
    if(indiceGlobal >= primer && indiceGlobal <= ultimo -1 ){
    MostrarContador.textContent = `${indiceGlobal +1}/${ultimo}`;
    return mostrarFoto.src = linkImg;//muestra  foto
  }
  else{
    return indiceGlobal = ultimo;
  }
  });
  
});






function MostrarBotones(link){
  btnClose.style.display = "block";
  btnAnt.style.display = "block";
  btnSig.style.display = "block";
  mostrarImg.style.display = "block";
 //bton cerrar
 btnClose.addEventListener('click', () => {
  btnClose.style.display = "none"; 
  btnAnt.style.display = "none";
  btnSig.style.display = "none";
  link.src = " ";//saco la imagen
  mostrarImg.style.display = "none";
});
};














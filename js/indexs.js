//elementos a sumar numeros
var fotossacadas = document.getElementById('contador1');
var cursosHechos = document.getElementById('contador2');;
var clientes = document.getElementById('contador3');;
var numeroActual1 = 19900;
var numeroFinal1 = 20000;
var numeroActual2 = 0;
var numeroFinal2 = 50;
var numeroActual3 = 0;
var numeroFinal3 = 100;

function actualizarNumero1() {
    numeroActual1++;
    document.getElementById('contador1').textContent = numeroActual1;
  
    // Si el número actual no ha llegado al final, llama a la función de nuevo
    if (numeroActual1 < numeroFinal1) {
      setTimeout(actualizarNumero1, 10); // Ajusta la velocidad del contador (en milisegundos)
    }
  }


  function actualizarNumero2() {
    numeroActual2++;
    document.getElementById('contador2').textContent = numeroActual2;
  
    // Si el número actual no ha llegado al final, llama a la función de nuevo
    if (numeroActual2 < numeroFinal2) {
      setTimeout(actualizarNumero2, 20); // Ajusta la velocidad del contador (en milisegundos)
    }
  }

  
function actualizarNumero1() {
    numeroActual1++;
    document.getElementById('contador1').textContent = numeroActual1;
  
    // Si el número actual no ha llegado al final, llama a la función de nuevo
    if (numeroActual1 < numeroFinal1) {
      setTimeout(actualizarNumero1, 10); // Ajusta la velocidad del contador (en milisegundos)
    }
  }

  function actualizarNumero3() {
    numeroActual3++;
    document.getElementById('contador3').textContent = numeroActual3;
  
    // Si el número actual no ha llegado al final, llama a la función de nuevo
    if (numeroActual3 < numeroFinal3) {
      setTimeout(actualizarNumero3, 10); // Ajusta la velocidad del contador (en milisegundos)
    }
  }


 
  




  function detectarEntradaPantalla(elementoObjetivo, funcionContador) {
    const opciones = {
      root: null, // Observar en relación al viewport
      threshold: 0.5, // Activar cuando el 50% del elemento esté en pantalla
      margin: '-100px' // Activar con un margen de 100px antes de entrar en pantalla
    };
  
    const observador = new IntersectionObserver((entradas, observador) => {
      entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
          funcionContador(); // Inicia la función de contador cuando el elemento esté en pantalla
          observador.unobserve(elementoObjetivo); // Deja de observar el elemento después de activar el contador
        }
      });
    }, opciones);
  
    observador.observe(elementoObjetivo);
  }
  


  detectarEntradaPantalla(fotossacadas, actualizarNumero1);
  detectarEntradaPantalla(fotossacadas, actualizarNumero2);
  detectarEntradaPantalla(fotossacadas, actualizarNumero3);







  //preguntas frecuentes
const tarjetas = document.querySelectorAll('.tarjetaPFrecuente');

tarjetas.forEach(tarjeta => {
  const titulo = tarjeta.querySelector('h5');
  const contenido = tarjeta.querySelector('.contenido');

  titulo.addEventListener('click', () => {
    contenido.classList.toggle('escondido');
  });
});

 


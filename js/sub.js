  //preguntas frecuentes
  const tarjetas = document.querySelectorAll('.tarjetaPFrecuente');

  tarjetas.forEach(tarjeta => {
    const titulo = tarjeta.querySelector('h5');
    const contenido = tarjeta.querySelector('.contenido');
  
    titulo.addEventListener('click', () => {
      contenido.classList.toggle('escondido');
    });
  });
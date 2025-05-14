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

// Selecciona el botón "Contacto" dentro del <nav> con la clase 'menu'
const contacto = document.querySelector('.menu .ul-main li a button');

// Verifica si el botón fue encontrado
if (contacto) {

    // Comprueba si el texto del botón es 'Contacto'
    if (contacto.textContent.trim().toLowerCase() === 'contacto') {
        // Selecciona el enlace padre del botón
        let linkas = contacto.closest('a');

        // Define el mensaje para enviar por WhatsApp
        const mensaje = encodeURIComponent("¡Hola Mayra!\nVisité tu página web y me encanta tu trabajo. \nMe gustaría obtener más información sobre tus servicios de fotografía. \n¿Podríamos hablar sobre opciones y disponibilidad?");
        
        // Cambia el atributo href del enlace para redirigir a WhatsApp con el mensaje
        if (linkas) {
            linkas.href = `https://wa.me/543834577609?text=${mensaje}`;
        } else {
            console.error("No se encontró el enlace que contiene el botón.");
        }
    }
} else {
    console.error("El botón 'Contacto' no fue encontrado.");
}


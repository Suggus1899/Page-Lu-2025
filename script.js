// script.js

// Array de imágenes para el marco (puedes agregar más)
const imagenesMarco = [
    "imagen1.jpg",
    "imagen2.jpg",
    "imagen3.jpg",
    "imagen4.jpg",
    "imagen5.jpg",
    "imagen6.jpg",
    "imagen7.jpg",
    "imagen8.jpg",
    "imagen9.jpg",
    "imagen10.jpg",
    "imagen11.jpg",
    "imagen12.jpg",
    "imagen13.jpg",
    "imagen14.jpg",
    "imagen15.jpg",
    "imagen16.jpg"
];

// Función para cambiar las imágenes del marco
function cambiarImagenesMarco() {
    const marcoSuperior = document.querySelectorAll(".marco-superior img");
    const marcoInferior = document.querySelectorAll(".marco-inferior img");
    const marcoIzquierdo = document.querySelectorAll(".marco-izquierdo img");
    const marcoDerecho = document.querySelectorAll(".marco-derecho img");

    let indice = 0;

    setInterval(() => {
        // Cambiar imágenes del marco superior
        marcoSuperior.forEach((img, i) => {
            img.setAttribute('src', `/images/${imagenesMarco[(indice + i) % imagenesMarco.length]}`);
        });

        // Cambiar imágenes del marco inferior
        marcoInferior.forEach((img, i) => {
            img.setAttribute('src', `/images/${imagenesMarco[(indice + 4 + i) % imagenesMarco.length]}`);
        });

        // Cambiar imágenes del marco izquierdo
        marcoIzquierdo.forEach((img, i) => {
            img.setAttribute('src', `/images/${imagenesMarco[(indice + 8 + i) % imagenesMarco.length]}`);
        });

        // Cambiar imágenes del marco derecho
        marcoDerecho.forEach((img, i) => {
            img.setAttribute('src', `/images/${imagenesMarco[(indice + 12 + i) % imagenesMarco.length]}`);
        });

        indice++;
    }, 3000); // Cambiar imágenes cada 3 segundos
}

// Iniciar el carrusel de imágenes
cambiarImagenesMarco();

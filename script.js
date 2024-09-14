
const slidesContainer = document.querySelector('.aboutpage .slides');
const slides = document.querySelectorAll('.aboutpage .slide');
const boxes = document.querySelectorAll('.box');
let currentIndex = 0;

// Funzione per mostrare la slide corrente e il box corrispondente
function showSlide(index) {
    const offset = -index * 100; // Calcola l'offset basato sull'indice
    slidesContainer.style.transform = `translateX(${offset}%)`; // Applica la trasformazione

    // Nascondi tutte le slides e i box
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
    
    boxes.forEach((box, i) => {
        box.classList.remove('active-box');
        if (i === index) {
            box.classList.add('active-box');
        }
    });
}

// Funzione per passare alla prossima slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Incrementa l'indice in modo ciclico
    showSlide(currentIndex); // Mostra la nuova slide
}

// Funzione per passare alla slide precedente
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Decrementa l'indice in modo ciclico
    showSlide(currentIndex); // Mostra la nuova slide
}

// Aggiungi Event Listeners ai pulsanti
document.querySelector('.aboutpage .next').addEventListener('click', nextSlide);
document.querySelector('.aboutpage .prev').addEventListener('click', prevSlide);

// Inizializza la prima slide e il box corrispondente
showSlide(currentIndex);

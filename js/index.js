import { moviesMock } from "./mocks.js"

// mobile navbar 
const menu = document.querySelector('.hamburger-menu');
const crossIcon = document.querySelector('.icon-close');

document.addEventListener('DOMContentLoaded', eventos);

function eventos() {
    menu.addEventListener('click', showMenu);
    crossIcon.addEventListener('click', hideMenu);
}

function showMenu() {
    const menuMobile = document.querySelector('.navbar-mobile');
    if (menuMobile.classList.contains('hide')) {
        menuMobile.classList.toggle('show');
    }
}

function hideMenu() {
    const menuMobile = document.querySelector('.navbar-mobile');
    if (menuMobile.classList.contains('show')) {
        menuMobile.classList.toggle('show');
    }
}

// logout 
const logoutBtns = document.querySelectorAll(".logoutBtn");

logoutBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'login.html';
    });
});

// Variables para el modal
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');
const modalConfirm = document.getElementById('modal-confirm');
const modalCancel = document.getElementById('modal-cancel');
const closeModal = document.querySelector('.close-modal');

let currentMovie = null;
let currentAction = null;

// Función para mostrar el modal
function showModal(movie, action) {
    currentMovie = movie;
    currentAction = action;

    if (action === 'watch') {
        modalTitle.textContent = movie.title;
        modalMessage.textContent = movie.description;
        modalConfirm.textContent = 'Reproducir';
        modalConfirm.classList.add('confirm');
        modalConfirm.classList.remove('cancel');
    } else {
        modalTitle.textContent = `¿Ocultar ${movie.title}?`;
        modalMessage.textContent = 'Esta película no aparecerá más en tus recomendaciones. ¿Estás seguro?';
        modalConfirm.textContent = 'Sí, ocultar';
        modalConfirm.classList.add('confirm');
        modalConfirm.classList.remove('cancel');
    }

    modal.classList.add('active');
}

// Cerrar modal
function hideModal() {
    modal.classList.remove('active');
}

// Eventos del modal
closeModal.addEventListener('click', hideModal);
modalCancel.addEventListener('click', hideModal);
modalConfirm.addEventListener('click', function () {
    if (currentAction === 'watch') {
        alert(`Reproduciendo: ${currentMovie.title}`);
    } else {
        // alert(`Película ocultada: ${currentMovie.title}`);
        showToast(`"${currentMovie.title}" ha sido ocultada`);
        // ocultar  película
    }
    hideModal();
});

// Cerrar al hacer clic fuera del contenido
modal.addEventListener('click', function (e) {
    if (e.target === modal) {
        hideModal();
    }
});

// Generar carruseles
const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
    // Agregar películas al carrusel
    moviesMock.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
             <img src="${movie.image}" alt="${movie.title}">
             <div class="movie-actions">
                 <button class="action-btn watch-btn">Ver Película</button>
                 <button class="action-btn hide-btn">Ocultar Película</button>
             </div>
         `;

        // Eventos para los botones
        const watchBtn = movieCard.querySelector('.watch-btn');
        const hideBtn = movieCard.querySelector('.hide-btn');

        watchBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showModal(movie, 'watch');
        });

        hideBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showModal(movie, 'hide');
        });

        carousel.appendChild(movieCard);
    });

    // Configurar botones de navegación
    const container = carousel.parentElement;
    const prevBtn = container.querySelector('.prev');
    const nextBtn = container.querySelector('.next');

    carousel.addEventListener('scroll', () => {
        const scrollLeft = carousel.scrollLeft;
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;

        if (scrollLeft <= 10) {
            prevBtn.classList.add('hidden');
        } else {
            prevBtn.classList.remove('hidden');
        }

        if (scrollLeft >= maxScroll - 10) {
            nextBtn.classList.add('hidden');
        } else {
            nextBtn.classList.remove('hidden');
        }
    });

    prevBtn.addEventListener('click', () => {
        carousel.scrollBy({
            left: -carousel.clientWidth,
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', () => {
        carousel.scrollBy({
            left: carousel.clientWidth,
            behavior: 'smooth'
        });
    });

    if (carousel.scrollLeft <= 10) {
        prevBtn.classList.add('hidden');
    }
});



function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 6L9 17l-5-5"/>
        </svg>
        <span>${message}</span>
    `;

    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 6000);
}


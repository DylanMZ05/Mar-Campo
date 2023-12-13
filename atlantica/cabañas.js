window.addEventListener("load", function() {
    const entradaAnimada = document.querySelector(".entrada-animada");
    entradaAnimada.classList.add("active");
});

var swiper = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 4000,
    },
    speed: 1000,
    effect: "fade", // Cambia el efecto de transición a "fade"
    fadeEffect: {
        crossFade: true, // Habilita el efecto de fundido cruzado para un cambio suave
    },
});
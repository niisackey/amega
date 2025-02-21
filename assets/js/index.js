var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,       // default on extra-small screens
    spaceBetween: 10,       // gap between slides (px)
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // Responsive breakpoints
    breakpoints: {
      // >= 576px (small screens)
      576: {
        slidesPerView: 1,
      },
      // >= 768px (medium screens)
      768: {
        slidesPerView: 2,
      },
      // >= 992px (large screens)
      992: {
        slidesPerView: 3,
      },
    },
  });
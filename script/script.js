const ticketSwiper = () => {
  const parent = document.querySelector(".ticket-cards");

  if (!parent) return;

  const swiper = new Swiper(".ticket-cards", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOninteraction: false,
    },
    // spaceBetween: 20,
    height: 600,
    centeredSlides: true,
    slideActiveClass: "ticket--active",
  });
};

const reviewSwiper = () => {
  const parent = document.querySelector(".review-items");
  if (!parent) return;

  const swiper = new Swiper(".review-items", {
    slidesPerView: 3,
    
    loop: true,
    autoplay: {
      delay: 6000,
      disableOninteraction: false,
    },
    spaceBetween: 20,
    height: 600,
    centeredSlides: true,
    slideActiveClass: "review-item--active",
  });
};

const init = () => {
  ticketSwiper(), reviewSwiper();
};

document.addEventListener("DOMContentLoaded", init);

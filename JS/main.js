const swiper = new Swiper(".swiper", {
  effect: "fade",
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 2800,
      disableOnInteraction: false,
    },
  });

const menubtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu__list");

menubtn .addEventListener("click", () =>{
  menu.classList.toggle('menu__list-active');
})
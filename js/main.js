// BURGER MENU
const el_burgerButton = document.getElementById("burger__button");
el_burgerButton.addEventListener('click', function() {
  el_burgerButton.classList.toggle("active");
  document.getElementById("burger__menu").classList.toggle("active");
  document.getElementById("body").classList.toggle("overflow-hidden");
});

// SLIDER 1
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:15,
  nav:true,
  navText: ['<img src="img/slider-back.svg">', '<img src="img/slider-next.svg">'],
  responsive:{
      0:{
          items:1
      },
      575.98:{
          items:2
      }
  }
})
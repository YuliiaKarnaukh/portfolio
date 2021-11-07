// Cursor
magicMouse({
  hoverEffect: "circle-move",
  outerWidth: 20,
  outerHeight: 20
});

// Carousel
$(".single-item").slick({
  slidesToShow: 1,
  prevArrow: $(".arrowleft"),
  nextArrow: $(".arrowright"),
  dots: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000
      }
    }
  ]
});

document.querySelector(".colorCursor").addEventListener("mouseleave", () => {
  document.getElementById("magicMouseCursor").classList.remove("black-mouse");
});
   
document.querySelector(".colorCursor").addEventListener("mouseover", () => {
  document.getElementById("magicMouseCursor").classList.add("black-mouse");
});

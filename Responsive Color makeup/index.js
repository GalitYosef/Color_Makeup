let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");
let logo = document.querySelector(".logo");
let header = document.querySelector(".header");

// menu.onclick = () => {
//   menu.classList.toggle("fa-times");
//   navbar.classList.toggle("active");
// };

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

document.querySelectorAll(".image-slider img").forEach((images) => {
  images.onclick = () => {
    var src = images.getAttribute("src");
    document.querySelector(".main-home-image").src = src;
  };
});

var swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    pagination : {
        el:".swiper-pagination",
        clickable:true
    },
    autoplay : {
        delay:2500,
        disableOnInteraction:false
    },
    breakPoints :{
        0:{
            slidesPerView :0,
        },
        768:{
            slidesPerView :2,
        },
    },
    loop:true,
    grabCursor:true,

});

// navbar
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  let h3 = document.querySelector(".home .row .content h3");
  
  var firstPixelPosition = window.pageYOffset || document.documentElement.scrollTop;
  console.log(firstPixelPosition);
  if (firstPixelPosition === 0) {
    h3.classList.add('active');
  } else {
    h3.classList.remove('active');
  }
}
'use strict';
//ブレイクポイントを行き来するたびに再読み込みさせる
const breakPoint = 1023;
let resizeFlag;

window.addEventListener('load', () => {
  if (breakPoint < window.innerWidth) {
    resizeFlag = false;
  } else {
    resizeFlag = true;
  }
  resizeWindow();
}, false);

const resizeWindow = () => {
  window.addEventListener('resize', () => {
    if (breakPoint < window.innerWidth && resizeFlag) {
      console.log('OK');
      window.location.reload();
      resizeFlag = false;
    }
    else if (breakPoint >= window.innerWidth && !(resizeFlag)) {
      resizeFlag = true;
      console.log('NO');
      window.location.reload();
    }
  }, false);
}



var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 1024px
    1024: {
      centeredSlides: true,
      slidesPerView: 1.35,
      spaceBetween: 20,
    },
  },

});

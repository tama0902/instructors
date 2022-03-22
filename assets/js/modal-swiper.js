$(function () {

  var swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next--blue',
      prevEl: '.swiper-button-prev--blue',
    },
    breakpoints: {
      // when window width is >= 1024px
      1024: {
        // centeredSlides: true,
        // slidesPerView: 1.35,
        spaceBetween: 50,
      },
    },
  });

  // モーダル開く
  $('.card__item').on('click', function () {
    var index = $(this).index();//クリックした要素のインデックスを取得
    swiper.slideTo(index);//指定のスライドを呼び出し
    $('.ModalLayer').addClass('isShow');
  });
  $('.ModalLayer-Mask').on('click', function () {
    $('.ModalLayer').removeClass('isShow');
  });
  $('.JS_Click_CloseModal_Trigger').on('click', function () {
    $('.ModalLayer').removeClass('isShow');
  });

});

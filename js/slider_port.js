$(function(){
  var mySwiper = new Swiper ('.swiper-container', {
    spaceBetween:30,
    loop:true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.5,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2.5,
      },
      // when window width is >= 640px
      961: {
        slidesPerView:3.5,
      }
    }
  })
})
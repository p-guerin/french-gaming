$(document).ready(function(){
  $('.carousel').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});
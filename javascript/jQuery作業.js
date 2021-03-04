$(document).ready(function() {
//輪播效果
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
     }
})

//燈箱效果
  lightbox.option({
      'resizeDuration': 500,
      'wrapAround': true,
      'positionFromTop': 200,
    })

//下拉選單

$('.products').click(function(event) {
  /* Act on the event */
  event.preventDefault();
  $('.products').toggleClass('active');
  $('.productsOpen').slideToggle();
});
$('.liaise').click(function(event) {
  /* Act on the event */
  event.preventDefault();
  $('.liaise').toggleClass('active');
  $('.liaiseOpen').slideToggle();
});

//回到頂端
    $('.top').click(function(event) {
      event.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 1000);
    });     
});

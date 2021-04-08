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

// $('.dropdownBtn').click(function(event) {
//   /* Act on the event */
//   event.preventDefault();
//   $('.dropdownBtn').toggleClass('active');
//   $('.dropdownList').slideToggle();
// });
// $('.dropdownList').click(function(event) {
//   /* Act on the event */
//   event.preventDefault();
//   $('.dropdownBtn').toggleClass('active');
//   $('.dropdownList').slideToggle();
// });

// Dropdown
$(".dropdownBtn").click(function (event) {
  event.preventDefault();
  event.stopPropagation();
  $(this).parent().find(".dropdownList").stop().slideToggle();//$(他的).父層().尋找(下拉選單).停止.收合開關
  $(this).parent().siblings().find(".dropdownList").slideUp();//$(他的).父層().同層().尋找(下拉選單).收合
});
$("html:not(.dropdownBtn)").click(function () {
  $(".dropdownList").slideUp("slow");//點擊別個dropdownBtn收合(緩慢)另一個dropdownList
});


//回到頂端
//     $('.gotop').click(function(event) {
//       event.preventDefault();
//       $('html,body').animate({
//         scrollTop: 0 }, 1000);
//     function showBtnCondition() {
//       if ($('.gotop').scrollTop() > 600) {
//         $('gotop').fadeIn();
//       } else {
//         $('gotop').fadeOut();
//       }
//     }
//     $(window).scroll(showBtnCondition);
//     });     
// });

$(".jq-goTop").click(function (e) {
  e.preventDefault();
  $("html,body").animate(
    {scrollTop: 0,},200 )
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > 1200) {
      if ($(".goTop").hasClass("hide")) {
        $(".goTop").toggleClass("hide");
      }
    } else {
      $(".goTop").addClass("hide");
    }
  });
});


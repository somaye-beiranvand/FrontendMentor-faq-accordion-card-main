$(document).ready(function () {
  $(".sm-faq-head").on("click", function () {
    $(this).siblings(".sm-faq-body").stop();
    $(this).toggleClass("sm-fw-bold");
    $(this).siblings(".sm-faq-body").slideToggle();
    $(this).children(".sm-down-icon").toggleClass("rotate");
  });
});

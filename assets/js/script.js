$(document).ready(function () {
  function padding_cal() {
    let window_height = $(window).outerHeight();
    let sm_box_height = $(".sm-box").outerHeight();

    let sm_box_container_padding = Math.abs(
      (window_height - sm_box_height) / 2
    );
    if (sm_box_container_padding < 90) {
      return 90;
    } else return sm_box_container_padding;
  }

  $(".container").css("padding-top", padding_cal());
  $(".container").css("padding-bottom", padding_cal());
  $(window).resize(function () {
    $(".container").css("padding-top", padding_cal());
    $(".container").css("padding-bottom", padding_cal());
  });
  $(".sm-faq-head").on("click", function () {
    $(this).siblings(".sm-faq-body").stop();
    $(this).toggleClass("sm-fw-bold");
    $(this).siblings(".sm-faq-body").slideToggle();
    $(this).children(".sm-down-icon").toggleClass("rotate");
  });
});

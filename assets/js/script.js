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
  function img_mobile_height_cal() {
    let sm_faq_img_width = $(".sm-faq-img-mobile").width();
    let sm_faq_img_height = sm_faq_img_width / 1.09;
    let sm_faq_img_mt = -sm_faq_img_height / 2;
    $(".sm-faq-img-mobile").height(sm_faq_img_height);
    return sm_faq_img_mt;
  }
  $(".sm-faq-img-mobile").css("margin-top", img_mobile_height_cal);
  img_mobile_height_cal();
  $(".container").css("padding-top", padding_cal());
  $(".container").css("padding-bottom", padding_cal());
  $(window).resize(function () {
    $(".container").css("padding-top", padding_cal());
    $(".container").css("padding-bottom", padding_cal());
    img_mobile_height_cal();
    $(".sm-faq-img-mobile").css("margin-top", img_mobile_height_cal);
  });
  $(".sm-faq-head").on("click", function () {
    $(this).siblings(".sm-faq-body").stop();
    $(this).toggleClass("sm-fw-bold");
    $(this).siblings(".sm-faq-body").slideToggle();
    $(this).children(".sm-down-icon").toggleClass("rotate");
  });
});

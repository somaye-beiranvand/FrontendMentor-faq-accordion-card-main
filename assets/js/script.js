$(document).ready(function () {
  function img_mobile_height_mt_cal() {
    let sm_faq_img_width = $(".sm-faq-img-mobile").width();
    let sm_faq_img_height = sm_faq_img_width / 1.09;
    let sm_faq_img_mt = -sm_faq_img_height / 2;
    $(".sm-faq-img-mobile").height(sm_faq_img_height);
    return sm_faq_img_mt;
  }

  img_mobile_height_mt_cal();
  $(".sm-box").css("margin-top", Math.abs(img_mobile_height_mt_cal()));
  $(".sm-faq-img-mobile").css("margin-top", img_mobile_height_mt_cal);

  $(window).resize(function () {
    img_mobile_height_mt_cal();
    $(".sm-faq-img-mobile").css("margin-top", img_mobile_height_mt_cal);
    $(".sm-box").css("margin-top", Math.abs(img_mobile_height_mt_cal()));
  });
  $(".sm-faq-head").on("click", function () {
    $(this).siblings(".sm-faq-body").stop();
    $(this).toggleClass("sm-fw-bold");
    $(this).siblings(".sm-faq-body").slideToggle();
    $(this).children(".sm-down-icon").toggleClass("rotate");
  });
});

$(function () {
  //공지팝업
  $("#today_close").on("click", function () {
    $("#pop_notice").slideUp();
    $(".btn_popup").toggleClass("on");
    // 이벤트 발생 시 화살표 변경
  });

  $(".btn_popup").on("click", function () {
    $(this).toggleClass("on");
    $("#pop_notice").slideToggle();
  });
  //공지팝업

  //gnb
  $(".gnb").on("mouseenter", function () {
    $(".header").addClass("on");
    $(".gnb_bg").stop().slideDown();
    $(".dep2").stop().slideDown();
  });

  $("#pop_notice , .section, .util,#logo").on("mouseenter", function () {
    $(".header").removeClass("on");
    $(".gnb_bg").stop().slideUp();
    $(".dep2").stop().slideUp();
  });
  //gnb

  // 풀페이지
  $("#fullpage").fullpage({
    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
  });
  // 풀페이지
});

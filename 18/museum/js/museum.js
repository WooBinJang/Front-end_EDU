$(function () {
  /*-----------------공지팝업--------------------*/
  $("#today_close").on("click", function () {
    $("#pop_notice").slideUp();
    $(".btn_popup").addClass("on");
  });
  var state;
  $(".btn_popup").on("click", function () {
    $(this).toggleClass("on");
    $("#pop_notice").slideToggle();
  });

  /*-------------------gnb----------------------*/
  $(".gnb").on("mouseenter", function () {
    $(".header").addClass("on");
    $(".gnb_bg").stop().slideDown();
    $(".dep2").stop().slideDown();
  });

  $("#pop_notice,.section,.util,#logo").on("mouseenter", function () {
    $(".header").removeClass("on");
    $(".gnb_bg").stop().slideUp();
    $(".dep2").stop().slideUp();
  });
  /*-------------------slider1--------------------*/
  $(".slider1").bxSlider({
    auto: true,
    mode: "fade",
    pager: false,
    autoControls: true,
    autoControlsCombine: true,
    onSliderLoad: function () {
      $(".silder1 li").eq(0).children("img").addClass("on", 1500);
    },
    onSlideBefore: function ($slideElement, oldIndex, newIndex) {
      $slideElement.children("img").removeClass("on");
    },
    onSlideAfter: function ($slideElement, oldIndex, newIndex) {
      $slideElement.children("img").addClass("on");
      $(".count").text(newIndex + 1);
    },
  });
  $(".slider1 img").width("100vw");
  $(".slider1 img").height("100vh");

  /*-------------------slider1--------------------*/

  /*-------------------slider2--------------------*/

  /*-------------------slider2--------------------*/
  /*-------------------fullpage--------------------*/
  $("#fullpage").fullpage({
    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
    anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage", "lastPage"],
    menu: ".right-menu",
  });
});

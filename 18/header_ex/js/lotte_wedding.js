$(".dep1 li a").on("mouseenter", function () {
  $(this).siblings("ul").stop().slideDown();
  $(this).parent().siblings().children("ul").hide();
});

$(".logo ,.util").on("mouseenter", function () {
  $(".dep1 li a").siblings("ul").stop().slideUp();
});

$(".top_search_btn").on("click", function () {
  $(".search_area").toggle();
});

$(".search_close_btn").on("click", function () {
  $(".search_area").hide();
});

$(".top_login_btn").on("click", function () {
  $(".login_area_bg").show();
});

$(".login_close_btn").on("click", function () {
  $(".login_area_bg").hide();
});

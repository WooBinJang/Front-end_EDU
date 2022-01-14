$(".main li").on("mouseenter", function () {
  $(".sub").stop().slideDown();
});
$(".top_menu ,.inner h1 ,.mainvisual,.search_box").on(
  "mouseenter",
  function () {
    $(".sub").stop().slideUp();
  }
);

$(".btn_search").on("click", function () {
  $(".search_box").toggle();
});

$(".search_close_btn").on("click", function () {
  $(".search_box").hide();
});

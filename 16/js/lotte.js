$(function(){
  /*네비*/
  $('.dep1>li').on('mouseenter',function(){
    $(this).children('.dep2').fadeIn(300)
    $(this).siblings().children('.dep2').hide();
    $('.nav_bg').fadeIn(300);
    $('.search_area').hide();
  })
  
  
   $('.dep1>li').on('mouseleave',function(){
    $(this).children('.dep2').fadeOut(300)
    $('.nav_bg').fadeOut(300);
  })
  
  /*검색*/
  $('.top_search_btn').on('click',function(){
    //$('.search_area').show();
    //$('.nav_bg').show();
    $('.search_area').stop().slideDown(100)
    $('.nav_bg').stop().slideDown(100)
  })
  
  $('.search_close_btn').on('click',function(){
    //$('.search_area').hide();
   // $('.nav_bg').hide();
    $('.search_area').stop().slideUp(100)
    $('.nav_bg').stop().slideUp(100)
  })
  
  /*로그인창*/
  $('.top_login_btn').on('click',function(){
    $('.login_area_bg').fadeIn(250)
  })
  
  $('.login_close_btn').on('click',function(){
    $('.login_area_bg').fadeOut(250)
  })
  
})//jQ
















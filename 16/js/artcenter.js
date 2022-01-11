$(function(){
  /*상단메뉴*/
  $('.top_menu_left li').on('click',function(){
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
  })
  
  /*네비*/
  $('.dep1>li').on('mouseenter',function(){
    $(this).children('.dep2').show()
    $(this).siblings().children('.dep2').hide()
  })
  
   $('.dep1>li').on('mouseleave',function(){
     $(this).children('.dep2').hide()
  })
  
})//(e)jQ
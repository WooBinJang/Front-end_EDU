$('#arts li a').on('click',loadImg);
$('#modal').on('click',unloadImg);

var current;//현재 클릭한 li의 인덱스 번호가 저장될 변수 

//로드이미지 함수
function loadImg(){
  current=$(this).parent().index();
  console.log(current)
  $(this).children('img').css({opacity:0});
  var li_width=$(this).parent().width();//현재 클릭한 a 부모li의 넓이 
  var li_height=$(this).parent().height();//현재 클릭한 a 부모li의 높이
  var li_left=$(this).parent().position().left+10;//현재 클릭한 a부모li의 왼쪽위치 
  var li_top=$(this).parent().position().top+10//현재 클릭한 a부모li의 상단위치  
  var $clone=$(this).children('img').clone();//복제해서 변수에 저장 
  $clone.attr({class:'bigImg'}).appendTo('body');//복제본에 클래스 적용 후 바디의 마지막 자식으로 넣는다.
  var cloneWidth=$clone.width();//복제본의 원본의 넓이
  var cloneHeight=$clone.height();//복제본의 원본의 높이
  
  $clone.css({
    left:li_left,
    top:li_top,
    width:li_width,
    height:li_height,
    opacity:1
  }).animate({
     width:cloneWidth,
     height:cloneHeight,
     left:$(window).width()/2-(cloneWidth/2),
     top:$(window).height()/2-(cloneHeight/2),
  })
   // 복제본에 css 초기값 설정 후 최종 값으로 animate 시킨다. 
  
  
  $('#modal').fadeIn(); //dim 배경 창 열기
  
   var txt=$(this).attr('data-title');// a태그의 data-title속성값 을 가져와서 변수에 저장 
   var caption=$('<p></p>')//p태그 하나 만들고 변수에 저장 
   caption.attr({id:'titleBox'}).text(txt).hide();//p태그에 아이디 적용 ,문자 적용후 display:none처리
   caption.appendTo('body').slideDown();//문서에 넣고 슬라이드 다운으로 열기
  
}//로드 이미지 함수 끝 



//언로드이미지 함수
function unloadImg(){
  var c_width=$('#arts li').eq(current).width();
  var c_height=$('#arts li').eq(current).height();
  var c_left=$('#arts li').eq(current).position().left+10;
  var c_top=$('#arts li').eq(current).position().top+10;

  console.log(c_width+"\n"+c_height+"\n"+c_left+"\n"+c_top)
  
  $('.bigImg').animate({
        left:c_left,
        top:c_top,
        width:c_width,
        height:c_height
  },function(){
     $(this).remove();//대상삭제
     $('#arts img').css({opacity:1})
  })
  
   $('#modal').fadeOut(); 
    //타이틀 박스 닫기
   $('#titleBox').slideUp(function(){$(this).remove();})
  
}//언로드이미지 함수끝









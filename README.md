# Front-end 
 
 CSS
 ----------------
 블록 요소 안에 이미지가 있을떄 이미지 하단 공백 처리

인라인 요소는 보이지 않는 행 생성

1 )이미지를 블록 처리 2) 이미지의 기준선을 박스안의 상단이나 하단 중앙으로 정렬
vertical-align : top / middle / bottom

선택자
선택자 : first-child
선택자 : last-child
선택자 : nth-child()
선택자 : nth-of-type(

가상 선택자 pseude 슈도 선택자

가상 클래스 (상황)
a : link 링크걸린 상태
a : visited 링크를 한번 방문 후
a : hover 링크에 마우스가 올려졌을때
a : active 링크를 클릭

가상 요소 (대상요소)
::after {content:'';} : 대상요소의 마지막 자식으로 요소를 동적으로 추가
::before {content:'';} : 대상요소의 첫 번째 자식으로 요소를 동적으로 추가

background-size : cover / contain / % /px

position
static :default 기본 흐름 (마크업된 순서대로 나타나는것)
relative : 현재대상 요소의위치를 기준으로 위치를 지정하는것 (현재흐름 유지)
absolute : position를 가진 요소 기준를 지정하나
fixed : 브라우저 기준으로 위치를 지정하는것

위치속성
left : px %
right : px %
top : px %
bottom : px %

position : absolute / fixed 가운데 맞추기
margin : auto -> 적용 x

1.  left: 50%; top:50%;
    margin-left - 넓이의 1/2;
    margin-top - 높이의 1/2;
2.  left: 0; right: 0; top: 0; bottom: 0;
    margin : auto;
3.  transform : translate(px,%)

position : absolute / fixed 가운데 맞추기
margin : auto -> 적용 x

1.  left: 50%; top:50%;
    margin-left - 넓이의 1/2;
    margin-top - 높이의 1/2;
2.  left: 0; right: 0; top: 0; bottom: 0;
    margin : auto;
3.  transform : translate(px,%)

box-sizing
box-sizing : border-box
box-sizing : contnent-box

transform
transform : 변형함수
transform : translate() , translateX() ,translateY() 이동
transform : rotate() 회전각도 deg
transform : scale() ,scaleX() ,scaleY() 크기
transform : skew(),skewX() ,skewY() 기울기 deg

transition : 요소의 속성이 변할때 중간단계를 만들어 준다. ( 속성변화의 중간 단계 생성 )
transition-property : 변화되는 속성명 / all
transition-duration : 동작 시간
transition-delay : 동작전 지연 시간
transition-timing-function : 진행률 진행 시간 조절 가속 감속 ... linear / ease / esse-in / ease-out / ease-in-out / cubic-bezier(n,n,n,n)
transition : 축약 가능

border-radius : 50%
box-shadow : insets xoffset yoffset blur color ;
text-shadow :

background-attachment :
background-clip : 백그라운드가 지정되는 영역(클리핑 되는 영역)
: bordr-box (default) / padding-box / conteent-box
background-color :
background-image :
background-origin : 백그라운드 이미지가 시자괴는 시작 기준점
: bordr-box / padding-box (default) / conteent-box
background-position :
background-repeat :
background-size :


속성 선택자
input tag 때 자주사용
ex) input[type="value"]

단위
절대값 px
상대값 % rem em vw vh vmin

em 상위요소의 폰트사이즈를 기준으로

default font-size 일 경우
font-size : 100% / 1em / 16px 동일하다

em -> px _ em
px -> px / 16
px -> px/16 _ 100

min : 이상 ( 최소값 최소 이사이즈보다 크다)
min : 이하 ( 최대값 최대 이사이즈보다 작다)
min-width : 최소넓이
min-height : 최소높이
max-width : 최대넓이
max-height : 최대높이

크기 관련 속성의 값으로
calc (50% , - 2px)


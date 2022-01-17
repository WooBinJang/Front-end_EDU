var userId = "Kim";
console.log(userId); // return : "Kim"
console.log(window.userId); // return : "Kim"
//var 키워드로 만든 전역변수는 window에도 보관된다

window.userAge = 60; // 전역변수 만들기
console.log(window.userAge); // return : 60

var user_score = 0;
var com_score = 0;
var current = 0;
var answer = "";
var interval = setInterval(function () {
  current++;
  if (current > 3) {
    current = 1;
  }
  $(".R-P-S-item >img").attr("src", `./img/${current}.png`);
}, 100);
// setInterval 0.1초당 이미지 변경

$("#rock").on("click", function () {
  var value = $(".R-P-S-item >img").attr("src");

  if (value === "./img/1.png") {
    answer = "보";
  } else if (value === "./img/2.png") {
    answer = "가위";
  } else if (value === "./img/3.png") {
    answer = "바위";
  }

  if (answer === "가위") {
    alert("이겼다.");
    $(".user-count .count-score").text(`${++user_score} 점`);
  } else if (answer === "바위") {
    alert("비겼다.");
  } else if (answer === "보") {
    alert("졌다..");
    $(".gamer-count .count-score").text(`${++com_score} 점`);
  }
});

$("#paper").on("click", function () {
  var value = $(".R-P-S-item >img").attr("src");

  if (value === "./img/1.png") {
    answer = "보";
  } else if (value === "./img/2.png") {
    answer = "가위";
  } else if (value === "./img/3.png") {
    answer = "바위";
  }

  if (answer === "가위") {
    alert("졌다.");
    $(".gamer-count .count-score").text(`${++com_score} 점`);
  } else if (answer === "바위") {
    alert("이겼다.");
    $(".user-count .count-score").text(`${++user_score} 점`);
  } else if (answer === "보") {
    alert("비겼다..");
  }
});

$("#scissors").on("click", function () {
  var value = $(".R-P-S-item >img").attr("src");

  if (value === "./img/1.png") {
    answer = "보";
  } else if (value === "./img/2.png") {
    answer = "가위";
  } else if (value === "./img/3.png") {
    answer = "바위";
  }

  if (answer === "가위") {
    alert("비겼다.");
  } else if (answer === "바위") {
    alert("졌다.");
    $(".gamer-count .count-score").text(`${++com_score} 점`);
  } else if (answer === "보") {
    alert("이겼다..");
    $(".user-count .count-score").text(`${++user_score} 점`);
  }
});

$("#reset").on("click", function () {
  $(".user-count .count-score").text("0 점");
  $(".gamer-count .count-score").text("0 점");
  user_score = 0;
  com_score = 0;
});

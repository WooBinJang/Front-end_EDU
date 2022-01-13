var jongchan = {
  name: "이종찬",
  job: "경찰",
  picture: 0,
};
var seok = {
  name: "이석",
  job: "가수",
  picture: -200,
};
var junu = {
  name: "김준우",
  job: "회사원",
  picture: -400,
};

function updateProfile(people) {
  $(".picture").animate({ backgroundPosition: people.picture });
  $(".job").text(people.job);
  $(".name").text(people.name);
}
$(".mem1").on("click", function () {
  updateProfile(jongchan);
});

$(".mem2").on("click", function () {
  updateProfile(seok);
});

$(".mem3").on("click", function () {
  updateProfile(junu);
});

let date = new Date();
let month = date.getMonth() + 1;
let day = date.getDate();
if (month < 10) {
  month = month.toString().padStart(2, "0");
}
if (day < 10) {
  day = day.toString().padStart(2, "0");
}

let today = `${date.getFullYear()}.${month}.${day}`;

$(".lotto-date").text(today);

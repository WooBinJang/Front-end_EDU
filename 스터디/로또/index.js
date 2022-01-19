var lotto = 0;
let lottoNums = []; // 1 ~ 45
let winningLottoNums = []; // 당첨번호 배열

for (let i = 1; i <= 45; i++) {
  lottoNums.push(i);
}

$(".input-money-btn").on("click", function () {
  let price = $(".input-money-box input").val();

  if (price < 1000) {
    alert("1000원 이상 금액을 입력해주세요");
  } else {
    lotto = parseInt(Number(price) / 1000);
    let changePrice = Number(price) % 1000;
    alert(`입력된 금액에서 ${changePrice}원을 제외한 금액으로 로또를 구매했습니다.
    거스름돈 챙겨가세요 :)`);
  }

  $(".lotto-count strong").html(lotto);

  /* 나의 로또 번호 */
  let myLottoNums = Array.from({ length: lotto }, () => new Array()); // 나의 로또 번호
  for (let i = 0; i < lotto; i++) {
    while (myLottoNums[i].length !== 6) {
      let lottoCnt = 0;
      let randomNum = Math.floor(Math.random() * lottoNums.length + 1);
      myLottoNums[i].push(randomNum);

      for (let j = 0; j < myLottoNums[i].length; j++) {
        if (myLottoNums[i][j] == randomNum) {
          lottoCnt++;
        }
        if (lottoCnt == 2) {
          myLottoNums[i].pop();
        }
      }
    }
  }
  /* 나의 로또 번호 */
  for (let i = 0; i < myLottoNums.length; i++) {
    $(".my-lotto-item").append(
      `<div>
        <img src="./assets/lotto.png" alt="#" class="lotto-img" />
        <span class="my-lotto-nums">${myLottoNums[i]} </span>
      </div>`
    );
  }
  /* 이번 회차 로또 번호 */

  while (winningLottoNums.length !== 7) {
    let lottoCnt = 0;
    let randomNum = Math.floor(Math.random() * lottoNums.length + 1);
    winningLottoNums.push(randomNum);

    for (let i = 0; i < winningLottoNums.length; i++) {
      if (winningLottoNums[i] == randomNum) {
        lottoCnt++;
      }
      if (lottoCnt == 2) {
        winningLottoNums.pop();
      }
    }
  }
  /* 이번 회차 로또 번호 */

  $(".winning-lotto-nums").append(
    `<div>
    <img src="./assets/lotto.png" alt="#" class="lotto-img" />
    <span>${winningLottoNums[0]},${winningLottoNums[1]},${winningLottoNums[2]},${winningLottoNums[3]},${winningLottoNums[4]},${winningLottoNums[5]},</span>
    <span class="bonus-num">+ 보너스 번호 ${winningLottoNums[6]}</span>
    </div>`
  );
});

//$("#item").append("<div class='col-xs-4'></div>");
$(".main-content-box-header > button ").on("click", function () {
  $(".my-lotto .my-lotto-item div").slideToggle();
  console.log($(".my-lotto-nums").text());
});
console.log(winningLottoNums);

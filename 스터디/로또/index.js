var lotto = 0;

let lottoNums = [];
for (let i = 1; i <= 45; i++) {
  lottoNums.push(i);
}

$(".input-money-btn").on("click", function () {
  let price = $(".input-money-box input").val();

  if (price < 1000) {
    alert("1000원 금액을 입력해주세요");
  } else {
    lotto = parseInt(Number(price) / 1000);
    let changePrice = Number(price) % 1000;
    alert(`입력된 금액에서 ${changePrice}원을 제외한 금액으로 로또를 구매했습니다.
    거스름돈 챙겨가세요 :)`);
  }

  $(".lotto-count strong").html(lotto);

  let myLottoNums = Array.from({ length: lotto }, () => new Array());

  for (let i = 0; i < lotto; i++) {
    for (let j = 0; j < 6; j++) {
      let randomNum = lottoNums[Math.floor(Math.random() * lottoNums.length)];
      // 중복 제거 조건문 생성
    }
  }
  console.log(myLottoNums);
});

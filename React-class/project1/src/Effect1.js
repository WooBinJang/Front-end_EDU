import React, { useEffect, useState } from "react";

function Effect1() {
  let [notice, noticeCng] = useState(false);
  useEffect(() => {
    console.log("시작");
    return () => {
      console.log("종료");
    };
  }, [notice]);
  return (
    <div>
      <div>
        <button onClick={() => noticeCng(!notice)}>
          {notice ? "공지창 열기" : "공지창 닫기"}
        </button>
        {notice && <div> 공지창 영역입니다</div>}
      </div>
    </div>
  );
}

export default Effect1;

import React, { useContext, useEffect, useState } from "react";
import { GlobalConetext } from "./App";

function Effect2() {
  const obj = useContext(GlobalConetext);
  let [say, satCng] = useState(true);
  useEffect(() => {
    console.log("시작");
    let saying = setTimeout(() => {
      satCng(false);
    }, 4000);
    return () => {
      console.log("끝");
      clearTimeout(saying);
    };
  }, []);
  return (
    <div>
      {say === true ? <h1> 오늘의 명언 : 일찍 자고 일찍 일어나자</h1> : null}
      <h2>{obj.name}</h2>
      <h2>{obj.age}</h2>
    </div>
  );
}

export default Effect2;

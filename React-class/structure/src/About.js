import React from "react";
import { useParams } from "react-router-dom";

const data = {
  about1: {
    name: "홍길동",
    address: "서울",
  },
  about2: {
    name: "김철수",
    address: "경기",
  },
  about3: {
    name: "이순신",
    address: "부산",
  },
};

function About() {
  const params = useParams();
  const about = data[params.user];
  console.log(data.about1);

  return (
    <div>
      <h1>소개페이지</h1>
      {about ? (
        <div>
          <h1>{about.name}</h1>
          <h2>{about.address}</h2>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
}

export default About;

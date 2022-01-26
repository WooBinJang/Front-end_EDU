import React from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardLink,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

const newList = {
  news01: {
    title: "작년 성장률 4.0%..코로나 충격",
    day: "2022,01.25",
    contents: " 코스닥 900선 10개월 만에 붕괴 경향신문 올해는 모든 것이 하락",
  },
  news02: {
    title: ' 집 때문에" 지난해 10만 명 탈서울..',
    day: "2022,01.26",
    contents:
      "지난해 서울에서 10만 명이 넘는 인구가 다른 지역으로 순유출되면서 3년 만에 가장 큰 폭의 탈 서울 현상",
  },
  news03: {
    title: "희귀난치병인 크론병 치료에 희소식",
    day: "2022,01.27",
    contents:
      " 평생 약물을 투여해야 하는 희귀난치병인 크론병 치료에 희소식이 전해졌다.",
  },
  news04: {
    title: "오스템 판박이..100억대 횡령 구청직원 긴급체포 ",
    day: "2022,01.26",
    contents:
      "2천억원대 회사 자금을 빼돌린 오스템임플란트 횡령 사건과 유사한 일이 서울의 한 구청에서 발생했습니다.",
  },
  news05: {
    title: "세시풍속 체험·온라인 국악공연",
    day: "2022,01.28",
    contents:
      "  연휴에도 서울 곳곳에서 다양한 문화예술행사가 펼쳐진다. 25일 서울시에 따르면 연휴 기간 남산골한옥마을과 운현궁에서는 윷놀이",
  },
  news06: {
    title: "입주 3년 된 아파트 타일이 우르르",
    day: "2022,01.26",
    contents:
      " 에서 양치를 하고 있는데, 갑자기 욕실 타일이 부서져 내리는 일이 벌어졌습니다. ",
  },
};

function News() {
  let history = useHistory();
  const params = useParams();
  const news = newList[params.news];

  return (
    <div className="News">
      <Card>
        <CardBody>
          <CardTitle tag="h5">{news.title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {news.day}
          </CardSubtitle>
        </CardBody>
        <img
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          width="100%"
        />
        <CardBody>
          <CardText>{news.contents}</CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>
      <Button
        color="primary"
        onClick={() => {
          history.goBack();
        }}
      >
        뒤로가기
      </Button>
      <Button
        color="info"
        onClick={() => {
          history.push("/");
        }}
      >
        {" "}
        go
      </Button>
    </div>
  );
}

export default News;

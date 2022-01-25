import React from "react";
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

function News() {
  let history = useHistory();
  return (
    <div className="News">
      <Card>
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle>
        </CardBody>
        <img
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          width="100%"
        />
        <CardBody>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
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

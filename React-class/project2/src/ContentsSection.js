import React from "react";
import {
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

function ContentsSection() {
  return (
    <div className="ContentsSection">
      <div className="ContentsSection-headar">
        <h2>Recent Nems</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
          me
        </p>
      </div>

      <CardGroup>
        <Card>
          <CardImg
            alt="Card image cap"
            src={require("./img/news01.jpg")}
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Card image cap"
            src={require("./img/news01.jpg")}
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Card image cap"
            src={require("./img/news01.jpg")}
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
          </CardBody>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card>
          <CardImg
            alt="Card image cap"
            src={require("./img/news01.jpg")}
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Card image cap"
            src={require("./img/news01.jpg")}
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Card image cap"
            src={require("./img/news01.jpg")}
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
}

export default ContentsSection;

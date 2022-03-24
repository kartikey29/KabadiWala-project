import React from "react";
import CardCustom from "../../Card/CardCustom";
import { Row, Col, Container } from "react-bootstrap";

const Article = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <CardCustom
              title={"Lorem ipsum "}
              summary={
                "orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat aliquet auctor."
              }
              src={
                "https://media.istockphoto.com/photos/digitally-enhanced-shot-of-a-graph-showing-the-ups-and-downs-shares-picture-id1322201350"
              }
            />
          </Col>
          <Col>
            <CardCustom
              title={"dolor sit amet"}
              summary={
                "Cras sed suscipit eros. Morbi dictum odio quis egestas efficitur. Proin nisl orci, accumsan ac cursus"
              }
              src={
                "https://media.istockphoto.com/photos/digitally-enhanced-shot-of-a-graph-showing-the-ups-and-downs-shares-picture-id1322201350"
              }
            />
          </Col>
          <Col>
            <CardCustom
              title={"Lorem ipsum "}
              summary={
                "orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat aliquet auctor."
              }
              src={
                "https://media.istockphoto.com/photos/digitally-enhanced-shot-of-a-graph-showing-the-ups-and-downs-shares-picture-id1322201350"
              }
            />
          </Col>
          <Col>
            <CardCustom
              title={"dolor sit amet"}
              summary={
                "Cras sed suscipit eros. Morbi dictum odio quis egestas efficitur. Proin nisl orci, accumsan ac cursus"
              }
              src={
                "https://media.istockphoto.com/photos/digitally-enhanced-shot-of-a-graph-showing-the-ups-and-downs-shares-picture-id1322201350"
              }
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Article;

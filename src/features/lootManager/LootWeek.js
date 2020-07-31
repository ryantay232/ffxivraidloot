import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { jobIcons, eqIcons, TWINE, GLAZE } from "../../assets/index.js";
import { deleteWeek } from "./lootManagerSlice.js";
import LootWeekEdit from "./LootWeekEdit.js";

function LootWeek(props) {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  console.log(props.weekData);

  return (
    <Container fluid>
      <Row xs={1} sm={1} md={1} lg={2}>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>1st Floor</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>2nd Floor</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>3rd Floor</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>4th Floor</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Book Exchanges</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Tome Exchanges</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Button variant="secondary" onClick={() => setShow(true)}>
          Edit
        </Button>
        <Button
          variant="danger"
          onClick={() =>
            dispatch(
              deleteWeek({
                weekNo: props.weekNo,
              })
            )
          }
        >
          Delete week
        </Button>
      </Row>
      <LootWeekEdit
        weekNo={props.weekNo}
        weekData={props.weekData}
        show={show}
        handleClose={() => setShow(false)}
      />
    </Container>
  );
}

export default LootWeek;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

import { jobIcons, eqIcons, TWINE, GLAZE } from "../../assets/index.js";
import { deleteWeek } from "./lootManagerSlice.js";
import LootWeekEdit from "./LootWeekEdit.js";

function LootWeek(props) {
  const dispatch = useDispatch();

  const lootStructure = {
    1: {
      1: {
        loot: "",
        member: "",
      },
      2: {
        loot: "",
        member: "",
      },
      3: {
        loot: "",
        member: "",
      },
    },
    2: {
      1: {
        loot: "",
        member: "",
      },
      2: {
        loot: "",
        member: "",
      },
      3: {
        loot: "glaze",
        member: "",
      },
      4: {
        loot: "tomestone",
        member: "",
      },
    },
    3: {
      1: {
        loot: "",
        member: "",
      },
      2: {
        loot: "",
        member: "",
      },
      3: {
        loot: "twine",
        member: "",
      },
      4: {
        loot: "ester",
        member: "",
      },
    },
    4: {
      1: {
        loot: "mainArm",
        member: "",
      },
      2: {
        loot: "body",
        member: "",
      },
      3: {
        loot: "",
        member: "",
      },
    },
  }; // {floor: drop: {loot: string, member: string}}

  const floor1Drops = ["waist", "earrings", "necklace", "bracelets", "ring1"];
  const floor2Drops = ["head", "hands", "feet"];
  const floor3Drops = ["head", "hands", "feet", "legs"];
  const [floor1State, setFloor1State] = useState(lootStructure[1]);

  const [show, setShow] = useState(false);

  console.log(props.weekData);
  return (
    <Container fluid>
      <Row xs={1} sm={1} md={2} lg={2} xl={4}>
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

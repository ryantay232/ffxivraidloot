import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

import Equipment from "../../components/equipment/Equipment.js";
import { jobIcons, TWINE, GLAZE } from "../../assets/index.js";
import MemberEdit from "./MemberEdit.js";

function Member(props) {
  const characterName = props.characterName;
  const job = props.job;
  const ilv = props.ilv;
  const current = props.current;
  const bis = props.bis;
  const twine = props.twine;
  const glaze = props.glaze;

  const [show, setShow] = useState(false);

  return (
    <Container fluid className="Member border rounded">
      {/*Member screen*/}
      <Row>
        <Col>
          <h4>
            <img width={50} height={50} src={jobIcons[job]} alt="job" />{" "}
            {characterName} <Badge variant="primary">ilv {ilv}</Badge>
          </h4>
        </Col>
        <Col xs={3}>
          <Button
            className="mt-2"
            variant="secondary"
            onClick={() => setShow(true)}
          >
            Edit
          </Button>
        </Col>
      </Row>
      <Row xs={1} sm={1} md={2}>
        <Col>
          <Equipment name="Current" list={current} />
        </Col>
        <Col>
          <Equipment name="BIS" list={bis} />
        </Col>
      </Row>
      Remaining:
      <Row>
        <Col>
          <h5>
            <img width={30} height={30} src={TWINE} alt="twine" /> :{" "}
            <Badge variant="primary">{twine}</Badge>
          </h5>
        </Col>
        <Col>
          <h5>
            <img width={30} height={30} src={GLAZE} alt="glaze" /> :{" "}
            <Badge variant="primary">{glaze}</Badge>
          </h5>
        </Col>
      </Row>
      {/*Pop up member edit modal*/}
      <MemberEdit
        memberId={props.memberId}
        characterName={characterName}
        job={job}
        currentEq={current}
        bisEq={bis}
        show={show}
        handleClose={() => setShow(false)}
      />
    </Container>
  );
}

export default Member;

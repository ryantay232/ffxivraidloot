import React, { useState } from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

import Equipment from "../equipment/Equipment.js";
import {
  selectCharacterName,
  selectJob,
  selectIlv,
  selectCurrent,
  selectBis,
  selectTwine,
  selectGlaze,
} from "./memberSlice.js";
import { jobIcons, TWINE, GLAZE } from "../../assets/index.js";
import MemberEdit from "./MemberEdit.js";

function Member(props) {
  const characterName = useSelector(selectCharacterName)[props.memberId];
  const job = useSelector(selectJob)[props.memberId];
  const ilv = useSelector(selectIlv)[props.memberId];
  const currentEq = useSelector(selectCurrent)[props.memberId];
  const bisEq = useSelector(selectBis)[props.memberId];
  const twine = useSelector(selectTwine)[props.memberId];
  const glaze = useSelector(selectGlaze)[props.memberId];

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
          <Button className="mt-2" variant="secondary" onClick={(() => setShow(true))}>
            Edit
          </Button>
        </Col>
      </Row>
      <Row xs={1} sm={1} md={2}>
        <Col>
          <Equipment name="Current" list={currentEq} />
        </Col>
        <Col>
          <Equipment name="BIS" list={bisEq} />
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
        currentEq={currentEq}
        bisEq={bisEq}
        show={show}
        handleClose={() => setShow(false)}
      />
    </Container>
  );
}

export default Member;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
} from "./memberSlice.js";
import * as Icons from "../../assets/index.js";
import MemberEdit from "./MemberEdit.js";

function Member() {
  const jobs = {
    PLD: Icons.PLD,
    WAR: Icons.WAR,
    DRK: Icons.DRK,
    GNB: Icons.GNB,
    WHM: Icons.WHM,
    SCH: Icons.SCH,
    AST: Icons.AST,
    MNK: Icons.MNK,
    DRG: Icons.DRG,
    NIN: Icons.NIN,
    SAM: Icons.SAM,
    BRD: Icons.BRD,
    MCH: Icons.MCH,
    DNC: Icons.DNC,
    BLM: Icons.BLM,
    SMN: Icons.SMN,
    RDM: Icons.RDM,
  };

  const characterName = useSelector(selectCharacterName);
  const job = useSelector(selectJob);
  const ilv = useSelector(selectIlv);
  const currentEqList = useSelector(selectCurrent);
  const bisEqList = useSelector(selectBis);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid className="Member border rounded">
      {/*Member screen*/}
      <Row>
        <Col xs={9}>
          <h4>
            <img width={50} height={50} src={jobs[job]} alt="job" />{" "}
            {characterName} <Badge variant="primary">ilv {ilv}</Badge>
          </h4>
        </Col>
        <Col>
          <Button className="mt-2" variant="secondary" onClick={handleShow}>
            Edit
          </Button>
        </Col>
      </Row>
      <Row xs={1} sm={2}>
        <Col>
          <Equipment name="Current" list={currentEqList} />
        </Col>
        <Col>
          <Equipment name="BIS" list={bisEqList} />
        </Col>
      </Row>
      {/*Pop up member edit modal*/}
      <MemberEdit
        characterName={characterName}
        job={job}
        currentEqList={currentEqList}
        bisEqList={bisEqList}
        jobs={jobs}
        show={show}
        handleClose={handleClose}
      />
    </Container>
  );
}

export default Member;

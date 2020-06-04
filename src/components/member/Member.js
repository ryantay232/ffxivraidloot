import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import DropdownButton from "react-bootstrap/DropdownButton";
import Equipment from "../equipment/Equipment.js";
import {
  setCharacterName,
  setJob,
  setInfo,
  selectCharacterName,
  selectJob,
  selectIlv,
  selectCurrent,
  selectBis,
} from "./memberSlice.js";
import * as Icons from "../../assets/index.js";
import Dropdown from "react-bootstrap/Dropdown";

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
  const currentList = useSelector(selectCurrent);
  const bisList = useSelector(selectBis);

  const dispatch = useDispatch();

  const [namePayload, setNamePayload] = useState("");
  const [jobPayload, setJobPayload] = useState(job);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid className="Member border">
      <Row className="justify-content-between">
        <h4 className="pl-2">
          <img width={50} height={50} src={jobs[job]} alt="job" />{" "}
          {characterName} <Badge variant="primary">ilv {ilv}</Badge>
        </h4>
        <Button
          className="mt-2 h-75 mr-3"
          variant="secondary"
          onClick={handleShow}
        >
          Edit
        </Button>
      </Row>
      <Row xs={1} sm={2}>
        <Col>
          <Equipment name="Current" list={currentList} />
        </Col>
        <Col>
          <Equipment name="BIS" list={bisList} />
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>
          <ModalTitle>Editing {characterName}</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <InputGroup size="lg">
            <InputGroup.Prepend>
              <DropdownButton
                id="job-select"
                title={
                  <img width={34} height={34} src={jobs[jobPayload]} alt="job" />
                }
              >
                {Object.keys(jobs).map((keyName, i) => (
                  <Dropdown.Item onClick={() => setJobPayload(keyName)}>
                    {
                      <img
                        width={25}
                        height={25}
                        src={jobs[keyName]}
                        alt="job"
                      />
                    }{" "}
                    {keyName}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Character name"
              onChange={(e) => setNamePayload(e.target.value)}
            />
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button
            className="mt-1"
            variant="primary"
            onClick={() => {
              const payload = {
                name: namePayload,
                job: jobPayload,
              }
              dispatch(setInfo(payload));
              handleClose();
            }}
          >
            Submit
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default Member;

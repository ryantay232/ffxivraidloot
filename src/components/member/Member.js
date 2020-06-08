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
  setInfo,
  selectCharacterName,
  selectJob,
  selectIlv,
  selectCurrent,
  selectBis,
} from "./memberSlice.js";
import * as Icons from "../../assets/index.js";
import eqData from "../../assets/eqData/eqData.json";
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

  const eqIcons = [
    Icons.MAIN_ARM,
    Icons.HEAD,
    Icons.BODY,
    Icons.HANDS,
    Icons.WAIST,
    Icons.LEGS,
    Icons.FEET,
    Icons.EARRINGS,
    Icons.NECKLACE,
    Icons.BRACELETS,
    Icons.RING,
    Icons.RING,
  ];

  const characterName = useSelector(selectCharacterName);
  const job = useSelector(selectJob);
  const ilv = useSelector(selectIlv);
  const currentList = useSelector(selectCurrent);
  const bisList = useSelector(selectBis);

  const dispatch = useDispatch();

  const [nameState, setNameState] = useState("");
  const [jobState, setJobState] = useState(job);
  const [currentState, setCurrentState] = useState(currentList);
  const [bisState, setBisState] = useState(bisList);

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
          <Equipment name="Current" list={currentList} />
        </Col>
        <Col>
          <Equipment name="BIS" list={bisList} />
        </Col>
      </Row>

      {/*Popup member editor -- to be refactored in another file*/}
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
                  <img width={34} height={34} src={jobs[jobState]} alt="job" />
                }
              >
                {Object.keys(jobs).map((keyName, i) => (
                  <Dropdown.Item onClick={() => setJobState(keyName)} key={i}>
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
              defaultValue={nameState}
              onChange={(e) => setNameState(e.target.value)}
            />
          </InputGroup>
          <Row xs={1} sm={2}>
            <Col>
              <h4>Current</h4>
              {Object.keys(currentState).map((keyName, i) => (
                <Row key={i}>
                  <img width={25} height={25} src={eqIcons[i]} alt="eq" />
                  <DropdownButton
                    id={keyName}
                    title={currentState[keyName].type}
                    key={i}
                  >
                    {eqData.map((item, j) => (
                      <Dropdown.Item
                        onClick={() => {
                          setCurrentState((prevState) => ({
                            ...prevState,
                            [keyName]: {
                              name: "",
                              type: item.type,
                              ilv: item.ilv,
                            },
                          }));
                        }}
                        key={j}
                      >
                        {item.type}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                </Row>
              ))}
            </Col>
            <Col>
              <h4>BIS</h4>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button
            className="mt-1"
            variant="primary"
            onClick={() => {
              const payload = {
                name: nameState,
                job: jobState,
                current: currentState,
                bis: bisState,
              };
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

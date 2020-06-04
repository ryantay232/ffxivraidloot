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
import Equipment from "../equipment/Equipment.js";
import {
  setCharacterName,
  selectCharacterName,
  selectJob,
  selectIlv,
  selectCurrent,
  selectBis,
} from "./memberSlice.js";
import * as Icons from "../../assets/index.js";

function Member() {
  const characterName = useSelector(selectCharacterName);
  const job = useSelector(selectJob);
  const ilv = useSelector(selectIlv);
  const currentList = useSelector(selectCurrent);
  const bisList = useSelector(selectBis);

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const setJobIcon = (job) => {
    switch (job) {
      case "AST":
        return Icons.AST;
      case "BLM":
        return Icons.BLM;
      case "BRD":
        return Icons.BRD;
      case "DRG":
        return Icons.DRG;
      case "DRK":
        return Icons.DRK;
      case "MCH":
        return Icons.MCH;
      case "MNK":
        return Icons.MNK;
      case "NIN":
        return Icons.NIN;
      case "PLD":
        return Icons.PLD;
      case "RDM":
        return Icons.RDM;
      case "SAM":
        return Icons.SAM;
      case "SCH":
        return Icons.SCH;
      case "SMN":
        return Icons.SMN;
      case "WAR":
        return Icons.WAR;
      default:
        return null;
    }
  };

  return (
    <Container fluid className="Member border">
      <Row className="justify-content-between">
        <h4 className="pl-2">
          <img width={50} height={50} src={setJobIcon(job)} alt="job" />{" "}
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
          <InputGroup>
            <FormControl
              placeholder="Character name"
              onChange={(e) => setName(e.target.value)}
            />
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button
            className="mt-1"
            variant="primary"
            onClick={() => {
              dispatch(setCharacterName(name));
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

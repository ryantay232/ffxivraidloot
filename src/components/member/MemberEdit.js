import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Badge from "react-bootstrap/Badge";

import { setInfo } from "./memberSlice.js";
import { jobIcons, eqIcons } from "../../assets/index.js";
import eqData from "../../assets/eqData/eqData.json";

function MemberEdit(props) {
  const dispatch = useDispatch();

  const [nameState, setNameState] = useState(props.characterName);
  const [jobState, setJobState] = useState(props.job);
  const [currentEqState, setCurrentEqState] = useState(props.currentEqList);
  const [bisEqState, setBisEqState] = useState(props.bisEqList);

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <ModalHeader closeButton>
        <ModalTitle>Editing {props.characterName}</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Container fluid>
          <Row>
            <InputGroup size="lg">
              <InputGroup.Prepend>
                <DropdownButton
                  id="job-select"
                  title={
                    <img
                      width={34}
                      height={34}
                      src={jobIcons[jobState]}
                      alt="job"
                    />
                  }
                >
                  {Object.keys(jobIcons).map((keyName, i) => (
                    <Dropdown.Item onClick={() => setJobState(keyName)} key={i}>
                      {
                        <img
                          width={25}
                          height={25}
                          src={jobIcons[keyName]}
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
          </Row>
          <Row>
            {/*Edit current eq list 
          -- to be refactored together with bis eq list(?)*/}
            <Col>
              <h4>Current</h4>
              {Object.keys(currentEqState).map((keyName, i) => (
                <Row key={i}>
                  <img width={25} height={25} src={eqIcons[keyName]} alt="eq" />
                  <Dropdown id={keyName} key={i}>
                    <Dropdown.Toggle variant="primary">
                      {currentEqState[keyName].type}{" "}
                      <Badge variant="light">
                        ilv {currentEqState[keyName].ilv}
                      </Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {eqData
                        .filter((item) => item.eqSlot[keyName] === true)
                        .map((item, j) => (
                          <Dropdown.Item
                            onClick={() => {
                              setCurrentEqState((prevState) => ({
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
                            {item.type}{" "}
                            <Badge variant="primary">ilv {item.ilv}</Badge>
                          </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Row>
              ))}
            </Col>
            {/*Edit BIS eq list
          -- to be refactored together with current eq list(?)*/}
            <Col>
              <h4>BIS</h4>
              {Object.keys(bisEqState).map((keyName, i) => (
                <Row key={i}>
                  <img width={25} height={25} src={eqIcons[keyName]} alt="eq" />
                  <Dropdown id={keyName} key={i}>
                    <Dropdown.Toggle variant="primary">
                      {bisEqState[keyName].type}{" "}
                      <Badge variant="light">
                        ilv {bisEqState[keyName].ilv}
                      </Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {eqData
                        .filter((item) => item.eqSlot[keyName] === true)
                        .map((item, j) => (
                          <Dropdown.Item
                            onClick={() => {
                              setBisEqState((prevState) => ({
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
                            {item.type}{" "}
                            <Badge variant="primary">ilv {item.ilv}</Badge>
                          </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Row>
              ))}
            </Col>
          </Row>
        </Container>
      </ModalBody>
      <ModalFooter>
        <Button
          className="mt-1"
          variant="success"
          onClick={() => {
            const payload = {
              memberId: props.memberId,
              name: nameState,
              job: jobState,
              current: currentEqState,
              bis: bisEqState,
            };
            dispatch(setInfo(payload));
            props.handleClose();
          }}
        >
          Submit
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default MemberEdit;

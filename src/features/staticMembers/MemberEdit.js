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
import Badge from "react-bootstrap/Badge";

import { setInfo } from "./staticMembersSlice.js";
import { jobIcons, eqIcons } from "../../assets/index.js";
import eqData from "../../assets/eqData/eqData.json";

function MemberEdit(props) {
  const dispatch = useDispatch();

  const [nameState, setNameState] = useState(props.characterName);
  const [jobState, setJobState] = useState(props.job);
  const [currentEqState, setCurrentEqState] = useState(props.currentEq);
  const [bisEqState, setBisEqState] = useState(props.bisEq);

  const eqArr = [
    {
      title: "Current",
      state: currentEqState,
      setter: setCurrentEqState,
    },
    {
      title: "BIS",
      state: bisEqState,
      setter: setBisEqState,
    },
  ];

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
                <Dropdown>
                  <Dropdown.Toggle variant="primary" id="job-select">
                    <img
                      width={34}
                      height={34}
                      src={jobIcons[jobState]}
                      alt="job"
                    />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {Object.keys(jobIcons).map((keyName, i) => (
                      <Dropdown.Item
                        onClick={() => setJobState(keyName)}
                        key={i}
                      >
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
                  </Dropdown.Menu>
                </Dropdown>
              </InputGroup.Prepend>
              <FormControl
                defaultValue={nameState}
                onChange={(e) => setNameState(e.target.value)}
              />
            </InputGroup>
          </Row>
          <Row>
            {eqArr.map((eq, n) => {
              const title = eq.title;
              const state = eq.state;
              const setter = eq.setter;

              return (
                <Col key={n}>
                  <h4>{title}</h4>
                  {Object.keys(state).map((keyName, i) => (
                    <Row key={i}>
                      <InputGroup>
                        <InputGroup.Text>
                          <img
                            width={25}
                            height={25}
                            src={eqIcons[keyName]}
                            alt="eq"
                          />
                        </InputGroup.Text>
                        <Dropdown id={keyName} key={i}>
                          <Dropdown.Toggle variant="primary">
                            {state[keyName].type}{" "}
                            <Badge variant="light">
                              ilv {state[keyName].ilv}
                            </Badge>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            {eqData
                              .filter((item) => item.eqSlot[keyName] === true)
                              .map((item, j) => (
                                <Dropdown.Item
                                  onClick={() => {
                                    setter((prevState) => ({
                                      ...prevState,
                                      [keyName]: {
                                        type: item.type,
                                        ilv: item.ilv,
                                      },
                                    }));
                                  }}
                                  key={j}
                                >
                                  {item.type}{" "}
                                  <Badge variant="primary">
                                    ilv {item.ilv}
                                  </Badge>
                                </Dropdown.Item>
                              ))}
                          </Dropdown.Menu>
                        </Dropdown>
                      </InputGroup>
                    </Row>
                  ))}
                </Col>
              );
            })}
          </Row>
        </Container>
      </ModalBody>
      <ModalFooter>
        <Button
          className="mt-1"
          variant="success"
          onClick={() => {
            dispatch(
              setInfo({
                memberId: props.memberId,
                name: nameState,
                job: jobState,
                current: currentEqState,
                bis: bisEqState,
              })
            );
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

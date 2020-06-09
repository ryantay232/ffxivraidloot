import React, { useState } from "react";
import { useDispatch } from "react-redux";
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

import { setInfo } from "./memberSlice.js";
import * as Icons from "../../assets/index.js";
import eqData from "../../assets/eqData/eqData.json";

function MemberEdit(props) {
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
        <InputGroup size="lg">
          <InputGroup.Prepend>
            <DropdownButton
              id="job-select"
              title={
                <img
                  width={34}
                  height={34}
                  src={props.jobs[jobState]}
                  alt="job"
                />
              }
            >
              {Object.keys(props.jobs).map((keyName, i) => (
                <Dropdown.Item onClick={() => setJobState(keyName)} key={i}>
                  {
                    <img
                      width={25}
                      height={25}
                      src={props.jobs[keyName]}
                      alt="job"
                    />
                  }{" "}
                  {keyName}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </InputGroup.Prepend>
          <FormControl
            defaultValue={props.characterName}
            onChange={(e) => setNameState(e.target.value)}
          />
        </InputGroup>
        <Row xs={1} sm={2}>
          <Col>
            <h4>Current</h4>
            {Object.keys(currentEqState).map((keyName, i) => (
              <Row key={i}>
                <img width={25} height={25} src={eqIcons[i]} alt="eq" />
                <DropdownButton
                  id={keyName}
                  title={currentEqState[keyName].type}
                  key={i}
                >
                  {eqData.map((item, j) => (
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

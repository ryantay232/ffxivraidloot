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
        <Row className="px-3">
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
              defaultValue={props.characterName}
              onChange={(e) => setNameState(e.target.value)}
            />
          </InputGroup>
        </Row>
        <Row className="px-3">
          {/*Edit current eq list*/}
          <Col>
            <h4>Current</h4>
            {Object.keys(currentEqState).map((keyName, i) => (
              <Row key={i}>
                <img
                  width={25}
                  height={25}
                  src={eqIcons[keyName]}
                  alt="eq"
                />
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
          {/*Edit BIS eq list*/}
          <Col>
            <h4>BIS</h4>
            {Object.keys(bisEqState).map((keyName, i) => (
              <Row key={i}>
                <img
                  width={25}
                  height={25}
                  src={eqIcons[keyName]}
                  alt="eq"
                />
                <DropdownButton
                  id={keyName}
                  title={bisEqState[keyName].type}
                  key={i}
                >
                  {eqData.map((item, j) => (
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
                      {item.type}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </Row>
            ))}
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

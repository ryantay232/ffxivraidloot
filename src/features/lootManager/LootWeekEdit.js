import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

import { jobIcons, eqIcons, TWINE, GLAZE } from "../../assets/index.js";
import { selectLootTable, selectDropObj } from "../lootTable/lootTableSlice.js";

function LootWeekEdit(props) {
  const dispatch = useDispatch();

  const lootTable = useSelector(selectLootTable);
  const dropObj = useSelector(selectDropObj);

  const [floor1State, setFloor1State] = useState(props.weekData["floor1"]);
  const [floor2State, setFloor2State] = useState(props.weekData["floor2"]);
  const [floor3State, setFloor3State] = useState(props.weekData["floor3"]);
  const [floor4State, setFloor4State] = useState(props.weekData["floor4"]);

  const floor1Drops = ["waist", "earrings", "necklace", "bracelets", "ring1"];
  const floor2Drops = ["head", "hands", "feet"];
  const floor3Drops = ["head", "hands", "feet", "legs"];

  //console.log(lootTable);
  //console.log(dropObj);

  return (
    <Modal size="lg" show={props.show} onHide={props.handleClose}>
      <ModalHeader closeButton>
        <ModalTitle>Editing week {props.weekNo + 1}</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Container fluid>
          <Row xs={1} sm={1} md={2} lg={2} xl={4}>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>1st Floor</Card.Title>
                  <Card.Text>
                    {Object.keys(floor1State).map((keyName, i) => (
                      <InputGroup key={i}>
                        <DropdownButton
                          as={InputGroup.Prepend}
                          variant="outline-secondary"
                          title={
                            floor1State[keyName].loot === "" ? (
                              "     "
                            ) : (
                              <img
                                width={25}
                                height={25}
                                src={eqIcons[floor1State[keyName].loot]}
                                alt="eq"
                              />
                            )
                          }
                          id="eq-dropdown"
                        >
                          {floor1Drops.map((drop) => (
                            <Dropdown.Item
                              onClick={() =>
                                setFloor1State((prevState) => ({
                                  ...prevState,
                                  [keyName]: {
                                    loot: drop,
                                  },
                                }))
                              }
                            >
                              <img
                                width={25}
                                height={25}
                                src={eqIcons[drop]}
                                alt="eq"
                              />
                            </Dropdown.Item>
                          ))}
                        </DropdownButton>
                        <DropdownButton
                          as={InputGroup.Append}
                          variant="primary"
                          title="Dropdown"
                          id="job-dropdown"
                        >
                          <Dropdown.Item href="#">Action</Dropdown.Item>
                          <Dropdown.Item href="#">Another action</Dropdown.Item>
                          <Dropdown.Item href="#">
                            Something else here
                          </Dropdown.Item>
                        </DropdownButton>
                      </InputGroup>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>floor2</Col>
            <Col>floor3</Col>
            <Col>floor4</Col>
          </Row>
          <Row xs={1} md={2}>
            <Col>bookexchanges</Col>
            <Col>tomeexchanges</Col>
          </Row>
        </Container>
      </ModalBody>
      <ModalFooter>
        <Button
          className="mt-1"
          variant="success"
          onClick={() => {
            dispatch();
            props.handleClose();
          }}
        >
          Submit
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default LootWeekEdit;

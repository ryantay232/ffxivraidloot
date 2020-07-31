import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

import { jobIcons, eqList } from "../../assets/index.js";
import { selectJobs } from "../staticMembers/staticMembersSlice.js";
import { selectLootTable } from "../lootTable/lootTableSlice.js";
import { editWeek } from "./lootManagerSlice.js";

function LootWeekEdit(props) {
  const dispatch = useDispatch();

  const jobs = useSelector(selectJobs);
  const lootTable = useSelector(selectLootTable);

  const [floor1State, setFloor1State] = useState(props.weekData["floor1"]);
  const [floor2State, setFloor2State] = useState(props.weekData["floor2"]);
  const [floor3State, setFloor3State] = useState(props.weekData["floor3"]);
  const [floor4State, setFloor4State] = useState(props.weekData["floor4"]);
  const [tomeExState, setTomeExState] = useState(
    props.weekData["tomeExchange"]
  );
  const [bookExState, setBookExState] = useState(
    props.weekData["bookExchange"]
  );

  const floor1Drops = ["waist", "earrings", "necklace", "bracelets", "ring"];
  const floor2Drops = ["head", "hands", "feet"];
  const floor3Drops = ["head", "hands", "feet", "legs"];
  const floor4Drops = ["mainArm", "body"];

  const floorArr = [
    {
      title: "1st Floor",
      state: floor1State,
      setter: setFloor1State,
      drops: floor1Drops,
    },
    {
      title: "2nd Floor",
      state: floor2State,
      setter: setFloor2State,
      drops: floor2Drops,
    },
    {
      title: "3rd Floor",
      state: floor3State,
      setter: setFloor3State,
      drops: floor3Drops,
    },
    {
      title: "4th Floor",
      state: floor4State,
      setter: setFloor4State,
      drops: floor4Drops,
    },
  ];
  const exchangeArr = [
    {
      title: "Tome Exchanges",
      state: tomeExState,
      setter: setTomeExState,
    },
    {
      title: "Book Exchanges",
      state: bookExState,
      setter: setBookExState,
    },
  ];

  //console.log(lootTable);
  //console.log(floor2State);
  //console.log(dropObj);

  return (
    <Modal size="lg" show={props.show} onHide={props.handleClose}>
      <ModalHeader closeButton>
        <ModalTitle>Editing Week {props.weekNo + 1}</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Row xs={1} sm={1} md={1} lg={2}>
          {floorArr.map((floor, n) => {
            const title = floor.title;
            const state = floor.state;
            const setter = floor.setter;
            const drops = floor.drops;

            return (
              <Col key={n}>
                <Card>
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                      {Object.keys(state).map((dropNo, i) => (
                        <InputGroup key={i}>
                          {n === 3 && i === 2 ? (
                            <InputGroup.Text>
                              <img
                                width={25}
                                height={25}
                                src={eqList["mainArm"]}
                                alt="eq"
                              />
                            </InputGroup.Text>
                          ) : (
                            <></>
                          )}
                          {/* eq */}
                          <DropdownButton
                            disabled={
                              state[dropNo].loot === "glaze" ||
                              state[dropNo].loot === "tomestone" ||
                              state[dropNo].loot === "twine" ||
                              state[dropNo].loot === "ester" ||
                              state[dropNo].loot === "mainArm" ||
                              state[dropNo].loot === "body"
                                ? true
                                : false
                            }
                            as={InputGroup.Prepend}
                            variant="outline-secondary"
                            title={
                              state[dropNo].loot === "" ? (
                                "Loot"
                              ) : state[dropNo].loot === "randomWeapon" ? (
                                <img
                                  width={25}
                                  height={25}
                                  src={jobIcons[state[dropNo].job]}
                                  alt="job"
                                />
                              ) : (
                                <img
                                  width={25}
                                  height={25}
                                  src={eqList[state[dropNo].loot]}
                                  alt="eq"
                                />
                              )
                            }
                            id="eq-dropdown"
                          >
                            {state[dropNo].loot === "randomWeapon"
                              ? Object.keys(jobIcons).map((job, j) => (
                                  <Dropdown.Item
                                    onClick={() =>
                                      setter((prevState) => ({
                                        ...prevState,
                                        [dropNo]: {
                                          ...prevState[dropNo],
                                          job: job,
                                        },
                                      }))
                                    }
                                    key={j}
                                  >
                                    <img
                                      width={25}
                                      height={25}
                                      src={jobIcons[job]}
                                      alt="eq"
                                    />
                                  </Dropdown.Item>
                                ))
                              : drops.map((drop, j) => (
                                  <Dropdown.Item
                                    onClick={() =>
                                      setter((prevState) => ({
                                        ...prevState,
                                        [dropNo]: {
                                          loot: drop,
                                          memberId: "",
                                        },
                                      }))
                                    }
                                    key={j}
                                  >
                                    <img
                                      width={25}
                                      height={25}
                                      src={eqList[drop]}
                                      alt="eq"
                                    />
                                  </Dropdown.Item>
                                ))}
                          </DropdownButton>
                          {/* member */}
                          <DropdownButton
                            as={InputGroup.Append}
                            variant="primary"
                            title={
                              state[dropNo].memberId === "" ? (
                                "Member"
                              ) : (
                                <img
                                  width={25}
                                  height={25}
                                  src={jobIcons[jobs[state[dropNo].memberId]]}
                                  alt="eq"
                                />
                              )
                            }
                            id="job-dropdown"
                          >
                            {state[dropNo].loot === "" ? (
                              <></>
                            ) : state[dropNo].loot === "randomWeapon" ? (
                              Object.keys(jobs).map((memberId, j) => (
                                <Dropdown.Item
                                  onClick={() =>
                                    setter((prevState) => ({
                                      ...prevState,
                                      [dropNo]: {
                                        ...prevState[dropNo],
                                        memberId: memberId,
                                      },
                                    }))
                                  }
                                  key={j}
                                >
                                  <img
                                    width={25}
                                    height={25}
                                    src={jobIcons[jobs[memberId]]}
                                    alt="member job"
                                  />
                                </Dropdown.Item>
                              ))
                            ) : (
                              Object.keys(lootTable)
                                .filter(
                                  (week) =>
                                    lootTable[week][n + 1][state[dropNo].loot]
                                      .memberId > -1
                                )
                                .map((week, j) => (
                                  <Dropdown.Item
                                    onClick={() =>
                                      setter((prevState) => ({
                                        ...prevState,
                                        [dropNo]: {
                                          ...prevState[dropNo],
                                          memberId:
                                            lootTable[week][n + 1][
                                              state[dropNo].loot
                                            ].memberId,
                                        },
                                      }))
                                    }
                                    key={j}
                                  >
                                    <img
                                      width={25}
                                      height={25}
                                      src={
                                        jobIcons[
                                          jobs[
                                            lootTable[week][n + 1][
                                              state[dropNo].loot
                                            ].memberId
                                          ]
                                        ]
                                      }
                                      alt="member job"
                                    />
                                  </Dropdown.Item>
                                ))
                            )}
                          </DropdownButton>
                        </InputGroup>
                      ))}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
          {exchangeArr.map((exchange, n) => {
            const title = exchange.title;
            const state = exchange.state;
            const setter = exchange.setter;

            return (
              <Col key={n}>
                <Card>
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                      {state.map((ex, i) => (
                        <InputGroup key={i}>
                          <DropdownButton
                            as={InputGroup.Prepend}
                            variant="outline-secondary"
                          ></DropdownButton>
                          <DropdownButton
                            as={InputGroup.Append}
                          ></DropdownButton>
                          <Button
                            onClick={() =>
                              setter((prevState) => [
                                ...prevState.slice(0, i),
                                ...prevState.slice(i + 1),
                              ])
                            }
                            variant="danger"
                          >
                            ✕
                          </Button>
                        </InputGroup>
                      ))}
                      <Button
                        onClick={() =>
                          setter((prevState) => [
                            ...prevState,
                            {
                              memberId: "",
                              eq: "",
                            },
                          ])
                        }
                        variant="secondary"
                      >
                        Add
                      </Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button
          className="mt-1"
          variant="success"
          onClick={() => {
            dispatch(
              editWeek({
                weekNo: props.weekNo,
                weekData: {
                  floor1: floor1State,
                  floor2: floor2State,
                  floor3: floor3State,
                  floor4: floor4State,
                  tomeExchange: tomeExState,
                  bookExchange: bookExState,
                },
              })
            );
            //dispatch();   to dispatch to staticMemberSlice.js
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

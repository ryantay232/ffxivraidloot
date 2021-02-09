import React from "react";
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
import { selectLootTable } from "../lootTable/lootTableSlice.js";
import { editWeek } from "./lootManagerSlice.js";
import {
  selectEsterList,
  selectTwineList,
  selectGlazeList,
  selectTomestoneList,
  setEq,
} from "../staticMembers/staticMembersSlice.js";

function LootWeekEdit(props) {
  const dispatch = useDispatch();

  const lootTable = useSelector(selectLootTable);
  const esterList = useSelector(selectEsterList);
  const twineList = useSelector(selectTwineList);
  const glazeList = useSelector(selectGlazeList);
  const tomestoneList = useSelector(selectTomestoneList);

  const upgradesObj = {
    ester: esterList,
    twine: twineList,
    glaze: glazeList,
    tomestone: tomestoneList,
  };

  const jobs = props.jobs;
  const floorArr = props.floorArr;
  const exchangeArr = props.exchangeArr;

  //console.log(props.weekData);
  //console.log(upgradesObj);

  return (
    <Modal size="lg" show={props.show} onHide={props.handleClose}>
      <ModalHeader closeButton>
        <ModalTitle>Editing Week {props.weekNo + 1}</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Row xs={1} sm={1} md={1} lg={2}>
          {/*floor drops cards*/}
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
                                  alt={state[dropNo].job}
                                />
                              ) : (
                                <img
                                  width={25}
                                  height={25}
                                  src={eqList[state[dropNo].loot]}
                                  alt={state[dropNo].loot}
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
                                      alt={job}
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
                                      alt={drop}
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
                                  alt={jobs[state[dropNo].memberId]}
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
                                    alt={jobs[memberId]}
                                  />
                                </Dropdown.Item>
                              ))
                            ) : state[dropNo].loot === "glaze" ||
                              state[dropNo].loot === "tomestone" ||
                              state[dropNo].loot === "twine" ||
                              state[dropNo].loot === "ester" ? (
                              Object.keys(upgradesObj[state[dropNo].loot])
                                .map((memberId) => [
                                  memberId,
                                  upgradesObj[state[dropNo].loot][memberId],
                                ])
                                .sort((a, b) =>
                                  a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0
                                )
                                .map((mem, j) => (
                                  <Dropdown.Item
                                    onClick={() =>
                                      setter((prevState) => ({
                                        ...prevState,
                                        [dropNo]: {
                                          ...prevState[dropNo],
                                          memberId: mem[0],
                                        },
                                      }))
                                    }
                                    key={j}
                                  >
                                    <Row>
                                      <Col>
                                        <img
                                          width={25}
                                          height={25}
                                          src={jobIcons[jobs[mem[0]]]}
                                          alt={jobs[mem[0]]}
                                        />
                                      </Col>
                                      <Col>
                                        {mem[1]}{" "}
                                        <img
                                          width={25}
                                          height={25}
                                          src={eqList[state[dropNo].loot]}
                                          alt={state[dropNo].loot}
                                        />
                                      </Col>
                                    </Row>
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
                                      alt={
                                        jobs[
                                          lootTable[week][n + 1][
                                            state[dropNo].loot
                                          ].memberId
                                        ]
                                      }
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
          {/*exchange cards*/}
          {exchangeArr.map((exchange, n) => {
            const title = exchange.title;
            const state = exchange.state;
            const setter = exchange.setter;
            const items = exchange.items;

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
                            title={
                              ex.item === "" ? (
                                "Item"
                              ) : (
                                <img
                                  width={25}
                                  height={25}
                                  src={eqList[ex.item]}
                                  alt="item"
                                />
                              )
                            }
                          >
                            {items.map((item, j) => (
                              <Dropdown.Item
                                onClick={() =>
                                  setter((prevState) => [
                                    ...prevState.slice(0, i),
                                    {
                                      memberId: ex.memberId,
                                      item: item.item,
                                    },
                                    ...prevState.slice(i + 1),
                                  ])
                                }
                                key={j}
                              >
                                <Row>
                                  <Col>
                                    <img
                                      width={25}
                                      height={25}
                                      src={eqList[item.item]}
                                      alt="item"
                                    />
                                  </Col>
                                  <Col>
                                    {item.cost}{" "}
                                    <img
                                      width={25}
                                      height={25}
                                      src={eqList[item.currency]}
                                      alt="currency"
                                    />
                                  </Col>
                                </Row>
                              </Dropdown.Item>
                            ))}
                          </DropdownButton>
                          <DropdownButton
                            as={InputGroup.Append}
                            title={
                              ex.memberId === "" ? (
                                "Member"
                              ) : (
                                <img
                                  width={25}
                                  height={25}
                                  src={jobIcons[jobs[ex.memberId]]}
                                  alt={jobs[ex.memberId]}
                                />
                              )
                            }
                          >
                            {Object.keys(jobs).map((memberId, j) => (
                              <Dropdown.Item
                                onClick={() =>
                                  setter((prevState) => [
                                    ...prevState.slice(0, i),
                                    {
                                      memberId: memberId,
                                      item: ex.item,
                                    },
                                    ...prevState.slice(i + 1),
                                  ])
                                }
                                key={j}
                              >
                                <img
                                  width={25}
                                  height={25}
                                  src={jobIcons[jobs[memberId]]}
                                  alt={jobs[memberId]}
                                />
                              </Dropdown.Item>
                            ))}
                          </DropdownButton>
                          <InputGroup.Append>
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
                          </InputGroup.Append>
                        </InputGroup>
                      ))}
                      <Button
                        onClick={() =>
                          setter((prevState) => [
                            ...prevState,
                            {
                              memberId: "",
                              item: "",
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
                  floor1: floorArr[0].state,
                  floor2: floorArr[1].state,
                  floor3: floorArr[2].state,
                  floor4: floorArr[3].state,
                  tomeExchange: exchangeArr[0].state,
                  bookExchange: exchangeArr[1].state,
                },
              })
            );
            dispatch(
              setEq({
                weekData: {
                  floor1: floorArr[0].state,
                  floor2: floorArr[1].state,
                  floor3: floorArr[2].state,
                  floor4: floorArr[3].state,
                  tomeExchange: exchangeArr[0].state,
                  bookExchange: exchangeArr[1].state,
                },
              })
            ); //to dispatch to staticMemberSlice.js
            //dispatch(); to dispatch to lootTableSlice.js
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

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import {
  jobIcons,
  eqList,
  bookItems,
  tomeItems,
  COFFER,
} from "../../assets/index.js";
import { selectJobs } from "../staticMembers/staticMembersSlice.js";
import { deleteWeek } from "./lootManagerSlice.js";
import LootWeekEdit from "./LootWeekEdit.js";

function LootWeek(props) {
  const dispatch = useDispatch();

  const jobs = useSelector(selectJobs);

  const [show, setShow] = useState(false);

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
      items: tomeItems,
    },
    {
      title: "Book Exchanges",
      state: bookExState,
      setter: setBookExState,
      items: bookItems,
    },
  ];

  return (
    <Container fluid>
      <Row xs={1} sm={1} md={2} lg={4}>
        {floorArr.map((floor, i) => {
          const title = floor.title;
          const state = floor.state;

          return (
            <Col key={i}>
              <Card>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>
                    <Table striped bordered hover responsive>
                      <thead>
                        <tr>
                          <th>Loot</th>
                          <th>Member</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.keys(state).map((dropNo, j) => (
                          <tr key={j}>
                            <th>
                              <img
                                width={25}
                                height={25}
                                src={
                                  state[dropNo].loot === ""
                                    ? COFFER
                                    : state[dropNo].loot === "randomWeapon"
                                    ? jobIcons[state[dropNo].job]
                                    : eqList[state[dropNo].loot]
                                }
                                alt={state[dropNo].loot}
                              />
                            </th>
                            <th>
                              {state[dropNo].memberId === "" ? (
                                <></>
                              ) : (
                                <img
                                  width={25}
                                  height={25}
                                  src={jobIcons[jobs[state[dropNo].memberId]]}
                                  alt={jobs[state[dropNo].memberId]}
                                />
                              )}
                            </th>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
        {exchangeArr.map((exchange, i) => {
          const title = exchange.title;
          const state = exchange.state;

          return (
            <Col key={i}>
              <Card>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>
                    <Table striped bordered hover responsive>
                      <thead>
                        <tr>
                          <th>Item</th>
                          <th>Member</th>
                        </tr>
                      </thead>
                      <tbody>
                        {state.map((ex, j) => (
                          <tr>
                            <th>
                              {ex.item === "" ? (
                                <></>
                              ) : (
                                <img
                                  width={25}
                                  height={25}
                                  src={eqList[ex.item]}
                                  alt={ex.item}
                                />
                              )}
                            </th>
                            <th>
                              {ex.memberId === "" ? (
                                <></>
                              ) : (
                                <img
                                  width={25}
                                  height={25}
                                  src={jobIcons[jobs[ex.memberId]]}
                                  alt={jobs[ex.memberId]}
                                />
                              )}
                            </th>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <Row className="justify-content-end">
        <Button variant="secondary" onClick={() => setShow(true)}>
          Edit
        </Button>
        <Button
          variant="danger"
          onClick={() =>
            dispatch(
              deleteWeek({
                weekNo: props.weekNo,
              })
            )
          }
        >
          Delete week
        </Button>
      </Row>
      <LootWeekEdit
        weekNo={props.weekNo}
        weekData={props.weekData}
        floorArr={floorArr}
        exchangeArr={exchangeArr}
        jobs={jobs}
        show={show}
        handleClose={() => setShow(false)}
      />
    </Container>
  );
}

export default LootWeek;

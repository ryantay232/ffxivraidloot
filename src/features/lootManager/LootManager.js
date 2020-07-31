import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import LootWeek from "./LootWeek.js";
import { addWeek, selectWeeklyLoot } from "./lootManagerSlice.js";

function LootManager() {
  const dispatch = useDispatch();
  const weeklyLoot = useSelector(selectWeeklyLoot);
  const len = Object.keys(weeklyLoot).length;

  return (
    <Container fluid>
      <Accordion defaultActiveKey={len - 1}>
        {weeklyLoot.map((week, i) => (
          <Card key={i}>
            <Accordion.Toggle as={Card.Header} eventKey={i}>
              Week {i + 1}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={i}>
              <Card.Body>
                <LootWeek weekNo={i} weekData={week} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
      <Button variant="success" onClick={() => dispatch(addWeek())}>
        Add week
      </Button>
    </Container>
  );
}

export default LootManager;

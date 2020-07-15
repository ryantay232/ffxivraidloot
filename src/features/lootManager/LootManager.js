import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { addWeek, selectWeeklyLoot } from "./lootManagerSlice.js";

function LootManager() {
  const dispatch = useDispatch();
  const weeklyLoot = useSelector(selectWeeklyLoot);

  return (
    <Container fluid>
      <Accordion>
        {weeklyLoot.map((keyName, i) => (
          <Card key={i}>
            <Accordion.Toggle as={Card.Header} eventKey={i}>
              Week {i + 1}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={i}>
              <Card.Body>set new component here</Card.Body>
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

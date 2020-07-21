import React from "react";
import { useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";

function LootWeek(props) {
  const dispatch = useDispatch();

  return (
    <Container fluid>
      {props.weekNo}
    </Container>
  );
}

export default LootWeek;

import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

import { eqIcons } from "../../assets/index.js";

/**
 * Displays equipment list of member from props
 */
function Equipment(props) {
  return (
    <div>
      <style type="text/css">
        {`
          .small-table {
            padding: 0.2rem 0.5rem 0.5rem 0.5rem;
          }
        `}
      </style>
      <ListGroup variant="flush" className="rounded">
        <ListGroup.Item className="small-table" variant="primary">
          {props.name}
        </ListGroup.Item>
        {Object.keys(props.list).map((keyName, i) => (
          <ListGroup.Item className="small-table" key={i}>
            <Row>
              <Col>
                <img width={25} height={25} src={eqIcons[keyName]} alt="eq" />{" "}
                {props.list[keyName].type}
              </Col>
              <Col className="col-3">
                <Badge variant="primary">ilv {props.list[keyName].ilv}</Badge>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Equipment;

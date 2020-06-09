import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

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
            <img
              width={25}
              height={25}
              src={eqIcons[keyName]}
              alt="eq"
            />{" "}
            {props.list[keyName].type}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Equipment;

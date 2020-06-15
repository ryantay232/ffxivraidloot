import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Member from "../../components/member/Member";

function StaticMembers() {
  return (
    <Container fluid>
      <Row xs={1} sm={1} md={2} lg={2} xl={4}>
        <Col className="py-2"><Member /></Col>
        <Col className="py-2"><Member /></Col>
        <Col className="py-2"><Member /></Col>
        <Col className="py-2"><Member /></Col>
        <Col className="py-2"><Member /></Col>
        <Col className="py-2"><Member /></Col>
        <Col className="py-2"><Member /></Col>
        <Col className="py-2"><Member /></Col>
      </Row>
    </Container>
  );
}

export default StaticMembers;

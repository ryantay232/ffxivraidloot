import React from "react";
import { useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { setPage } from "./navBarSlice.js";

function NavBar() {
  const dispatch = useDispatch();

  return (
    <Container fluid>
      <Navbar bg="light">
        <Navbar.Brand>FFXIVRaidLoot</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={() => dispatch(setPage("StaticMembers"))}>
            Members
          </Nav.Link>
          <Nav.Link onClick={() => dispatch(setPage("LootTable"))}>
            Loot Table
          </Nav.Link>
          <Nav.Link onClick={() => dispatch(setPage("LootManager"))}>
            Loot Manager
          </Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
}

export default NavBar;

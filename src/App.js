import React from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";

import { selectPage } from "./features/navBar/navBarSlice.js";
import NavBar from "./features/navBar/NavBar";
import StaticMembers from "./features/staticMembers/StaticMembers";
import LootTable from "./features/lootTable/LootTable";

function App() {
  const page = useSelector(selectPage);

  return (
    <Container fluid>
      <NavBar />
      {page === "StaticMembers" ? <StaticMembers /> : <LootTable />}
    </Container>
  );
}

export default App;

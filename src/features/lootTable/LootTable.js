import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import {
  selectCharacterName,
  selectJob,
  selectIlv,
  selectCurrent,
  selectBis,
  selectTwine,
  selectGlaze,
} from "../../components/member/memberSlice.js";
import { calculateLoot, selectWeeklyLoot } from "./lootTableSlice.js";
import { jobIcons, eqIcons, TWINE, GLAZE } from "../../assets/index.js";

function LootTable() {
  const dispatch = useDispatch();

  const eqDrops = [
    eqIcons.waist,
    eqIcons.earrings,
    eqIcons.necklace,
    eqIcons.bracelets,
    eqIcons.ring1,
    eqIcons.head,
    eqIcons.hands,
    eqIcons.feet,
    GLAZE,
    eqIcons.head,
    eqIcons.hands,
    eqIcons.feet,
    eqIcons.legs,
    TWINE,
    eqIcons.mainArm,
    eqIcons.body,
  ];

  const jobs = useSelector(selectJob);
  const ilvs = useSelector(selectIlv);
  const currentEqLists = useSelector(selectCurrent);
  const bisEqLists = useSelector(selectBis);
  const twineLists = useSelector(selectTwine);
  const glazeLists = useSelector(selectGlaze);

  const weeklyLoot = useSelector(selectWeeklyLoot);

  const [lootState, setWeeklyLootState] = useState(weeklyLoot);

  return (
    <Container fluid>
      <Button
        variant="success"
        block
        onClick={() => {
          const payload = {
            ilvs: ilvs,
            currentEqLists: currentEqLists,
            bisEqLists: bisEqLists,
            twineLists: twineLists,
            glazeLists: glazeLists,
          };
          dispatch(calculateLoot(payload));
        }}
      >
        Calculate loot
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th rowSpan="2">Week</th>
            <th colSpan="5" className="text-center">
              1st Floor
            </th>
            <th colSpan="4" className="text-center">
              2nd Floor
            </th>
            <th colSpan="5" className="text-center">
              3rd Floor
            </th>
            <th colSpan="2" className="text-center">
              4th Floor
            </th>
          </tr>
          <tr>
            {eqDrops.map((eq, i) => (
              <th className="text-center" key={i}>
                <img width={32} height={32} src={eq} alt="eq" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(weeklyLoot).map((weekNo, i) => (
            <tr key={i}>
              <th className="text-right">{weekNo}</th>
              {Object.keys(weeklyLoot[weekNo])
                .filter((keyName) => keyName !== "books")
                .map((floor, j) =>
                  Object.keys(weeklyLoot[weekNo][floor]).map((loot, j) => (
                    <th key={j}>
                      {weeklyLoot[weekNo][floor][loot]["memberId"] > -1 ? (
                        <img
                          width={32}
                          height={32}
                          src={
                            jobIcons[
                              jobs[weeklyLoot[weekNo][floor][loot]["memberId"]]
                            ]
                          }
                          alt="job"
                        />
                      ) : (
                        <></>
                      )}
                    </th>
                  ))
                )}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default LootTable;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import {
  setEq,
  selectJobs,
  selectIlvs,
  selectCurrentList,
  selectBisList,
  selectTwineList,
  selectGlazeList,
} from "../staticMembers/staticMembersSlice.js";
import {
  calculateLoot,
  setLoot,
  selectLootTable,
  selectBooks,
} from "./lootTableSlice.js";
import { jobIcons, eqIcons, TWINE, GLAZE, BOOK_1 } from "../../assets/index.js";

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

  const jobs = useSelector(selectJobs);
  const ilvs = useSelector(selectIlvs);
  const currentEq = useSelector(selectCurrentList);
  const bisEq = useSelector(selectBisList);
  const twines = useSelector(selectTwineList);
  const glazes = useSelector(selectGlazeList);

  const lootTable = useSelector(selectLootTable);
  const books = useSelector(selectBooks);

  return (
    <Container fluid>
      <Button
        variant="success"
        block
        onClick={() => {
          dispatch(setEq());
          dispatch(
            calculateLoot({
              ilvs: ilvs,
              currentEq: currentEq,
              bisEq: bisEq,
              twines: twines,
              glazes: glazes,
            })
          );
        }}
      >
        Calculate loot
      </Button>
      {/*refactor every table into their respective components*/}
      <Table striped bordered hover responsive>
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
          {Object.keys(lootTable).map((weekNo, i) => (
            <tr key={i}>
              <th className="text-right">{weekNo}</th>
              {Object.keys(lootTable[weekNo]).map((floor, j) =>
                Object.keys(lootTable[weekNo][floor]).map((loot, j) => (
                  <th
                    className={
                      lootTable[weekNo][floor][loot].set === true
                        ? "text-center bg-success"
                        : "text-center"
                    }
                    onClick={() => {
                      dispatch(
                        setLoot({
                          weekNo: weekNo,
                          floor: floor,
                          loot: loot,
                        })
                      );
                    }}
                    key={j}
                  >
                    {lootTable[weekNo][floor][loot]["memberId"] > -1 ? (
                      <img
                        width={32}
                        height={32}
                        src={
                          jobIcons[
                            jobs[lootTable[weekNo][floor][loot]["memberId"]]
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
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th colSpan="9" className="text-center">
              <img width={32} height={32} src={BOOK_1} alt="book" /> 1st Floor
              Books
            </th>
          </tr>
          <tr>
            <th>Week</th>
            {Object.keys(jobs).map((job, i) => (
              <th key={i} className="text-center">
                <img
                  width={32}
                  height={32}
                  src={jobIcons[jobs[job]]}
                  alt="job"
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(books).map((weekNo, i) => (
            <tr key={i}>
              <th className="text-right">{weekNo}</th>
              {[0, 1, 2, 3, 4, 5, 6, 7].map((mem, j) => (
                <th key={j} className="text-center">
                  {mem in books[weekNo][1] ? (
                    <img
                      width={32}
                      height={32}
                      src={
                        books[weekNo][1][mem] === "ring"
                          ? eqIcons.ring1
                          : eqIcons[books[weekNo][1][mem]]
                      }
                      alt="job"
                    />
                  ) : (
                    <></>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default LootTable;

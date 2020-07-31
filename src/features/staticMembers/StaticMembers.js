import React from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Member from "./Member.js";
import {
  selectCharacterNames,
  selectJobs,
  selectIlvs,
  selectCurrentList,
  selectBisList,
  selectEsterList,
  selectTwineList,
  selectGlazeList,
} from "./staticMembersSlice.js";

function StaticMembers() {
  const characterNames = useSelector(selectCharacterNames);
  const jobs = useSelector(selectJobs);
  const ilvs = useSelector(selectIlvs);
  const currentList = useSelector(selectCurrentList);
  const bisList = useSelector(selectBisList);
  const esterList = useSelector(selectEsterList);
  const twineList = useSelector(selectTwineList);
  const glazeList = useSelector(selectGlazeList);

  return (
    <Container fluid>
      <Row xs={1} sm={1} md={2} lg={2} xl={4}>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((memberId, i) => (
          <Col className="py-2" key={i}>
            <Member
              memberId={memberId}
              characterName={characterNames[memberId]}
              job={jobs[memberId]}
              ilv={ilvs[memberId]}
              current={currentList[memberId]}
              bis={bisList[memberId]}
              ester={esterList[memberId]}
              twine={twineList[memberId]}
              glaze={glazeList[memberId]}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default StaticMembers;

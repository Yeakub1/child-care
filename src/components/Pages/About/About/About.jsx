import React from "react";
import banner from "../../../../assets/images/page banner.png";
import ConceptChildren from "../ConceptChildren/ConceptChildren";
import GoToTop from "../../../Shared/GoToTop/GoToTop";
import TeamMembers from "../TeamMembers/TeamMembers";

const About = () => {
  return (
    <div >
      <ConceptChildren />
      <TeamMembers/>
      <GoToTop/>
    </div>
  );
};

export default About;

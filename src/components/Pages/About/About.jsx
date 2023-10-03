import React from "react";
import ConceptChildren from "./ConceptChildren";
import GoToTop from "../../Shared/GoToTop";
import TeamMembers from "./TeamMembers/TeamMembers";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>ABC | About</title>
      </Helmet>

      <ConceptChildren />
      <TeamMembers />
      <GoToTop />
    </div>
  );
};

export default About;

import React from "react";
import ConceptChildren from "./ConceptChildren";
import GoToTop from "../../Shared/GoToTop";
import TeamMembers from "./TeamMembers/TeamMembers";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Academy for Bright Children | About</title>
      </Helmet>

      <ConceptChildren />
      <TeamMembers />
      <GoToTop />
    </div>
  );
};

export default About;

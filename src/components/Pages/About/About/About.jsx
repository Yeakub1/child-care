import React, { useEffect, useState } from "react";
import ConceptChildren from "../ConceptChildren/ConceptChildren";
import GoToTop from "../../../Shared/GoToTop/GoToTop";
import TeamMembers from "../TeamMembers/TeamMembers";
import Loading from "../../../Shared/Loading/Loading";
import { Helmet } from "react-helmet-async";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);
  return (
    <>
      <Helmet>
        <title>Academy for Bright Children | About</title>
      </Helmet>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ConceptChildren />
          <TeamMembers />
          <GoToTop />
        </>
      )}
    </>
  );
};

export default About;

import React from "react";
import GoToTop from "../../Shared/GoToTop";
import OurProgram from "./OurProgram";
import Philosophy from "./Philosophy";
import Innovative from "./Innovative";
import { Helmet } from "react-helmet-async";

const Services = () => {
  return (
    <div>
      <Helmet>
        <title>Academy for Bright Children | Services</title>
      </Helmet>

      <OurProgram />
      <Philosophy />
      <Innovative />
      <GoToTop />
    </div>
  );
};

export default Services;

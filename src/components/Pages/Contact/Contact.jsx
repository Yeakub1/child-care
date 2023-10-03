import React from "react";
import ContuctForm from "./ContuctForm";
import GoToTop from "../../Shared/GoToTop";
import GoogleMap from "./GoogleMap";
import { Helmet } from "react-helmet-async";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Academy for Bright Children | Contact</title>
      </Helmet>
      
      <ContactInfo />
      <ContuctForm />
      <GoToTop />
      <GoogleMap />
    </div>
  );
};

export default Contact;

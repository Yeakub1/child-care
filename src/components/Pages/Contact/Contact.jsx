import React, { useEffect, useState } from "react";
import ContuctForm from "./ContuctForm";
import GoToTop from "../../Shared/GoToTop/GoToTop";
import GoogleMap from "./GoogleMap";
import Loading from "../../Shared/Loading/Loading";
import { Helmet } from "react-helmet-async";

const Contact = () => {
 const [isLoading, setIsLoading] = useState(true);
 useEffect(() => {
   setTimeout(() => {
     setIsLoading(false);
   }, 2500);
 }, []);


    return (
      <>
        <Helmet>
          <title>Academy for Bright Children | Contact</title>
        </Helmet>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <ContuctForm />
            <GoToTop />
            <GoogleMap />
          </>
        )}
      </>
    );
};

export default Contact;

import React, { useEffect, useState } from 'react';
import GoToTop from '../../../Shared/GoToTop/GoToTop';
import OurProgram from '../OurProgram/OurProgram';
import Philosophy from '../Philosophy/Philosophy';
import Innovative from '../Innovative/Innovative';
import Loading from '../../../Shared/Loading/Loading';
import { Helmet } from 'react-helmet-async';

const Services = () => {
     const [isLoading, setIsLoading] = useState(true);
     useEffect(() => {
       setTimeout(() => {
         setIsLoading(false);
       }, 2500);
     }, []);
    return (
      <>
        <Helmet>
          <title>Academy for Bright Children | Services</title>
        </Helmet>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <OurProgram />
            <Philosophy />
            <Innovative />
            <GoToTop />
          </>
        )}
      </>
    );
};

export default Services;
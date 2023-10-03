import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import Loading from '../Shared/Loading';

const MainLayout = () => {
     const [loading, setLoading] = useState(true);
     useEffect(() => {
       const loadingTimeout = setTimeout(() => {
         setLoading(false);
       }, 2000);
       return () => {
         clearTimeout(loadingTimeout);
       };
     }, []);
  
    return (
      <>
        {loading ? (
          <>
            <Loading/>
          </>
        ) : (
          <>
            <Navbar />
            <Outlet />
           <Footer />
          </>
        )}
      </>
    );
};

export default MainLayout;
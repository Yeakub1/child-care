import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About/About";
import Contact from "../Pages/Contact/Contact";
import Services from "../Pages/Services/Services/Services";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage/>, 
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'services',
        element: <Services/>
      },
      {
        path: 'contact',
        element: <Contact/>
      },
    ]
    
  },
]);

export default router;
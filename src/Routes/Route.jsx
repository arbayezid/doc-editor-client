import {
    createBrowserRouter,
  } from "react-router-dom";
import Footer from "../shared/Footer";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Footer></Footer>,
    },
  ]);


  export default router
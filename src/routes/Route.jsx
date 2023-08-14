import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import MainLayout from "../Layout/MainLayout";
import Navbar from "../Navbar/Navbar";
import Signup from "../pages/loginInfo/Signup";
import Signin from "../pages/loginInfo/Signin";



const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path:"/",
          element:<Main></Main>
        },
        {
          path:"/navbar",
          element:<Navbar></Navbar>
        },
        {
          path:"/signup",
          element: <Signup></Signup>
        },
        {
          path: "/signin",
          element: <Signin></Signin>
        }
      ]
    },
  ]);

export default router;
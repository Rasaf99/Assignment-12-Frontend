// router
import { RouterProvider } from "react-router-dom";
import allRoutes from "routes/all-routes";

// react-toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// useTheme hook
import { useTheme } from "@mui/material";


// ✅ functional component
export default function App() {

  // useTheme
  const theme = useTheme()

  return (

    <>

      {/*🚀 Router  */}
      <RouterProvider router={allRoutes} />

      


      {/*🚀 ToastContainer */}
      {theme.palette.mode === 'dark' ?

        <ToastContainer theme='dark' position='bottom-right' autoClose={6000} />

         :

        <ToastContainer position='bottom-right' autoClose={4000} />
      }


    </>


  )

}
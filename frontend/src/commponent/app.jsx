import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "./Home";
import Login from "./login";
import Rgx from "./regester";
import Forget from "./Forget";





const AApp=()=>{
    const [logout, setLogout] = useState(false);

const router = createBrowserRouter(
[
  {
    path: "/",
    element: <App setLogout={setLogout}logout={logout} />,
    //errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home  />,
      },
      {
        path: "login",
        element: <Login setLogout={setLogout}logout={logout} />,
        
      },
    
      {
        path: "/register",
        element: <Rgx />,
      },
      {
        path: "/forget",
        element: <Forget />,
      },
      
      {
        path: "/profile",
       // element: <ProfilePage />,
        children: [
          {
            index:true , 
           // element: <AccountSettings />,
          },
          {
            path: "changepassword",
            //element: <ChangePassword />,
          },
          {
            path: "reservations",
           // element: <YourReservations />,
          },
        ],
      },
    ],
  },
]);
return<>
    <RouterProvider router={router} />

</>
}
export default AApp;
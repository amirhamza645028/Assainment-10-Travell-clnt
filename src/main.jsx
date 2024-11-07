import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLayout from './components/MainLayout.jsx';
import Authprovider from './components/provider/Authprovider.jsx';
import Login from './components/Pages/Login.jsx';
import Register from './components/Pages/Register.jsx';
import ContactCard from './components/ContractCard.jsx';
import Error from './components/Pages/Error.jsx';
import Home from './components/Pages/Home.jsx';
import About from './components/Pages/About.jsx';
import PrivateRoute from './components/provider/PrivetRoute.jsx';
import MyProfile from './components/Pages/MyProfile.jsx';
import UpdateProfile from './components/Pages/UpdateProfile.jsx';
import AllTravelsSports from './components/Pages/AllTravelsSports.jsx';
import AddTreavelsSpot from './components/Pages/AddTreavelsSpot.jsx';
import MylistIs from './components/Pages/MylistIs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://knowtheplace-server.vercel.app/tourist-spot"),
      },
      {
        path: "/about-us",
        element: <About></About>,
      },
      {
        path: "/contact-us",
        element: <ContactCard></ContactCard>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            {" "}
            <MyProfile></MyProfile>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/all-tourists-spot",
        element: <AllTravelsSports></AllTravelsSports>,
        loader: () => fetch("https://knowtheplace-server.vercel.app/tourist-spot"),
      },
      {
        path: "/add-tourists-spot",
        element: (
          <PrivateRoute>
            <AddTreavelsSpot></AddTreavelsSpot>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-list",
        element: (
          <PrivateRoute>
            <MylistIs></MylistIs>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(`https://knowtheplace-server.vercel.app/singleSpot/${params.id}`),
        element: <UpdateDeatils></UpdateDeatils>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <SpotDetails></SpotDetails>
          </PrivateRoute>
        ),
      },
    ],

  },
  // {
  //   path:'/login',
  //   element:<Login></Login>
  // },{
  //   path:'/register',
  //   element:<Register></Register>
  // },
  // {
  //   path:'/contactcard',
  //   element:<ContactCard></ContactCard>
  // }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>,
)

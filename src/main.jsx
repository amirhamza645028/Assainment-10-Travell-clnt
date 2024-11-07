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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>
  },
  {
    path:'/login',
    element:<Login></Login>
  },{
    path:'/register',
    element:<Register></Register>
  },
  {
    path:'/contactcard',
    element:<ContactCard></ContactCard>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>,
)

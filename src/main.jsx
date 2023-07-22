import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import ErrorPage from './Components/Utilities/ErrorPage/ErrorPage';
import Login from './Components/Pages/Home/Login/Login';
import Registration from './Components/Pages/Home/Registration/Registration';
import AuthProvider from './Components/Utilities/Providers/AuthProvider';
import Admission from './Components/Pages/Home/Admission/Admission';
import MyCollege from './Components/Pages/Home/MyCollege/MyCollege';
import Colleges from './Components/Pages/Home/Colleges/Colleges';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/registration",
        element: <Registration />
      },
      {
        path: "/admission",
        element: <Admission />
      },
      {
        path: "/myCollege",
        element: <MyCollege />
      },
      {
        path: "/colleges",
        element: <Colleges />
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
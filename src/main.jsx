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
import Home from './Components/Pages/Home/Home/Home';
import PrivateRoute from './Components/Utilities/PrivateRoute/PrivateRoute';
import WriteReview from './Components/Pages/Home/Review/WriteReview';
import AdmissionApply from './Components/Pages/Home/Admission/AdmissionApply';
import Profile from './Components/Pages/Home/Profile/Profile';
import CollegePage from './Components/Pages/Home/Colleges/CollegePage';
import CollegeDetails from './Components/Pages/Home/Colleges/CollegeDetails';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: "/",
        element: < Home />
      },
      {
        path: "/users/:email",
        element: <Profile />,
        loader: ({ params }) => fetch(`https://college-hub-server-hazel.vercel.app/users/${params?.email}`)
      },
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
        path: "/admissionApply/:id",
        element: <AdmissionApply />
      },
      {
        path: "/myCollege",
        element: <PrivateRoute><MyCollege /></PrivateRoute>
      },
      {
        path: "/colleges",
        element: <Colleges />
      },
      {
        path: "/colleges/:id",
        element: <CollegeDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/bestCollege/${params._id}`)
      },
      {
        path: "/writeReview",
        element: <PrivateRoute><WriteReview /></PrivateRoute>
      },
      {
        path: "/writeReview",
        element: <PrivateRoute><WriteReview /></PrivateRoute>
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
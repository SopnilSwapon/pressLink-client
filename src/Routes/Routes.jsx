import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Authentication/SignUp";
import SignIn from "../Pages/Authentication/SignIn";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddArticle from "../Pages/AddArticle/AddArticle";
import AllArticle from "../Pages/AllArticle/AllArticle";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../Pages/AllUsers/AllUsers";
import AllArticleDash from "../Pages/Dashboard/AllArticleDash";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import AddPublisher from "../Pages/Dashboard/AddPublisher";
import MyArticle from "../Pages/MyArticle/MyArticle";
import Subscription from "../Pages/Subscription/Subscription";
import PremiumArticle from "../Pages/PremiumArticle/PremiumArticle";
import Payment from "../Pages/Payment/Payment";
import MyProfile from "../Pages/Authentication/MyProfile";
import AdminHome from "../Pages/Dashboard/AdminHome";
import UpdateMyArticle from "../Pages/MyArticle/UpdateMyArticle";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/signUp',
            element: <SignUp></SignUp>
        },
        {
          path: '/signIn',
          element: <SignIn></SignIn>
        },
        {
          path: '/addArticle',
          element: <PrivateRoute><AddArticle></AddArticle></PrivateRoute>
        },
        {
          path: '/allArticle',
          element: <AllArticle></AllArticle>
        },
        {
          path: '/newsDetails/:id',
          element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
        },
        {
          path: '/myArticle',
          element: <PrivateRoute> <MyArticle></MyArticle></PrivateRoute>
        },
        {
          path: '/updateMyArticle/:id',
          element: <PrivateRoute><UpdateMyArticle></UpdateMyArticle></PrivateRoute>
        },
        {
          path: '/subscription',
          element: <PrivateRoute><Subscription></Subscription></PrivateRoute>
        },
        {
          path: '/premiumArticle',
          element: <PremiumArticle></PremiumArticle>
        },
        {
          path: '/payment',
          element: <PrivateRoute><Payment></Payment></PrivateRoute>
        },
        {
          path: '/myProfile',
          element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'adminHome',
          element: <PrivateRoute><AdminHome></AdminHome></PrivateRoute>
        },
        {
          path: 'allUsers',
          element: <PrivateRoute><AllUsers></AllUsers></PrivateRoute>
        },
        {
          path: 'allArticleDash',
          element: <PrivateRoute><AllArticleDash></AllArticleDash></PrivateRoute>
        },
        {
          path: 'addPublisher',
          element: <PrivateRoute><AddPublisher></AddPublisher></PrivateRoute>
        }
      ]
    }
  ]);

export default router;
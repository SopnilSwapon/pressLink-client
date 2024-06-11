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
          element: <NewsDetails></NewsDetails>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'allUsers',
          element: <AllUsers></AllUsers>
        },
        {
          path: 'allArticleDash',
          element: <AllArticleDash></AllArticleDash>
        }
      ]
    }
  ]);

export default router;
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AllNewProducts from "../../Pages/AllNewProducts/AllNewProducts";
import Blogs from "../../Pages/Blogs/Blogs";
import Category from "../../Pages/Category/Category/Category";
import Products from "../../Pages/Category/Products/Products/Products";
import AddProducts from "../../Pages/Dashboard/AddProducts/AddProducts";
import AllSeller from "../../Pages/Dashboard/All Seller/AllSeller";

import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import Payment from "../../Pages/Dashboard/Payment/Payment";

import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Report from "../../Pages/Report/Report";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";
import SignUpSeller from "../../Pages/SignUp/SignUpSeller/SignUpSeller";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signupseller",
        element: <SignUpSeller></SignUpSeller>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },

      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            {" "}
            <Products></Products>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://bookworm-server.vercel.app/products/${params.id}`),
      },
      {
        path: "/allnewproducts",
        element: (
          <PrivateRoute>
            {" "}
            <AllNewProducts></AllNewProducts>
          </PrivateRoute>
        ),
        // loader: ({ params }) =>
        //   fetch(`https://bookworm-server.vercel.app/products/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllBuyers></AllBuyers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allseller",
        element: (
          <AdminRoute>
            <AllSeller></AllSeller>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/report",
        element: (
          <AdminRoute>
            <Report></Report>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addproduct",
        element: <AddProducts></AddProducts>,
      },
    ],
  },
  {
    path: "/dashboard/payment/:id",
    element: <Payment></Payment>,
    loader: ({ params }) =>
      fetch(`https://bookworm-server.vercel.app/bookings/${params.id}`),
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

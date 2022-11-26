import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Category from "../../Pages/Category/Category/Category";
import Products from "../../Pages/Category/Products/Products";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";

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
        path: "/products/:id",
        element: <Products></Products>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
    ],
  },
]);

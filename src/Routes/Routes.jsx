import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../layout/Layout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Services from "../pages/Services/Services";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "../pages/Services/PrivateRoute";
import PrivateBlog from "../pages/Blog/PrivateBlog";
import Blog from "../pages/Blog/Blog";
import ServiceDetails from "../pages/Services/ServiceDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/services",
        element: (
          <PrivateRoute>
            <Services />
          </PrivateRoute>
        ),
        loader: () => fetch("../../events.json"),
      },
      {
        path: "/blog",
        element: (
          <PrivateBlog>
            <Blog></Blog>
          </PrivateBlog>
        ),
      },
      {
        path: "/service/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: () => fetch("events.json"),
      },
    ],
  },
]);

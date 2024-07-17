import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "@/pages/error";

import Home from "@/pages/home";
import Blog from "@/pages/blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;

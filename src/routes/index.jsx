import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "@/pages/error";
// import Home from "@/pages/home";
import Posts from "@/pages/posts";
import Users from "@/pages/users";
import Auth from "@/pages/auth";

import { MainLayout } from "@/components";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Posts />
      </MainLayout>
    ),
  },
  {
    path: "/users",
    element: (
      <MainLayout>
        <Users />
      </MainLayout>
    ),
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "*",
    element: <Error errorCode={404} />,
  },
  {
    path: "/server-error",
    element: <Error errorCode={500} />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;

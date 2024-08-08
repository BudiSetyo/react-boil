import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "@/pages/error";
import Home from "@/pages/home";
import Posts from "@/pages/posts";
import Users from "@/pages/users";
import Auth from "@/pages/auth";

import { MainLayout } from "@/components";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/posts",
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
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;

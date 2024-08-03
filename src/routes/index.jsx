import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "@/pages/error";
import Home from "@/pages/home";
import Posts from "@/pages/posts";
import Users from "@/pages/users";

import { MainLayout } from "@/components";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
    errorElement: <ErrorPage />,
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
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;

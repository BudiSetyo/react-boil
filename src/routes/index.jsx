import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "@/pages/error";
import Posts from "@/pages/posts";
import Users from "@/pages/users";
import Auth from "@/pages/auth";
import StudyCase from "@/pages/studyCase";
import Services from "@/pages/services";
import Teams from "@/pages/teams";
import Clients from "@/pages/clients";
import Testimonies from "@/pages/testimony";

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
    path: "/study",
    element: (
      <MainLayout>
        <StudyCase />
      </MainLayout>
    ),
  },
  {
    path: "/services",
    element: (
      <MainLayout>
        <Services />
      </MainLayout>
    ),
  },
  {
    path: "/teams",
    element: (
      <MainLayout>
        <Teams />
      </MainLayout>
    ),
  },
  {
    path: "/clients",
    element: (
      <MainLayout>
        <Clients />
      </MainLayout>
    ),
  },
  {
    path: "/testimonies",
    element: (
      <MainLayout>
        <Testimonies />
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

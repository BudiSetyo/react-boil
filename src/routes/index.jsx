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

// Update the router to use "/cms" as the base path
const router = createBrowserRouter([
  {
    path: "/cms", // Base path for all routes
    children: [
      {
        path: "", // This will match "/cms"
        element: (
          <MainLayout>
            <Posts />
          </MainLayout>
        ),
      },
      {
        path: "users", // This will match "/cms/users"
        element: (
          <MainLayout>
            <Users />
          </MainLayout>
        ),
      },
      {
        path: "study", // This will match "/cms/study"
        element: (
          <MainLayout>
            <StudyCase />
          </MainLayout>
        ),
      },
      {
        path: "services", // This will match "/cms/services"
        element: (
          <MainLayout>
            <Services />
          </MainLayout>
        ),
      },
      {
        path: "teams", // This will match "/cms/teams"
        element: (
          <MainLayout>
            <Teams />
          </MainLayout>
        ),
      },
      {
        path: "clients", // This will match "/cms/clients"
        element: (
          <MainLayout>
            <Clients />
          </MainLayout>
        ),
      },
      {
        path: "testimonies", // This will match "/cms/testimonies"
        element: (
          <MainLayout>
            <Testimonies />
          </MainLayout>
        ),
      },

      {
        path: "*", // Catch-all route for 404
        element: <Error errorCode={404} />,
      },
    ],
  },
  {
    path: "/cms/auth", // This will match "/cms/auth"
    element: <Auth />,
  },
  {
    path: "/cms/server-error", // This will match "/cms/server-error"
    element: <Error errorCode={500} />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;

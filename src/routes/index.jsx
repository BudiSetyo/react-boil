import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "@/pages/error";
import Posts from "@/pages/posts";
import Auth from "@/pages/auth";
import { baseUrl } from "@/utils";
import { MainLayout } from "@/components";

// Update the router to use "/cms" as the base path
const router = createBrowserRouter([
  {
    path: `/${baseUrl}`, // Base path for all routes
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
        path: "*", // Catch-all route for 404
        element: <Error errorCode={404} />,
      },
    ],
  },
  {
    path: `/${baseUrl}/auth`, // This will match "/cms/auth"
    element: <Auth />,
  },
  {
    path: `/${baseUrl}/server-error`, // This will match "/cms/server-error"
    element: <Error errorCode={500} />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;

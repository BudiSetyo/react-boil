import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Error from '@/pages/error';
import Posts from '@/pages/posts';
import Auth from '@/pages/auth';
import { baseUrl } from '@/utils';
import { MainLayout } from '@/components';

const router = createBrowserRouter([
  {
    path: `/${baseUrl}`,
    children: [
      {
        path: '',
        element: (
          <MainLayout>
            <Posts />
          </MainLayout>
        ),
      },

      {
        path: '*',
        element: <Error errorCode={404} />,
      },
    ],
  },
  {
    path: `/${baseUrl}/auth`,
    element: <Auth />,
  },
  {
    path: `/${baseUrl}/server-error`,
    element: <Error errorCode={500} />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;

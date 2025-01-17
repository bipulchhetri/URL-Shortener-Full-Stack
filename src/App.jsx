
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/AppLayout'
import Landingpage from './pages/Landingpage'
import Dashboard from './pages/dashboard'
import Auth from './pages/auth'
import Redirect from './pages/redirect'
import Linkpage from './pages/link'
import UrlProvider from './context'
import RequireAuth from './components/require-auth'
import LinkPage from './pages/link'
import RedirectLink from './pages/redirect'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Landingpage/>,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/dashboard",
        element: (
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        ),
      },
      {
        path: "/link/:id",
        element: (
          <RequireAuth>
            <LinkPage />
          </RequireAuth>
        ),
      },
      {
        path: "/:id",
        element: <RedirectLink/>,
      },
    ],
  },
]);
  
function App() {

  return (
    <UrlProvider>
    <RouterProvider router={router} />
  </UrlProvider>
  )
  
}

export default App

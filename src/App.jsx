
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/AppLayout'
import Landingpage from './pages/Landingpage'
import Dashboard from './pages/dashboard'
import Auth from './pages/auth'
import Redirect from './pages/redirect'
import Linkpage from './pages/links'

const router=createBrowserRouter([
    {
      element:<AppLayout/>,
      children:[
        {
          path:"/",
          element : <Landingpage/>,
        },
        {
          path:'/dashboard',
          element : <Dashboard/>,
        },
        {
          path:'/link/:id',
          element : <Linkpage/>,
        },
        {
          path:'/redirect',
          element : <Redirect/>,
        },
        {
          path:'/auth',
          element : <Auth/>,
        },
        {
          path:'/:id',
          element : <Redirect/>,
        },
      ],
    },
  ])

function App() {

  return (
    <RouterProvider router={router} />
  )
  
}

export default App

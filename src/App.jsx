import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import { Home } from './pages/Home'
import ProductsList from './pages/ProductsList'
import Projects from './pages/Projects'
import OurTeam from './pages/OurTeam'

const App = () => {
  const routes = createBrowserRouter([
    {
      path:'/',
      element:<MainLayout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:'maxsulotlar',
          element:<ProductsList/>
        },
        {
          path:'loyihalar',
          element:<Projects/>
        },
        {
          path:'jamoa',
          element:<OurTeam/>
        }
      ]
    }
  ])
  return <RouterProvider router={routes}/>
}

export default App
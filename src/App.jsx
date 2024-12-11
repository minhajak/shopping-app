import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from '../src/Layouts/MainLayout'
import HomePage from '../src/Pages/HomePage'
import React from 'react'
import MensPage from './Pages/MensPage'
import CartPage from './Pages/CartPage'
import FemalePage from './Pages/FemalePage'

function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/mens' element={<MensPage/>}/>
        <Route path='/females' element={<FemalePage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Route>
    ),
    {
      future: {
        v7_startTransition: true,
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      },
    }
  )

  return <RouterProvider router={router} />
}

export default App

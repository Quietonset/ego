import React from 'react';
import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Root from './layout/Root';
import LandingPage from './pages/LandingPage';
import "@fontsource/space-grotesk";

const App = () => {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path='/' element={ <Root/> }>
        <Route index element={ <LandingPage/> }/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App

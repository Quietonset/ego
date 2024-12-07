import React from 'react';
import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Root from './layout/Root';
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage'
import "@fontsource/space-grotesk";

const App = () => {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path='/' element={ <Root/> }>
        <Route index element={ <LandingPage/> }/>
        <Route path='/signup' element={ <SignupPage/> } />
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App

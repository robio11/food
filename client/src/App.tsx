"use client"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './auth/Login'
import Signup from './auth/Signup'
import Home from './components/Home'
import ForgotPassword from './auth/ForgotPassword'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: 
        <Home />
  },
  {
    path: "/login",
    element: 
        <Login />
  },
  {
    path: "/signup",
    element: 
        <Signup />
  },
  {
    path: "/forgetpassword",
    element: 
        <ForgotPassword />
  },
])


function App() {

 
  return (
    <>
    <main>
      <RouterProvider router={appRouter}/>
      </main>
    </>
  )
}

export default App

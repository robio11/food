"use client"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './auth/Login'
import Signup from './auth/Signup'
import Home from './components/Home'
import ForgotPassword from './auth/ForgotPassword'
import ResetPassword from './auth/ResetPassword'
import VerfiyEmail from './auth/VerfiyEmail'

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
  {
    path: "/resetpassword",
    element: 
        <ResetPassword />
  },
  {
    path: "/verifyemail",
    element: 
        <VerfiyEmail />
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

import { Route, Routes } from "react-router-dom"
import Explore from "./pages/Explore"
import Home from "./pages/Home"
import Checkout from "./pages/Checkout"
import My_orders from "./pages/My_orders"
import Profile from "./pages/Profile"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import { ToastContainer } from "react-toastify"
import { useAuthStore } from "./store/authStore"
import { useEffect } from "react"
import Admin_signin from "./pages/Admin_signin"

const App = () => {

  useEffect(() => {
    useAuthStore.getState().initializeAuth()
  },[])
  
  return (
    <div >
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/my_orders" element={<My_orders/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/admin/dashboard" element={<Dashboard/>} />
        <Route path="/admin/signin" element={<Admin_signin/>} />
      </Routes>
    </div>
  )
}

export default App
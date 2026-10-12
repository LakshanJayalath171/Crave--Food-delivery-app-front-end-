import { Route, Routes } from "react-router-dom"
import Explore from "./pages/Explore"
import Home from "./pages/Home"
import Checkout from "./pages/Checkout"
import My_orders from "./pages/My_orders"
import Profile from "./pages/Profile"

const App = () => {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/my_orders" element={<My_orders/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </div>
  )
}

export default App
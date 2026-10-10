import { Route, Routes } from "react-router-dom"
import Explore from "./pages/Explore"
import Home from "./pages/Home"

const App = () => {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/explore" element={<Explore/>} />
      </Routes>
    </div>
  )
}

export default App
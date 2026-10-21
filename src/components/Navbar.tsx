import { Bell, MapPin, Search } from "lucide-react"
import {useAuthStore} from "../store/authStore"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const {user, isAuthenticated , logout} = useAuthStore()
    const navigate = useNavigate()

    console.log(user, isAuthenticated)
  return (
    <nav className="flex items-center justify-between py-2 px-10">
        {/* left */}
        <div>
            <img src="/logo.svg" className="w-24 h-10"/>
        </div>

        {/* middle */}
        <div className="flex items-center justify-center gap-3">
            <a className="text-secondary  font-bold" href="/">Home</a>
            <a className="text-secondary  font-bold" href="/explore">Explore</a>
            <a className="text-secondary  font-bold" href="/restaurant">Restaurant</a>
            <a className="text-secondary  font-bold" href="/about-us">About Us</a>
        </div>

        {/* right */}

        <div className="flex items-center justify-center gap-4">
            <div className="flex items-center justify-center gap-2">
                <MapPin size={15}/> 
                <p className="text-main text-xs font-light">Colombo, Sri Lanka</p>
            </div>

            <div>
                <Search size={15}/>
            </div>

            <div>
                <Bell size={15}/>
            </div>

            <div>
                <button onClick={() => navigate("/login")} className="btn-primary">Get Started</button>
            </div>

            {isAuthenticated && (<div onClick={() => logout()} className=" flex items-center justify-center bg-deep-orange cursor-pointer w-8 h-8 rounded-full p-4">
                <div className="rounded-full flex items-center justify-center">
                    <p className="text-white text-xs font-bold">c</p>
                </div>
            </div>)}
            
        </div>
    </nav>
  )
}

export default Navbar
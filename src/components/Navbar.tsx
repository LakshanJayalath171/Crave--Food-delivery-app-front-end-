import { Bell, MapPin, Search } from "lucide-react"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-2">
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
                <button className="btn-primary">Get Started</button>
            </div>

            <div className=" flex items-center justify-center">
                <div className="p-4 rounded-full bg-deep-orange  ">
                    <p className="text-white text-xs font-bold">A</p>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
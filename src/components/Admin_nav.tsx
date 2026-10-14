import { Bell, Search } from "lucide-react"
import BlinkingDot from "./Dot"

const Admin_nav = () => {
  return (
    <nav className="px-10 py-2 flex items-center justify-between">
        <div className="flex items-center justify-start gap-2">
            <img src="/favicon.svg" alt="Logo" className="w-7 h-7" />
            <div>
                <h2 className="text-lg font-bold text-primary">Crave</h2>
                <div className="flex items-center justify-start gap-1">
                    <BlinkingDot color="bg-green-500" size="w-2 h-2"/>
                    <p className="text-xs  font-bold">Admin</p>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-start gap-4">

            <div className="flex items-center justify-start gap-2 text-xs font-light bg-gray-500/40 px-3 py-1 rounded-full">
                <Search size={20} className=""/>
                <input className="outline-none focus-within:outline-none" placeholder="search orders, menu items text-xs font-light "/>
            </div>
            <Bell className="text-primary cursor-pointer" size={20}/>
            <div className="flex items-center justify-center">
                <div className="bg-orange-500 rounded-full  w-8 h-8 flex items-center justify-center font-bold">K</div>
            </div>
        </div>
    </nav>
  )
}

export default Admin_nav
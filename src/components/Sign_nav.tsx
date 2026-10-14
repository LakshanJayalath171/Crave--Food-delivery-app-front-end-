import { FileQuestion } from "lucide-react"
import logo from "/logo.svg"

const Sign_nav = () => {
  return (
    <div>
        <div className="flex items-center justify-between px-10 py-1">
            <div>
                <img src={logo} alt="logo" className="w-20 h-20"/>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
                <FileQuestion size={15}/>
                <p className="text-xs font-light">Help</p>
            </div>
        </div>
    </div>
  )
}

export default Sign_nav
import { Blocks, ChartBarStacked, Hamburger, SquareMenu, Tag } from "lucide-react"

interface adminSidebarProps{
    activeCom: string,
    setAct: React.Dispatch<React.SetStateAction<string>>
}

const Admin_sidebar = ({activeCom , setAct} :adminSidebarProps ) => {
  return (
    <div className="w-full h-full pl-10 py-2">
        <div>
            <div className={`flex items-center justify-start gap-3 rounded-lg px-3 py-1 cursor-pointer ${activeCom === 'dashboard' ? 'bg-primary' : ''}`} onClick={() => setAct('dashboard')}>
                <Blocks size={20}/>
                <p className="font-bold">Dashboard</p>
            </div>
            
            <div className={`flex items-center justify-start gap-3  rounded-lg px-3 py-1 cursor-pointer ${activeCom === 'products' ? 'bg-primary' : ''}`} onClick={() => setAct('products')}>
                <Hamburger size={20}/>
                <p className="font-bold">Products</p>
            </div>

            <div className={`flex items-center justify-start gap-3  rounded-lg px-3 py-1 cursor-pointer ${activeCom === 'orders' ? 'bg-primary' : ''}`} onClick={() => setAct('orders')}>
                <SquareMenu size={20}/>
                <p className="font-bold">Orders</p>
            </div>

            <div className={`flex items-center justify-start gap-3  rounded-lg px-3 py-1 cursor-pointer ${activeCom === 'categories' ? 'bg-primary' : ''}`} onClick={() => setAct('categories')}>
                <ChartBarStacked size={20}/>
                <p className="font-bold">Categories</p>
            </div>

            <div className={`flex items-center justify-start gap-3  rounded-lg px-3 py-1 cursor-pointer ${activeCom === 'promotions' ? 'bg-primary' : ''}`} onClick={() => setAct('promotions')}>
                <Tag size={20}/>
                <p className="font-bold">Promotions</p>
            </div>
        </div>
    </div>
  )
}

export default Admin_sidebar
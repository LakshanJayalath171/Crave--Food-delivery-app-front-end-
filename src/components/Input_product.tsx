import { Hamburger, ImagePlus } from "lucide-react"
import { menu_list } from "../assets/frontend_assets/assets"

const Input_product = () => {
  return (
    <div className="px-3 py-2">
        {/* headers */}
        <div className="flex items-center justify-start gap-3">
            <div className="p-2 rounded-lg bg-primary">
                <Hamburger className="text-on-dark"/>
            </div>
            <div>
                <h1 className="text-lg font-bold text-main">Add New Menu Item</h1>
                <p className="text-secondary font-light text-xs">Enter culinary specifications, pricing, and ingredients.</p>
            </div>
        </div>

        {/* basic info */}
        <div className="mt-3">
            <p className="text-main font-bold">Basic Information</p>

            <div className="mt-2">
                <p className="text-xs font-semibold">Dish Name</p>
                <input placeholder="Truffle Parmesan Smash Burger" type="text" className="w-full border-primary rounded-lg px-3 py-1 focus-within:outline-none"/>
            </div>
        </div>

        {/*category select  */}

        <div className="mt-3">
            <p className="text-xs font-semibold">Menu Category</p>

            <div className="mt-2">
                <select className="w-full border-primary rounded-lg px-3 py-1 focus-within:outline-none">
                    {menu_list.map((item, index)=>(
                        <option  key={index}>{item.menu_name}</option>
                    ))}
                </select>
            </div>
        </div>

        {/* dish description */}
        <div className="mt-3">
            
            <div className="mt-2">
                <p className="text-xs font-semibold">Description</p>
                <textarea placeholder="A delicious burger with truffle and parmesan" className="w-full border-primary rounded-lg px-3 py-1 focus-within:outline-none" rows={4}></textarea>
            </div>
        </div>
        {/* dish image */}
        <div className="mt-3">
            <p className="text-xs font-semibold">Dish Image</p>

            <label className="mt-2 flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-xl border-primary border-dashed bg-soft-orange/30 px-4 py-6 text-center transition-colors hover:bg-soft-orange">
                <ImagePlus className="text-primary" size={28} strokeWidth={1.8} />
                <span className="mt-2 text-sm font-semibold text-main">Upload dish image</span>
                <span className="mt-1 text-xs text-secondary">PNG, JPG, or WEBP up to 5 MB</span>
                <input type="file" accept="image/png,image/jpeg,image/webp" className="sr-only" />
            </label>
        </div>

                    
        {/* dish price */}
        <div >
            <div className="mt-3">
                <p className="text-xs font-semibold">Price</p>
                <input placeholder="Rs.12.99"  type="text" className="w-full border-primary rounded-lg px-3 py-1 focus-within:outline-none"/>
            </div>
        </div>

        {/* prep time */}
        <div >
            <div className="mt-3">
                <p className="text-xs font-semibold">Estimated Prep Time</p>
                <input placeholder="18 min"  type="text" className="w-full border-primary rounded-lg px-3 py-1 focus-within:outline-none"/>
            </div>
        </div>

        <div className="flex items-center justify-start mt-10 gap-3">
            <button className="btn-secondary">Cancel</button>
            <button className="btn-primary">Save & Publish to Menu</button>      
        </div>
    </div>
  )
}

export default Input_product
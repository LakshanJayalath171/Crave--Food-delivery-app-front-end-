import { Filter, Star } from "lucide-react"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react";
import DishCard from "../components/DishCard";
import {  food_list } from "../assets/frontend_assets/assets";
import axiosInstance from "../api/axiosInstance";

const Explore = () => {

  const [products, setProducts] = useState();

  const [priceRange, setPriceRange] = useState(0);

  const getAllProducts = async () => {
    try{
      const response = await axiosInstance.get("/admin/all-products");

      if(response.data.success){
        setProducts(response.data.products);
        console.log(response.data.products);
      }
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="w-screen h-screen">
      {/* navbar */}
      <Navbar/>

      {/* heading section */}
      <div className="flex items-center justify-center py-10">
        <div className="text-center">
          <div>
            <p className="font-bold text-primary">🔥Discover Your Next Favorite Dish</p>
          </div>

          <div>
            <h1 className="font-bold text-4xl">Explore Delicious Food</h1>
            <p className="font-light text-xs text-secondary">From comforting classics to exciting new flavors,<br/> find the perfect meal crafted by local culinary artisans.</p>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="flex items-center justify-center ">
        {/* sidebar */}
        <div className="w-1/4 px-6">
          {/* sidebar header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center gap-2">
              <Filter className="text-deep-orange" size={20}/>
              <p className="text-lg font-bold text-main">Filters</p>
            </div>
            <p className="text-sm font-light text-primary hover:underline cursor-pointer">clear-all</p>
          </div>

          {/* sidebar filters */}

          {/* price slider */}
          <div className="mt-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-light text-main">Price Range</p>
              <p className="text-sm font-light text-primary ">Rs. 0.00 — Rs. {priceRange}</p>
            </div>

            <div className="mt-2 ">
              <input type="range" min={0} max="10000" value={priceRange} onChange={(e) => setPriceRange(parseInt(e.target.value))} className="range cursor-pointer range-warning h-8 w-full" />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm font-light text-secondary">Rs.0</p>
              <p className="text-sm font-light text-secondary">Rs. 10,000</p>
            </div>
          </div>

          {/* rating filter */}
          <div className="mt-3">
            <h1 className="text-sm font-light text-main">Customer Rating</h1>
            <div className="flex items-center justify-start gap-2 mt-2">
              <div>
                <input type="checkbox" className="accent-amber-600"/>
              </div>
              <div className="flex items-center justify-center gap-1">
                <Star size={15} className="text-amber-500"/>
                <p className="text-main font-bold text-sm">4.5 & up</p>
                <p className="text-secondary font-light text-xs">(32)</p>
              </div>
            </div>

            <div className="flex items-center justify-start gap-2 mt-2">
              <div>
                <input type="checkbox" className="accent-amber-600"/>
              </div>
              <div className="flex items-center justify-center gap-1">
                <Star size={15} className="text-amber-500"/>
                <p className="text-main font-bold text-sm">4.0 & up</p>
                <p className="text-secondary font-light text-xs">(12)</p>
              </div>
            </div>

            <div className="flex items-center justify-start gap-2 mt-2">
              <div>
                <input type="checkbox" className="accent-amber-600"/>
              </div>
              <div className="flex items-center justify-center gap-1">
                <Star size={15} className="text-amber-500"/>
                <p className="text-main font-bold text-sm">3.5 & up</p>
                <p className="text-secondary font-light text-xs">(5)</p>
              </div>
            </div>
          </div>

          {/* special offers */}
          <div className="mt-3">
            <h1 className="text-sm font-light text-main">Customer Rating</h1>
            <div className="flex items-center justify-start gap-2 mt-2">
              <div>
                <input type="checkbox" className="accent-amber-600"/>
              </div>
              <div className="flex items-center justify-center gap-1">
                <Star size={15} className="text-amber-500"/>
                <p className="text-main font-bold text-sm">Discounted Items</p>
                
              </div>
            </div>

            <div className="flex items-center justify-start gap-2 mt-2">
              <div>
                <input type="checkbox" className="accent-amber-600"/>
              </div>
              <div className="flex items-center justify-center gap-1">
                <Star size={15} className="text-amber-500"/>
                <p className="text-main font-bold text-sm">Buy One Get One</p>
                
              </div>
            </div>

            <div className="flex items-center justify-start gap-2 mt-2">
              <div>
                <input type="checkbox" className="accent-amber-600"/>
              </div>
              <div className="flex items-center justify-center gap-1">
                <Star size={15} className="text-amber-500"/>
                <p className="text-main font-bold text-sm">Free Delivery</p>
                
              </div>
            </div>
          </div>

          {/* Availability */}

          <div className="mt-3">
            <h1 className="text-sm font-light text-main">Availability</h1>
            <div className="flex items-center justify-start gap-2 mt-2">
              <div>
                <input type="radio" name="availability" className="accent-amber-600"/>
              </div>
              <div className="flex items-center justify-center gap-1">
                <Star size={15} className="text-amber-500"/>
                <p className="text-main font-bold text-sm">Available Now</p>
                
              </div>
            </div>

            <div className="flex items-center justify-start gap-2 mt-2">
              <div>
                <input type="radio" name="availability" className="accent-amber-600"/>
              </div>
              <div className="flex items-center justify-center gap-1">
                <Star size={15} className="text-amber-500"/>
                <p className="text-main font-bold text-sm">Open Restaurants Only</p>
                
              </div>
            </div>
          </div>

          {/* apply */}
          <div className="flex items-center justify-start mt-4 w-full h-full">
            <button className="btn-primary">Apply Filters</button>
          </div>
        </div>

        {/* products */}
        <div className="w-3/4 flex items-start justify-start overflow-y-auto h-[70vh] gap-4 px-6 py-2">
          <div className="grid grid-cols-3 gap-4">
            {products?.map((items) => (
              <DishCard key={items._id} name={items.name} image={items.image_url} description={items.description} price={`Rs. ${items.price}`}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore
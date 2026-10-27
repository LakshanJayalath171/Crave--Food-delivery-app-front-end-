import { useEffect, useState } from "react"
import { CircleCheck, Eye, Folder, Plus } from "lucide-react"
import { food_list, menu_list } from "../assets/frontend_assets/assets"
import Category_card from "./Category_card"
import axiosInstance from "../api/axiosInstance"
import Input_category from "./Input_category"

const Categories = () => {
  const [categories, setCategories] = useState()
  const [availableCategoryNames, setAvailableCategoryNames] = useState(() => new Set(menu_list.map((category) => category.menu_name)))

  const toggleCategoryAvailability = (categoryName: string) => {
    setAvailableCategoryNames((currentNames) => {
      const nextNames = new Set(currentNames)
      if (nextNames.has(categoryName)) {
        nextNames.delete(categoryName)
      } else {
        nextNames.add(categoryName)
      }
      return nextNames
    })
  }

  const deleteCategory = (categoryName: string) => {
    setCategories((currentCategories) => currentCategories.filter((category) => category.menu_name !== categoryName))
    setAvailableCategoryNames((currentNames) => {
      const nextNames = new Set(currentNames)
      nextNames.delete(categoryName)
      return nextNames
    })
  }

  const [pannel,setPannel] = useState(false)

  const getAllCategories = async() => {
    try{
      const response = await axiosInstance.get("/admin/all-categories")
      setCategories(response.data.categories)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    getAllCategories()
  })
  return (
    <div>
      {pannel && 
            <div className="fixed top-0 left-0 z-50 flex h-screen w-screen bg-black/40 ">
              <div className="flex-5" onClick={()=>setPannel(false)}></div>
              <div className="flex-2 w-full h-screen bg-white">
                <Input_category setPannel={setPannel}/>
              </div>
              
            </div>}
      {/* heading */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold">Categories</h1>
            <div className="text-xs font-light bg-orange-400/40 text-primary px-3 py-1 rounded-full">
              {availableCategoryNames.size} Active Categories
            </div>
          </div>
          <p className="text-xs font-light text-secondary">
            Organize your menu and help customers discover their favorite food
            dishes across the Crave storefront.
          </p>
        </div>
        <div>
          <button onClick={()=>setPannel(!pannel)} className="btn-primary">
            <Plus />
            Add Category
          </button>
        </div>
      </div>

      {/* card */}
      <div className="grid grid-cols-3 gap-3 mt-4">

        {/* reusable card */}
        <div className="apple rounded-lg px-3 py-1">
          <div className="flex items-center justify-between ">
            <div>
              <p className="text-xs font-bold">TOTAL CATEGORIES</p>
            </div>
            <div className="p-3 rounded-lg bg-orange-500/40">
              <Folder className="text-main" size={15} />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-main">{categories?.length}</h1>
            <p className="text-xs font-light text-secondary">
              Primary navigation groups
            </p>
          </div>
        </div>

        <div className="apple rounded-lg px-3 py-1">
          <div className="flex items-center justify-between ">
            <div>
              <p className="text-xs font-bold">ACTIVE STOREFRONT</p>
            </div>
            <div className="p-3 rounded-lg bg-green-500/40">
              <Eye className="text-main" size={15} />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-main">{availableCategoryNames.size}</h1>
            <p className="text-xs font-light text-secondary">
              Visible on consumer app
            </p>
          </div>
        </div>

        <div className="apple rounded-lg px-3 py-1">
          <div className="flex items-center justify-between ">
            <div>
              <p className="text-xs font-bold">UNSIGNED DISHES</p>
            </div>
            <div className="p-3 rounded-lg bg-red-500/40">
              <CircleCheck className="text-main" size={15} />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-main">{food_list.filter((dish) => !categories?.some((category) => category?.name === dish.category)).length}</h1>
            <p className="text-xs font-light text-secondary">
              All 48 menu items categorized
            </p>
          </div>
        </div>

      </div>

      <div className="flex items-center justify-start mt-4">
        <div className=" px-3 py-1 cursor-pointer rounded-full text-xs font-semibold text-on-dark bg-orange-500">All(12)</div>

        <div className=" px-3 py-1 cursor-pointer rounded-full text-xs font-semibold text-main">Active(10)</div>

        <div className=" px-3 py-1 rounded-full text-xs font-semibold text-main">Inactive(2)</div>

        
      </div>
      {/* card grid */}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories?.map((category,index) => (
          <Category_card
            key={index}
            category={category}
            productCount={food_list.filter((dish) => dish.category === category?.name).length}
            isAvailable={availableCategoryNames.has(category?.name)}
            onEdit={() => undefined}
            onDelete={() => deleteCategory(category?.name)}
            onToggleAvailability={() => toggleCategoryAvailability(category?.name)}
          />
        ))}
      </div>
    </div>
  );
}

export default Categories
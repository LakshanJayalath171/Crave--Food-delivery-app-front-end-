import { useEffect, useState } from "react";
import {
  CircleCheck,
  CirclePause,
  Edit3,
  Flame,
  Trash2,
  UtensilsCrossed,
} from "lucide-react";
import { food_list } from "../assets/frontend_assets/assets";
import Input_product from "./Input_product";
import useCategoryStore from "../store/categoryStore";
import axiosInstance from "../api/axiosInstance";
import { toast } from "react-toastify";

const Products = () => {
  const categories = useCategoryStore((state) => state.categories);

  const [dishes, setDishes] = useState([]);
  const [availableDishIds, setAvailableDishIds] = useState(
    () => new Set(food_list.map((dish) => dish._id)),
  );
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredDishes =
    selectedCategory === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === selectedCategory);


  // delete dish from the list
  const deleteDish = async (id: string)=>{
    try{
      const confirmDelete = window.confirm("Are you sure you want to delete this dish?");
      if (!confirmDelete) {
        return; // Exit if the user cancels the deletion
      }

      const response = await axiosInstance.delete(`/admin/delete-product/${id}`);

      if (response.data.success === false){
        toast.error(response.data.message);
        return;
      }

      toast.success(response.data.message);
      getAllProduct(); // Refresh the product list after deletion
    }
    catch(error){
      toast.error(error.message);
    }
  }

  // fetching data from databse
  const getAllProduct = async() =>{
    try{
      const response = await axiosInstance.get('/admin/all-products')

      setDishes(response.data.products)
    }
    catch(error){
      toast.error(error.message);
      console.error('Error fetching products:', error);
    }
  }

  // refreshed the product list when the component mounts
  const refreshProductList = () => {
    getAllProduct();
  }
  useEffect(()=>{
    getAllProduct()
  },[])

  
  const [addMenu, setAddMenu] = useState(false);

  return (
    <div>
      {addMenu && (
        <div className="fixed top-0 left-0 z-50 flex h-screen w-screen bg-black/40 ">
          <div className="flex-5" onClick={() => setAddMenu(false)}></div>
          <div className="flex-2 w-full h-screen bg-white">
            <Input_product setAddMenu={setAddMenu} refreshProductList={refreshProductList} />
          </div>
        </div>
      )}
      {/* heading */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-main">Products</h1>
          <p className="text-sm text-secondary font-light">
            Manage your menu, culinary specifications, tier pricing, promotional
            discounts,
            <br /> and live kitchen dispatch availability.
          </p>
        </div>

        <div>
          <button
            onClick={() => setAddMenu(!addMenu)}
            className="flex items-center justify-start btn-primary gap-2"
          >
            <UtensilsCrossed />+ Add New Product
          </button>
        </div>
      </div>

      {/* cards */}

      <div className="grid grid-cols-4 gap-3 mt-4">
        {/* reusable card */}
        <div className="apple rounded-lg px-3 py-1">
          <div className="flex items-center justify-between">
            <p className="text-sm text-main font-semibold">Total Menu Dishes</p>
            <div className="bg-orange-500/40 rounded-full p-2">
              <UtensilsCrossed className="text-main" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold">{dishes?.length}</h1>
          </div>
        </div>

        <div className="apple rounded-lg px-3 py-1">
          <div className="flex items-center justify-between">
            <p className="text-sm text-main font-semibold">Live & Available</p>
            <div className="bg-green-500/40 rounded-full p-2">
              <CircleCheck className="text-main" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold">{availableDishIds.size}</h1>
          </div>
        </div>

        <div className="apple rounded-lg px-3 py-1">
          <div className="flex items-center justify-between">
            <p className="text-sm text-main font-semibold">
              Temporarily Unavailable
            </p>
            <div className="bg-red-500/40 rounded-full p-2">
              <CirclePause className="text-main" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              {dishes?.length - availableDishIds.size}
            </h1>
          </div>
        </div>

        <div className="apple rounded-lg px-3 py-1">
          <div className="flex items-center justify-between">
            <p className="text-sm text-main font-semibold">On Active Promo</p>
            <div className="bg-yellow-500/40 rounded-full p-2">
              <Flame className="text-main" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold">11</h1>
          </div>
        </div>
      </div>

      {/* products section */}

      <div className="mt-2">
        {/* category filters */}
        <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap pb-1">
          {/* All Categories */}
          <button
            type="button"
            onClick={() => setSelectedCategory("All")}
            className={`flex h-9 w-fit shrink-0 items-center justify-center gap-1 rounded-full px-4 text-xs font-medium transition-colors ${
              selectedCategory === "All"
                ? "bg-orange-500 text-on-dark"
                : "text-main hover:bg-orange-500/10"
            }`}
          >
            <span>All</span>
            <span>({dishes?.length})</span>
          </button>

          {/* Individual Categories */}
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            const categoryCount = dishes?.filter(
              (dish) => dish.category === category.name,
            ).length;

            return (
              <button
                key={category._id}
                type="button"
                onClick={() => setSelectedCategory(category.name)}
                className={`flex h-9 w-fit shrink-0 items-center justify-center gap-1 rounded-full px-4 text-xs font-medium transition-colors ${
                  selectedCategory == category.name
                    ? "bg-orange-500 text-on-dark"
                    : "text-main hover:bg-orange-500/10"
                }`}
              >
                <span>{category.name}</span>
                <span>({categoryCount})</span>
              </button>
            );
          })}
        </div>

        {/* table */}
        <div className="mt-3 overflow-hidden rounded-lg bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-212.5 text-left text-sm">
              <thead className="border-b border-orange-100 bg-orange-50/70 text-xs uppercase tracking-wide text-secondary">
                <tr>
                  <th className="px-4 py-3 font-semibold">
                    Dish &amp; Details
                  </th>
                  <th className="px-4 py-3 font-semibold">Category</th>
                  <th className="px-4 py-3 font-semibold">Price (LKR)</th>
                  <th className="px-4 py-3 font-semibold">Controls</th>
                  <th className="px-4 py-3 text-center font-semibold">
                    Availability
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-orange-100">
                {filteredDishes?.map((dish) => {
                  const isAvailable = availableDishIds.has(dish._id);

                  return (
                    <tr
                      key={dish._id}
                      className="transition-colors hover:bg-orange-50/40"
                    >
                      <td className="px-4 py-3">
                        <div className="flex min-w-70 items-center gap-3">
                          <img
                            src={dish?.image_url}
                            alt={dish?.name}
                            className="h-12 w-12 rounded-lg object-cover"
                          />
                          <div>
                            <p className="font-semibold text-main">
                              {dish.name.trim()}
                            </p>
                            <p className="mt-1 max-w-90 truncate text-xs text-secondary">
                              {dish?.description}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-secondary">
                        {dish?.category}
                      </td>
                      <td className="px-4 py-3 font-semibold text-main">
                        {dish.price.toLocaleString("en-LK")}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            aria-label={`Edit ${dish.name}`}
                            title={`Edit ${dish.name}`}
                            className="rounded-md p-2 text-secondary transition-colors hover:bg-orange-100 hover:text-orange-600"
                          >
                            <Edit3 size={16} />
                          </button>
                          <button
                            type="button"                    
                            aria-label={`Delete ${dish.name}`}
                            title={`Delete ${dish.name}`}
                            onClick={() => deleteDish(dish._id)}
                            className="rounded-md p-2 text-secondary transition-colors hover:bg-red-100 hover:text-red-600 cursor-pointer"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <button
                          type="button"
                          role="switch"
                          aria-checked={isAvailable}
                          aria-label={`${isAvailable ? "Disable" : "Enable"} ${dish.name}`}
                          
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isAvailable ? "bg-green-500" : "bg-gray-300"}`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isAvailable ? "translate-x-6" : "translate-x-1"}`}
                          />
                        </button>
                        <span
                          className={`ml-2 text-xs font-medium ${isAvailable ? "text-success" : "text-muted"}`}
                        >
                          {isAvailable ? "Available" : "Unavailable"}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

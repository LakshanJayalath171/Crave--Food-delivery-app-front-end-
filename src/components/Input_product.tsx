import { Hamburger, ImagePlus } from "lucide-react";
import { useState } from "react";
import useCategoryStore from "../store/categoryStore";
import {toast} from "react-toastify"
import axiosInstance from "../api/axiosInstance";

const Input_product = ({
  setAddMenu,
  refreshProductList,
}: {
  setAddMenu: (addMenu: boolean ) => void;
  refreshProductList: () => void;
}) => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [category_id, setCategory_id] = useState<string>("");
  const [prepTime, setPrepTime] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState<string>("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const categories = useCategoryStore((state) => state.categories);

  const handleSubmitData = async ()=>{
    try{
        const formData = new FormData()
        formData.append("name", name)
        formData.append("description", description)
        formData.append("category", category)
        formData.append("category_id", category_id)
        formData.append("price", price)
        formData.append("image", image)
        
        if(!name.trim()){
            setError("Please enter a dish name")
            return
        }

        if(!category.trim()){
            setError("Please select a category")
            return
        }

        if(!price.trim() || isNaN(Number(price)) || Number(price) <= 0){
            setError("Please enter a price")
            return
        }

        const response = await axiosInstance.post("/product", formData)

        if(response.success === false){
            toast.error(response.message)
            return
        }

        toast.success("Product added successfully")
        refreshProductList();
        setAddMenu(false)
    }
    catch(error){
        toast.error(error.message)
        console.error(error)
    }
  }
  return (
    <div className="px-3 py-2 overflow-auto h-full">
      {/* headers */}
      <div className="flex items-center justify-start gap-3">
        <div className="p-2 rounded-lg bg-primary">
          <Hamburger className="text-on-dark" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-main">Add New Menu Item</h1>
          <p className="text-secondary font-light text-xs">
            Enter culinary specifications, pricing, and ingredients.
          </p>
        </div>
      </div>

      {/* basic info */}
      <div className="mt-3">
        <p className="text-main font-bold">Basic Information</p>

        <div className="mt-2">
          <p className="text-xs font-semibold">Dish Name</p>
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder="Truffle Parmesan Smash Burger"
            type="text"
            className="w-full border-primary rounded-lg px-3 py-1 focus-within:outline-none"
          />
        </div>
      </div>

      {/*category select  */}

      <div className="mt-3">
        <p className="text-xs font-semibold">Menu Category</p>

        <div className="mt-2">
          <select
            className="w-full border-primary rounded-lg px-3 py-1 focus-within:outline-none"
            value={category_id}
            onChange={(e) => {
              const selectedId = e.target.value;

              const selectedCategory = categories.find(
                (cat) => cat._id === selectedId,
              );

              if (selectedCategory) {
                setCategory(selectedCategory.name);
                setCategory_id(selectedCategory._id);
              } else {
                setCategory("");
                setCategory_id("");
              }
            }}
          >
            <option value="">Select a category</option>

            {categories.map((item) => (
              <option value={item._id} key={item._id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* dish description */}
      <div className="mt-3">
        <div className="mt-2">
          <p className="text-xs font-semibold">Description</p>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            placeholder="A delicious burger with truffle and parmesan"
            className="w-full border-primary rounded-lg px-3 py-1 focus-within:outline-none"
            rows={4}
          ></textarea>
        </div>
      </div>
      {/* dish image */}
      <div className="mt-3">
        <p className="text-xs font-semibold">Dish Image</p>

        <label className="mt-2 flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-xl border-primary border-dashed bg-soft-orange/30 text-center transition-colors hover:bg-soft-orange">
          {imagePreview ? (
            <img
              src={imagePreview || ""}
              alt="Dish preview"
              className="h-full w-full rounded-lg object-cover"
            />
          ) : (
            <div>
              <ImagePlus className="text-primary" size={28} strokeWidth={1.8} />
              <span className="mt-2 text-sm font-semibold text-main">
                Upload dish image
              </span>
              <span className="mt-1 text-xs text-secondary">
                PNG, JPG, or WEBP up to 5 MB
              </span>
            </div>
          )}

          <input
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              if (file.size > 5 * 1024 * 1024) {
                alert("Image must be 5 MB or smaller.");
                e.target.value = "";
                return;
              }
              setImagePreview(URL.createObjectURL(file));
              setImage(file);
            }}
            type="file"
            accept="image/png,image/jpeg,image/webp"
            className="sr-only"
          />
        </label>
      </div>

      {/* dish price */}
      <div>
        <div className="mt-3">
          <p className="text-xs font-semibold">Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Rs.12.99"
            type="text"
            className="w-full border-primary rounded-lg px-3 py-1 focus-within:outline-none"
          />
        </div>
      </div>
      <div>
        <p className="text-xs font-light text-red-600">{error}</p>
      </div>
      {/* prep time */}
      <div>
        <div className="mt-3">
          <p className="text-xs font-semibold">Estimated Prep Time</p>
          <input
            onChange={(e) => setPrepTime(e.target.value)}
            placeholder="18 min"
            type="text"
            className="w-full border-primary rounded-lg px-3 py-1 focus-within:outline-none"
          />
        </div>
      </div>

      <div className="flex items-center justify-start mt-10 gap-3">
        <button onClick={() => setAddMenu(false)} className="btn-secondary">
          Cancel
        </button>
        <button onClick={handleSubmitData} className="btn-primary">Save & Publish to Menu</button>
      </div>
    </div>
  );
};

export default Input_product;

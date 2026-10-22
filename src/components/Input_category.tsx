import { ImagePlus, UtensilsCrossed } from "lucide-react"
import { useState } from "react"
import { toast } from "react-toastify"
import axiosInstance from "../api/axiosInstance"

type InputCategoryProps = {
  initialCategory?: CategoryForm
  onSave: (category: CategoryForm) => void
  onCancel: () => void
  setPannel: (value: boolean) => void
}

export type CategoryForm = {
  menu_name: string
  menu_image: string
}

const Input_category = ({ initialCategory, onSave, onCancel ,setPannel}: InputCategoryProps) => {
  const [name, setName] = useState<string>("")
  const [image, setImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string>("")
  const [error, setError] = useState<string>("")
  const [description, setDescription] = useState<string>("")

  const handleSubmit = async(e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try{
      setError("")

      if(!name.trim()){
        toast.error("Category name is required")
        return
      }
      if(!image){
        toast.error("Category image is required")
        return
      }

      const formData = new FormData()

      formData.append("name", name)
      formData.append("description", description)
      formData.append("image", image)

      const response = await axiosInstance.post("/categories", formData)

      toast.success("Category added successfully")

      setName("")
      setImage(null)
      setDescription("")
      setPannel(false)
    }
    catch (error) {
      toast.error(error)    
      setError(error.message)
    }
    
  }

  console.log("image",image)
  return (
    <div className="px-3 py-2">
        {/* headers */}
        <div className="flex items-center justify-start gap-2">
          <div className="p-2 rounded-lg bg-primary">
            <UtensilsCrossed className="text-on-dark"/>
          </div>
          <div>
            <h1 className="text-xl font-bold text-main">{initialCategory ? "Edit Category" : "Add Category"}</h1>
            <p className="text-secondary font-light text-xs">Add and update the categories</p>
          </div>
        </div>

        {/* content */}
        <div>
          {/* category image */}
          <div className="mt-3">
            <p className="text-xs font-semibold">Category Image</p>

            <label className="mt-2 flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-xl border-primary border-dashed bg-soft-orange/30 px-4 py-6 text-center transition-colors hover:bg-soft-orange">
              {imagePreview ? (
                <img src={imagePreview} alt="Category preview" className="h-28 w-full rounded-lg object-cover" />
              ) : (
                <>
                  <ImagePlus className="text-primary" size={28} strokeWidth={1.8} />
                  <span className="mt-2 text-sm font-semibold text-main">Upload category image</span>
                  <span className="mt-1 text-xs text-secondary">PNG, JPG, or WEBP up to 5 MB</span>
                </>
              )}
              <input
                type="file"
                accept="image/png,image/jpeg,image/webp"
                className="sr-only"
                onChange={(event) => {
                  const file = event.target.files?.[0]
                  if (!file) return
                  if (file.size > 5 * 1024 * 1024) {
                    setError("Image must be 5 MB or smaller.")
                    event.target.value = ""
                    return
                  }
                  setError("")
                  setImagePreview(URL.createObjectURL(file))
                  setImage(event.target.files[0])
                }}
              />
            </label>
          </div>

          {/* category name */}
          <div className="mt-3">
            <p className="text-xs font-semibold">Category Name</p>
            <input
              placeholder="Burgers"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
              className="mt-2 w-full border-primary rounded-lg px-3 py-1 focus-within:outline-none"
            />
          </div>

          {/* category description */}
          <div className="mt-3">
            <p className="text-xs font-semibold">Description</p>
            <textarea onChange={(e)=>setDescription(e.target.value)} placeholder="A selection of freshly prepared burgers" className="mt-2 w-full border-primary rounded-lg px-3 py-1 focus-within:outline-none" rows={4}></textarea>
          </div>

          {/* save or cancel buttons */}
          {error && <p className="mt-3 text-xs text-red-600">{error}</p>}
          <div className="flex items-center justify-start mt-10 gap-3">
            <button type="button" onClick={handleSubmit} className="btn-primary">Save Changes</button>
            <button type="button" onClick={()=>setPannel(false)} className="btn-secondary">Cancel</button>
          </div>
        </div>
    </div>
  )
}

export default Input_category
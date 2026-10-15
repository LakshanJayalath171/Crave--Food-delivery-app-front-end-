import { ImagePlus, UtensilsCrossed } from "lucide-react"

const Input_category = () => {
  return (
    <div className="px-3 py-2">
        {/* headers */}
        <div className="flex items-center justify-start gap-2">
          <div className="p-2 rounded-lg bg-primary">
            <UtensilsCrossed className="text-on-dark"/>
          </div>
          <div>
            <h1 className="text-xl font-bold text-main">Category Details & Edit</h1>
            <p className="text-secondary font-light text-xs">Add and update the categories</p>
          </div>
        </div>

        {/* content */}
        <div>
          {/* category image */}
          <div className="mt-3">
            <p className="text-xs font-semibold">Category Image</p>

            <label className="mt-2 flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-xl border-primary border-dashed bg-soft-orange/30 px-4 py-6 text-center transition-colors hover:bg-soft-orange">
              <ImagePlus className="text-primary" size={28} strokeWidth={1.8} />
              <span className="mt-2 text-sm font-semibold text-main">Upload category image</span>
              <span className="mt-1 text-xs text-secondary">PNG, JPG, or WEBP up to 5 MB</span>
              <input type="file" accept="image/png,image/jpeg,image/webp" className="sr-only" />
            </label>
          </div>

          {/* category name */}
          <div className="mt-3">
            <p className="text-xs font-semibold">Category Name</p>
            <input placeholder="Burgers" type="text" className="mt-2 w-full border-primary rounded-lg px-3 py-1 focus-within:outline-none" />
          </div>

          {/* category description */}
          <div className="mt-3">
            <p className="text-xs font-semibold">Description</p>
            <textarea placeholder="A selection of freshly prepared burgers" className="mt-2 w-full border-primary rounded-lg px-3 py-1 focus-within:outline-none" rows={4}></textarea>
          </div>

          {/* save or cancel buttons */}
          <div className="flex items-center justify-start mt-10 gap-3">
            <button className="btn-primary">Save Changes</button>
            <button className="btn-secondary">Cancel</button>
          </div>
        </div>
    </div>
  )
}

export default Input_category
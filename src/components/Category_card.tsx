import { Edit3, Trash2 } from "lucide-react"

type CategoryCardProps = {
  category: {
    menu_name: string
    menu_image: string
  }
  productCount: number
  isAvailable: boolean
  onEdit: () => void
  onDelete: () => void
  onToggleAvailability: () => void
}

const Category_card = ({
  category,
  productCount,
  isAvailable,
  onEdit,
  onDelete,
  onToggleAvailability,
}: CategoryCardProps) => {
  return (
    <article className="overflow-hidden rounded-lg bg-white shadow-sm">
      <div className="relative h-28 overflow-hidden bg-orange-50">
        <img src={category.menu_image} alt={category.menu_name} className="h-full w-full object-cover" />
        <span className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-xs font-semibold ${isAvailable ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>
          {isAvailable ? "Available" : "Unavailable"}
        </span>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-main">{category.menu_name}</h2>
            <p className="mt-1 text-sm text-secondary">{productCount} {productCount === 1 ? "product" : "products"} in this category</p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={isAvailable}
            aria-label={`${isAvailable ? "Disable" : "Enable"} ${category.menu_name}`}
            onClick={onToggleAvailability}
            className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${isAvailable ? "bg-green-500" : "bg-gray-300"}`}
          >
            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isAvailable ? "translate-x-6" : "translate-x-1"}`} />
          </button>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-orange-100 pt-3">
          <span className={`text-xs font-medium ${isAvailable ? "text-success" : "text-muted"}`}>
            {isAvailable ? "Visible in storefront" : "Hidden from storefront"}
          </span>
          <div className="flex items-center gap-1">
            <button type="button" onClick={onEdit} aria-label={`Edit ${category.menu_name}`} title={`Edit ${category.menu_name}`} className="rounded-md p-2 text-secondary transition-colors hover:bg-orange-100 hover:text-orange-600">
              <Edit3 size={16} />
            </button>
            <button type="button" onClick={onDelete} aria-label={`Delete ${category.menu_name}`} title={`Delete ${category.menu_name}`} className="rounded-md p-2 text-secondary transition-colors hover:bg-red-100 hover:text-red-600">
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Category_card
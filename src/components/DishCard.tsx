import { Clock, Minus, Plus, Star } from "lucide-react";
import { useCartStore } from "../store/cartStore";
import { useAuthStore } from "../store/authStore";
import { toast } from "react-toastify";
interface dishCardProps {
  name: string;
  image: string;
  price: string;
  description: string;
  id: string;
}

const DishCard = ({ name, image, price, description, id }: dishCardProps) => {
  const {
    items,
    increaseQuantity,
    decreaseQuantity,
    addToCart,
  } = useCartStore();

  const { isAuthenticated , user } = useAuthStore();

  const addOrPlus = (id: string) => {

    if(!isAuthenticated || !user) {
      toast.error("Please login to add items to the cart");
      return;
    }
    const existingItem = items.find((item) => item.product_id === id);

    if (existingItem) {
      // Product already exists: increase its quantity
      increaseQuantity(id);
    } else {
      // New product: add it to the cart
      const newItem = {
        product_id: id,
        product_name: name,
        product_image: image,
        product_price: parseFloat(price.replace("Rs. ", "")),
        product_quantity: 1,
      };

      addToCart(newItem);
    }
  };

  

  return (
    <div className="rounded-2xl card-hover">
      {/* image section */}
      <div className="w-full h-48 rounded-t-2xl overflow-hidden flex items-center justify-center px-4 py-3">
        <div>
          <img
            src={image}
            alt="Dish"
            className="w-full h-36 object-cover rounded-lg"
          />
        </div>
      </div>
      {/* details section */}
      <div className="px-2 py-3">
        <h3 className="text-lg font-bold text-primary">{name}</h3>
        <p className="text-xs font-light text-main">{description}</p>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center justify-center gap-1">
            <Star size={15} className="text-amber-500" />
            <p className="text-rating font-bold">4.8</p>
          </div>

          <div className="flex items-center justify-center gap-1">
            <Clock size={15} className="text-main" />
            <p className="text-main font-bold">20–30 min</p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-2">
          <h3 className="text-main font-medium text-lg">{price}</h3>
          <div className="flex items-center justify-center gap-2">
            {items.find((item) => item.product_id == id) && (
              <div
                onClick={() => decreaseQuantity(id)}
                className="p-2 rounded-full bg-green-500 cursor-pointer"
              >
                <Minus size={15} />
              </div>
            )}

            <div
              onClick={() => addOrPlus(id)}
              className="p-2 rounded-full bg-primary cursor-pointer"
            >
              <Plus size={15} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishCard;

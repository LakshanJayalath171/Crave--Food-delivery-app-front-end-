import {
  Bell,
  MapPin,
  Minus,
  Plus,
  Search,
  ShoppingCart,
  Trash2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useAuthStore } from "../store/authStore";
import { useCartStore } from "../store/cartStore";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuthStore();
  const { items, increaseQuantity, decreaseQuantity, removeFromCart } =useCartStore();

  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalItems = items.reduce(
    (total, item) => total + item.product_quantity,
    0,
  );
  const totalPrice = items.reduce(
    (total, item) => total + item.product_price * item.product_quantity,
    0,
  );

  const goToCheckout = () => {
    setIsCartOpen(false);
    navigate("/checkout");
  };

  const toDatabase = async () => {
    if(items.length <= 0){
        return
    }
    
    if(!user || !isAuthenticated){
        alert("Please login to add items to your cart.");
        return;
    }

    try{
        const formData = {
            user_id: user._id,
            items: items.map((item) => ({
                product_id: item.product_id,
                product_name: item.product_name,
                product_image: item.product_image,
                product_price: item.product_price,
                product_quantity: item.product_quantity,
            })),
            total: totalPrice,
        }

        const response = await axiosInstance.post("cart/add-cart", formData);

        if(response.data.success){
            console.log("Cart updated successfully in the database.");
        }
    }
    catch(error){
        console.log("Error updating cart in the database:", error);
    }
  }

  useEffect(() => {
    toDatabase();
  },[items]);

  return (
    <nav className="relative flex items-center justify-between py-2 px-10">
      {/* left */}
      <div>
        <img src="/logo.svg" className="w-24 h-10" />
      </div>

      {/* middle */}
      <div className="flex items-center justify-center gap-3">
        <a className="text-secondary  font-bold" href="/">
          Home
        </a>
        <a className="text-secondary  font-bold" href="/explore">
          Explore
        </a>
        <a className="text-secondary  font-bold" href="/restaurant">
          Restaurant
        </a>
        <a className="text-secondary  font-bold" href="/about-us">
          About Us
        </a>
      </div>

      {/* right */}

      <div className="flex items-center justify-center gap-4">
        <div className="relative">
          <button
            type="button"
            aria-label="Open cart"
            aria-expanded={isCartOpen}
            onClick={() => setIsCartOpen((isOpen) => !isOpen)}
            className="relative rounded-full p-2 text-primary transition-colors hover:bg-orange-100 cursor-pointer"
          >
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-deep-orange px-1 text-[10px] font-bold text-white">
                {totalItems}
              </span>
            )}
          </button>

          {/* cart section */}
          {isCartOpen && (
            <div className="absolute right-0 top-12 z-50 w-80 rounded-2xl border border-orange-100 bg-orange-50 p-4 shadow-xl">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-main text-lg font-bold">Your cart</h2>
                  <p className="text-secondary text-xs">
                    {totalItems} {totalItems === 1 ? "item" : "items"}
                  </p>
                </div>
                <ShoppingCart className="text-primary" size={20} />
              </div>

              {items.length === 0 ? (
                <div className="rounded-xl bg-white px-4 py-8 text-center">
                  <p className="text-main font-semibold">Your cart is empty</p>
                  <p className="text-secondary mt-1 text-xs">
                    Add something delicious to get started.
                  </p>
                </div>
              ) : (
                <>
                  <div className="max-h-64 space-y-3 overflow-y-auto pr-1">
                    {items.map((item) => (
                      <div
                        key={item.product_id}
                        className="flex gap-3 rounded-xl bg-white p-2"
                      >
                        <div className="px-2 py-1 bg-orange-100">
                            <img
                            src={item.product_image}
                            alt={item.product_name}
                            className="h-8 w-8 rounded-lg object-cover"
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-main truncate text-sm font-semibold">
                              {item.product_name}
                            </p>
                            <button
                              type="button"
                              aria-label={`Remove ${item.product_name}`}
                              onClick={() => removeFromCart(item.product_id)}
                              className="text-secondary rounded p-1 hover:bg-red-50 hover:text-red-500"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                          <p className="text-primary text-xs font-semibold">
                            Rs. {item.product_price.toLocaleString()}
                          </p>
                          <div className="mt-1 flex items-center gap-2">
                            <button
                              type="button"
                              aria-label={`Decrease ${item.product_name} quantity`}
                              onClick={() => decreaseQuantity(item.product_id)}
                              className="text-primary rounded-full bg-orange-100 p-1 hover:bg-orange-200"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="text-main w-4 text-center text-xs font-bold">
                              {item.product_quantity}
                            </span>
                            <button
                              type="button"
                              aria-label={`Increase ${item.product_name} quantity`}
                              onClick={() => increaseQuantity(item.product_id)}
                              className="text-primary rounded-full bg-orange-100 p-1 hover:bg-orange-200"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 border-t border-orange-200 pt-3">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-secondary text-sm">Subtotal</span>
                      <span className="text-main font-bold">
                        Rs. {totalPrice.toLocaleString()}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={goToCheckout}
                      className="btn-primary w-full"
                    >
                      View cart and checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
        <div className="flex items-center justify-center gap-2">
          <MapPin size={15} />
          <p className="text-main text-xs font-light">Colombo, Sri Lanka</p>
        </div>

        <div>
          <Search size={15} />
        </div>

        <div>
          <Bell size={15} />
        </div>

        <div>
          <button onClick={() => navigate("/login")} className="btn-primary">
            Get Started
          </button>
        </div>

        {isAuthenticated && (
          <div
            onClick={() => logout()}
            className=" flex items-center justify-center bg-deep-orange cursor-pointer w-8 h-8 rounded-full p-4"
          >
            <div className="rounded-full flex items-center justify-center">
              <p className="text-white text-xs font-bold">
                {user?.name?.charAt(0) || "c"}
              </p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

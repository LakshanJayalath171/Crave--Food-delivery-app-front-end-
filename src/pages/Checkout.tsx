import {
  ArrowRight,
  Bike,
  BuildingComplex,
  CircleCheck,
  CreditCard,
  HandCoins,
  Home,
  LocateFixed,
  LockKeyhole,
  Minus,
  Pencil,
  Phone,
  Plus,
  Tag,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuthStore } from "../store/authStore";
import { useCartStore } from "../store/cartStore";
import { toast } from "react-toastify";
import axiosInstance from "../api/axiosInstance";
import { useState } from "react";

const Checkout = () => {
  const { user, isAuthenticated } = useAuthStore();
  const [selectedAddress, setSelectedAddress] = useState(
    user?.addresses?.[0] ?? null,
  );

  const {
    items,
    removeFromCart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCartStore();

  console.log("Selected Address:", selectedAddress);

  const totalPrice = useCartStore((state) => state.getTotalPrice());

  const placeOrder = async () => {
    if (!isAuthenticated) {
      toast.error("Please log in to place an order.");
      return;
    }

    if (!user) {
      toast.error("Please provide your details to place an order.");
      return;
    }

    if (items.length === 0) {
      toast.error(
        "Your cart is empty. Please add items to your cart before placing an order.",
      );
      return;
    }

    try {
      const orderDetails = {
        user_id: user._id,
        user_name: `${user.first_name} ${user.last_name}`,
        phone_number: user.phone_number,

        items: items.map((item) => ({
          product_id: item.product_id,
          product_name: item.product_name,
          product_price: item.product_price,
          image_url: item.product_image,
          quantity: item.product_quantity,
        })),

        address: [
          {
            lane: selectedAddress.lane,
            street: selectedAddress.street,
            city: selectedAddress.city,
            postal_code: String(selectedAddress.postal_code),
            is_default: selectedAddress.is_default,
          },
        ],

        total_price: totalPrice,
      };

      const response = await axiosInstance.post("/orders", orderDetails);

      if (response.status === 201) {
        toast.success("Order placed successfully!");
        clearCart(); // Clear the cart after successful order placement
      }
    } catch (error) {
      toast.error(
        error.message || "An error occurred while placing the order.",
      );
    }
  };

  return (
    <div>
      {/* Checkout page content */}
      <Navbar />
      <div className="px-10 mt-5">
        {/* heading */}
        <div>
          <h1 className="text-3xl font-bold text-main">Complete Your Order</h1>
          <p className="text-sm text-secondary font-light">
            Just a few details and your favorite food will be on its way.
          </p>
        </div>

        <div className="flex items-start justify-start gap-4">
          {/* main content */}
          <div className="w-2/3">
            {/* address section */}
            <div>
              <div className="flex items-center justify-between mt-10">
                <div>
                  <h1 className="text-main font-bold text-lg flex items-center justify-start gap-2">
                    <LocateFixed className="text-primary" size={12} />
                    Delivery Address
                  </h1>
                  <p className="text-sm font-light text-secondary">
                    Where should we deliver your favorite warm feasts?
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2 cursor-pointer">
                  <Plus className="text-primary" size={12} />
                  <p className="text-primary font-bold">Add New</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {/* left */}

                {items.map}
                <div className="mt-3 border border-orange-500 cursor-pointer rounded-lg p-3">
                  <div className="flex items-center justify-between ">
                    <div className="flex items-center justify-start gap-2">
                      <Home className="text-primary" size={15} />
                      <div className="text-primary font-light text-xs bg-orange-500/40 px-3 py-1 rounded-full">
                        Home
                      </div>
                      <h1 className="text-main font-bold ">Lakshan</h1>
                    </div>
                    <div>
                      <CircleCheck className="text-primary" size={15} />
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-light text-secondary">
                      Example Business Center, Floor 3, Colombo 03
                    </p>
                    <p className="text-sm font-light text-secondary">
                      Colombo 03, Sri Lanka
                    </p>
                    <p className="flex items-center justify-start gap-2">
                      <Phone size={14} />
                      +94 77 123 4567
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-light text-primary">
                        Selected for this delivery
                      </p>
                    </div>
                  </div>
                </div>
                {/* right */}
                <div className="mt-3 cursor-pointer">
                  <div className="flex items-center justify-between ">
                    <div className="flex items-center justify-start gap-2">
                      <BuildingComplex className="text-primary" size={15} />
                      <div className="text-primary font-light text-xs bg-orange-500/40 px-3 py-1 rounded-full">
                        Home
                      </div>
                      <h1 className="text-main font-bold ">
                        {user?.first_name}
                      </h1>
                    </div>
                    <div></div>
                  </div>

                  <div>
                    <p className="text-sm font-light text-secondary">{}</p>
                    <p className="text-sm font-light text-secondary">
                      Western Province, Sri Lanka
                    </p>
                    <p className="flex items-center justify-start gap-2">
                      <Phone size={14} />
                      +94 77 123 4567
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-light text-primary">
                        Selected for this delivery
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Delivery Instructions */}
            <div className="mt-4">
              <div>
                <h1 className="text-lg font-bold text-main">
                  Delivery Instructions
                </h1>
              </div>

              <div className="flex items-center justify-start gap-2 mt-1">
                <div className="bg-orange-500 rounded-full px-3 py-1 text-sm font-semibold text-on-dark cursor-pointer">
                  Leave at Door
                </div>

                <div className="border border-orange-500 rounded-full px-3 py-1 text-sm font-semibold text-main cursor-pointer">
                  Call on Arrival
                </div>

                <div className="border border-orange-500 text-main rounded-full px-3 py-1 text-sm font-semibold  cursor-pointer">
                  Hand It to Me
                </div>
              </div>

              <div className="mt-3 w-full h-full">
                <textarea
                  placeholder="Apartment number,gate code, landmark or special delivery instruction"
                  className="w-full border border-orange-400 focus-within:outline-0 px-4 py-2"
                />
              </div>
            </div>
            {/* payment method */}
            <div>
              <div>
                <h1 className="text-main font-bold text-lg flex items-center justify-start gap-2">
                  <CreditCard className="text-primary" size={12} />
                  Payment Method
                </h1>
                <p className="text-sm font-light text-secondary">
                  Choose how you would like to pay.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* credit card */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-start gap-2 mt-2">
                    <input
                      type="radio"
                      name="payment"
                      id="cash"
                      className="accent-amber-600"
                    />
                    <div>
                      <h2 className="text-md font-semibold text-main">
                        Credit / Debit Card
                      </h2>
                      <p className="text-xs font-light text-secondary">
                        Visa, Mastercard, Amex
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-start gap-2 mt-2">
                    <CreditCard className="text-primary" size={20} />
                  </div>
                </div>

                {/* cod */}

                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-start gap-2 mt-2">
                    <input
                      type="radio"
                      name="payment"
                      id="cash"
                      className="accent-amber-600"
                    />
                    <div>
                      <h2 className="text-md font-semibold text-main">
                        Cash on Delivery
                      </h2>
                      <p className="text-xs font-light text-secondary">
                        Pay when your order arrives
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-start gap-2 mt-2">
                    <HandCoins className="text-primary" size={20} />
                  </div>
                </div>
              </div>
            </div>
            {/* card details */}
            <div className="mt-4">
              <div>
                <h1 className="text-main font-bold">Card Details</h1>
              </div>
              <div className="mt-3 w-full h-full">
                <p className="text-sm font-light text-main">Card Number</p>
                <input
                  type="text"
                  placeholder="**** **** ****"
                  className="w-full border border-orange-400 focus-within:outline-0 px-4 py-2"
                />
              </div>
              <div className="grid grid-cols-2 gap-3 w-full h-full mt-3">
                <div className="">
                  <p className="text-sm font-light text-main">
                    Expiration Date
                  </p>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full border border-orange-400 focus-within:outline-0 px-4 py-2"
                  />
                </div>
                <div className="">
                  <p className="text-sm font-light text-main">
                    Security Code (CVV)
                  </p>
                  <input
                    type="password"
                    placeholder="....."
                    className="w-full border border-orange-400 focus-within:outline-0 px-4 py-2"
                  />
                </div>
              </div>

              <div>
                <div className="mt-3 w-full h-full">
                  <p className="text-sm font-light text-main">
                    Cardholder Name
                  </p>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full border border-orange-400 focus-within:outline-0 px-4 py-2"
                  />
                </div>
              </div>

              <div className="mt-3 w-full h-full px-2 py-1">
                <div className="flex items-center justify-start gap-2 mt-3">
                  <input type="checkbox" />
                  <p className="text-sm font-light text-main">
                    Save card for future payments securely
                  </p>
                </div>
                <div className="bg-orange-500/40 px-4 py-2 rounded-lg flex items-center justify-start">
                  <LockKeyhole className="text-primary" size={12} />
                  <p className="text-primary font-light text-xs">
                    Your payment information is handled securely with 256-bit
                    encryption.
                  </p>
                </div>
              </div>
            </div>

            {/* order review */}
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-lg font-semibold text-main">
                    Review Your Order (3 items)
                  </h1>
                  <p className="text-xs font-light text-secondary">
                    Delivered fresh from partner kitchens
                  </p>
                </div>
                <div className="flex items-center justify-start gap-2 cursor-pointer">
                  <Pencil className="text-primary" size={12} />
                  <p>Edit</p>
                </div>
              </div>

              <div>
                {/* reusable card */}
                {/* 01 */}

                {items.map((items, index) => (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start gap-3 mt-3">
                      <div>
                        <img
                          src={items?.product_image}
                          alt="Product Image"
                          className="w-20 h-16 object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <h1 className="font-semibold text-main">
                          {items?.product_name}
                        </h1>
                        <p className="text-xs font-light text-secondary">
                          Customization: Extra sauce, toasted bun
                        </p>
                        <p className="text-xs font-light text-main">
                          Rs. {items?.product_price} each
                        </p>
                      </div>
                    </div>
                    <div>
                      <h1 className="font-bold text-main">
                        Rs. {items?.product_price * items?.product_quantity}
                      </h1>
                      <div className="flex items-center justify-center gap-3">
                        <Minus
                          onClick={() => decreaseQuantity(items.product_id)}
                          className="text-main cursor-pointer"
                          size={12}
                        />
                        <p>{items?.product_quantity}</p>
                        <Plus
                          onClick={() => increaseQuantity(items.product_id)}
                          className="text-main cursor-pointer"
                          size={12}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* sidebar */}
          <div className="w-1/3 px-4 py-1">
            <div>
              <div className="flex items-center justify-between">
                <h1 className="font-bold text-main">Order Summary</h1>
                <div className="text-sm font-light text-secondary">3 Items</div>
              </div>

              <div className="mt-2">
                {/* reusable card */}
                {items.map((items, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between mt-2"
                  >
                    <p className="text-main font-light">
                      {items?.product_name}
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <div className="px-3 py-1 rounded-2xl bg-orange-400/80 text-xs font-light">
                        x{items?.product_quantity}
                      </div>
                      <p className="text-main font-bold">
                        Rs. {items?.product_price * items?.product_quantity}
                      </p>
                    </div>
                  </div>
                ))}

                {/* <div className="flex items-center justify-between ">
                  <p className="text-main font-light">Delivery Fee</p>
                  <p className="text-main font-bold">Rs. 500</p>
                </div>

                <div className="flex items-center justify-between ">
                  <p className="text-main font-light">Service Fee</p>
                  <p className="text-main font-bold">Rs. 150</p>
                </div>

                <div className="flex items-center justify-between ">
                  <div className="flex items-center justify-start gap-2">
                    <Tag className="text-error" size={20}/>
                    <p className="text-error font-light">Promo (CRAVEFIRST)</p>

                  </div>
                  <p className="text-error font-bold">- Rs. 300</p>
                </div> */}
              </div>

              {/* sub total */}
              <div className="flex items-center justify-center px-4 py-3">
                <div className="flex items-center justify-center gap-6">
                  <div>
                    <h1 className="text-main font-semibold">Total Amount</h1>
                    <p className="text-xs font-light text-secondary">
                      Includes all taxes and duties
                    </p>
                  </div>
                  <div>
                    <h1 className="text-main font-bold text-2xl">
                      {totalPrice}
                    </h1>
                  </div>
                </div>
              </div>

              {/* delivery estimate */}
              <div>
                <div className="flex items-center justify-center gap-3 bg-orange-500/30 rounded-2xl">
                  <Bike className="text-primary" size={20} />
                  <p className="text-xs font-light text-main">
                    Estimated delivery:{" "}
                    <span className="text-primary font-semibold">
                      25–40 mins
                    </span>{" "}
                    to Nugegoda
                  </p>
                </div>
              </div>

              {/* place order */}
              <div className="mt-3 w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div>
                    <button onClick={placeOrder} className="btn-primary">
                      Place Order. Rs. 5,100 <ArrowRight />
                    </button>
                  </div>
                  <p className="text-primary font-light text-xs mt-2">
                    Review your delivery details before confirming · 100%
                    Satisfaction Guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Checkout;

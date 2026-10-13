import { ArrowRight, Bike, BuildingComplex, CircleCheck, CreditCard, HandCoins, Home, LocateFixed, LockKeyhole, Minus, Pencil, Phone, Plus, Tag } from "lucide-react"
import Navbar from "../components/Navbar"
import food_1 from "../assets/frontend_assets/food_1.png"
import food_2 from "../assets/frontend_assets/food_2.png"
import food_3 from "../assets/frontend_assets/food_3.png"
import Footer from "../components/Footer"

const Checkout = () => {
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
                      <h1 className="text-main font-bold ">Lakshan</h1>
                    </div>
                    <div></div>
                  </div>

                  <div>
                    <p className="text-sm font-light text-secondary">
                      123 Example Road, Wijerama, Nugegoda,
                    </p>
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
                  <p className="text-sm font-light text-main">Cardholder Name</p>
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
                  <p className="text-sm font-light text-main">Save card for future payments securely</p>
                </div>
                <div className="bg-orange-500/40 px-4 py-2 rounded-lg flex items-center justify-start">
                  <LockKeyhole className="text-primary" size={12}/>
                  <p className="text-primary font-light text-xs">Your payment information is handled securely with 256-bit encryption.</p>
                </div>
              </div>
            </div>

            {/* order review */}
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-lg font-semibold text-main">Review Your Order (3 items)</h1>
                  <p className="text-xs font-light text-secondary">Delivered fresh from partner kitchens</p>
                </div>
                <div className="flex items-center justify-start gap-2 cursor-pointer">
                  <Pencil className="text-primary" size={12}/>
                  <p>Edit</p>
                </div>
              </div>

              <div>

                {/* reusable card */}
                {/* 01 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-start gap-3 mt-3">
                    <div>
                      <img src={food_1} alt="Product Image" className="w-20 h-16 object-cover rounded-lg" />
                    </div>
                    <div>
                      <h1 className="font-semibold text-main">Classic Beef Burger</h1>
                      <p className="text-xs font-light text-secondary">Customization: Extra sauce, toasted bun</p>
                      <p className="text-xs font-light text-main">Rs. 1,250 each</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="font-bold text-main">Rs. 2,500</h1>
                    <div className="flex items-center justify-center gap-3">
                      <Minus className="text-main cursor-pointer" size={12}/>
                      <p>5</p>
                      <Plus className="text-main cursor-pointer" size={12}/>
                    </div>
                  </div>
                </div>

                {/* 02 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-start gap-3 mt-3">
                    <div>
                      <img src={food_2} alt="Product Image" className="w-20 h-16 object-cover rounded-lg" />
                    </div>
                    <div>
                      <h1 className="font-semibold text-main">Margherita Pizza</h1>
                      <p className="text-xs font-light text-secondary">Customization: Fresh basil, thin crust</p>
                      <p className="text-xs font-light text-main">Rs. 1,850 each</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="font-bold text-main">Rs. 1,850</h1>
                    <div className="flex items-center justify-center gap-3">
                      <Minus className="text-main cursor-pointer" size={12}/>
                      <p>5</p>
                      <Plus className="text-main cursor-pointer" size={12}/>
                    </div>
                  </div>
                </div>
                
                {/* 03 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-start gap-3 mt-3">
                    <div>
                      <img src={food_3} alt="Product Image" className="w-20 h-16 object-cover rounded-lg" />
                    </div>
                    <div>
                      <h1 className="font-semibold text-main">Caesar Salad</h1>
                      <p className="text-xs font-light text-secondary">Customization: Extra croutons, parmesan</p>
                      <p className="text-xs font-light text-main">Rs. 1,250 each</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="font-bold text-main flex items-center justify-center gap-2">Rs. 700 <span className="line-through text-xs font-light text-secondary">Rs. 1,300</span></h1>
                    <div className="flex items-center justify-center gap-3">
                      <Minus className="text-main cursor-pointer" size={12}/>
                      <p>5</p>
                      <Plus className="text-main cursor-pointer" size={12}/>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          {/* sidebar */}
          <div className="w-1/3 px-4 py-1">
            <div >
              <div className="flex items-center justify-between">
                <h1 className="font-bold text-main">Order Summary</h1>
                <div className="text-sm font-light text-secondary">3 Items</div>
              </div>

              <div className="mt-2">
                {/* reusable card */}
                <div className="flex items-center justify-between ">
                  <p className="text-main font-light">Items Subtotal</p>
                  <p className="text-main font-bold">Rs. 5,050</p>
                </div>

                <div className="flex items-center justify-between ">
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
                </div>
                
              </div>

              {/* sub total */}
              <div className="flex items-center justify-center px-4 py-3">
                <div className="flex items-center justify-center gap-6">
                  <div>
                    <h1 className="text-main font-semibold">Total Amount</h1>
                    <p className="text-xs font-light text-secondary">Includes all taxes and duties</p>
                  </div>
                  <div>
                    <h1 className="text-main font-bold text-2xl">Rs. 5,100</h1>
                  </div>
                </div>
              </div>

              {/* delivery estimate */}
              <div>
                <div className="flex items-center justify-center gap-3 bg-orange-500/30 rounded-2xl">
                  <Bike className="text-primary" size={20}/>
                  <p className="text-xs font-light text-main">Estimated delivery: <span className="text-primary font-semibold">25–40 mins</span> to Nugegoda</p>
                </div>
              </div>

              {/* place order */}
              <div className="mt-3 w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div>
                    <button className="btn-primary">Place Order. Rs. 5,100 <ArrowRight/></button>
                  </div>
                  <p className="text-primary font-light text-xs mt-2">Review your delivery details before confirming · 100% Satisfaction Guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Footer/>
      </div>
    </div>
  );
}

export default Checkout
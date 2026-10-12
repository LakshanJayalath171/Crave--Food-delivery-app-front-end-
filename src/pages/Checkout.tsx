import { BuildingComplex, CircleCheck, CreditCard, HandCoins, Home, LocateFixed, Phone, Plus } from "lucide-react"
import Navbar from "../components/Navbar"

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
                <div className="flex items-center justify-center gap-2">
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
                    <input type="radio" name="payment" id="cash" className="accent-amber-600"/>
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
                    <input type="radio" name="payment" id="cash" className="accent-amber-600"/>
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
          </div>
          {/* sidebar */}
          <div className="w-1/3"></div>
        </div>
      </div>
    </div>
  );
}

export default Checkout
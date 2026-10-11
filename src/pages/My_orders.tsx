import BlinkingDot from "../components/Dot";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
import { PaperBag , CircleCheck, Bike, Clock, Hamburger, LocationEdit, Pizza, RotateCcw} from 'lucide-react';
const My_orders = () => {
  return (
    <div>
      {/* navigation bar */}
      <Navbar />

      {/* my orders content */}

      <div className="px-10 mt-10 mb-10">
        {/* heading */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center justify-start">
              <div className="text-deep-orange text-xs">⬤ Account Activity</div>
            </div>
            <h1 className="text-4xl font-bold text-main">
              My <span className="text-primary">Orders</span>
            </h1>
            <p className="text-secondary font-light text-sm">
              Track your live deliveries, monitor prep status, and seamlessly
              reorder your all-time favorite meals.
            </p>
          </div>

          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center justify-center gap-3">
              <div>
                <PaperBag size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-xs font-light text-main">Total History</p>
                <h1 className="text-lg font-semibold text-main">14 Orders</h1>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div>
                <Bike size={20} className="text-blue-500" />
              </div>
              <div>
                <p className="text-xs font-light text-main">Active Delivery</p>
                <h1 className="text-lg font-semibold text-main">
                  1 In Progress
                </h1>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div>
                <CircleCheck size={20} className="text-green-500" />
              </div>
              <div>
                <p className="text-xs font-light text-main">Completed</p>
                <h1 className="text-lg font-semibold text-main">
                  12 Delivered
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* filters */}
        <div>
          <div className="flex items-center  justify-start gap-2 mt-2">
            <div className="bg-orange-500/40 px-4 py-1 text-xs font-light rounded-lg cursor-pointer">
              All Orders 14
            </div>

            <div className="bg-orange-500/40 px-4 py-1 text-xs font-light rounded-lg cursor-pointer">
              Active
            </div>

            <div className="bg-orange-500/40 px-4 py-1 text-xs font-light rounded-lg cursor-pointer">
              Completed
            </div>

            <div className="bg-orange-500/40 px-4 py-1 text-xs font-light rounded-lg cursor-pointer">
              Cancelled
            </div>
          </div>
        </div>

        <div className="mt-10">
          {/* upper section */}
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center justify-start gap-4">
              <div>
                <PaperBag size={25} className="text-primary" />
              </div>
              <div>
                <h1 className="text-md font-bold text-main">
                  Burger House
                  <span className="text-primary font-light text-xs mx-3">
                    Fast Food & Gourmet
                  </span>
                  <span className="text-gray-500 text-xs">
                    • #CRV-20261010-001
                  </span>
                </h1>
                <p className="text-secondary font-light text-xs flex items-center justify-start gap-2">
                  <Clock size={12} />
                  Ordered Today at 12:35 PM
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <div className="flex items-center justify-center gap-4">
                <div>
                  <BlinkingDot color="bg-green-500" size="w-2 h-2" />
                </div>
                <div>
                  <h1 className="text-primary font-semibold text-md">
                    Preparing Your Order
                  </h1>
                  <p className="text-xs font-light text-secondary">
                    Kitchen actively crafting your meal
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock size={15} className="text-primary" />
                  <div>
                    <h2 className="text-secondary font-semibold">
                      Estimated Arrival
                    </h2>
                    <p className="text-xs font-medium text-main flex items-center justify-center gap-2">
                      1:10 PM
                      <span className="text-secondary font-light">
                        (25–35 mins)
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* detailed down section */}
          <div className="px-4 py-6 grid grid-cols-2 gap-4">
            {/* left */}
            <div>
              <div>
                <div className="flex items-center justify-start gap-2">
                  <Hamburger className="text-primary" size={20} />
                  <h1 className="text-main font-medium ">Order Contents</h1>
                </div>
              </div>

              {/* resusable card */}
              <div className="flex items-center justify-between px-4 py-1 mt-2">
                <div>
                  <h1 className="text-main font-medium text-md">
                    Classic Beef Burger × 2
                  </h1>
                  <p className="text-xs font-light ">
                    Customization: Extra cheddar, smoked burger sauce, toasted
                    brioche bun
                  </p>
                </div>
                <div>
                  <h1 className="text-main font-bold">Rs. 2,100</h1>
                </div>
              </div>

              <div className="flex items-center justify-between px-4 py-1 mt-2">
                <div>
                  <h1 className="text-main font-medium text-md">
                    Crispy French Fries × 1
                  </h1>
                  <p className="text-xs font-light ">
                    Customization: Spiced Peri-peri seasoning
                  </p>
                </div>
                <div>
                  <h1 className="text-main font-bold">Rs. 650</h1>
                </div>
              </div>
            </div>
            {/* right */}
            <div>
              <div className="flex items-center justify-start gap-2">
                <LocationEdit className="text-primary" size={20} />
                <h1 className="text-main font-medium ">Delivering To</h1>
              </div>

              <div className="mt-2">
                <h1 className="text-main font-medium ">Home Apartment</h1>
                <p className="text-secondary font-light text-xs">
                  123 Example Road, Wijerama, Nugegoda (Gate Code #402)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between px-4 py-2 mt-10">
            <div>
              <h1 className="text-2xl font-bold text-main">Your Order History</h1>
            <p className="text-secondary font-light  text-xs">
              Everything you've enjoyed, with instant reordering and archived
              receipts.
            </p>
            </div>
            <p className="text-secondary font-light text-xs">Showing 3 of 14 records</p>
          </div>

          {/* resusable order card */}
          <div>
            <div className="px-3 py-1 flex items-center justify-between">
              {/* left */}
              <div className="flex items-center justify-start">
                <div className="flex items-center justify-center p-3">
                  <Pizza size={30} className="text-primary" />
                </div>

                <div>
                  <div className="flex items-center justify-start gap-2">
                    <h1 className="text-main font-bold">Napoli Kitchen</h1>
                    <div className="bg-green-500/40 text-xs px-4 py-1 rounded-full flex items-center justify-center gap-3 text-green-500"><CircleCheck size={15}/>Delivered</div>
                  </div>

                  <p className="text-secondary font-light text-xs">#CRV-10482 • Delivered on Oct 9, 2026 at 8:15 PM</p>
                  <p className="text-secondary font-light text-xs">Margherita Pizza (Thin Crust) × 1, Cheesy Garlic Bread × 1</p>
                  <p className="text-secondary font-light text-xs"><span className="font-bold text-main">Rs. 2,250</span> • Paid via Cash on Delivery</p>
                </div>
              </div>
              {/* right */}

              <div className="flex items-center justify-center gap-3">
                <button className="flex items-center justify-center gap-2 font-bold btn-primary"><RotateCcw size={15}/>Reorder</button>
                <button className="btn-ghost ">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default My_orders
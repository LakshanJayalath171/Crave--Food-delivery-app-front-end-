import Navbar from "../components/Navbar"
import { PaperBag , CircleCheck, Bike} from 'lucide-react';
const My_orders = () => {
  return (
    <div>
      {/* navigation bar */}
      <Navbar />

      {/* my orders content */}

      <div className="px-10 mt-10">
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
                    <h1 className="text-lg font-semibold text-main">1 In Progress</h1>
                </div>
            </div>

            <div className="flex items-center justify-center gap-3">
                <div>
                    <CircleCheck size={20} className="text-green-500" /> 
                </div>
                <div>
                    <p className="text-xs font-light text-main">Completed</p>
                    <h1 className="text-lg font-semibold text-main">12 Delivered</h1>
                </div>
            </div>

            
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
}

export default My_orders
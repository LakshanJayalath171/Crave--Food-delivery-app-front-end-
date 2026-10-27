import { Clock, Hamburger, PaperBag, Receipt, Star } from "lucide-react";
import { food_list } from "../assets/frontend_assets/assets";
import BlinkingDot from "./Dot";
import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { toast } from "react-toastify";

// static data for orders

const topPerformingDishes = food_list.slice(0, 5).map((dish, index) => ({
  ...dish,
  totalOrders: [248, 221, 196, 174, 159][index],
  grossRevenue: [2976, 3978, 3136, 2880, 1960][index],
  customerRating: [4.9, 4.8, 4.7, 4.6, 4.5][index],
}));

const Dashbord_com = () => {
  const [orderss, setOrderss] = useState([]);

  const getAllOrders = async () => {
    try {
      const response = await axiosInstance.get("/admin/all-orders");

      if (response.status === 200) {
        setOrderss(response.data.orders);
      }
    } catch (error) {
      toast.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  
  return (
    <div>
      {/* heading */}
      <div>
        <div className="flex items-center gap-2">
          <BlinkingDot color="bg-orange-500" size="w-2 h-2" />
          <p className="text-xs font-light text-primary">Live Kitchen Stream</p>
        </div>
        <h1 className="text-2xl font-bold text-main">
          Admin Overview — Welcome back, Alex
        </h1>
        <p className="text-sm font-light text-secondary">
          Real-time kitchen management, dispatch status, and product catalogue.
        </p>
      </div>

      {/* card section */}
      <div className="grid grid-cols-4 gap-3 mt-4">
        {/* reusable card component */}
        <div className="apple px-3 py-1 rounded-lg">
          <div className="flex items-start justify-between">
            <p className="text-sm font-light text-mainy">
              Total Menu
              <br /> Items
            </p>
            <div className="bg-orange-600/40 rounded-lg">
              <Hamburger className="text-main m-2" size={20} />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-main mt-4">34</h1>
        </div>

        <div className="apple px-3 py-1 rounded-lg">
          <div className="flex items-start justify-between">
            <p className="text-sm font-light text-mainy">
              Daily Gross
              <br /> Revenue
            </p>
            <div className="bg-orange-600/40 rounded-lg">
              <Receipt className="text-main m-2" size={20} />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-main mt-4">Rs. 384,500</h1>
        </div>

        <div className="apple px-3 py-1 rounded-lg">
          <div className="flex items-start justify-between">
            <p className="text-sm font-light text-mainy">Orders Today</p>
            <div className="bg-orange-600/40 rounded-lg">
              <PaperBag className="text-main m-2" size={20} />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-main mt-4">142</h1>
        </div>

        <div className="apple px-3 py-1 rounded-lg">
          <div className="flex items-start justify-between">
            <p className="text-sm font-light text-mainy">Pending Action</p>
            <div className="bg-orange-600/40 rounded-lg">
              <Clock className="text-main m-2" size={20} />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-main mt-4">8</h1>
        </div>
      </div>

      {/* incomming orders section */}
      <div>
        <div className="flex items-center justify-between mt-4">
          <div>
            <h1 className="text-xl font-bold text-main">
              Live Incoming Orders
            </h1>
            <p className="text-xs font-light text-secondary">
              Real-time status updates and order routing control.
            </p>
          </div>
          <div className="flex items-center justify-end gap-1">
            {/* selected */}
            <div className="bg-orange-500 px-4 py-1 rounded-full text-xs text-on-dark cursor-pointer">
              All (142)
            </div>

            {/* not selected */}
            <div className=" px-4 py-1 rounded-full text-xs text-main cursor-pointer">
              Pending (8)
            </div>
            <div className=" px-4 py-1 rounded-full text-xs text-main cursor-pointer">
              Preparing (14)
            </div>
            <div className=" px-4 py-1 rounded-full text-xs text-main cursor-pointer">
              Transit (19)
            </div>
            <div className=" px-4 py-1 rounded-full text-xs text-main cursor-pointer">
              Delivered (98)
            </div>
          </div>
        </div>

        {/* table */}
        <div className="apple mt-4 overflow-x-auto rounded-lg">
          <table className="w-full min-w-[760px] text-left">
            <thead className="border-b border-black/10">
              <tr className="text-xs font-medium uppercase tracking-wide text-secondary">
                <th className="px-4 py-3">Order ID</th>
                <th className="px-4 py-3">Items Ordered</th>
                <th className="px-4 py-3">Placed</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="">
              {orderss.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-black/5 last:border-b-0 text-sm text-main"
                >
                  <td className="px-4  font-semibold flex-start"># {order?._id}</td>

                  <td>{order?.user_name}</td>
                  
                  <td className="px-4 py-4 text-secondary">{order?.createdAt.slice(0, 10)}</td>
                  <td className="px-4 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${order.statusClass}`}
                    >
                      {order?.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex justify-end gap-2">
                      <button className="btn-primary text-xs font-bold">
                        Accept
                      </button>
                      <button className="btn-secondary text-xs font-bold">
                        Decline
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* top perfoming dishes*/}
      <div className="mt-4">
        <div>
          <h1 className="text-2xl font-bold text-main">
            Top Performing Dishes
          </h1>
          <p className="text-xs font-light text-secondary">
            Ranked by sales volume and gross revenue this week.
          </p>
        </div>

        {/* table */}
        <div className="apple mt-4 overflow-x-auto rounded-lg">
          <table className="w-full min-w-[900px] text-left">
            <thead className="border-b border-black/10">
              <tr className="text-xs font-medium uppercase tracking-wide text-secondary">
                <th className="px-4 py-3">Rank</th>
                <th className="px-4 py-3">Dish</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Total Orders</th>
                <th className="px-4 py-3">Gross Revenue</th>
                <th className="px-4 py-3">Customer Ratings</th>
              </tr>
            </thead>
            <tbody>
              {topPerformingDishes.map((dish, index) => (
                <tr
                  key={dish._id}
                  className="border-b border-black/5 last:border-b-0 text-sm text-main"
                >
                  <td className="px-4 py-4 font-bold text-primary">
                    #{index + 1}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <span className="font-semibold">{dish.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-secondary">{dish.category}</td>
                  <td className="px-4 py-4 font-medium">{dish.totalOrders}</td>
                  <td className="px-4 py-4 font-medium">
                    Rs. {dish.grossRevenue.toLocaleString()}
                  </td>
                  <td className="px-4 py-4">
                    <span className="flex items-center gap-1 font-medium">
                      <Star
                        size={15}
                        className="fill-orange-400 text-orange-400"
                      />
                      {dish.customerRating.toFixed(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashbord_com;

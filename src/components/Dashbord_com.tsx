import { Clock, Hamburger, PaperBag, Receipt, Star } from "lucide-react";
import { food_list } from "../assets/frontend_assets/assets";
import BlinkingDot from "./Dot";


// static data for orders
const orders = [
  {
    id: "#CRV-10482",
    items: "Margherita Pizza x 1, Garlic Bread x 1",
    placed: "Today, 12:35 PM",
    status: "Preparing",
    statusClass: "bg-orange-500/20 text-orange-600",
  },
  {
    id: "#CRV-10481",
    items: "Classic Beef Burger x 2, Fries x 1",
    placed: "Today, 12:28 PM",
    status: "Pending",
    statusClass: "bg-yellow-500/20 text-yellow-600",
  },
  {
    id: "#CRV-10480",
    items: "Chicken Kottu x 1, Lime Juice x 2",
    placed: "Today, 12:14 PM",
    status: "In Transit",
    statusClass: "bg-blue-500/20 text-blue-600",
  },
  {
    id: "#CRV-10479",
    items: "Crispy Chicken Wrap x 2",
    placed: "Today, 11:56 AM",
    status: "Delivered",
    statusClass: "bg-green-500/20 text-green-600",
  },
];

const topPerformingDishes = food_list.slice(0, 5).map((dish, index) => ({
  ...dish,
  totalOrders: [248, 221, 196, 174, 159][index],
  grossRevenue: [2976, 3978, 3136, 2880, 1960][index],
  customerRating: [4.9, 4.8, 4.7, 4.6, 4.5][index],
}));


const Dashbord_com = () => {
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
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-black/5 last:border-b-0 text-sm text-main"
                >
                  <td className="px-4 py-4 font-semibold">{order.id}</td>
                  <td className="px-4 py-4 text-secondary">{order.items}</td>
                  <td className="px-4 py-4 text-secondary">{order.placed}</td>
                  <td className="px-4 py-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${order.statusClass}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex justify-end gap-2">
                      <button className="btn-primary text-xs font-bold">Accept</button>
                      <button className="btn-secondary text-xs font-bold">Decline</button>
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
          <h1 className="text-2xl font-bold text-main">Top Performing Dishes</h1>
          <p className="text-xs font-light text-secondary">Ranked by sales volume and gross revenue this week.</p>
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
                  <td className="px-4 py-4 font-bold text-primary">#{index + 1}</td>
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
                  <td className="px-4 py-4 font-medium">Rs. {dish.grossRevenue.toLocaleString()}</td>
                  <td className="px-4 py-4">
                    <span className="flex items-center gap-1 font-medium">
                      <Star size={15} className="fill-orange-400 text-orange-400" />
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

import { Check, Clock, Locate, MapPin, MessageCircle, MessageCircleQuestionMark, PaperBag, Phone, RefreshCw, Timer, X } from "lucide-react";
import { food_list, orders_list } from "../assets/frontend_assets/assets";
import { useState } from "react";
import BlinkingDot from "./Dot";

const Orders = () => {

  const [orders, setOrders] = useState(orders_list);
  return (
    <div>
      {/* heading */}
      <div className="flex items-center justify-between gap-2">
        <div>
          <h1 className="text-2xl font-bold">Orders</h1>
          <p className="text-sm text-secondary font-light">
            Manage incoming orders, live prep queues, dispatch logistics,
            <br /> and fulfillment performance in real-time.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-orange-500/40 rounded-lg p-2">
            <Timer className="text-main" size={20} />
          </div>
          <div>
            <h2 className="font-bold text-main">Avg Kitchen SLA</h2>
            <p className="text-secondary font-medium">
              14.8 mins{" "}
              <span className="text-primary font-light text-xs">-1.2m</span>
            </p>
          </div>
        </div>
      </div>

      {/* cards */}
      <div className="grid grid-cols-4 gap-3 mt-4">
        {/* resusable cards  */}
        <div className="apple rounded-lg px-3 py-1">
          <div className="flex items-center justify-between">
            <p className="text-main font-bold">All Orders</p>
            <div className="bg-orange-500/40 rounded-lg p-2">
              <PaperBag className="text-main" size={20} />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-main">142</h1>
          </div>
        </div>

        <div className="apple rounded-lg px-3 py-1">
          <div className="flex items-center justify-between">
            <p className="text-main font-bold">Pending Confirmation</p>
            <div className="bg-red-500/40 rounded-lg p-2">
              <Clock className="text-main" size={20} />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-main">8</h1>
          </div>
        </div>

        <div className="apple rounded-lg px-3 py-1">
          <div className="flex items-center justify-between">
            <p className="text-main font-bold">In Progress</p>
            <div className="bg-orange-500/40 rounded-lg p-2">
              <PaperBag className="text-main" size={20} />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-main">142</h1>
          </div>
        </div>

        <div className="apple rounded-lg px-3 py-1">
          <div className="flex items-center justify-between">
            <p className="text-main font-bold">All Orders</p>
            <div className="bg-orange-500/40 rounded-lg p-2">
              <PaperBag className="text-main" size={20} />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-main">142</h1>
          </div>
        </div>
      </div>

      {/* orders section */}
      <div className="mt-4">
        <h2 className="text-lg font-bold text-main">Today Orders</h2>
        <div className="flex items-center justify-between gap-2 mt-2">
          <div className="flex items-center justify-start gap-2 ml-2">
            <input
              type="text"
              placeholder="Search orders..."
              className="px-3 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <button className="cursor-pointer px-3 py-1 rounded-lg bg-orange-500 text-on-dark font-bold">
              Search
            </button>

            <button ><RefreshCw size={20} className="cursor-pointer" /></button>
          </div>

          <div className="flex items-center justify-end gap-2">
            <div className="text-xs font-bold px-3 py-1 cursor-pointer rounded-full bg-orange-500 text-on-dark">
              All(12)
            </div>

            <div className="text-xs font-bold px-3 py-1 cursor-pointer rounded-full text-main">
              Incompleted(2)
            </div>

            <div className="text-xs font-bold px-3 py-1 cursor-pointer rounded-full text-main">
              Completed(10)
            </div>

            <div className="text-xs font-bold px-3 py-1 cursor-pointer rounded-full text-main">
              Declined(10)
            </div>
          </div>
        </div>

        {/* content */}
        <div className="flex gap-3">
          {/* order items table */}
          <div className="flex-2 overflow-hidden rounded-lg bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead className="border-b border-orange-100 bg-orange-50/70 text-xs uppercase tracking-wide text-secondary">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Order</th>
                    <th className="px-4 py-3 font-semibold">Customer</th>
                    <th className="px-4 py-3 font-semibold">Items</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-orange-100">
                  {orders_list.map((order) => (
                    <tr
                      key={order.id}
                      className="hover:bg-orange-500/40 cursor-pointer transition-colors "
                      onClick={() => setOrders([order])}
                    >
                      <td className="px-4 py-4 align-top">
                        <p className="font-bold text-main">#{order.id}</p>
                        <p className="mt-1 text-xs text-secondary">
                          {order.order_date} at {order.time}
                        </p>
                        <span className="mt-2 inline-flex rounded-full bg-orange-100 px-2.5 py-1 text-xs font-semibold text-orange-700">
                          {order.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 align-top">
                        <p className="font-semibold text-main">
                          {order.customer_name}
                        </p>
                        <p className="mt-1 max-w-56 text-xs text-secondary">
                          {order.address}
                        </p>
                      </td>
                      <td className="px-4 py-4 align-top">
                        <ul className="space-y-1 text-secondary">
                          {order.items.map((item) => (
                            <li
                              key={item.item_id}
                              className="flex items-center justify-between gap-6"
                            >
                              <span>{item.name}</span>
                              <span className="font-semibold text-main">
                                x{item.quantity}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <p className="mt-2 text-sm font-bold text-main">
                          LKR {order.total_amount.toLocaleString()}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* order details */}
          <div className="flex-1">
            <div>
              <h1 className="text-2xl font-bold text-main">Order Details</h1>
              {/* heading */}
              <div className="flex items-center justify-between mt-3">
                <div>
                  <h1 className="text-secondary font-bold text-xs">
                    Order Id: {orders[0]?.id}
                  </h1>
                  <div className="flex items-center justify-start gap-2">
                    <Clock className="text-secondary" size={15} />
                    <p className="text-xs">
                      {orders[0]?.order_date} at {orders[0]?.time}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <BlinkingDot color="bg-green-500" size="w-2 h-2" />
                  <p className="text-sm font-bold text-main">
                    {orders[0]?.status}
                  </p>
                </div>
              </div>

              {/* conttrols */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <button className="btn-primary">
                  <Check />
                  Accept Order
                </button>
                <button className="btn-secondary">
                  <X />
                  Decline Order
                </button>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-between w-full mt-2">
                    <div className="flex items-center justify-start gap-2">
                      <div className="p-4 flex items-center justify-center bg-orange-400 text-on-dark rounded-full text-xs">
                        AM
                      </div>

                      <div>
                        <p className="text-sm font-bold ">
                          {orders[0]?.customer_name}
                        </p>
                        <p className="text-xs font-light">+94 77 123 4567</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <Phone
                        size={15}
                        className="text-primary cursor-pointer"
                      />
                      <MessageCircle size={15} className=" cursor-pointer" />
                    </div>
                  </div>
                </div>

                {/* address */}
                <div className="flex items-start justify-start mt-2 gap-3">
                  <MapPin className="text-primary" size={20} />
                  <div>
                    <p className="font-bold text-main">{orders[0]?.address}</p>
                  </div>
                </div>

                {/* note */}
                <div className="flex items-start justify-start mt-2 gap-3">
                  <MessageCircleQuestionMark
                    className="text-primary"
                    size={20}
                  />
                  <div>
                    <p className="font-semibold text-xs text-main">
                      Note: "Please leave at reception desk if unattended. Ring
                      bell #402."
                    </p>
                  </div>
                </div>

                {/* items */}
                <div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center justify-start gap-2 mt-2">
                      <img src={food_list[0]?.image} alt="Food" className="w-16 h-16 object-cover rounded-lg" />
                      <div className="flex items-center justify-start gap-2">
                        <div className="bg-orange-500 text-on-dark px-3 py-1 rounded-lg text-xs">
                          2X
                        </div>
                        <div>
                          <h1 className="text-xs font-bold">
                            Classic Artisan Beef Burger
                          </h1>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-main font-bold text-sm">Rs. 450.00</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center justify-start gap-2 mt-2">
                      <img src={food_list[1]?.image} alt="Food" className="w-16 h-16 object-cover rounded-lg" />
                      <div className="flex items-center justify-start gap-2">
                        <div className="bg-orange-500 text-on-dark px-3 py-1 rounded-lg text-xs">
                          2X
                        </div>
                        <div>
                          <h1 className="text-xs font-bold">
                            Classic Artisan Beef Burger
                          </h1>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-main font-bold text-sm">Rs. 450.00</p>
                    </div>
                  </div>
                </div>

                {/* total */}
                <div className="mt-4 border-t border-orange-100 pt-2">
                  <div className="flex items-center justify-between">
                    <h1 className="font-bold text-xl">Total</h1>
                    <p className="text-primary font-light text-sm">Rs. 900.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;

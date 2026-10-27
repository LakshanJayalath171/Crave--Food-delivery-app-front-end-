import {
  Check,
  CircleCheck,
  Clock,
  Locate,
  MapPin,
  MessageCircle,
  MessageCircleQuestionMark,
  PaperBag,
  Phone,
  RefreshCw,
  Timer,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import BlinkingDot from "./Dot";
import axiosInstance from "../api/axiosInstance";
import { toast } from "react-toastify";

const Orders = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders, setOrders] = useState([]);

  const getAllOrders = async () => {
    try {
      const response = await axiosInstance.get("admin/all-orders");

      setOrders(response.data.orders);
    } catch (error) {
      console.error(error);
    }
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const response = await axiosInstance.put(
        `/admin/change-order-status/${orderId}`,
        { status: newStatus },
      );

      if (response.status === 200) {
        toast.success(`order status updated to ${newStatus}`);
      }
      getAllOrders();
    } catch (error) {
      toast.error("Failed to update order status");
      console.error(error);
    }
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  console.log("selected order:", selectedOrder);
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
      <div className="mt-10">
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

            <button>
              <RefreshCw size={20} className="cursor-pointer" />
            </button>
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
        <div className="flex gap-6 mt-4">
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
                  {orders.map((order) => (
                    <tr
                      key={order?._id}
                      className="hover:bg-orange-500/40 cursor-pointer transition-colors "
                      onClick={() => setSelectedOrder(order)}
                    >
                      <td className="px-4 py-4 align-top">
                        <p className="font-bold text-main">#{order?._id}</p>
                        <p className="mt-1 text-xs text-secondary">
                          {order?.createdAt.slice(0, 10)} at{" "}
                          {order?.createdAt.slice(11, 16)}
                        </p>
                        <span className="mt-2 inline-flex rounded-full bg-orange-100 px-2.5 py-1 text-xs font-semibold text-orange-700">
                          {order?.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 align-top">
                        <p className="font-semibold text-main">
                          {order?.user_name}
                        </p>
                        <p className="mt-1 max-w-56 text-xs text-secondary">
                          {order?.address.lane1}, {order?.address.city}
                        </p>
                      </td>
                      <td className="px-4 py-4 align-top">
                        <ul className="space-y-1 text-secondary">
                          {order.items.map((item) => (
                            <li
                              key={item?.product_id}
                              className="flex items-center justify-between gap-6"
                            >
                              <span>{item?.product_name}</span>
                              <span className="font-semibold text-main">
                                x{item?.quantity}
                              </span>
                            </li>
                          ))}
                        </ul>
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
                    selected order id: {selectedOrder?._id}
                  </h1>
                  <div className="flex items-center justify-start gap-2">
                    <Clock className="text-secondary" size={15} />
                    <p className="text-xs">
                      {selectedOrder?.createdAt.slice(0, 10)} at{" "}
                      {selectedOrder?.createdAt.slice(11, 16)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <BlinkingDot color="bg-green-500" size="w-2 h-2" />
                  <p className="text-sm font-bold text-main">
                    {selectedOrder?.status}
                  </p>
                </div>
              </div>

              {/* controls */}
              {selectedOrder?.status === "cancelled" ||
              selectedOrder?.status === "completed" ? (
                <div className="flex items-center justify-center py-10">
                  <div>
                    <div className="flex items-center justify-center">
                      {selectedOrder?.status === "cancelled" && (<X size={50} className="text-red-500" />)}
                      
                      {selectedOrder?.status === "completed" && (<CircleCheck size={50} className="text-green-500" />)}
                      
                    </div>
                    <div>
                      <p className="text-sm font-bold text-main">
                        Order {selectedOrder?.status}
                      </p>
                      <p className="text-xs text-secondary">
                        Can't change status
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2 mt-4">
                  {selectedOrder?.status === "pending" && (
                    <button
                      onClick={() =>
                        updateOrderStatus(selectedOrder?._id, "confirmed")
                      }
                      className="px-4 py-2 rounded-full flex items-center justify-center gap-1 bg-green-500 text-on-dark font-bold cursor-pointer"
                    >
                      {/* <Check /> */}
                      Accept Order
                    </button>
                  )}

                  {selectedOrder?.status === "confirmed" && (
                    <button
                      onClick={() =>
                        updateOrderStatus(selectedOrder?._id, "preparing")
                      }
                      className="px-4 py-2 rounded-full flex items-center justify-center gap-1 bg-orange-500 text-on-dark font-bold cursor-pointer"
                    >
                      {/* <Check /> */}
                      Prepare Order
                    </button>
                  )}

                  {selectedOrder?.status === "preparing" && (
                    <button
                      onClick={() =>
                        updateOrderStatus(
                          selectedOrder?._id,
                          "out-for-delivery",
                        )
                      }
                      className="px-4 py-2 rounded-full flex items-center justify-center gap-1 bg-blue-500 text-on-dark font-bold cursor-pointer"
                    >
                      {/* <Check /> */}
                      Out for Delivery
                    </button>
                  )}

                  {selectedOrder?.status === "out-for-delivery" && (
                    <button
                      onClick={() =>
                        updateOrderStatus(selectedOrder?._id, "completed")
                      }
                      className="px-4 py-2 rounded-full flex items-center justify-center gap-1 bg-green-500 text-on-dark font-bold cursor-pointer"
                    >
                      {/* <Check /> */}
                      Completed
                    </button>
                  )}

                  <button className="px-4 py-2 rounded-full flex items-center justify-center gap-1 bg-red-500 text-on-dark font-bold cursor-pointer">
                    Decline Order
                  </button>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-between w-full mt-2">
                    <div className="flex items-center justify-start gap-2">
                      <div className="p-4 flex items-center justify-center bg-orange-400 text-on-dark rounded-full text-xs">
                        AM
                      </div>

                      <div>
                        <p className="text-sm font-bold ">
                          {selectedOrder?.user_name}
                        </p>
                        <p className="text-xs font-light">
                          {selectedOrder?.phone_number}
                        </p>
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
                {selectedOrder?.address.map((items, index) => (
                  <div className="flex items-start justify-start mt-2 gap-3">
                    <MapPin className="text-primary" size={20} />
                    <div>
                      <p className="font-bold text-main">
                        {items.lane} {items.street}
                      </p>
                      <p className="text-xs font-light text-secondary">
                        {items.city}
                      </p>
                      <p className="text-xs font-light text-secondary">
                        Postal code: {items.postal_code}
                      </p>
                    </div>
                  </div>
                ))}

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
                  {selectedOrder?.items.map((item, index) => (
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center justify-start gap-2 mt-2">
                        <div className="flex items-center justify-center w-24 h-16 bg-orange-100 rounded-lg">
                          <img
                            src={item.image_url}
                            alt={item.product_name}
                            className="w-18 h-14 rounded-lg"
                          />
                        </div>
                        <div className="flex items-center justify-start gap-2">
                          <div className="bg-orange-500 text-on-dark px-3 py-1 rounded-lg text-xs">
                            {item.quantity}X
                          </div>
                          <div>
                            <h1 className="text-xs font-bold">
                              {item.product_name}
                            </h1>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="text-main font-bold text-sm">
                          {item.product_price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* total */}
                <div className="mt-4 border-t border-orange-100 pt-2">
                  <div className="flex items-center justify-between">
                    <h1 className="font-bold text-xl">Total</h1>
                    <p className="text-primary font-bold text-lg">
                      Rs. {selectedOrder?.total_price}.00
                    </p>
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

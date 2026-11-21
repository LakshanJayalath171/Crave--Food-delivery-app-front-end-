import { useEffect } from "react";
import { socket } from "../lib/soket";

interface NewOrderPayload {
  orderId: string;
  order: {
    _id: string;
    user_id: string;
    user_name: string;
    phone_number: string;
    total_price: string;
    status: string;
    createdAt: string;
  };
}

export const useAdminOrdersSocket = () => {
  useEffect(() => {
    const handleNewOrder = (payload: NewOrderPayload) => {
      console.log("🔔 New order received:", payload);

      // We'll update the dashboard order list in the next step.
    };

    socket.on("new-order", handleNewOrder);

    return () => {
      socket.off("new-order", handleNewOrder);
    };
  }, []);
};
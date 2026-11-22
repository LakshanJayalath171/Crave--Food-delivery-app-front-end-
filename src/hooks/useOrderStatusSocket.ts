import { useEffect } from "react";
import { socket } from "../lib/soket";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

interface OrderStatusPayload {
  orderId: string;
  status: string;
}

export const useOrderStatusSocket = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const handleOrderStatusUpdate = (payload: OrderStatusPayload) => {
      console.log("🔔 Order status updated:", payload);

      // Display notification
      toast.success(
        `Your order status has been updated to ${payload.status}!`,
      );

      // Refresh ongoing orders
      queryClient.invalidateQueries({
        queryKey: ["ongoingOrders"],
      });

      // Refresh previous orders
      queryClient.invalidateQueries({
        queryKey: ["previousOrders"],
      });

      // Refresh individual order details
      queryClient.invalidateQueries({
        queryKey: ["orderById", payload.orderId],
      });
    };

    socket.on("order-status-updated", handleOrderStatusUpdate);

    return () => {
      socket.off("order-status-updated", handleOrderStatusUpdate);
    };
  }, [queryClient]);
};
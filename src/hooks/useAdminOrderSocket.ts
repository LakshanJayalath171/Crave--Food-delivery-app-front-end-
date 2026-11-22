import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { socket } from "../lib/soket";
import { toast } from "react-toastify";

export const useAdminOrdersSocket = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const handleNewOrder = (payload: any) => {
      toast.success("🔔 New order received:" + payload.orderId, {
        position: "top-right",
        autoClose: 5000,
      });

      queryClient.invalidateQueries({
        queryKey: ["admin", "orders"],
      });
    };

    socket.on("new-order", handleNewOrder);

    return () => {
      socket.off("new-order", handleNewOrder);
    };
  }, [queryClient]);
};
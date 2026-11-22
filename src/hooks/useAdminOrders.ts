import { useQuery } from "@tanstack/react-query";

import { getAllAdminOrders } from "../api/adminOrdersApi";

export const useAdminOrders = () => {
  return useQuery({
    queryKey: ["admin", "orders"],
    queryFn: getAllAdminOrders,
  });
};
import axiosInstance from "./axiosInstance";
import type {
  AdminOrder,
  AdminOrdersResponse,
} from "../types/adminOrder.types";

export const getAllAdminOrders = async (): Promise<AdminOrder[]> => {
  const response = await axiosInstance.get<AdminOrdersResponse>(
    "/admin/all-orders"
  );

  return response.data.orders;
};
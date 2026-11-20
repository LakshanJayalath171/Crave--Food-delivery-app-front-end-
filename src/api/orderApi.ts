import axiosInstance from "./axiosInstance";

import type {
  Order,
  OrdersResponse,
  SingleOrderResponse,
} from "../types/order.types";

// 01. Get ongoing orders
export const getOngoingOrders = async (
  userId: string
): Promise<Order[]> => {
  const response = await axiosInstance.get<OrdersResponse>(
    `/user/latest-orders/${userId}`
  );

  return response.data.data;
};

// 02. Get previous orders
export const getPreviousOrders = async (
  userId: string
): Promise<Order[]> => {
  const response = await axiosInstance.get<OrdersResponse>(
    `/user/orders/${userId}`
  );

  return response.data.data;
};

// 03. Get individual order by ID
export const getOrderById = async (
  orderId: string
): Promise<Order> => {
  const response = await axiosInstance.get<SingleOrderResponse>(
    `/user/orders/${orderId}`
  );

  return response.data.data;
};
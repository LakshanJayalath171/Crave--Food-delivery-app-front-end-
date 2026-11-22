export interface AdminOrderItem {
  product_id: string;
  product_name: string;
  product_price: number;
  quantity: number;
  image_url: string;
}

export interface AdminOrderAddress {
  lane: string;
  city: string;
  state?: string;
  postal_code: number;
  _id: string;
}

export type AdminOrderStatus =
  | "pending"
  | "confirmed"
  | "preparing"
  | "out-for-delivery"
  | "completed"
  | "cancelled";

export interface AdminOrder {
  _id: string;
  user_id: string;
  user_name: string;
  phone_number: string;
  address: AdminOrderAddress[];
  items: AdminOrderItem[];
  total: string;
  status: AdminOrderStatus;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface AdminOrdersResponse {
  success: boolean;
  message: string;
  orders: AdminOrder[];
}
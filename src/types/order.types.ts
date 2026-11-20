// Order status
export type OrderStatus =
  | "pending"
  | "confirmed"
  | "preparing"
  | "out-for-delivery"
  | "completed"
  | "cancelled";


// Order address
export interface OrderAddress {
  _id: string;
  lane: string;
  street: string;
  city: string;
  postal_code: number;
  is_default: boolean;
}


// Individual product inside an order
export interface OrderItem {
  product_id: string;
  product_name: string;
  product_price: number;
  quantity: number;
  image_url: string;
}


// Main order interface
export interface Order {
  _id: string;
  user_id: string;
  user_name: string;
  phone_number: string;

  address: OrderAddress[];

  items: OrderItem[];

  total_price: string;

  status: OrderStatus;

  createdAt: string;
  updatedAt: string;
}


// API response for orders
export interface OrdersResponse {
  success: boolean;
  message: string;
  data: Order[];
}


// API response for a single order
export interface SingleOrderResponse {
  success: boolean;
  message: string;
  data: Order;
}
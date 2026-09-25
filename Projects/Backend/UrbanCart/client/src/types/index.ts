export interface User {
  _id: string;
  user_name: string;
  user_email: string;
  is_admin?: boolean;
  avatar?: string;
  auth_provider?: 'local' | 'google';
  createdAt?: string;
  updatedAt?: string;
}

export interface Product {
  _id: string;
  product_name: string;
  product_description: string;
  product_category: string;
  product_image: string;
  product_price: string;
  product_stock: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface AuthResponse {
  message: string;
  token: string;
  user: User;
}


export type OrderStatus = 'Pending' | 'Processing' | 'Shipped' | 'Delivered';

export interface OrderItem {
  _id?: string;
  product: string | Product;
  name: string;
  price: number;
  quantity: number;
}

export interface ShippingAddress {
  address: string;
  city: string;
  postal_code: string;
  country: string;
}

export interface Order {
  _id: string;
  user: {
    _id: string;
    user_name: string;
    user_email: string;
  } | string;
  ordered_items: OrderItem[];
  total_price: number;
  order_status: OrderStatus;
  shipping_address: ShippingAddress;
  createdAt: string;
  updatedAt: string;
}


export interface ProductFormData {
  product_name: string;
  product_price: string;
  product_category: string;
  product_description: string;
  product_image: string;
  product_stock: string;
}
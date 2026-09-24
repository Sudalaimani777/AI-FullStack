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

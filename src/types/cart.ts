import { Product } from "@prisma/client";

export interface CartItem extends Product {
  quantity: number;
}

export interface CartSlice {
  items: CartItem[];
  isLoading: boolean;
  error: Error | null;
}

export interface BaseOption {
  onSuccess?: (data?: any) => void;
  onError?: (data?: any) => void;
}

export interface CreateOrderOptions extends BaseOption {
  payload: CartItem[];
}

export interface CancelOrderOptions extends BaseOption {
  orderId: string;
}

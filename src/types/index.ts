// Producto
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  isAvailable: boolean;
  stock: number;
  preparationTime: number;
  featured?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Item del pedido
export interface OrderItem {
  productId: string;
  productName: string;
  price: number;
  quantity: number;
  notes?: string;
}

// Dirección
export interface Address {
  id: string;
  label: string;
  street: string;
  city: string;
  province: string;
  postalCode: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

// Pedido
export interface Order {
  id: string;
  userId: string;
  userEmail: string;
  userName: string;
  userPhone: string;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  deliveryFee: number;
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'out-for-delivery' | 'delivered' | 'cancelled';
  paymentMethod: 'datafast' | 'payphone' | 'transfer' | 'cash';
  paymentStatus: 'pending' | 'completed' | 'failed';
  deliveryAddress: Address;
  deliveryInstructions?: string;
  estimatedDeliveryTime?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// Usuario
export interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  addresses: Address[];
  preferences: {
    notifications: {
      email: boolean;
      push: boolean;
      sms: boolean;
    };
    favoriteProducts: string[];
  };
  role: 'customer' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

// Evento
export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  image: string;
  price?: number;
  capacity?: number;
  registeredUsers: string[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Promoción
export interface Promotion {
  id: string;
  title: string;
  description: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  minimumOrder?: number;
  products?: string[];
  validFrom: Date;
  validTo: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Carrito
export interface CartItem {
  product: Product;
  quantity: number;
  notes?: string;
}

// Estado del carrito
export interface CartState {
  items: CartItem[];
  total: number;
  deliveryAddress?: Address;
}

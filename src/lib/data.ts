export interface ProductType {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
}

export const products: ProductType[] = [
  {
    name: "Premium Wireless Headphones",
    description:
      "Experience crystal-clear sound with our premium wireless headphones featuring active noise cancellation and 30-hour battery life.",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    category: "Electronics",
    stock: 25,
  },
  {
    name: "Smart Fitness Watch",
    description:
      "Track your health and fitness goals with this advanced smartwatch featuring heart rate monitoring, GPS, and 7-day battery life.",
    price: 399.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    category: "Electronics",
    stock: 18,
  },
  {
    name: "Ergonomic Office Chair",
    description:
      "Comfortable and stylish office chair with lumbar support, adjustable height, and premium materials for all-day comfort.",
    price: 449.99,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
    category: "Furniture",
    stock: 12,
  },
  {
    name: "Professional Camera Lens",
    description:
      "High-quality 85mm f/1.4 lens perfect for portrait photography with beautiful bokeh and sharp image quality.",
    price: 1299.99,
    image:
      "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&h=500&fit=crop",
    category: "Photography",
    stock: 8,
  },
  {
    name: "Minimalist Desk Lamp",
    description:
      "Modern LED desk lamp with adjustable brightness and color temperature, perfect for any workspace.",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    category: "Home",
    stock: 30,
  },
  {
    name: "Bluetooth Portable Speaker",
    description:
      "Compact wireless speaker with powerful sound, waterproof design, and 12-hour playback time.",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
    category: "Electronics",
    stock: 45,
  },
];

export const USER = [
  {
    id: "1",
    name: "Test User",
    email: "test@gmail.com",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
];

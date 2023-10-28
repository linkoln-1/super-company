"use client";
import React, { createContext, useContext, ReactNode } from "react";
import { StaticImageData } from "next/image";

interface Product {
  quantity: number;
  image: StaticImageData;
  title: string;
  description: string;
  productDesc: string;
  id: number;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = React.useState<Product[]>([]);

  const addToCart = (product: Product) => {
    if (cart.some((p) => p.id === product.id)) {
      increaseQuantity(product.id);
    } else {
      const newProduct = { ...product, quantity: 1 };
      setCart((currentCart) => [...currentCart, newProduct]);
    }
  };

  const removeFromCart = (productId: number) => {
    setCart((currentCart) => currentCart.filter((p) => p.id !== productId));
  };

  const increaseQuantity = (productId: number) => {
    setCart((prevCart) => {
      return prevCart.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity: Number(product.quantity) + 1 };
        }
        return product;
      });
    });
  };

  const decreaseQuantity = (productId: number) => {
    setCart((prevCart) => {
      return prevCart.map((product) => {
        if (product.id === productId && Number(product.quantity) > 1) {
          return { ...product, quantity: Number(product.quantity) - 1 };
        }
        return product;
      });
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

"use client";
import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const CartPage: React.FC = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="font-bold text-4xl mb-6">CART</h2>
      {cart.length === 0 ? (
        <h3 className="text-center font-bold text-4xl">Ваша корзина пуста</h3>
      ) : (
        <ul>
          {cart.map((product) => (
            <li
              key={product.id}
              className="flex flex-col smmd:flex-row mb-4 max-w-3xl justify-between items-start smmd:items-center border-b pb-4"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={178}
                height={140}
                className="object-cover mb-4 smmd:mb-0"
              />
              <div className="ml-4 flex-grow mb-4 smmd:mb-0">
                <h3 className="text-xl font-bold">{product.title}</h3>
                <p className="text-sm mb-4">{product.productDesc}</p>
              </div>
              <div className="flex smmd:flex-row items-center">
                <button
                  className="px-2 py-1 button-color"
                  onClick={() => decreaseQuantity(product.id)}
                >
                  <RemoveCircleIcon />
                </button>
                <span className="mx-2">{product.quantity}</span>
                <button
                  className="px-2 py-1 button-color"
                  onClick={() => increaseQuantity(product.id)}
                >
                  <AddCircleOutlinedIcon />
                </button>
                <button
                  className="border ml-4 text-blue-500 button-color"
                  onClick={() => removeFromCart(product.id)}
                >
                  <DeleteOutlinedIcon />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default React.memo(CartPage);

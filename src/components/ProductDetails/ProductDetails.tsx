"use client";
import React, { FC } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { products } from "@/app/api/products/product";
import { GradientButton } from "@/components/GradientButton/GradientButton";
import Link from "next/link";
import {useCart} from "@/context/CartContext";

export const ProductDetails: FC = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  if (!id) return null;

  const productToShow = products.find((product) => product.id === Number(id));

  if (!productToShow) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between p-10">
        <div className="w-full sm:w-1/2">
          <Image
            src={productToShow.image}
            alt="Product Image"
            className="rounded mb-4"
            width={484}
            height={384}
          />

          <div className="flex flex-wrap gap-4">
            {productToShow.thumbnails &&
              productToShow.thumbnails.map((thumb, index) => (
                <Image
                  key={index}
                  src={thumb}
                  alt={`Thumbnail ${index + 1}`}
                  className="rounded mb-4"
                  width={107}
                  height={82}
                />
              ))}
          </div>
        </div>

        <div className="w-full sm:w-1/2 mt-4 sm:mt-0 sm:pl-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {productToShow.title}
          </h2>
          <p className="text-gray-600 mb-4">{productToShow.productDesc}</p>
          <GradientButton
            classNameButton="button-gradient text-white rounded px-4 py-2 mr-2"
            width="125px"
            onClick={() => addToCart(productToShow)}
          >
            Add to Cart
          </GradientButton>
        </div>
      </div>

      <div className="container mx-auto p-10">
        <h2 className="text-2xl font-bold mb-4 button-color">SEE ALSO</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products?.map((product, index) => {
            return (
              <div key={product.id} className="border p-4">
                <Image
                  src={product.image}
                  alt="Product Image"
                  className="w-full mb-4"
                  width={107}
                  height={82}
                />
                <h3 className="text-xl">{product.title}</h3>
                <p className="mb-4">{product.description}</p>
                <div className="flex flex-wrap justify-between">
                  <GradientButton
                    classNameButton="button-gradient text-white rounded px-4 py-2 mr-2"
                    width="w-full sm:w-auto"
                    onClick={() => addToCart(productToShow)}
                  >
                    Add to Cart
                  </GradientButton>
                  <GradientButton
                    classNameButton="button-gradient-text rounded px-4 py-2 font-bold"
                    width="w-full sm:w-auto"
                  >
                    <Link href={`/products/${product.id}`}>Подробнее</Link>
                  </GradientButton>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container mx-auto p-10">
        <div className="bg-gray-100 max-w-6xl m-auto p-14 flex flex-col sm:flex-row justify-between items-center">
          <div className="w-full sm:w-96 mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold">HAVE QUESTIONS</h2>
            <p className="text-gray-600 mt-4">
              Leave your contacts and our managers will contact you shortly.
            </p>
          </div>
          <div className="mt-8 max-w-md w-full">
            <input
              className="w-full p-4 mb-4 border rounded-md"
              placeholder="Name"
            />
            <input
              className="w-full p-4 mb-4 border rounded-md"
              placeholder="Mob/Tg/Whts"
            />
            <GradientButton
              classNameButton="button-gradient text-white rounded px-4 py-2 mr-2"
              width="w-full sm:w-auto"
              alignment="center"
            >
              Send
            </GradientButton>
          </div>
        </div>
      </div>
    </div>
  );
};

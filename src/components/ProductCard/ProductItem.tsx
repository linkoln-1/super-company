import { FC } from "react";
import { useCart } from "@/context/CartContext";
import Image, { StaticImageData } from "next/image";
import { GradientButton } from "@/components/GradientButton/GradientButton";
import Link from "next/link";

interface Product {
  quantity: number;
  image: StaticImageData;
  title: string;
  description: string;
  productDesc: string;
  id: number;
}

export const ProductItem: FC<{ product: Product; newId: number }> = ({
  product,
  newId,
}) => {
  const { addToCart } = useCart();
  return (
    <div key={newId} className="border p-2 xs:p-4 mb-2 md:mb-4 lg:mb-0">
      <Image
        src={product.image}
        alt="Product Image"
        className="w-full mb-2 xs:mb-4"
      />
      <h3 className="text-sm xs:text-lg md:text-xl">{product.title}</h3>
      <p className="mb-2 xs:mb-4 text-xs xs:text-sm md:text-base">
        {product.description}
      </p>
      <div className="flex justify-between">
        <GradientButton
          classNameButton="text-xs xs:text-sm sm:text-base md:text-lg button-gradient text-white rounded px-1 xs:px-2 sm:px-4 py-1 sm:py-2 mr-1 xs:mr-2 md:mr-4"
          width="80px xs:90px sm:110px md:125px"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </GradientButton>
        <GradientButton
          classNameButton="text-xs xs:text-sm sm:text-base md:text-lg button-gradient-text rounded px-1 xs:px-2 sm:px-4 py-1 sm:py-2 font-bold"
          width="80px xs:90px sm:110px md:125px"
        >
          <Link href={`/products/${newId}`}>Подробнее</Link>
        </GradientButton>
      </div>
    </div>
  );
};

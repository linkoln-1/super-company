import { FC, ReactNode } from "react";
import { useCart } from "@/context/CartContext";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { GradientButton } from "@/components/GradientButton/GradientButton";

interface Product {
    quantity: number;
    image: StaticImageData;
    title: string;
    description: string;
    productDesc: string;
    id: number;
}

interface ProductCardProps {
  products: Product[];
  visibleCategories: number;
}

const ProductItem: FC<{ product: Product; newId: number }> = ({
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

export const ProductCard: FC<ProductCardProps> = ({
  products,
  visibleCategories,
}) => {
  const renderCategory = (categoryIndex: number): ReactNode => {
    const categoryId = categoryIndex + 1;
    return (
      <div key={categoryIndex} className="mb-8">
        <h2 className="text-xl smmd:text-2xl md:text-2xl font-bold mb-4 button-color">
          CATEGORY {categoryId}
        </h2>
        <div className="grid grid-cols-1 smmd:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product, index) => {
            return <ProductItem key={index} product={product} newId={product.id} />;
          })}
        </div>
      </div>
    );
  };

  return (
    <>{[...Array(visibleCategories)].map((_, idx) => renderCategory(idx))}</>
  );
};

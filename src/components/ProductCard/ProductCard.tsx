import { FC, ReactNode } from "react";
import { StaticImageData } from "next/image";

import { ProductItem } from "@/components/ProductCard/ProductItem";
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
            return (
              <ProductItem key={index} product={product} newId={product.id} />
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <>{[...Array(visibleCategories)].map((_, idx) => renderCategory(idx))}</>
  );
};

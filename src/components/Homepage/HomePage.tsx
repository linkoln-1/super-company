import Head from "next/head";
import {FC, useContext, useEffect, useState} from "react";
import { GradientButton } from "@/components/GradientButton/GradientButton";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import axios from "axios";
import { StaticImageData } from "next/image";

interface Product {
  quantity: number;
  image: StaticImageData;
  title: string;
  description: string;
  productDesc: string;
  id: number;
}

const useProducts = (): Product[] => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get<Product[]>(
        "http://localhost:3000/api/products",
      );
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  return products;
};

export const Catalog: FC = () => {
  const [visibleCategories, setVisibleCategories] = useState<number>(3);
  const products = useProducts();

  const handleLoadMore = () => {
    setVisibleCategories((prev) => prev + 3);
  };


  return (
    <div className="p-4 md:p-12 lg:p-24">
      <div className="max-w-7xl mx-auto px-2 md:px-4">
        <Head>
          <title>Catalog</title>
        </Head>

        <header>
          <h1 className="text-2xl md:text-3xl font-semibold mb-6">CATALOG</h1>
        </header>

        <section>
          <ProductCard
            products={products}
            visibleCategories={visibleCategories}
          />
        </section>

        <GradientButton
          classNameButton="bg-gray-100 p-1 relative z-0 before:absolute before:inset-0 before:bg-gradient-to-br before:from-green-400 before:to-blue-500 before:origin-border before:z-[-1] before:rounded-xl before:content-['']"
          alignment="center"
          classNameSpan="block bg-gray-100 px-3 md:px-4 py-1.5 md:py-2 rounded-lg font-bold"
          width="150px md:180px"
          onClick={handleLoadMore}
        >
          Load More
        </GradientButton>
      </div>
    </div>
  );
};

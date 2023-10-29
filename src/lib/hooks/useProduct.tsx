import { useEffect, useState } from "react";
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

export const useProducts = (): Product[] => {
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

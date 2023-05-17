import { Product } from "types";

export const requestProducts = async (): Promise<{ products: Product[] }> => {
  const response = await fetch(
    "https://voodoo-sandbox.myshopify.com/products.json?limit=12"
  );

  return response.json();
};

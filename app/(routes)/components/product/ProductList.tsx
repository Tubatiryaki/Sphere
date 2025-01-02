import { products } from "@/constant";
import React from "react";
import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <>
      <section className="container mx-auto px-5 py-9">
        <h1 className="text-3xl mt-6 mb-8 text-center">Product List</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </section>
      </section>
    </>
  );
};

export default ProductList;

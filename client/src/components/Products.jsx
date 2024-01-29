import React from "react";
import { useProductContext } from "../context/ProductContext";

const Products = () => {
  const { products } = useProductContext();

  return (
    <div className="mt-6 p-6">
      <h1 className="text-5xl font-semibold text-gray-700 mb-6">
        Check our products:{" "}
      </h1>

      <div className="flex flex-wrap gap-3 rounded-xl">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-5 border w-full max-w-[350px] rounded-xl"
          >
            <h4 className="text-lg font-semibold"> {product.name}</h4>
            <h3 className="text-sm">Category: {product.category}</h3>
            <p className="text-3xl font-bold">{product.price}</p>
            <p className="text-sm text-gray-500">{product.description}</p>
            <span>Review: {product.stars}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

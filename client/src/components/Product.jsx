import React from "react";
import { MdDelete } from "react-icons/md";
import { useProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { deleteProduct } = useProductContext();

  const handleDelete = async (pk) => {
    try {
      await deleteProduct(pk);
    } catch (error) {
      console.log("Error during delete item: ", error);
    }
  };

  return (
    <div className="p-5 border w-full max-w-[350px] rounded-xl">
      <h4 className="text-lg font-semibold"> {product.name}</h4>
      <h3 className="text-sm text-gray-700">Category: {product.category}</h3>
      <p className="text-4xl font-bold italic">${product.price}</p>
      <p className="text-sm text-gray-500">{product.description}</p>
      <span>Review: {product.stars}</span>
      <div className="flex justify-between align-center">
        <Link
          to={`/edit-product/${product.id}`}
          className="text-lg text-blue-600 mr-2"
        >
          Edit
        </Link>
        <button
          onClick={() => handleDelete(product.id)}
          className="text-lg text-red-600"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default Product;

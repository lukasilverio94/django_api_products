import { useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import { MdDelete } from "react-icons/md";
import Product from "./Product";

const Products = () => {
  const { products } = useProductContext();

  return (
    <div className="mt-2 py-6">
      <h1 className="text-5xl px-24 font-semibold text-gray-700 mb-8">
        Products
      </h1>
      {products.length == 0 && (
        <p className="text-3xl px-24 text-gray-500">No products to display</p>
      )}
      <div className="flex flex-wrap justify-center gap-3 rounded-xl">
        {products &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Products;

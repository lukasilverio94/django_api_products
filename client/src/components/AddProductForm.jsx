import { useState } from "react";
import axios from "axios";
import { useProductContext } from "../context/ProductContext";

const AddProductForm = () => {
  const { addProduct } = useProductContext();
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    stars: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("product-create/", newProduct);
      addProduct(response.data);
      setNewProduct({
        name: "",
        category: "",
        price: 0,
        description: "",
        stars: 0,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pb-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[700px] m-auto border-2 p-5 flex flex-col justify-center"
      >
        <h4 className="text-3xl mb-3 text-blue-950">Add item: </h4>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={newProduct.name || ""}
            onChange={handleInputChange}
            className="w-full border-2 border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-600">
            Category:
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={newProduct.category || ""}
            onChange={handleInputChange}
            className="w-full border-2 border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-600">
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={newProduct.price || ""}
            onChange={handleInputChange}
            className="w-full border-2 border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-600">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={newProduct.description || ""}
            onChange={handleInputChange}
            className="w-full border-2 border-gray-300 p-2 rounded"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-600">
            Review:
          </label>
          <input
            type="number"
            id="stars"
            name="stars"
            value={newProduct.stars || ""}
            onChange={handleInputChange}
            className="w-full border-2 border-gray-300 p-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;

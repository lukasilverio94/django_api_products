import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useProductContext } from "../context/ProductContext";

const EditProduct = ({ id }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { updateProduct, fetchProducts } = useProductContext();
  const [editedProduct, setEditedProduct] = useState({
    name: "",
    category: "",
    price: 0,
    description: "",
    stars: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`product-detail/${productId}/`);
        setEditedProduct(response.data);
      } catch (error) {
        console.log("Error fetching product for editing: ", error);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({
      ...editedProduct,
      [name]: value,
    });
  };

  const handleEdit = async () => {
    try {
      await axios.put(`product-update/${productId}/`, editedProduct);
      updateProduct(productId, editedProduct);
      fetchProducts();
      navigate("/");
    } catch (error) {
      console.log("Error during product update: ", error);
    }
  };

  return (
    <div className="p-5 border w-full max-w-[800px] m-auto  rounded-xl">
      <h4 className="text-lg font-semibold">Edit Product</h4>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-600">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={editedProduct.name || ""}
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
          value={editedProduct.category || ""}
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
          value={editedProduct.price || ""}
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
          value={editedProduct.description || ""}
          onChange={handleInputChange}
          className="w-full border-2 border-gray-300 p-2 rounded"
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="stars" className="block text-gray-600">
          Review:
        </label>
        <input
          type="number"
          id="stars"
          name="stars"
          value={editedProduct.stars || ""}
          onChange={handleInputChange}
          className="w-full border-2 border-gray-300 p-2 rounded"
          required
        />
      </div>
      <button
        onClick={handleEdit}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Save Changes
      </button>
      <Link to="/" className="text-gray-700 font-semibold ps-5">
        Cancel
      </Link>
    </div>
  );
};

export default EditProduct;

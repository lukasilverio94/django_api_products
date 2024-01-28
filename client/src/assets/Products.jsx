import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
     // Function to fetch products from Django backend
     const fetchProducts = async () => {
        try {
          // Axios will use the default base URL
          const response = await axios.get('product-list/');
        setProducts(response.data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      // Call the fetchProducts function
      fetchProducts();

    }, [])
  return (
    <div>
        <h2>Product List: </h2>
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    {product.name} - {product.price}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Products
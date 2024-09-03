import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        console.log(response.data.products); // Log products to check structure
        setProducts(response.data.products);
      } catch (error) {
        setMessage('Error fetching products');
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      {message && <p>{message}</p>}
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <h3>{product.name}</h3>
            <img
              src={`http://localhost:5000/api/image/${product.image.split('/').pop()}`}
              alt={product.name}
              width="100"
            />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Brand: {product.brand}</p>
            <p>Category: {product.category ? product.category.name : 'No category'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

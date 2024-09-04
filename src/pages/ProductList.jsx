import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/Navbar';

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
    <>
      <NavBar name={"Products"} back={"home"} />
      <div className="max-w-6xl mx-auto mt-16 p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-400 mb-6">Product List</h2>
        {message && (
          <p className="text-red-600 text-center mb-4">{message}</p>
        )}
        <ul className="space-y-6">
          {products.map((product) => (
            <li key={product._id} className="flex flex-col bg-gray-100 p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
              <img
                src={`http://localhost:5000/api/image/${product.image.split('/').pop()}`}
                alt={product.name}
                className="w-32 h-32 object-cover mb-4 rounded-md"
              />
              <p className="text-gray-700 mb-2">{product.description}</p>
              <p className="text-gray-800 font-medium mb-2">Price: ${product.price}</p>
              <p className="text-gray-800 font-medium mb-2">Quantity: {product.quantity}</p>
              <p className="text-gray-800 font-medium mb-2">Brand: {product.brand}</p>
              <p className="text-gray-800 font-medium">Category: {product.category ? product.category.name : 'No category'}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductList;

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/Navbar';
import { Backend_url } from '../constant';

export const Products = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${Backend_url}/api/products?category=${categoryId}`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setMessage('Error fetching products');
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <>
    <NavBar name={"Products"} back={"home"}/>
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-green-400 mb-6">Products</h2>
      {message && (
        <p className="mt-4 text-center text-sm font-medium text-red-600">
          {message}
        </p>
      )}
      <div className="grid gap-x-4 gap-y-4 grid-cols-1 p-2">
        {products.map(product => (
          <div key={product._id} className="bg-white shadow-md rounded-lg p-3">
            <img src={`${Backend_url}/api/image/${product.image}`} alt={product.name} className="h-32 w-32 object-cover mb-2 rounded-md" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
            <p className="text-sm text-gray-700">{product.description}</p>
            <p className="text-sm text-gray-700">Brand: {product.brand}</p>
            <p className="text-sm text-gray-700">Price: ${product.price}</p>
            <p className="text-sm text-gray-700">Quantity: {product.quantity}</p>
          </div>
        ))}
      </div>
    </div>
    </>

  );
};

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Backend_url } from '../constant';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${Backend_url}/api/product/${id}`);
        setProduct(response.data.product);
      } catch (error) {
        setMessage('Error fetching product');
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      {message && <p>{message}</p>}
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <img src={`${Backend_url}api/product/image/${product.imageId}`} alt={product.name} />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Quantity: {product.quantity}</p>
          <p>Brand: {product.brand}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;

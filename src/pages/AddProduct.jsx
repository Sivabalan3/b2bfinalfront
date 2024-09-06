import { useState } from 'react';
import axios from 'axios';
import NavBar from "../components/Navbar";
import Swal from 'sweetalert2'
import { Backend_url } from '../constant';

const AddProduct = () => {
  const [product, setProduct] = useState({
    image: null,
    name: '',
    price: '',
    productId:'',
    quantity: '',
    description: '',
    brand: ''
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      const file = files[0];
      if (file) {
        setProduct({
          ...product,
          image: file // Store the file as a Blob
        });
      }
    } else {
      setProduct({
        ...product,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', product.name);
      formData.append('price', product.price);
      formData.append('price', product.productId);
      formData.append('quantity', product.quantity);
      formData.append('description', product.description);
      formData.append('brand', product.brand);
      formData.append('image', product.image); // Append the Blob file

      const response = await axios.post(`${Backend_url}/api/products/add`,product, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Product Added Successfully",
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      console.error('Failed to add product:', error);
    }
  };

  return (
    <>
      <NavBar name={"AddProduct"} back={"home"} />
      <div className="p-4 max-w-2xl mx-auto mt-16">
        <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="image" className="block text-sm font-medium">Product Image</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Product Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={product.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          
          <div>
            <label htmlFor="price" className="block text-sm font-medium">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          

          <div>
            <label htmlFor="quantity" className="block text-sm font-medium">Quantity</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={product.quantity}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium">Description</label>
            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="brand" className="block text-sm font-medium">Brand</label>
            <input
              type="text"
              id="brand"
              name="brand"
              value={product.brand}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          {/* Other form fields for name, price, etc. */}

          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-green-400 text-white font-semibold rounded-md shadow-sm"
          >
            Add Product
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;

import { useState, useEffect } from 'react';
import NavBar from "../components/Navbar";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart items from local storage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Retrieved cart:', cart); // Log the retrieved cart data
    setCartItems(Array.isArray(cart) ? cart : []);
  }, []);

  return (
    <>
      <NavBar name={"Carts"} back={"home"} />
      <div className="max-w-6xl mx-auto mt-16 p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-400 mb-6">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <ul className="space-y-6">
            {cartItems.map((item, index) => (
              <li key={index} className="relative flex flex-col bg-gray-100 p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
                <img
                  src={`http://localhost:5000/api/image/${item.image.split('/').pop()}`}
                  alt={item.name}
                  className="w-32 h-32 object-cover mb-4 rounded-md"
                />
                <p className="text-gray-700 mb-2">{item.description}</p>
                <p className="text-gray-800 font-medium mb-2">Price: ${item.price}</p>
                {/* <p className="text-gray-800 font-medium mb-2">Quantity: {item.quantity}</p> */}
                <p className="text-gray-800 font-medium mb-2">Brand: {item.brand}</p>
                <p className="text-gray-800 font-medium">Category: {item.category ? item.category.name : 'No category'}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Cart;

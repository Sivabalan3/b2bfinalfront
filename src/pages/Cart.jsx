import { useState, useEffect } from 'react';
import NavBar from "../components/Navbar";
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import { Button } from "../components/alt/Button";
import { useNavigate } from 'react-router-dom';
import { Backend_url } from '../constant';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const Cart = () => {
  const Navigate=useNavigate()
  const [cartItems, setCartItems] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Retrieve cart items from local storage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(Array.isArray(cart) ? cart : []);
  }, []);

  const openModal = (product) => {
    setCurrentProduct(product);
    setQuantity(1); // Reset quantity to 1 when opening modal
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = () => {
    // Retrieve the current cart from local storage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Update the selected product in the cart
    const updatedCart = cart.map(item => {
      if (item._id === currentProduct._id) {
        return {
          ...item,
          quantity,
          totalPrice: (currentProduct.price * quantity).toFixed(2),
        };
      }
    });
  
    // Save updated cart to local storage
    localStorage.setItem('cartitems', JSON.stringify(updatedCart));
    setCartItems(updatedCart); // Update state to reflect changes
  
    Swal.fire({
      position: "center",
      icon: "success",
      title: "SUCCESSFULLY SUBMITTED",
      text: `Your request for ${currentProduct.name} has been updated.`,
      showConfirmButton: false,
      timer: 2500,
    });
    closeModal();
    Navigate("/shipping")
  };
  

  // Calculate the total amount
  const totalAmount = currentProduct ? (currentProduct.price * quantity).toFixed(2) : 0;

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
                  src={`${Backend_url}/api/image/${item.image.split('/').pop()}`}
                  alt={item.name}
                  className="w-32 h-32 object-cover mb-4 rounded-md"
                />
                <p className="text-gray-700 mb-2">{item.description}</p>
                <p className="text-gray-800 font-medium mb-2">Price: ${item.price}</p>
                {/* <p className="text-gray-800 font-medium mb-2">Quantity: {item.quantity}</p> */}
                <p className="text-gray-800 font-medium mb-2">Brand: {item.brand}</p>
                <p className="text-gray-800 font-medium">Category: {item.category ? item.category.name : 'No category'}</p>
                <Button
                  className="w-full mt-4 py-2 bg-green-400 text-white rounded-lg hover:bg-green-600 transition duration-300"
                  onClick={() => openModal(item)}
                  names={"Buy Product"}
                >
                  Buy Product
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Product Purchase Modal"
      >
        {currentProduct && (
          <>
            <h2 className="text-xl font-bold mb-4">{currentProduct.name}</h2>
            <p className="text-gray-700 mb-2">{currentProduct.description}</p>
            <p className="text-gray-800 font-medium mb-2">Price: ${currentProduct.price}</p>

            <form className="space-y-2">
              <div>
                <label className="block mb-1 font-medium text-gray-700">Quantity:</label>
                <div className="relative flex items-center w-full">
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none text-center"
                  />
                  <div className="absolute inset-y-0 right-0 flex flex-col items-center justify-center pr-3">
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="text-green-400 hover:text-green-800"
                    >
                      ▲
                    </button>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                      className="text-green-400 hover:text-green-800"
                    >
                      ▼
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <p className="block mb-1 font-medium text-gray-700">Total Amount: ${totalAmount}</p>
              </div>
              <Button
                className="w-full py-1 bg-green-400 text-white rounded-lg hover:bg-green-600 transition duration-300"
                onClick={handleSubmit}
                names={"Submit"}
              >
                Submit Request
              </Button>
              <Button
                className="w-full py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-600 transition duration-300 mt-2"
                onClick={closeModal}
                names={"Close"}
              >
                Close
              </Button>
            </form>
          </>
        )}
      </Modal>
    </>
  );
};

export default Cart;

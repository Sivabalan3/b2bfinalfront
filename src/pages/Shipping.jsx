import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
import ProgressSteps from "../pages/ProgressSteps";
import { Backend_url } from "../constant";
import NavBar from "../components/Navbar";

const Shipping = () => {
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve saved shipping address from local storage if available
    const savedShippingAddress = JSON.parse(localStorage.getItem("shippingAddress")) || {};
    if (savedShippingAddress) {
      setAddress(savedShippingAddress.address || "");
      setCity(savedShippingAddress.city || "");
      setPostalCode(savedShippingAddress.postalCode || "");
      setCountry(savedShippingAddress.country || "");
    }
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    
    const shippingAddress = { address, city, postalCode, country };
    localStorage.setItem("shippingAddress", JSON.stringify(shippingAddress));
    localStorage.setItem("paymentMethod", paymentMethod);
    
    // Retrieve and filter out null values from cart items
    const cartItems = JSON.parse(localStorage.getItem('cartitems')) || [];
    const filteredCartItems = cartItems.filter(item => item !== null && item !== undefined);
  
    const orderData = {
      shippingAddress,
      paymentMethod,
      orderItems: filteredCartItems.map(item => ({
        name: item.name,
        qty: item.quantity, // Assuming `quantity` is the key for quantity in cart items
        image: item.image,
        price: item.price,
        product: item._id,
        totalPrice:item.totalPrice,
        quantity:item.quantity,
        imageId:item.imageId,
        description:item.description
      })),
      // Add other necessary order details here
    };
  
    try {
      await axios.post(`${Backend_url}/api/orders/create`, orderData, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      navigate("/chat");
    } catch (error) {
      console.error("Error creating order:", error.response.data);
    }
  };
  
  
  

  return (
    <>
    <NavBar name={"shipping"} back={"categories"}/>
    <div className="container mx-auto mt-20">
      <ProgressSteps step1 step2 />
      <div className="mt-8 flex justify-center items-center">
        <form onSubmit={submitHandler} className="w-full max-w-md p-4 bg-gray-100 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold mb-4">Shipping</h1>
          
          <div className="mb-4">
            <label className="block text-gray-800 mb-2">Address</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter address"
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-800 mb-2">City</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter city"
              value={city}
              required
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-800 mb-2">Postal Code</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter postal code"
              value={postalCode}
              required
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-800 mb-2">Country</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter country"
              value={country}
              required
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-800 mb-2">Select Method</label>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-green-400"
                  name="paymentMethod"
                  value="PayPal"
                  checked={paymentMethod === "PayPal"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span className="ml-2">PayPal or Credit Card</span>
              </label>
            </div>
          </div>

          <button
            className="bg-green-400 text-white py-2 px-4 rounded-full text-lg w-full"
            type="submit"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Shipping;

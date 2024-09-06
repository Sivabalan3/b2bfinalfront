import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/Navbar";
import { Backend_url } from "../constant";

export const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [role, setRole] = useState("user"); // Default role is user

  useEffect(() => {
    // Fetch user role from local storage
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.role) {
      setRole(user.role);
    }

    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${Backend_url}/api/orders`);
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const handleDeliveryUpdate = async (orderId) => {
    try {
      const response = await axios.put(
        `${Backend_url}/api/orders/${orderId}/deliver`
      );
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, isDelivered: true } : order
        )
      );
      console.log(`Order ${orderId} delivery status updated to true`);
    } catch (error) {
      console.error("Error updating delivery status:", error);
    }
  };

  const handlePaid = async (orderId) => {
    try {
      const response = await axios.put(
        `${Backend_url}/api/orders/${orderId}/Paid`
      );
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, isPaid: true } : order
        )
      );
      console.log(`Order ${orderId} Paid status updated to true`);
    } catch (error) {
      console.error("Error updating Paid status:", error);
    }
  };

  // Filter orders to show only undelivered ones
  const undeliveredOrders = orders.filter((order) => !order.isDelivered);
  const unPaidOrders = orders.filter((order) => !order.isPaid);

  return (
    <>
      <NavBar back={"home"} />
      <div className="max-w-6xl mx-auto mt-20">
        {undeliveredOrders.length === 0 && unPaidOrders.length === 0 ? (
          <p className="text-center text-xl font-semibold text-gray-600">
            No undelivered orders
          </p>
        ) : (
          undeliveredOrders.map((order) => (
            <div
              key={order._id}
              className="border-solid border-2 border-gray-300 p-5 m-5 rounded-lg"
            >
              <h2 className="text-xl font-semibold">Order ID: {order._id}</h2>
              <p className="text-gray-600 mt-2">
                Address: {order.shippingAddress.address}
              </p>
              <p className="text-gray-600">
                City: {order.shippingAddress.city}
              </p>
              <p className="text-gray-600">
                Postal Code: {order.shippingAddress.postalCode}
              </p>
              <p className="text-gray-600">
                Country: {order.shippingAddress.country}
              </p>
              <p className="text-gray-600 mt-2">
                Payment Method: {order.paymentMethod}
              </p>
              <p className="text-gray-600">Total Price: ${order.totalPrice}</p>
              <p className="text-gray-600">
                Created At: {new Date(order.createdAt).toLocaleDateString()}
              </p>
              <p className="text-gray-600">
                Updated At: {new Date(order.updatedAt).toLocaleDateString()}
              </p>

              {/* Status Buttons */}
              <div className="mt-4">
                <button
                  onClick={() => handleDeliveryUpdate(order._id)}
                  className={`text-white font-medium rounded-full h-10 text-sm px-5 py-2 mr-2 ${
                    order.isDelivered ? "bg-green-500" : "bg-gray-400"
                  }`}
                  disabled={order.isDelivered || role !== "seller"}
                >
                  {order.isDelivered ? "Delivered" : "Mark as Delivered"}
                </button>
                <button
                  onClick={() => handlePaid(order._id)}
                  className={`text-white font-medium rounded-full h-10 text-sm px-5 py-2 ${
                    order.isPaid ? "bg-blue-500" : "bg-gray-400"
                  }`}
                  disabled={order.isPaid || role !== "seller"}
                >
                  Paid
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

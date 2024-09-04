import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from "../components/Navbar";
import { Backend_url } from '../constant';

export const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
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

  const handleApprove = (orderId) => {
    console.log(`Order ${orderId} approved`);
  };

  const handleReject = (orderId) => {
    console.log(`Order ${orderId} rejected`);
  };

  return (
    <>
      <NavBar back={"home"} />
      
      <div className="max-w-6xl mx-auto mt-20">
        {orders.length === 0 ? (
          <p className="text-center text-xl font-semibold text-gray-600">
            No orders yet
          </p>
        ) : (
          orders.map((order) => (
            <div key={order._id} className="border-solid border-2 border-gray-300 p-5 m-5 rounded-lg">
              <h2 className="text-xl font-semibold">Order ID: {order._id}</h2>
              <p className="text-gray-600 mt-2">Address: {order.shippingAddress.address}</p>
              <p className="text-gray-600">City: {order.shippingAddress.city}</p>
              <p className="text-gray-600">Postal Code: {order.shippingAddress.postalCode}</p>
              <p className="text-gray-600">Country: {order.shippingAddress.country}</p>
              <p className="text-gray-600 mt-2">Payment Method: {order.paymentMethod}</p>
              <p className="text-gray-600">Total Price: ${order.totalPrice}</p>
              <p className="text-gray-600">Created At: {new Date(order.createdAt).toLocaleDateString()}</p>
              <p className="text-gray-600">Updated At: {new Date(order.updatedAt).toLocaleDateString()}</p>
              
              {/* Approve/Reject Buttons
              <div className="mt-4">
                <button
                  onClick={() => handleApprove(order._id)}
                  className="text-white bg-green-500 hover:bg-green-700 font-medium rounded-full h-10 text-sm px-5 py-2 mr-2"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject(order._id)}
                  className="text-white bg-red-500 hover:bg-red-700 font-medium rounded-full h-10 text-sm px-5 py-2 mr-2"
                >
                  Reject
                </button>
              </div> */}

              {/* Status Buttons */}
              <div className="mt-4">
                <button
                  className={`text-white font-medium rounded-full h-10 text-sm px-5 py-2 mr-2 ${
                    order.isDelivered ? 'bg-green-500' : 'bg-gray-400'
                  }`}
                  disabled={order.isDelivered}
                >
                  Delivered
                </button>
                <button
                  className={`text-white font-medium rounded-full h-10 text-sm px-5 py-2 ${
                    order.isPaid ? 'bg-blue-500' : 'bg-gray-400'
                  }`}
                  disabled={order.isPaid}
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

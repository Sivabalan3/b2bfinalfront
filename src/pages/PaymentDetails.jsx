import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { View } from "../components/alt/View";
import { Text } from "../components/alt/Text";
import NavBar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Backend_url } from "../constant";

const PaymentsDetailsPage = () => {
  const [totalPrice, setTotalPrice] = useState("");
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const storedProductId = JSON.parse(localStorage.getItem("productId"));
    if (storedProductId) {
      axios
        .get(`${Backend_url}/api/products/${storedProductId}`)
        .then((response) => {
          const fetchedProduct = response.data;
          const deliveryTax = 40; // Fixed delivery tax amount
          const productPrice = fetchedProduct.price;
          const taxAmount = deliveryTax;
          const finalTotalPrice = productPrice + taxAmount;

          setProduct(fetchedProduct);
          setTotalPrice(finalTotalPrice);
        })
        .catch((error) => {
          console.error("Error fetching product details:", error);
        });
    }
  }, []);

  return (
    <>
      <NavBar name={"Payment Details"} back={"payments"} />
      <View className="p-4 mt-16">
        {/* Header Section */}
        <View className="bg-white shadow-md rounded-lg p-4 mb-2 flex items-center">
          <FaCheckCircle className="text-green-500 text-4xl mr-4" />
          <Text className="text-2xl font-bold">Payment Successful</Text>
        </View>

        {/* Payment Total */}
        <View className="bg-white shadow-md rounded-lg p-4 mb-4">
          <Text className="text-xl font-bold mb-2">Payment Total</Text>
          <Text className="text-2xl font-bold">₹{totalPrice}</Text>
        </View>

        {/* Payment Details Card */}
        <View className="bg-white shadow-md rounded-lg p-4 mb-4">
          <Text className="text-xl font-bold mb-4">Payment Details</Text>
          <div className="space-y-2">
            <div className="flex justify-between">
              <Text className="font-medium">Date:</Text>
              <Text className="text-gray-600">
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Text>
            </div>
            <div className="flex justify-between">
              <Text className="font-medium">ProductId:</Text>
              <Text className="text-gray-600">{product?.productId}</Text>
            </div>
            <div className="flex justify-between">
              <Text className="font-medium">Product Name:</Text>
              <Text className="text-gray-600">{product?.name}</Text>
            </div>
            <div className="flex justify-between">
              <Text className="font-medium">Total Payments:</Text>
              <Text className="text-gray-600">₹{product?.price}</Text>
            </div>
            <div className="flex justify-between">
              <Text className="font-medium">Tax (Delivery):</Text>
              <Text className="text-gray-600">₹40</Text>
            </div>
            <div className="flex justify-between">
              <Text className="font-medium">Total:</Text>
              <Text className="text-gray-600">₹{totalPrice}</Text>
            </div>
          </div>
        </View>

        {/* Buttons */}
        <div className="flex space-x-2">
          <Link
            to="/pdf-receipt"
            className="w-full p-3 bg-blue-400 text-white text-center rounded-lg shadow hover:bg-blue-600"
          >
            Get PDF Receipt
          </Link>
          <Link
            to="/chat"
            className="w-full p-3 bg-green-400 text-white text-center rounded-lg shadow hover:bg-gray-600"
          >
            Back to Chats
          </Link>
        </div>
      </View>
    </>
  );
};

export default PaymentsDetailsPage;

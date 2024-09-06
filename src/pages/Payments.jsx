import { useEffect, useState } from "react";
import { View } from "../components/alt/View";
import { Text } from "../components/alt/Text";
import NavBar from "../components/Navbar";
import { paymentMethods } from "../components/data/IconList";
import { debitMethods } from "../components/data/IconList";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
import { Backend_url } from "../constant";


const PaymentPage = () => {
  const navigate = useNavigate();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [selectedPaymentBank, setSelectedPaymentBank] = useState("");
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [totalPrice, setTotalPrice] = useState("");
  const [product, setProduct] = useState(null); // To store product details

  // Fetch product details when the component mounts
  useEffect(() => {
    const storedProductId = JSON.parse(localStorage.getItem("productId"));
    if (storedProductId) {
      axios
        .get(`${Backend_url}/api/products/${storedProductId}`)
        .then((response) => {
          setProduct(response.data); // Store product details
          setTotalPrice(response.data.price); // Set the product price in state
        })
        .catch((error) => {
          console.error("Error fetching product details:", error);
        });
    }
  }, []);

  const handleSelectMethod = (method) => {
    setSelectedMethod(method);
    Swal.fire({
      title: `Selected ${method}`,
      text: `Are you sure you want to proceed with ${method}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, proceed",
      cancelButtonText: "No, cancel",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Confirmed!",
          text: `Your payment has been done with ${method}`,
          icon: "success",
        });
        navigate("/paymentdata");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Cancelled",
          text: `Your payment was declined with ${method} by you.`,
          icon: "error",
        });
        setSelectedMethod(null); // Reset the selection
      }
    });
  };

  const handleBankSelection = () => {
    if (selectedPaymentBank) {
      Swal.fire({
        title: `Selected Bank: ${selectedPaymentBank}`,
        text: `Are you sure you want to proceed with ${selectedPaymentBank}?`,
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, proceed",
        cancelButtonText: "No, cancel",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Confirmed!",
            text: `You have selected ${selectedPaymentBank} for payment.`,
            icon: "success",
          });
          navigate("/paymentdata");
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire({
            title: "Cancelled",
            text: `You did not select ${selectedPaymentBank}.`,
            icon: "error",
          });
          setSelectedPaymentBank(""); // Reset the selection
        }
      });
    } else {
      Swal.fire({
        title: "No Bank Selected",
        text: "Please select a bank before proceeding.",
        icon: "warning",
      });
    }
  };

  return (
    <>
      <NavBar name={"payments"} back={"messages/1"} />
      <View className="p-4 mt-16">
        {/* Payment Information Card */}
        <View className="bg-white shadow-md rounded-lg p-2 mb-2 flex flex-col">
          <Text className="text-xl font-bold mb-2">Payment Information</Text>
          {/* Display product price if product is loaded */}
          {product ? (
            <Text className="text-gray-600 mb-1">
              Registration Amount: {product.price} + 40 Delivery Charges
            </Text>
          ) : (
            <Text>Loading product details...</Text>
          )}
        </View>

        {/* Payment Method Selection Card */}
        <View className="bg-white shadow-md rounded-lg p-2 mb-2">
          <Text className="text-xl font-bold mb-4">Select Payment Method</Text>
          <View className="grid grid-cols-4 gap-1">
            {paymentMethods.map((method) => (
              <label
                key={method.id}
                className="flex items-center border border-gray-300 rounded-lg cursor-pointer"
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method.id}
                  checked={selectedPaymentMethod === method.id}
                  onClick={() => handleSelectMethod(method.name)}
                  onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                  className="hidden"
                />
                <View className="flex flex-col items-center justify-center space-x-1 p-1">
                  <img
                    src={method.img}
                    alt={method.name}
                    className="w-10 h-10"
                  />
                  <Text className="font-medium text-xs text-left">
                    {method.name}
                  </Text>
                </View>
              </label>
            ))}
          </View>
        </View>

        {/* Net Banking Option */}
        <View className="bg-white shadow-md rounded-lg p-2 mb-2">
          <Text className="text-xl font-bold mb-2">Net Banking</Text>
          <select
            value={selectedPaymentBank}
            onChange={(e) => setSelectedPaymentBank(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="">Select your bank</option>
            <option value="SBI">State Bank of India</option>
            <option value="HDFC">HDFC Bank</option>
            <option value="ICICI">ICICI Bank</option>
            <option value="AXIS">Axis Bank</option>
          </select>
          <button
            className="mt-2 w-full bg-green-400 text-white py-1 px-2 rounded-lg"
            onClick={handleBankSelection}
          >
            Next
          </button>
        </View>

        {/* Payment Methods */}
        <div className="bg-white p-2 rounded-lg shadow mb-2">
          <h2 className="text-xl font-bold mb-2">Select Payment Method</h2>
          <div className="flex justify-around">
            {debitMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => handleSelectMethod(method.name)}
                className={`border w-full flex items-center justify-center flex-col m-1 rounded-lg ${
                  selectedMethod === method.name
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
              >
                <img
                  src={method.img}
                  alt={method.name}
                  className="h-20 w-20 object-contain"
                />
              </button>
            ))}
          </div>
        </div>
      </View>
    </>
  );
};

export default PaymentPage;

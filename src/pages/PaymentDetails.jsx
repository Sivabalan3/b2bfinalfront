import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import { View } from '../components/alt/View';
import { Text } from '../components/alt/Text';
import NavBar from '../components/Navbar';

const PaymentsDetailsPage = () => {
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
          <Text className="text-2xl font-bold">₹1180</Text>
        </View>

        {/* Payment Details Card */}
        <View className="bg-white shadow-md rounded-lg p-4 mb-4">
          <Text className="text-xl font-bold mb-4">Payment Details</Text>
          <div className="space-y-2">
            <div className="flex justify-between">
              <Text className="font-medium">Date:</Text>
              <Text className="text-gray-600">August 21, 2024</Text>
            </div>
            <div className="flex justify-between">
              <Text className="font-medium">Ref Number:</Text>
              <Text className="text-gray-600">ABC123456789</Text>
            </div>
            <div className="flex justify-between">
              <Text className="font-medium">Account:</Text>
              <Text className="text-gray-600">1234567890</Text>
            </div>
            <div className="flex justify-between">
              <Text className="font-medium">Total Payments:</Text>
              <Text className="text-gray-600">₹1000</Text>
            </div>
            <div className="flex justify-between">
              <Text className="font-medium">Tax:</Text>
              <Text className="text-gray-600">₹180</Text>
            </div>
            <div className="flex justify-between">
              <Text className="font-medium">Total:</Text>
              <Text className="text-gray-600">₹1180</Text>
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
            to="/messages"
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

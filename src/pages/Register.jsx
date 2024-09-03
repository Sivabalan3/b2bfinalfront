
import React, { useState } from 'react';
import logo from "../assets/logo.jpg";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { View } from '../components/alt/View';
import { Image } from "../components/alt/Image";
import { TextInput } from "../components/alt/TextInput";
import { Text } from "../components/alt/Text";
import { useAuth } from "../provider/AuthProvider";

const Register = () => {
  const { register } = useAuth();
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    contactNo: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if passwords match
    if (inputs.password !== inputs.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
  
    // Clear any previous errors
    setError("");
  
    // Log the inputs to ensure they're correct
    console.log('Form Data:', inputs);
  
    // Call the register function from AuthProvider
    try {
      await register(inputs.username, inputs.email, inputs.password, inputs.contactNo);
      // Redirect or show a success message
    } catch (error) {
      console.error('Registration failed', error);
      setError("Registration failed. Please try again.");
    }
  };
  

  return (
    <View className="flex items-center justify-center h-screen bg-white p-8">
      <View className="w-full max-w-sm bg-white text-8 rounded-lg">
        <Link to="/">
          <FaChevronLeft className="absolute top-7 left-7" />
        </Link>

        <View className="flex flex-col text-left items-center mt-5">
          <Image src={logo} alt="logo_b" className="w-36" />
        </View>
        <form onSubmit={handleSubmit}>
          <View className="mb-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Name
            </label>
            <TextInput
              className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              id="username"
              name="username"
              value={inputs.username}
              onChangeText={handleChange}
              placeholder="Enter your Name"
            />
          </View>
          <View className="mb-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <TextInput
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              type="email"
              id="email"
              name="email"
              value={inputs.email}
              onChangeText={handleChange}
              placeholder="Enter your Email"
            />
          </View>
          <View className="mb-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="contactNo"
            >
              Contact No
            </label>
            <TextInput
              className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              id="contactNo"
              name="contactNo"
              value={inputs.contactNo}
              onChangeText={handleChange}
              placeholder="Enter your Contact No"
            />
          </View>
          <View className="mb-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <TextInput
              className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              type="password"
              id="password"
              name="password"
              value={inputs.password}
              onChangeText={handleChange}
              placeholder="Enter your password"
            />
          </View>
          <View className="mb-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <TextInput
              className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={inputs.confirmPassword}
              onChangeText={handleChange}
              placeholder="Enter your password again"
            />
          </View>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Text className="text-center text-gray-600 text-sm mt-3">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </Text>
          <button
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 mt-4"
            type="submit"
          >
            Register
          </button>
        </form>
      </View>
    </View>
  );
};

export default Register;

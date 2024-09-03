/* eslint-disable react/no-unescaped-entities */
import logo from "../assets/logo.jpg";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { View } from '../components/alt/View';
import { Image } from "../components/alt/Image";
import { Text } from "../components/alt/Text";
import { TextInput } from "../components/alt/TextInput";
import { useState } from "react";
import { useAuth } from "../provider/AuthProvider";

const Login = () => {
  const { login } = useAuth();
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const valueChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs.email, inputs.password);
    } catch (error) {
      console.error('Login failed:', error);
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <View className="flex items-center justify-center h-screen bg-white">
      <View className="w-full max-w-sm bg-white pt-0 pl-8 pr-8 pb-15 rounded-lg ">
        <Link to="/register">
          <FaChevronLeft className="absolute top-7 left-7" />
        </Link>
        <View className="flex flex-col text-left items-center mb-5">
          <Image src={logo} alt="logo_b" className="w-36" />
        </View>
        <form onSubmit={handleLogin}>
          <View className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <TextInput
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              id="username"
              name="email"
              placeholder="Enter your email"
              value={inputs.email}
              onChangeText={valueChange}
            />
          </View>
          <View className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <TextInput
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={inputs.password}
              onChangeText={valueChange}
            />
          </View>
          {error && <Text className="text-red-500 text-sm mb-4">{error}</Text>}
          <Text className="text-center text-gray-600 text-sm mt-6">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </Text>
          <button
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 mt-6"
            type="submit"
          >
            Login
          </button>
        </form>
      </View>
    </View>
  );
};

export default Login;

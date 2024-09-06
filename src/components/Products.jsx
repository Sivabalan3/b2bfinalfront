import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { View } from "./alt/View";
import { Text } from "./alt/Text";
import { Image } from "./alt/Image";
import { Button } from "./alt/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { Backend_url } from "../constant";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [quoteMessage, setQuoteMessage] = useState(''); // For feedback on quotes
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch products from the API
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${Backend_url}/api/products`);
        setProducts(response.data.products); // Accessing the products array from the response
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Function to handle "Get Quotes" click
  const handleGetQuote = async (productId) => {
    try {
      const response = await axios.post(`${Backend_url}/api/quotes/create`, { productId });
      if (response.status === 201) {
        setQuoteMessage(`Quote created for product ID: ${productId}`);
      }
      localStorage.setItem("productId", JSON.stringify(productId));
      navigate('/chat')
    } catch (error) {
      console.error("Error creating quote:", error);
      setQuoteMessage('Error creating quote');
    }
  };

  return (
    <View className="p-2 mt-20">
      {/* Trending Products Heading */}
      <View className="flex justify-between items-center mb-6">
        <Text className="text-xl font-bold border-b-2 pb-1 pr-4 border-black">
          Trending Products
        </Text>
        <Link to="/categories">
          <Button
            className="text-green-400 rounded-3xl border-2 p-1 pl-2 pr-2 border-green-400"
            names={"View All"}
          />
        </Link>
      </View>

      {/* Products Grid */}
      <View className="grid grid-cols-2 gap-3">
        {products.slice(0, 6).map((product) => (
          <View
            key={product.productId}  // Use productId as key
            className="relative bg-white flex p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 justify-center items-center"
          >
            {/* Display productId in the top-right corner */}
            <View className="absolute top-2 right-2 text-xs text-gray-500 font-bold bg-white border-2 border-green-400 rounded-full px-2 py-1">
              Id: {product.productId}
            </View>

            <View className="">
              <Image
                src={`${Backend_url}/api/image/${product.image.split('/').pop()}`}
                alt={product.name}
                className="w-28 h-28 border-2 border-gray-400 object-cover rounded-full p-1"
              />
              <View className="mt-4 text-center flex flex-col">
                <Text className="text-lg font-semibold">{product.name}</Text>
                <Button
                  className="px-4 py-2 bg-green-400 text-white rounded-3xl hover:bg-blue-600 transition duration-300"
                  names={"Get Quotes"}
                  onClick={() => handleGetQuote(product.productId)}  // Pass the productId
                />
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Products;

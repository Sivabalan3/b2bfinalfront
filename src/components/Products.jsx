import products from "./data/ProductList";
import { View } from "./alt/View";
import { Text } from "./alt/Text";
import { Image } from "./alt/Image";
import { Button } from "./alt/Button";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <View className="p-2 mt-20">
      {/* Trending Products Heading */}

      <View className="flex justify-between items-center mb-6">
        <Text className="text-xl font-bold border-b-2 pb-1 pr-4 border-black">
          Trending Products
        </Text>
        <Link to={"/categories"}>
        <Button
          className="text-green-400 rounded-3xl border-2 p-1 pl-2 pr-2 border-green-400 "
          names={"View All"}
          />
          </Link>
      </View>
      {/* Products Grid */}
      <View className="grid grid-cols-2 gap-3">
        {products.map((product) => (
          <View
            key={product.id}
            className="bg-white flex p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 justify-center items-center"
          >
            <Link
              to={`/shopping/${product.id}`}
              key={product.id}
              className=""
            >
              <Image
                src={product.image}
                alt={product.name}
                className="w-28 h-28 border-2 border-gray-400 object-cover rounded-full p-1"
              />
              <View className="mt-4 text-center flex flex-col">
                <Text className="text-lg font-semibold">{product.name}</Text>
                <Button
                  className="px-4 py-2 bg-green-400 text-white rounded-3xl hover:bg-blue-600 transition duration-300"
                  names={"get Quotes"}
                />
              </View>
            </Link>
          </View>
        ))}
      </View>
    </View>
  );
};
export default Products;

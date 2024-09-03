import { Link } from "react-router-dom";
import categories from './data/CategoryList'; 
import { View } from "./alt/View";
import { Text } from "./alt/Text";
import { Image } from "./alt/Image";

const Categories = () => {
  return (
    <View className="p-6">
      {/* Heading */}
      <Text className="text-2xl font-bold mb-6">Top Categories</Text>
      
      {/* Categories Grid */}
      <View className="space-y-6">
        {categories.map(category => (
          <Link to={`/${category.link}`} key={category.id}>
            <View className="bg-white mb-4 mt-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <View className="p-4 bg-gray-100 rounded-t-lg">
                <Text className="text-xl font-semibold">{category.name}</Text>
              </View>
              <View className="flex p-4">
                <Image 
                  src={category.image} 
                  alt={category.name} 
                  className="w-24 h-24 object-cover rounded-lg mr-4"
                />
                <View className="flex flex-col justify-center">
                  <Text className="text-gray-500 text-sm">{category.description}</Text>
                </View>
              </View>
            </View>
          </Link>
        ))}
      </View>
    </View>
  );
};

export default Categories;

import bg from "../assets/bg.png";
import { Link } from "react-router-dom";
import { Image } from "../components/alt/Image";
import {View} from '../components/alt/View'
import  {Text}  from "../components/alt/Text";

const Welcome = () => {
  return (
    <View className="flex flex-col items-center justify-center h-screen bg-white">
      <Text className="text-4xl font-bold mb-4">Welcome</Text>
      <Text className="text-xl mb-6">TO B2B MART</Text>
      <Image src={bg} alt="Welcome" className="mb-8 w-36 h-36" />
      <Link to="/register">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
          Get Started
        </button>
      </Link>
    </View>
  );
};
export default Welcome;

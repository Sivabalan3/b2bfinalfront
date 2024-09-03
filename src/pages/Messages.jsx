// Messages.js
import { View } from '../components/alt/View';
import { Text } from '../components/alt/Text';
import users from '../components/data/UsersLists';
import { IoCall } from "react-icons/io5";
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';

const Messages = () => {
  return (
    <>
      <NavBar name={"Messages"} input={false} back={"home"} />
      <View className="p-4 mt-16">
        <Text className="text-xl font-bold mb-4">Messages</Text>
        <View className="grid gap-4">
          {users.map((user) => (
            <Link key={user.id} to={`/messages/${user.id}`} className="ml-4">
            <View
              key={user.id}
              className="flex items-center p-4 bg-white shadow rounded-lg hover:bg-gray-100 transition-colors"
            >
              <img
                src={user.profilePhoto}
                alt={user.name}
                className="w-16 h-16 rounded-full mr-4 object-cover"
              />
              <View className="flex flex-col flex-grow">
                <Text className="font-bold text-lg">{user.name}</Text>
                <Text className="text-gray-500">{user.company}</Text>
                <Text className="text-gray-500">{user.shopName}</Text>
              </View>
                <IoCall className="text-4xl text-white bg-green-400 rounded-full p-1 hover:text-green-700 transition-colors" />
            </View>
          </Link>
          ))}
        </View>
      </View>
    </>
  );
};

export default Messages;

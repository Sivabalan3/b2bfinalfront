import {FaBox} from "react-icons/fa";
import { Link } from "react-router-dom";

const NewOrderCard = () => {
  return (
    <Link to="/orders">
      <div className="flex justify-center mt-6">
        <div className="bg-white shadow-md border-2 rounded-lg p-4 flex flex-col justify-center items-center hover:shadow-lg transition-shadow duration-300 mb-20 w-48">
          <FaBox className="h-16 w-16 text-green-400" />
          <button className="mt-4 px-6 py-2 bg-green-400 text-white rounded-3xl hover:bg-green-500 transition duration-300">
            New Order
          </button>
        </div>
      </div>
    </Link>
  );
};

export default NewOrderCard;

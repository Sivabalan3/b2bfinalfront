import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const AddCategoryCard = () => {
  return (
    <Link to="/createcategory">
      <div className="flex justify-center border-b-4">
      <div className="bg-white shadow-md border-2 rounded-lg p-4 flex flex-col justify-center items-center hover:shadow-lg transition-shadow duration-300 mt-20 w-48 mb-6">
        <AiOutlinePlus className="h-16 w-16 text-green-400" />
        <button className="mt-4 px-6 py-2 bg-green-400 text-white rounded-3xl hover:bg-green-500 transition duration-300">
          Add Category
        </button>
      </div>
      </div>
    </Link>
  );
};

export default AddCategoryCard;

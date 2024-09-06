import { useNavigate } from "react-router-dom";
import { Backend_url } from "../constant";

export const Categories = ({ categories }) => {
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  const handleCategoryClick = (categoryName) => {
    localStorage.setItem("selectedCategory", categoryName); // Store category name in localStorage
    navigate("/productlist"); // Navigate to the product list page
  };

  return (
    <>
      <div className="grid gap-x-4 gap-y-4 grid-cols-1 p-2 ">
        {categories.map((cat) => (
          <div
            key={cat._id}
            className="bg-white -z-1 shadow-md rounded-lg p-3 flex flex-col items-center"
          >
            {cat.image && (
              <img
                src={`${Backend_url}/api/image/${cat.image.split("/").pop()}`}
                alt={cat.name}
                className="h-32 w-32 object-cover mb-2 rounded-md"
              />
            )}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{cat.name}</h3>
            <button
              onClick={() => handleCategoryClick(cat.name)} // Set category name in localStorage on click
              className="bg-green-400 text-white font-semibold py-2 px-4 rounded-md mt-2"
            >
              View Products
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
